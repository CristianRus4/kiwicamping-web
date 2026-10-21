import type { Metadata } from "next";
import { HubIndexPage, hubIndexMetadataFor } from "@/components/hub-page";
import { hubIndexIndexable } from "@/lib/hubs";
import { alternatesFor, homeOgImage } from "@/lib/seo";
import { hubIndexPageKey } from "@/lib/routes/hubs";

const { title, description } = hubIndexMetadataFor("freedom-camping");
const indexable = hubIndexIndexable("freedom-camping");

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/freedom-camping/", languages: indexable ? alternatesFor(hubIndexPageKey("freedom-camping")) : undefined },
  openGraph: { type: "website", siteName: "KiwiCamping", locale: "en_NZ", title, description, url: "/freedom-camping/", images: [{ ...homeOgImage, alt: "KiwiCamping" }] },
  robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true } },
};

export default function HubIndexRoute() {
  return <HubIndexPage kind="freedom-camping" />;
}
