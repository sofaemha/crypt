import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/container/theme";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION || "",
  keywords: process.env.NEXT_PUBLIC_KEYWORD || "",
  applicationName: process.env.NEXT_PUBLIC_APPLICATION_NAME,
  viewport: process.env.NEXT_PUBLIC_VIEWPORT || "",
  authors: [{ name: process.env.NEXT_PUBLIC_ADMINISTRATOR_NAME, url: process.env.NEXT_PUBLIC_ADMINISTRATOR_WEBSITE || "" }],
  formatDetection: { telephone: false, date: false, email: false, address: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-slate-50 dark:bg-slate-950">
        <ThemeProvider attribute="class">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
