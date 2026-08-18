import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { articles } from "../lib/site";

const targets = ["de", "es", "fr", "it", "nl", "pt"] as const;
const delimiter = (index: number) => `ZXQFIELD${String(index).padStart(4, "0")}ZXQ`;

const ui = {
  languageName: "English",
  navFeatures: "Features", navGuides: "Guides", navTools: "Tools", navSupport: "Support", download: "Download app",
  heroKicker: "Built for the long way around", heroTitle: "New Zealand is big. Your plan can be simple.",
  heroText: "Find camps, save the places that matter and turn them into a complete road trip with routes, distance, dates, notes and to-dos.",
  seeHow: "See how it works", placesCount: "4,500+ places across New Zealand", staysCount: "2,000+ places to stay", offline: "Offline core place details",
  processEyebrow: "From idea to open road", processTitle: "Find a camp. Build the trip.", processText: "Find tonight’s camp, save tomorrow’s possibilities and keep the route, distance, notes and to-dos together.",
  findTitle: "Find the right place", findText: "Search 4,500+ places, browse nearby and filter for the access, facilities and price that suit your setup.",
  saveTitle: "Save places without losing them", saveText: "Keep favourites, future stops and custom collections organised while the route is still taking shape.",
  planTitle: "Turn saved places into a trip", planText: "Order the stops, calculate the route and distance, then add dates, notes and to-dos to the same plan.",
  featuresEyebrow: "The full toolkit", featuresTitle: "Find it. Save it. Plan the whole road ahead.", featuresText: "Explore places, compare the details, organise favourites and build a trip that stays useful after the planning table.",
  featureMainTitle: "New Zealand’s camping places, ready for a real plan.", featureMainText: "Move from national parks to holiday parks, freedom camping areas, huts, dump stations and day-use places, then save the strongest options directly into collections and trips.",
  featureList1: "Map, list and satellite views", featureList2: "Powerful access and facility filters", featureList3: "Offline core place details",
  plannerTitle: "Stop by stop. Day by day.", plannerText: "Turn saved places into an ordered route you can understand at a glance. Calculate the drive, add dates and stop notes, keep to-dos beside the itinerary and hold nearby alternatives for the days that change.",
  routesEyebrow: "Routes worth taking slowly", routesTitle: "Follow the coast. Cross the ranges.", routesText: "Choose a direction, save the camps that fit and turn the strongest stops into a route of your own.", exploreRoutes: "Explore road trips",
  reviewsEyebrow: "What travellers say", reviewsTitle: "Made for plans that change.",
  review1Title: "Made our South Island route much easier", review1Quote: "We used it for campsites and holiday parks between Christchurch and Queenstown. The offline details were especially useful once we left the main roads.", review1Country: "Germany",
  review2Title: "Exactly what we needed on the road", review2Quote: "Quick to browse, easy to filter, and much more useful than saving a dozen browser tabs. We found a great place to stop almost every day.", review2Country: "United States",
  review3Title: "A brilliant travel companion", review3Quote: "The hut information and access notes saved us a lot of planning. It feels made for people actually travelling around New Zealand.", review3Country: "United Kingdom",
  review4Title: "Found a quiet place after a long drive", review4Quote: "After a long drive we used the filters to find a quiet place with the facilities we needed. Much less stressful than guessing from a pin on a map.", review4Country: "Italy",
  review5Title: "Great mix of practical details", review5Quote: "Simple, clear and genuinely useful. We used it for a mix of paid accommodation and free camping on our first trip and kept coming back to it.", review5Country: "Netherlands",
  faqTitle: "Good questions. Clear answers.", faqIntro: "Straight answers about travelling with KiwiCamping.",
  faq1q: "What is KiwiCamping?", faq1a: "KiwiCamping is an iPhone app for finding places to camp and stay around New Zealand, comparing practical details, saving places and building road trips stop by stop.",
  faq2q: "Does it work without reception?", faq2a: "The app bundles its place directory so core place data remains available beyond reliable signal. Live services such as current weather, directions and some map content still need connectivity.",
  faq3q: "Can I plan a multi-stop road trip?", faq3a: "Yes. Create a trip, order stops, add dates and notes, view route distance, track visited places, add packing tasks and sync itinerary details to Calendar.",
  faq4q: "Are camping rules the same across New Zealand?", faq4a: "No. National law, council bylaws, conservation rules and individual site conditions can all apply. Always follow current signs, land-manager directions, fire restrictions and official alerts.",
  downloadTitle: "Find it. Save it. Plan the road ahead.", downloadText: "Explore New Zealand, organise favourite places and keep the route, distance, notes and to-dos together in KiwiCamping for iOS.",
  guidesEyebrow: "New Zealand camping guides", guidesTitle: "Follow the road somewhere good.", guidesIntro: "Detailed guides for routes, camps, rules, local costs and practical trip planning across New Zealand.", guideSingular: "guide", guidePlural: "guides", readGuide: "Read guide",
  minuteRead: "minute read", places: "places", backToGuides: "Guides", photoCredits: "Photo credits",  keepInMind: "Keep in mind", placesAlong: "Places along the way", checkBefore: "Check before you go", checkText: "Rules and conditions change. Recheck the official source and the page for your exact park or campground before departure.",
  priceTitle: "Price table in 10 currencies", pricesChecked: "Prices checked", conversionsUse: "Conversions use RBNZ rates from", item: "Item", currencyDisclaimer: "Currency figures are mechanical conversions of the NZD benchmark, not card or cash quotes. Banks and payment providers apply their own rates and fees.",
  related: "Related guides", takeRoad: "Take it on the road", savePlanTitle: "Save the stops. Plan the whole trip.", savePlanText: "Build an ordered route from saved places, calculate the distance and keep dates, notes and to-dos attached.",
  toolsEyebrow: "Useful numbers", toolsTitle: "Road trip tools. No mystery maths.", toolsIntro: "Quick planning calculators for New Zealand prices and driving costs. Every assumption stays visible so you can replace it with the number that fits your route.",
  currencyTitle: "Currency converter", fuelTitle: "Fuel cost calculator", amount: "Amount", from: "From", to: "To", distance: "Distance", fuelUse: "Fuel use", fuelPrice: "Fuel price", estimatedCost: "Estimated cost", calculatorNote: "These calculators are planning aids, not live booking, fuel-station or foreign-exchange quotes. Confirm current prices before purchase.",
  supportTitle: "How can we help?", supportIntro: "Answers for finding places, saving favourites, planning trips and using KiwiCamping on the road.", contact: "Contact support", privacy: "Privacy", terms: "Terms", explore: "Explore", help: "Help", getApp: "Get the app", travelGuides: "Travel guides", footerText: "Find 4,500+ places, save the ones that matter and build complete New Zealand road trips with routes, distance, notes and to-dos.", footerLine: "Made for the long way around New Zealand.",
  rulesSafety: "Rules & safety", roadTrips: "Road trips", campingGuides: "Camping guides", tripPlanning: "Trip planning", costsBudget: "Costs & budget", appGuides: "App guides",
  feature1Title: "Save every place worth returning to", feature1Text: "Star favourites, mark places visited or wanted, and organise camps into custom collections for this weekend or the next big lap.",
  feature2Title: "Plan the complete trip", feature2Text: "Put every overnight stop in order, follow the route between them and see the total driving distance before committing to the plan.",
  feature3Title: "Keep notes and to-dos with the route", feature3Text: "Attach arrival notes to individual stops and keep the trip checklist beside the itinerary, where it is useful on the road.",
  feature4Title: "Read costs in your currency", feature4Text: "Compare reported place costs in the currency you understand instead of converting every stop by hand.",
  feature5Title: "Check the weather around each stay", feature5Text: "See current conditions and the forecast while choosing between camps, then recheck official warnings before leaving coverage.",
  feature6Title: "Look Around before the turnoff", feature6Text: "Use Apple Look Around where coverage exists to understand the entrance, road and surrounding area before arrival.",
};

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

function articleForTranslation(article: (typeof articles)[number]): Json {
  return {
    title: article.title, description: article.description, category: article.category, region: article.region,
    imageAlt: article.imageAlt, intro: article.intro,
    sections: article.sections.map((part) => ({ heading: part.heading, body: part.body, tips: part.tips ?? [] })),
    sources: (article.sources ?? []).map((source) => ({ label: source.label })),
    priceTable: article.priceTable ? { note: article.priceTable.note, rows: article.priceTable.rows.map((row) => ({ label: row.label, unit: row.unit ?? "" })) } : null,
  };
}

function flatten(value: Json, path: (string | number)[] = [], output: { path: (string | number)[]; value: string }[] = []) {
  if (typeof value === "string") output.push({ path, value });
  else if (Array.isArray(value)) value.forEach((item, index) => flatten(item, [...path, index], output));
  else if (value && typeof value === "object") Object.entries(value).forEach(([key, item]) => flatten(item, [...path, key], output));
  return output;
}

function rebuild(template: Json, values: Map<string, string>, path: (string | number)[] = []): Json {
  if (typeof template === "string") return values.get(JSON.stringify(path)) ?? template;
  if (Array.isArray(template)) return template.map((item, index) => rebuild(item, values, [...path, index]));
  if (template && typeof template === "object") return Object.fromEntries(Object.entries(template).map(([key, item]) => [key, rebuild(item, values, [...path, key])]));
  return template;
}

async function translateText(text: string, language: string) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.search = new URLSearchParams({ client: "gtx", sl: "en", tl: language, dt: "t", q: text }).toString();
  for (let attempt = 0; attempt < 5; attempt++) {
    const response = await fetch(url, { headers: { "user-agent": "KiwiCamping static localisation build" } });
    if (response.ok) {
      const payload = await response.json() as [Array<[string]>];
      return payload[0].map((part) => part[0]).join("").replaceAll("—", ",");
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 500 * (attempt + 1)));
  }
  throw new Error(`Translation failed for ${language}`);
}

async function translateObject(template: Json, language: string): Promise<Json> {
  const leaves = flatten(template);
  const values = new Map<string, string>();
  let cursor = 0;
  while (cursor < leaves.length) {
    const chunk: typeof leaves = [];
    let length = 0;
    while (cursor < leaves.length && (length + leaves[cursor].value.length < 5200 || chunk.length === 0)) {
      chunk.push(leaves[cursor]); length += leaves[cursor].value.length + 32; cursor++;
    }
    const joined = chunk.map((leaf, index) => `${delimiter(index)}\n${leaf.value}`).join("\n\n");
    const translated = await translateText(joined.replaceAll("KiwiCamping", "ZXQBRANDZXQ"), language);
    const parts = translated.split(/ZXQFIELD\d{4}ZXQ\s*/).filter(Boolean);
    if (parts.length !== chunk.length) throw new Error(`Translation fields changed for ${language}: expected ${chunk.length}, got ${parts.length}`);
    chunk.forEach((leaf, index) => values.set(JSON.stringify(leaf.path), parts[index].trim().replaceAll("ZXQBRANDZXQ", "KiwiCamping")));
  }
  return rebuild(template, values);
}

const output = resolve("lib/translations");
await mkdir(output, { recursive: true });
for (const language of targets) {
  const translatedUi = await translateObject(ui, language);
  const englishArticles = Object.fromEntries(articles.map((article) => [article.slug, articleForTranslation(article)]));
  const translatedArticles = await translateObject(englishArticles, language);
  const result = { locale: language, generatedAt: "2026-08-12", ui: translatedUi, articles: translatedArticles };
  await writeFile(resolve(output, `${language}.json`), `${JSON.stringify(result, null, 2)}\n`);
  console.log(`${language}: translated ${articles.length} complete articles`);
}
