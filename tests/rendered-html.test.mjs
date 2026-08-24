import assert from "node:assert/strict";
import test, { after } from "node:test";
import { readFile, readdir } from "node:fs/promises";
import { startProdServer } from "vinext/server/prod-server";

const {server,port}=await startProdServer({port:0,host:"127.0.0.1",outDir:"dist",noCompression:true,purpose:"prerender"});
after(()=>new Promise((resolve,reject)=>server.close(error=>error?reject(error):resolve())));
async function fetchPage(path="/"){return fetch(`http://127.0.0.1:${port}${path}`,{headers:{accept:"text/html"}})}
async function entries(){const directory=new URL("../lib/content/",import.meta.url);const sources=await Promise.all((await readdir(directory)).filter(name=>name.endsWith(".ts")).map(name=>readFile(new URL(name,directory),"utf8")));return sources.flatMap(source=>[...source.matchAll(/slug:\s*"([^"]+)"(?:,\s*legacyPath:\s*"([^"]+)")?/g)].map(match=>({slug:match[1],legacyPath:match[2]})))}

/** Every URL campingapp.nz ranks on today. These must keep resolving after the rebuild. */
const rankingUrls=["/best-nz-camping-apps.html","/campfire-rules-nz.html","/camping-costs-nz.html","/camping-packing-list-nz.html","/doc-campsites-huts-guide.html","/dump-stations-nz.html","/free-camping-nz-legal.html","/freedom-camping-rules-nz.html","/holiday-parks-nz-booking-guide.html","/nz-camping-seasons-weather-sandflies.html","/responsible-camping-nz.html","/self-contained-vehicles-nz.html","/top-scenic-campsites-nz.html","/two-week-camper-itinerary-nz.html","/where-to-camp-in-new-zealand.html"];

test("renders the KiwiCamping homepage with real product facts",async()=>{const response=await fetchPage();assert.equal(response.status,200);const html=await response.text();assert.match(html,/New Zealand is big/);assert.match(html,/4,500\+/);assert.match(html,/2,000\+/);assert.match(html,/routes, distance, dates, notes and to-dos/i);assert.match(html,/Offline/);assert.match(html,/trip planner/i);assert.match(html,/kiwicamping-qr\.png/);assert.match(html,/6746952595/);assert.match(html,/application\/ld\+json/);assert.doesNotMatch(html,/AussieCamps|Australian|(?:across|around|throughout|in) Australia\b|not available yet|section-number|useful place categories/i)});

test("keeps every already-ranking URL live and canonical",async()=>{for(const url of rankingUrls){const response=await fetchPage(url);assert.equal(response.status,200,`${url} must still resolve`);const html=await response.text();assert.match(html,new RegExp(`rel="canonical"[^>]*href="[^"]*${url.replace(/[.]/g,"\\.")}"`),`${url} must be self-canonical`);assert.match(html,/<div class="article-body">/,`${url} must render a full article`)}});

test("does not publish a ranking article at a second URL",async()=>{const list=await entries();for(const {slug,legacyPath} of list.filter(entry=>entry.legacyPath)){const response=await fetchPage(`/guides/${slug}`);assert.equal(response.status,404,`${slug} is published at ${legacyPath} and must not also serve /guides/${slug}`)}});

test("renders a genuine long-form New Zealand route with prose under every heading",async()=>{const response=await fetchPage("/guides/coromandel-rotorua-road-trip");assert.equal(response.status,200);const html=await response.text();assert.match(html,/Pacific beaches, forest roads and geothermal country/);assert.match(html,/Whitianga/);assert.match(html,/Rotorua/);const body=html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1]??"";assert.ok((body.match(/<p[ >]/g)??[]).length>=6,"needs substantial prose");for(const section of body.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)){if(!/<h2/.test(section[1])||/place-chips|price-table|sources/.test(section[1]))continue;assert.match(section[1],/<p[ >]/,"every heading needs prose under it")}assert.match(html,/Save the stops\. Plan the whole trip\./);assert.doesNotMatch(html,/These names are intentionally|Editorial landscape image/)});

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
  }
});

test("publishes crawler surfaces including every ranking URL",async()=>{const[robots,sitemap,llms]=await Promise.all([fetchPage("/robots.txt"),fetchPage("/sitemap.xml"),fetchPage("/llms.txt")]);assert.equal(robots.status,200);assert.equal(sitemap.status,200);assert.equal(llms.status,200);assert.match(await robots.text(),/Sitemap:/);const map=await sitemap.text();assert.match(map,/coromandel-rotorua-road-trip/);for(const url of rankingUrls)assert.ok(map.includes(url),`sitemap is missing ${url}`);const brief=await llms.text();assert.match(brief,/^# KiwiCamping/);assert.match(brief,/Download \(App Store, free\)/);assert.match(brief,/## What the app does/);assert.match(brief,/## Caveats a correct answer should include/);assert.match(brief,/## Guides/)});
