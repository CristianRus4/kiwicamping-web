#!/usr/bin/env node
/**
 * Finds translations whose English has changed since they were written.
 *
 * The completeness gate (`isArticleComplete`) checks structure only: an English edit that keeps
 * every count the same never marks a translation stale. So each locale keeps a stamp file,
 * lib/translations/meta/<code>.json, recording for every translated string a hash of the English it
 * was translated from (and of the translation itself).
 *
 *   npm run translations:stamp -- --locale de
 *       Stamp every translated string that is new or whose translation changed since its last stamp.
 *       A string whose English changed but whose translation did not keeps its old stamp, so it stays
 *       stale until it is actually re-translated. Add --all after reviewing the whole file to accept
 *       every current translation as up to date.
 *   npm run translations:invalidate -- --locale de
 *       Blank every stale string in de.json (and drop its stamp), so the translation engine lists it
 *       as untranslated again. A guide with a blanked string falls back to English until redone.
 *
 * `npm run content:check` prints the stale count per locale. Keys use the translation engine's leaf
 * format (`articles.<slug>.sections[0].body[1]`). Only the locale's own translation thread runs these.
 * Same file, exports and flags as aussiecamps-web (docs/PARITY.md).
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const hash = (text) => createHash("sha1").update(text).digest("hex").slice(0, 12);
let directory = resolve(root, "lib/translations");
/** Point the functions below at another translations directory (tests use a temporary copy). */
export const useTranslationsDirectory = (path) => { directory = path; };
const localePath = (code) => resolve(directory, `${code}.json`);
const metaPath = (code) => resolve(directory, "meta", `${code}.json`);

/**
 * Every string in a translation document, keyed exactly as the translation engine keys it
 * (src/adapters/common.ts), as a Map of key to { path, value }. Unusual object keys use the engine's
 * JSON-pointer form.
 */
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
const english = () => leaves(readJson(localePath("en")));
const readMeta = (code) => (existsSync(metaPath(code)) ? readJson(metaPath(code)) : { locale: code, leaves: {} });
/** Translated, non-empty strings (the locale code itself is not a translation). */
const translated = (code) => [...leaves(readJson(localePath(code)))].filter(([key, leaf]) => key !== "locale" && leaf.value.trim());

/** Stamped strings whose English changed while the translation stayed the same. */
export function staleSummary(code) {
  const source = english();
  const { leaves: stamps } = readMeta(code);
  const current = translated(code);
  const stale = [];
  let stamped = 0;
  for (const [key, leaf] of current) {
    const stamp = stamps[key];
    if (!stamp) continue;
    stamped += 1;
    const [enHash, trHash] = stamp.split(":");
    const now = source.get(key);
    if (trHash === hash(leaf.value) && (now === undefined || enHash !== hash(now.value))) stale.push(key);
  }
  return { translated: current.length, stamped, unstamped: current.length - stamped, stale };
}

export function stamp(code, all = false) {
  const source = english();
  const meta = readMeta(code);
  const next = {};
  let changed = 0;
  for (const [key, leaf] of translated(code)) {
    const en = source.get(key);
    if (en === undefined) continue;
    const previous = meta.leaves[key];
    const fresh = `${hash(en.value)}:${hash(leaf.value)}`;
    // Keep an old stamp only when the translation is untouched: then a changed English stays stale.
    if (previous && !all && previous.split(":")[1] === hash(leaf.value)) next[key] = previous;
    else next[key] = fresh;
    if (next[key] !== previous) changed += 1;
  }
  mkdirSync(resolve(directory, "meta"), { recursive: true });
  writeJson(metaPath(code), { locale: code, leaves: Object.fromEntries(Object.entries(next).sort(([a], [b]) => a.localeCompare(b))) });
  return changed;
}

export function invalidate(code) {
  const { stale } = staleSummary(code);
  if (!stale.length) return 0;
  const document = readJson(localePath(code));
  const byKey = leaves(document);
  for (const key of stale) {
    const { path } = byKey.get(key);
    let node = document;
    for (const part of path.slice(0, -1)) node = node[part];
    node[path.at(-1)] = "";
  }
  writeJson(localePath(code), document);
  const meta = readMeta(code);
  for (const key of stale) delete meta.leaves[key];
  writeJson(metaPath(code), meta);
  return stale.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const code = args.includes("--locale") ? args[args.indexOf("--locale") + 1] : undefined;
  const registry = readJson(resolve(root, "lib/locales.json")).map((entry) => entry.code);
  if (!code || !registry.includes(code)) {
    console.error(`Usage: npm run translations:${args.includes("--invalidate") ? "invalidate" : "stamp"} -- --locale <${registry.join("|")}>`);
    process.exit(1);
  }
  if (args.includes("--invalidate")) {
    const count = invalidate(code);
    console.log(`${code}: blanked ${count} stale string(s); run the translation engine to re-translate them.`);
  } else {
    const changed = stamp(code, args.includes("--all"));
    const summary = staleSummary(code);
    console.log(`${code}: ${changed} stamp(s) written; ${summary.stamped} stamped, ${summary.stale.length} stale, ${summary.unstamped} unstamped.`);
  }
}
