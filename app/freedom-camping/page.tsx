import type { Metadata } from "next";
import { HubIndexPage, hubIndexMetadataFor } from "@/components/hub-page";
import { hubIndexIndexable } from "@/lib/hubs";

const { title, description } = hubIndexMetadataFor("freedom-camping");
const indexable = hubIndexIndexable("freedom-camping");

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/freedom-camping/" },
  openGraph: { type: "website", siteName: "KiwiCamping", locale: "en_NZ", title, description, url: "/freedom-camping/", images: [{ url: "/images/kiwicamping-og.webp", width: 1200, height: 630, alt: "KiwiCamping" }] },
  robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true } },
};

export default function HubIndexRoute() {
  return <HubIndexPage kind="freedom-camping" />;
}
