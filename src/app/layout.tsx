import "@/styles/globals.css";
import { env } from "process";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/container/library/theme";

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_META_T,
  description: env.NEXT_PUBLIC_META_D || "",
  keywords: env.NEXT_PUBLIC_META_K || "",
  applicationName: env.NEXT_PUBLIC_APP_N,
  viewport: env.NEXT_PUBLIC_META_V || "",
  authors: [{ name: env.NEXT_PUBLIC_ADMIN_N, url: env.NEXT_PUBLIC_ADMIN_W || "" }],
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
