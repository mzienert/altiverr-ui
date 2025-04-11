import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Altiverr | AI-Powered Freelance Platform",
    template: "%s | Altiverr"
  },
  description: "Altiverr is an AI-powered freelance platform connecting talented professionals with clients worldwide. Find the perfect freelancer or showcase your skills.",
  keywords: ["freelance", "AI", "remote work", "freelance platform", "hire freelancers", "find work"],
  authors: [{ name: "Altiverr Team" }],
  creator: "Altiverr",
  publisher: "Altiverr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://altiverr.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://altiverr.com',
    title: 'Altiverr | AI-Powered Freelance Platform',
    description: 'Altiverr is an AI-powered freelance platform connecting talented professionals with clients worldwide.',
    siteName: 'Altiverr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altiverr | AI-Powered Freelance Platform',
    description: 'Altiverr is an AI-powered freelance platform connecting talented professionals with clients worldwide.',
    creator: '@altiverr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {gaId && process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        {gaId && process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId={gaId} />
        )}
      </body>
    </html>
  );
}
