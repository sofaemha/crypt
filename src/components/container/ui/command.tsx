"use client";
import { useEffect, ReactNode, Dispatch, SetStateAction, useState } from "react";
import { useTheme } from "next-themes";
import { getCookies  } from 'cookies-next';
import Icon from "@/components/container/library/icon";
import Alert from "@/components/container/ui/wary";
import { Theme } from "@/components/container/library/theme";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";

export function Command({ showCommand, setCommand, toggleCommand, session }: { showCommand: boolean; setCommand: Dispatch<SetStateAction<boolean>>; toggleCommand: () => void; session: Record<string, unknown> | null }) {
  const [darkMode, setDarkMode] = useState(true);
  const [alert, setAlert] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(getCookies());
  const shortcut = (e: KeyboardEvent) => {
    if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
      e.preventDefault();
      toggleCommand();
    }
    if (e.key === "Z" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
      e.preventDefault();
      setDarkMode((darkMode) => !darkMode);
    }
    if (e.key === "V" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
      e.preventDefault();
      window.open("/admin/", "_self");
    }
    if (e.key === "B" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
      e.preventDefault();
      window.open("https://supabase.com/dashboard/", "_blank");
    }
  };

  useEffect(() => {
    Theme(darkMode, setTheme, theme);
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, [darkMode]);

  function Item({ children, shortcut, onSelect = () => {} }: { children: ReactNode; shortcut?: string; onSelect?: (value: string) => void }) {
    const text = shortcut === undefined ? "" : shortcut;
    return (
      <CommandItem onSelect={onSelect} className="cursor-pointer">
        {children}
        <CommandShortcut className="mr-2 inline-flex flex-row gap-1">
          {text.length > 1
            ? text.split(" ").map((key) => {
                return (
                  <kbd key={key} className="w-5 h-5 min-w-[20px] m-0 rounded flex items-center justify-center uppercase bg-gradient-to-tl bg-white from-slate-200 dark:from-[#565872] dark:to-[#31355b]">
                    {key}
                  </kbd>
                );
              })
            : ""}
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
              shortcut="⌘ ⇧ V"
              onSelect={() => {
                window.open("/admin/", "_self");
              }}>
              <Icon iconName={session ? "LuLogOut" : "LuLogIn"} iconFolder="lu" iconProps={{ className: "h-4 w-4" }} />
              <span className="ml-2">Sign {session ? "Out" : "In"}</span>
            </Item>
            <Item
              shortcut="⌘ ⇧ B"
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
              <Icon iconName={theme === "dark" ? "LuSun" : "LuMoon"} iconFolder="lu" iconProps={{ className: "h-4 w-4" }} />
              <span className="ml-2">{theme === "dark" ? "Light" : "Dark"} Mode</span>
            </Item>
            <Item
              shortcut="⌘ K"
              onSelect={() => {
                toggleCommand();
              }}>
              <Icon iconName="LuCommand" iconFolder="lu" iconProps={{ className: "h-4 w-4" }} />
              <span className="ml-2">Command</span>
            </Item>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <Alert open={alert} setOpen={setAlert} title="Warning" description="" />
    </>
  );
}
