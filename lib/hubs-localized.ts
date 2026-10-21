import type { Metadata } from "next";
import { SITE_URL, sitePath } from "./site";
import { intlLocale, liveLocales, localeRoot, routedLocales, type LocaleCode } from "./locales";
import { isTranslated } from "./localized";
import { alternatesFor, homeOgImage, ogLocale } from "./seo";
import { smartBannerContent } from "./app-store";
import { hubGate, hubIndexIndexable, type BuiltHubKind, type Hub } from "./hubs";
import { hubStrings, isHubCommonComplete, isHubTranslated, translatableHubs, fill } from "./hub-strings";

/**
 * THE SWITCH for the translated hubs. Default false.
 *
 * While false, every localised hub page (/<locale>/camping/…, /<locale>/huts/…,
 * /<locale>/freedom-camping/…) is still built and exported, so it can be previewed, but it is noindex,
 * out of every sitemap, out of hreflang and out of the language switcher, whatever its translation
 * state.
 *
 * The owner put the translated hubs live on 22 Oct 2026; setting this back to false takes them all
 * out of search at once. A localised hub is indexable only when its English page is, its locale is live and published,
 * and its translation is complete (lib/hub-strings.ts). Hreflang pairs only indexable editions, so it
 * stays reciprocal.
 */
export const LOCALIZED_HUBS_LIVE = true;

/** Localised hubs: every routed locale, for every hub whose English page is indexable. */
export const localizedHubs = translatableHubs;
export const localizedHubPath = (hub: Hub, locale: LocaleCode) => sitePath(`${localeRoot(locale)}${hub.path}`);
export const localizedIndexPath = (kind: BuiltHubKind, locale: LocaleCode) => sitePath(`${localeRoot(locale)}/${kind}`);

const published = (locale: LocaleCode) => liveLocales.includes(locale) && routedLocales.includes(locale) && isTranslated(locale);

export const isLocalizedHubIndexable = (hub: Hub, locale: LocaleCode) =>
  LOCALIZED_HUBS_LIVE && published(locale) && hubGate(hub).indexable && isHubTranslated(locale, hub);
export const isLocalizedIndexIndexable = (kind: BuiltHubKind, locale: LocaleCode) =>
  LOCALIZED_HUBS_LIVE && published(locale) && hubIndexIndexable(kind) && isHubCommonComplete(locale);

/** The strings and formatting a localised hub page renders with. */
export function localizedHubView(locale: LocaleCode, hub?: Hub) {
  const complete = hub ? isHubTranslated(locale, hub) : isHubCommonComplete(locale);
  const { strings, translated } = hubStrings(locale, complete);
  const intl = translated ? intlLocale(locale) : intlLocale("en");
  const number = (value: number) => value.toLocaleString(intl);
  const date = (iso: string) => new Intl.DateTimeFormat(intl, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
  return { strings, translated, intl, number, date };
}
export type LocalizedHubView = ReturnType<typeof localizedHubView>;

const robots = (index: boolean): Metadata["robots"] => ({ index, follow: true, googleBot: { index, follow: true } });
const og = (locale: LocaleCode, title: string, description: string, path: string) => ({
  type: "website" as const, siteName: "KiwiCamping", locale: ogLocale(locale), title, description, url: `${SITE_URL}${path}`,
  images: [{ ...homeOgImage, alt: "KiwiCamping" }],
});

export function localizedHubMetadata(hub: Hub, locale: LocaleCode, pageKey: string): Metadata {
  const view = localizedHubView(locale, hub);
  const copy = view.strings.kinds[hub.kind as BuiltHubKind];
  const values = { name: hub.name, count: view.number(hub.placeCount) };
  const title = fill(copy.metaTitle, values);
  const description = fill(copy.metaDescription, values);
  const indexable = isLocalizedHubIndexable(hub, locale);
  const path = localizedHubPath(hub, locale);
  return {
    title, description,
    alternates: { canonical: path, languages: indexable ? alternatesFor(pageKey) : undefined },
    openGraph: og(locale, title, description, path),
    robots: robots(indexable),
    other: { "apple-itunes-app": smartBannerContent(locale) },
  };
}

export function localizedIndexMetadata(kind: BuiltHubKind, locale: LocaleCode, pageKey: string): Metadata {
  const copy = localizedHubView(locale).strings.kinds[kind];
  const indexable = isLocalizedIndexIndexable(kind, locale);
  const path = localizedIndexPath(kind, locale);
  return {
    title: copy.indexMetaTitle, description: copy.indexIntro,
    alternates: { canonical: path, languages: indexable ? alternatesFor(pageKey) : undefined },
    openGraph: og(locale, copy.indexMetaTitle, copy.indexIntro, path),
    robots: robots(indexable),
    other: { "apple-itunes-app": smartBannerContent(locale) },
  };
}
