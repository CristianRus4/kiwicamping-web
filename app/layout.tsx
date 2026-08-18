import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "KiwiCamping | Explore New Zealand", template: "%s | KiwiCamping" },
  description: "Find campsites, caravan parks, stays and useful road trip stops across New Zealand.",
  applicationName: "KiwiCamping",
  keywords: ["New Zealand camping app", "campgrounds New Zealand", "caravan parks New Zealand", "road trip planner New Zealand", "free camping New Zealand"],
  authors: [{ name: "KiwiCamping" }],
  creator: "KiwiCamping",
  publisher: "KiwiCamping",
  alternates: { canonical: "/", languages: { "en-NZ": "/", "de-DE": "/de", "es-ES": "/es", "fr-FR": "/fr", "it-IT": "/it", "nl-NL": "/nl", "pt-PT": "/pt", "x-default": "/" } },
  openGraph: { type: "website", locale: "en_NZ", siteName: "KiwiCamping", title: "New Zealand is big. Your plan can be simple.", description: "Find 4,500+ places, know what is there and plan the road trip.", url: SITE_URL, images: [{ url: "/images/kiwicamping-hero.webp", width: 1000, height: 1500, alt: "KiwiCamping, the camping and road trip app for New Zealand" }] },
  twitter: { card: "summary_large_image", title: "KiwiCamping", description: "Find camps. Know what is there. Build the road trip.", images: ["/images/kiwicamping-hero.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/images/kiwicamping-app-icon.png", shortcut: "/images/kiwicamping-app-icon.png", apple: "/images/kiwicamping-app-icon.png" },
  other: { "apple-itunes-app": "app-id=6746952595" },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#111410" },
  ],
};

// Kept inline and marked data-static-tools so the static export preserves it (the exporter strips
// all other scripts). Adds .is-scrolled once the page moves, so the header is invisible at the top.
const headerScroll = `(function(){var h=document.querySelector(".site-header");if(!h)return;var f=function(){h.classList.toggle("is-scrolled",window.scrollY>8)};f();addEventListener("scroll",f,{passive:true})})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-NZ"><body className={sans.variable}>{children}<script data-static-tools dangerouslySetInnerHTML={{ __html: headerScroll }} /></body></html>;
}
