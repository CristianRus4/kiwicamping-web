import { articles } from "./site";
import { indexableHubs, type Hub } from "./hubs";

/**
 * Links a hub page carries beyond its own data: the guides that cover its region or district, and the
 * same kind of hub next door. Both lists are by slug, so a scheduled guide joins on its publish day
 * (only `articles`, the live guides, are read) and a hub below the quality gate is never linked.
 */

/** DOC regions that share a boundary, plus the Cook Strait ferry between Wellington and Marlborough. */
const neighbours: Record<string, string[]> = {
  northland: ["auckland"],
  auckland: ["northland", "coromandel", "waikato"],
  coromandel: ["auckland", "waikato", "bay-of-plenty"],
  waikato: ["auckland", "coromandel", "bay-of-plenty", "central-north-island", "taranaki", "manawatu-whanganui"],
  "bay-of-plenty": ["coromandel", "waikato", "central-north-island", "east-coast"],
  "east-coast": ["bay-of-plenty", "central-north-island", "hawkes-bay"],
  "hawkes-bay": ["east-coast", "central-north-island", "manawatu-whanganui", "wairarapa"],
  "central-north-island": ["waikato", "bay-of-plenty", "east-coast", "hawkes-bay", "manawatu-whanganui", "taranaki"],
  taranaki: ["waikato", "central-north-island", "manawatu-whanganui"],
  "manawatu-whanganui": ["taranaki", "waikato", "central-north-island", "hawkes-bay", "wairarapa", "wellington-kapiti"],
  wairarapa: ["hawkes-bay", "manawatu-whanganui", "wellington-kapiti"],
  "wellington-kapiti": ["manawatu-whanganui", "wairarapa", "marlborough"],
  marlborough: ["wellington-kapiti", "nelson-tasman", "canterbury"],
  "nelson-tasman": ["marlborough", "west-coast", "canterbury"],
  "west-coast": ["nelson-tasman", "canterbury", "otago"],
  canterbury: ["marlborough", "nelson-tasman", "west-coast", "otago"],
  otago: ["canterbury", "west-coast", "southland", "fiordland"],
  southland: ["otago", "fiordland"],
  fiordland: ["southland", "otago"],
};

/** Guides for a DOC region (campsite and hut hubs), best first. */
const regionGuides: Record<string, string[]> = {
  northland: ["northland-cape-reinga-camping-route", "bay-of-islands-camping-week", "auckland-to-bay-of-islands-drive-guide", "freedom-camping-whangarei-2026", "freedom-camping-far-north-2026"],
  auckland: ["auckland-to-bay-of-islands-drive-guide", "freedom-camping-auckland-2026", "north-island-two-week-road-trip"],
  coromandel: ["coromandel-rotorua-road-trip", "freedom-camping-thames-coromandel-2026"],
  waikato: ["coromandel-rotorua-road-trip", "taranaki-forgotten-world-highway", "north-island-two-week-road-trip"],
  "bay-of-plenty": ["coromandel-rotorua-road-trip", "freedom-camping-tauranga-2026", "freedom-camping-whakatane-2026", "freedom-camping-rotorua-2026"],
  "east-coast": ["east-cape-road-trip", "lake-waikaremoana-great-walk-camping-2026-27"],
  "hawkes-bay": ["wellington-to-napier-drive-guide", "lake-waikaremoana-great-walk-camping-2026-27", "north-island-two-week-road-trip"],
  "central-north-island": ["north-island-two-week-road-trip", "auckland-to-wellington-drive-guide", "freedom-camping-taupo"],
  taranaki: ["taranaki-forgotten-world-highway", "freedom-camping-new-plymouth-2026"],
  "manawatu-whanganui": ["taranaki-forgotten-world-highway", "auckland-to-wellington-drive-guide"],
  wairarapa: ["wellington-wairarapa-camping-loop", "wellington-to-napier-drive-guide"],
  "wellington-kapiti": ["wellington-wairarapa-camping-loop", "freedom-camping-wellington-2026", "auckland-to-wellington-drive-guide"],
  "nelson-tasman": ["nelson-abel-tasman-golden-bay", "abel-tasman-coast-track-campsites-2026-27", "freedom-camping-tasman-2026"],
  marlborough: ["picton-kaikoura-christchurch-route", "freedom-camping-marlborough-2026"],
  "west-coast": ["west-coast-south-island-road-trip", "freedom-camping-west-coast", "arthurs-pass-camping-route", "wanaka-haast-pass-route", "paparoa-track-huts-booking-2026-27", "freedom-camping-westland-2026"],
  canterbury: ["banks-peninsula-camping-weekend", "christchurch-tekapo-aoraki-road-trip", "arthurs-pass-camping-route", "christchurch-to-queenstown-drive-guide"],
  otago: ["queenstown-glenorchy-camping", "wanaka-haast-pass-route", "southern-scenic-route-camping", "christchurch-to-dunedin-drive-guide"],
  southland: ["southern-scenic-route-camping", "rakiura-stewart-island-camping-guide", "hump-ridge-track-huts-booking-2026-27", "freedom-camping-southland-2026"],
  fiordland: ["fiordland-camping-road-trip", "queenstown-to-milford-sound-drive-guide", "milford-track-2026-27-huts-booking-fees"],
};

/** Guides for a DOC district (freedom-camping hubs), best first: its council's rules, then its road trips. */
const districtGuides: Record<string, string[]> = {
  "bay-of-islands": ["freedom-camping-far-north-2026", "bay-of-islands-camping-week", "auckland-to-bay-of-islands-drive-guide"],
  kaitaia: ["freedom-camping-far-north-2026", "northland-cape-reinga-camping-route"],
  "kauri-coast": ["northland-cape-reinga-camping-route"],
  whangarei: ["freedom-camping-whangarei-2026", "northland-cape-reinga-camping-route"],
  "tamaki-makaurau-auckland-mainland": ["freedom-camping-auckland-2026", "auckland-to-bay-of-islands-drive-guide"],
  hauraki: ["freedom-camping-thames-coromandel-2026", "coromandel-rotorua-road-trip"],
  whitianga: ["freedom-camping-thames-coromandel-2026", "coromandel-rotorua-road-trip"],
  waikato: ["coromandel-rotorua-road-trip", "north-island-two-week-road-trip"],
  "king-country": ["taranaki-forgotten-world-highway"],
  "new-plymouth": ["freedom-camping-new-plymouth-2026", "taranaki-forgotten-world-highway"],
  "east-coast": ["east-cape-road-trip"],
  "te-urewera": ["lake-waikaremoana-great-walk-camping-2026-27", "east-cape-road-trip"],
  "hawkes-bay": ["wellington-to-napier-drive-guide", "north-island-two-week-road-trip"],
  tongariro: ["north-island-two-week-road-trip", "auckland-to-wellington-drive-guide", "freedom-camping-taupo"],
  turangi: ["freedom-camping-taupo", "north-island-two-week-road-trip", "auckland-to-wellington-drive-guide"],
  whanganui: ["taranaki-forgotten-world-highway", "auckland-to-wellington-drive-guide"],
  wairarapa: ["wellington-wairarapa-camping-loop"],
  wellington: ["freedom-camping-wellington-2026", "wellington-wairarapa-camping-loop"],
  "golden-bay": ["freedom-camping-tasman-2026", "nelson-abel-tasman-golden-bay"],
  motueka: ["freedom-camping-tasman-2026", "nelson-abel-tasman-golden-bay", "abel-tasman-coast-track-campsites-2026-27"],
  "nelson-lakes": ["nelson-abel-tasman-golden-bay"],
  sounds: ["freedom-camping-marlborough-2026", "picton-kaikoura-christchurch-route"],
  "south-marlborough": ["freedom-camping-marlborough-2026", "picton-kaikoura-christchurch-route"],
  buller: ["freedom-camping-west-coast", "west-coast-south-island-road-trip", "paparoa-track-huts-booking-2026-27"],
  greymouth: ["freedom-camping-west-coast", "west-coast-south-island-road-trip", "arthurs-pass-camping-route"],
  "south-westland": ["freedom-camping-westland-2026", "freedom-camping-west-coast", "west-coast-south-island-road-trip", "wanaka-haast-pass-route"],
  "north-canterbury": ["picton-kaikoura-christchurch-route", "arthurs-pass-camping-route"],
  mahaanui: ["freedom-camping-christchurch-2026", "banks-peninsula-camping-weekend"],
  geraldine: ["christchurch-tekapo-aoraki-road-trip"],
  twizel: ["freedom-camping-mackenzie-2026", "christchurch-tekapo-aoraki-road-trip"],
  "central-otago": ["christchurch-to-queenstown-drive-guide", "wanaka-haast-pass-route"],
  "coastal-otago": ["freedom-camping-dunedin-2026", "southern-scenic-route-camping", "christchurch-to-dunedin-drive-guide"],
  wakatipu: ["freedom-camping-queenstown-lakes-2026", "queenstown-glenorchy-camping", "queenstown-to-milford-sound-drive-guide"],
  "te-anau": ["fiordland-camping-road-trip", "queenstown-to-milford-sound-drive-guide", "milford-track-2026-27-huts-booking-fees"],
  murihiku: ["freedom-camping-southland-2026", "southern-scenic-route-camping", "rakiura-stewart-island-camping-guide"],
};

/** Guides every hub of a kind links to, after its own region's. */
const kindGuides: Record<string, string[]> = {
  camping: ["doc-campsites-new-zealand-guide", "doc-campsite-rules", "nz-great-walks-2026-27-huts-campsites-booking-fees"],
  huts: ["doc-huts-new-zealand-guide", "doc-hut-rules-etiquette", "nz-great-walks-2026-27-huts-campsites-booking-fees"],
  "freedom-camping": ["freedom-camping-new-zealand-guide", "self-contained-campervan-green-warrant", "can-i-camp-anywhere-on-doc-land"],
};

const MAX_GUIDES = 6;
const live = new Set(articles.map((article) => article.slug));

/** The live guides a hub links to, never the one it already links under "Check before you go". */
export function hubGuides(hub: Hub): string[] {
  const own = (hub.kind === "freedom-camping" ? districtGuides : regionGuides)[hub.slug] ?? [];
  const list = [...own.filter((slug) => live.has(slug)).slice(0, MAX_GUIDES - 2), ...(kindGuides[hub.kind] ?? []).filter((slug) => live.has(slug))];
  return [...new Set(list)].filter((slug) => slug !== hub.guide.slug).slice(0, MAX_GUIDES);
}

/**
 * The same kind of hub next door, indexable only: for a region, the regions that border it; for a
 * freedom-camping district, the other districts of its DOC operations region.
 */
export function nearbyHubs(hub: Hub): Hub[] {
  const same = indexableHubs.filter((other) => other.kind === hub.kind && other.id !== hub.id);
  if (hub.kind === "freedom-camping") return same.filter((other) => other.operationsRegion && other.operationsRegion === hub.operationsRegion);
  const next = neighbours[hub.slug] ?? [];
  return same.filter((other) => next.includes(other.slug));
}

/** The official pages behind each kind's notes (lib/hub-strings.ts `notesTitle`, `noteRules`, `noteSeason`). Agency names stay as written. */
const FENZ = { name: "Fire and Emergency New Zealand", url: "https://www.checkitsalright.nz/" };
export const noteSources: Record<string, { name: string; url: string }[]> = {
  camping: [{ name: "Department of Conservation", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/booking-and-paying/" }, FENZ],
  huts: [{ name: "Department of Conservation", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/booking-and-paying/" }, FENZ],
  "freedom-camping": [{ name: "Department of Conservation", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" }, { name: "MBIE", url: "https://www.mbie.govt.nz/immigration-and-tourism/tourism/tourism-projects/freedom-camping" }, FENZ],
};
