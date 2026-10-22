import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sourceFiles = (await readdir(resolve(root, "lib/content"))).filter((name) => name.endsWith(".ts"));
const sources = await Promise.all(sourceFiles.map((name) => readFile(resolve(root, "lib/content", name), "utf8")));
const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));

const core = ["kiwicamping-app-icon.png", "kiwicamping-hero.webp", "kiwicamping-feature-1.webp", "kiwicamping-feature-2.webp", "kiwicamping-feature-3.webp", "kiwicamping-feature-4.webp", "kiwicamping-feature-5.webp", "kiwicamping-feature-6.webp", "kiwicamping-og-v2.png"];

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

// Link previews: the home image is a PNG and every guide has a JPG copy, because WebP previews often
// show as an empty card on X, Facebook, WhatsApp and iMessage. `npm run images:og` makes the copies.
const homeOg = await readFile(resolve(root, "public/images/kiwicamping-og-v2.png"));
assert.equal(homeOg.subarray(1, 4).toString(), "PNG", "public/images/kiwicamping-og-v2.png is not a PNG file");
assert.deepEqual([homeOg.readUInt32BE(16), homeOg.readUInt32BE(20)], [1200, 630], "public/images/kiwicamping-og-v2.png must be 1200x630");
// Every hero in public/images/articles, minus its `-<width>.webp` variants.
const heroNames = new Set((await readdir(resolve(root, "public/images/articles"))).filter((name) => name.endsWith(".webp")));
const heroes = [...heroNames].filter((name) => { const base = name.replace(/-\d+\.webp$/, ".webp"); return base === name || !heroNames.has(base); });
const missingOg = [];
for (const hero of heroes) {
  const path = resolve(root, "public/images/og", hero.replace(/\.webp$/, ".jpg"));
  try {
    const bytes = await readFile(path);
    assert.ok(bytes[0] === 0xff && bytes[1] === 0xd8, `${path} is not a JPEG file`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    missingOg.push(path.replace(`${root}/`, ""));
  }
}
assert.deepEqual(missingOg, [], `Missing link-preview images (run npm run images:og):\n${missingOg.join("\n")}`);

console.log(`All ${core.length + present.length} image assets are present; all ${present.length} article images are unique and attributed.`);
