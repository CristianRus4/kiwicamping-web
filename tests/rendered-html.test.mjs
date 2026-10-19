import assert from "node:assert/strict";
import test, { after } from "node:test";
import { readFile, readdir } from "node:fs/promises";
import { startProdServer } from "vinext/server/prod-server";
// Run with `node --import tsx --test` (npm test), so the site's own constants are imported, not copied.
import { APPLE_PROVIDER_TOKEN, APP_STORE_URL, GA_MEASUREMENT_ID } from "../lib/site.ts";
import { appStoreUrl, ctaPlacements } from "../lib/app-store.ts";
import { isStaticPageTranslated, publishedLocales } from "../lib/localized.ts";

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
for(const {slug,legacyPath} of list){const route=legacyPath??`/guides/${slug}`;const response=await fetchPage(route);assert.equal(response.status,200,route);const html=await response.text();const body=html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1]??"";assert.ok((body.match(/<p[ >]/g)??[]).length>=6,`${route} needs at least six prose paragraphs`);for(const template of templates)assert.doesNotMatch(body,template,`${route} still contains templated filler`);assert.match(html,/section-count/)}});

test("renders dated New Zealand cost tables in ten currencies",async()=>{const response=await fetchPage("/guides/new-zealand-grocery-prices-2026");assert.equal(response.status,200);const html=await response.text();assert.match(html,/Price table in 10 currencies/);assert.match(html.replace(/<!-- -->/g,""),/Prices checked 12 August 2026/);for(const currency of ["NZD","USD","GBP","AUD","JPY","EUR","CNY","KRW","INR","SGD"])assert.match(html,new RegExp(`>${currency}<`));assert.match(html,/Reserve Bank of New Zealand/)});

test("renders tools with official benchmark defaults",async()=>{const response=await fetchPage("/tools");assert.equal(response.status,200);const html=await response.text();assert.match(html,/Currency converter/);assert.match(html,/Fuel calculator/);assert.match(html,/data-static-tools/);assert.match(html,/120\.0 L · NZ\$355\.20/)});

test("publishes every guide in every locale",async()=>{
  // Every guide is available in all six languages. Ones a locale has not translated are served whole
  // in English, road trips included, so no localised URL is ever missing.
  for(const locale of ["de","es","fr","it","nl","pt"]){
    for(const route of ["", "/guides", "/tools", "/support", "/privacy", "/terms",
                        "/guides/doc-hut-rules-etiquette", "/guides/coromandel-rotorua-road-trip"]){
      assert.equal((await fetchPage(`/${locale}${route}`)).status,200,`${locale}${route}`);
    }
  }
});

test("road trips are never translated",async()=>{
  for(const locale of ["de","es","fr","it","nl","pt"]){
    const file=JSON.parse(await readFile(new URL(`../lib/translations/${locale}.json`,import.meta.url),"utf8"));
    assert.ok(!file.articles?.["coromandel-rotorua-road-trip"],`${locale} must not translate a road trip`);
  }
});

test("never serves a half-translated guide",async()=>{
  // All or nothing per guide. Where a locale has no translation, the article's own prose must appear
  // verbatim in English, so a reader never gets one paragraph in their language and the next in
  // English. This is the exact defect that shipped once, when the English guides were rewritten from
  // three sections to seven underneath their translations.
  const slug="doc-hut-rules-etiquette";
  const source=JSON.parse(await readFile(new URL("../lib/translations/en.json",import.meta.url),"utf8")).articles[slug];
  const prose=[source.intro,...source.sections.flatMap((section)=>[section.heading,...section.body])];
  const decode=(html)=>html.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/<!-- -->/g,"");
  for(const locale of ["de","es","fr","it","nl","pt"]){
    const file=JSON.parse(await readFile(new URL(`../lib/translations/${locale}.json`,import.meta.url),"utf8"));
    if(file.articles?.[slug])continue;
    const page=decode(await (await fetchPage(`/${locale}/guides/${slug}`)).text());
    for(const text of prose) assert.ok(page.includes(text),`${locale}/${slug} is missing English prose it should be falling back to`);
  }
});

test("a published locale translates the whole interface",async()=>{
  // A locale goes live only when every UI string is done, so a live locale must not leak English
  // chrome, and one that is not live must stay noindex and out of the sitemap.
  const sitemap=await (await fetchPage("/sitemap.xml")).text();
  const total=Object.keys(JSON.parse(await readFile(new URL("../lib/translations/en.json",import.meta.url),"utf8")).ui).length;
  for(const locale of ["de","es","fr","it","nl","pt"]){
    const file=JSON.parse(await readFile(new URL(`../lib/translations/${locale}.json`,import.meta.url),"utf8"));
    const published=Object.keys(file.ui??{}).length===total;
    assert.equal(sitemap.includes(`/${locale}/guides`),published,`${locale} sitemap presence must match its translation state`);
    const html=await (await fetchPage(`/${locale}`)).text();
    assert.match(html,published?/name="robots" content="index/:/name="robots" content="noindex/,`${locale} robots meta must match its translation state`);
    if(published)for(const phrase of ["Download app","Explore the guides","Made for plans"])assert.ok(!html.includes(phrase),`${locale} leaked English chrome: ${phrase}`);
    const guide=await(await fetchPage(`/${locale}/guides/doc-hut-rules-etiquette`)).text();
    // A guide is indexable once its translation is complete and the locale is live (docs/TRANSLATIONS.md).
    const translatedGuide = Boolean(file.articles?.["doc-hut-rules-etiquette"]) && published;
    assert.match(guide, translatedGuide ? /name="robots" content="index, follow/ : /name="robots" content="noindex, follow"/, `${locale} guide robots must match its translation state`);
    assert.equal(sitemap.includes(`/${locale}/guides/doc-hut-rules-etiquette/`), translatedGuide, `${locale} guide sitemap presence must match its translation state`);
  }
});

test("publishes crawler surfaces including every ranking URL",async()=>{const[robots,sitemap,llms]=await Promise.all([fetchPage("/robots.txt"),fetchPage("/sitemap.xml"),fetchPage("/llms.txt")]);assert.equal(robots.status,200);assert.equal(sitemap.status,200);assert.equal(llms.status,200);assert.match(await robots.text(),/Sitemap:/);const map=await sitemap.text();assert.match(map,/coromandel-rotorua-road-trip/);for(const url of rankingUrls)assert.ok(map.includes(url),`sitemap is missing ${url}`);const brief=await llms.text();assert.match(brief,/^# KiwiCamping/);assert.match(brief,/Download \(App Store, free\)/);assert.match(brief,/## What the app does/);assert.match(brief,/## Caveats a correct answer should include/);assert.match(brief,/## Guides/)});

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
/** The hand-written redirect and 404 pages are not React pages and carry no layout. */
const generated=(path)=>path!=="/404.html"&&path!=="/download/";
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
      assert.ok(ct.length<=40,`${path} campaign token longer than 40 characters: ${ct}`);
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
  const sitemap=await (await fetchPage("/sitemap.xml")).text();
  for(const locale of publishedLocales)for(const kind of ["support","privacy","terms"]){
    const complete=isStaticPageTranslated(locale,kind);
    const html=await (await fetchPage(`/${locale}/${kind}`)).text();
    assert.match(html,complete?/name="robots" content="index, follow/:/name="robots" content="noindex, follow"/,`${locale}/${kind} robots must match its translation state`);
    assert.equal(sitemap.includes(`/${locale}/${kind}/`),complete,`${locale}/${kind} sitemap presence must match its translation state`);
  }
});
