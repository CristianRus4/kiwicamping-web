import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage, hubMetadataFor } from "@/components/hub-page";
import { getHub, hubsOfKind } from "@/lib/hubs";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

/** Built hubs only. A hub below the build floor has no page at all (lib/hubs.ts). */
export function generateStaticParams() {
  return hubsOfKind("freedom-camping").map((hub) => ({ district: hub.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ district: string }> }): Promise<Metadata> {
  const hub = getHub("freedom-camping", (await params).district);
  if (!hub) return {};
  const { title, description, indexable } = hubMetadataFor(hub);
  return {
    title, description,
    alternates: { canonical: hub.path },
    openGraph: { type: "website", siteName: "KiwiCamping", locale: "en_NZ", title, description, url: `${SITE_URL}${hub.path}`, images: [{ url: "/images/kiwicamping-og.webp", width: 1200, height: 630, alt: "KiwiCamping" }] },
    // Below the quality gate a hub is still built for visitors, but kept out of search.
    robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true } },
  };
}

export default async function HubRoute({ params }: { params: Promise<{ district: string }> }) {
  const hub = getHub("freedom-camping", (await params).district);
  if (!hub) notFound();
  return <HubPage hub={hub} />;
}
