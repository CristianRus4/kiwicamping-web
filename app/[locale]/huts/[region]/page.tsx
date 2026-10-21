import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHubPage } from "@/components/localized-hub-page";
import { isLocale } from "@/lib/localized";
import { localeEntry, routedLocales } from "@/lib/locales";
import { localizedHubMetadata, localizedHubs } from "@/lib/hubs-localized";
import { hubPageKey } from "@/lib/routes/hubs";

export const dynamicParams = false;

const hubs = localizedHubs.filter((hub) => hub.kind === "huts");
const find = (region: string) => hubs.find((hub) => hub.slug === region);

/** Hubs whose English page is indexable, in every routed locale; noindex until the switch is on (lib/hubs-localized.ts). */
export function generateStaticParams() {
  return routedLocales.flatMap((locale) => hubs.map((hub) => ({ locale: localeEntry(locale).segment, region: hub.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; region: string }> }): Promise<Metadata> {
  const { locale, region } = await params;
  const hub = find(region);
  return hub && isLocale(locale) ? localizedHubMetadata(hub, locale, hubPageKey(hub.id)) : {};
}

export default async function LocalizedHubRoute({ params }: { params: Promise<{ locale: string; region: string }> }) {
  const { locale, region } = await params;
  const hub = find(region);
  if (!hub || !isLocale(locale)) notFound();
  return <LocalizedHubPage hub={hub} locale={locale} />;
}
