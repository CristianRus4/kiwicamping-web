import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Google Analytics 4 with Consent Mode v2, as one inline script.
 *
 * The static export strips every script it does not recognise, so this is rendered inline in the
 * root layout and marked `data-static-keep`, which the exporter allows through. It has three jobs:
 *
 * 1. Consent defaults, before anything else runs. Analytics storage is denied in the EEA, the UK
 *    and Switzerland until the visitor accepts, and granted elsewhere. Ad storage, ad user data and
 *    ad personalisation are denied everywhere and are never updated. A stored choice is applied at
 *    once, and a visitor who is about to be shown the bar stays denied until they answer.
 * 2. The config, straight away (Google signals and ad personalisation signals off, 13-month
 *    cookies, no automatic page view), then once the document is parsed a `page_view` labelled
 *    from `<main data-page-kind data-locale data-slug data-category>`.
 * 3. One delegated click listener that sends `app_store_click` for every App Store link, with the
 *    link's `data-cta` placement and its `ct` campaign token. `window.acTrack(name, params)` sends
 *    any other event (the tools use it) with the same page context attached.
 *
 * The consent bar itself is server-rendered hidden (components/consent-bar.tsx); this script shows
 * it only when no choice is stored and the browser's time zone is in Europe (CONSENT_TIME_ZONES).
 * Google's per-region default above is the backstop for visitors whose time zone says otherwise.
 *
 * With no measurement ID configured, nothing is rendered: no script, no bar, no footer link.
 */
export const analyticsEnabled = GA_MEASUREMENT_ID !== "";

/**
 * EU 27 plus Iceland, Liechtenstein and Norway (the EEA), the United Kingdom and Switzerland. Then
 * the EU territories Google geolocates under their own codes (Åland and the French outermost
 * regions), Gibraltar and the Crown Dependencies, which follow UK-style data protection law, and
 * the European microstates.
 */
export const CONSENT_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  "IS", "LI", "NO", "GB", "CH",
  "AX", "GF", "GP", "MQ", "RE", "YT", "MF", "GI", "JE", "GG", "IM", "MC", "AD", "SM", "VA",
] as const;

/**
 * Time zones whose visitors are asked: all of Europe/*, plus the parts of the EEA that report a
 * zone outside it (the Canaries, Madeira, the Azores, Iceland, Cyprus, Ceuta and Melilla, and the
 * French outermost regions).
 */
export const CONSENT_TIME_ZONES = /^(?:Europe\/.+|Atlantic\/(?:Canary|Madeira|Azores|Reykjavik)|Asia\/(?:Nicosia|Famagusta)|Africa\/Ceuta|America\/(?:Guadeloupe|Martinique|Cayenne|Marigot)|Indian\/(?:Reunion|Mayotte))$/;

/** _ga and _ga_<id> expire after 13 months (GA4's default is two years), as the privacy policy says. */
export const COOKIE_EXPIRES_SECONDS = 395 * 24 * 60 * 60;

/** Where the visitor's choice is remembered: "granted" or "denied". */
export const CONSENT_STORAGE_KEY = "analytics-consent";

export type PageKind = "home" | "guide" | "guides" | "tools" | "support" | "legal" | "hub" | "tool";

/**
 * The attributes every page puts on its `<main>`, which label the page view and every event.
 * `locale` is "en" for English, otherwise the locale code; `category` is always the English
 * category, so reports group the same guide the same way in every language.
 */
export function mainData({ kind, locale, slug, category }: { kind: PageKind; locale: string; slug?: string; category?: string }) {
  return { "data-page-kind": kind, "data-locale": locale, "data-slug": slug, "data-category": category };
}

export function analyticsScript(id: string = GA_MEASUREMENT_ID): string {
  return `(function(w,d){
var id=${JSON.stringify(id)},key=${JSON.stringify(CONSENT_STORAGE_KEY)},stored=null,tz='';
w.dataLayer=w.dataLayer||[];
function gtag(){w.dataLayer.push(arguments)}
w.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(CONSENT_REGIONS)},wait_for_update:500});
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
try{stored=w.localStorage.getItem(key)}catch(e){}
if(stored!=='granted'&&stored!=='denied')stored=null;
try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
var ask=!stored&&${CONSENT_TIME_ZONES.toString()}.test(tz);
// A visitor about to be asked stays cookieless until they answer, whatever region Google infers.
if(stored)gtag('consent','update',{analytics_storage:stored});else if(ask)gtag('consent','update',{analytics_storage:'denied'});
gtag('js',new Date());
gtag('config',id,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:${COOKIE_EXPIRES_SECONDS}});
var tag=d.createElement('script');tag.async=true;tag.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);d.head.appendChild(tag);
function context(){
var m=d.querySelector('main[data-page-kind]'),out={};
if(!m)return out;
[['page_kind','data-page-kind'],['site_locale','data-locale'],['guide_slug','data-slug'],['guide_category','data-category']].forEach(function(p){var v=m.getAttribute(p[1]);if(v)out[p[0]]=v});
return out}
function track(name,params){var data=context();params=params||{};for(var k in params)if(Object.prototype.hasOwnProperty.call(params,k))data[k]=params[k];gtag('event',name,data)}
w.acTrack=track;
function storeClick(e){
if(e.type==='auxclick'&&e.button!==1)return;
var link=e.target&&e.target.closest?e.target.closest('a[href*="apps.apple.com"]'):null;
if(!link)return;
var ct='';try{ct=new URL(link.href).searchParams.get('ct')||''}catch(x){}
track('app_store_click',{placement:link.getAttribute('data-cta')||'',campaign_token:ct,link_url:link.href,transport_type:'beacon'})}
d.addEventListener('click',storeClick,true);
d.addEventListener('auxclick',storeClick,true);
function clearCookies(){
var host=location.hostname,domains=['',host,'.'+host.replace(/^www\\./,'')];
d.cookie.split(';').forEach(function(c){var n=c.split('=')[0].trim();if(/^_ga(_|$)/.test(n))domains.forEach(function(dom){d.cookie=n+'=; Max-Age=0; path=/'+(dom?'; domain='+dom:'')})})}
function consentBar(){
var bar=d.querySelector('[data-consent-bar]');if(!bar)return;
var root=d.documentElement;
function show(){bar.hidden=false;root.classList.add('consent-open')}
function hide(){bar.hidden=true;root.classList.remove('consent-open')}
function choose(value){stored=value;try{w.localStorage.setItem(key,value)}catch(e){}gtag('consent','update',{analytics_storage:value});if(value==='denied')clearCookies();hide()}
bar.querySelector('[data-consent-accept]').addEventListener('click',function(){choose('granted')});
bar.querySelector('[data-consent-decline]').addEventListener('click',function(){choose('denied')});
d.addEventListener('click',function(e){var open=e.target&&e.target.closest?e.target.closest('[data-consent-open]'):null;if(!open)return;e.preventDefault();show();bar.querySelector('button').focus()});
if(ask)show()}
function boot(){
var page=context();page.content_group=page.guide_category||page.page_kind||'other';
gtag('event','page_view',page);
consentBar()}
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',boot);else boot();
})(window,document);`;
}
