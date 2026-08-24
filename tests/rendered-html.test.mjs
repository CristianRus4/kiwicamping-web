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

test("publishes all six language editions, road trips excluded",async()=>{
  for(const locale of ["de","es","fr","it","nl","pt"]){
    for(const route of ["", "/guides", "/tools", "/support", "/privacy", "/terms"]){
      assert.equal((await fetchPage(`/${locale}${route}`)).status,200,`${locale}${route}`);
    }
    // Road trips stay English-only, so no locale may ever serve one.
    assert.equal((await fetchPage("/"+locale+"/guides/coromandel-rotorua-road-trip")).status,404,`${locale} must not publish a translated road trip`);
  }
});

test("never serves a half-translated guide",async()=>{
  // A localised guide URL exists only where that locale's translation is complete. Anything partial
  // or structurally stale must 404 rather than render a mixture of two languages. This is the exact
  // defect that shipped once: English guides rewritten from three sections to seven, leaving
  // translated prose under unrelated headings and four untranslated sections appended below.
  // The content audit guarantees a locale file only ever contains guides the site can render, so
  // the file's own keys are the list of what must resolve.
  for(const locale of ["de","es","fr","it","nl","pt"]){
    const file=JSON.parse(await readFile(new URL(`../lib/translations/${locale}.json`,import.meta.url),"utf8"));
    const complete=new Set(Object.keys(file.articles??{}));
    const index=await (await fetchPage(`/${locale}/guides`)).text();
    for(const slug of ["doc-hut-rules-etiquette","camping-fees-new-zealand-2026","sandflies-new-zealand-camping"]){
      assert.equal((await fetchPage(`/${locale}/guides/${slug}`)).status,complete.has(slug)?200:404,`${locale}/${slug}`);
      if(!complete.has(slug)) assert.ok(!index.includes(`/${locale}/guides/${slug}"`),`${locale} lists ${slug} it cannot serve`);
    }
    if(complete.size===0) assert.match(index,/Not available in this language yet/);
  }
});

test("publishes crawler surfaces including every ranking URL",async()=>{const[robots,sitemap,llms]=await Promise.all([fetchPage("/robots.txt"),fetchPage("/sitemap.xml"),fetchPage("/llms.txt")]);assert.equal(robots.status,200);assert.equal(sitemap.status,200);assert.equal(llms.status,200);assert.match(await robots.text(),/Sitemap:/);const map=await sitemap.text();assert.match(map,/coromandel-rotorua-road-trip/);for(const url of rankingUrls)assert.ok(map.includes(url),`sitemap is missing ${url}`);assert.match(await llms.text(),/Core place details are available offline/)});
