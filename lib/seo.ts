import { APP_ID, APP_STORE_URL, SITE_URL, sitePath } from "@/lib/site";
import { articleDates } from "@/lib/article-dates";
import { localeCodes, type LocaleCode } from "@/lib/localized";

/** The BCP 47 tag each locale directory is published under. */
export const hreflang: Record<LocaleCode, string> = { de: "de-DE", es: "es-ES", fr: "fr-FR", it: "it-IT", nl: "nl-NL", pt: "pt-PT" };
export const ogLocale: Record<LocaleCode, string> = { de: "de_DE", es: "es_ES", fr: "fr_FR", it: "it_IT", nl: "nl_NL", pt: "pt_PT" };
export const defaultHreflang = "en-NZ";
export const defaultOgLocale = "en_NZ";

/**
 * The reciprocal hreflang set for one page, given its path below the locale root.
 *
 * Every page exists in every language, so each one advertises all seven URLs plus x-default. Google
 * only honours hreflang when the references are reciprocal, which is why this is generated from one
 * place rather than written per page.
 */
export function seoLanguageTags(path: string): Record<string, string> {
  const english = sitePath(path);
  return {
    [defaultHreflang]: english,
    ...Object.fromEntries(localeCodes.map((code) => [hreflang[code], sitePath(`/${code}${path}`)])),
    "x-default": english,
  };
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
  inLanguage: [defaultHreflang, ...localeCodes.map((code) => hreflang[code])],
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
  inLanguage: [defaultHreflang, ...localeCodes.map((code) => hreflang[code])],
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
  const inLanguage = page.inLanguage ?? defaultHreflang;
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

/** A guide, with the breadcrumb Google needs to show the trail under the result. */
export function articleSchema(item: { slug: string; title: string; description: string; image: string; imageAlt: string; places: string[]; category: string; faq?: readonly (readonly [string, string])[]; sections?: { heading: string; body: string[] }[] }, url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Article",
        headline: item.title,
        description: item.description,
        image: { "@type": "ImageObject", url: `${SITE_URL}${item.image}`, caption: item.imageAlt },
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        // From git history, not hand-typed: see scripts/build-article-dates.mjs.
        ...(articleDates(item.slug) && { datePublished: articleDates(item.slug).published, dateModified: articleDates(item.slug).modified }),
        about: item.places,
        articleSection: item.category,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      // The guide's own two questions. The same array renders the visible FAQ below the article, so
      // the markup can never say something the page does not.
      ...(item.faq?.length ? [{
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: item.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
      }] : []),
      // An app guide teaches a task in the app, so its sections are genuinely steps. Route and
      // rules guides are not tasks and get no HowTo.
      ...(item.category === "App guides" && item.sections?.length ? [{
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: item.title,
        description: item.description,
        step: item.sections.map((section, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: section.heading,
          text: section.body[0],
          url: `${url}#step-${index + 1}`,
        })),
      }] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
    ],
  };
}
