/**
 * One-way, read-only import of the KiwiCamping app's bundled place data (npm run data:export).
 *
 * The app repository is reference material for this site, never a workspace: this script only ever
 * reads from it, and it refuses to write anywhere but `lib/data/` in this repository. CI never runs
 * it. The JSON it writes is the committed artifact the site builds from.
 *
 * What may leave the app is decided by the licence allowlist below, and it fails closed:
 *   - a file in the bundled data folder that the allowlist does not name aborts the export;
 *   - a record whose own provenance does not match the source its file is filed under aborts it;
 *   - partner feeds are never opened;
 *   - no third-party description text, image or photo URL is copied, whatever the licence.
 *
 * Output is deterministic: object keys are sorted, arrays are sorted by stable keys and coordinates
 * are rounded to 3 decimals, so running it twice on the same data gives byte-identical files.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(repo, "lib/data");
const appRoot = resolve(process.env.CAMPING_APP_DATA ?? "/Users/cristian/Developer/Apps/Camping");
const dataDir = resolve(appRoot, "Kiwi/Camp/BundledData");

const inside = (child, parent) => child === parent || child.startsWith(parent + sep);
if (inside(outDir, appRoot) || inside(appRoot, outDir)) throw new Error(`Refusing to run: ${appRoot} and ${outDir} overlap`);

/** Every write goes through here. Anything outside <repo>/lib/data/, or inside the app, is refused. */
async function writeOutput(name, value) {
  const target = resolve(outDir, name);
  if (!target.startsWith(outDir + sep)) throw new Error(`Refusing to write outside lib/data/: ${target}`);
  if (inside(target, appRoot)) throw new Error(`Refusing to write inside the app repository: ${target}`);
  await mkdir(outDir, { recursive: true });
  await writeFile(target, `${stableStringify(value)}\n`);
}

/* ------------------------------------------------------------------------------------------------
 * Licence allowlist
 * ---------------------------------------------------------------------------------------------- */

/**
 * `cc-by-4.0`  facts may be republished with the attribution line; description text still is not.
 * `facts-only` names, locality, fees and counts only; no descriptions, no images.
 * `exclude`    no record is republished. `inventoryCount` allows the number of records to be
 *              reported as a fact about the app; partner feeds are not even opened.
 */
const SOURCES = {
  doc: {
    licence: "cc-by-4.0",
    name: "Department of Conservation (DOC)",
    attribution: "Source: Department of Conservation. Licensed under CC BY 4.0.",
    changes: "Filtered, counted and summarised by KiwiCamping. Coordinates rounded to about 100 m. Fee summaries are our reading of the DOC fee text. No DOC description text or photographs are reproduced.",
    licenceUrl: "https://creativecommons.org/licenses/by/4.0/",
    termsUrl: "https://www.doc.govt.nz/footer-links/copyright/",
    sourceUrl: "https://www.doc.govt.nz/",
    inventoryCount: true,
  },
  wikicamps: {
    licence: "exclude",
    name: "WikiCamps NZ (dump stations and day-use areas in the app)",
    reason: "Every record links to wikicamps.co.nz, a commercial directory whose terms do not allow republication. Only the size of the app's inventory is reported; no record is republished.",
    inventoryCount: true,
  },
  bookit: {
    licence: "exclude",
    name: "BookIt (partner feed)",
    reason: "Partner data is never republished, counted or opened by this export.",
    inventoryCount: false,
  },
};
const LICENCE_CLASSES = new Set(["cc-by-4.0", "facts-only", "exclude"]);

const host = (url) => { try { return new URL(url).host; } catch { return ""; } };
const docHost = (url) => !url || /(^|\.)doc\.govt\.nz$/.test(host(url));

/** Every file the app bundles, the source it belongs to, and how a record proves it. */
const FILES = {
  "campsites.json": { source: "doc", provenance: (row) => docHost(row.website) && docHost(row.booking_url) },
  "huts.json": { source: "doc", provenance: (row) => docHost(row.website) && docHost(row.booking_url) },
  "tracks.json": { source: "doc", provenance: (row) => docHost(row.website) },
  // DOC's freedom-camping notice layer: every row carries a DOC notice number and a NaPALIS field
  // (DOC's land register), and the geometry file is the same layer keyed by OBJECTID.
  "freedom.json": { source: "doc", provenance: (row) => Number.isInteger(row.id) && "notice_number" in row && "NaPALIS_id" in row && typeof row.district === "string" },
  "freedomgeo.geojson": { source: "doc", provenance: (feature) => Number.isInteger(feature.properties?.OBJECTID) && ["Operations_Region", "Operations_District", "Site_Category_Type", "NaPALIS_ID"].every((key) => key in feature.properties) },
  "dumps.json": { source: "wikicamps", provenance: (row) => host(row.link_scrapper) === "wikicamps.co.nz" },
  "dayusenorth.json": { source: "wikicamps", provenance: (row) => host(row.link_scrapper) === "wikicamps.co.nz" },
  "dayusesouth.json": { source: "wikicamps", provenance: (row) => host(row.link_scrapper) === "wikicamps.co.nz" },
  "bookit.json": { source: "bookit" },
  "bookit_full.csv": { source: "bookit" },
};

for (const [file, entry] of Object.entries(FILES)) {
  const source = SOURCES[entry.source];
  if (!source || !LICENCE_CLASSES.has(source.licence)) throw new Error(`${file} has no valid licence class`);
}
const present = (await readdir(dataDir)).filter((name) => !name.startsWith("."));
const unknown = present.filter((name) => !FILES[name]);
if (unknown.length) throw new Error(`Unknown source file(s) in ${dataDir}: ${unknown.join(", ")}. Add each to the licence allowlist before exporting.`);

const sourceFiles = {};
/** Reads one allowlisted file, hashes it and checks every record's provenance. */
async function load(file) {
  const entry = FILES[file];
  const source = SOURCES[entry.source];
  if (source.licence === "exclude" && !source.inventoryCount) throw new Error(`${file} is excluded and must not be opened`);
  const path = resolve(dataDir, file);
  const raw = await readFile(path);
  const parsed = JSON.parse(raw.toString("utf8"));
  const rows = Array.isArray(parsed) ? parsed : parsed.features;
  if (!Array.isArray(rows)) throw new Error(`${file} is not a list of records`);
  const bad = rows.filter((row) => !entry.provenance(row));
  if (bad.length) throw new Error(`${file}: ${bad.length} record(s) do not match source "${entry.source}" (first: ${JSON.stringify(bad[0]).slice(0, 200)})`);
  sourceFiles[file] = { source: entry.source, sha256: createHash("sha256").update(raw).digest("hex"), records: rows.length, date: await fileDate(path) };
  return rows;
}

/** The date a data file last changed: its last commit in the app repo, or its mtime if uncommitted. */
async function fileDate(path) {
  try {
    const dirty = execFileSync("git", ["-C", appRoot, "status", "--porcelain", "--", path], { encoding: "utf8" }).trim();
    const committed = execFileSync("git", ["-C", appRoot, "log", "-1", "--format=%cs", "--", path], { encoding: "utf8" }).trim();
    if (!dirty && committed) return committed;
  } catch { /* not a git checkout: fall through to mtime */ }
  return (await stat(path)).mtime.toISOString().slice(0, 10);
}

/* ------------------------------------------------------------------------------------------------
 * Helpers
 * ---------------------------------------------------------------------------------------------- */

function stableStringify(value) {
  const sort = (item) => Array.isArray(item) ? item.map(sort)
    : item && typeof item === "object" ? Object.fromEntries(Object.keys(item).sort().map((key) => [key, sort(item[key])]))
    : item;
  // Coordinate pairs stay on one line; everything else is one value per line for readable diffs.
  return JSON.stringify(sort(value), null, 2).replace(/\[\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\s*\]/g, "[$1, $2]");
}

const round3 = (value) => Math.round(value * 1000) / 1000;
const byName = (a, b) => a.name.localeCompare(b.name, "en-NZ");
const countBy = (rows, key) => rows.reduce((counts, row) => { const value = key(row); if (value !== undefined && value !== null && value !== "") counts[value] = (counts[value] ?? 0) + 1; return counts; }, {});
const slugify = (text) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const tokens = (text) => (text ?? "").split(",").map((item) => item.trim()).filter(Boolean);

/** NZTM2000 easting/northing to WGS84, the same series the app uses (KiwiCoordinates.toLatLon). */
function nztmToWgs84(easting, northing) {
  const a = 6378137, f = 1 / 298.257222101, k0 = 0.9996, lambda0 = 173 * Math.PI / 180, e0 = 1600000, n0 = 10000000;
  const e2 = 2 * f - f * f, n = f / (2 - f);
  const A = a / (1 + n) * (1 + n * n / 4 + n ** 4 / 64);
  const xi = (northing - n0) / (A * k0), eta = (easting - e0) / (A * k0);
  const b1 = 0.5 * n - 2 / 3 * n * n + 5 / 16 * n ** 3, b2 = 13 / 48 * n * n - 3 / 5 * n ** 3, b3 = 61 / 240 * n ** 3;
  const xiP = xi - b1 * Math.sin(2 * xi) * Math.cosh(2 * eta) - b2 * Math.sin(4 * xi) * Math.cosh(4 * eta) - b3 * Math.sin(6 * xi) * Math.cosh(6 * eta);
  const etaP = eta - b1 * Math.cos(2 * xi) * Math.sinh(2 * eta) - b2 * Math.cos(4 * xi) * Math.sinh(4 * eta) - b3 * Math.cos(6 * xi) * Math.sinh(6 * eta);
  const chi = Math.asin(Math.sin(xiP) / Math.cosh(etaP));
  const phi = chi + e2 / 2 * Math.sin(2 * chi) + 5 * e2 * e2 / 24 * Math.sin(4 * chi) + e2 ** 3 / 12 * Math.sin(6 * chi);
  const lambda = lambda0 + Math.atan(Math.sinh(etaP) / Math.cos(xiP));
  return [phi * 180 / Math.PI, lambda * 180 / Math.PI];
}
const isNztm = (x, y) => x >= 1e6 && x <= 2.5e6 && y >= 4.5e6 && y <= 7e6;
function coordinate(row) {
  const lat = Number(row.latitude), lon = Number(row.longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  const [la, lo] = isNztm(lon, lat) ? nztmToWgs84(lon, lat) : [lat, lon];
  if (la < -53 || la > -29 || lo < 165 || lo > 185) return null;
  return [round3(la), round3(lo)];
}
/** A polygon's vertex mean, enough to place one dot for an area of a few hectares. */
function polygonCentre(geometry) {
  const rings = geometry.type === "Polygon" ? [geometry.coordinates[0]] : geometry.coordinates.map((polygon) => polygon[0]);
  const points = rings.flat();
  const x = points.reduce((sum, [px]) => sum + px, 0) / points.length;
  const y = points.reduce((sum, [, py]) => sum + py, 0) / points.length;
  return coordinate({ latitude: y, longitude: x });
}
function distanceKm([lat1, lon1], [lat2, lon2]) {
  const rad = Math.PI / 180, dLat = (lat2 - lat1) * rad, dLon = (lon2 - lon1) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
}

/* ------------------------------------------------------------------------------------------------
 * Vocabulary
 * ---------------------------------------------------------------------------------------------- */

/** DOC's visitor regions, exactly as the campsite, hut and track feeds name them. */
const DOC_REGIONS = {
  "Northland": { slug: "northland", name: "Northland", island: "North Island" },
  "Auckland": { slug: "auckland", name: "Auckland", island: "North Island" },
  "Coromandel": { slug: "coromandel", name: "Coromandel", island: "North Island" },
  "Waikato": { slug: "waikato", name: "Waikato", island: "North Island" },
  "Bay of Plenty": { slug: "bay-of-plenty", name: "Bay of Plenty", island: "North Island" },
  "Central North Island": { slug: "central-north-island", name: "Central North Island", island: "North Island" },
  "East Coast": { slug: "east-coast", name: "East Coast", island: "North Island" },
  "Hawke’s Bay": { slug: "hawkes-bay", name: "Hawke's Bay", island: "North Island" },
  "Taranaki": { slug: "taranaki", name: "Taranaki", island: "North Island" },
  "Manawatu/Whanganui": { slug: "manawatu-whanganui", name: "Manawatū/Whanganui", island: "North Island" },
  "Wairarapa": { slug: "wairarapa", name: "Wairarapa", island: "North Island" },
  "Wellington/Kapiti": { slug: "wellington-kapiti", name: "Wellington/Kāpiti", island: "North Island" },
  "Nelson/Tasman": { slug: "nelson-tasman", name: "Nelson/Tasman", island: "South Island" },
  "Marlborough": { slug: "marlborough", name: "Marlborough", island: "South Island" },
  "Canterbury": { slug: "canterbury", name: "Canterbury", island: "South Island" },
  "West Coast": { slug: "west-coast", name: "West Coast", island: "South Island" },
  "Otago": { slug: "otago", name: "Otago", island: "South Island" },
  "Fiordland": { slug: "fiordland", name: "Fiordland", island: "South Island" },
  "Southland": { slug: "southland", name: "Southland", island: "South Island" },
  "Chatham Islands": { slug: "chatham-islands", name: "Chatham Islands", island: "Chatham Islands" },
};
function docRegion(raw, file) {
  const region = DOC_REGIONS[raw];
  if (!region) throw new Error(`${file}: unknown DOC region "${raw}". Add it to DOC_REGIONS.`);
  return region;
}

const CAMPSITE_TYPES = { great_walk: "Great Walk campsite", serviced: "Serviced campsite", standard: "Standard campsite", basic: "Basic campsite", backcountry: "Backcountry campsite" };
const HUT_TYPES = { great_walk: "Great Walk hut", serviced_alpine: "Serviced alpine hut", serviced: "Serviced hut", standard: "Standard hut", basic: "Basic hut or bivvy" };
const FREEDOM_TYPES = { prohibited: "Prohibited", restricted: "Restricted", freedom: "Permitted" };
const ACCESS = { car: "Car", campervan: "Campervan", caravan: "Caravan", foot: "On foot", boat: "Boat", mountain_bike: "Mountain bike", "4wd": "4WD" };
const LANDSCAPES = { coastal: "Coastal", riversandlakes: "Rivers and lakes", forest: "Forest", alpine: "Alpine" };
/** Facility labels in the order they are worth showing: the ones that decide a stay come first. */
const FACILITIES = [
  ["powered_sites", "Powered sites"], ["shower_hot", "Hot showers"], ["toilets_flush", "Flush toilets"],
  ["water_tap_treated", "Treated tap water"], ["cooking_shelter", "Cooking shelter"], ["dump_station", "Dump station"],
  ["shower_cold", "Cold showers"], ["campfires", "Campfires"], ["boat_launching", "Boat ramp"], ["jetty", "Jetty"],
  ["wheelchair_accesible", "Wheelchair access"], ["heating", "Heating"], ["mattresses", "Mattresses"], ["cooking", "Cooking facilities"],
  ["lighting", "Lighting"], ["stove", "Stove"], ["toilets_non_flush", "Non-flush toilets"], ["water_tap_non_treated", "Untreated tap water"],
  ["water_stream", "Stream water"], ["bbq", "Barbecue"], ["phone", "Phone"], ["shop", "Shop"],
];
const facilityLabel = Object.fromEntries(FACILITIES);
const keyFacilities = (row, limit = 4) => {
  const present = new Set(tokens(row.facilities));
  return FACILITIES.filter(([token]) => present.has(token)).slice(0, limit).map(([, label]) => label);
};

/** DOC fee text is a paragraph; this reads the adult nightly rate out of it. */
function feeSummary(price, fees) {
  if (price === "free") return "Free";
  const text = (fees ?? "").replace(/\s+/g, " ");
  // When the text lists an older and a newer schedule, the newer one follows "fees from".
  const latest = text.toLowerCase().lastIndexOf("fees from");
  const segment = latest >= 0 && /\$\d/.test(text.slice(latest)) ? text.slice(latest) : text;
  // Great Walk and Heaphy-style tables: "<season> $NZ-adult $INT-adult $NZ-child $INT-child Free".
  if (/Adult NZ/.test(segment) && /Adult INT/.test(segment)) {
    const rows = [...segment.matchAll(/\$(\d+(?:\.\d{1,2})?) \$(\d+(?:\.\d{1,2})?) \$\d+(?:\.\d{1,2})? \$\d+(?:\.\d{1,2})? Free/g)].map((match) => [Number(match[1]), Number(match[2])]);
    if (rows.length) {
      const span = (values) => Math.min(...values) === Math.max(...values) ? money(values[0]) : `${money(Math.min(...values))} to ${money(Math.max(...values))}`;
      const resident = span(rows.map((row) => row[0])), visitor = span(rows.map((row) => row[1]));
      return resident === visitor ? `Adult ${resident} per night` : `Adult ${resident} (NZ resident), ${visitor} (international) per night`;
    }
  }
  const amounts = [...segment.matchAll(/Adult[^$]{0,40}?\$\s?(\d+(?:\.\d{1,2})?)/gi)].map((match) => Number(match[1])).filter((value) => value > 0);
  if (amounts.length) {
    const low = Math.min(...amounts), high = Math.max(...amounts);
    return low === high ? `Adult ${money(low)} per night` : `Adult ${money(low)} to ${money(high)} per night`;
  }
  return price === "paid" ? "Fee applies" : "Fee not listed";
}
const money = (value) => Number.isInteger(value) ? `$${value}` : `$${value.toFixed(2)}`;
const adultRates = (place) => [...place.fee.matchAll(/\$(\d+(?:\.\d{2})?)/g)].map((match) => Number(match[1]));
const locality = (row) => (row.location ?? "").replace(/^Located in\s+/i, "").trim() || null;
const isoDate = (value) => { const match = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value ?? ""); return match ? `${match[3]}-${match[1].padStart(2, "0")}-${match[2].padStart(2, "0")}` : null; };

/* ------------------------------------------------------------------------------------------------
 * Load
 * ---------------------------------------------------------------------------------------------- */

const campsiteRows = await load("campsites.json");
const hutRows = await load("huts.json");
const trackRows = await load("tracks.json");
const freedomRows = await load("freedom.json");
const freedomGeo = await load("freedomgeo.geojson");
const dumpRows = await load("dumps.json");
const dayUseRows = [...await load("dayusenorth.json"), ...await load("dayusesouth.json")];
for (const file of Object.keys(FILES)) if (FILES[file].source === "bookit") sourceFiles[file] = { source: "bookit", read: false };

const campsites = campsiteRows.map((row) => ({
  id: `campsite:${row.id}`, name: row.name.trim(), region: docRegion(row.region, "campsites.json"), point: coordinate(row),
  type: CAMPSITE_TYPES[row.type] ?? (() => { throw new Error(`Unknown campsite type ${row.type}`); })(),
  rawType: row.type, open: row.status === "open", price: row.price, fee: feeSummary(row.price, row.fees),
  bookable: row.bookable === true, locality: locality(row), url: row.website || null, facilities: keyFacilities(row),
  tokens: new Set(tokens(row.facilities)), access: tokens(row.access), landscape: tokens(row.landscape), dogs: row.dogs || "",
  powered: Number(row.powered_sites) || 0, unpowered: Number(row.unpowered_sites) || 0,
})).sort(byName);
const huts = hutRows.map((row) => ({
  id: `hut:${row.id}`, name: row.name.trim(), region: docRegion(row.region, "huts.json"), point: coordinate(row),
  type: HUT_TYPES[row.type] ?? (() => { throw new Error(`Unknown hut type ${row.type}`); })(),
  rawType: row.type, open: row.status === "open", price: row.price, fee: feeSummary(row.price, row.fees),
  bookable: row.bookable === true, locality: locality(row), url: row.website || null, facilities: keyFacilities(row, 3),
  tokens: new Set(tokens(row.facilities)), bunks: Number(row.bunks) || 0, road: row.proximity_road || "",
})).sort(byName);
const tracks = trackRows.map((row) => ({ region: docRegion(row.region, "tracks.json") }));

const geoById = new Map(freedomGeo.map((feature) => [feature.properties.OBJECTID, feature]));
/**
 * DOC's notice conditions, worded once. The source repeats each with small spelling differences, and a
 * few rows carry a bare number where a condition should be, which is dropped.
 */
const CONDITIONS = [
  [/self[- ]contained/i, "Self-contained vehicles only"],
  [/no more than (?:4|four) nights/i, "No more than 4 nights in a calendar month"],
  [/5\.00 ?pm to 9(?:\.00)? ?am/i, "Only between 5 pm and 9 am"],
  [/1 November to 30 April/i, "Restrictions apply 1 November to 30 April"],
];
function condition(rule, id) {
  if (/^\d+$/.test(rule)) return null;
  const match = CONDITIONS.find(([pattern]) => pattern.test(rule));
  if (!match) throw new Error(`freedom.json notice ${id} has an unrecognised condition: ${rule}`);
  return match[1];
}
/** Planar area in hectares. NZTM is a metric projection, so the shoelace formula is accurate here. */
function areaHa(geometry) {
  const ring = (points) => Math.abs(points.reduce((sum, [x1, y1], index) => { const [x2, y2] = points[(index + 1) % points.length]; return sum + x1 * y2 - x2 * y1; }, 0)) / 2;
  const polygon = (rings) => ring(rings[0]) - rings.slice(1).reduce((sum, hole) => sum + ring(hole), 0);
  const m2 = geometry.type === "Polygon" ? polygon(geometry.coordinates) : geometry.coordinates.reduce((sum, rings) => sum + polygon(rings), 0);
  return m2 / 10000;
}

// The `city`, `address` and `contact_phone` fields are the DOC office that issued the notice, not the
// place it covers, so they are not used as a locality.
const notices = freedomRows.map((row) => {
  const type = FREEDOM_TYPES[row.type];
  if (!type) throw new Error(`Unknown freedom notice type ${row.type}`);
  const feature = geoById.get(row.id);
  if (!feature) throw new Error(`freedom.json notice ${row.id} is not in DOC's freedom-camping layer (freedomgeo.geojson)`);
  return {
    id: `freedom:${row.id}`, name: row.name.trim(), district: row.district.trim(), operationsRegion: row.region.trim(),
    rawType: row.type, type, current: row.status === "current", locality: row.district.trim(),
    conditions: [...new Set([row.rule_1, row.rule_2, row.rule_3, row.rule_4].map((rule) => String(rule ?? "").trim()).filter(Boolean).map((rule) => condition(rule, row.id)).filter(Boolean))],
    noticeNumber: Number.isInteger(row.notice_number) ? row.notice_number : null, napalisId: Number.isInteger(row.NaPALIS_id) ? row.NaPALIS_id : null, dateRuled: isoDate(row.date_ruled),
    point: polygonCentre(feature.geometry), areaHa: Math.round(areaHa(feature.geometry) * 10) / 10,
  };
}).sort(byName);

// Dump stations and day-use areas carry no region. Counting them by region needs one, so each is
// given the DOC region of its nearest DOC campsite or hut. This is approximate near region lines.
const docPoints = [...campsites, ...huts].filter((place) => place.point);
const nearestRegion = (point) => docPoints.reduce((best, place) => {
  const distance = distanceKm(point, place.point);
  return distance < best.distance ? { distance, region: place.region } : best;
}, { distance: Infinity, region: null }).region;
const dumps = dumpRows.map((row) => { const point = coordinate(row); return { price: row.price || "", region: point ? nearestRegion(point) : null }; });
const dayUse = dayUseRows.map((row) => { const point = coordinate(row); return { region: point ? nearestRegion(point) : null }; });

/* ------------------------------------------------------------------------------------------------
 * Product facts: counts the site may cite
 * ---------------------------------------------------------------------------------------------- */

const regionTotals = Object.fromEntries(Object.values(DOC_REGIONS).map((region) => [region.slug, {
  name: region.name, island: region.island,
  campsites: campsites.filter((place) => place.region === region).length,
  huts: huts.filter((place) => place.region === region).length,
  hutBunks: huts.filter((place) => place.region === region).reduce((sum, hut) => sum + hut.bunks, 0),
  tracks: tracks.filter((place) => place.region === region).length,
  dumpStationsNearest: dumps.filter((place) => place.region === region).length,
}]));

const freedomDistricts = {};
for (const notice of notices) {
  const slug = slugify(notice.district);
  freedomDistricts[slug] ??= { name: notice.district, operationsRegion: notice.operationsRegion, current: {}, historic: 0 };
  if (notice.current) freedomDistricts[slug].current[notice.rawType] = (freedomDistricts[slug].current[notice.rawType] ?? 0) + 1;
  else freedomDistricts[slug].historic += 1;
}

/** The lowest adult nightly rate each paid place lists, summarised. Places without a readable rate are left out. */
function rateStats(places) {
  const rates = places.filter((place) => place.price === "paid").map((place) => adultRates(place)).filter((list) => list.length).map((list) => Math.min(...list)).sort((a, b) => a - b);
  if (!rates.length) return null;
  const middle = rates.length / 2;
  const median = rates.length % 2 ? rates[Math.floor(middle)] : (rates[middle - 1] + rates[middle]) / 2;
  return { placesWithRate: rates.length, min: rates[0], median, max: rates.at(-1) };
}

const productFacts = {
  dataAsOf: Object.values(sourceFiles).map((file) => file.date).filter(Boolean).sort().at(-1),
  passBoundary: {
    free: "BookIt stays and tours only. Partner data: never counted or republished here.",
    pass: ["DOC campsites", "DOC huts", "DOC tracks", "DOC freedom-camping notices", "Dump stations", "Day-use areas", "Guides"],
  },
  categories: {
    docCampsites: {
      label: "DOC campsites", access: "pass", source: "doc", total: campsites.length, asOf: sourceFiles["campsites.json"].date,
      open: campsites.filter((place) => place.open).length, closed: campsites.filter((place) => !place.open).length,
      fee: { free: campsites.filter((place) => place.price === "free").length, paid: campsites.filter((place) => place.price === "paid").length, unlisted: campsites.filter((place) => !["free", "paid"].includes(place.price)).length },
      bookable: campsites.filter((place) => place.bookable).length,
      adultRate: rateStats(campsites),
      byType: countBy(campsites, (place) => place.type),
      campervanAccess: campsites.filter((place) => place.access.includes("campervan")).length,
      dogsAllowedInSomeForm: campsites.filter((place) => /^Dogs/.test(place.dogs)).length,
      noDogs: campsites.filter((place) => place.dogs === "No dogs").length,
      poweredSites: campsites.reduce((sum, place) => sum + place.powered, 0),
      unpoweredSites: campsites.reduce((sum, place) => sum + place.unpowered, 0),
    },
    docHuts: {
      label: "DOC huts", access: "pass", source: "doc", total: huts.length, asOf: sourceFiles["huts.json"].date,
      open: huts.filter((place) => place.open).length, closed: huts.filter((place) => !place.open).length,
      fee: { free: huts.filter((place) => place.price === "free").length, paid: huts.filter((place) => place.price === "paid").length, unlisted: huts.filter((place) => !["free", "paid"].includes(place.price)).length },
      bookable: huts.filter((place) => place.bookable).length,
      adultRate: rateStats(huts),
      byType: countBy(huts, (place) => place.type),
      bunks: huts.reduce((sum, hut) => sum + hut.bunks, 0),
    },
    docTracks: { label: "DOC tracks", access: "pass", source: "doc", total: tracks.length, asOf: sourceFiles["tracks.json"].date },
    docFreedomCampingNotices: {
      label: "DOC freedom-camping notices on conservation land (not council bylaws)", access: "pass", source: "doc", total: notices.length, asOf: sourceFiles["freedom.json"].date,
      allStatusesByType: countBy(notices, (notice) => notice.type),
      current: notices.filter((notice) => notice.current).length,
      historic: notices.filter((notice) => !notice.current).length,
      currentByType: countBy(notices.filter((notice) => notice.current), (notice) => notice.type),
      districts: Object.keys(freedomDistricts).length,
    },
    dumpStations: { label: "Dump stations", access: "pass", source: "wikicamps", inventoryOnly: true, total: dumps.length, asOf: sourceFiles["dumps.json"].date, fee: countBy(dumps, (place) => place.price || "unlisted") },
    dayUseAreas: { label: "Day-use areas", access: "pass", source: "wikicamps", inventoryOnly: true, total: dayUse.length, asOf: sourceFiles["dayusenorth.json"].date },
  },
  regions: regionTotals,
  freedomDistricts,
  notes: [
    "Counts describe the app's bundled data on dataAsOf. They are not totals for New Zealand.",
    "Dump stations and day-use areas have no region in the data; dumpStationsNearest assigns each to the DOC region of its nearest DOC campsite or hut.",
    "Freedom-camping notices are DOC notices for conservation land under the Freedom Camping Act 2011. They are not council bylaws.",
  ],
};

/* ------------------------------------------------------------------------------------------------
 * Hubs
 * ---------------------------------------------------------------------------------------------- */

const MAX_LISTED = 25;
const publicPlace = (place, extra = {}) => ({
  id: place.id, name: place.name, type: place.type, locality: place.locality, fee: place.fee ?? null,
  facilities: place.facilities ?? [], url: place.url ?? null, open: place.open ?? true, ...extra,
});
const pointsOf = (places) => places.filter((place) => place.point).map((place) => place.point).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
const fact = (key, label, value) => ({ key, label, value });
const nonEmpty = (facts) => facts.filter((item) => item.value !== null && item.value !== "" && item.value !== 0 && !(Array.isArray(item.value) && !item.value.length));
const names = (list) => list.map((place) => place.name);
const range = (values) => values.length ? (Math.min(...values) === Math.max(...values) ? money(Math.min(...values)) : `${money(Math.min(...values))} to ${money(Math.max(...values))}`) : null;
const top = (counts, labels) => Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([key, count]) => `${labels?.[key] ?? key} ${count}`).join(", ");

const DOC_OFFICIAL = {
  campsites: { label: "DOC campsites", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/campsite-categories/" },
  huts: { label: "DOC huts", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-in-a-hut/" },
  bookings: { label: "DOC bookings", url: "https://bookings.doc.govt.nz/" },
  freedom: { label: "Freedom camping on conservation land (DOC)", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/freedom-camping/" },
};

const hubs = [];

for (const region of Object.values(DOC_REGIONS)) {
  const list = campsites.filter((place) => place.region === region);
  const regionHuts = huts.filter((place) => place.region === region);
  if (!list.length) continue;
  const paidRates = list.filter((place) => place.price === "paid").flatMap(adultRates);
  const listed = [...list].sort((a, b) => Number(b.open) - Number(a.open) || (b.unpowered + b.powered) - (a.unpowered + a.powered) || a.name.localeCompare(b.name, "en-NZ")).slice(0, MAX_LISTED);
  const biggest = [...list].sort((a, b) => (b.unpowered + b.powered) - (a.unpowered + a.powered) || a.name.localeCompare(b.name, "en-NZ"))[0];
  const facts = nonEmpty([
    fact("campsites", "DOC campsites", list.length),
    fact("largest", "Most sites", biggest.unpowered + biggest.powered ? `${biggest.name} (${biggest.unpowered + biggest.powered})` : null),
    fact("parks", "Most campsites in", top(countBy(list, (place) => place.locality)).split(", ").slice(0, 3).join(", ")),
    fact("closed", "Marked closed in the data", list.filter((place) => !place.open).length),
    fact("free", "Free campsites", list.filter((place) => place.price === "free").length),
    fact("paid", "Campsites with a fee", list.filter((place) => place.price === "paid").length),
    fact("adultRate", "Adult nightly rates listed", range(paidRates)),
    fact("bookable", "Bookable online through DOC", list.filter((place) => place.bookable).length),
    fact("types", "Campsite categories", top(countBy(list, (place) => place.type))),
    fact("greatWalk", "Great Walk campsites", list.filter((place) => place.rawType === "great_walk").length),
    fact("campervan", "Campervan access", list.filter((place) => place.access.includes("campervan")).length),
    fact("boatOrFoot", "Reached only on foot or by boat", list.filter((place) => !place.access.some((mode) => ["car", "campervan", "caravan", "4wd"].includes(mode))).length),
    fact("dogs", "Dogs allowed in some form", list.filter((place) => /^Dogs/.test(place.dogs)).length),
    fact("flushToilets", "Flush toilets", list.filter((place) => place.tokens.has("toilets_flush")).length),
    fact("treatedWater", "Treated tap water", list.filter((place) => place.tokens.has("water_tap_treated")).length),
    fact("showers", "Showers (hot or cold)", list.filter((place) => place.tokens.has("shower_hot") || place.tokens.has("shower_cold")).length),
    fact("campfires", "Campfires permitted (fire season rules apply)", list.filter((place) => place.tokens.has("campfires")).length),
    fact("poweredSites", "Powered sites", list.reduce((sum, place) => sum + place.powered, 0)),
    fact("unpoweredSites", "Unpowered sites", list.reduce((sum, place) => sum + place.unpowered, 0)),
    fact("landscape", "Landscape", top(countBy(list.flatMap((place) => place.landscape), (item) => item), LANDSCAPES)),
    fact("huts", "DOC huts in the region", regionHuts.length),
  ]);
  hubs.push({
    id: `camping/${region.slug}`, asOf: sourceFiles["campsites.json"].date, kind: "camping", slug: region.slug, path: `/camping/${region.slug}/`, name: region.name, island: region.island,
    source: "doc", placeCount: list.length, placeIds: list.map((place) => place.id).sort(),
    facts, places: listed.map((place) => publicPlace(place, { access: place.access.map((mode) => ACCESS[mode] ?? mode) })),
    points: pointsOf(list), officialLinks: [DOC_OFFICIAL.campsites, DOC_OFFICIAL.bookings],
    guide: { slug: "doc-campsite-rules", href: "/guides/doc-campsite-rules/" },
    related: regionHuts.length ? `/huts/${region.slug}/` : null,
    vocabulary: [...new Set([region.name, ...names(list), ...list.map((place) => place.locality).filter(Boolean)])].sort(),
  });
}

for (const region of Object.values(DOC_REGIONS)) {
  const list = huts.filter((place) => place.region === region);
  if (!list.length) continue;
  const paidRates = list.filter((place) => place.price === "paid").flatMap(adultRates);
  const largest = [...list].sort((a, b) => b.bunks - a.bunks || a.name.localeCompare(b.name, "en-NZ"))[0];
  const listed = [...list].sort((a, b) => Number(b.open) - Number(a.open) || b.bunks - a.bunks || a.name.localeCompare(b.name, "en-NZ")).slice(0, MAX_LISTED);
  const facts = nonEmpty([
    fact("huts", "DOC huts", list.length),
    fact("closed", "Marked closed in the data", list.filter((place) => !place.open).length),
    fact("bunks", "Bunks across all huts", list.reduce((sum, hut) => sum + hut.bunks, 0)),
    fact("largest", "Most bunks", largest.bunks ? `${largest.name} (${largest.bunks})` : null),
    fact("free", "Free huts", list.filter((place) => place.price === "free").length),
    fact("paid", "Huts with a fee", list.filter((place) => place.price === "paid").length),
    fact("adultRate", "Adult nightly rates listed", range(paidRates)),
    fact("bookable", "Must be booked through DOC", list.filter((place) => place.bookable).length),
    fact("types", "Hut categories", top(countBy(list, (place) => place.type))),
    fact("greatWalk", "Great Walk huts", list.filter((place) => place.rawType === "great_walk").length),
    fact("heating", "Heating", list.filter((place) => place.tokens.has("heating")).length),
    fact("mattresses", "Mattresses", list.filter((place) => place.tokens.has("mattresses")).length),
    fact("flushToilets", "Flush toilets", list.filter((place) => place.tokens.has("toilets_flush")).length),
    fact("streamWater", "Water from a stream", list.filter((place) => place.tokens.has("water_stream")).length),
    fact("nearRoad", "Within 3 hours of a road (where DOC lists it)", list.filter((place) => ["Under 1 hour", "1-3 hours"].includes(place.road)).length),
    fact("parks", "Most huts in", top(countBy(list, (place) => place.locality)).split(", ").slice(0, 3).join(", ")),
    fact("campsites", "DOC campsites in the region", campsites.filter((place) => place.region === region).length),
  ]);
  hubs.push({
    id: `huts/${region.slug}`, asOf: sourceFiles["huts.json"].date, kind: "huts", slug: region.slug, path: `/huts/${region.slug}/`, name: region.name, island: region.island,
    source: "doc", placeCount: list.length, placeIds: list.map((place) => place.id).sort(),
    facts, places: listed.map((place) => publicPlace(place, { bunks: place.bunks })),
    points: pointsOf(list), officialLinks: [DOC_OFFICIAL.huts, DOC_OFFICIAL.bookings],
    guide: { slug: "doc-huts-new-zealand-guide", href: "/guides/doc-huts-new-zealand-guide/" },
    related: campsites.some((place) => place.region === region) ? `/camping/${region.slug}/` : null,
    vocabulary: [...new Set([region.name, ...names(list), ...list.map((place) => place.locality).filter(Boolean)])].sort(),
  });
}

for (const [slug, district] of Object.entries(freedomDistricts)) {
  const all = notices.filter((notice) => slugify(notice.district) === slug);
  const list = all.filter((notice) => notice.current);
  if (!list.length) continue;
  const dates = list.map((notice) => notice.dateRuled).filter(Boolean).sort();
  const order = { prohibited: 0, restricted: 1, freedom: 2 };
  const listed = [...list].sort((a, b) => order[a.rawType] - order[b.rawType] || a.name.localeCompare(b.name, "en-NZ")).slice(0, MAX_LISTED);
  const largest = [...list].sort((a, b) => b.areaHa - a.areaHa || a.name.localeCompare(b.name, "en-NZ"))[0];
  const hectares = (rows) => { const total = rows.reduce((sum, notice) => sum + notice.areaHa, 0); return total ? `${(Math.round(total * 10) / 10).toLocaleString("en-NZ")} ha` : null; };
  const numbers = list.map((notice) => notice.noticeNumber).filter(Number.isInteger).sort((a, b) => a - b);
  const withCondition = (text) => list.filter((notice) => notice.conditions.includes(text)).length;
  const facts = nonEmpty([
    fact("notices", "Current DOC notices", list.length),
    fact("prohibited", "Camping prohibited", list.filter((notice) => notice.rawType === "prohibited").length),
    fact("restricted", "Camping restricted", list.filter((notice) => notice.rawType === "restricted").length),
    fact("permitted", "Camping permitted", list.filter((notice) => notice.rawType === "freedom").length),
    fact("historic", "Historic notices (no longer current)", all.length - list.length),
    fact("selfContained", "Self-contained vehicles only", withCondition("Self-contained vehicles only")),
    fact("nights", "No more than 4 nights in a calendar month", withCondition("No more than 4 nights in a calendar month")),
    fact("hours", "Only between 5 pm and 9 am", withCondition("Only between 5 pm and 9 am")),
    fact("seasonal", "Restrictions apply 1 November to 30 April", withCondition("Restrictions apply 1 November to 30 April")),
    fact("prohibitedArea", "Area where camping is prohibited", hectares(list.filter((notice) => notice.rawType === "prohibited"))),
    fact("restrictedArea", "Area where camping is restricted", hectares(list.filter((notice) => notice.rawType === "restricted"))),
    fact("largest", "Largest notice area", largest.areaHa ? `${largest.name} (${largest.areaHa.toLocaleString("en-NZ")} ha)` : null),
    fact("totalArea", "Area covered by current notices", hectares(list)),
    fact("parcels", "Distinct conservation land parcels (NaPALIS)", new Set(list.map((notice) => notice.napalisId).filter(Boolean)).size),
    fact("noticeNumbers", "DOC notice numbers", numbers.length ? (numbers[0] === numbers.at(-1) ? `${numbers[0]}` : `${numbers[0]} to ${numbers.at(-1)}`) : null),
    fact("dates", "Notice dates", dates.length ? (dates[0] === dates.at(-1) ? dates[0] : `${dates[0]} to ${dates.at(-1)}`) : null),
    fact("byYear", "Current notices by year issued", Object.entries(countBy(list, (notice) => notice.dateRuled?.slice(0, 4))).sort().map(([year, count]) => `${year}: ${count}`).join(", ")),
    fact("operationsRegion", "DOC operations region", district.operationsRegion),
  ]);
  hubs.push({
    id: `freedom-camping/${slug}`, asOf: sourceFiles["freedom.json"].date, kind: "freedom-camping", slug, path: `/freedom-camping/${slug}/`, name: district.name, operationsRegion: district.operationsRegion,
    source: "doc", placeCount: list.length, placeIds: list.map((notice) => notice.id).sort(),
    facts, places: listed.map((notice) => ({ id: notice.id, name: notice.name, type: notice.type, locality: notice.locality, conditions: notice.conditions, noticeNumber: notice.noticeNumber, napalisId: notice.napalisId, dateRuled: notice.dateRuled, areaHa: notice.areaHa, url: null, open: true })),
    points: pointsOf(list), officialLinks: [DOC_OFFICIAL.freedom],
    guide: { slug: "freedom-camping-rules-new-zealand", href: "/freedom-camping-rules-nz.html" },
    related: null,
    vocabulary: [...new Set([district.name, district.operationsRegion, ...names(list), ...list.flatMap((notice) => notice.conditions)])].sort(),
  });
}

// Dump-station hubs need record-level data. They are built only if the source's licence allows it.
if (SOURCES.wikicamps.licence !== "exclude") throw new Error("Dump-station hubs need a facts-only builder before the WikiCamps source can be re-classed");

hubs.sort((a, b) => a.id.localeCompare(b.id));

/* ------------------------------------------------------------------------------------------------
 * Description fingerprints and the copy check
 * ---------------------------------------------------------------------------------------------- */

// No hub string may repeat source description text. The export checks that directly; CI has no app
// data, so it gets hashed 8-word shingles of the same descriptions (scripts/audit-hubs.mjs).
const normalise = (text) => text.toLowerCase().normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
const shingles = (text, size = 8) => { const words = normalise(text).split(" ").filter(Boolean); const out = []; for (let i = 0; i + size <= words.length; i++) out.push(words.slice(i, i + size).join(" ")); return out; };
const shingleHash = (text) => createHash("sha256").update(text).digest("hex").slice(0, 12);
const descriptions = [...campsiteRows, ...hutRows].map((row) => row.description ?? "").filter(Boolean);
const fingerprints = [...new Set(descriptions.flatMap((text) => shingles(text)).map(shingleHash))].sort();
const descriptionText = normalise(descriptions.join(" \u0000 "));
const hubStrings = (value) => typeof value === "string" ? [value] : Array.isArray(value) ? value.flatMap(hubStrings) : value && typeof value === "object" ? Object.values(value).flatMap(hubStrings) : [];
for (const hub of hubs) for (const text of hubStrings(hub)) {
  if (text.length > 80 && descriptionText.includes(normalise(text))) throw new Error(`${hub.id} repeats source description text: ${text.slice(0, 80)}`);
}

/* ------------------------------------------------------------------------------------------------
 * Write
 * ---------------------------------------------------------------------------------------------- */

const usedSources = [...new Set(Object.values(sourceFiles).map((file) => file.source))].sort();
const metaBody = {
  dataAsOf: productFacts.dataAsOf,
  files: sourceFiles,
  sources: Object.fromEntries(usedSources.map((key) => [key, SOURCES[key]])),
  regionAssignment: {
    dumpStations: "No region in the source. Each is assigned the DOC region of its nearest DOC campsite or hut by great-circle distance. Approximate near region lines.",
    dayUseAreas: "Same method as dump stations.",
  },
  hubKinds: {
    camping: "DOC campsites by DOC visitor region (campsites.json). Huts are a fact row linking to the matching huts hub.",
    huts: "DOC huts by DOC visitor region (huts.json).",
    "freedom-camping": "Current DOC freedom-camping notices on conservation land by DOC district (freedom.json, positions from freedomgeo.geojson). Not council bylaws.",
    "dump-stations": "Not built: the only dump-station data in the app is excluded by licence (see sources.wikicamps).",
  },
};
// The export date only moves when the source data does, so a re-run on the same data is identical.
let previous = null;
try { previous = JSON.parse(await readFile(resolve(outDir, "hubs.meta.json"), "utf8")); } catch { /* first export */ }
const sameSource = previous && stableStringify(previous.files) === stableStringify(sourceFiles);
const meta = { ...metaBody, exportDate: sameSource ? previous.exportDate : new Date().toISOString().slice(0, 10) };

await writeOutput("product-facts.json", productFacts);
await writeOutput("hubs.json", { dataAsOf: productFacts.dataAsOf, hubs });
await writeOutput("hubs.meta.json", meta);
await writeOutput("hubs.fingerprints.json", { shingleWords: 8, hash: "sha256, first 12 hex characters", fingerprints });

console.log(`Exported ${hubs.length} hub records (${["camping", "huts", "freedom-camping"].map((kind) => `${hubs.filter((hub) => hub.kind === kind).length} ${kind}`).join(", ")}), data as of ${productFacts.dataAsOf}.`);
