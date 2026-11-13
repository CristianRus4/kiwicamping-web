/**
 * Exports the place pages' data (one page per DOC campsite, DOC hut and BookIt holiday park) from the
 * KiwiCamping app's bundled data.
 *
 *   npm run places:export    (CAMPING_APP_DATA defaults to /Users/cristian/Developer/Apps/AppStore/Camping)
 *
 * What it writes:
 *   lib/data/places.json.enc       committed. AES-256-GCM with PLACES_KEY (the environment, or the macOS
 *                                  keychain item "camping-places-key", account "kiwicamping-web").
 *   lib/data/places.json           the plain copy the build reads. Gitignored: this repo is public, so the
 *                                  readable data never leaves this Mac or CI (scripts/decrypt-places.mjs).
 *   lib/data/places.photos.json    gitignored cache of which photo links load, and how wide they are.
 *   place-pages.json               the app's place id to its page path, at PLACE_PAGES_OUT when set
 *                                  (scripts/place-links.mjs; `npm run places:links` writes it alone).
 *
 * Pages load photos straight from where the app loads them (Cristian, 12 Nov 2026): DOC campsites and
 * huts from the app's photo repository, holiday parks from BookIt. Each link is checked here so a dead
 * one never reaches a page. What a page may show was also his call: photos and a description excerpt
 * from DOC, everything from the BookIt partner feed (our agent agreement), each with a small credit.
 * The full text and amenity lists never enter the data.
 *
 * DOC coordinates come in New Zealand Transverse Mercator (NZTM2000) and are converted to latitude and
 * longitude here. Each holiday park takes the DOC region of its nearest DOC campsite or hut, so the whole
 * directory uses the same regions as the site's DOC hubs.
 */
import { createCipheriv, randomBytes } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { placePagesOut, writePlacePages } from "./place-links.mjs";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appRepo = resolve(process.env.CAMPING_APP_DATA ?? "/Users/cristian/Developer/Apps/AppStore/Camping");
const bundled = resolve(appRepo, "Kiwi/Camp/BundledData");
const plainPath = resolve(repo, "lib/data/places.json");
const encryptedPath = resolve(repo, "lib/data/places.json.enc");
const probePath = resolve(repo, "lib/data/places.photos.json");
const probes = existsSync(probePath) ? JSON.parse(readFileSync(probePath, "utf8")) : {};
const PHOTO_BASE = "https://raw.githubusercontent.com/CristianRus4/kiwicamping/main";

const PHOTOS = 5;
const EXCERPT = 300;
const SHOWN = 6;
const MIN_DESCRIPTION = 60;
const MIN_PHOTO_WIDTH = 560;
const CONCURRENCY = 12;

/** The DOC regions, as the site's hubs name them (lib/data/hubs.json). */
const REGIONS = {
  "Auckland": "auckland", "Bay of Plenty": "bay-of-plenty", "Canterbury": "canterbury", "Central North Island": "central-north-island",
  "Coromandel": "coromandel", "East Coast": "east-coast", "Fiordland": "fiordland", "Hawke’s Bay": "hawkes-bay", "Hawke's Bay": "hawkes-bay",
  "Manawatu/Whanganui": "manawatu-whanganui", "Marlborough": "marlborough", "Nelson/Tasman": "nelson-tasman", "Northland": "northland",
  "Otago": "otago", "Southland": "southland", "Taranaki": "taranaki", "Waikato": "waikato", "Wairarapa": "wairarapa",
  "Wellington/Kapiti": "wellington-kapiti", "West Coast": "west-coast",
};
const hubs = JSON.parse(readFileSync(resolve(repo, "lib/data/hubs.json"), "utf8"));
const regionName = (slug) => (hubs.hubs ?? hubs).find((hub) => hub.id === `camping/${slug}` || hub.id === `huts/${slug}`)?.name ?? slug;

const FACILITIES = {
  bbq: "Barbecue", boat_launching: "Boat launching", campfires: "Campfires allowed", cooking: "Cooking facilities", cooking_shelter: "Cooking shelter",
  dump_station: "Dump station", heating: "Heating", jetty: "Jetty", lighting: "Lighting", mattresses: "Mattresses", phone: "Phone",
  powered_sites: "Powered sites", shop: "Shop", shower_cold: "Cold showers", shower_hot: "Hot showers", stove: "Stove", toilets: "Toilets",
  toilets_flush: "Flush toilets", toilets_non_flush: "Non-flush toilets", unpowered_sites: "Unpowered sites", water_stream: "Water from a stream",
  water_supply: "Water supply", water_tap_non_treated: "Tap water (untreated)", water_tap_treated: "Treated tap water", wheelchair_accesible: "Wheelchair access",
};
const ACTIVITIES = {
  biking: "Biking", birdwatching: "Birdwatching", boating: "Boating", camping: "Camping", caving: "Caving", climbing: "Climbing", diving: "Diving",
  fishing: "Fishing", horseriding: "Horse riding", hunting: "Hunting", kayaking: "Kayaking", picnicking: "Picnicking", rafting: "Rafting",
  scenicdriving: "Scenic driving", skiing: "Skiing", swimming: "Swimming", walking: "Walking",
};
const CATEGORIES = { great_walk: "Great Walk", serviced: "Serviced", serviced_alpine: "Serviced alpine", standard: "Standard", basic: "Basic", backcountry: "Backcountry" };

/** The key from the environment (CI) or the macOS keychain; undefined when neither has it. */
function placesKey() {
  let value = process.env.PLACES_KEY;
  if (!value) {
    try { value = execFileSync("security", ["find-generic-password", "-s", "camping-places-key", "-a", "kiwicamping-web", "-w"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch { return undefined; }
  }
  const key = Buffer.from(value, "base64");
  if (key.length !== 32) throw new Error("PLACES_KEY must be 32 bytes, base64");
  return key;
}
function encrypt(text, key) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const data = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);
  return JSON.stringify({ v: 1, iv: iv.toString("base64"), tag: cipher.getAuthTag().toString("base64"), data: data.toString("base64") });
}

/** NZTM2000 (EPSG:2193) to WGS84 latitude and longitude: the inverse Transverse Mercator on GRS80. */
function nztmToLatLng(northing, easting) {
  const a = 6378137, f = 1 / 298.257222101, k0 = 0.9996, lon0 = 173 * Math.PI / 180, fe = 1600000, fn = 10000000;
  const e2 = f * (2 - f), ep2 = e2 / (1 - e2), n = f / (2 - f);
  const x = easting - fe, y = northing - fn;
  const A = a / (1 + n) * (1 + n * n / 4 + n ** 4 / 64);
  const mu = y / (k0 * A);
  const b1 = 3 * n / 2 - 27 * n ** 3 / 32, b2 = 21 * n * n / 16 - 55 * n ** 4 / 32, b3 = 151 * n ** 3 / 96, b4 = 1097 * n ** 4 / 512;
  const phi1 = mu + b1 * Math.sin(2 * mu) + b2 * Math.sin(4 * mu) + b3 * Math.sin(6 * mu) + b4 * Math.sin(8 * mu);
  const sin1 = Math.sin(phi1), cos1 = Math.cos(phi1), tan1 = Math.tan(phi1);
  const N1 = a / Math.sqrt(1 - e2 * sin1 * sin1), R1 = a * (1 - e2) / (1 - e2 * sin1 * sin1) ** 1.5;
  const T1 = tan1 * tan1, C1 = ep2 * cos1 * cos1, D = x / (N1 * k0);
  const lat = phi1 - (N1 * tan1 / R1) * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * ep2) * D ** 4 / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * ep2 - 3 * C1 * C1) * D ** 6 / 720);
  const lng = lon0 + (D - (1 + 2 * T1 + C1) * D ** 3 / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * ep2 + 24 * T1 * T1) * D ** 5 / 120) / cos1;
  return { lat: lat * 180 / Math.PI, lng: lng * 180 / Math.PI };
}

const slugify = (value) => value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/&/g, " and ").replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const clean = (value) => (value ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
function excerpt(text, limit) {
  if (text.length <= limit) return { text, more: false };
  const cut = text.slice(0, limit);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  return { text: end > limit * 0.4 ? cut.slice(0, end + 1) : `${cut.slice(0, cut.lastIndexOf(" "))}…`, more: true };
}
function clock(value) {
  const match = /^(\d{1,2})[:.]?(\d{2})$/.exec((value ?? "").trim());
  if (!match) return null;
  const hour = Number(match[1]), minute = match[2];
  if (hour > 23) return null;
  return `${hour % 12 || 12}:${minute} ${hour < 12 ? "am" : "pm"}`;
}
const codes = (value, labels) => [...new Set((value ?? "").split(",").map((code) => code.trim()).filter((code) => labels[code]).map((code) => labels[code]))];
const km = (a, b) => {
  const rad = Math.PI / 180, dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};
/** South Island (with Stewart Island) or North Island, from the coordinates. */
const islandOf = ({ lat, lng }) => (lat < -40.4 && (lng < 174.4 || lat < -41.6) ? "South Island" : "North Island");

async function probe(url) {
  if (url in probes) return probes[url];
  let width = 0;
  try {
    const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (Macintosh) camping-site-builder", range: "bytes=0-65535" }, signal: AbortSignal.timeout(15000) });
    if (response.ok && /^image\//.test(response.headers.get("content-type") ?? "image/")) {
      const head = Buffer.from(await response.arrayBuffer());
      width = (await sharp(head).metadata().catch(() => ({}))).width ?? -1;
    }
  } catch {
    width = 0;
  }
  probes[url] = width;
  return width;
}
/**
 * Whether a booking link still opens the park's booking page: BookIt sends links of operators it no
 * longer lists to its own sales page, and such a park gets no Book now button. Cached like the photos.
 */
async function bookable(url) {
  const key = `booking:${url}`;
  if (key in probes) return probes[key] === 1;
  let ok = 0;
  try {
    const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (Macintosh) camping-site-builder" }, signal: AbortSignal.timeout(25000) });
    ok = response.ok && !/solutions-for|\/operators\/?$/.test(response.url) ? 1 : 0;
  } catch {
    ok = 0;
  }
  probes[key] = ok;
  return ok === 1;
}

async function photosFor(urls) {
  const found = [];
  for (const url of urls) {
    if (found.length === PHOTOS) break;
    const width = await probe(url);
    if (width === -1 || width >= MIN_PHOTO_WIDTH) found.push({ url, width });
  }
  return found.sort((a, b) => b.width - a.width);
}
async function pool(items, job) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (next < items.length) { const index = next++; results[index] = await job(items[index], index); }
  }));
  return results;
}

const read = (file) => JSON.parse(readFileSync(resolve(bundled, file), "utf8"));
const doc = [
  ...read("campsites.json").map((site) => ({ site, type: "doc_campsite", photo: `${PHOTO_BASE}/campsites_images/campsite_${site.id}.jpg` })),
  ...read("huts.json").map((site) => ({ site, type: "doc_hut", photo: `${PHOTO_BASE}/huts_images/hut_${site.id}.jpg` })),
].filter(({ site }) => site.status === "open" && REGIONS[site.region] && Number(site.latitude) > 4000000);
for (const entry of doc) Object.assign(entry, nztmToLatLng(Number(site(entry).latitude), Number(site(entry).longitude)));
function site(entry) { return entry.site; }

const parks = read("bookit.json").filter((item) => item.product_type === "Accommodation" && item.accomm_type1 === "Caravan Parks & Camping"
  && /^https:\/\/book\.bookit\.co\.nz\/agent\/kiwicamping\//.test(item.booking_link ?? "") && Number.isFinite(Number(item.latitude)));

const candidates = [
  ...doc.map((entry) => {
    const { site: item, type } = entry;
    const location = clean(item.location).replace(/^Located in\s+/i, "") || null;
    return {
      key: `${type}:${item.id}`, type, name: clean(item.name), region: REGIONS[item.region], lat: entry.lat, lng: entry.lng, urls: [entry.photo],
      description: clean(item.description), park: location, category: CATEGORIES[item.type] ?? null,
      amenities: codes(item.facilities, FACILITIES), activities: codes(item.activities, ACTIVITIES),
      dogs: /no dogs/i.test(item.dogs ?? "") ? "no" : /leash/i.test(item.dogs ?? "") ? "leash" : /permit/i.test(item.dogs ?? "") ? "permit" : /allowed/i.test(item.dogs ?? "") ? "yes" : null,
      access: (item.access ?? "").split(",").map((mode) => mode.trim()).filter(Boolean),
      fee: /free/i.test(item.price ?? "") ? "free" : /paid/i.test(item.price ?? "") ? "paid" : null,
      bookingRequired: item.bookable === "True" ? true : null,
      sites: type === "doc_hut" ? (Number(item.bunks) || null) : (Number(item.powered_sites || 0) + Number(item.unpowered_sites || 0)) || null,
      walk: type === "doc_hut" && /hour/i.test(item.proximity_road ?? "") ? clean(item.proximity_road).toLowerCase() : null,
      credit: "DOC, CC BY 4.0", booking: null, stars: null, checkIn: null, checkOut: null,
    };
  }),
  ...parks.map((item) => {
    const point = { lat: Number(item.latitude), lng: Number(item.longitude) };
    const nearest = doc.reduce((best, entry) => { const distance = km(point, entry); return distance < best.distance ? { entry, distance } : best; }, { entry: undefined, distance: Infinity }).entry;
    const hours = item.operator_hours ?? "";
    return {
      key: `holiday_park:${item.id}`, type: "holiday_park", name: clean(item.name), region: nearest ? REGIONS[nearest.site.region] : null, lat: point.lat, lng: point.lng,
      urls: ["image", "image2", "image3", "image4", "image5", "image6"].map((field) => item[field]).filter((url) => /^https:\/\//.test(url ?? "")),
      description: clean(item.description), park: clean(item.location || item.address) || null, category: null,
      amenities: [...new Set((item.holy_facilities ?? "").split(",").map((name) => name.trim()).filter(Boolean))], activities: [],
      dogs: /pets? (by arrangement|allowed|friendly)|dogs? (allowed|welcome)/i.test(`${item.holy_facilities} ${item.dogs}`) ? "yes" : null,
      access: [], fee: "paid", bookingRequired: null, sites: null, walk: null,
      credit: "the operator, via BookIt", booking: item.booking_link, stars: Number(item.rating) || null,
      checkIn: clock(/check in:\s*([\d:.]+)/i.exec(hours)?.[1]), checkOut: clock(/check out:\s*([\d:.]+)/i.exec(hours)?.[1]),
    };
  }),
].filter((place) => place.region && place.description.length >= MIN_DESCRIPTION);

// Slugs are unique within a region: a repeated name takes its type, then its id.
const used = new Set();
for (const place of candidates) {
  let slug = slugify(place.name);
  if (used.has(`${place.region}/${slug}`)) slug = `${slug}-${place.type === "doc_hut" ? "hut" : place.type === "doc_campsite" ? "campsite" : "holiday-park"}`;
  if (used.has(`${place.region}/${slug}`)) slug = `${slug}-${slugify(place.key.split(":")[1])}`;
  used.add(`${place.region}/${slug}`);
  place.slug = slug;
}

let done = 0;
const built = await pool(candidates, async (place) => {
  const files = await photosFor(place.urls);
  if (++done % 250 === 0) console.log(`  ${done} of ${candidates.length} places`);
  if (files.length === 0) return undefined;
  const holidayPark = place.type === "holiday_park";
  const text = holidayPark ? excerpt(place.description, 1600) : excerpt(place.description, EXCERPT);
  return {
    id: place.key, slug: place.slug, type: place.type, name: place.name,
    state: place.region, stateSlug: place.region, stateName: regionName(place.region), island: islandOf(place),
    park: place.park, locality: null, category: place.category,
    lat: Number(place.lat.toFixed(4)), lng: Number(place.lng.toFixed(4)),
    description: text.text, descriptionMore: text.more,
    amenities: holidayPark ? place.amenities : place.amenities.slice(0, SHOWN), amenityCount: place.amenities.length,
    activities: place.activities.slice(0, SHOWN), activityCount: place.activities.length,
    fee: place.fee, dogs: place.dogs, access: place.access, sites: place.sites, walk: place.walk, bookingRequired: place.bookingRequired,
    photos: files.map((photo) => photo.url), heroWidth: files[0].width, photoCount: place.urls.length,
    credit: place.credit, booking: place.booking && await bookable(place.booking) ? place.booking : null, checkIn: place.checkIn, checkOut: place.checkOut, stars: place.stars,
  };
});
const places = built.filter(Boolean).sort((a, b) => a.stateSlug.localeCompare(b.stateSlug) || a.name.localeCompare(b.name));
writeFileSync(probePath, `${JSON.stringify(probes)}\n`);
const data = JSON.stringify({ exportedAt: new Date().toISOString().slice(0, 10), places }, null, 1);
writeFileSync(plainPath, `${data}\n`);
const key = placesKey();
if (key) writeFileSync(encryptedPath, `${encrypt(data, key)}\n`);
else console.warn("No PLACES_KEY in the environment or the keychain: wrote the plain copy only, not lib/data/places.json.enc.");
const linksOut = placePagesOut();
if (linksOut) console.log(`Wrote ${writePlacePages(places, linksOut)} place pages to ${linksOut}.`);
const count = (type) => places.filter((entry) => entry.type === type).length;
console.log(`Exported ${places.length} places (${count("doc_campsite")} DOC campsites, ${count("doc_hut")} DOC huts, ${count("holiday_park")} holiday parks) with ${places.reduce((sum, entry) => sum + entry.photos.length, 0)} photos.`);
