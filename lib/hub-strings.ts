import { hubTranslationFiles } from "./translations/hubs/index";
import { hubGate, hubKinds, hubs, proseFor, type BuiltHubKind, type Hub } from "./hubs";

/**
 * The `hubs` translation namespace, with English fallback.
 *
 * English hub pages render from components/hub-page.tsx and never read this file. The localised hub
 * pages (/<locale>/camping/…, /<locale>/huts/…, /<locale>/freedom-camping/…) read their copy from
 * here: the English source below, or a locale's lib/translations/hubs/<code>.json when it is complete
 * for that page.
 *
 * Nothing is shown half-translated, the same rule lib/localized.ts applies to guides: a localised hub
 * uses its translation only when the shared strings, every label and term its own tables show and its
 * own prose are all filled, every {placeholder} survives, and each prose paragraph carries exactly the
 * numbers of its English paragraph. Otherwise the whole body is English and the page is noindex
 * (lib/hubs-localized.ts). Place, park, region and council names are data and are never translated.
 *
 * `npm run hubs:source` writes this source to lib/translations/hubs/en.json for the translation engine
 * (docs/translation.hubs.config.json); scripts/audit-hubs.mjs fails when the committed file is stale.
 */

/** A JSON key the translation engine handles in every adapter: lower case, digits and hyphens. */
export const labelKey = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const PASS_LINE = "Bookable holiday parks, stays and tours are free in the app. DOC campsites, huts, dump stations and the guides open with the Pass.";

const common = {
  home: "Home",
  sourceLine: "Source: Department of Conservation, data as of {date}. Licensed under CC BY 4.0.",
  dataCredits: "Data credits",
  mapCaption: "Positions rounded to about 100 m. Coastline and lakes: Natural Earth.",
  atAGlance: "{name} at a glance",
  councilTitle: "DOC notices, not council bylaws",
  councilText: "These notices cover public conservation land managed by the Department of Conservation. They are not council bylaws. On land a district or city council manages, that council’s own freedom camping rules apply, and signs at the site always take priority.",
  placesSome: "{shown} of {count} {noun}.",
  placesMoreFreedom: "DOC’s freedom camping page has every notice area.",
  placesMoreApp: "The full list is on the map in the app.",
  colName: "Name",
  colNotice: "Notice",
  colType: "Type",
  colConditions: "Conditions",
  colHutDetail: "Bunks and facilities",
  colCampDetail: "Access and facilities",
  colFee: "Fee",
  notice: "Notice {number}",
  markedClosed: "Marked closed",
  noFreedomCamping: "No freedom camping",
  bunks: "{count} bunks",
  bunksNotListed: "Bunks not listed",
  checkTitle: "Check before you go",
  checkText: "Fees, closures and access change. The DOC page for each place, current DOC alerts and signs on site take priority over this summary.",
  relatedHuts: "DOC huts in {name}",
  relatedCampsites: "DOC campsites in {name}",
  ctaEyebrowFreedom: "Plan the stay in KiwiCamping",
  ctaEyebrowMap: "The full map is in KiwiCamping",
  download: "Download app",
  downloadLabel: "Download KiwiCamping for iOS",
  passLine: PASS_LINE,
  indexEyebrow: "Department of Conservation data",
  nzAtAGlance: "New Zealand at a glance",
  indexMapLabel: "Map of the {noun} in the regions listed below",
  indexCtaText: "KiwiCamping maps DOC campsites, huts and bookable holiday parks across New Zealand with fees, facilities and DOC alerts. {pass}",
  range: "{from} to {to}",
  feeAdult: "Adult {price} per night",
  feeResident: "{price} (NZ resident)",
  feeInternational: "{price} (international)",
  currentType: "{type} (current)",
};

type KindStrings = {
  indexTitle: string; indexMetaTitle: string; indexIntro: string; noun: string; nounSingular: string;
  h1: string; metaTitle: string; metaDescription: string; intro: string; mapLabel: string; listTitle: string;
  ctaTitle: string; ctaText: string; proseTitle: string; indexCtaTitle: string; directoryExtra: string;
};
const kinds: Record<BuiltHubKind, KindStrings> = {
  camping: {
    indexTitle: "DOC campsites by region",
    indexMetaTitle: "DOC Campsites by Region: Fees, Facilities and Access",
    indexIntro: "Department of Conservation campsites region by region: how many there are, what they charge, how you reach them and which facilities they have, from DOC’s own data.",
    noun: "campsites", nounSingular: "campsite",
    h1: "DOC campsites in {name}",
    metaTitle: "DOC Campsites in {name}: {count} Sites, Fees, Facilities",
    metaDescription: "{count} Department of Conservation campsites in {name}: which are free, adult rates, campervan or walk-in access, facilities and a map, from DOC data.",
    intro: "{count} Department of Conservation campsites in DOC’s {name} region, with fees, access and facilities from DOC’s own data.",
    mapLabel: "Map of {count} DOC campsites in {name}",
    listTitle: "Campsites",
    ctaTitle: "All {count} campsites on one map",
    ctaText: "KiwiCamping shows every DOC campsite in {name} on the map with fees, facilities and DOC alerts, and puts the ones you pick into a trip with distances and dates. {pass}",
    proseTitle: "Camping with DOC in {name}",
    indexCtaTitle: "Every DOC campsite on one map",
    directoryExtra: "{value} free",
  },
  huts: {
    indexTitle: "DOC huts by region",
    indexMetaTitle: "DOC Huts by Region: Bunks, Fees and Bookings",
    indexIntro: "Department of Conservation backcountry huts region by region: how many there are, how many bunks, which are free, which must be booked and what they have inside, from DOC’s own data.",
    noun: "huts", nounSingular: "hut",
    h1: "DOC huts in {name}",
    metaTitle: "DOC Huts in {name}: {count} Huts, Bunks and Fees",
    metaDescription: "{count} Department of Conservation huts in {name}: bunks, free and paid huts, which need booking, heating and water, with a map, from DOC data.",
    intro: "{count} Department of Conservation huts in DOC’s {name} region, with bunks, fees and facilities from DOC’s own data.",
    mapLabel: "Map of {count} DOC huts in {name}",
    listTitle: "Huts",
    ctaTitle: "All {count} huts on one map",
    ctaText: "KiwiCamping shows every DOC hut in {name} on the map with bunks, fees and DOC alerts, next to the campsites and tracks around them. {pass}",
    proseTitle: "Tramping to DOC huts in {name}",
    indexCtaTitle: "Every DOC hut on one map",
    directoryExtra: "{value} bunks",
  },
  "freedom-camping": {
    indexTitle: "Freedom camping notices on DOC land",
    indexMetaTitle: "Freedom Camping on DOC Land: Notices by District",
    indexIntro: "Where the Department of Conservation prohibits or restricts freedom camping on conservation land, district by district. These are DOC notices, not council bylaws: on council land the council’s own rules apply.",
    noun: "notices", nounSingular: "notice",
    h1: "Freedom camping notices on DOC land: {name}",
    metaTitle: "Freedom Camping on DOC Land, {name}: {count} Notices",
    metaDescription: "Where DOC prohibits or restricts freedom camping on conservation land in its {name} district: {count} current notices, conditions and a map. Not council bylaws.",
    intro: "{count} current Department of Conservation notices that prohibit or restrict freedom camping on conservation land in DOC’s {name} district.",
    mapLabel: "Map of {count} DOC freedom camping notice areas in {name}",
    listTitle: "Notice areas",
    ctaTitle: "Find somewhere you can stay",
    ctaText: "KiwiCamping maps DOC campsites and bookable holiday parks across New Zealand, so you can find a place you are allowed to stay near {name}. {pass}",
    proseTitle: "What the notices mean in {name}",
    indexCtaTitle: "Every DOC campsite and hut on one map",
    directoryExtra: "{value} prohibited",
  },
};

/** National figures on the index pages (components/hub-page.tsx), by label. */
const indexLabels = ["DOC campsites in the data", "Free", "With a fee", "Bookable online through DOC", "Campervan access", "DOC huts in the data", "Bunks",
  "Must be booked through DOC", "Current DOC notices", "Historic notices (no longer current)", "DOC districts with notices"];

/** Hubs whose English page is indexable: the only ones a translator is asked for. */
export const translatableHubs = hubs.filter((hub) => hubKinds.includes(hub.kind as BuiltHubKind) && hubGate(hub).indexable);

/** Category words inside string fact values ("Standard campsite 8, Basic campsite 1", "Rivers and lakes 6"). */
const listTerms = (value: string) => value.split(", ").map((part) => part.replace(/ \d[\d,]*$/, "")).filter((part) => /^\p{L}[\p{L} ]+$/u.test(part));
const termFacts = new Set(["types", "landscape"]);

function labelsOf(list: Hub[]) {
  const facts: Record<string, string> = {};
  const terms: Record<string, string> = {};
  const links: Record<string, string> = {};
  for (const hub of list) {
    for (const fact of hub.facts) {
      facts[labelKey(fact.label)] = fact.label;
      if (termFacts.has(fact.key) && typeof fact.value === "string") for (const term of listTerms(fact.value)) terms[labelKey(term)] = term;
    }
    for (const place of hub.places) {
      for (const term of [place.type, ...(place.facilities ?? []), ...(place.access ?? []), ...(place.conditions ?? [])]) terms[labelKey(term)] = term;
      if (place.fee && !/^Adult /.test(place.fee)) terms[labelKey(place.fee)] = place.fee;
    }
    const prose = proseFor(hub);
    for (const link of [...hub.officialLinks, ...(prose?.sources ?? []), ...(prose?.councils ?? [])]) links[labelKey(link.label)] = link.label;
  }
  const sorted = (record: Record<string, string>) => Object.fromEntries(Object.entries(record).sort(([a], [b]) => a.localeCompare(b)));
  return { facts: sorted(facts), terms: sorted(terms), links: sorted(links) };
}

export type HubStrings = {
  common: typeof common;
  kinds: typeof kinds;
  index: Record<string, string>;
  facts: Record<string, string>;
  terms: Record<string, string>;
  links: Record<string, string>;
  prose: Record<string, string[]>;
};

/** The complete English source, in the shape of a locale file. */
export function hubSource(): HubStrings {
  return {
    common,
    kinds,
    index: Object.fromEntries(indexLabels.map((label) => [labelKey(label), label])),
    ...labelsOf(translatableHubs),
    prose: Object.fromEntries(translatableHubs.filter((hub) => proseFor(hub)).map((hub) => [hub.id, proseFor(hub)!.paragraphs])),
  };
}
export const hubSourceText = () => `${JSON.stringify(hubSource(), null, 2)}\n`;

// ------------------------------------------------------------------------------------------------
// Completeness

type HubTranslation = { [K in keyof HubStrings]?: K extends "kinds" ? Partial<Record<BuiltHubKind, Partial<KindStrings>>> : K extends "prose" ? Record<string, string[]> : Record<string, string> };
const files = hubTranslationFiles as unknown as Record<string, HubTranslation>;
const source = hubSource();

const filled = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;
const placeholders = (text: string) => (text.match(/\{[a-zA-Z]+\}/g) ?? []).sort().join();
const matches = (english: string, translated: unknown) => filled(translated) && placeholders(english) === placeholders(translated);
const allMatch = (english: Record<string, string>, translated: Record<string, unknown> | undefined) =>
  !!translated && Object.entries(english).every(([key, value]) => matches(value, translated[key]));

/** "5 pm" and "17 Uhr", "9:00" and "9" are the same time, so a translation may use its own clock. */
const clockTimes = (text: string) => text
  .replace(/\b(\d{1,2})(?:[:.]00)?\s*pm\b/gi, (_, hour: string) => String((Number(hour) % 12) + 12))
  .replace(/\b(\d{1,2})(?:[:.]00)?\s*am\b/gi, "$1")
  .replace(/\b(\d{1,2})[:.]00\b/g, "$1");
/** Every number in a paragraph, separators dropped: "4,046.5" and "4.046,5" are both 40465. */
export const proseNumbers = (text: string) => (clockTimes(text).match(/\d+(?:[.,   ]\d{3}(?!\d))*(?:[.,]\d+)?/g) ?? []).map((number) => number.replace(/\D/g, "")).sort().join(" ");

function isProseComplete(english: string[] | undefined, translated: unknown) {
  if (!english?.length) return true;
  if (!Array.isArray(translated) || translated.length !== english.length) return false;
  return english.every((paragraph, index) => filled(translated[index]) && proseNumbers(paragraph) === proseNumbers(translated[index]));
}

/** The shared strings every localised hub page and index uses. */
export function isHubCommonComplete(locale: string) {
  const file = files[locale];
  return !!file && allMatch(source.common, file.common) && allMatch(source.index, file.index)
    && (Object.keys(kinds) as BuiltHubKind[]).every((kind) => allMatch(kinds[kind], file.kinds?.[kind]));
}

/** True when this hub's page can render whole in the locale: shared strings, its own labels and terms, its own prose. */
export function isHubTranslated(locale: string, hub: Hub) {
  if (locale === "en") return true;
  const file = files[locale];
  if (!file || !isHubCommonComplete(locale)) return false;
  const own = labelsOf([hub]);
  return allMatch(own.facts, file.facts) && allMatch(own.terms, file.terms) && allMatch(own.links, file.links)
    && isProseComplete(proseFor(hub)?.paragraphs, file.prose?.[hub.id]);
}

/** The strings a localised page renders: the locale's when complete for it, otherwise English throughout. */
export function hubStrings(locale: string, complete: boolean): { strings: HubStrings; translated: boolean } {
  if (locale === "en" || !complete) {
    return { strings: { ...source, prose: Object.fromEntries(hubs.filter((hub) => proseFor(hub)).map((hub) => [hub.id, proseFor(hub)!.paragraphs])) }, translated: locale === "en" };
  }
  return { strings: files[locale] as HubStrings, translated: true };
}

/** Fills {placeholders}; unknown ones are left as written. */
export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{([a-zA-Z]+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));

export const term = (strings: HubStrings, text: string) => strings.terms[labelKey(text)] ?? text;

/** A fee as DOC's data writes it ("Adult $10 to $19 (NZ resident), $10 to $28 (international) per night"), in the page's language. */
export function localizeFee(strings: HubStrings, fee: string) {
  const adult = /^Adult (.+) per night$/.exec(fee);
  if (!adult) return term(strings, fee);
  const price = adult[1].split(", ").map((part) => {
    const resident = /^(.+) \(NZ resident\)$/.exec(part);
    const international = /^(.+) \(international\)$/.exec(part);
    const amount = (text: string) => localizeRanges(strings, text);
    if (resident) return fill(strings.common.feeResident, { price: amount(resident[1]) });
    if (international) return fill(strings.common.feeInternational, { price: amount(international[1]) });
    return amount(part);
  }).join(", ");
  return fill(strings.common.feeAdult, { price });
}

/** "$10 to $18", "230 to 256", "2012-12-01 to 2021-12-13" with the locale's range wording. */
export const localizeRanges = (strings: HubStrings, text: string) =>
  text.replace(/(\$?\d[\d.,-]*) to (\$?\d[\d.,-]*)/g, (_, from: string, to: string) => fill(strings.common.range, { from, to }));

/** A string fact value: ranges, category words and dates in the page's language. Names stay as written. */
export function localizeFactValue(strings: HubStrings, key: string, value: string, formatDate: (iso: string) => string) {
  let text = localizeRanges(strings, value);
  if (termFacts.has(key)) text = text.split(", ").map((part) => { const match = /^(.+?)( \d[\d,]*)?$/.exec(part)!; return `${term(strings, match[1])}${match[2] ?? ""}`; }).join(", ");
  return text.replace(/\b\d{4}-\d{2}-\d{2}\b/g, formatDate);
}
