import registry from "./locales.json";
import { localeCodes, type LocaleCode } from "./translations/index";

export { localeCodes, type LocaleCode };

/**
 * The locale registry (lib/locales.json) with types. Every list of languages on the site, in the
 * exporter, the sitemap, hreflang, the language switcher and the tests, is derived from here.
 *
 * - `segment`: the URL directory (/de/, /zh-hans/).
 * - `htmlLang`: the <html lang> and schema inLanguage value.
 * - `hreflang`: every hreflang tag that points at this edition (language-only, plus the Chinese
 *   regional tags).
 * - `og`: the Open Graph locale. `intl`: the Intl locale for dates and money.
 * - `engine`: the translation engine variety. `script`: "cjk" switches typography and reading time.
 * - `status`: "live" is built, exported, indexed and listed; "draft" is none of those, and renders
 *   only in development with LOCALES_PREVIEW=1. Only the orchestrator flips a locale to live, and
 *   content:check fails if a live locale's interface is not completely translated.
 */
export type LocaleEntry = {
  code: LocaleCode; segment: string; label: string; htmlLang: string; hreflang: string[]; og: string;
  intl: string; engine: string; script: "latin" | "cjk"; status: "live" | "draft";
};

export const locales = registry as LocaleEntry[];

/** The English edition, which lives at the site root. */
export const english = { code: "en", htmlLang: "en-NZ", hreflang: ["en"], og: "en_NZ", intl: "en-GB" } as const;
/** "en" for the English edition, otherwise a registry locale. */
export type SiteLocale = "en" | LocaleCode;

const preview = typeof process !== "undefined" && process.env?.LOCALES_PREVIEW === "1";

/** Locales that are built, exported, in the sitemap, hreflang and the language switcher. */
export const liveLocales = locales.filter((entry) => entry.status === "live").map((entry) => entry.code);
/** Locales that are rendered: the live ones, plus drafts when previewing with LOCALES_PREVIEW=1. */
export const builtLocales = locales.filter((entry) => entry.status === "live" || preview).map((entry) => entry.code);

const byCode = new Map(locales.map((entry) => [entry.code as string, entry]));
const bySegment = new Map(locales.map((entry) => [entry.segment, entry]));

export const isLocale = (value: string): value is LocaleCode => byCode.has(value);
export const localeEntry = (code: LocaleCode): LocaleEntry => byCode.get(code)!;
/** The registry locale published under a URL segment, if any. */
export const localeForSegment = (segment: string): LocaleEntry | undefined => bySegment.get(segment);
export const isLive = (code: LocaleCode) => localeEntry(code).status === "live";
export const isBuilt = (code: LocaleCode) => builtLocales.includes(code);

export const htmlLangOf = (locale: SiteLocale) => (locale === "en" ? english.htmlLang : localeEntry(locale).htmlLang);
export const intlOf = (locale: SiteLocale) => (locale === "en" ? english.intl : localeEntry(locale).intl);
export const ogOf = (locale: SiteLocale) => (locale === "en" ? english.og : localeEntry(locale).og);
export const isCjk = (locale: SiteLocale) => locale !== "en" && localeEntry(locale).script === "cjk";
/** The site path prefix for a locale: "" for English, "/de" for German. */
export const localePrefix = (locale: SiteLocale) => (locale === "en" ? "" : `/${localeEntry(locale).segment}`);
