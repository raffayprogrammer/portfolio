import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {/* Decorative layers — behind everything, never interactive */}
        <div className="ambient" aria-hidden="true" />
        <div className="grid-veil" aria-hidden="true" />

        <a
          href="#work"
          className="sr-only rounded-lg bg-primary px-4 py-2 text-sm text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100"
        >
          Skip to content
        </a>

        {children}
      </body>
    </html>
  );
}
