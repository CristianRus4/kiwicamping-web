import assert from "node:assert/strict";
import { access, cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { startProdServer } from "vinext/server/prod-server";
// Run under tsx (`npm run export`), so the site's own TypeScript is the single source: the route
// manifest decides what is exported, the registry decides each page's language.
import { APP_STORE_URL, SITE_URL } from "../lib/site.ts";
import { appStoreUrl } from "../lib/app-store.ts";
import { exportRoutes } from "../lib/routes.ts";
import { englishLocale, htmlLang, textDirection } from "../lib/locales.ts";
import { redirects } from "../lib/redirects.ts";
import { PLACE_QR, PLACE_SCRIPT, placePageScript } from "../components/places/place-page.tsx";
import { qrSvgFile } from "../components/guide-cta.tsx";

// Drafts render only in development. An export with them would publish unfinished languages.
assert.notEqual(process.env.LOCALES_PREVIEW, "1", "Unset LOCALES_PREVIEW before exporting: draft locales are never published");

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
// PAGES_DIST writes the export elsewhere; tests/publish-schedule.test.mjs exports a second copy with it.
const output = resolve(root, process.env.PAGES_DIST ?? "pages-dist");
// campingapp.nz is served from a custom domain, so the site lives at the root. Only override this
// when deploying to a project-page subpath.
const defaultLang = englishLocale.htmlLang;
const siteName = "KiwiCamping";
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");

/**
 * Every file comes from the route manifest (lib/routes.ts), the same list that feeds the static
 * params, the sitemaps and hreflang, so a new page type cannot be built but silently left out of
 * the export. Articles that already rank keep their published .html URL; draft locales are not in
 * it. Crawler files (robots.txt, the sitemaps, llms.txt) are written as they are served.
 */
// PAGES_ONLY=/places,/ exports just the routes under those prefixes, for a quick local preview.
const only = process.env.PAGES_ONLY?.split(",").filter(Boolean);
const routes = exportRoutes().filter((route) => !only || only.some((prefix) => prefix === "/" ? route.path === "/" : route.path.startsWith(prefix)));
const htmlRoutes = routes.filter((route) => route.kind !== "crawler").map((route) => route.path);
const textRoutes = routes.filter((route) => route.kind === "crawler").map((route) => route.path);
const legacyRoutes = routes.filter((route) => route.locale === "en" && route.path.endsWith(".html")).map((route) => route.path);
const langOf = new Map(routes.map((route) => [route.path, htmlLang(route.locale)]));
// A right-to-left edition (Hebrew) says so on <html>, so the page, its scrollbar and form controls
// start from the right. Left-to-right pages keep the default and carry no dir attribute.
const rtlRoutes = new Set(routes.filter((route) => textDirection(route.locale) === "rtl").map((route) => route.path));
const htmlAttributes = (route) => `lang="${langOf.get(route) ?? defaultLang}"${rtlRoutes.has(route) ? ' dir="rtl"' : ""}`;

// A route ending in .html is a real file path, not a directory with an index inside it.
const outputPath = (route) => route === "/" ? resolve(output, "index.html") : route.endsWith(".html") ? resolve(output, route.slice(1)) : resolve(output, route.slice(1), "index.html");
// The server answers /guides, not /guides/ (it redirects the slash away); files keep the slash form.
const fetchPath = (route) => route === "/" ? route : route.replace(/\/$/, "");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });

const {server,port}=await startProdServer({port:0,host:"127.0.0.1",outDir:resolve(root,"dist"),noCompression:true,purpose:"prerender"});

// The root layout renders a single <html> element for every route, so it says English everywhere.
// Each exported file knows its own edition, so the tag (lang and dir) is corrected here from the registry.
function prepareHtml(html, route) {
  return html
    .replace(/<html lang="[^"]*"/i, `<html ${htmlAttributes(route)}`)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) => {
      const openingTag = script.slice(0, script.indexOf(">") + 1);
      // Structured data, the page's own tool scripts and the analytics bootstrap are kept. Everything
      // else is framework runtime the static site does not need.
      return /type="application\/ld\+json"|data-static-tools|data-static-keep/i.test(openingTag) ? script : "";
    })
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(/url\(\/(?!\/)/g, `url(${basePath}/`);
}

// /trip/ and /place/ carry what they show in the URL's hash, which the server never sees. The Smart App
// Banner's app-argument must be the whole URL, hash included, so the app opens that trip or place after an
// install: a script right after the banner meta, in <head>, sets it before the page renders.
const hashRoutes = new Set(routes.filter((route) => route.kind === "trip" || route.kind === "place-link").map((route) => route.path));
const bannerHash = `<script data-static-tools>(function(){var m=document.querySelector('meta[name="apple-itunes-app"]');if(m&&location.hash)m.setAttribute("content",m.getAttribute("content").replace(/app-argument=([^,#]*)[^,]*$/,function(_,url){return "app-argument="+url+location.hash;}));})();</script>`;
const withBannerHash = (html, route) => {
  if (!hashRoutes.has(route)) return html;
  const banner = html.match(/<meta name="apple-itunes-app"[^>]*>/);
  assert.ok(banner && /app-argument=/.test(banner[0]), `${route} has no Smart App Banner with an app-argument`);
  return html.replace(banner[0], `${banner[0]}${bannerHash}`);
};

for (const route of htmlRoutes) {
  const response = await fetch(`http://127.0.0.1:${port}${fetchPath(route)}`, { headers: { accept: "text/html" }, redirect: "manual" });
  assert.equal(response.status, 200, `Could not export ${route}`);
  const target = outputPath(route);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, withBannerHash(prepareHtml(await response.text(), route), route));
}

for (const route of textRoutes) {
  const response = await fetch(`http://127.0.0.1:${port}${route}`, { redirect: "manual" });
  assert.equal(response.status, 200, `Could not export ${route}`);
  const target = resolve(output, route.slice(1));
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, await response.text());
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

const escapeAttribute = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// A short, memorable download URL for QR codes, print and link-in-bio. GitHub Pages cannot issue a
// 301, so this is the static equivalent: an immediate meta refresh, noindex so it never competes in
// search, and a real link for anything that ignores the refresh. The redirect carries the `dl`
// campaign; the canonical stays the clean listing URL.
const downloadUrl = escapeAttribute(appStoreUrl({ placement: "dl", locale: "en" }));
await mkdir(resolve(output, "download"), { recursive: true });
await writeFile(resolve(output, "download/index.html"), `<!doctype html>
<html lang="${defaultLang}">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${downloadUrl}">
<link rel="canonical" href="${APP_STORE_URL}">
<title>Download ${siteName}</title>
</head>
<body><p>Opening the App Store. <a href="${downloadUrl}" data-cta="dl">Continue to ${siteName} on the App Store</a>.</p></body>
</html>
`);

// Moved and mistyped URLs (lib/redirects.ts), as the same kind of static redirect: noindex, a
// canonical at the target so any signal the old URL earned is passed on, and a visible link.
const routeSet = new Set(htmlRoutes);
for (const [from, to] of Object.entries(redirects)) {
  assert.ok(!routeSet.has(from), `Redirect source ${from} is also a real page`);
  assert.ok(routeSet.has(to), `Redirect target ${to} is not an exported page`);
  const href = escapeAttribute(`${basePath}${to}`);
  const target = outputPath(from);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, `<!doctype html>
<html ${htmlAttributes(to)}>
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, follow">
<meta http-equiv="refresh" content="0; url=${href}">
<link rel="canonical" href="${SITE_URL}${escapeAttribute(to)}">
<title>${siteName}</title>
</head>
<body><p><a href="${href}">${siteName}</a></p></body>
</html>
`);
}

// The place pages' shared files: their scripts and the store buttons' QR code, cached once rather than
// repeated on every place page (components/places/place-page.tsx).
await mkdir(resolve(output, "places"), { recursive: true });
await writeFile(resolve(output, PLACE_SCRIPT.slice(1)), `${placePageScript}\n`);
await writeFile(resolve(output, PLACE_QR.slice(1)), qrSvgFile("en"));
await writeFile(resolve(output, ".nojekyll"), "");
// Without CNAME in the artifact GitHub Pages drops the campingapp.nz custom domain on deploy.
if (!basePath) await cp(resolve(root, "CNAME"), resolve(output, "CNAME"));
// GitHub Pages uses this file for unknown paths. Keep it a real 404 page rather than copying the
// homepage, which makes a missing URL look like a duplicate homepage to crawlers.
await writeFile(resolve(output, "404.html"), `<!doctype html>
<html lang="${defaultLang}">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, follow">
<title>Page not found | ${siteName}</title>
</head>
<body><main><h1>Page not found</h1><p><a href="${basePath || ""}/">Return to ${siteName}</a></p></main></body>
</html>
`);
await new Promise((resolveClose,reject)=>server.close(error=>error?reject(error):resolveClose()));

for (const route of htmlRoutes) {
  const html = await readFile(outputPath(route), "utf8");
  assert.doesNotMatch(html, /self\.__VINEXT|__VINEXT_RSC/, `${route} contains runtime navigation code`);
  if (basePath) assert.doesNotMatch(html, new RegExp(`(?:href|src)="/(?!/|${basePath.slice(1)}(?:/|"))`), `${route} contains a root-dependent internal URL`);
}

// Every URL the live site ranks on must still resolve to a real file after the rebuild.
for (const route of legacyRoutes) await access(outputPath(route)).catch(() => assert.fail(`Legacy ranking URL ${route} was not exported`));

function localTarget(reference) {
  const clean = reference.split("#")[0].split("?")[0];
  if (clean === `${basePath}/`) return resolve(output, "index.html");
  if (!clean.startsWith(`${basePath}/`)) return null;
  const local = clean.slice(basePath.length + 1);
  // .html and .xml targets are files; other extensionless paths are directories holding an index.html.
  return /\.[a-z0-9]+$/i.test(local) ? resolve(output, local) : resolve(output, local, "index.html");
}

// Read each page again instead of holding every page's HTML in memory (the site now exports thousands).
for (const route of htmlRoutes) {
  const html = await readFile(outputPath(route), "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = localTarget(match[1]);
    if (target && !only) await access(target).catch(() => assert.fail(`${route} links to missing ${match[1]}`));
  }
}

console.log(`Exported ${htmlRoutes.length} HTML pages, ${Object.keys(redirects).length} redirects and ${textRoutes.length} crawler files for ${basePath || "/"}.`);
