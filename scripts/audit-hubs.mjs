/**
 * Validates the app-data export and the hub quality gate (run by `npm run content:check`), and the
 * copy rules for the calculator pages, which have no other audit.
 *
 * Hard failures: malformed data, a hub built from a source whose licence does not allow it, image or
 * description fields, a hub path that collides with a published URL, hub prose that is ungrounded or
 * repeats source description text, banned wording. The gate itself (built / noindex / indexable) is
 * decided in lib/hubs.ts; this prints it so every build log says which hubs are live and why not.
 */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = async (path) => JSON.parse(await readFile(resolve(root, path), "utf8"));
const [facts, data, meta, prints] = await Promise.all(["lib/data/product-facts.json", "lib/data/hubs.json", "lib/data/hubs.meta.json", "lib/data/hubs.fingerprints.json"].map(read));
const { hubs, hubGate, groundingErrors, proseFor, HUB_GATE } = await import("../lib/hubs.ts");
const { hubProse } = await import("../lib/hub-prose.ts");

/* Shape and provenance ------------------------------------------------------------------------- */

assert.match(data.dataAsOf, /^\d{4}-\d{2}-\d{2}$/, "hubs.json needs dataAsOf");
assert.match(meta.exportDate, /^\d{4}-\d{2}-\d{2}$/, "hubs.meta.json needs exportDate");
assert.equal(facts.dataAsOf, data.dataAsOf, "product-facts.json and hubs.json come from different exports");
for (const [file, entry] of Object.entries(meta.files)) {
  const source = meta.sources[entry.source];
  assert.ok(source, `${file} names source ${entry.source}, which hubs.meta.json does not describe`);
  assert.ok(["cc-by-4.0", "facts-only", "exclude"].includes(source.licence), `${entry.source} has no valid licence class`);
  if (entry.read === false) continue;
  assert.match(entry.sha256, /^[0-9a-f]{64}$/, `${file} needs a SHA-256`);
  if (source.licence === "exclude") assert.ok(source.inventoryCount, `${file} is excluded and must not have been read`);
}
for (const [key, source] of Object.entries(meta.sources)) {
  if (source.licence === "cc-by-4.0") assert.ok(source.attribution && source.licenceUrl, `${key} is CC BY 4.0 and needs an attribution line and licence link`);
}
assert.ok(Object.entries(meta.files).some(([file, entry]) => /bookit/i.test(file) && entry.read === false), "The BookIt partner feed must be listed as never read");

const legacySources = await Promise.all((await readdir(resolve(root, "lib/content"))).filter((name) => name.endsWith(".ts")).map((name) => readFile(resolve(root, "lib/content", name), "utf8")));
const legacyPaths = legacySources.flatMap((source) => [...source.matchAll(/legacyPath:\s*"([^"]+)"/g)].map((match) => match[1]));
const reserved = new Set(["/guides/", "/tools/", "/support/", "/credits/", "/privacy/", "/terms/", "/download/", ...legacyPaths.map((path) => `${path.replace(/\.html$/, "")}/`)]);

const seenPaths = new Set();
const json = JSON.stringify(data);
assert.doesNotMatch(json, /"description"\s*:/, "hubs.json must not carry description text");
assert.doesNotMatch(json, /\.(?:jpe?g|png|webp|gif)\b|raw\.githubusercontent|photo|image/i, "hubs.json must not carry images or photo URLs");
for (const hub of hubs) {
  assert.equal(hub.path, `/${hub.kind}/${hub.slug}/`, `${hub.id} path does not match its kind and slug`);
  assert.ok(!seenPaths.has(hub.path), `${hub.path} is declared twice`);
  seenPaths.add(hub.path);
  for (const path of [hub.path, `/${hub.kind}/`]) assert.ok(!reserved.has(path), `${path} collides with a published URL`);
  const source = meta.sources[hub.source];
  assert.ok(source && ["cc-by-4.0", "facts-only"].includes(source.licence), `${hub.id} is built from ${hub.source}, whose licence does not allow republishing`);
  assert.ok(hub.places.length <= 25, `${hub.id} lists more than 25 places`);
  assert.equal(hub.placeIds.length, hub.placeCount, `${hub.id} placeCount does not match placeIds`);
  assert.equal(new Set(hub.placeIds).size, hub.placeIds.length, `${hub.id} lists a place twice`);
  for (const place of hub.places) {
    assert.ok(place.name && place.type, `${hub.id} has a place without a name or type`);
    if (place.url) assert.match(place.url, /^https:\/\/(?:[a-z]+\.)?doc\.govt\.nz\//, `${hub.id}/${place.name} links somewhere other than DOC`);
  }
  for (const link of hub.officialLinks) assert.match(link.url, /^https:\/\/[a-z.]+\.govt\.nz\//, `${hub.id} official link ${link.url} is not a government page`);
  for (const [lat, lon] of hub.points) assert.ok(Number.isFinite(lat) && Number.isFinite(lon) && Math.round(lat * 1000) === lat * 1000 && Math.round(lon * 1000) === lon * 1000, `${hub.id} has a coordinate not rounded to 3 decimals`);
  assert.ok(hub.facts.every((fact) => fact.key && fact.label && fact.value !== "" && fact.value !== null), `${hub.id} has an empty fact`);
}

/* Prose: grounding, copying and house rules ----------------------------------------------------- */

const ids = new Set(hubs.map((hub) => hub.id));
for (const id of Object.keys(hubProse)) assert.ok(ids.has(id), `lib/hub-prose.ts has prose for ${id}, which is not a hub`);

const fingerprints = new Set(prints.fingerprints);
const normalise = (text) => text.toLowerCase().normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
const copiesDescription = (text) => {
  const words = normalise(text).split(" ").filter(Boolean);
  for (let i = 0; i + prints.shingleWords <= words.length; i++) {
    const hash = createHash("sha256").update(words.slice(i, i + prints.shingleWords).join(" ")).digest("hex").slice(0, 12);
    if (fingerprints.has(hash)) return true;
  }
  return false;
};
const strings = (value) => typeof value === "string" ? [value] : Array.isArray(value) ? value.flatMap(strings) : value && typeof value === "object" ? Object.values(value).flatMap(strings) : [];

const failures = [];
for (const hub of hubs) {
  const prose = proseFor(hub);
  for (const text of [...strings(hub), ...strings(prose ?? {})]) {
    if (text.length > 80 && copiesDescription(text)) failures.push(`${hub.id} repeats source description text: "${text.slice(0, 80)}…"`);
  }
  if (!prose) continue;
  const all = prose.paragraphs.join("\n");
  if (/—|\\u2014/.test(all)) failures.push(`${hub.id} prose contains an em dash`);
  if (/offline map|offline-map/i.test(all)) failures.push(`${hub.id} prose says "offline map"`);
  if (hub.kind === "freedom-camping" && !/council bylaw/i.test(all)) failures.push(`${hub.id} prose must say these are DOC notices, not council bylaws`);
  for (const source of prose.sources ?? []) if (!/^https:\/\/[a-z0-9.-]+\.(?:govt\.nz|org\.nz)\//.test(source.url)) failures.push(`${hub.id} cites ${source.url}, which is not an official New Zealand source`);
  for (const error of groundingErrors(hub, prose)) failures.push(error);
}
assert.deepEqual(failures, [], `Hub prose failed:\n  ${failures.join("\n  ")}`);

/* Tools copy (lib/source-strings.ts `toolStrings`, lib/tools.ts) ---------------------------------- */

const { toolStrings } = await import("../lib/source-strings.ts");
const { toolIds, tools, copyValues } = await import("../lib/tools.ts");
const toolText = strings(toolStrings).join("\n");
assert.doesNotMatch(toolText, /—|\\u2014/, "Tool copy contains an em dash");
assert.doesNotMatch(toolText, /offline map|offline-map/i, 'Tool copy says "offline map"');
assert.doesNotMatch(toolText, /AussieCamps|Australian|TODO|lorem ipsum/i, "Tool copy has foreign or placeholder text");
const knownValues = new Set([...Object.keys(copyValues("en-NZ")), "distance", "consumption", "litres", "price", "cost", "speed", "driving", "stops", "total", "hours", "minutes", "adults", "nights", "rateAdult", "totalAdult", "rateSite", "totalSite", "verdict", "perAdult", "perSite", "amount", "rate", "converted", "people", "freshTank", "greyTank", "freshDays", "greyDays", "fresh", "grey"]);
for (const match of toolText.matchAll(/\{(\w+)\}/g)) assert.ok(knownValues.has(match[1]), `Tool copy uses an unknown placeholder {${match[1]}}`);
const guideSlugs = new Set(legacySources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])));
for (const id of toolIds) {
  for (const slug of tools[id].guides) assert.ok(guideSlugs.has(slug), `${id} links to a guide that does not exist: ${slug}`);
  assert.ok(toolStrings[id].faq.length >= 2 && toolStrings[id].faq.length <= 3, `${id} needs 2 or 3 FAQs`);
  assert.ok(toolStrings[id].metaTitle.length <= 62, `${id} title is too long for a results page`);
}
assert.equal(new Set(toolIds.map((id) => toolStrings[id].metaTitle)).size, toolIds.length, "Every tool page needs its own title");
assert.ok(!toolIds.some((id) => toolStrings[id].metaTitle === toolStrings.index.metaTitle), "The /tools/ index needs a title distinct from the tool pages");

/* Gate report ---------------------------------------------------------------------------------- */

const rows = hubs.map((hub) => ({ hub, gate: hubGate(hub) }));
const built = rows.filter((row) => row.gate.built);
const indexable = built.filter((row) => row.gate.indexable);
const byKind = (list) => Object.entries(list.reduce((counts, { hub }) => ({ ...counts, [hub.kind]: (counts[hub.kind] ?? 0) + 1 }), {})).map(([kind, count]) => `${count} ${kind}`).join(", ") || "none";
console.log(`Hub audit passed: ${hubs.length} hub records from data as of ${data.dataAsOf}. Built ${built.length} (${byKind(built)}); indexable ${indexable.length} (${byKind(indexable)}); thresholds ${JSON.stringify(HUB_GATE)}.`);
if (process.env.HUBS_VERBOSE) for (const { hub, gate } of rows) console.log(`  ${hub.id}: ${gate.indexable ? "indexable" : gate.built ? "noindex" : "not built"}${gate.reasons.length ? ` (${gate.reasons.join("; ")})` : ""}`);
