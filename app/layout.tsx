import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import Analytics from "@/components/analytics";
import { Suspense } from "react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Altiverr | ",
  description: "The startup template from Magic UI",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

// Initialize analytics page tracking
if (typeof window !== 'undefined') {
  analytics.page();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Suspense>
          <Analytics />
        </Suspense>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
