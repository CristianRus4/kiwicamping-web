import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHubIndex } from "@/components/localized-hub-page";
import { isLocale } from "@/lib/localized";
import { localeEntry, routedLocales } from "@/lib/locales";
import { localizedIndexMetadata } from "@/lib/hubs-localized";
import { hubIndexPageKey } from "@/lib/routes/hubs";

export const dynamicParams = false;

/** Every routed locale serves the index; it is noindex until the translated hubs are switched on (lib/hubs-localized.ts). */
export function generateStaticParams() {
  return routedLocales.map((locale) => ({ locale: localeEntry(locale).segment }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? localizedIndexMetadata("freedom-camping", locale, hubIndexPageKey("freedom-camping")) : {};
}

export default async function LocalizedHubIndexRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LocalizedHubIndex kind="freedom-camping" locale={locale} />;
}
