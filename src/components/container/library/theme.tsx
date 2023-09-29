"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function Theme(darkMode: boolean, setTheme: (theme: string) => void, theme?: string) {
  if (theme === "dark" && !darkMode) {
    setTheme("light");
  } else if (theme === "light" && darkMode) {
    setTheme("dark");
  }
}

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
