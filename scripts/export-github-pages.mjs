import assert from "node:assert/strict";
import { access, cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { startProdServer } from "vinext/server/prod-server";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "pages-dist");
// campingapp.nz is served from a custom domain, so the site lives at the root. Only override this
// when deploying to a project-page subpath.
const defaultLang = "en-NZ";
const siteName = "KiwiCamping";
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const sources = await Promise.all((await readdir(resolve(root,"lib/content"))).filter((name)=>name.endsWith(".ts")).map((name) => readFile(resolve(root,"lib/content",name), "utf8")));
// Articles that already rank keep their published .html URL; everything else lives under /guides/.
const entries = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"(?:,\s*legacyPath:\s*"([^"]+)")?/g)].map((match) => ({ slug: match[1], legacyPath: match[2] })));
const legacyRoutes = entries.filter((entry) => entry.legacyPath).map((entry) => entry.legacyPath);
const guideSlugs = entries.filter((entry) => !entry.legacyPath).map((entry) => entry.slug);
const rootRoutes = ["/", "/guides", ...guideSlugs.map((slug) => `/guides/${slug}`), ...legacyRoutes, "/tools", "/support", "/privacy", "/terms"];
// Every locale exports every guide; ones it has not translated are served in English.
const localeRoutes=["de","es","fr","it","nl","pt"].flatMap((locale)=>["", "/guides", ...guideSlugs.map((slug)=>`/guides/${slug}`), "/tools", "/support", "/privacy", "/terms"].map((route)=>`/${locale}${route}`));
const htmlRoutes = [...rootRoutes,...localeRoutes];

// A route ending in .html is a real file path, not a directory with an index inside it.
const outputPath = (route) => route === "/" ? resolve(output, "index.html") : route.endsWith(".html") ? resolve(output, route.slice(1)) : resolve(output, route.slice(1), "index.html");
const textRoutes = ["/robots.txt", "/sitemap.xml", "/llms.txt"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });

const {server,port}=await startProdServer({port:0,host:"127.0.0.1",outDir:resolve(root,"dist"),noCompression:true,purpose:"prerender"});

// The root layout renders a single <html> element for every route, so localised pages inherited
// `lang="en-NZ"`. Each exported file knows its own locale, so the tag is corrected here.
const localeLang = { de: "de-DE", es: "es-ES", fr: "fr-FR", it: "it-IT", nl: "nl-NL", pt: "pt-PT" };
const routeLang = (route) => localeLang[route.split("/")[1]] ?? "en-NZ";

function prepareHtml(html, route) {
  return html
    .replace(/<html lang="[^"]*"/i, `<html lang="${routeLang(route)}"`)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) => {
      const openingTag = script.slice(0, script.indexOf(">") + 1);
      return /type="application\/ld\+json"|data-static-tools/i.test(openingTag) ? script : "";
    })
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(/url\(\/(?!\/)/g, `url(${basePath}/`);
}

for (const route of htmlRoutes) {
  const response = await fetch(`http://127.0.0.1:${port}${route}`, { headers: { accept: "text/html" } });
  assert.equal(response.status, 200, `Could not export ${route}`);
  const target = outputPath(route);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, prepareHtml(await response.text(), route));
}

for (const route of textRoutes) {
  const response = await fetch(`http://127.0.0.1:${port}${route}`);
  assert.equal(response.status, 200, `Could not export ${route}`);
  await writeFile(resolve(output, route.slice(1)), await response.text());
}

for (const name of await readdir(resolve(output, "assets"))) {
  if (name.endsWith(".js")) {
    await rm(resolve(output, "assets", name));
    continue;
  }
  if (!name.endsWith(".css")) continue;
  const path = resolve(output, "assets", name);
  const css = await readFile(path, "utf8");
  await writeFile(path, css.replace(/url\(\/(?!\/)/g, `url(${basePath}/`));
}

// A short, memorable download URL for QR codes, print and link-in-bio. GitHub Pages cannot issue a
// 301, so this is the static equivalent: an immediate meta refresh, noindex so it never competes in
// search, and a real link for anything that ignores the refresh.
const siteConstants = await readFile(resolve(root, "lib/site.ts"), "utf8");
const appId = siteConstants.match(/APP_ID = "(\d+)"/)[1];
const appStoreUrl = siteConstants.match(/export const APP_STORE_URL = `([^`]+)`/)[1].replace("${APP_ID}", appId);
await mkdir(resolve(output, "download"), { recursive: true });
await writeFile(resolve(output, "download/index.html"), `<!doctype html>
<html lang="${defaultLang}">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${appStoreUrl}">
<link rel="canonical" href="${appStoreUrl}">
<title>Download ${siteName}</title>
</head>
<body><p>Opening the App Store. <a href="${appStoreUrl}">Continue to ${siteName} on the App Store</a>.</p></body>
</html>
`);

await writeFile(resolve(output, ".nojekyll"), "");
// Without CNAME in the artifact GitHub Pages drops the campingapp.nz custom domain on deploy.
if (!basePath) await cp(resolve(root, "CNAME"), resolve(output, "CNAME"));
await cp(resolve(output, "index.html"), resolve(output, "404.html"));
await new Promise((resolveClose,reject)=>server.close(error=>error?reject(error):resolveClose()));

const exportedHtml = [];
for (const route of htmlRoutes) {
  const html = await readFile(outputPath(route), "utf8");
  assert.doesNotMatch(html, /self\.__VINEXT|__VINEXT_RSC/, `${route} contains runtime navigation code`);
  if (basePath) assert.doesNotMatch(html, new RegExp(`(?:href|src)="/(?!/|${basePath.slice(1)}(?:/|"))`), `${route} contains a root-dependent internal URL`);
  exportedHtml.push([route, html]);
}

// Every URL the live site ranks on must still resolve to a real file after the rebuild.
for (const route of legacyRoutes) await access(outputPath(route)).catch(() => assert.fail(`Legacy ranking URL ${route} was not exported`));

function localTarget(reference) {
  const clean = reference.split("#")[0].split("?")[0];
  if (clean === `${basePath}/`) return resolve(output, "index.html");
  if (!clean.startsWith(`${basePath}/`)) return null;
  const local = clean.slice(basePath.length + 1);
  // .html targets are files; other extensionless paths are directories holding an index.html.
  return /\.[a-z0-9]+$/i.test(local) ? resolve(output, local) : resolve(output, local, "index.html");
}

for (const [route, html] of exportedHtml) {
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = localTarget(match[1]);
    if (target) await access(target).catch(() => assert.fail(`${route} links to missing ${match[1]}`));
  }
}

console.log(`Exported ${htmlRoutes.length} HTML pages and ${textRoutes.length} crawler files for ${basePath}.`);
