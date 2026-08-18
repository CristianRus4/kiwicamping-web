import { mkdir, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { articles } from "../lib/site";

const outputDirectory = new URL("../public/images/articles/", import.meta.url);
const attributionPath = new URL("../docs/IMAGE-SOURCES.md", import.meta.url);
const used = new Set<number>();
const rows: string[] = [];
const allowed = /CC0|Public domain|CC BY|CC BY-SA|PDM/i;

async function fetchWithRetry(url: URL | string) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const response = await fetch(url, { headers: { "user-agent": "KiwiCampingWebsite/1.0 (image attribution build; cristianrus4@gmail.com)" } });
    if (response.ok) return response;
    if (response.status !== 429 && response.status < 500) return response;
    await delay(700 * (attempt + 1));
  }
  return fetch(url, { headers: { "user-agent": "KiwiCampingWebsite/1.0 (image attribution build; cristianrus4@gmail.com)" } });
}

function clean(value: string | undefined) {
  return (value ?? "Unknown").replace(/<[^>]+>/g, "").replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
}

const preferred: Record<string, string> = {
  "coromandel-rotorua-road-trip":"Coromandel Peninsula New Zealand coast", "northland-cape-reinga-camping-route":"Cape Reinga New Zealand", "bay-of-islands-camping-week":"Bay of Islands New Zealand", "east-cape-road-trip":"East Cape New Zealand coast", "taranaki-forgotten-world-highway":"Mount Taranaki New Zealand", "wellington-wairarapa-camping-loop":"Cape Palliser New Zealand", "north-island-two-week-road-trip":"Tongariro National Park", "picton-kaikoura-christchurch-route":"Kaikoura coast New Zealand", "christchurch-tekapo-aoraki-road-trip":"Lake Tekapo New Zealand", "west-coast-south-island-road-trip":"Franz Josef Glacier New Zealand", "queenstown-glenorchy-camping":"Glenorchy Lake Wakatipu", "wanaka-haast-pass-route":"Haast Pass New Zealand", "southern-scenic-route-camping":"Catlins coast New Zealand", "fiordland-camping-road-trip":"Milford Sound New Zealand", "nelson-abel-tasman-golden-bay":"Abel Tasman National Park", "arthurs-pass-camping-route":"Arthurs Pass New Zealand", "banks-peninsula-camping-weekend":"Akaroa Harbour New Zealand", "south-island-two-week-road-trip":"South Island New Zealand mountains", "new-zealand-three-week-campervan-route":"New Zealand campervan landscape", "rakiura-stewart-island-camping-guide":"Stewart Island New Zealand",
  "doc-campsites-new-zealand-guide":"New Zealand campsite", "doc-huts-new-zealand-guide":"New Zealand DOC hut", "holiday-parks-new-zealand-guide":"New Zealand holiday park", "freedom-camping-new-zealand-guide":"New Zealand freedom camping campervan", "scenic-campsites-new-zealand":"Lake Tekapo campsite", "winter-camping-new-zealand":"New Zealand campervan snow",
  "freedom-camping-rules-new-zealand":"New Zealand freedom camping campervan", "self-contained-campervan-green-warrant":"New Zealand campervan", "doc-campsite-rules":"New Zealand campsite", "doc-hut-rules-etiquette":"New Zealand backcountry hut", "campfire-rules-new-zealand":"campfire New Zealand camping", "dogs-camping-new-zealand":"dog camping New Zealand", "camping-wastewater-rubbish-new-zealand":"New Zealand campervan dump station", "kauri-dieback-camping-travel":"Kauri forest New Zealand", "new-zealand-biosecurity-camping-gear":"New Zealand hiking track", "sandflies-new-zealand-camping":"Milford Sound campsite", "new-zealand-severe-weather-camping":"New Zealand storm landscape", "earthquake-tsunami-camping-new-zealand":"New Zealand tsunami evacuation sign", "volcanic-safety-new-zealand-travel":"Tongariro volcano New Zealand", "river-crossing-safety-new-zealand":"New Zealand river crossing", "winter-driving-new-zealand-campervan":"New Zealand road snow", "new-zealand-road-signs-visitors":"New Zealand road sign", "overseas-driver-licence-new-zealand":"New Zealand rental campervan", "campervan-road-rules-new-zealand":"New Zealand campervan road", "wof-registration-campervan-new-zealand":"New Zealand motorhome", "towing-caravan-new-zealand":"New Zealand caravan road", "speed-limits-new-zealand-visitors":"New Zealand speed limit sign", "alcohol-fatigue-driving-new-zealand":"New Zealand rest area", "left-side-driving-new-zealand":"New Zealand winding road", "one-lane-bridges-gravel-roads-new-zealand":"New Zealand one lane bridge", "wildlife-livestock-road-safety-new-zealand":"New Zealand sheep road", "camping-rules-local-councils-new-zealand":"New Zealand freedom camping sign",
  "new-zealand-camping-packing-list":"New Zealand camping tent", "campervan-budget-new-zealand":"New Zealand campervan", "best-time-camping-new-zealand":"New Zealand four seasons landscape", "cook-strait-ferry-campervan-guide":"Interislander ferry New Zealand", "new-zealand-driving-day-planner":"New Zealand scenic road", "food-fuel-resupply-new-zealand-road-trip":"New Zealand petrol station",
  "plan-trip-kiwicamping":"New Zealand road trip map", "save-places-kiwicamping":"Lake Tekapo New Zealand", "kiwicamping-filters-guide":"New Zealand campervan campsite", "kiwicamping-offline-data-guide":"Fiordland New Zealand", "kiwicamping-weather-look-around":"Mount Taranaki weather", "kiwicamping-currency-place-costs":"New Zealand holiday park",
  "new-zealand-travel-cost-2026":"New Zealand traveller campervan", "new-zealand-grocery-prices-2026":"New Zealand supermarket", "eating-out-new-zealand-prices-2026":"New Zealand cafe meal", "beer-wine-coffee-prices-new-zealand":"New Zealand wine coffee", "accommodation-costs-new-zealand-2026":"New Zealand motel", "camping-fees-new-zealand-2026":"New Zealand campsite campervan", "new-zealand-road-trip-fuel-cost-2026":"New Zealand petrol station", "public-transport-costs-new-zealand-2026":"Auckland train bus", "domestic-flight-costs-new-zealand-2026":"Air New Zealand aircraft", "bus-ferry-train-costs-new-zealand":"TranzAlpine train New Zealand",
};

const exactTitles: Record<string, string> = {
  "arthurs-pass-camping-route":"File:Waimakariri River close to Arthur's Pass, New Zealand.jpg",
  "new-zealand-three-week-campervan-route":"File:New Zealand campervan - geograph.org.uk - 741945.jpg",
  "holiday-parks-new-zealand-guide":"File:Arrowtown Born Of Gold Holiday Park.jpg",
  "freedom-camping-rules-new-zealand":"File:1984 Mazda B2000 Campervan (7184403877).jpg",
  "dogs-camping-new-zealand":"File:Example of a peak-specimen border collie (New Zealand).jpg",
  "winter-driving-new-zealand-campervan":"File:State Highway 73 during winter.jpg",
  "alcohol-fatigue-driving-new-zealand":"File:Driving North From QTown Through Pass.jpg",
  "campervan-budget-new-zealand":"File:15 Camper van in New Zealand - Akaroa キャンピングカー.jpg",
  "towing-caravan-new-zealand":"File:Fiat Ducato, New Zealand, September 2016.jpg",
  "eating-out-new-zealand-prices-2026":"File:Coffee shop 1 - Wellington, New Zealand.jpg",
  "new-zealand-road-trip-fuel-cost-2026":"File:Springs Junction Petrol Station.jpg",
  "camping-fees-new-zealand-2026":"File:Summer campers at Mount Manganui.jpg",
  "camping-wastewater-rubbish-new-zealand":"File:Dumping-RV-Waste-Tanks.jpg",
};

function queriesFor(article: (typeof articles)[number]) {
  const place = article.places.at(-1) ?? article.region;
  return [preferred[article.slug], `${place} New Zealand`, article.imageAlt, "New Zealand landscape"].filter(Boolean);
}

await mkdir(outputDirectory, { recursive: true });

for (const [index, article] of articles.entries()) {
  if (article.category === "App guides") {
    const appIndex = articles.filter((item) => item.category === "App guides").findIndex((item) => item.slug === article.slug) + 1;
    const inputPath = new URL(`../public/images/kiwicamping-feature-${appIndex}.webp`, import.meta.url).pathname;
    const outputPath = new URL(`${article.slug}.webp`, outputDirectory).pathname;
    const converted = spawnSync("magick", [inputPath, "-auto-orient", "-resize", "1800x1100^", "-gravity", "center", "-extent", "1600x900", "-quality", "82", outputPath], { encoding: "utf8" });
    if (converted.status !== 0) throw new Error(`Product image conversion failed for ${article.slug}: ${converted.stderr}`);
    rows.push(`| \`${article.slug}\` | KiwiCamping product screenshot ${appIndex} | KiwiCamping | Original product asset | KiwiCamping |`);
    console.log(`${index + 1}/${articles.length} ${article.slug} <- KiwiCamping product screenshot ${appIndex}`);
    continue;
  }
  type Page = { pageid: number; title: string; imageinfo?: Array<{ thumburl?: string; url?: string; mime?: string; width?: number; height?: number; descriptionurl?: string; extmetadata?: Record<string, { value?: string }> }> };
  let candidate: Page | undefined;
  if (exactTitles[article.slug]) {
    const exact = new URL("https://commons.wikimedia.org/w/api.php");
    exact.search = new URLSearchParams({action:"query",titles:exactTitles[article.slug],prop:"imageinfo",iiprop:"url|size|mime|extmetadata",iiurlwidth:"1800",format:"json",origin:"*"}).toString();
    const response = await fetchWithRetry(exact);
    const payload = await response.json() as { query?: { pages?: Record<string, Page> } };
    candidate = Object.values(payload.query?.pages ?? {})[0];
  }
  for (const query of queriesFor(article)) {
    if (candidate) break;
    const search = new URL("https://commons.wikimedia.org/w/api.php");
    search.search = new URLSearchParams({action:"query",generator:"search",gsrsearch:query,gsrnamespace:"6",gsrlimit:"40",prop:"imageinfo",iiprop:"url|size|mime|extmetadata",iiurlwidth:"1800",format:"json",origin:"*"}).toString();
    const response = await fetchWithRetry(search);
    if (!response.ok) continue;
    const payload = await response.json() as { query?: { pages?: Record<string, Page> } };
    candidate = Object.values(payload.query?.pages ?? {}).find((page) => {
      const info = page.imageinfo?.[0];
      const meta = info?.extmetadata ?? {};
      const license = meta.LicenseShortName?.value;
      const descriptive = `${page.title} ${meta.Categories?.value ?? ""} ${meta.ImageDescription?.value ?? ""}`;
      const excluded = /painting|artwork|drawing|illustration|poster|map of|coat of arms|flag of|logo|diagram|watercolou?r|engraving/i.test(descriptive);
      const photoMime = info?.mime === "image/jpeg" || info?.mime === "image/png" || info?.mime === "image/webp" || info?.mime === "image/tiff";
      return !used.has(page.pageid) && !excluded && photoMime && (info?.width ?? 0) >= 1000 && (info?.height ?? 0) >= 600 && Boolean(info?.thumburl || info?.url) && allowed.test(license ?? "");
    });
    if (candidate) break;
  }
  if (!candidate) throw new Error(`No licensed unique photograph found for ${article.slug}`);

  used.add(candidate.pageid);
  const info = candidate.imageinfo![0];
  const imageResponse = await fetchWithRetry(info.thumburl ?? info.url!);
  if (!imageResponse.ok) throw new Error(`Image download failed for ${article.slug}: ${imageResponse.status}`);
  const sourcePath = `/tmp/kiwicamping-${article.slug}-${index}`;
  await writeFile(sourcePath, Buffer.from(await imageResponse.arrayBuffer()));
  const outputPath = new URL(`${article.slug}.webp`, outputDirectory).pathname;
  const converted = spawnSync("magick", [sourcePath, "-auto-orient", "-resize", "1800x1100^", "-gravity", "center", "-extent", "1600x900", "-quality", "82", outputPath], { encoding: "utf8" });
  if (converted.status !== 0) throw new Error(`Image conversion failed for ${article.slug}: ${converted.stderr}`);

  const meta = info.extmetadata ?? {};
  rows.push(`| \`${article.slug}\` | ${clean(candidate.title.replace(/^File:/, ""))} | ${clean(meta.Artist?.value)} | ${clean(meta.LicenseShortName?.value)} | [Source](${info.descriptionurl}) |`);
  console.log(`${index + 1}/${articles.length} ${article.slug} <- ${candidate.title}`);
  await delay(220);
}

const document = `# KiwiCamping article image sources\n\nAll article images are real photographs sourced from Wikimedia Commons. They were resized and centre-cropped to 1600 by 900 pixels for consistent cards and article headers. See each source page for the complete attribution and licence terms.\n\n| Article | File | Creator | Licence | Source |\n|---|---|---|---|---|\n${rows.join("\n")}\n`;
await writeFile(attributionPath, document);
console.log(`Wrote ${articles.length} unique images and ${attributionPath.pathname}`);
