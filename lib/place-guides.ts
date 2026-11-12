import { articles, type Article } from "@/lib/site";
import { builtHubs } from "@/lib/hubs";
import { hubGuides } from "@/lib/hub-regions";
import { distanceKm, places, placeStates, type Place, type PlaceState } from "@/lib/places";

/**
 * The links between the place pages and the guides, both ways, decided from the data and never page by
 * page: a guide's region names its DOC region, and the names in its `places` list (and a place named in
 * its title) pin it to the place pages they match. A place page links the guides pinned near it, the
 * guides that fit its type and its region's guides; a guide about one region shows five of its places.
 */
const norm = (text: string) => text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/\([^)]*\)/g, " ")
  .replace(/['’]/g, "").replace(/[^a-z0-9]+/g, " ").trim();

/** A DOC region's names: "Nelson/Tasman" answers to Nelson and to Tasman. */
const regionNames = placeStates.map((state) => ({ slug: state.slug, names: state.name.split("/").map(norm) }));
/** Places a guide's region may name that sit inside one DOC region. */
const regionAliases: Record<string, string> = {
  "queenstown lakes": "otago", whakatipu: "otago", wanaka: "otago", mackenzie: "canterbury", taupo: "central-north-island",
  westland: "west-coast", rakiura: "southland", "bay of islands": "northland", "east cape": "east-coast", picton: "marlborough",
};

/** The DOC regions a guide's region covers: none for a guide about all of New Zealand or one island. */
export function guideStates(article: Pick<Article, "region">): string[] {
  const region = ` ${norm(article.region)} `;
  const found = new Set<string>();
  for (const { slug, names } of regionNames) if (names.some((name) => region.includes(` ${name} `))) found.add(slug);
  for (const [alias, slug] of Object.entries(regionAliases)) if (region.includes(` ${alias} `)) found.add(slug);
  return [...found];
}

/** A name without the words every camp shares: "Lake Middleton Campsite" is "lake middleton". */
const generic = /\b(?:campsite|camping area|campground|holiday park|top 10|motor camp|hut|huts|area|town|national park|forest park|conservation park|scenic reserve|reserve)\b/g;
const key = (text: string) => norm(text).replace(generic, " ").replace(/\s+/g, " ").trim();

/**
 * The place pages a guide names, in the regions its region covers: a name in its `places` list that is
 * a place's name or area, or that a place's name starts with, and any place named in full in its title.
 */
export function guideAnchors(article: Article): Place[] {
  const states = guideStates(article);
  if (states.length === 0) return [];
  const names = new Set(article.places.map(key).filter((name) => name.length >= 5));
  const title = ` ${norm(article.title)} `;
  return places.filter((place) => {
    if (!states.includes(place.stateSlug)) return false;
    const name = key(place.name);
    return names.has(name) || [...names].some((entry) => name.startsWith(`${entry} `))
      || (place.park !== null && names.has(key(place.park)))
      || (norm(place.name).includes(" ") && title.includes(` ${norm(place.name)} `));
  });
}
const anchored = articles.map((article) => ({ article, anchors: guideAnchors(article) })).filter((entry) => entry.anchors.length > 0);

/** Guides pinned within `radius` km of a point, nearest first. */
function guidesNear(point: { lat: number; lng: number }, radius: number) {
  return anchored.map(({ article, anchors }) => ({ article, km: Math.min(...anchors.map((anchor) => distanceKm(point, anchor))) }))
    .filter((entry) => entry.km <= radius).sort((a, b) => a.km - b.km).map((entry) => entry.article.slug);
}

const live = new Set(articles.map((article) => article.slug));
/** The guide each kind of place links from its questions instead. */
export const rulesGuides = { doc_campsite: ["doc-campsite-rules", "the DOC campsite rules"], doc_hut: ["doc-hut-rules-etiquette", "the DOC hut rules"], holiday_park: ["holiday-parks-new-zealand-guide", "our guide to holiday parks"] } as const;

/** Guides that fit what kind of place it is. */
function typeGuides(place: Place): string[] {
  const list: string[] = [];
  if (place.dogs === "yes" || place.dogs === "leash") list.push("dogs-camping-new-zealand");
  if (place.type === "doc_hut") list.push(...(place.category === "Great Walk"
    ? ["nz-great-walks-2026-27-huts-campsites-booking-fees", "doc-hut-great-walk-booked-out"]
    : ["doc-huts-new-zealand-guide", "easy-doc-huts-families-first-timers"]));
  else if (place.type === "doc_campsite") {
    if (place.category === "Basic") list.push("camping-without-self-contained-vehicle-new-zealand");
    list.push("doc-campsite-pass-new-zealand", "doc-campsites-sell-out-summer-new-zealand");
  } else list.push("holiday-park-prices-new-zealand-2026", "family-holiday-parks-new-zealand");
  return list.filter((slug) => live.has(slug)).slice(0, 2);
}

/** The region's hub whose guides a place shares: its huts hub for a hut, its camping hub otherwise. */
const regionHub = (place: Place) => {
  const hubs = builtHubs.filter((hub) => hub.slug === place.stateSlug && hub.kind !== "freedom-camping");
  return hubs.find((hub) => hub.kind === (place.type === "doc_hut" ? "huts" : "camping")) ?? hubs[0];
};

const MAX_GUIDES = 6;
const placeCache = new Map<Place, string[]>();
/** The guides a place page links to: up to three pinned near it, two for its type, then its region's. */
export function placeGuides(place: Place): string[] {
  const cached = placeCache.get(place);
  if (cached) return cached;
  const rules = rulesGuides[place.type][0];
  const hub = regionHub(place);
  const picks = [...new Set([
    ...guidesNear(place, 60).slice(0, 3),
    ...typeGuides(place),
    ...(hub ? hubGuides(hub) : []),
  ])].filter((slug) => slug !== rules && live.has(slug)).slice(0, MAX_GUIDES);
  placeCache.set(place, picks);
  return picks;
}

/** Guides pinned to a district hub's own places, for its guide list. */
export const hubLocalGuides = (points: { lat: number; lng: number }[]) =>
  [...new Set(points.flatMap((point) => guidesNear(point, 15)))].slice(0, 3);

const byPhotos = (list: Place[]) => [...list].sort((a, b) => b.photoCount - a.photoCount || a.name.localeCompare(b.name));
/**
 * Five places for a guide clearly about one region, best-photographed first: those it names or that lie
 * within 30 km of them, then within 100 km, then the nearest others (or the region's best-photographed
 * when it is about the whole region and names none). A guide about more than one region, an island or
 * all of New Zealand gets none.
 */
export function guidePlaces(article: Article): { state: PlaceState; places: Place[] } | undefined {
  const states = guideStates(article);
  if (states.length !== 1) return undefined;
  const state = placeStates.find((candidate) => candidate.slug === states[0]);
  if (!state || state.places.length < 5) return undefined;
  const anchors = anchored.find((entry) => entry.article.slug === article.slug)?.anchors ?? [];
  // A guide that names none of the region's places shows them only when it is about the whole region.
  if (anchors.length === 0 && !article.slug.includes(state.slug)) return undefined;
  const away = (place: Place) => Math.min(...anchors.map((anchor) => distanceKm(anchor, place)));
  const within = (radius: number) => byPhotos(state.places.filter((place) => away(place) <= radius));
  const rest = anchors.length ? [...state.places].sort((a, b) => away(a) - away(b)) : byPhotos(state.places);
  // Two pages can share a name (one place listed twice by its sources); a row shows each name once.
  const names = new Set<string>();
  const picks = [...within(30), ...within(100), ...rest].filter((place) => !names.has(place.name) && names.add(place.name));
  return { state, places: picks.slice(0, 5) };
}
