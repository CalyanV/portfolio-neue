import Navbar from "@/components/navbar";
import { ParticlesBackground } from "@/components/particles-background";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const acorn = localFont({
  src: "../fonts/Acorn-Medium.woff",
  variable: "--font-acorn",
});

const siteConfig = {
  name: DATA.name,
  url: DATA.url,
  description: DATA.description,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${siteConfig.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

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
          raleway.variable,
          acorn.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ParticlesBackground />
          <ScrollToTop />
          <TooltipProvider delayDuration={0}>
            <div className="relative">
              <div className="mx-auto py-12 sm:py-24 px-6">
                {children}
                <Navbar />
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
