#!/usr/bin/env node
/**
 * Stale-translation detection.
 *
 * The site's completeness gate (lib/localized.ts) checks structure only: a German paragraph still
 * counts after the English paragraph it translates has been rewritten. This records what each
 * translation was made from, so a changed English source can be found and re-translated.
 *
 *   npm run translations:stamp -- --locale ja
 *     Writes lib/translations/meta/ja.json: for every translated leaf, a hash of the English text it
 *     translates and a hash of the translation itself. Run it after translating. An existing stamp
 *     is renewed only where the translation text has changed (it was re-translated) or the English
 *     is unchanged, so stamping after translating one new guide never marks an untouched stale
 *     paragraph elsewhere as fresh.
 *
 *   npm run translations:invalidate -- --locale ja
 *     Empties every translated leaf whose English has changed since it was stamped, and drops its
 *     stamp. The translation engine treats an empty leaf as missing, so it lists it again; the
 *     article it belongs to falls back to English, noindex, until it is re-translated.
 *
 * Leaf keys are the translation engine's own (`articles.<slug>.sections[0].body[2]`), so a stale
 * key can be handed to the engine as is. `npm run content:check` prints each locale's stale count.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const sourcePath = resolve(root, "lib/translations/en.json");
const localePath = (code) => resolve(root, `lib/translations/${code}.json`);
const metaPath = (code) => resolve(root, `lib/translations/meta/${code}.json`);

const hash = (text) => createHash("sha1").update(text).digest("hex").slice(0, 12);

/** String leaves keyed exactly as the translation engine keys them (src/adapters/common.ts). */
export function leaves(value) {
  const out = new Map();
  const visit = (node, path) => {
    if (typeof node === "string") {
      const pointer = path.some((part) => typeof part === "string" && (!part || part === "$" || /[.[\]/~]/u.test(part)));
      const key = !path.length ? "$" : pointer
        ? "/" + path.map((part) => String(part).replace(/~/g, "~0").replace(/\//g, "~1")).join("/")
        : path.map((part, index) => typeof part === "number" ? `[${part}]` : `${index ? "." : ""}${part}`).join("");
      out.set(key, { path, value: node });
    } else if (Array.isArray(node)) node.forEach((child, index) => visit(child, [...path, index]));
    else if (node && typeof node === "object") for (const [key, child] of Object.entries(node)) visit(child, [...path, key]);
  };
  visit(value, []);
  return out;
}

const readJson = (path) => JSON.parse(readFileSync(path, "utf8"));
const writeJson = (path, value) => writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
// The locale code and the structural fields are not translations.
const translatable = (key) => key !== "locale";
const filled = (value) => typeof value === "string" && value.trim().length > 0;

/** { english, translation } hashes per stamped leaf, or null when the locale has never been stamped. */
function readStamps(code) {
  if (!existsSync(metaPath(code))) return null;
  const meta = readJson(metaPath(code));
  return new Map(Object.entries(meta.leaves ?? {}).map(([key, value]) => {
    const [english, translation] = String(value).split(":");
    return [key, { english, translation }];
  }));
}

/**
 * A locale's stamp status against the current English: stale leaves (English changed since the
 * translation was stamped), translated leaves never stamped, and the stamped total.
 */
export function stampStatus(code) {
  const source = leaves(readJson(sourcePath));
  const target = leaves(readJson(localePath(code)));
  const stamps = readStamps(code);
  if (!stamps) return { stamped: false, stale: [], unstamped: [...target.keys()].filter((key) => translatable(key) && filled(target.get(key).value)).length, total: 0 };
  const stale = [];
  let unstamped = 0;
  for (const [key, leaf] of target) {
    if (!translatable(key) || !filled(leaf.value)) continue;
    const stamp = stamps.get(key);
    const english = source.get(key);
    if (!stamp) { unstamped += 1; continue; }
    if (english && stamp.english !== hash(english.value)) stale.push(key);
  }
  return { stamped: true, stale, unstamped, total: stamps.size };
}

function stamp(code) {
  const source = leaves(readJson(sourcePath));
  const target = leaves(readJson(localePath(code)));
  const previous = readStamps(code) ?? new Map();
  const next = {};
  let renewed = 0, kept = 0;
  for (const [key, leaf] of target) {
    if (!translatable(key) || !filled(leaf.value)) continue;
    const english = source.get(key);
    if (!english) continue;
    const current = { english: hash(english.value), translation: hash(leaf.value) };
    const old = previous.get(key);
    // Unchanged translation of a changed English text: still stale, so the old stamp stays.
    if (old && old.english !== current.english && old.translation === current.translation) { next[key] = `${old.english}:${old.translation}`; kept += 1; continue; }
    if (!old || old.english !== current.english || old.translation !== current.translation) renewed += 1;
    next[key] = `${current.english}:${current.translation}`;
  }
  mkdirSync(resolve(root, "lib/translations/meta"), { recursive: true });
  writeJson(metaPath(code), { locale: code, source: "lib/translations/en.json", leaves: Object.fromEntries(Object.entries(next).sort(([a], [b]) => a.localeCompare(b))) });
  console.log(`translations:stamp ${code}: ${Object.keys(next).length} leaves stamped (${renewed} new or renewed), ${kept} still stale.`);
}

function invalidate(code) {
  const { stamped, stale } = stampStatus(code);
  if (!stamped) { console.error(`${code} has never been stamped (run npm run translations:stamp -- --locale ${code} first).`); process.exit(1); }
  const document = readJson(localePath(code));
  const target = leaves(document);
  for (const key of stale) {
    const { path } = target.get(key);
    let node = document;
    for (const part of path.slice(0, -1)) node = node[part];
    node[path.at(-1)] = "";
  }
  writeJson(localePath(code), document);
  const meta = readJson(metaPath(code));
  for (const key of stale) delete meta.leaves[key];
  writeJson(metaPath(code), meta);
  console.log(`translations:invalidate ${code}: emptied ${stale.length} stale leaves.${stale.length ? `\n  ${stale.slice(0, 20).join("\n  ")}${stale.length > 20 ? `\n  ... and ${stale.length - 20} more` : ""}` : ""}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [command] = process.argv.slice(2);
  const flag = process.argv.indexOf("--locale");
  const code = flag > -1 ? process.argv[flag + 1] : undefined;
  const registry = readJson(resolve(root, "lib/locales.json")).map((entry) => entry.code);
  if (!["stamp", "invalidate"].includes(command) || !code || !registry.includes(code)) {
    console.error(`Usage: npm run translations:stamp -- --locale <code>\n       npm run translations:invalidate -- --locale <code>\nLocales: ${registry.join(", ")}`);
    process.exit(1);
  }
  if (command === "stamp") stamp(code);
  else invalidate(code);
}
