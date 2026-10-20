/**
 * Builds lib/data/nz-outline.json, the coastline and large lakes the hub dot maps are drawn over.
 *
 * Source: Natural Earth 1:10m Admin 0 countries and 1:10m lakes (public domain,
 * https://www.naturalearthdata.com/). Download both once, outside the repository, and pass their paths:
 *
 *   base=https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson
 *   curl -sSLo /tmp/ne/ne_10m_admin_0_countries.geojson $base/ne_10m_admin_0_countries.geojson
 *   curl -sSLo /tmp/ne/ne_10m_lakes.geojson $base/ne_10m_lakes.geojson
 *   node scripts/build-nz-outline.mjs /tmp/ne/ne_10m_admin_0_countries.geojson /tmp/ne/ne_10m_lakes.geojson
 *
 * Lakes of about 10 km² or more are kept, so inland hubs such as Taupō or the southern lakes read
 * as places.
 *
 * Only New Zealand's mainland islands and their near-shore islands are kept (the Chatham, Kermadec and
 * subantarctic islands fall outside every hub), simplified to about 300 m and rounded to 3 decimals.
 * The output is deterministic, so a re-run on the same file is byte-identical.
 */
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const [input, lakesInput] = process.argv.slice(2);
if (!input || !lakesInput) throw new Error("Pass the paths of ne_10m_admin_0_countries.geojson and ne_10m_lakes.geojson");
const raw = await readFile(input);
const lakesRaw = await readFile(lakesInput);
const countries = JSON.parse(raw.toString("utf8"));
const nz = countries.features.find((feature) => feature.properties.ADM0_A3 === "NZL");
if (!nz) throw new Error("No NZL feature in the file");

const BOUNDS = { west: 165, east: 179.5, south: -48, north: -34 };
const TOLERANCE = 0.003;
const MIN_AREA = 0.0004; // square degrees, about 4 km²: drops rocks and islets that would render as noise

const polygons = nz.geometry.type === "Polygon" ? [nz.geometry.coordinates] : nz.geometry.coordinates;
const inside = (ring) => ring.every(([lon, lat]) => lon >= BOUNDS.west && lon <= BOUNDS.east && lat >= BOUNDS.south && lat <= BOUNDS.north);
const area = (ring) => Math.abs(ring.reduce((sum, [x1, y1], index) => { const [x2, y2] = ring[(index + 1) % ring.length]; return sum + x1 * y2 - x2 * y1; }, 0)) / 2;

/** Douglas-Peucker on an open polyline. */
function simplify(points, tolerance) {
  if (points.length < 3) return points;
  const [ax, ay] = points[0], [bx, by] = points.at(-1);
  const dx = bx - ax, dy = by - ay, length = Math.hypot(dx, dy);
  let worst = 0, index = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i];
    const distance = length === 0 ? Math.hypot(px - ax, py - ay) : Math.abs(dy * px - dx * py + bx * ay - by * ax) / length;
    if (distance > worst) { worst = distance; index = i; }
  }
  if (worst <= tolerance) return [points[0], points.at(-1)];
  return [...simplify(points.slice(0, index + 1), tolerance).slice(0, -1), ...simplify(points.slice(index), tolerance)];
}

const round = (value) => Math.round(value * 1000) / 1000;
const MIN_LAKE_AREA = 0.001; // square degrees, about 10 km²

const prepare = (outer, minArea) => outer
  .filter((ring) => inside(ring) && area(ring) >= minArea)
  .map((ring) => {
    // Split the closed ring in two so the simplification keeps a real shape at both ends.
    const half = Math.floor(ring.length / 2);
    const simplified = [...simplify(ring.slice(0, half + 1), TOLERANCE).slice(0, -1), ...simplify(ring.slice(half), TOLERANCE)];
    return simplified.map(([lon, lat]) => [round(lon), round(lat)]).filter((point, i, list) => i === 0 || point[0] !== list[i - 1][0] || point[1] !== list[i - 1][1]);
  })
  .filter((ring) => ring.length >= 4)
  .sort((a, b) => area(b) - area(a));
const rings = prepare(polygons.map((polygon) => polygon[0]), MIN_AREA);
const lakeRings = JSON.parse(lakesRaw.toString("utf8")).features
  .flatMap((feature) => (feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.type === "MultiPolygon" ? feature.geometry.coordinates : []))
  .map((polygon) => polygon[0]);
const lakes = prepare(lakeRings, MIN_LAKE_AREA);

const output = resolve(dirname(fileURLToPath(import.meta.url)), "../lib/data/nz-outline.json");
const body = {
  source: "Natural Earth 1:10m Admin 0 countries (ne_10m_admin_0_countries), New Zealand, and 1:10m lakes (ne_10m_lakes)",
  licence: "Public domain",
  sourceUrl: "https://www.naturalearthdata.com/",
  sourceSha256: createHash("sha256").update(raw).digest("hex"),
  lakesSha256: createHash("sha256").update(lakesRaw).digest("hex"),
  simplified: `Douglas-Peucker ${TOLERANCE} degrees; islands under ${MIN_AREA} and lakes under ${MIN_LAKE_AREA} square degrees, and anything outside ${JSON.stringify(BOUNDS)}, dropped`,
  rings,
  lakes,
};
await writeFile(output, `${JSON.stringify(body).replace(/\],\[/g, "],\n[")}\n`);
console.log(`nz-outline.json: ${rings.length} rings, ${rings.reduce((sum, ring) => sum + ring.length, 0)} points; ${lakes.length} lakes, ${lakes.reduce((sum, ring) => sum + ring.length, 0)} points`);
