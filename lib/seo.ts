import { APP_ID, APP_STORE_URL, SITE_URL, sitePath } from "@/lib/site";
import { articleDates, translationDate } from "@/lib/article-dates";
import { englishLocale, htmlLang, liveLocales, localeEntry, localeRoot, type LocaleCode } from "@/lib/locales";
import { routesFor } from "@/lib/routes";

export const defaultHreflang = englishLocale.hreflang[0];

/** Arial advance widths per 1000 em for the characters titles use; Google sets result titles in Arial at about 20px. */
const arialWidths: Record<string, number> = {
  " ": 278, "!": 278, "\"": 355, "#": 556, "$": 556, "%": 889, "&": 667, "'": 191, "(": 333, ")": 333, "*": 389, "+": 584,
  ",": 278, "-": 333, ".": 278, "/": 278, ":": 278, ";": 278, "?": 556, "|": 260, "–": 556, "—": 1000, "’": 222, "‘": 222, "“": 333, "”": 333,
  a: 556, b: 556, c: 500, d: 556, e: 556, f: 278, g: 556, h: 556, i: 222, j: 222, k: 500, l: 222, m: 833, n: 556, o: 556, p: 556,
  q: 556, r: 333, s: 500, t: 278, u: 556, v: 500, w: 722, x: 500, y: 500, z: 500,
  A: 667, B: 667, C: 722, D: 722, E: 667, F: 611, G: 778, H: 722, I: 278, J: 500, K: 667, L: 556, M: 833, N: 722, O: 778, P: 667,
  Q: 778, R: 722, S: 667, T: 611, U: 722, V: 667, W: 944, X: 667, Y: 667, Z: 611,
};
/** Estimated width in pixels of a search result title (Arial, 20px). Digits are 556; accented letters use their base letter; CJK is a full em. */
export function titleWidthPx(text: string): number {
  let units = 0;
  for (const char of text) {
    const base = char.normalize("NFD")[0];
    units += arialWidths[char] ?? arialWidths[base] ?? (/\d/u.test(char) ? 556 : /[\u3000-\u9fff\uac00-\ud7af\uff00-\uffef]/u.test(char) ? 1000 : 556);
  }
  return (units * 20) / 1000;
}
/** Desktop results show about 600px of title before cutting it off. */
export const titleWidthLimitPx = 600;

/**
 * A guide's <title>. The layout appends " | KiwiCamping", but guide titles lead with the search
 * query, and when the title plus the suffix would be cut off in results, the brand goes rather than
 * the words people searched for. Measured in estimated pixels, not characters, so a title that
 * would show in full keeps the brand.
 */
export function guideTitle(title: string): string | { absolute: string } {
  return titleWidthPx(`${title} | KiwiCamping`) <= titleWidthLimitPx ? title : { absolute: title };
}
export const defaultOgLocale = englishLocale.og;
/** The Open Graph locale of a language edition. */
export const ogLocale = (code: LocaleCode | "en") => (code === "en" ? englishLocale.og : localeEntry(code).og);
/** Open Graph alternates for a page: every other live language. */
export const ogAlternates = (code: LocaleCode | "en") => [englishLocale.og, ...liveLocales.map((other) => localeEntry(other).og)].filter((og) => og !== ogLocale(code));

/**
 * The hreflang set for one page, from the route manifest.
 *
 * Only language editions that are indexable are listed: English, plus every live locale where this
 * page is complete (its translation passes the completeness gate). x-default is English. Google only
 * honours hreflang when every listed page lists the others back, and a noindexed page must never be
 * an alternate, so every page derives its set from the same list and a noindexed page emits none.
 * A page with no other language edition returns undefined, as there is nothing to declare.
 *
 * Legacy guides pair their English .html URL with /<segment>/guides/<slug>/ (they share a page key).
 * Paths are relative to the site root; Next resolves them against metadataBase.
 */
export function alternatesFor(pageKey: string): Record<string, string> | undefined {
  const editions = routesFor(pageKey).filter((route) => route.indexable && route.kind !== "crawler");
  if (editions.length < 2) return undefined;
  const tags: Record<string, string> = {};
  for (const route of editions) {
    const codes = route.locale === "en" ? [...englishLocale.hreflang] : localeEntry(route.locale).hreflang;
    for (const code of codes) tags[code] = route.path;
  }
  const english = editions.find((route) => route.locale === "en");
  if (english) tags["x-default"] = english.path;
  return tags;
}

export { APP_ID };
const LOGO = `${SITE_URL}/images/kiwicamping-app-icon.png`;
const SCREENSHOT = `${SITE_URL}/images/kiwicamping-og.webp`;

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "KiwiCamping",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "KiwiCamping",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: [englishLocale.htmlLang, ...liveLocales.map(htmlLang)],
};

/**
 * The app itself, described once. `MobileApplication` is what Google reads for app rich results, and
 * the free `offers` block is what stops it being treated as paid. No rating is declared: inventing
 * one would be a fabricated review signal.
 */
const application = {
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: "KiwiCamping",
  // Exactly as the App Store lists it, so the two records describe the same product.
  alternateName: "Camping Map NZ: KiwiCamping",
  operatingSystem: "iOS",
  applicationCategory: "TravelApplication",
  applicationSubCategory: "Camping and road trip planner",
  url: SITE_URL,
  installUrl: APP_STORE_URL,
  downloadUrl: APP_STORE_URL,
  screenshot: SCREENSHOT,
  image: LOGO,
  inLanguage: [englishLocale.htmlLang, ...liveLocales.map(htmlLang)],
  availableOnDevice: "iPhone",
  countriesSupported: "NZ",
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: { "@type": "Offer", price: "0", priceCurrency: "NZD", availability: "https://schema.org/InStock" },
  featureList: [
    "Offline directory of 6,500+ New Zealand places",
    "DOC campsites, backcountry huts, holiday parks and freedom camping areas",
    "Filters for fee, facilities, access, region, rating and online booking",
    "Smart and custom collections",
    "Multi-stop road trip planner with distance, directions, dates and notes",
    "Weather on every place and every trip stop",
    "Standard, satellite and 3D maps with Apple Look Around",
    "Reported costs converted into your own currency",
  ],
};

/**
 * The homepage graph: who publishes the site, what the site is, what the app is, and the FAQ.
 *
 * Seven language editions render this, so the node identifiers matter. The publisher, the website
 * and the app are one thing each however many languages describe them, and they keep one `@id` so
 * the graph does not claim seven organisations. The page and its FAQ are genuinely per-language, so
 * they are identified by the URL they are on. Previously every locale emitted `#faq` and a different
 * `description` under the same identifiers, which asks Google to reconcile seven contradictory
 * copies of one node.
 */
export function homeSchema(
  description: string,
  faqs: readonly (readonly [string, string])[],
  page: { url?: string; inLanguage?: string } = {},
) {
  const url = page.url ?? `${SITE_URL}/`;
  const inLanguage = page.inLanguage ?? englishLocale.htmlLang;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      application,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "KiwiCamping",
        description,
        inLanguage,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        primaryImageOfPage: { "@type": "ImageObject", url: SCREENSHOT },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      },
    ],
  };
}

/** Schema text is plain: prose may carry <a data-guide> link markup. */
const plain = (text: string) => text.replace(/<[^>]+>/g, "");

/**
 * A guide, with the breadcrumb Google needs to show the trail under the result.
 *
 * `locale` is the language the page is actually written in: it decides inLanguage, the breadcrumb
 * (that edition's home and guide index, `guidesLabel` in its language) and the modified date, since
 * a translation was last modified when its own text last changed. A locale page that falls back to
 * English passes its locale for the breadcrumb URLs but describes itself as English text.
 */
export function articleSchema(
  item: { slug: string; title: string; description: string; image: string; imageAlt: string; places: string[]; category: string; faq?: readonly (readonly [string, string])[]; sections?: { heading: string; body: string[] }[] },
  url: string,
  { locale = "en", guidesLabel = "Guides", language }: { locale?: LocaleCode | "en"; guidesLabel?: string; language?: LocaleCode | "en" } = {},
) {
  const written = language ?? locale;
  const inLanguage = htmlLang(written);
  const dates = articleDates(item.slug);
  const modified = written === "en" ? dates?.modified : translationDate(item.slug, written) ?? dates?.modified;
  const root = localeRoot(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Article",
        headline: item.title,
        description: item.description,
        inLanguage,
        image: { "@type": "ImageObject", url: `${SITE_URL}${item.image}`, caption: item.imageAlt },
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        // From git history, not hand-typed: see scripts/build-article-dates.mjs.
        ...(dates && { datePublished: dates.published, dateModified: modified }),
        about: item.places,
        articleSection: item.category,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      // The guide's own two questions. The same array renders the visible FAQ below the article, so
      // the markup can never say something the page does not.
      ...(item.faq?.length ? [{
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage,
        mainEntity: item.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      }] : []),
      // An app guide teaches a task in the app, so its sections are genuinely steps. Route and
      // rules guides are not tasks and get no HowTo.
      ...(item.category === "App guides" && item.sections?.length ? [{
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: item.title,
        description: item.description,
        inLanguage,
        step: item.sections.map((section, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: section.heading,
          // Prose may carry <a data-guide> link markup; schema text is plain.
          text: plain(section.body[0]),
          url: `${url}#step-${index + 1}`,
        })),
      }] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: locale === "en" ? "Home" : "KiwiCamping", item: `${SITE_URL}${sitePath(root || "/")}` },
          { "@type": "ListItem", position: 2, name: guidesLabel, item: `${SITE_URL}${sitePath(`${root}/guides`)}` },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
    ],
  };
}
