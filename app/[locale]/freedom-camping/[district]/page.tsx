import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHubPage } from "@/components/localized-hub-page";
import { isLocale } from "@/lib/localized";
import { localeEntry, routedLocales } from "@/lib/locales";
import { localizedHubMetadata, localizedHubs } from "@/lib/hubs-localized";
import { hubPageKey } from "@/lib/routes/hubs";

export const dynamicParams = false;

const hubs = localizedHubs.filter((hub) => hub.kind === "freedom-camping");
const find = (district: string) => hubs.find((hub) => hub.slug === district);

/** Hubs whose English page is indexable, in every routed locale; noindex until the switch is on (lib/hubs-localized.ts). */
export function generateStaticParams() {
  return routedLocales.flatMap((locale) => hubs.map((hub) => ({ locale: localeEntry(locale).segment, district: hub.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; district: string }> }): Promise<Metadata> {
  const { locale, district } = await params;
  const hub = find(district);
  return hub && isLocale(locale) ? localizedHubMetadata(hub, locale, hubPageKey(hub.id)) : {};
}

export default async function LocalizedHubRoute({ params }: { params: Promise<{ locale: string; district: string }> }) {
  const { locale, district } = await params;
  const hub = find(district);
  if (!hub || !isLocale(locale)) notFound();
  return <LocalizedHubPage hub={hub} locale={locale} />;
}
