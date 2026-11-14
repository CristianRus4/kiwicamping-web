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
import assert from "node:assert/strict";
import { copyFileSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { DatabaseSync } from "node:sqlite";
import { gzipSync } from "node:zlib";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { appPlaceId, placePagesOut, writePlacePages } from "./place-links.mjs";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appRepo = resolve(process.env.CAMPING_APP_DATA ?? "/Users/cristian/Developer/Apps/AppStore/Camping");
const bundled = resolve(appRepo, "Kiwi/Camp/BundledData");
const plainPath = resolve(repo, "lib/data/places.json");
const encryptedPath = resolve(repo, "lib/data/places.json.enc");
const probePath = resolve(repo, "lib/data/places.photos.json");
const probes = existsSync(probePath) ? JSON.parse(readFileSync(probePath, "utf8")) : {};
const stubsPath = resolve(repo, "lib/data/place-stubs.json");
const stubsEncryptedPath = resolve(repo, "lib/data/place-stubs.json.enc");
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
/** Like encrypt(), of the gzipped text: the small pages' data is megabytes of repetitive JSON. */
function encryptGzip(text, key) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const data = Buffer.concat([cipher.update(gzipSync(text, { level: 9 })), cipher.final()]);
  return JSON.stringify({ v: 1, gzip: true, iv: iv.toString("base64"), tag: cipher.getAuthTag().toString("base64"), data: data.toString("base64") });
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

// ---- The small pages (scripts/build-place-stubs.mjs) -------------------------------------------------
// Every other place the app lists, keyed by the app's own id (`<kind>:<id>`, council campgrounds
// `campsite:<id without NZ>`): noindex plain pages, so the app can share any place as a link.
const full = new Set(places.map((place) => appPlaceId(place.id)));
const docPoints = doc.map((entry) => ({ lat: entry.lat, lng: entry.lng, region: REGIONS[entry.site.region] }));
/** The DOC region of the nearest DOC campsite or hut, for places whose data names none (or another scheme). */
const regionNear = (point) => docPoints.reduce((best, other) => { const distance = km(point, other); return distance < best.distance ? { region: other.region, distance } : best; }, { region: undefined, distance: Infinity }).region;
/** The app's reading of coordinates: DOC's NZTM2000 eastings and northings, or WGS84. */
function pointOf(row) {
  const lat = Number(row.latitude), lng = Number(row.longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || row.latitude === null || row.longitude === null || row.latitude === "" || row.longitude === "") return null;
  if (lng >= 1_000_000 && lng <= 2_500_000 && lat >= 4_500_000 && lat <= 7_000_000) return nztmToLatLng(lat, lng);
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180 || (lat === 0 && lng === 0)) return null;
  return { lat, lng };
}
const BOOKIT_TYPES = {
  "caravan parks & camping": ["holiday_park", "Holiday park"], motel: ["motel", "Motel"], "b&b/guesthouse": ["bed_breakfast", "B&B or guesthouse"],
  "hotels & resorts": ["hotel_resort", "Hotel or resort"], lodge: ["lodge", "Lodge"], "budget/backpackers": ["backpacker_hostel", "Backpackers"],
  "self contained": ["self_contained", "Self-contained stay"], "studio/apartments": ["studio_apartment", "Apartment"], houses: ["house", "Holiday house"],
  "chalets/villas/cottages": ["chalet_villa_cottage", "Cottage or villa"], farmstay: ["farm_station_stay", "Farm stay"], retreat: ["retreat", "Retreat"],
};
const bookitType = (item) => /^tours$/i.test(item.product_type ?? "") ? ["tour", "Tour"] : BOOKIT_TYPES[(item.accomm_type1 ?? item.accomm_type2 ?? "").toLowerCase()] ?? ["roofed_accommodation", "Guest accommodation"];
const BOOKIT_AGENT = /^https:\/\/book\.bookit\.co\.nz\/agent\/kiwicamping\//;
const DOC_BOOKING = /^https:\/\/([a-z0-9-]+\.)*doc\.govt\.nz\//;
const DOGS = (value) => /no dogs|not allowed/i.test(value ?? "") ? "no" : /leash/i.test(value ?? "") ? "leash" : /permit/i.test(value ?? "") ? "permit" : /allowed|welcome/i.test(value ?? "") ? "yes" : null;
const FEE = (value) => /free/i.test(value ?? "") ? "free" : /paid/i.test(value ?? "") ? "paid" : null;
const shortText = (value) => { const text = clean(value); return text ? excerpt(text, EXCERPT).text : null; };

const smallRows = [];
const addSmall = (row) => { if (!full.has(row.id) && row.point) smallRows.push(row); };
for (const [file, kind, typeName] of [["campsites.json", "campsite", "DOC campsite"], ["huts.json", "hut", "DOC hut"]]) {
  for (const item of read(file)) addSmall({
    id: `${kind}:${item.id}`, stable: true, kind, type: kind === "hut" ? "doc_hut" : "doc_campsite", typeName, category: CATEGORIES[item.type] ?? null,
    access: (item.access ?? "").split(",").map((mode) => mode.trim()).filter(Boolean), activities: codes(item.activities, ACTIVITIES),
    walk: kind === "hut" && /hour/i.test(item.proximity_road ?? "") ? clean(item.proximity_road).toLowerCase() : null, bookingRequired: item.bookable === "True" || item.bookable === true ? true : null, name: clean(item.name), region: REGIONS[item.region], point: pointOf(item),
    locality: clean(item.location).replace(/^Located in\s+/i, "") || null, closed: item.status !== "open",
    description: shortText(item.description), photo: `${PHOTO_BASE}/${kind === "hut" ? "huts_images/hut_" : "campsites_images/campsite_"}${item.id}.jpg`,
    fee: FEE(item.price), dogs: DOGS(item.dogs), sites: kind === "hut" ? (Number(item.bunks) || null) : (Number(item.powered_sites || 0) + Number(item.unpowered_sites || 0)) || null,
    amenities: codes(item.facilities, FACILITIES).slice(0, 10),
    booking: item.bookable && DOC_BOOKING.test(item.booking_url ?? "") ? item.booking_url : null, credit: "DOC, CC BY 4.0",
  });
}
for (const item of read("bookit.json")) {
  const [type, typeName] = bookitType(item);
  const hours = item.operator_hours ?? "";
  addSmall({
    id: `bookit:${item.id}`, stable: true, kind: "bookit", type, typeName, stars: Number(item.rating) || null, name: clean(item.name), region: REGIONS[item.region], point: pointOf(item),
    locality: clean(item.location || item.address) || null, closed: false, description: shortText(item.description),
    photo: ["image", "image2", "image3"].map((field) => item[field]).find((url) => /^https:\/\//.test(url ?? "")) ?? null,
    fee: null, dogs: DOGS(item.dogs), sites: null, amenities: [...new Set((item.holy_facilities ?? "").split(",").map((name) => name.trim()).filter(Boolean))].slice(0, 10),
    booking: BOOKIT_AGENT.test(item.booking_link ?? "") ? item.booking_link : null, credit: "the operator, via BookIt",
    checkIn: clock(/check in:\s*([\d:.]+)/i.exec(hours)?.[1]), checkOut: clock(/check out:\s*([\d:.]+)/i.exec(hours)?.[1]),
  });
}
for (const item of read("tracks.json")) addSmall({
  id: `track:${item.id}`, stable: true, kind: "track", type: "track", typeName: "Walking track", name: clean(item.name), region: REGIONS[item.region], point: pointOf(item),
  locality: clean(item.location).replace(/^Located in\s+/i, "") || null, closed: false, description: shortText(item.description), photo: /^https:\/\//.test(item.image ?? "") ? item.image : null,
  fee: null, dogs: DOGS(item.dogs), sites: null, amenities: [], credit: "DOC, CC BY 4.0",
});
for (const [file, kind, typeName] of [["dumps.json", "dump", "Dump station"], ["dayusenorth.json", "dayuse_north", "Day-use area"], ["dayusesouth.json", "dayuse_south", "Day-use area"]]) {
  for (const item of read(file)) addSmall({
    // These ids are local sequence numbers that can shift when the files are rebuilt: never in a URL.
    id: `${kind}:${item.id}`, stable: false, kind, type: kind === "dump" ? "dump_station" : "day_use_area", typeName, name: clean(item.name), region: undefined, point: pointOf(item),
    locality: clean(item.address).replace(/,?\s*(North|South) Island\.?$/i, "") || null, closed: false, description: null, photo: null,
    fee: FEE(item.price), dogs: DOGS(item.dogs), sites: null, amenities: codes(item.facilities, FACILITIES).slice(0, 10), credit: null,
  });
}
{
  // Council campgrounds and holiday parks: the app reads them from its New Zealand database.
  const temp = mkdtempSync(join(tmpdir(), "kiwi-council-"));
  try {
    copyFileSync(resolve(appRepo, "Kiwi/Camp/Databases/new_zealand_db.sqlite"), join(temp, "db.sqlite"));
    const db = new DatabaseSync(join(temp, "db.sqlite"), { readOnly: true });
    for (const site of db.prepare(`SELECT v.Id, v.SiteName, v.Address, v.State, v.FeeCategory, v.Latitude, v.Longitude, v.SiteStatusId, st.Code AS TypeCode, s.PetsAllowed
      FROM vw_Sites v JOIN SiteType st ON st.Id = v.SiteTypeId JOIN Site s ON s.Id = v.Id WHERE v.Latitude IS NOT NULL AND v.Longitude IS NOT NULL ORDER BY v.Id`).all()) {
      addSmall({
        id: `campsite:${site.Id.replace(/^NZ/, "")}`, stable: true, kind: "council", type: site.TypeCode === "holiday_park" ? "holiday_park" : "campground", typeName: site.TypeCode === "holiday_park" ? "Holiday park" : "Campground",
        name: clean(site.SiteName), region: REGIONS[site.State], point: { lat: site.Latitude, lng: site.Longitude },
        locality: clean(site.Address) || null, closed: site.SiteStatusId === 0, description: null, photo: null,
        fee: FEE(site.FeeCategory), dogs: DOGS(site.PetsAllowed), sites: null, amenities: [], credit: null,
      });
    }
    db.close();
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
}

// Slugs are unique within a region, across full and small pages. A small page keeps the slug it had in
// the last export (by id, or for the shifting ids by name and coordinates); a new one takes its name,
// then its locality, then its type, then its id (or, for the shifting ids, its coordinates).
const previousSmall = new Map(existsSync(stubsPath) ? JSON.parse(readFileSync(stubsPath, "utf8")).places.map((place) => [place.key, `${place.stateSlug}/${place.slug}`]) : []);
const keyOf = (row) => row.stable ? row.id : `${row.kind}|${row.name}|${row.point.lat.toFixed(4)}|${row.point.lng.toFixed(4)}`;
const taken = new Set(places.map((place) => `${place.stateSlug}/${place.slug}`));
for (const row of smallRows) {
  row.region ??= regionNear(row.point);
  row.key = keyOf(row);
  const path = previousSmall.get(row.key);
  if (path && path.startsWith(`${row.region}/`) && !taken.has(path)) { taken.add(path); row.slug = path.slice(row.region.length + 1); }
}
for (const row of smallRows) {
  if (row.slug) continue;
  const base = slugify(row.name) || slugify(row.typeName);
  const tail = row.stable ? slugify(row.id.split(":")[1]) : `${Math.abs(row.point.lat).toFixed(4)}-${row.point.lng.toFixed(4)}`.replace(/\./g, "");
  const slug = [base, `${base}-${slugify(row.locality ?? "")}`, `${base}-${slugify(row.typeName)}`, `${base}-${tail}`]
    .find((option) => !/-$/.test(option) && !taken.has(`${row.region}/${option}`));
  assert.ok(slug, `no free slug for ${row.id}`);
  taken.add(`${row.region}/${slug}`);
  row.slug = slug;
}
// The same fields as a full page, rendered by the same template (components/places/place-page.tsx,
// through scripts/export-place-pages.tsx) but noindex.
const stubs = smallRows.map((row) => ({
  id: row.id, key: row.key, slug: row.slug, type: row.type, typeName: row.typeName, name: row.name || row.typeName,
  state: row.region, stateSlug: row.region, stateName: regionName(row.region), island: islandOf(row.point),
  park: row.locality, locality: null, category: row.category ?? null,
  lat: Number(row.point.lat.toFixed(4)), lng: Number(row.point.lng.toFixed(4)),
  description: row.description ?? "", descriptionMore: false,
  amenities: row.amenities, amenityCount: row.amenities.length, activities: row.activities ?? [], activityCount: (row.activities ?? []).length,
  fee: row.fee, dogs: row.dogs, access: row.access ?? [], sites: row.sites, walk: row.walk ?? null, bookingRequired: row.bookingRequired ?? null,
  photos: row.photo ? [row.photo] : [], heroWidth: 0, photoCount: row.photo ? 1 : 0, credit: row.credit ?? "",
  booking: row.booking ?? null, checkIn: row.checkIn ?? null, checkOut: row.checkOut ?? null, stars: row.stars ?? null,
  indexable: false, ...(row.closed ? { closed: true } : {}),
})).sort((a, b) => a.id.localeCompare(b.id));

const exportedAt = new Date().toISOString().slice(0, 10);
const data = JSON.stringify({ exportedAt, places }, null, 1);
const stubData = JSON.stringify({ exportedAt, places: stubs });
writeFileSync(plainPath, `${data}\n`);
writeFileSync(stubsPath, `${stubData}\n`);
const key = placesKey();
if (key) {
  writeFileSync(encryptedPath, `${encrypt(data, key)}\n`);
  writeFileSync(stubsEncryptedPath, `${encryptGzip(stubData, key)}\n`);
} else console.warn("No PLACES_KEY in the environment or the keychain: wrote the plain copies only, not the .enc files.");
// The app links only to pages that are published: the places without a listing join the map once their
// pages fit the site (scripts/export-place-pages.tsx; `npm run places:links -- --with-small`).
console.log(`Wrote ${writePlacePages(places, process.argv.includes("--with-small") ? stubs : [], placePagesOut())} place ids to ${placePagesOut()}.`);
const count = (type) => places.filter((entry) => entry.type === type).length;
const kinds = [...new Set(stubs.map((stub) => stub.type))].map((kind) => `${stubs.filter((stub) => stub.type === kind).length} ${kind}`).join(", ");
console.log(`Exported ${places.length} full pages (${count("doc_campsite")} DOC campsites, ${count("doc_hut")} DOC huts, ${count("holiday_park")} holiday parks) with ${places.reduce((sum, entry) => sum + entry.photos.length, 0)} photos, and ${stubs.length} small pages (${kinds}).`);
