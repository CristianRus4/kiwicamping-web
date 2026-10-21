import assert from "node:assert/strict";
import test, { after } from "node:test";
import { readFile, readdir } from "node:fs/promises";
import { startProdServer } from "vinext/server/prod-server";
// Run with `node --import tsx --test` (npm test), so the site's own constants are imported, not copied.
import { APPLE_PROVIDER_TOKEN, APP_STORE_URL, GA_MEASUREMENT_ID } from "../lib/site.ts";
import { appStoreUrl, ctaPlacements } from "../lib/app-store.ts";
import { isArticleTranslated, isStaticPageTranslated, isTranslated, publishedLocales } from "../lib/localized.ts";
import { liveLocales, localeCodes, localeEntry } from "../lib/locales.ts";
import { allArticles, articles, isScheduled } from "../lib/site.ts";
import { redirects } from "../lib/redirects.ts";
import { screenFigures } from "../lib/screen-figures.ts";

/** Live locales, from lib/locales.json: the only list of languages anywhere in the code. */
const locales=liveLocales;

const {server,port}=await startProdServer({port:0,host:"127.0.0.1",outDir:"dist",noCompression:true,purpose:"prerender"});
after(()=>new Promise((resolve,reject)=>server.close(error=>error?reject(error):resolve())));
async function fetchPage(path="/"){return fetch(`http://127.0.0.1:${port}${path}`,{headers:{accept:"text/html"}})}
async function entries(){const directory=new URL("../lib/content/",import.meta.url);const sources=await Promise.all((await readdir(directory)).filter(name=>name.endsWith(".ts")).map(name=>readFile(new URL(name,directory),"utf8")));return sources.flatMap(source=>[...source.matchAll(/slug:\s*"([^"]+)"(?:,\s*legacyPath:\s*"([^"]+)")?/g)].map(match=>({slug:match[1],legacyPath:match[2]})))}

/** Every URL campingapp.nz ranks on today. These must keep resolving after the rebuild. */
const rankingUrls=["/best-nz-camping-apps.html","/campfire-rules-nz.html","/camping-costs-nz.html","/camping-packing-list-nz.html","/doc-campsites-huts-guide.html","/dump-stations-nz.html","/free-camping-nz-legal.html","/freedom-camping-rules-nz.html","/holiday-parks-nz-booking-guide.html","/nz-camping-seasons-weather-sandflies.html","/responsible-camping-nz.html","/self-contained-vehicles-nz.html","/top-scenic-campsites-nz.html","/two-week-camper-itinerary-nz.html","/where-to-camp-in-new-zealand.html"];

test("renders the KiwiCamping homepage with real product facts",async()=>{const response=await fetchPage();assert.equal(response.status,200);const html=await response.text();assert.match(html,/New Zealand is big/);assert.match(html,/6,500\+/);assert.match(html,/2,000\+/);assert.match(html,/routes, distance, dates, notes and to-dos/i);assert.match(html,/Offline/);assert.match(html,/trip planner/i);assert.match(html,/<div class="qr-image" data-cta="qr" data-qr-url="[^"]+"><svg viewBox="0 0 \d+ \d+"/);assert.ok(html.replace(/&amp;/g,"&").includes(`data-qr-url="${appStoreUrl({placement:"qr",locale:"en"})}"`),"the QR code must encode the qr campaign link");assert.doesNotMatch(html,/kiwicamping-qr\.png/);assert.match(html,/6746952595/);assert.match(html,/application\/ld\+json/);assert.doesNotMatch(html,/AussieCamps|Australian|(?:across|around|throughout|in) Australia\b|not available yet|section-number|useful place categories/i)});

test("keeps every already-ranking URL live and canonical",async()=>{for(const url of rankingUrls){const response=await fetchPage(url);assert.equal(response.status,200,`${url} must still resolve`);const html=await response.text();assert.match(html,new RegExp(`rel="canonical"[^>]*href="[^"]*${url.replace(/[.]/g,"\\.")}"`),`${url} must be self-canonical`);assert.match(html,/<div class="article-body">/,`${url} must render a full article`)}});

test("does not publish a ranking article at a second URL",async()=>{const list=await entries();for(const {slug,legacyPath} of list.filter(entry=>entry.legacyPath)){const response=await fetchPage(`/guides/${slug}`);assert.equal(response.status,404,`${slug} is published at ${legacyPath} and must not also serve /guides/${slug}`)}});

test("renders a genuine long-form New Zealand route with prose under every heading",async()=>{const response=await fetchPage("/guides/coromandel-rotorua-road-trip");assert.equal(response.status,200);const html=await response.text();assert.match(html,/Pacific beaches, forest roads and geothermal country/);assert.match(html,/Whitianga/);assert.match(html,/Rotorua/);assert.match(html,/property="og:url" content="https:\/\/campingapp\.nz\/guides\/coromandel-rotorua-road-trip\/"/);const body=html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1]??"";assert.ok((body.match(/<p[ >]/g)??[]).length>=6,"needs substantial prose");for(const section of body.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)){if(!/<h2/.test(section[1])||/place-chips|price-table|sources/.test(section[1]))continue;assert.match(section[1],/<p[ >]/,"every heading needs prose under it")}assert.match(html,/Save the stops\. Plan the whole trip\./);assert.doesNotMatch(html,/These names are intentionally|Editorial landscape image/)});

test("every article renders real prose and no templated filler",async()=>{const list=await entries();assert.ok(list.length>=78,`expected at least 78 articles, found ${list.length}`);
const templates=[/the useful decisions around/,/gives the story a beginning, while/,/becomes easier when the route is divided into decisions/,/keep a workable alternative near/,/before leaving coverage, then attach the booking details/,/current signs, official alerts and the conditions on arrival take priority/,/as research anchors, recheck the responsible official source/,/Hold water, fuel, money and time in reserve between/];
for(const {slug,legacyPath} of list){const route=legacyPath??`/guides/${slug}`;const response=await fetchPage(route);
  // A guide whose publishAt is still ahead is not served at all (lib/publish.ts).
  if(isScheduled(slug)){assert.equal(response.status,404,`${slug} is scheduled but already served`);continue;}
  assert.equal(response.status,200,route);const html=await response.text();const body=html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1]??"";assert.ok((body.match(/<p[ >]/g)??[]).length>=6,`${route} needs at least six prose paragraphs`);for(const template of templates)assert.doesNotMatch(body,template,`${route} still contains templated filler`);assert.match(html,/section-count/)}});

test("renders dated New Zealand cost tables in ten currencies",async()=>{const response=await fetchPage("/guides/new-zealand-grocery-prices-2026");assert.equal(response.status,200);const html=await response.text();assert.match(html,/Price table in 10 currencies/);assert.match(html.replace(/<!-- -->/g,""),/Prices checked 16 October 2026/);for(const currency of ["NZD","USD","GBP","AUD","JPY","EUR","CNY","KRW","INR","SGD"])assert.match(html,new RegExp(`>${currency}<`));assert.match(html,/Reserve Bank of New Zealand/)});

test("renders tools with official benchmark defaults",async()=>{const response=await fetchPage("/tools");assert.equal(response.status,200);const html=await response.text();assert.match(html,/Currency converter/);assert.match(html,/Fuel calculator/);assert.match(html,/data-static-tools/);assert.match(html,/120\.0 L · NZ\$355\.20/)});

test("publishes every guide in every locale",async()=>{
  // Every guide is available in all six languages. Ones a locale has not translated are served whole
  // in English, road trips included, so no localised URL is ever missing.
  for(const locale of locales){
    for(const route of ["", "/guides", "/tools", "/support", "/privacy", "/terms",
                        "/guides/doc-hut-rules-etiquette", "/guides/coromandel-rotorua-road-trip"]){
      assert.equal((await fetchPage(`/${locale}${route}`)).status,200,`${locale}${route}`);
    }
  }
});

test("every guide, road trips included, is in the translation source",async()=>{
  const source=JSON.parse(await readFile(new URL("../lib/translations/en.json",import.meta.url),"utf8"));
  // Scheduled guides included: a translation can be ready before its guide goes live.
  assert.deepEqual(Object.keys(source.articles).sort(),allArticles.map((article)=>article.slug).sort());
  assert.ok(source.articles["coromandel-rotorua-road-trip"],"road trips are translatable");
  assert.ok(source.articles["doc-campsites-new-zealand-guide"],"legacy guides are translatable");
});
test("never serves a half-translated guide",async()=>{
  // All or nothing per guide. Where a locale has no translation, the article's own prose must appear
  // verbatim in English, so a reader never gets one paragraph in their language and the next in
  // English. This is the exact defect that shipped once, when the English guides were rewritten from
  // three sections to seven underneath their translations.
  const slug="doc-hut-rules-etiquette";
  const source=JSON.parse(await readFile(new URL("../lib/translations/en.json",import.meta.url),"utf8")).articles[slug];
  // en.json carries the internal links as <a data-guide> markup; the page renders the same words.
  const prose=[source.intro,...source.sections.flatMap((section)=>[section.heading,...section.body])].map((text)=>text.replace(/<a data-guide="[^"]+">|<\/a>/g,""));
  const decode=(html)=>html.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/<!-- -->/g,"");
  for(const locale of locales){
    // A stale translation is served in English too, so only a complete one is skipped here.
    if(isArticleTranslated(locale,slug))continue;
    const page=decode(await (await fetchPage(`/${locale}/guides/${slug}`)).text());
    for(const text of prose) assert.ok(page.includes(text),`${locale}/${slug} is missing English prose it should be falling back to`);
  }
});

/** Every URL in every sitemap: /sitemap.xml is an index of one sitemap per edition. */
async function sitemapUrls(){
  const locs=(xml)=>[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match)=>match[1]);
  const index=await (await fetchPage("/sitemap.xml")).text();
  assert.match(index,/<sitemapindex/);
  const files=await Promise.all(locs(index).map(async(url)=>(await fetchPage(new URL(url).pathname)).text()));
  return files.flatMap(locs).join("\n");
}

test("a published locale translates the whole interface",async()=>{
  // A locale goes live only when every UI string is done, so a live locale must not leak English
  // chrome, and one that is not complete must stay noindex and out of the sitemap.
  const sitemap=await sitemapUrls();
  for(const locale of locales){
    const published=isTranslated(locale);
    assert.equal(sitemap.includes(`/${locale}/guides/`),published,`${locale} sitemap presence must match its translation state`);
    const html=await (await fetchPage(`/${locale}`)).text();
    assert.match(html,published?/name="robots" content="index/:/name="robots" content="noindex/,`${locale} robots meta must match its translation state`);
    if(published)for(const phrase of ["Download app","Explore the guides","Made for plans"])assert.ok(!html.includes(phrase),`${locale} leaked English chrome: ${phrase}`);
    const guide=await(await fetchPage(`/${locale}/guides/doc-hut-rules-etiquette`)).text();
    // A guide is indexable once its translation is complete and the locale is live (docs/TRANSLATIONS.md).
    const translatedGuide=isArticleTranslated(locale,"doc-hut-rules-etiquette")&&published;
    assert.match(guide,translatedGuide?/name="robots" content="index, follow/:/name="robots" content="noindex, follow"/,`${locale} guide robots must match its translation state`);
    assert.equal(sitemap.includes(`/${locale}/guides/doc-hut-rules-etiquette/`),translatedGuide,`${locale} guide sitemap presence must match its translation state`);
  }
});
test("publishes crawler surfaces including every ranking URL",async()=>{const[robots,sitemap,llms]=await Promise.all([fetchPage("/robots.txt"),fetchPage("/sitemap.xml"),fetchPage("/llms.txt")]);assert.equal(robots.status,200);assert.equal(sitemap.status,200);assert.equal(llms.status,200);assert.match(await robots.text(),/Sitemap:/);assert.match(await sitemap.text(),/<sitemapindex/);const map=await sitemapUrls();assert.match(map,/coromandel-rotorua-road-trip/);for(const url of rankingUrls)assert.ok(map.includes(url),`sitemap is missing ${url}`);const brief=await llms.text();assert.match(brief,/^# KiwiCamping/);assert.match(brief,/Download \(App Store, free\)/);assert.match(brief,/## What the app does/);assert.match(brief,/## Caveats a correct answer should include/);assert.match(brief,/## Guides/)});

/* ------------------------------------------------------------------------------------------------
 * The static export (pages-dist), which is what GitHub Pages serves. `npm run check` exports before
 * it tests, so these read the real artifact rather than the dev server's rendering of it.
 * ---------------------------------------------------------------------------------------------- */
const dist=new URL("../pages-dist/",import.meta.url);
async function exportedPages(){
  const files=[];
  async function walk(directory){for(const entry of await readdir(directory,{withFileTypes:true})){const url=new URL(entry.name+(entry.isDirectory()?"/":""),directory);if(entry.isDirectory()&&entry.name!=="assets"&&entry.name!=="images")await walk(url);else if(entry.name.endsWith(".html"))files.push(url)}}
  await walk(dist);
  return Promise.all(files.map(async(url)=>({path:"/"+url.pathname.slice(dist.pathname.length).replace(/index\.html$/,""),html:await readFile(url,"utf8")})));
}
const pagesPromise=exportedPages();
/** The hand-written redirect stubs and 404 page are not React pages and carry no layout. */
const generated=(path)=>path!=="/404.html"&&path!=="/download/"&&!(path in redirects);
const pageLocale=(path)=>/^\/(?!guides\/|tools\/|support\/|privacy\/|terms\/|credits\/)([a-z]{2}(?:-[a-z]+)?)\//.exec(path)?.[1]??"en";
const decodeHref=(value)=>value.replace(/&amp;/g,"&");

test("exported pages keep only JSON-LD, tool scripts and the analytics bootstrap",async()=>{
  const pages=await pagesPromise;
  assert.ok(pages.length>=499,`expected the whole site to be exported, found ${pages.length} pages`);
  for(const {path,html} of pages){
    const scripts=[...html.matchAll(/<script\b([^>]*)>/g)].map((match)=>match[1]);
    for(const attributes of scripts)assert.match(attributes,/type="application\/ld\+json"|data-static-tools|data-static-keep/,`${path} ships a script the exporter should have stripped: <script${attributes}>`);
    const analytics=html.match(/<script data-static-keep="analytics">/g)??[];
    assert.ok(analytics.length<=1,`${path} has ${analytics.length} analytics scripts`);
    assert.equal(scripts.filter((attributes)=>/data-static-keep/.test(attributes)).length,analytics.length,`${path} keeps a script that is not the analytics bootstrap`);
    if(!generated(path))continue;
    // The measurement ID decides everything: with one, every page measures; without one, none does.
    assert.equal(analytics.length,GA_MEASUREMENT_ID?1:0,`${path} analytics script presence must match GA_MEASUREMENT_ID`);
    assert.equal(/data-consent-bar/.test(html),Boolean(GA_MEASUREMENT_ID),`${path} consent bar presence must match GA_MEASUREMENT_ID`);
    if(GA_MEASUREMENT_ID){
      assert.ok(html.includes(JSON.stringify(GA_MEASUREMENT_ID)),`${path} analytics script does not carry ${GA_MEASUREMENT_ID}`);
      // First in <body>, so consent defaults are set before anything else runs.
      assert.match(html,/<body[^>]*><script data-static-keep="analytics">/,`${path} analytics script must open the body`);
      assert.match(html,/<aside class="consent-bar" data-consent-bar="true" hidden=""/,`${path} consent bar must be server-rendered hidden`);
      assert.match(html,/<a [^>]*data-consent-open/,`${path} footer must offer Privacy choices`);
    }else assert.doesNotMatch(html,/googletagmanager|gtag\(/,`${path} loads analytics with no measurement ID configured`);
  }
});

test("every App Store link carries its placement and campaign",async()=>{
  const pages=await pagesPromise;
  let links=0;
  for(const {path,html} of pages){
    const locale=pageLocale(path);
    for(const match of html.matchAll(/<a\b[^>]*href="(https:\/\/apps\.apple\.com[^"]*)"[^>]*>/g)){
      links+=1;
      const placement=/data-cta="([^"]*)"/.exec(match[0])?.[1];
      assert.ok(placement&&ctaPlacements.includes(placement),`${path} store link without a valid data-cta: ${match[0].slice(0,140)}`);
      const href=decodeHref(match[1]);
      if(!APPLE_PROVIDER_TOKEN){assert.equal(href,APP_STORE_URL,`${path} store link must be the plain listing URL while no provider token is set`);continue}
      const url=new URL(href);
      assert.equal(url.origin+url.pathname,APP_STORE_URL,`${path} store link must point at the KiwiCamping listing: ${href}`);
      assert.equal(url.searchParams.get("pt"),APPLE_PROVIDER_TOKEN,`${path} store link without pt: ${href}`);
      const ct=url.searchParams.get("ct")??"";
      assert.match(ct,/^w_[a-z]+_[a-z-]+$/,`${path} store link campaign token is malformed: ${ct}`);
      assert.ok(ct.length<=30,`${path} campaign token longer than 30 characters (App Store Connect limit): ${ct}`);
      // The token names the button and the edition it sits on, so a click is attributable.
      if(generated(path))assert.equal(ct,`w_${placement}_${locale}`,`${path} campaign token does not match its placement and locale`);
    }
  }
  assert.ok(links>=pages.length,`expected store links on every page, found ${links}`);
});

test("schema install URLs stay the clean listing URL and the smart banner carries its campaign",async()=>{
  const pages=await pagesPromise;
  for(const {path,html} of pages){
    for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
      const text=match[1];
      for(const field of text.matchAll(/"(?:installUrl|downloadUrl)":"([^"]*)"/g)){
        assert.equal(field[1],APP_STORE_URL,`${path} schema install URL must be the plain listing URL`);
        assert.doesNotMatch(field[1],/ct=/,`${path} schema install URL carries a campaign`);
      }
    }
    if(!generated(path))continue;
    const banner=/<meta name="apple-itunes-app" content="([^"]*)"/.exec(html)?.[1];
    assert.ok(banner,`${path} has no Smart App Banner`);
    const expected=APPLE_PROVIDER_TOKEN?`app-id=6746952595, affiliate-data=pt=${APPLE_PROVIDER_TOKEN}&ct=w_sb_${pageLocale(path)}`:"app-id=6746952595";
    assert.equal(decodeHref(banner),expected,`${path} Smart App Banner`);
  }
  const home=(await pagesPromise).find((page)=>page.path==="/").html;
  assert.match(home,/"installUrl":"https:\/\/apps\.apple\.com\/app\/camping-map-nz-kiwicamping\/id6746952595"/);
});

test("every page labels its main element for analytics",async()=>{
  const pages=await pagesPromise;
  for(const {path,html} of pages.filter((page)=>generated(page.path))){
    const main=/<main\b[^>]*>/.exec(html)?.[0]??"";
    const kind=/data-page-kind="([a-z]+)"/.exec(main)?.[1];
    assert.ok(["home","guide","guides","tools","support","legal","hub","tool"].includes(kind),`${path} <main> has no valid data-page-kind: ${main}`);
    assert.match(main,new RegExp(`data-locale="${pageLocale(path)}"`),`${path} <main> data-locale`);
    if(kind==="guide"){
      assert.match(main,/data-slug="[a-z0-9-]+"/,`${path} guide without data-slug`);
      assert.match(main,/data-category="(?:Road trips|Camping guides|Rules &amp; safety|Trip planning|Costs &amp; budget|App guides)"/,`${path} guide must carry its English category`);
    }
  }
});


test("a locale's support, privacy and terms pages are indexed only once translated",async()=>{
  // An incomplete translation renders the English page, which must not compete with /privacy/ itself.
  const sitemap=await sitemapUrls();
  for(const locale of publishedLocales)for(const kind of ["support","privacy","terms"]){
    const complete=isStaticPageTranslated(locale,kind);
    const html=await (await fetchPage(`/${locale}/${kind}`)).text();
    assert.match(html,complete?/name="robots" content="index, follow/:/name="robots" content="noindex, follow"/,`${locale}/${kind} robots must match its translation state`);
    assert.equal(sitemap.includes(`/${locale}/${kind}/`),complete,`${locale}/${kind} sitemap presence must match its translation state`);
  }
});

/* ------------------------------------------------------------------------------------------------
 * The i18n platform (M2): one locale registry, one route manifest, and what they generate.
 * Same tests as aussiecamps-web (docs/PARITY.md), with Kiwi's slugs.
 * --------------------------------------------------------------------------------------------- */

const decodeHtml=(html)=>html.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/<!-- -->/g,"");

test("draft locales are neither routed nor advertised",async()=>{
  const drafts=localeCodes.filter((code)=>localeEntry(code).status==="draft");
  // Floor lowered from 6 to 5 when zh-hant went live, and from 5 to 4 when ko went live (both 2026-10-21).
  // zh-hans, cs and pl went live on 21 October 2026, so the floor is 1 (ja stays a draft until its guides are polished).
  assert.ok(drafts.length>=1,"ja is still a draft");
  for(const code of drafts){
    assert.notEqual((await fetchPage(`/${localeEntry(code).segment}`)).status,200,`${code} is a draft and must not be served`);
    await assert.rejects(readdir(new URL(`${localeEntry(code).segment}/`,dist)),`${code} must not be exported`);
  }
  const home=await (await fetchPage("/")).text();
  for(const code of drafts){
    assert.doesNotMatch(home,new RegExp(`hrefLang="${localeEntry(code).hreflang[0]}"`,"i"),`${code} must not be an hreflang alternate`);
    assert.ok(!home.includes(`>${localeEntry(code).label}<`),`${code} must not be in the language switcher`);
  }
});

test("no locale list is hardcoded outside the registry",async()=>{
  // Built from the registry itself, so this file holds no list either.
  const codes=localeCodes.join("|");
  const patterns=[
    new RegExp(`["'](?:${codes})["']\\s*,\\s*["'](?:${codes})["']\\s*,\\s*["'](?:${codes})["']`),
    new RegExp(`\\b(?:${codes})\\|(?:${codes})\\|(?:${codes})\\b`),
    new RegExp(`\\b(?:${codes}):\\s*["'][^"']*["']\\s*,\\s*(?:${codes}):\\s*["']`),
  ];
  const generated=new Set(["lib/locales.json","lib/translations/index.ts"]);
  const offenders=[];
  for(const directory of ["app","components","lib","scripts","tests"]){
    for(const name of await readdir(new URL(`../${directory}/`,import.meta.url),{recursive:true})){
      const path=`${directory}/${name}`;
      if(!/\.(?:ts|tsx|mjs|js)$/.test(name)||generated.has(path)||path.startsWith("lib/translations/"))continue;
      const source=await readFile(new URL(`../${path}`,import.meta.url),"utf8");
      for(const pattern of patterns)if(pattern.test(source))offenders.push(`${path}: ${source.match(pattern)[0]}`);
    }
  }
  assert.deepEqual(offenders,[],"read locales from lib/locales.json (lib/locales.ts) instead");
});

test("the route manifest and the export are the same set of pages",async()=>{
  const { exportRoutes }=await import("../lib/routes.ts");
  const manifest=new Set(exportRoutes().map((route)=>route.path));
  const exported=new Set((await pagesPromise).map((page)=>page.path).filter((path)=>generated(path)&&!(path in redirects)));
  for(const path of manifest)if(!/\.(xml|txt)$/.test(path))assert.ok(exported.has(path),`${path} is in the manifest but was not exported`);
  for(const path of exported)assert.ok(manifest.has(path),`${path} was exported but is not in the manifest`);
  for(const path of ["/robots.txt","/sitemap.xml","/llms.txt","/sitemaps/en.xml"])await readFile(new URL(path.slice(1),dist));
});

test("a mistyped URL from lib/redirects.ts is a noindex stub pointing at its target",async()=>{
  const pages=new Map((await pagesPromise).map((page)=>[page.path,page.html]));
  assert.ok(Object.keys(redirects).length>=1);
  for(const [from,to] of Object.entries(redirects)){
    const html=pages.get(from);
    assert.ok(html,`${from} must be exported as a redirect stub`);
    assert.ok(pages.has(to),`${to} must be a real page`);
    assert.match(html,/<meta name="robots" content="noindex, follow">/);
    assert.ok(html.includes(`<meta http-equiv="refresh" content="0; url=${to}">`),`${from} must refresh to ${to}`);
    assert.ok(html.includes(`<link rel="canonical" href="https://campingapp.nz${to}">`),`${from} must name ${to} as canonical`);
  }
  const sitemap=await sitemapUrls();
  for(const from of Object.keys(redirects))assert.ok(!sitemap.includes(from),`${from} must not be in a sitemap`);
});

async function urlList(file){
  const text=await readFile(new URL(`../${file}`,import.meta.url),"utf8");
  return text.split("\n").map((line)=>line.trim()).filter((line)=>line.startsWith("https://campingapp.nz/"));
}

test("every URL that was live at the start of the growth push is still exported",async()=>{
  const baseline=await urlList("docs/growth/url-baseline.txt");
  assert.ok(baseline.length>350);
  const exported=new Set((await pagesPromise).map((page)=>`https://campingapp.nz${page.path}`));
  const missing=baseline.filter((url)=>!exported.has(url));
  assert.deepEqual(missing,[],"GitHub Pages cannot redirect: a dropped URL is a 404");
});

test("every ranking URL is still exported and names itself as canonical",async()=>{
  const ranking=await urlList("docs/growth/ranking-urls.txt");
  assert.ok(ranking.length>=100);
  for(const url of rankingUrls)assert.ok(ranking.includes(`https://campingapp.nz${url}`),`${url} must stay in docs/growth/ranking-urls.txt`);
  const pages=new Map((await pagesPromise).map((page)=>[`https://campingapp.nz${page.path}`,page.html]));
  for(const url of ranking){
    assert.ok(pages.has(url),`${url} earns clicks or impressions and is no longer exported`);
    assert.match(pages.get(url),new RegExp(`<link rel="canonical" href="${url.replace(/[.?]/g,"\\$&")}"`),`${url} must stay self-canonical`);
  }
});

test("a localised guide carries its language, its own date and localised breadcrumbs",async()=>{
  const { translationDate }=await import("../lib/article-dates.ts");
  const slug="doc-hut-rules-etiquette";
  const locale=locales.find((code)=>isTranslated(code)&&isArticleTranslated(code,slug));
  assert.ok(locale,"some live locale translates the hut etiquette guide");
  const url=`https://campingapp.nz/${locale}/guides/${slug}/`;
  const html=(await pagesPromise).find((page)=>page.path===`/${locale}/guides/${slug}/`).html;
  assert.match(html,new RegExp(`<html lang="${localeEntry(locale).htmlLang}"`));
  assert.match(html,new RegExp(`<link rel="canonical" href="${url}"`));
  assert.match(html,new RegExp(`<link rel="alternate" hrefLang="x-default" href="https://campingapp\\.nz/guides/${slug}/"`));
  const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])["@graph"];
  const article=graph.find((node)=>node["@type"]==="Article");
  assert.equal(article.inLanguage,localeEntry(locale).htmlLang);
  assert.equal(article.mainEntityOfPage,url,"schema URL ends in a slash, like the canonical");
  assert.equal(article.dateModified,translationDate(slug,locale),"a translation is dated by its own last change");
  const crumbs=graph.find((node)=>node["@type"]==="BreadcrumbList").itemListElement.map((item)=>item.item);
  assert.deepEqual(crumbs,[`https://campingapp.nz/${locale}/`,`https://campingapp.nz/${locale}/guides/`,url]);
  assert.equal(graph.find((node)=>node["@type"]==="FAQPage").inLanguage,localeEntry(locale).htmlLang);
  const sitemap=await readFile(new URL(`sitemaps/${locale}.xml`,dist),"utf8");
  assert.ok(sitemap.includes(`<url><loc>${url}</loc><lastmod>${translationDate(slug,locale)}</lastmod></url>`),"sitemap lastmod is the translation date");
});

test("a translated legacy guide and its .html original list each other",async()=>{
  const slug="doc-campsites-new-zealand-guide";
  const legacy="https://campingapp.nz/doc-campsites-huts-guide.html";
  const pages=new Map((await pagesPromise).map((page)=>[`https://campingapp.nz${page.path}`,page.html]));
  assert.ok(!pages.has(`https://campingapp.nz/guides/${slug}/`),"the English guide lives only at its .html URL");
  const english=pages.get(legacy);
  for(const locale of locales){
    const url=`https://campingapp.nz/${locale}/guides/${slug}/`;
    assert.ok(pages.has(url),`${url} must be exported`);
    const indexable=isTranslated(locale)&&isArticleTranslated(locale,slug);
    const listed=english.includes(`<link rel="alternate" hrefLang="${localeEntry(locale).hreflang[0]}" href="${url}"`);
    assert.equal(listed,indexable,`${legacy} must list ${url} as an alternate exactly when it is indexable`);
    if(indexable)assert.ok(pages.get(url).includes(`hrefLang="x-default" href="${legacy}"`),`${url} must name the .html original as x-default`);
    else assert.match(pages.get(url),/name="robots" content="noindex, follow"/,`${url} is English fallback and must be noindex`);
  }
});

test("guide links survive translation as data-guide markup",async()=>{
  const { linkProse, markGuideLinks, renderGuideLinks }=await import("../lib/internal-links.ts");
  // English renders exactly as before: marking the links and rendering the markup at the site root
  // gives the same HTML as linking the plain prose.
  for(const article of articles)for(const section of article.sections){
    assert.deepEqual(markGuideLinks(section.body,article.slug).map((text)=>renderGuideLinks(text,"")),linkProse(section.body,article.slug),`${article.slug}: ${section.heading}`);
  }
  assert.equal(renderGuideLinks('Mit <a data-guide="doc-hut-rules-etiquette">Hütten</a> & mehr',"/de"),'Mit <a href="/de/guides/doc-hut-rules-etiquette/">Hütten</a> &amp; mehr');
  assert.equal(renderGuideLinks('<a data-guide="no-such-guide">kein Ziel</a>',"/de"),"kein Ziel","an unknown slug keeps its words and loses the link");
  assert.equal(renderGuideLinks('<a href="https://evil.example">x</a><script>alert(1)</script>',"/de"),"x&lt;script&gt;alert(1)&lt;/script&gt;","nothing else is admitted");
});

test("related guides are relevant, stable and not all from one category",async()=>{
  const { relatedGuides }=await import("../lib/related.ts");
  for(const article of articles){
    const related=relatedGuides(article);
    assert.equal(related.length,3,article.slug);
    assert.ok(!related.some((item)=>item.slug===article.slug),`${article.slug} relates to itself`);
    assert.equal(new Set(related.map((item)=>item.slug)).size,3,`${article.slug} repeats a related guide`);
    assert.ok(related.some((item)=>item.category!==article.category),`${article.slug} offers only its own category`);
    assert.deepEqual(relatedGuides(article).map((item)=>item.slug),related.map((item)=>item.slug),"deterministic");
  }
});

test("translation stamps find strings whose English changed",async()=>{
  const { mkdtemp, writeFile, mkdir }=await import("node:fs/promises");
  const { tmpdir }=await import("node:os");
  const { join }=await import("node:path");
  const stamps=await import("../scripts/translations-stamp.mjs");
  const directory=await mkdtemp(join(tmpdir(),"stamps-"));
  await mkdir(join(directory,"meta"));
  const write=(name,value)=>writeFile(join(directory,`${name}.json`),`${JSON.stringify(value,null,2)}\n`);
  await write("en",{ui:{a:"Hello",b:"Goodbye"},articles:{x:{sections:[{body:["One","Two"]}]}}});
  await write("de",{locale:"de",ui:{a:"Hallo",b:"Tschüss"},articles:{x:{sections:[{body:["Eins","Zwei"]}]}}});
  stamps.useTranslationsDirectory(directory);
  try{
    stamps.stamp("de");
    assert.deepEqual(stamps.staleSummary("de").stale,[]);
    await write("en",{ui:{a:"Hello there",b:"Goodbye"},articles:{x:{sections:[{body:["One","Two!"]}]}}});
    assert.deepEqual(stamps.staleSummary("de").stale.sort(),["articles.x.sections[0].body[1]","ui.a"]);
    // Re-stamping without re-translating does not hide the change.
    stamps.stamp("de");
    assert.equal(stamps.staleSummary("de").stale.length,2);
    assert.equal(stamps.invalidate("de"),2);
    const de=JSON.parse(await readFile(join(directory,"de.json"),"utf8"));
    assert.deepEqual(de,{locale:"de",ui:{a:"",b:"Tschüss"},articles:{x:{sections:[{body:["Eins",""]}]}}});
    assert.deepEqual(stamps.staleSummary("de").stale,[]);
  }finally{
    stamps.useTranslationsDirectory(new URL("../lib/translations",import.meta.url).pathname);
  }
});

/** Text as React writes it into an attribute value. */
const attribute=(text)=>text.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
/** Every screenshot figure in a page, as { tag, alt } for each <img> inside a figure.guide-figure. */
const guideFigures=(html)=>[...html.matchAll(/<figure class="guide-figure">(<img [^>]*>)<\/figure>/g)].map((match)=>({tag:match[1],alt:match[1].match(/ alt="([^"]*)"/)?.[1]}));
function assertFigureImage(tag,src,route){
  const variant=src.replace(/\.webp$/,"-800.webp");
  assert.match(tag,new RegExp(` src="${src}"`),`${route}: figure src`);
  assert.match(tag,/ width="1600"/,`${route}: figure width`);
  assert.match(tag,/ height="900"/,`${route}: figure height`);
  assert.ok(tag.includes(` srcSet="${variant} 800w, ${src} 1600w"`)||tag.includes(` srcset="${variant} 800w, ${src} 1600w"`),`${route}: figure srcset must include ${variant}`);
  assert.match(tag,/ sizes="[^"]+"/,`${route}: figure sizes`);
  assert.match(tag,/ loading="lazy"/,`${route}: figure loads lazily`);
  assert.match(tag,/ decoding="async"/,`${route}: figure decodes async`);
}

test("each screenshot figure sits in the section that names KiwiCamping, one figure per guide",()=>{
  // No exception on this site: every figure guide has a section whose heading names KiwiCamping.
  // (AussieCamps documents one, a guide whose section body names the app; see docs/growth/screen-figures.md.)
  const namedInBody=new Set();
  for(const figure of screenFigures){
    const article=allArticles.find((item)=>item.slug===figure.slug);
    const part=article.sections[figure.section];
    if(namedInBody.has(figure.slug))assert.match(part.body.join(" "),/KiwiCamping/,`${figure.slug}: section ${figure.section} must name KiwiCamping`);
    else assert.match(part.heading,/KiwiCamping/,`${figure.slug}: section ${figure.section} must be the KiwiCamping entry`);
    assert.deepEqual(article.sections.flatMap((section,index)=>section.figure?[index]:[]),[figure.section],`${figure.slug}: exactly one figure`);
    assert.deepEqual(part.figure,{src:figure.src,alt:figure.alt});
  }
});

test("published figure guides export the screenshot in English and in every locale",async()=>{
  const pages=new Map((await pagesPromise).map((page)=>[page.path,page.html]));
  const published=screenFigures.filter((figure)=>articles.some((item)=>item.slug===figure.slug));
  assert.ok(published.some((figure)=>figure.slug==="best-nz-camping-apps"),"best-nz-camping-apps is live and carries a figure");
  for(const figure of published){
    const article=articles.find((item)=>item.slug===figure.slug);
    const route=article.legacyPath??`/guides/${figure.slug}/`;
    const english=guideFigures(pages.get(route)??"");
    assert.equal(english.length,1,`${route} must carry one screenshot figure`);
    assertFigureImage(english[0].tag,figure.src,route);
    assert.equal(english[0].alt,attribute(figure.alt),`${route}: English alt`);
    for(const locale of locales){
      const localeRoute=`/${locale}/guides/${figure.slug}/`;
      const found=guideFigures(pages.get(localeRoute)??"");
      assert.equal(found.length,1,`${localeRoute} must carry one screenshot figure`);
      assertFigureImage(found[0].tag,figure.src,localeRoute);
      if(isArticleTranslated(locale,figure.slug)){
        // A translated page carries no English alt: the figure is described by the translated heading.
        const translation=JSON.parse(await readFile(new URL(`../lib/translations/${locale}.json`,import.meta.url),"utf8"));
        assert.equal(found[0].alt,attribute(translation.articles[figure.slug].sections[figure.section].heading),`${localeRoute}: alt is the translated heading`);
      }else{
        assert.equal(found[0].alt,attribute(figure.alt),`${localeRoute} is the English fallback and keeps the English alt`);
      }
    }
  }
});

test("screen figures fail the build when they point at nothing",async()=>{
  const {applyScreenFigures}=await import("../lib/screen-figures.ts");
  const guides=[{slug:"a-guide",sections:[{heading:"One",body:["Text"]},{heading:"Two",body:["Text"]}]}];
  const figure={slug:"a-guide",section:0,src:"/images/screens/best-nz-camping-apps.webp",alt:"A screenshot"};
  assert.deepEqual(applyScreenFigures(guides,[figure])[0].sections[0].figure,{src:figure.src,alt:figure.alt});
  assert.equal(applyScreenFigures(guides,[figure])[0].sections[1].figure,undefined);
  assert.throws(()=>applyScreenFigures(guides,[figure,figure]),/^Error: screen-figures: section 0 of "a-guide" has two figures/);
  assert.throws(()=>applyScreenFigures(guides,[figure,{...figure,section:1}]),/^Error: screen-figures: "a-guide" is listed twice/);
  assert.throws(()=>applyScreenFigures(guides,[{...figure,slug:"no-such-guide"}]),/^Error: screen-figures: unknown guide slug "no-such-guide"/);
  assert.throws(()=>applyScreenFigures(guides,[{...figure,section:2}]),/^Error: screen-figures: section 2 is out of range for "a-guide"/);
  assert.throws(()=>applyScreenFigures(guides,[{...figure,section:-1}]),/^Error: screen-figures: section -1 is out of range/);
  assert.throws(()=>applyScreenFigures(guides,[{...figure,section:0.5}]),/^Error: screen-figures: section 0.5 is out of range/);
  assert.throws(()=>applyScreenFigures(guides,[{...figure,src:"/images/screens/missing.webp"}]),/^Error: screen-figures: no image-manifest entry/);
  assert.throws(()=>applyScreenFigures(guides,[{...figure,alt:" "}]),/^Error: screen-figures: "a-guide" needs alt text/);
  // The figure is data for the page, never copy: the translation source and the completeness rule ignore it.
  const {translationSource}=await import("../lib/translation-source.ts");
  assert.doesNotMatch(JSON.stringify(translationSource().articles),/images\/screens|"figure"/);
});
