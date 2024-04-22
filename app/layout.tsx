import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster"

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text Translate",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressContentEditableWarning>
      <body
        className={cn(font.className, "bg-white dark:bg-[#313338]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="translate-app"
          disableTransitionOnChange>
            <Toaster/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
