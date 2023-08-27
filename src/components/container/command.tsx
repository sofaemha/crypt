"use client";

import { useEffect, ReactNode, Dispatch, SetStateAction, useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { useTheme } from "next-themes";
import Icon from "@/components/container/icon";

export function Command({ showCommand, setCommand, toggleCommand }: { showCommand: boolean; setCommand: Dispatch<SetStateAction<boolean>>; toggleCommand: () => void }) {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "X" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        toggleCommand();
      }
      if (e.key === "Z" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        setDarkMode((darkMode) => !darkMode);
      }
      if (e.key === "G" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        window.open("/admin/", "_self");
      }
      if (e.key === "V" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault();
        window.open("https://supabase.com/dashboard/", "_blank");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function Item({ children, shortcut, onSelect = () => {} }: { children: ReactNode; shortcut?: string; onSelect?: (value: string) => void }) {
    const text = shortcut === undefined ? "" : shortcut;
    return (
      <CommandItem onSelect={onSelect} className="cursor-pointer">
        {children}
        <CommandShortcut className="mr-2 inline-flex flex-row gap-1">
          {text.length < 1
            ? ""
            : text.split(" ").map((key) => {
                return (
                  <kbd key={key} className="w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 dark:text-white">
                    {key}
                  </kbd>
                );
              })}
        </CommandShortcut>
      </CommandItem>
    );
  }
  return (
    <>
      <CommandDialog open={showCommand} onOpenChange={setCommand}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Account">
            <Item
              shortcut="⌘ ⇧ G"
              onSelect={() => {
                window.open("/admin/", "_self");
              }}>
              <Icon iconName="LuUser" iconFolder="lu" iconProps={{ className: "h-4 w-4" }} />
              <span className="ml-2">Admin</span>
            </Item>
            <Item
              shortcut="⌘ ⇧ V"
              onSelect={() => {
                window.open("https://supabase.com/dashboard/", "_blank");
              }}>
              <Icon iconName="LuZap" iconFolder="lu" iconProps={{ className: "h-4 w-4" }} />
              <span className="ml-2">Supabase</span>
            </Item>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social Media">
            <Item
              onSelect={() => {
                window.open("https://sofa.my.id/", "_blank");
              }}>
              <Icon iconName="LuGlobe" iconFolder="lu" iconProps={{ className: "h-4 w-4" }} />
              <span className="ml-2">Website</span>
            </Item>
            <Item
              onSelect={() => {
                window.open("https://github.com/sofaemha/", "_blank");
              }}>
              <Icon iconName="LuGithub" iconFolder="lu" iconProps={{ className: "h-4 w-4" }} />
              <span className="ml-2">GitHub</span>
            </Item>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <Item
              shortcut="⌘ ⇧ Z"
              onSelect={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}>
              {theme === "dark" ? <Icon iconName="LuSun" iconFolder="lu" iconProps={{ className: "h-4 w-4" }} /> : <Icon iconName="LuMoon" iconFolder="lu" iconProps={{ className: "h-4 w-4" }} />}
              <span className="ml-2">{theme === "dark" ? "Light" : "Dark"} Mode</span>
            </Item>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}