import de from "./translations/de.json";
import es from "./translations/es.json";
import fr from "./translations/fr.json";
import it from "./translations/it.json";
import nl from "./translations/nl.json";
import pt from "./translations/pt.json";
import productFacts from "./data/product-facts.json";
import { toolStrings, type ToolId, type ToolStrings } from "./source-strings";
import { isTranslated, localeCodes, type LocaleCode } from "./localized";
import { hreflang } from "./seo";
import { SITE_URL, articles, articleHref, sitePath } from "./site";
import { exchangeRateDate, nzdRates } from "./currency";

/**
 * The road trip calculators: one page per tool under /tools/<slug>/, plus the /tools/ index.
 *
 * Copy lives in the `tools` namespace of lib/source-strings.ts. A locale's tool page uses its
 * translation only when `tools.shared` and `tools.<tool>` are complete; otherwise it renders the
 * English copy and stays noindex and out of the sitemap.
 */

export type { ToolId } from "./source-strings";
export const toolIds = ["fuel", "drive", "campsite", "currency", "water"] as const satisfies readonly ToolId[];
export type ToolPageLocale = LocaleCode | "en";

type Source = { label: string; url: string };
const MBIE_FUEL: Source = { label: "MBIE weekly fuel price monitoring", url: "https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/weekly-fuel-price-monitoring" };
const NZTA_RUC: Source = { label: "NZTA road user charges", url: "https://www.nzta.govt.nz/vehicles/road-user-charges/" };
const NZTA_JOURNEYS: Source = { label: "NZTA journey planner and road conditions", url: "https://www.journeys.nzta.govt.nz/" };
const RBNZ: Source = { label: "Reserve Bank of New Zealand exchange rates", url: "https://www.rbnz.govt.nz/en/statistics/series/exchange-and-interest-rates/exchange-rates-and-the-trade-weighted-index" };
const DOC_FEES: Source = { label: "DOC campsite categories and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/campsite-categories/" };

/** Slug, the guides each tool links to (and asks to be linked from), and its official sources. */
export const tools: Record<ToolId, { slug: string; icon: "fuel" | "clock" | "wallet" | "currency" | "droplets"; guides: string[]; sources: Source[] }> = {
  fuel: { slug: "fuel-cost-calculator", icon: "fuel", guides: ["new-zealand-road-trip-fuel-cost-2026", "food-fuel-resupply-new-zealand-road-trip", "campervan-budget-new-zealand"], sources: [MBIE_FUEL, NZTA_RUC] },
  drive: { slug: "drive-time-calculator", icon: "clock", guides: ["new-zealand-driving-day-planner", "one-lane-bridges-gravel-roads-new-zealand", "alcohol-fatigue-driving-new-zealand"], sources: [NZTA_JOURNEYS] },
  campsite: { slug: "campsite-cost-calculator", icon: "wallet", guides: ["camping-fees-new-zealand-2026", "doc-campsites-new-zealand-guide", "holiday-parks-new-zealand-guide"], sources: [DOC_FEES] },
  currency: { slug: "currency-converter", icon: "currency", guides: ["kiwicamping-currency-place-costs", "new-zealand-travel-cost-2026", "new-zealand-grocery-prices-2026"], sources: [RBNZ] },
  water: { slug: "water-tank-calculator", icon: "droplets", guides: ["camping-wastewater-rubbish-new-zealand", "self-contained-campervan-green-warrant", "freedom-camping-rules-new-zealand"], sources: [] },
};
export const toolBySlug = (slug: string) => toolIds.find((id) => tools[id].slug === slug);

/* ------------------------------------------------------------------------------------------------
 * Strings and the per-tool translation gate
 * ---------------------------------------------------------------------------------------------- */

type ToolsFile = { tools?: Partial<Record<keyof ToolStrings, unknown>> };
const files: Record<LocaleCode, ToolsFile> = { de, es, fr, it, nl, pt } as unknown as Record<LocaleCode, ToolsFile>;

const filled = (value: unknown): boolean => typeof value === "string" ? value.trim().length > 0 : false;
const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort().join(",");
/** Same shape as the English, every string filled, every {placeholder} kept. */
function complete(english: unknown, translated: unknown): boolean {
  if (typeof english === "string") return filled(translated) && placeholders(english) === placeholders(translated as string);
  if (Array.isArray(english)) return Array.isArray(translated) && translated.length === english.length && english.every((item, index) => complete(item, translated[index]));
  if (english && typeof english === "object") return !!translated && typeof translated === "object" && Object.keys(english).every((key) => complete((english as Record<string, unknown>)[key], (translated as Record<string, unknown>)[key]));
  return false;
}

export function isToolTranslated(locale: LocaleCode, id: ToolId) {
  const translated = files[locale].tools ?? {};
  return complete(toolStrings.shared, translated.shared) && complete(toolStrings[id], translated[id]);
}

/** A locale's tool page enters search only once the locale is live and the tool is translated. */
export const isToolIndexable = (locale: ToolPageLocale, id: ToolId) => locale === "en" || (isTranslated(locale) && isToolTranslated(locale, id));

/** All or nothing per tool: the complete translation, or the English. */
export function toolCopy<T extends ToolId>(locale: ToolPageLocale, id: T): { shared: ToolStrings["shared"]; tool: ToolStrings[T]; translated: boolean } {
  if (locale !== "en" && isToolTranslated(locale, id)) {
    const translated = files[locale].tools!;
    return { shared: translated.shared as ToolStrings["shared"], tool: translated[id] as ToolStrings[T], translated: true };
  }
  return { shared: toolStrings.shared, tool: toolStrings[id], translated: false };
}

/** The Intl tag numbers are formatted with: the locale's own once the page is translated. */
export const intlLocale = (locale: ToolPageLocale, id: ToolId) => locale !== "en" && isToolTranslated(locale, id) ? hreflang[locale] : "en-NZ";

export const toolPath = (locale: ToolPageLocale, id: ToolId) => sitePath(`${locale === "en" ? "" : `/${locale}`}/tools/${tools[id].slug}`);
export const toolsIndexPath = (locale: ToolPageLocale) => sitePath(`${locale === "en" ? "" : `/${locale}`}/tools`);

/* ------------------------------------------------------------------------------------------------
 * Numbers
 * ---------------------------------------------------------------------------------------------- */

export const fill = (text: string, values: Record<string, string | number>) => text.replace(/\{(\w+)\}/g, (match, key) => key in values ? String(values[key]) : match);

export const formatNumber = (value: number, tag: string, digits = 0) => new Intl.NumberFormat(tag, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);

/** Currency in the page's language. A bare "$" for NZD reads as US dollars to a visitor, so it says NZ$. */
export function formatMoney(value: number, currency: string, tag: string, digits?: number) {
  const fraction = digits ?? (Number.isInteger(value) ? 0 : 2);
  return new Intl.NumberFormat(tag, { style: "currency", currency, minimumFractionDigits: fraction, maximumFractionDigits: fraction })
    .formatToParts(value).map((part) => part.type === "currency" && part.value === "$" && currency === "NZD" ? "NZ$" : part.value).join("");
}
const currencyDigits = (currency: string) => currency === "JPY" || currency === "KRW" ? 0 : 2;

/** The values each calculator opens with. The rendered output and the worked example use the same ones. */
export const toolDefaults = {
  fuel: { distance: 1000, consumption: 12, price: 2.96 },
  drive: { distance: 250, speed: 60, stops: 3 },
  campsite: { adults: 2, nights: 5, perAdult: 20, perSite: 50 },
  currency: { amount: 100, from: "NZD", to: "USD" },
  water: { fresh: 100, grey: 90, people: 2 },
} as const;
const STOP_MINUTES = 20, FRESH_PER_DAY = 11, GREY_PER_DAY = 9;

const hoursMinutes = (minutes: number, template: string, tag: string) => fill(template, { hours: formatNumber(Math.floor(minutes / 60), tag), minutes: String(minutes % 60).padStart(2, "0") });

/** What each calculator shows before anyone types, so the server render matches the script. */
export function defaultOutput(id: ToolId, tag: string, copy: ToolStrings) {
  switch (id) {
    case "fuel": { const v = toolDefaults.fuel; const litres = v.distance * v.consumption / 100; return `${formatNumber(litres, tag, 1)} L · ${formatMoney(litres * v.price, "NZD", tag, 2)}`; }
    case "drive": { const v = toolDefaults.drive; return hoursMinutes(Math.round(v.distance / v.speed * 60 + v.stops * STOP_MINUTES), copy.drive.hoursMinutes, tag); }
    case "campsite": { const v = toolDefaults.campsite; const a = v.adults * v.nights * v.perAdult, b = v.nights * v.perSite; return fill(copy.campsite.comparison, { perAdult: formatMoney(a, "NZD", tag), perSite: formatMoney(b, "NZD", tag), verdict: a === b ? copy.campsite.theSame : a < b ? copy.campsite.perAdultCheaper : copy.campsite.perSiteCheaper }); }
    case "currency": { const v = toolDefaults.currency; return formatMoney(v.amount / nzdRates[v.from] * nzdRates[v.to], v.to, tag, currencyDigits(v.to)); }
    case "water": { const v = toolDefaults.water; return fill(copy.water.days, { fresh: formatNumber(v.fresh / (v.people * FRESH_PER_DAY), tag, 1), grey: formatNumber(v.grey / (v.people * GREY_PER_DAY), tag, 1) }); }
  }
}

const campsiteFacts = productFacts.categories.docCampsites;
/** Values the copy's {placeholders} may use, formatted for the page. */
export function copyValues(tag: string) {
  return {
    rateDate: exchangeRateDate,
    docDate: formatDate(campsiteFacts.asOf, tag),
    docFree: formatNumber(campsiteFacts.fee.free, tag),
    docMin: formatMoney(campsiteFacts.adultRate.min, "NZD", tag),
    docMax: formatMoney(campsiteFacts.adultRate.max, "NZD", tag),
    docMedian: formatMoney(campsiteFacts.adultRate.median, "NZD", tag),
  };
}
const formatDate = (iso: string, tag: string) => new Intl.DateTimeFormat(tag, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));

/** The worked example, computed from the same defaults the calculator opens with. */
export function workedExample(id: ToolId, tag: string, copy: ToolStrings) {
  switch (id) {
    case "fuel": { const v = toolDefaults.fuel; const litres = v.distance * v.consumption / 100; return fill(copy.fuel.example, { distance: formatNumber(v.distance, tag), consumption: formatNumber(v.consumption, tag), litres: formatNumber(litres, tag), price: formatMoney(v.price, "NZD", tag, 2), cost: formatMoney(litres * v.price, "NZD", tag, 2) }); }
    case "drive": { const v = toolDefaults.drive; const driving = Math.round(v.distance / v.speed * 60); return fill(copy.drive.example, { distance: formatNumber(v.distance, tag), speed: formatNumber(v.speed, tag), driving: hoursMinutes(driving, copy.drive.hoursMinutes, tag), stops: formatNumber(v.stops, tag), total: hoursMinutes(driving + v.stops * STOP_MINUTES, copy.drive.hoursMinutes, tag) }); }
    case "campsite": { const v = toolDefaults.campsite; const a = v.adults * v.nights * v.perAdult, b = v.nights * v.perSite; return fill(copy.campsite.example, { adults: formatNumber(v.adults, tag), nights: formatNumber(v.nights, tag), rateAdult: formatMoney(v.perAdult, "NZD", tag), totalAdult: formatMoney(a, "NZD", tag), rateSite: formatMoney(v.perSite, "NZD", tag), totalSite: formatMoney(b, "NZD", tag), verdict: a === b ? copy.campsite.theSame : a < b ? copy.campsite.perAdultCheaper : copy.campsite.perSiteCheaper }); }
    case "currency": { const v = toolDefaults.currency; return fill(copy.currency.example, { amount: formatMoney(v.amount, "NZD", tag), rate: formatNumber(nzdRates.USD, tag, 5), converted: formatMoney(v.amount * nzdRates.USD, "USD", tag, 2) }); }
    case "water": { const v = toolDefaults.water; return fill(copy.water.example, { people: formatNumber(v.people, tag), freshTank: formatNumber(v.fresh, tag), greyTank: formatNumber(v.grey, tag), freshDays: formatNumber(v.fresh / (v.people * FRESH_PER_DAY), tag, 1), greyDays: formatNumber(v.grey / (v.people * GREY_PER_DAY), tag, 1) }); }
  }
}

/* ------------------------------------------------------------------------------------------------
 * The inline script
 *
 * The static export strips every script except JSON-LD and ones marked data-static-tools, so each
 * page carries one small script with only the handlers it needs. It fires the `tool_used` analytics
 * event once per tool per page view, and only when the analytics helper is present. The rendered HTML
 * carries each inline script twice (the framework repeats it after the body), so a tool binds once.
 * ---------------------------------------------------------------------------------------------- */

const prelude = (tag: string) => `var L=${JSON.stringify(tag)};
var dec=(1.5).toLocaleString(L).charAt(1);
var nf=function(v,d){return new Intl.NumberFormat(L,{minimumFractionDigits:d,maximumFractionDigits:d}).format(v)};
var money=function(v,c,d){var f=d==null?(Number.isInteger(v)?0:2):d;return new Intl.NumberFormat(L,{style:'currency',currency:c,minimumFractionDigits:f,maximumFractionDigits:f}).formatToParts(v).map(function(p){return p.type==='currency'&&p.value==='$'&&c==='NZD'?'NZ$':p.value}).join('')};
var fill=function(t,o){return t.replace(/\\{(\\w+)\\}/g,function(m,k){return k in o?o[k]:m})};
var num=function(root,name){var raw=String(root.querySelector('[data-'+name+']').value).replace(/\\s/g,'');if(!raw)return NaN;raw=dec===','?raw.replace(/\\./g,'').replace(',','.'):raw.replace(/,/g,'');return Number(raw)};
var bind=function(selector,tool,update){var root=document.querySelector(selector);if(!root||root.hasAttribute('data-bound'))return;root.setAttribute('data-bound','');var used=false;var on=function(){update(root);if(!used){used=true;if(typeof window.acTrack==='function')window.acTrack('tool_used',{tool:tool})}};root.addEventListener('input',on);root.addEventListener('change',on);update(root)};`;

function handler(id: ToolId, copy: ToolStrings): string {
  const s = copy.shared;
  const t = (value: string) => JSON.stringify(value);
  switch (id) {
    case "fuel": return `bind('[data-fuel-tool]','${tools.fuel.slug}',function(root){var d=num(root,'fuel-distance'),c=num(root,'fuel-consumption'),p=num(root,'fuel-price');var ok=[d,c,p].every(function(v){return isFinite(v)&&v>=0});var l=d*c/100;root.querySelector('[data-fuel-output]').textContent=ok?nf(l,1)+' L · '+money(l*p,'NZD',2):${t(s.enterValidValues)}});`;
    case "drive": return `bind('[data-drive-tool]','${tools.drive.slug}',function(root){var d=num(root,'drive-distance'),v=Number(root.querySelector('[data-drive-speed]').value),n=num(root,'drive-stops');var ok=[d,v,n].every(function(x){return isFinite(x)&&x>=0})&&v>0;var out=root.querySelector('[data-drive-output]');if(!ok){out.textContent=${t(s.enterValidValues)};return}var m=Math.round(d/v*60+n*${STOP_MINUTES});out.textContent=fill(${t(copy.drive.hoursMinutes)},{hours:nf(Math.floor(m/60),0),minutes:String(m%60).padStart(2,'0')})});`;
    case "campsite": return `bind('[data-camp-tool]','${tools.campsite.slug}',function(root){var a=num(root,'camp-adults'),n=num(root,'camp-nights'),pa=num(root,'camp-per-person'),ps=num(root,'camp-per-site');var ok=[a,n,pa,ps].every(function(v){return isFinite(v)&&v>=0});var out=root.querySelector('[data-camp-output]');if(!ok){out.textContent=${t(s.enterValidValues)};return}var x=a*n*pa,y=n*ps;out.textContent=fill(${t(copy.campsite.comparison)},{perAdult:money(x,'NZD'),perSite:money(y,'NZD'),verdict:x===y?${t(copy.campsite.theSame)}:x<y?${t(copy.campsite.perAdultCheaper)}:${t(copy.campsite.perSiteCheaper)}})});`;
    case "currency": return `var rates=${JSON.stringify(nzdRates)};bind('[data-currency-tool]','${tools.currency.slug}',function(root){var a=num(root,'currency-amount'),f=root.querySelector('[data-currency-from]').value,to=root.querySelector('[data-currency-to]').value;root.querySelector('[data-currency-output]').textContent=isFinite(a)&&a>=0?money(a/rates[f]*rates[to],to,to==='JPY'||to==='KRW'?0:2):${t(s.enterValidAmount)}});`;
    case "water": return `bind('[data-tank-tool]','${tools.water.slug}',function(root){var f=num(root,'tank-fresh'),g=num(root,'tank-grey'),p=num(root,'tank-people');var ok=[f,g,p].every(function(v){return isFinite(v)&&v>=0})&&p>0;var out=root.querySelector('[data-tank-output]');if(!ok){out.textContent=${t(s.enterValidValues)};return}out.textContent=fill(${t(copy.water.days)},{fresh:nf(f/(p*${FRESH_PER_DAY}),1),grey:nf(g/(p*${GREY_PER_DAY}),1)})});`;
  }
}

/** One IIFE carrying the handlers for the given tools only. */
export const toolScript = (ids: readonly ToolId[], tag: string, copy: ToolStrings) => `(function(){${prelude(tag)}\n${ids.map((id) => handler(id, copy)).join("\n")}})();`;

/* ------------------------------------------------------------------------------------------------
 * Structured data
 * ---------------------------------------------------------------------------------------------- */

export function toolSchema(locale: ToolPageLocale, id: ToolId) {
  const { shared, tool } = toolCopy(locale, id);
  const url = `${SITE_URL}${toolPath(locale, id)}`;
  const tag = intlLocale(locale, id);
  const values = copyValues(tag);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: shared.breadcrumbHome, item: `${SITE_URL}${sitePath(locale === "en" ? "/" : `/${locale}`)}` },
          { "@type": "ListItem", position: 2, name: shared.breadcrumbTools, item: `${SITE_URL}${toolsIndexPath(locale)}` },
          { "@type": "ListItem", position: 3, name: tool.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: tool.faq.map(([question, answer]) => ({ "@type": "Question", name: fill(question, values), acceptedAnswer: { "@type": "Answer", text: fill(answer, values) } })),
      },
    ],
  };
}

/** The guides a tool links to, at their published URL for this locale. */
export function toolGuides(locale: ToolPageLocale, id: ToolId) {
  return tools[id].guides.map((slug) => articles.find((article) => article.slug === slug)).filter((article) => !!article).map((article) => ({
    title: article!.title,
    href: article!.legacyPath || locale === "en" ? articleHref(article!) : sitePath(`/${locale}/guides/${article!.slug}`),
  }));
}

/**
 * Reciprocal hreflang for a tool page: English plus every locale whose copy of the page is indexable.
 * A noindexed locale page is never advertised as an alternate.
 */
export function toolAlternates(id: ToolId): Record<string, string> {
  const english = toolPath("en", id);
  return {
    "en-NZ": english,
    ...Object.fromEntries(localeCodes.filter((locale) => isToolIndexable(locale, id)).map((locale) => [hreflang[locale], toolPath(locale, id)])),
    "x-default": english,
  };
}
