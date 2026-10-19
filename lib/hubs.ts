import hubData from "./data/hubs.json";
import { hubProse, type HubProse } from "./hub-prose";

/**
 * Data hubs: one page per DOC region or district, built from the app's own DOC data.
 *
 * The data comes from `lib/data/hubs.json` (written by scripts/export-app-data.mjs, never by hand).
 * Whether a hub is built, and whether it may be indexed, is decided here and nowhere else: the pages,
 * the sitemap, the index listings and scripts/audit-hubs.mjs all ask `hubGate`.
 */

export type HubKind = "camping" | "huts" | "freedom-camping" | "dump-stations";
export type HubFact = { key: string; label: string; value: string | number };
export type HubPlace = {
  id: string; name: string; type: string; locality: string | null; url: string | null; open: boolean;
  fee?: string | null; facilities?: string[]; access?: string[]; bunks?: number;
  conditions?: string[]; noticeNumber?: number | null; napalisId?: number | null; dateRuled?: string | null; areaHa?: number;
};
export type Hub = {
  id: string; kind: HubKind; slug: string; path: string; name: string; asOf: string;
  island?: string; operationsRegion?: string; source: string;
  placeCount: number; placeIds: string[]; facts: HubFact[]; places: HubPlace[]; points: [number, number][];
  officialLinks: { label: string; url: string }[];
  guide: { slug: string; href: string };
  related: string | null;
  vocabulary: string[];
};

export const hubs = (hubData as { dataAsOf: string; hubs: Hub[] }).hubs;
export const hubsDataAsOf = (hubData as { dataAsOf: string }).dataAsOf;

/** The quality floor. Thresholds only go up. */
export const HUB_GATE = {
  /** Fewer places than this and the hub is not built at all. */
  minPlacesToBuild: 5,
  /** New Zealand. Fewer places and the hub is built but noindex. */
  minPlacesToIndex: 12,
  minFactDimensions: 4,
  minUniqueFacts: 8,
  maxOverlap: 0.5,
  minProseWords: 250,
} as const;

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;
export const proseFor = (hub: Hub): HubProse | undefined => hubProse[hub.id];
export const proseWords = (hub: Hub) => (proseFor(hub)?.paragraphs ?? []).reduce((sum, paragraph) => sum + words(paragraph), 0);

const factId = (fact: HubFact) => `${fact.key}=${fact.value}`;
/** Facts no sibling hub of the same kind shares exactly. */
export function uniqueFacts(hub: Hub) {
  const siblings = hubs.filter((other) => other.kind === hub.kind && other.id !== hub.id && other.placeCount >= HUB_GATE.minPlacesToBuild);
  const shared = new Set(siblings.flatMap((other) => other.facts.map(factId)));
  return hub.facts.filter((fact) => !shared.has(factId(fact)));
}

/** The largest share of this hub's places that also appear in one other built hub. */
export function maxOverlap(hub: Hub) {
  const mine = new Set(hub.placeIds);
  let worst = { ratio: 0, with: "" };
  for (const other of hubs) {
    if (other.id === hub.id || other.placeCount < HUB_GATE.minPlacesToBuild) continue;
    const common = other.placeIds.filter((id) => mine.has(id)).length;
    const ratio = mine.size ? common / mine.size : 0;
    if (ratio > worst.ratio) worst = { ratio, with: other.id };
  }
  return worst;
}

export type HubGate = { built: boolean; indexable: boolean; reasons: string[] };

export function hubGate(hub: Hub): HubGate {
  if (hub.placeCount < HUB_GATE.minPlacesToBuild) return { built: false, indexable: false, reasons: [`${hub.placeCount} places (needs ${HUB_GATE.minPlacesToBuild} to build)`] };
  const reasons: string[] = [];
  if (hub.placeCount < HUB_GATE.minPlacesToIndex) reasons.push(`${hub.placeCount} places (needs ${HUB_GATE.minPlacesToIndex})`);
  if (hub.facts.length < HUB_GATE.minFactDimensions) reasons.push(`${hub.facts.length} fact dimensions (needs ${HUB_GATE.minFactDimensions})`);
  const unique = uniqueFacts(hub).length;
  if (unique < HUB_GATE.minUniqueFacts) reasons.push(`${unique} facts not shared with a sibling (needs ${HUB_GATE.minUniqueFacts})`);
  const overlap = maxOverlap(hub);
  if (overlap.ratio > HUB_GATE.maxOverlap) reasons.push(`${Math.round(overlap.ratio * 100)}% of places also in ${overlap.with}`);
  const prose = proseWords(hub);
  if (prose < HUB_GATE.minProseWords) reasons.push(`${prose} words of hub prose (needs ${HUB_GATE.minProseWords})`);
  return { built: true, indexable: reasons.length === 0, reasons };
}

export const builtHubs = hubs.filter((hub) => hubGate(hub).built);
export const indexableHubs = builtHubs.filter((hub) => hubGate(hub).indexable);
export const hubsOfKind = (kind: HubKind) => builtHubs.filter((hub) => hub.kind === kind);
export const getHub = (kind: HubKind, slug: string) => builtHubs.find((hub) => hub.kind === kind && hub.slug === slug);

/* ------------------------------------------------------------------------------------------------
 * Grounding: every number and proper noun in a hub's prose must come from its own data record or
 * from the official sources the prose cites.
 * ---------------------------------------------------------------------------------------------- */

/** Proper nouns any hub may use without a data record naming them. Keep this short. */
const GLOBAL_NAMES = new Set([
  "DOC", "Department", "Conservation", "New", "Zealand", "KiwiCamping", "North", "South", "Island", "Islands",
  "Great", "Walk", "Walks", "Pass", "iPhone", "App", "Store", "Freedom", "Camping", "Act", "NZ", "NZD",
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
]);
/**
 * Ordinary words that may open a sentence. A capitalised word in the opening position that is not
 * here is treated as a proper noun and must be grounded, so a new sentence opener is a deliberate
 * addition to this list rather than a way round the check.
 */
const SENTENCE_STARTERS = new Set([
  "A", "About", "Across", "After", "All", "Along", "Also", "An", "And", "Any", "Around", "As", "At", "Away",
  "Back", "Be", "Because", "Before", "Below", "Beyond", "Book", "Both", "Bring", "But", "By", "Camp", "Campers",
  "Campsites", "Carry", "Check", "Closer", "Conditions", "Count", "Dogs", "Down", "Drivers", "During", "Each",
  "Either", "Elsewhere", "Even", "Every", "Everything", "Expect", "Facilities", "Families", "Fees", "Few", "Fewer",
  "For", "From", "Further", "Groups", "Half", "Here", "Higher", "How", "Huts", "If", "In", "Inland", "Instead",
  "Is", "It", "Its", "Just", "Keep", "Large", "Larger", "Less", "Like", "Look", "Many", "More", "Most", "Much",
  "Near", "Nearly", "Neither", "Nights", "No", "None", "Nor", "Not", "Nothing", "Notices", "Of", "On", "Once",
  "One", "Only", "Or", "Other", "Others", "Out", "Outside", "Over", "Overall", "Past", "Plan", "Prices", "Read",
  "Restricted", "Prohibited", "Roughly", "Several", "Since", "Small", "Smaller", "So", "Some", "Still",
  "Such", "That", "The", "Their", "Then", "There", "These", "They", "This", "Those", "Three", "Through", "To",
  "Together", "Two", "Under", "Unlike", "Until", "Up", "Use", "Walkers", "Water", "We", "What", "When", "Where",
  "Whether", "Which", "While", "Who", "Why", "With", "Within", "Without", "Yet", "You", "Your",
]);

const NUMBER = /\d[\d,]*(?:\.\d+)?/g;
const normaliseNumber = (value: string) => value.replace(/,/g, "").replace(/\.0+$/, "");
const CAPITALISED = /^[A-ZĀĒĪŌŪ][\p{L}\p{M}'’-]*$/u;
const splitWords = (text: string) => text.split(/[\s/()\[\],;:."“”!?]+/).filter(Boolean);

/** Every string reachable from a value. */
function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (typeof value === "number") return [String(value)];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

export function groundingErrors(hub: Hub, prose: HubProse | undefined = proseFor(hub)): string[] {
  if (!prose) return [];
  const record = strings({ ...hub, placeIds: undefined, points: undefined });
  const cited = strings(prose.sources ?? []);
  const corpus = [...record, ...cited];
  // Links and record identifiers are full of digits that are not facts, so numbers come from text only.
  const numbers = new Set(corpus.filter((text) => !/^https?:|^[a-z-]+:\d+$/.test(text)).flatMap((text) => (text.match(NUMBER) ?? []).map(normaliseNumber)));
  const names = new Set(corpus.flatMap(splitWords).map((word) => word.replace(/['’]s$/, "")));
  const errors: string[] = [];
  for (const paragraph of prose.paragraphs) {
    for (const value of paragraph.match(NUMBER) ?? []) {
      if (!numbers.has(normaliseNumber(value))) errors.push(`number ${value} is not in the ${hub.id} data or its cited sources`);
    }
    for (const sentence of paragraph.split(/(?<=[.!?])\s+/)) {
      splitWords(sentence).forEach((raw, index) => {
        const word = raw.replace(/['’]s$/, "");
        if (!CAPITALISED.test(word) || GLOBAL_NAMES.has(word) || names.has(word)) return;
        if (index === 0 && SENTENCE_STARTERS.has(word)) return;
        errors.push(`proper noun "${word}" is not in the ${hub.id} data or its cited sources`);
      });
    }
  }
  return [...new Set(errors)];
}
