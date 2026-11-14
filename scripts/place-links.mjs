/**
 * Writes place-pages.json: the app's place id to its page on this site, so the app can share a place as
 * its web page and open an incoming https://campingapp.nz/places/… link (Universal Links, see
 * public/.well-known/apple-app-site-association).
 *
 *   {"campsite:100030214": "/places/hawkes-bay/kuripapango-ox-bow-campsite/", …}
 *
 * Keys are the app's ids, not the site's: `campsite:<docId>` (site `doc_campsite:`), `hut:<docId>`
 * (site `doc_hut:`) and `bookit:<bookitId>` (site `holiday_park:`). Values are the page path with its
 * trailing slash, sorted by id.
 *
 * With --with-small it also covers every other place the app lists (lib/data/place-stubs.json), keyed by
 * the app's ids: `track:<uuid>`, council `campsite:<id>`, `dump:<n>`, `dayuse_north:<n>`, `dayuse_south:<n>`,
 * once their pages are published (scripts/export-place-pages.tsx writes them only while the site fits its
 * size budget). A place with no page is shared from the app as a /place/ link instead.
 *
 *   npm run places:links [-- --out <file>] [-- --with-small]   from the decrypted data (run scripts/decrypt-places.mjs first)
 *   npm run places:export [-- --with-small]                    also written at the end of every export
 *
 * It goes into the app's bundle, $CAMPING_APP_DATA/Kiwi/Camp/BundledData/place-pages.json, unless --out or
 * PLACE_PAGES_OUT names another file. The app repo commits it; this script never does.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appRepo = resolve(process.env.CAMPING_APP_DATA ?? "/Users/cristian/Developer/Apps/AppStore/Camping");

/** The site's place id to the app's. */
const APP_PREFIX = { doc_campsite: "campsite", doc_hut: "hut", holiday_park: "bookit" };
export function appPlaceId(siteId) {
  const [type, id] = siteId.split(":");
  if (!APP_PREFIX[type] || !id) throw new Error(`No app id for place ${siteId}`);
  return `${APP_PREFIX[type]}:${id}`;
}

/** The map for the full pages (site ids, mapped to the app's) and the small pages (already app ids). */
export function placePages(places, stubs = []) {
  const map = new Map();
  const add = (id, place) => {
    const path = `/places/${place.stateSlug}/${place.slug}/`;
    if (map.has(id)) throw new Error(`Place id ${id} has two pages: ${map.get(id)} and ${path}`);
    map.set(id, path);
  };
  for (const place of places) add(appPlaceId(place.id), place);
  for (const stub of stubs) add(stub.id, stub);
  return Object.fromEntries([...map].sort(([a], [b]) => a.localeCompare(b)));
}

/** Writes the map to `out`; returns the number of ids in it. */
export function writePlacePages(places, stubs, out) {
  const map = placePages(places, stubs);
  mkdirSync(dirname(resolve(out)), { recursive: true });
  writeFileSync(resolve(out), `${JSON.stringify(map, null, 1)}\n`);
  return Object.keys(map).length;
}

/** `--out <file>`, `--out=<file>`, PLACE_PAGES_OUT, or the app's bundled copy. */
export function placePagesOut(argv = process.argv.slice(2)) {
  const index = argv.findIndex((arg) => arg === "--out" || arg.startsWith("--out="));
  if (index !== -1) return argv[index].includes("=") ? argv[index].slice("--out=".length) : argv[index + 1];
  return process.env.PLACE_PAGES_OUT || resolve(appRepo, "Kiwi/Camp/BundledData/place-pages.json");
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const read = (file) => existsSync(resolve(repo, file)) ? JSON.parse(readFileSync(resolve(repo, file), "utf8")).places : [];
  const places = read("lib/data/places.json");
  const stubs = process.argv.includes("--with-small") ? read("lib/data/place-stubs.json") : [];
  if (!places.length) {
    console.error("lib/data/places.json has no places: run node scripts/decrypt-places.mjs first.");
    process.exit(1);
  }
  const out = placePagesOut();
  console.log(`Wrote ${writePlacePages(places, stubs, out)} place ids (${places.length} full pages, ${stubs.length} small pages) to ${out}.`);
}
