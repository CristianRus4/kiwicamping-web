import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { smartBannerContent } from "@/lib/app-store";
import { analyticsEnabled, analyticsScript } from "@/lib/analytics";
import { englishLocale } from "@/lib/locales";
import { defaultOgLocale, ogAlternates } from "@/lib/seo";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KiwiCamping: NZ Camping Map, DOC Sites & Road Trip Planner",
    template: "%s | KiwiCamping",
  },
  description:
    "Find 6,500+ campsites, DOC huts, holiday parks and freedom camping areas across New Zealand. Offline place details, sharp filters and a stop-by-stop road trip planner for iPhone.",
  applicationName: "KiwiCamping",
  keywords: [
    "camping app New Zealand", "NZ camping map", "freedom camping NZ", "DOC campsites app",
    "DOC huts map", "holiday parks New Zealand", "campervan app New Zealand", "self contained camping NZ",
    "offline camping map NZ", "New Zealand road trip planner", "dump stations NZ", "South Island camping",
    "North Island camping", "best camping app NZ", "campsites near me New Zealand",
  ],
  category: "travel",
  authors: [{ name: "KiwiCamping" }],
  creator: "KiwiCamping",
  publisher: "KiwiCamping",
  openGraph: {
    type: "website",
    locale: defaultOgLocale,
    alternateLocale: ogAlternates("en"),
    siteName: "KiwiCamping",
    title: "KiwiCamping: the camping map and road trip planner for New Zealand",
    description:
      "6,500+ campsites, DOC huts, holiday parks and freedom camping areas, bundled offline. Filter, save and plan the whole trip.",
    url: SITE_URL,
    // A 1200x630 card. The hero screenshot used to fill this slot, and being 1000x1500 it was
    // centre-cropped to a strip by every social preview that rendered it.
    images: [{ url: "/images/kiwicamping-og.webp", width: 1200, height: 630, alt: "KiwiCamping, the camping and road trip app for New Zealand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KiwiCamping: NZ camping map and road trip planner",
    description: "6,500+ New Zealand places offline. Filter, save and plan the whole road trip.",
    images: ["/images/kiwicamping-og.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/images/kiwicamping-app-icon.png", shortcut: "/images/kiwicamping-app-icon.png", apple: "/images/kiwicamping-app-icon.png" },
  other: { "apple-itunes-app": smartBannerContent("en") },
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

// GA4 and Consent Mode (lib/analytics.ts). First in <body> so the consent defaults are set before
// anything else can send data; marked data-static-keep so the static export keeps it.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Every route renders this one <html>; the exporter sets each locale page's lang from the registry.
  return <html lang={englishLocale.htmlLang}><body className={sans.variable}>{analyticsEnabled && <script data-static-keep="analytics" dangerouslySetInnerHTML={{ __html: analyticsScript() }} />}{children}<script data-static-tools dangerouslySetInnerHTML={{ __html: headerScroll }} /></body></html>;
}
