import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage, hubMetadataFor } from "@/components/hub-page";
import { getHub, hubsOfKind } from "@/lib/hubs";
import { SITE_URL } from "@/lib/site";
import { alternatesFor, homeOgImage } from "@/lib/seo";
import { hubPageKey } from "@/lib/routes/hubs";

export const dynamicParams = false;

/** Built hubs only. A hub below the build floor has no page at all (lib/hubs.ts). */
export function generateStaticParams() {
  return hubsOfKind("huts").map((hub) => ({ region: hub.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const hub = getHub("huts", (await params).region);
  if (!hub) return {};
  const { title, description, indexable } = hubMetadataFor(hub);
  return {
    title, description,
    // hreflang only once a second edition is indexable (the translated hubs are behind a switch).
    alternates: { canonical: hub.path, languages: indexable ? alternatesFor(hubPageKey(hub.id)) : undefined },
    openGraph: { type: "website", siteName: "KiwiCamping", locale: "en_NZ", title, description, url: `${SITE_URL}${hub.path}`, images: [{ ...homeOgImage, alt: "KiwiCamping" }] },
    // Below the quality gate a hub is still built for visitors, but kept out of search.
    robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true } },
  };
}

export default async function HubRoute({ params }: { params: Promise<{ region: string }> }) {
  const hub = getHub("huts", (await params).region);
  if (!hub) notFound();
  return <HubPage hub={hub} />;
}
