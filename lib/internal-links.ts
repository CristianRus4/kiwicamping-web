import { articleHref, articles } from "@/lib/site";

/**
 * Contextual links inside a guide's own prose.
 *
 * The site had none. Seventy-eight guides covering overlapping subjects were connected only by a
 * three-card "Related guides" strip under the article, which gives Google almost nothing: no anchor
 * text, no sense of which guide is authoritative on a topic, and no path from a paragraph about
 * self-contained certification to the guide that explains it.
 *
 * Rather than rewriting seventy-eight articles to insert links by hand, the phrases below are the
 * ones already being written naturally in the prose. Where one appears, its first occurrence in the
 * article becomes a link to the guide that covers that subject properly. The anchor text is
 * therefore the writer's own wording in its own sentence, which is what makes it worth anything.
 *
 * Rules the implementation enforces: never link a guide to itself, never link the same target twice
 * in one article, at most one link per paragraph, and a budget per article, so a guide reads as
 * prose and not as a link farm.
 */
type LinkTarget = { pattern: RegExp; slug: string };

const targets: LinkTarget[] = [
  { pattern: /\bfreedom camping rules\b/i, slug: "freedom-camping-rules-new-zealand" },
  { pattern: /\bfreedom camping\b/i, slug: "freedom-camping-new-zealand-guide" },
  { pattern: /\bcertified self-contained\b|\bself-contained certification\b|\bgreen warrant\b/i, slug: "self-contained-campervan-green-warrant" },
  { pattern: /\bDOC campsites?\b/, slug: "doc-campsites-new-zealand-guide" },
  { pattern: /\bbackcountry huts?\b|\bDOC huts?\b/, slug: "doc-huts-new-zealand-guide" },
  { pattern: /\bhut etiquette\b|\bhut rules\b/i, slug: "doc-hut-rules-etiquette" },
  { pattern: /\bholiday parks?\b/i, slug: "holiday-parks-new-zealand-guide" },
  { pattern: /\bdump stations?\b|\bwastewater\b/i, slug: "camping-wastewater-rubbish-new-zealand" },
  { pattern: /\bsandflies\b/i, slug: "sandflies-new-zealand-camping" },
  { pattern: /\bfire seasons?\b|\bfire restrictions?\b|\bcampfires?\b/i, slug: "campfire-rules-new-zealand" },
  { pattern: /\bpacking list\b/i, slug: "new-zealand-camping-packing-list" },
  { pattern: /\bCook Strait ferry\b|\bCook Strait\b/, slug: "cook-strait-ferry-campervan-guide" },
  { pattern: /\bkauri dieback\b/i, slug: "kauri-dieback-camping-travel" },
  { pattern: /\bone-lane bridges?\b|\bgravel roads?\b/i, slug: "one-lane-bridges-gravel-roads-new-zealand" },
  { pattern: /\bWarrant of Fitness\b|\bWoF\b/, slug: "wof-registration-campervan-new-zealand" },
  { pattern: /\boverseas (?:driver )?licence\b/i, slug: "overseas-driver-licence-new-zealand" },
  { pattern: /\bdriving on the left\b|\bleft-hand side\b/i, slug: "left-side-driving-new-zealand" },
  { pattern: /\bspeed limits?\b/i, slug: "speed-limits-new-zealand-visitors" },
  { pattern: /\btowing a caravan\b|\btow(?:ing)? a caravan\b/i, slug: "towing-caravan-new-zealand" },
  { pattern: /\briver crossings?\b/i, slug: "river-crossing-safety-new-zealand" },
  { pattern: /\bwinter camping\b/i, slug: "winter-camping-new-zealand" },
  { pattern: /\bwinter driving\b|\bsnow chains\b/i, slug: "winter-driving-new-zealand-campervan" },
  { pattern: /\bgrocery prices\b|\bsupermarket prices\b/i, slug: "new-zealand-grocery-prices-2026" },
  { pattern: /\bfuel costs?\b|\bpetrol prices\b/i, slug: "new-zealand-road-trip-fuel-cost-2026" },
  { pattern: /\bcamping fees\b/i, slug: "camping-fees-new-zealand-2026" },
  { pattern: /\bresponsible camping\b/i, slug: "responsible-camping-new-zealand" },
  { pattern: /\bbiosecurity\b/i, slug: "new-zealand-biosecurity-camping-gear" },
  { pattern: /\btsunami\b|\bearthquakes?\b/i, slug: "earthquake-tsunami-camping-new-zealand" },
  { pattern: /\bvolcanic (?:alert|activity|risk)\b|\bvolcanic\b/i, slug: "volcanic-safety-new-zealand-travel" },
  { pattern: /\bsevere weather\b|\bweather warnings?\b/i, slug: "new-zealand-severe-weather-camping" },
  { pattern: /\bcamping with a dog\b|\bdog-friendly\b/i, slug: "dogs-camping-new-zealand" },
  { pattern: /\broad signs?\b/i, slug: "new-zealand-road-signs-visitors" },
  { pattern: /\bdriving days?\b/i, slug: "new-zealand-driving-day-planner" },
  { pattern: /\bcouncil bylaws?\b|\bbylaws?\b/i, slug: "camping-rules-local-councils-new-zealand" },
  { pattern: /\bfatigue\b/i, slug: "alcohol-fatigue-driving-new-zealand" },
  { pattern: /\bDOC campsite rules\b/, slug: "doc-campsite-rules" },
  { pattern: /\bwhen to camp\b|\bbest time to camp\b/i, slug: "best-time-camping-new-zealand" },
  { pattern: /\bscenic campsites?\b/i, slug: "scenic-campsites-new-zealand" },
  { pattern: /\bwhere you can camp\b|\bplaces to camp\b/i, slug: "where-to-camp-in-new-zealand" },
  { pattern: /\bdaily budget\b|\btravel costs?\b/i, slug: "new-zealand-travel-cost-2026" },
  { pattern: /\bcampervan budget\b/i, slug: "campervan-budget-new-zealand" },
  { pattern: /\beating out\b|\btakeaway\b/i, slug: "eating-out-new-zealand-prices-2026" },
  { pattern: /\bflat white\b|\bcoffee prices\b/i, slug: "beer-wine-coffee-prices-new-zealand" },
  { pattern: /\baccommodation costs?\b|\bhostels?\b/i, slug: "accommodation-costs-new-zealand-2026" },
  { pattern: /\bpublic transport\b/i, slug: "public-transport-costs-new-zealand-2026" },
  { pattern: /\bdomestic flights?\b/i, slug: "domestic-flight-costs-new-zealand-2026" },
  { pattern: /\bInterCity\b|\bscenic trains?\b/i, slug: "bus-ferry-train-costs-new-zealand" },
  { pattern: /\bresupply\b|\bgroceries\b/i, slug: "food-fuel-resupply-new-zealand-road-trip" },
  { pattern: /\blivestock\b|\bstock on the road\b|\bwildlife on the road\b/i, slug: "wildlife-livestock-road-safety-new-zealand" },
  { pattern: /\bcampervan driving\b|\bcampervan rules\b/i, slug: "campervan-road-rules-new-zealand" },
  { pattern: /\bAbel Tasman\b/, slug: "nelson-abel-tasman-golden-bay" },
  { pattern: /\bStewart Island\b|\bRakiura\b/, slug: "rakiura-stewart-island-camping-guide" },
  { pattern: /\bcamping apps?\b/i, slug: "best-nz-camping-apps" },
  { pattern: /\bworks offline\b|\bwithout reception\b|\bno reception\b/i, slug: "kiwicamping-offline-data-guide" },
  { pattern: /\bStreet View\b/, slug: "kiwicamping-weather-look-around" },
  { pattern: /\bfilters\b/i, slug: "kiwicamping-filters-guide" },
  { pattern: /\bcollections\b/i, slug: "save-places-kiwicamping" },
  { pattern: /\btrip planner\b/i, slug: "plan-trip-kiwicamping" },
  { pattern: /\byour own currency\b/i, slug: "kiwicamping-currency-place-costs" },
];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

/** A target only counts if the guide it points at actually exists. */
const live = targets.filter((target) => bySlug.has(target.slug));

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Returns each paragraph as HTML, with at most one contextual link added per paragraph.
 *
 * The text is escaped first and the anchor inserted afterwards, so article prose can never inject
 * markup: the only HTML in the result is the anchor this function wrote.
 */
export function linkProse(paragraphs: readonly string[], currentSlug: string, prefix = "", budget = 4): string[] {
  const used = new Set<string>([currentSlug]);
  let remaining = budget;
  // A localised edition publishes guides only under its own prefix, and never the articles that
  // live at an existing .html URL, so those are not linkable from one.
  const linkable = prefix
    ? live.filter((target) => !bySlug.get(target.slug)!.legacyPath)
    : live;
  const root = prefix.replace(/\/$/, "");
  const hrefFor = (slug: string) => (root ? `${root}/guides/${slug}/` : articleHref(bySlug.get(slug)!));
  return paragraphs.map((paragraph) => {
    const escaped = escapeHtml(paragraph);
    if (remaining <= 0) return escaped;
    for (const target of linkable) {
      if (used.has(target.slug)) continue;
      const match = target.pattern.exec(escaped);
      if (!match) continue;
      used.add(target.slug);
      remaining -= 1;
      const anchor = `<a href="${hrefFor(target.slug)}">${match[0]}</a>`;
      return escaped.slice(0, match.index) + anchor + escaped.slice(match.index + match[0].length);
    }
    return escaped;
  });
}
