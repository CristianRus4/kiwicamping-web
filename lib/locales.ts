import registry from "./locales.json";
import { localeCodes, type LocaleCode } from "./translations/index";

/**
 * The site's languages, read from lib/locales.json, the only place a language is declared. Every
 * list of languages (routes, exporter, sitemaps, hreflang, the language switcher, the tests, the
 * translation engine's targets) is derived from it.
 *
 * - `code` names the translation file (lib/translations/<code>.json) and the engine target.
 * - `segment` is the URL directory (/de/, /zh-hans/).
 * - `htmlLang` is the <html lang> of that locale's pages and the schema inLanguage; `hreflang` lists
 *   every tag its pages are advertised under (Simplified Chinese serves zh-Hans, zh-CN and zh-SG
 *   from one URL).
 * - `og` is the Open Graph locale, `intl` the Intl locale for dates and money, `engine` the
 *   translation engine's variety, `script` latin or cjk (typography, reading time).
 * - `reviews`: whether the home page shows the App Store testimonials. They are never translated
 *   into a new language, so a locale without them omits the section, and its interface completeness
 *   check skips those strings.
 * - `caseEndings`: the language adds a case ending to a brand name ("KiwiCampingin", "iPhonu"), so
 *   the content audit accepts one when it checks that every brand survived translation.
 * - `genitive`: the language adds a possessive -s straight to a brand name ("KiwiCampings"), which
 *   the content audit also accepts.
 * - `dir`: `rtl` for a right-to-left language (Hebrew). Its pages get `dir="rtl"` on <html> and the
 *   locale wrapper; the stylesheet uses logical properties and mirrors directional arrows, and any
 *   English fallback inside such a page is laid out left to right again. Omitted means `ltr`.
 * - `status`: `live` locales are built, exported, listed in the sitemap, hreflang and language
 *   switcher. `draft` locales are none of those; set LOCALES_PREVIEW=1 to render them in dev.
 *
 * Only the orchestrator flips a status. A live locale must translate its whole interface, which
 * `npm run content:check` enforces.
 */
export type LocaleStatus = "live" | "draft";
export type LocaleScript = "latin" | "cjk";
export type TextDirection = "ltr" | "rtl";
export type LocaleEntry = {
  code: LocaleCode;
  segment: string;
  label: string;
  htmlLang: string;
  hreflang: string[];
  og: string;
  intl: string;
  engine: string;
  script: LocaleScript;
  status: LocaleStatus;
  reviews: boolean;
  caseEndings?: boolean;
  genitive?: boolean;
  dir?: TextDirection;
};

export { localeCodes, type LocaleCode };

export const locales = registry as LocaleEntry[];
const byCode = new Map(locales.map((entry) => [entry.code, entry]));
export const localeEntry = (code: LocaleCode): LocaleEntry => byCode.get(code)!;

/** The English source edition: served from the site root. */
export const englishLocale = { code: "en", segment: "", label: "English", htmlLang: "en-NZ", hreflang: ["en-NZ"], og: "en_NZ", intl: "en-NZ", script: "latin" as LocaleScript } as const;

/** Draft locales render only when previewing (`LOCALES_PREVIEW=1 npm run dev`). */
export const previewDrafts = typeof process !== "undefined" && process.env?.LOCALES_PREVIEW === "1";

/** Locales that are live: exported, in the sitemap, hreflang and the language switcher. */
export const liveLocales: LocaleCode[] = localeCodes.filter((code) => localeEntry(code).status === "live");
/** Locales that have routes in this build: the live ones, plus drafts when previewing. */
export const routedLocales: LocaleCode[] = previewDrafts ? [...localeCodes] : liveLocales;

export const isLocaleCode = (value: string): value is LocaleCode => byCode.has(value as LocaleCode);
/** The locale a URL directory belongs to, if that locale has routes in this build. */
export const routedLocaleForSegment = (segment: string): LocaleCode | undefined =>
  routedLocales.find((code) => localeEntry(code).segment === segment);
/** The URL directory of a locale, `/de` or `/zh-hans`; English is the root. */
export const localeRoot = (code: LocaleCode | "en") => (code === "en" ? "" : `/${localeEntry(code).segment}`);
/** The Intl locale used to format dates, numbers and money for a locale. */
export const intlLocale = (code: LocaleCode | "en") => (code === "en" ? englishLocale.intl : localeEntry(code).intl);
export const htmlLang = (code: LocaleCode | "en") => (code === "en" ? englishLocale.htmlLang : localeEntry(code).htmlLang);
/** The writing direction of a locale's pages: `rtl` only where the registry says so. */
export const textDirection = (code: LocaleCode | "en"): TextDirection => (code === "en" ? "ltr" : localeEntry(code).dir ?? "ltr");
/**
 * The attributes of an element that falls back to English inside a localised page: English, laid out
 * left to right (which matters inside a right-to-left edition). None when the element is translated.
 */
export const englishFallback = (translated: boolean) => (translated ? {} : { lang: englishLocale.htmlLang, dir: "ltr" as const });
export const localeScript = (code: LocaleCode | "en"): LocaleScript => (code === "en" ? "latin" : localeEntry(code).script);
/** The full stop after a date that ends a sentence: none in CJK, where the date closes the line as written. */
export const dateSentenceEnd = (code: LocaleCode | "en") => (localeScript(code) === "cjk" ? "" : ".");
/** Whether this edition's home page carries the testimonials (English always does). */
export const hasReviews = (code: LocaleCode | "en") => code === "en" || localeEntry(code).reviews;
