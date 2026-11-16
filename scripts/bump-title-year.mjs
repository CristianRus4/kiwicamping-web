#!/usr/bin/env node
/**
 * Moves the year in page titles forward (2026 to 2027 by default), in the English source and every translation.
 *
 *   node scripts/bump-title-year.mjs --dry-run        print every change, write nothing
 *   node scripts/bump-title-year.mjs                  write the changes
 *   node scripts/bump-title-year.mjs --from 2027 --to 2028
 *
 * People search "… 2027" from December, so titles carry next year's number. Only title-like text changes:
 * the `title`, `metaTitle`, `h1`, `ogTitle`, `cardTitle` (and similar) fields in lib/**\/*.ts and in the
 * translation files. Slugs, paths, ids, body text, descriptions, FAQs and dates never change, and inside a
 * title these stay as they are:
 *   - ranges and seasons: 2026-27, 2026/27, 2026–27, 2026〜27, 2025-26, 2026-2027
 *   - dates and seasons named before the year: "7 June 2026", "October 2026", "Summer 2026"
 *   - a year that dates an event or a law: "from 2026", "since 2026", and English titles about new rules
 *     ("New Self-Containment Rules NZ 2026"), which are listed at the end instead.
 *
 * A translated title changes only when its English title (same key) carries the bumped year, so the
 * English decides, and a translation merged later with the old year is caught on the next run. Turkish and
 * Hungarian suffixes follow the new number (2026'da to 2027'de, 2026-ban to 2027-ben, 2026-os to 2027-es).
 * Translation stamps (lib/translations/meta) that were up to date stay up to date: the year bump is not a
 * reason to re-translate. Idempotent: a second run changes nothing. Run `npm run translations:source` after.
 */
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { leaves } from "./translations-stamp.mjs";

const root = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const flag = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
const dryRun = args.includes("--dry-run");
const FROM = flag("--from", "2026");
const TO = flag("--to", String(Number(FROM) + 1));
if (!/^\d{4}$/.test(FROM) || !/^\d{4}$/.test(TO)) throw new Error("--from and --to take four-digit years");

const TITLE_KEY = /^(title|metaTitle|seoTitle|pageTitle|h1|ogTitle|twitterTitle|cardTitle|shortTitle|navTitle|headline)$/;
const MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec";
const SEASONS = "summer|winter|spring|autumn|fall";
const RANGE_AFTER = /^\s*[-–—/〜~]\s*\d{2}(?:\d{2})?(?!\d)/u;
const RANGE_BEFORE = /\d{2}(?:\d{2})?\s*[-–—/〜~]\s*$/u;
const DATE_BEFORE = new RegExp(`(?:\\b\\d{1,2}(?:st|nd|rd|th)?|\\b(?:${MONTHS})\\.?|\\b(?:${SEASONS})|\\b(?:from|since|until|till|before|after|effective|checked|updated|as of))\\s+$`, "i");
/** English titles whose year dates a change in the law, not the page's year. */
const LAW_TITLE = /\bnew\b(?!\s+zealand)[^:]*\brules?\b|\brules?\s+(?:from|since)\b/i;
const yearAt = (year) => new RegExp(`(?<![0-9A-Za-z_])${year}(?!\\d)`, "gu");

// ---- Suffixes that follow the number's last word (vowel harmony) ----
const lastTwo = (year) => [Number(year[2]), Number(year[3])];
/** Turkish: the last vowel of the year read aloud, and whether it ends in a voiceless consonant. */
function turkishSound(year) {
  const [tens, unit] = lastTwo(year);
  const units = { 1: ["i", false], 2: ["i", false], 3: ["ü", true], 4: ["ö", true], 5: ["e", true], 6: ["ı", false], 7: ["i", false], 8: ["i", false], 9: ["u", false] };
  const tensWords = { 0: ["i", false], 1: ["o", false], 2: ["i", false], 3: ["u", false], 4: ["ı", true], 5: ["i", false], 6: ["ı", true], 7: ["i", true], 8: ["e", false], 9: ["a", false] };
  const [vowel, hard] = unit ? units[unit] : tensWords[tens];
  return { vowel, hard, back: "aıou".includes(vowel), round: "oöuü".includes(vowel) };
}
function turkishSuffix(suffix, year) {
  const { back, round, hard } = turkishSound(year);
  const four = back ? (round ? "u" : "ı") : round ? "ü" : "i";
  let out = suffix.replace(/[ae]/g, back ? "a" : "e").replace(/[ıiuü]/g, four);
  out = out.replace(/^[dt]/, hard ? "t" : "d");
  return out;
}
/** Hungarian: -os/-as/-es/-ös and two-way suffixes (-ban/-ben, -ra/-re …) after the year read aloud. */
function hungarianClass(year) {
  const [tens, unit] = lastTwo(year);
  const units = { 1: "es", 2: "es", 3: "as", 4: "es", 5: "ös", 6: "os", 7: "es", 8: "as", 9: "es" };
  const tensWords = { 0: "es", 1: "es", 2: "as", 3: "as", 4: "es", 5: "es", 6: "as", 7: "es", 8: "as", 9: "es" };
  return unit ? units[unit] : tensWords[tens];
}
const HU_PAIRS = [["ban", "ben"], ["ba", "be"], ["ra", "re"], ["ról", "ről"], ["tól", "től"], ["ból", "ből"], ["nak", "nek"], ["val", "vel"], ["nál", "nél"], ["hoz", "hez"]];
function hungarianSuffix(suffix, year) {
  const adjective = hungarianClass(year);
  if (["os", "as", "es", "ös"].includes(suffix)) return adjective;
  const back = adjective === "os" || adjective === "as";
  const pair = HU_PAIRS.find((p) => p.includes(suffix));
  if (!pair) return null;
  if (pair[0] === "hoz") return back ? "hoz" : adjective === "ös" ? "höz" : "hez";
  return back ? pair[0] : pair[1];
}

/**
 * Replaces the standalone year in a title. Returns { text, kept } where kept lists the years left alone
 * and why (ranges are not listed: they are never the page's year).
 */
export function bumpTitle(text, locale = "en") {
  const kept = [];
  const warnings = [];
  const re = yearAt(FROM);
  let out = "";
  let last = 0;
  for (const match of text.matchAll(re)) {
    const at = match.index;
    const before = text.slice(0, at);
    const after = text.slice(at + FROM.length);
    if (RANGE_AFTER.test(after) || RANGE_BEFORE.test(before)) continue;
    if (locale === "en" && DATE_BEFORE.test(before)) { kept.push("date or season"); continue; }
    let year = TO;
    let consumed = FROM.length;
    if (locale === "tr") {
      const suffix = after.match(/^(['’])(\p{L}+)/u);
      if (suffix) { year = `${TO}${suffix[1]}${turkishSuffix(suffix[2], TO)}`; consumed += suffix[0].length; }
    } else if (locale === "hu") {
      const suffix = after.match(/^-(\p{L}+)/u);
      if (suffix) {
        const next = hungarianSuffix(suffix[1], TO);
        if (next === null) { warnings.push(`unknown Hungarian suffix -${suffix[1]}`); continue; }
        year = `${TO}-${next}`; consumed += suffix[0].length;
      }
    } else if (locale === "fi" && /^:\p{L}/u.test(after)) {
      warnings.push("Finnish case ending after the year"); continue;
    }
    out += text.slice(last, at) + year;
    last = at + consumed;
  }
  return { text: out + text.slice(last), kept, warnings };
}
const hasYear = (text, year) => [...text.matchAll(yearAt(year))].some((m) => {
  const before = text.slice(0, m.index);
  const after = text.slice(m.index + year.length);
  return !RANGE_AFTER.test(after) && !RANGE_BEFORE.test(before) && !DATE_BEFORE.test(before);
});

const changes = [];
const leftAlone = [];
const warnings = [];
const record = (file, key, before, after, locale) => changes.push({ file, key, before, after, locale });

// ---- 1. English sources: string literals of title fields in lib/**/*.ts ----
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  if (statSync(path).isDirectory()) return name === "translations" ? [] : walk(path);
  return /\.tsx?$/.test(name) ? [path] : [];
});
const LITERAL = /\b(title|metaTitle|seoTitle|pageTitle|h1|ogTitle|twitterTitle|cardTitle|shortTitle|navTitle|headline)(\s*:\s*)(["'`])((?:\\.|(?!\3)[^\\])*)\3/g;
for (const path of walk(join(root, "lib"))) {
  const source = readFileSync(path, "utf8");
  if (!source.includes(FROM)) continue;
  const file = relative(root, path);
  const next = source.replace(LITERAL, (whole, key, colon, quote, value) => {
    if (!yearAt(FROM).test(value)) return whole;
    if (quote === "`" && value.includes("${")) return whole;
    if (LAW_TITLE.test(value)) { leftAlone.push({ file, key, text: value, why: "the year dates a change in the rules" }); return whole; }
    const { text, kept } = bumpTitle(value, "en");
    for (const why of kept) leftAlone.push({ file, key, text: value, why });
    if (text === value) return whole;
    record(file, key, value, text, "en");
    return `${key}${colon}${quote}${text}${quote}`;
  });
  if (next !== source && !dryRun) writeFileSync(path, next);
}

// ---- 2. Translation files: en.json decides, every locale follows ----
const hash = (text) => createHash("sha1").update(text).digest("hex").slice(0, 12);
const isTitleLeaf = (path) => {
  const name = [...path].reverse().find((part) => typeof part === "string");
  return Boolean(name && TITLE_KEY.test(name));
};
const setAt = (doc, path, value) => {
  let node = doc;
  for (const part of path.slice(0, -1)) node = node[part];
  node[path.at(-1)] = value;
};
function writeJson(path, before, doc, edits) {
  const pretty = `${JSON.stringify(doc, null, 2)}\n`;
  if (`${JSON.stringify(JSON.parse(before), null, 2)}\n` === before) return writeFileSync(path, pretty);
  // A hand-formatted file: replace each changed string in place.
  let text = before;
  for (const { from, to } of edits) {
    const needle = JSON.stringify(from);
    if (text.split(needle).length !== 2) throw new Error(`${relative(root, path)}: ${needle} is not unique; edit it by hand`);
    text = text.replace(needle, () => JSON.stringify(to));
  }
  writeFileSync(path, text);
}

const locales = JSON.parse(readFileSync(join(root, "lib/locales.json"), "utf8")).map((entry) => entry.code);
for (const folder of ["lib/translations", "lib/translations/hubs"]) {
  const enPath = join(root, folder, "en.json");
  if (!existsSync(enPath)) continue;
  const enText = readFileSync(enPath, "utf8");
  const enDoc = JSON.parse(enText);
  const enOld = leaves(enDoc);
  const enNew = new Map();
  const enEdits = [];
  for (const [key, leaf] of enOld) {
    let value = leaf.value;
    if (isTitleLeaf(leaf.path) && yearAt(FROM).test(value)) {
      if (LAW_TITLE.test(value)) leftAlone.push({ file: `${folder}/en.json`, key, text: value, why: "the year dates a change in the rules" });
      else {
        const { text } = bumpTitle(value, "en");
        if (text !== value) {
          record(`${folder}/en.json`, key, value, text, "en");
          setAt(enDoc, leaf.path, text);
          enEdits.push({ from: value, to: text });
          value = text;
        }
      }
    }
    enNew.set(key, value);
  }
  if (enEdits.length && !dryRun) writeJson(enPath, enText, enDoc, enEdits);

  for (const code of locales) {
    if (code === "en") continue;
    const path = join(root, folder, `${code}.json`);
    if (!existsSync(path)) continue;
    const text = readFileSync(path, "utf8");
    const doc = JSON.parse(text);
    const edits = [];
    const touched = new Map();
    for (const [key, leaf] of leaves(doc)) {
      if (!isTitleLeaf(leaf.path) || !yearAt(FROM).test(leaf.value)) continue;
      const english = enNew.get(key);
      if (english === undefined || !hasYear(english, TO)) continue;
      const result = bumpTitle(leaf.value, code);
      for (const warning of result.warnings) warnings.push(`${folder}/${code}.json ${key}: ${warning}`);
      if (result.text === leaf.value) continue;
      record(`${folder}/${code}.json`, key, leaf.value, result.text, code);
      setAt(doc, leaf.path, result.text);
      edits.push({ from: leaf.value, to: result.text });
      touched.set(key, { from: leaf.value, to: result.text });
    }
    if (edits.length && !dryRun) writeJson(path, text, doc, edits);

    // Stamps: an up-to-date stamp stays up to date when the English or the translation only changed year.
    const metaPath = join(root, folder, "meta", `${code}.json`);
    if (!existsSync(metaPath)) continue;
    const metaText = readFileSync(metaPath, "utf8");
    const meta = JSON.parse(metaText);
    const current = leaves(doc);
    let restamped = 0;
    for (const [key, stamp] of Object.entries(meta.leaves ?? {})) {
      const englishOld = enOld.get(key)?.value;
      const englishNow = enNew.get(key);
      const own = touched.get(key);
      if (englishOld === undefined || (englishOld === englishNow && !own)) continue;
      const translationNow = current.get(key)?.value;
      if (translationNow === undefined) continue;
      const translationOld = own ? own.from : translationNow;
      const [enHash, trHash] = stamp.split(":");
      if (enHash !== hash(englishOld) || trHash !== hash(translationOld)) continue;
      meta.leaves[key] = `${hash(englishNow)}:${hash(translationNow)}`;
      restamped += 1;
    }
    if (restamped && !dryRun) writeFileSync(metaPath, `${JSON.stringify(meta, null, 2)}\n`);
  }
}

// ---- Report ----
for (const change of changes) console.log(`${change.file}  ${change.key}\n  - ${change.before}\n  + ${change.after}`);
const perLocale = {};
for (const change of changes) if (!change.file.endsWith(".ts")) perLocale[change.locale] = (perLocale[change.locale] ?? 0) + 1;
const tsCount = changes.filter((change) => change.file.endsWith(".ts")).length;
const seen = new Set();
const uniqueLeft = leftAlone.filter((item) => !seen.has(item.text) && seen.add(item.text));
if (uniqueLeft.length) {
  console.log(`\nLeft alone (${uniqueLeft.length}):`);
  for (const item of uniqueLeft) console.log(`  ${item.text}  (${item.why})`);
}
if (warnings.length) {
  console.log(`\nNeeds a look (${warnings.length}):`);
  for (const warning of warnings) console.log(`  ${warning}`);
}
console.log(`\n${dryRun ? "Would change" : "Changed"} ${changes.length} title(s), ${FROM} to ${TO}: ${tsCount} in English sources; translation files: ${Object.entries(perLocale).map(([code, count]) => `${code} ${count}`).join(", ") || "none"}.`);
