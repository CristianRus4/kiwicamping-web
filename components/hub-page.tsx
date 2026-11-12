import Link from "next/link";
import { ArrowLeft, ArrowRight, Database } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppCta } from "@/components/app-cta";
import { HubMap } from "@/components/hub-map";
import { photoUrl, placePath, places, placeStatePath, typeLabels } from "@/lib/places";
import { mainData } from "@/lib/analytics";
import { hubIndexPageKey, hubPageKey } from "@/lib/routes/hubs";
import { SITE_URL, articles, articleHref, sitePath } from "@/lib/site";
import { builtHubs, factValue, hubGate, listedHubs, proseFor, type BuiltHubKind, type Hub } from "@/lib/hubs";
import productFacts from "@/lib/data/product-facts.json";
import { hubSource } from "@/lib/hub-strings";
import { hubGuides, nearbyHubs, noteSources } from "@/lib/hub-regions";

/**
 * The data hubs: a DOC region's campsites or huts, or a DOC district's freedom-camping notices.
 *
 * Every number on the page comes from the hub's record (lib/data/hubs.json); the prose is hand-written
 * from the same record and checked by scripts/audit-hubs.mjs. The full map stays in the app, so the
 * call to action says plainly what is free there and what needs the Pass.
 */

const formatDate = (iso: string) => new Intl.DateTimeFormat("en-NZ", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
const guideTitle = (slug: string) => articles.find((article) => article.slug === slug);

type KindCopy = {
  indexTitle: string; indexMetaTitle: string; indexIntro: string; noun: string; nounSingular: string;
  h1: (hub: Hub) => string; metaTitle: (hub: Hub) => string; metaDescription: (hub: Hub) => string; intro: (hub: Hub) => string;
  mapLabel: (hub: Hub) => string; listTitle: string; ctaTitle: (hub: Hub) => string; ctaText: (hub: Hub) => string;
};

const PASS_LINE = "Bookable holiday parks, stays and tours are free in the app. DOC campsites, huts, dump stations and the guides open with the Pass.";

export const hubCopy: Record<BuiltHubKind, KindCopy> = {
  camping: {
    indexTitle: "DOC campsites by region",
    indexMetaTitle: "DOC Campsites by Region: Fees, Facilities and Access",
    indexIntro: "Department of Conservation campsites region by region: how many there are, what they charge, how you reach them and which facilities they have, from DOC's own data.",
    noun: "campsites", nounSingular: "campsite",
    h1: (hub) => `DOC campsites in ${hub.name}`,
    metaTitle: (hub) => `DOC Campsites in ${hub.name}: ${hub.placeCount} Sites, Fees, Facilities`,
    metaDescription: (hub) => `${hub.placeCount} Department of Conservation campsites in ${hub.name}: which are free, adult rates, campervan or walk-in access, facilities and a map, from DOC data.`,
    intro: (hub) => `Department of Conservation campsites and holiday parks in the ${hub.name} region, with photos, fees, access and facilities.`,
    mapLabel: (hub) => `Map of ${hub.placeCount} DOC campsites in ${hub.name}`,
    listTitle: "Campsites",
    ctaTitle: (hub) => `All ${hub.placeCount} campsites on one map`,
    ctaText: (hub) => `KiwiCamping shows every DOC campsite in ${hub.name} on the map with fees, facilities and DOC alerts, and puts the ones you pick into a trip with distances and dates. ${PASS_LINE}`,
  },
  huts: {
    indexTitle: "DOC huts by region",
    indexMetaTitle: "DOC Huts by Region: Bunks, Fees and Bookings",
    indexIntro: "Department of Conservation backcountry huts region by region: how many there are, how many bunks, which are free, which must be booked and what they have inside, from DOC's own data.",
    noun: "huts", nounSingular: "hut",
    h1: (hub) => `DOC huts in ${hub.name}`,
    metaTitle: (hub) => `DOC Huts in ${hub.name}: ${hub.placeCount} Huts, Bunks and Fees`,
    metaDescription: (hub) => `${hub.placeCount} Department of Conservation huts in ${hub.name}: bunks, free and paid huts, which need booking, heating and water, with a map, from DOC data.`,
    intro: (hub) => `Department of Conservation huts in the ${hub.name} region, with photos, bunks, fees and facilities.`,
    mapLabel: (hub) => `Map of ${hub.placeCount} DOC huts in ${hub.name}`,
    listTitle: "Huts",
    ctaTitle: (hub) => `All ${hub.placeCount} huts on one map`,
    ctaText: (hub) => `KiwiCamping shows every DOC hut in ${hub.name} on the map with bunks, fees and DOC alerts, next to the campsites and tracks around them. ${PASS_LINE}`,
  },
  "freedom-camping": {
    indexTitle: "Freedom camping notices on DOC land",
    indexMetaTitle: "Freedom Camping on DOC Land: Notices by District",
    indexIntro: "Where the Department of Conservation prohibits or restricts freedom camping on conservation land, district by district. These are DOC notices, not council bylaws: on council land the council's own rules apply.",
    noun: "notices", nounSingular: "notice",
    h1: (hub) => `Freedom camping notices on DOC land: ${hub.name}`,
    metaTitle: (hub) => `Freedom Camping on DOC Land, ${hub.name}: ${hub.placeCount} Notices`,
    metaDescription: (hub) => `Where DOC prohibits or restricts freedom camping on conservation land in its ${hub.name} district: ${hub.placeCount} current notices, conditions and a map. Not council bylaws.`,
    intro: (hub) => `Where freedom camping is banned or restricted on conservation land in DOC's ${hub.name} district.`,
    mapLabel: (hub) => `Map of ${hub.placeCount} DOC freedom camping notice areas in ${hub.name}`,
    listTitle: "Notice areas",
    ctaTitle: () => "Find somewhere you can stay",
    ctaText: (hub) => `KiwiCamping maps DOC campsites and bookable holiday parks across New Zealand, so you can find a place you are allowed to stay near ${hub.name}. ${PASS_LINE}`,
  },
};

const kindLabel = (kind: BuiltHubKind) => hubCopy[kind].indexTitle;

export function hubMetadataFor(hub: Hub) {
  const copy = hubCopy[hub.kind as BuiltHubKind];
  return { title: copy.metaTitle(hub), description: copy.metaDescription(hub), indexable: hubGate(hub).indexable };
}

function hubSchema(hub: Hub) {
  const url = `${SITE_URL}${hub.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: kindLabel(hub.kind as BuiltHubKind), item: `${SITE_URL}${sitePath(`/${hub.kind}`)}` },
          { "@type": "ListItem", position: 3, name: hub.name, item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#places`,
        name: hubCopy[hub.kind as BuiltHubKind].h1(hub),
        numberOfItems: hub.places.length,
        itemListElement: hub.places.map((place, index) => ({ "@type": "ListItem", position: index + 1, name: place.name, ...(place.url ? { url: place.url } : {}) })),
      },
    ],
  };
}

function PlaceDetail({ hub, place }: { hub: Hub; place: Hub["places"][number] }) {
  if (hub.kind === "freedom-camping") return <>{place.conditions?.length ? place.conditions.join("; ") : "No freedom camping"}{place.areaHa ? ` · ${place.areaHa.toLocaleString("en-NZ")} ha` : ""}</>;
  if (hub.kind === "huts") return <>{place.bunks ? `${place.bunks} bunks` : "Bunks not listed"}{place.facilities?.length ? ` · ${place.facilities.join(", ")}` : ""}</>;
  return <>{[...(place.access ?? []), ...(place.facilities ?? [])].join(", ")}</>;
}

export function HubPage({ hub }: { hub: Hub }) {
  const kind = hub.kind as BuiltHubKind;
  const copy = hubCopy[kind];
  const prose = proseFor(hub);
  const guide = guideTitle(hub.guide.slug);
  const councilGuide = articles.find((article) => article.slug === "camping-rules-local-councils-new-zealand");
  // Only link the sibling hub if it is built: a region with two huts has no huts page.
  const related = hub.related && builtHubs.some((other) => other.path === hub.related) ? { href: hub.related, label: hub.kind === "camping" ? `DOC huts in ${hub.name}` : `DOC campsites in ${hub.name}` } : null;
  const sources = [...hub.officialLinks, ...(prose?.sources ?? [])];
  const notes = hubSource().kinds[kind];
  const guides = hubGuides(hub).flatMap((slug) => articles.find((article) => article.slug === slug) ?? []);
  const nearby = nearbyHubs(hub);
  // The places with their own page in this region: DOC campsites and holiday parks for a camping hub,
  // DOC huts for a huts hub. Freedom camping notices have no place pages and stay a plain list.
  const listed = kind === "freedom-camping" ? [] : places.filter((place) => place.stateSlug === hub.slug && (kind === "huts" ? place.type === "doc_hut" : place.type !== "doc_hut"))
    .sort((a, b) => b.photoCount - a.photoCount || a.name.localeCompare(b.name)).slice(0, 24);

  return <>
    <Header />
    <main {...mainData({ kind: "hub", locale: "en", slug: hub.id })}>
      <article className="article-page hub-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href={sitePath(`/${hub.kind}`)}><ArrowLeft />{kindLabel(kind)}</Link><span>{hub.operationsRegion ?? hub.island}</span></nav>
        <header className="article-header">
          <p className="eyebrow">{kindLabel(kind)}</p>
          <h1>{copy.h1(hub)}</h1>
          <p>{copy.intro(hub)}</p>
        </header>
        <div className="article-layout hub-layout">
          <div className="article-body">
            <HubMap points={hub.points} label={copy.h1(hub)} caption="Coastline and lakes: Natural Earth." />
            {kind === "freedom-camping" && <section className="hub-council">
              <h2>DOC notices, not council bylaws</h2>
              <p>These notices cover public conservation land managed by the Department of Conservation. They are not council bylaws. On land a district or city council manages, that council&apos;s own freedom camping rules apply, and signs at the site always take priority.</p>
              <ul>
                {(prose?.councils ?? []).map((council) => <li key={council.url}><a href={council.url}>{council.label}<ArrowRight /></a></li>)}
                {councilGuide && <li><Link href={articleHref(councilGuide)}>{councilGuide.title}<ArrowRight /></Link></li>}
              </ul>
            </section>}
            {prose && <section className="hub-prose">
              <h2>{kind === "freedom-camping" ? `What the notices mean in ${hub.name}` : kind === "huts" ? `Tramping to DOC huts in ${hub.name}` : `Camping with DOC in ${hub.name}`}</h2>
              {prose.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>}
            {listed.length > 0 ? <section className="hub-places">
              <h2>{copy.listTitle}</h2>
              <ul className="pl-rows">{listed.map((place) => <li key={place.id}><Link href={placePath(place)}>
                <img src={photoUrl(place.photos[1] ?? place.photos[0])} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                <span><strong>{place.name}</strong><small>{typeLabels[place.type].one}{place.park ? ` · ${place.park}` : ""}</small></span>
              </Link></li>)}</ul>
              <p className="hub-more"><Link href={placeStatePath({ slug: hub.slug })}>All places in {hub.name}<ArrowRight /></Link></p>
            </section> : hub.places.length > 0 && <section className="hub-places">
              <h2>{copy.listTitle}</h2>
              <ul className="pl-rows pl-rows-plain">{hub.places.map((place) => <li key={place.id}>{place.url ? <a href={place.url}><strong>{place.name}</strong>{place.locality && <small>{place.locality}</small>}</a> : <span><strong>{place.name}</strong>{place.locality && <small>{place.locality}</small>}</span>}</li>)}</ul>
            </section>}
            <section className="sources hub-notes">
              <h2>{notes.notesTitle}</h2>
              <p>{notes.noteRules}</p>
              <p>{notes.noteSeason}</p>
              <p>Official sources: {noteSources[kind].map((source, index) => <span key={source.url}>{index > 0 && ", "}<a href={source.url} rel="noopener">{source.name}</a></span>)}</p>
            </section>
            {guides.length > 0 && <section className="sources">
              <h2>Guides for {hub.name}</h2>
              <ul>{guides.map((item) => <li key={item.slug}><Link href={articleHref(item)}>{item.title}<ArrowRight /></Link></li>)}</ul>
            </section>}
            {nearby.length > 0 && <section className="sources">
              <h2>{kind === "freedom-camping" ? "Nearby districts" : "Nearby regions"}</h2>
              <ul>{nearby.map((other) => <li key={other.id}><Link href={other.path}>{copy.h1(other)}<ArrowRight /></Link></li>)}</ul>
            </section>}
            <section className="sources">
              <h2>Check before you go</h2>
              <p>Fees, closures and access change. The DOC page for each place, current DOC alerts and signs on site take priority over this summary.</p>
              <ul>
                {guide && <li><Link href={articleHref(guide)}>{guide.title}<ArrowRight /></Link></li>}
                {related && <li><Link href={related.href}>{related.label}<ArrowRight /></Link></li>}
                {sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}<ArrowRight /></a></li>)}
              </ul>
            </section>
            <p className="hub-source"><Database aria-hidden="true" /> Department of Conservation data, CC BY 4.0. <Link href="/credits/#data-sources">Data credits</Link></p>
            <AppCta placement="hub" locale="en" eyebrow={kind === "freedom-camping" ? "Plan the stay in KiwiCamping" : "The full map is in KiwiCamping"} title={copy.ctaTitle(hub)} text={copy.ctaText(hub)} button="Download app" />
          </div>
        </div>
      </article>
    </main>
    <Footer pageKey={hubPageKey(hub.id)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema(hub)) }} />
  </>;
}

/** National figures for an index page, from product-facts.json. */
function indexFacts(kind: BuiltHubKind): { label: string; value: string }[] {
  const c = productFacts.categories;
  const n = (value: number) => value.toLocaleString("en-NZ");
  if (kind === "camping") return [
    { label: "DOC campsites in the data", value: n(c.docCampsites.total) },
    { label: "Free", value: n(c.docCampsites.fee.free) },
    { label: "With a fee", value: n(c.docCampsites.fee.paid) },
    { label: "Bookable online through DOC", value: n(c.docCampsites.bookable) },
    { label: "Campervan access", value: n(c.docCampsites.campervanAccess) },
  ];
  if (kind === "huts") return [
    { label: "DOC huts in the data", value: n(c.docHuts.total) },
    { label: "Bunks", value: n(c.docHuts.bunks) },
    { label: "Free", value: n(c.docHuts.fee.free) },
    { label: "With a fee", value: n(c.docHuts.fee.paid) },
    { label: "Must be booked through DOC", value: n(c.docHuts.bookable) },
  ];
  const notices = c.docFreedomCampingNotices;
  return [
    { label: "Current DOC notices", value: n(notices.current) },
    ...Object.entries(notices.currentByType).map(([type, count]) => ({ label: `${type} (current)`, value: n(count) })),
    { label: "Historic notices (no longer current)", value: n(notices.historic) },
    { label: "DOC districts with notices", value: n(notices.districts) },
  ];
}

export function hubIndexMetadataFor(kind: BuiltHubKind) {
  return { title: hubCopy[kind].indexMetaTitle, description: hubCopy[kind].indexIntro };
}

export function HubIndexPage({ kind }: { kind: BuiltHubKind }) {
  const copy = hubCopy[kind];
  const listed = listedHubs(kind);
  const groups = [...new Set(listed.map((hub) => hub.operationsRegion ?? hub.island ?? ""))];
  const asOf = productFacts.categories[kind === "camping" ? "docCampsites" : kind === "huts" ? "docHuts" : "docFreedomCampingNotices"].asOf;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: copy.indexTitle, item: `${SITE_URL}${sitePath(`/${kind}`)}` }] },
      { "@type": "ItemList", name: copy.indexTitle, numberOfItems: listed.length, itemListElement: listed.map((hub, index) => ({ "@type": "ListItem", position: index + 1, name: copy.h1(hub), url: `${SITE_URL}${hub.path}` })) },
    ],
  };
  return <>
    <Header />
    <main {...mainData({ kind: "hub", locale: "en", slug: kind })}>
      <article className="article-page hub-page">
        <header className="article-header">
          <p className="eyebrow">Department of Conservation data</p>
          <h1>{copy.indexTitle}</h1>
          <p>{copy.indexIntro}</p>
        </header>
        <div className="article-layout hub-layout">
          <div className="article-body">
            <p className="hub-source"><Database aria-hidden="true" /> Department of Conservation data, CC BY 4.0. <Link href="/credits/#data-sources">Data credits</Link></p>
            <HubMap points={listed.flatMap((hub) => hub.points)} label={`Map of the ${copy.noun} in the regions listed below`} caption="Positions rounded to about 100 m. Coastline and lakes: Natural Earth." />
            {groups.map((group) => <section key={group} className="hub-directory">
              <h2>{group}</h2>
              <ul>{listed.filter((hub) => (hub.operationsRegion ?? hub.island ?? "") === group).map((hub) => <li key={hub.id}><Link href={hub.path}><strong>{hub.name}</strong><ArrowRight /></Link></li>)}</ul>
            </section>)}
            <AppCta placement="hub" locale="en" eyebrow="The full map is in KiwiCamping" title={`Every DOC ${kind === "freedom-camping" ? "campsite and hut" : copy.nounSingular} on one map`} text={`KiwiCamping maps DOC campsites, huts and bookable holiday parks across New Zealand with fees, facilities and DOC alerts. ${PASS_LINE}`} button="Download app" />
          </div>
        </div>
      </article>
    </main>
    <Footer pageKey={hubIndexPageKey(kind)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
