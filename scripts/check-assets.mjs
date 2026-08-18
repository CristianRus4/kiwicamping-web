import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sourceFiles = (await readdir(resolve(root, "lib/content"))).filter((name) => name.endsWith(".ts"));
const sources = await Promise.all(sourceFiles.map((name) => readFile(resolve(root, "lib/content", name), "utf8")));
const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));

const core = ["kiwicamping-app-icon.png", "kiwicamping-hero.webp", "kiwicamping-feature-1.webp", "kiwicamping-feature-2.webp", "kiwicamping-feature-3.webp", "kiwicamping-feature-4.webp", "kiwicamping-feature-5.webp", "kiwicamping-feature-6.webp", "kiwicamping-qr.png"];

const missingCore = [];
for (const name of core) await access(resolve(root, "public/images", name)).catch(() => missingCore.push(`public/images/${name}`));

// Report every missing article image at once so the shortfall is a work list, not a guessing game.
const present = [], missingArticles = [];
for (const slug of slugs) {
  const path = resolve(root, "public/images/articles", `${slug}.webp`);
  await access(path).then(() => present.push({ slug, path })).catch(() => missingArticles.push(slug));
}

if (missingCore.length || missingArticles.length) {
  if (missingCore.length) console.error(`\nMissing core images (${missingCore.length}):\n  ${missingCore.join("\n  ")}`);
  if (missingArticles.length) console.error(`\nMissing article images (${missingArticles.length} of ${slugs.length}):\n${missingArticles.map((slug) => `  public/images/articles/${slug}.webp`).join("\n")}`);
  console.error("");
}

const hashes = [];
for (const { slug, path } of present) {
  const bytes = await readFile(path);
  assert.equal(bytes.subarray(0, 4).toString(), "RIFF", `${slug}.webp is not a WebP file`);
  assert.equal(bytes.subarray(8, 12).toString(), "WEBP", `${slug}.webp is not a WebP file`);
  hashes.push(createHash("sha256").update(bytes).digest("hex"));
}
assert.equal(new Set(hashes).size, hashes.length, "Every article must use a unique image file");

const credits = await readFile(resolve(root, "docs/IMAGE-SOURCES.md"), "utf8");
const unattributed = present.filter(({ slug }) => !credits.includes(`| \`${slug}\` |`)).map(({ slug }) => slug);
assert.equal(unattributed.length, 0, `Missing image attribution for: ${unattributed.join(", ")}`);

assert.equal(missingCore.length, 0, `${missingCore.length} core images are missing`);
assert.equal(missingArticles.length, 0, `${missingArticles.length} article images are missing (listed above)`);

console.log(`All ${core.length + present.length} image assets are present; all ${present.length} article images are unique and attributed.`);
