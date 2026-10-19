/**
 * Writes lib/translations/en.json — the complete English source a translator works from.
 *
 * Everything a locale can override lives in one file with the same shape as de.json/es.json/…:
 *
 *   { "ui": { … }, "pages": { support, privacy, terms }, "tools": { shared, index, <tool> }, "articles": { "<slug>": { … } } }
 *
 * Translate the values, keep every key and every array position, save the result as
 * lib/translations/<code>.json, and the site picks it up on the next build. Partial files are fine:
 * lib/localized.ts falls back to the English value for anything a locale has not supplied.
 *
 * Every guide is included: road trips and the legacy .html articles too.
 *
 * Contextual links are carried as markup: the phrase lib/internal-links.ts links in English is
 * wrapped as <a data-guide="slug">phrase</a>. A translation keeps the tags (the engine checks they
 * survive) around its own wording, and the site rewrites them to that edition's guide URL.
 *
 * Run:  npm run translations:source
 */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { translationSource, translationSourceText } from "../lib/translation-source.ts";

const source = translationSource();
const output = resolve("lib/translations");
await mkdir(output, { recursive: true });
await writeFile(resolve(output, "en.json"), translationSourceText());
console.log(`en.json: ${Object.keys(source.ui).length} ui strings, ${Object.keys(source.pages).length} static pages, ${Object.keys(source.articles).length} articles`);
