import type { Metadata } from "next";
import { HubIndexPage, hubIndexMetadataFor } from "@/components/hub-page";
import { hubIndexIndexable } from "@/lib/hubs";
import { alternatesFor } from "@/lib/seo";
import { hubIndexPageKey } from "@/lib/routes/hubs";

const { title, description } = hubIndexMetadataFor("camping");
const indexable = hubIndexIndexable("camping");

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/camping/", languages: indexable ? alternatesFor(hubIndexPageKey("camping")) : undefined },
  openGraph: { type: "website", siteName: "KiwiCamping", locale: "en_NZ", title, description, url: "/camping/", images: [{ url: "/images/kiwicamping-og.webp", width: 1200, height: 630, alt: "KiwiCamping" }] },
  robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true } },
};

export default function HubIndexRoute() {
  return <HubIndexPage kind="camping" />;
}
