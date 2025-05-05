import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import ConsultationCTASection from "@/components/landing/consultation-cta-section";
import Footer from "@/components/footer";
import Particles from "@/components/magicui/particles";
import CrispChat from "@/components/crisp-chat";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Altiverr | Automation & Systems Architecture for Lean Teams",
    template: "%s | Altiverr"
  },
  description: "We help lean teams eliminate manual work, automate operations, and build scalable backend systems using our proven PEAK Framework.",
  keywords: ["automation", "systems architecture", "PEAK Framework", "business operations", "backend systems", "process automation"],
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
    title: 'Altiverr | Automation & Systems Architecture for Lean Teams',
    description: 'We help lean teams eliminate manual work, automate operations, and build scalable backend systems using our proven PEAK Framework.',
    siteName: 'Altiverr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altiverr | Automation & Systems Architecture for Lean Teams',
    description: 'We help lean teams eliminate manual work, automate operations, and build scalable backend systems using our proven PEAK Framework.',
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
  }
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
          <Providers>
            <div className="relative flex flex-col min-h-screen">
              {/* Full-screen particles background */}
              <div className="fixed inset-0 pointer-events-none">
                <Particles
                  className="w-full h-full"
                  quantity={1500}
                  ease={200}
                  size={0.18}
                  staticity={20}
                  color={"#ffffff"}
                />
              </div>
              
              <SiteHeader />
              <main className="flex-1 w-full">
                {children}
              </main>
              
              {/* Full-width sections */}
              <ConsultationCTASection />
              <Footer />
            </div>
            <Toaster />
            <CrispChat />
          </Providers>
        </ThemeProvider>
        {gaId && process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId={gaId} />
        )}
      </body>
    </html>
  );
}
