import { APP_ID, APP_STORE_URL, SITE_URL } from "@/lib/site";
import { articleDates, localeModified } from "@/lib/article-dates";
import { english, htmlLangOf, liveLocales, localeEntry, ogOf, type SiteLocale } from "@/lib/locales";
import { publishedLocales } from "@/lib/localized";
import { isIndexable, pageEntry } from "@/lib/routes";

/** Open Graph locale of every published edition, for `og:locale:alternate`. */
export const ogLocale = (locale: SiteLocale) => ogOf(locale);
export const defaultOgLocale = english.og;
/** Every published edition's language, English first, for the site-wide schema nodes. */
const siteLanguages = [english.htmlLang, ...publishedLocales.map((code) => localeEntry(code).htmlLang)];

/**
 * The hreflang set for one page, by page key ("home", "privacy", "guide:<slug>").
 *
 * English, plus every live locale whose edition of this page is complete and indexable, plus
 * x-default pointing at English. Every page in the set computes the same set from the same data,
 * so the references are reciprocal by construction, and an incomplete translation (which renders
 * English, noindex) is never advertised. A noindex page emits no alternates at all; callers pass
 * this only for indexable pages. Legacy guides pair their English .html URL with
 * /<segment>/guides/<slug>/.
 */
export function alternatesFor(key: string): Record<string, string> | undefined {
  const page = pageEntry(key);
  if (!page?.english) return undefined;
  const englishUrl = `${SITE_URL}${page.english}`;
  const tags: Record<string, string> = Object.fromEntries(english.hreflang.map((tag) => [tag, englishUrl]));
  for (const locale of liveLocales) {
    if (!isIndexable(key, locale)) continue;
    for (const tag of localeEntry(locale).hreflang) tags[tag] = `${SITE_URL}${page.localized(locale)}`;
  }
  tags["x-default"] = englishUrl;
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
  inLanguage: siteLanguages,
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
  inLanguage: siteLanguages,
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
    "Standard, satellite and 3D maps with Street View",
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
  const inLanguage = page.inLanguage ?? english.htmlLang;
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

type Crumb = { name: string; url: string };

/**
 * A guide, with the breadcrumb Google needs to show the trail under the result.
 *
 * `locale` decides the language of the nodes (inLanguage), the breadcrumb (names and URLs of that
 * edition) and the modified date: a translation was last modified when its own text last changed.
 */
export function articleSchema(
  item: { slug: string; title: string; description: string; image: string; imageAlt: string; places: string[]; category: string; faq?: readonly (readonly [string, string])[]; sections?: { heading: string; body: string[] }[] },
  url: string,
  options: { locale?: SiteLocale; home?: Crumb; guides?: Crumb } = {},
) {
  const locale = options.locale ?? "en";
  const inLanguage = htmlLangOf(locale);
  const home = options.home ?? { name: "Home", url: `${SITE_URL}/` };
  const guides = options.guides ?? { name: "Guides", url: `${SITE_URL}/guides/` };
  const dates = articleDates(item.slug);
  const modified = locale === "en" ? dates?.modified : localeModified(item.slug, locale) ?? dates?.modified;
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
          text: section.body[0].replace(/<[^>]+>/g, ""),
          url: `${url}#step-${index + 1}`,
        })),
      }] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: home.name, item: home.url },
          { "@type": "ListItem", position: 2, name: guides.name, item: guides.url },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
    ],
  };
}
