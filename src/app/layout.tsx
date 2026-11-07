import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import "./globals.css";

/** Display face — a grotesk with Swiss bones and a little warmth. */
const display = Familjen_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

/** Every label, figure, date and tag on the site is set in this. */
const mono = IBM_Plex_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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

/** Matches --paper / --paper in the dark block, so the browser chrome
 *  follows the page instead of flashing against it. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f10" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {children}
      </body>
    </html>
  );
}
