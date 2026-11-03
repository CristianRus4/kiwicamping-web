#!/usr/bin/env node
/**
 * Records when each guide was first published and last rewritten, from git history.
 *
 * Google wants a date on an Article, and for the cost guides freshness is part of the ranking rather
 * than decoration. Hand-typed dates drift the moment an article is edited and invented ones would be
 * a fabricated signal, so both come from the commits that actually changed the guide's own text.
 *
 * "Its own text" matters: several guides share one source file, and that file also holds constants.
 * Dating by file would move every guide in it whenever an unrelated line changed. So each commit is
 * inspected, the article's own block is extracted from that revision, and only a commit that changed
 * that block counts as a modification.
 *
 * Translations are dated the same way, separately: a German guide was last modified when its own
 * German text last changed, not when the English did. For every locale file in the registry, each
 * commit's `articles[slug]` is hashed, and the date recorded is the commit at which the current
 * text appeared. Output: { slug: { published, modified, locales: { de: "YYYY-MM-DD", ... } } }.
 *
 * Runs before every build (`prebuild`), which is why CI checks out full history. Run
 * `npm run articles:dates` by hand after adding or rewriting a guide.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, "lib/article-dates.json");

const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
const day = (iso) => iso.slice(0, 10);

const contentDir = join(ROOT, "lib/content");
const files = existsSync(contentDir)
  ? readdirSync(contentDir).filter((name) => name.endsWith(".ts")).map((name) => `lib/content/${name}`)
  : ["lib/expanded-articles.ts", "lib/site.ts"];

/** Every article's source, keyed by slug: from its own `slug: "…"` to the start of the next one. */
function blocks(source) {
  const found = [...source.matchAll(/slug:\s*"([^"]+)"/g)];
  const result = new Map();
  found.forEach((match, index) => {
    const end = index + 1 < found.length ? found[index + 1].index : source.length;
    result.set(match[1], createHash("sha1").update(source.slice(match.index, end)).digest("hex"));
  });
  return result;
}

const dates = {};
for (const file of files) {
  // Oldest first, so the first revision containing a slug is its publication.
  const commits = git("log", "--reverse", "--format=%H %aI", "--", file).trim().split("\n").filter(Boolean);
  const seen = new Map();
  for (const line of commits) {
    const [hash, iso] = line.split(" ");
    let source;
    try { source = git("show", `${hash}:${file}`); } catch { continue; }
    for (const [slug, digest] of blocks(source)) {
      const previous = seen.get(slug);
      if (!previous) seen.set(slug, { published: day(iso), modified: day(iso), digest });
      else if (previous.digest !== digest) { previous.modified = day(iso); previous.digest = digest; }
    }
  }
  for (const [slug, entry] of seen) dates[slug] = { published: entry.published, modified: entry.modified };
}

const registry = JSON.parse(readFileSync(join(ROOT, "lib/locales.json"), "utf8"));
const digest = (value) => createHash("sha1").update(JSON.stringify(value)).digest("hex");
let translated = 0;
for (const { code } of registry) {
  const file = `lib/translations/${code}.json`;
  const commits = git("log", "--reverse", "--format=%H %aI", "--", file).trim().split("\n").filter(Boolean);
  const current = new Map();
  for (const line of commits) {
    const [hash, iso] = line.split(" ");
    let articles;
    try { articles = JSON.parse(git("show", `${hash}:${file}`)).articles ?? {}; } catch { continue; }
    for (const slug of [...current.keys()]) if (!(slug in articles)) current.delete(slug);
    for (const [slug, article] of Object.entries(articles)) {
      const hashOfText = digest(article);
      if (current.get(slug)?.digest !== hashOfText) current.set(slug, { digest: hashOfText, since: day(iso) });
    }
  }
  for (const [slug, { since }] of current) {
    if (!dates[slug]) continue;
    (dates[slug].locales ??= {})[code] = since;
    translated += 1;
  }
}

writeFileSync(OUT, JSON.stringify(Object.fromEntries(Object.entries(dates).sort()), null, 2) + "\n");
console.log(`article dates: ${Object.keys(dates).length} guides, ${translated} dated translations`);

/**
 * The same for the pages that are not guides: the day the files that render the home page, the tools
 * and the data hubs last changed, for their sitemap `lastmod` (lib/routes/pages.ts, tools.ts, hubs.ts).
 * A hard-coded date said the tools and hubs were last modified before they existed. Uncommitted
 * changes are dated today.
 */
const today = new Date().toISOString().slice(0, 10);
const PAGE_SOURCES = {
  home: ["app/page.tsx", "lib/summer.ts"],
  tools: ["app/tools", "lib/tools.ts", "components/tool-page.tsx", "components/currency-converter.tsx", "components/fuel-calculator.tsx", "components/drive-time-calculator.tsx", "components/tank-duration-calculator.tsx", "components/campsite-cost-calculator.tsx"],
  hubs: ["lib/hubs.ts", "lib/hubs-localized.ts", "lib/hub-prose.ts", "lib/hub-prose", "lib/hub-strings.ts", "lib/data/hubs.json", "components/hub-page.tsx", "components/localized-hub-page.tsx", "components/hub-map.tsx", "app/camping", "app/huts", "app/freedom-camping", "app/[locale]/camping", "app/[locale]/huts", "app/[locale]/freedom-camping"],
};
const pageDates = Object.fromEntries(Object.entries(PAGE_SOURCES).map(([page, paths]) => {
  const present = paths.filter((path) => existsSync(join(ROOT, path)));
  if (git("status", "--porcelain", "--", ...present).trim()) return [page, today];
  return [page, day(git("log", "-1", "--format=%aI", "--", ...present).trim() || `${today}T`)];
}));
writeFileSync(join(ROOT, "lib/page-dates.json"), JSON.stringify(pageDates, null, 2) + "\n");
console.log(`page dates: ${Object.entries(pageDates).map(([page, date]) => `${page} ${date}`).join(", ")}`);
