import { Header } from "@/components/header";
import { PlaceMap } from "@/components/places/place-map";
import { Footer } from "@/components/footer";
import { uiStrings } from "@/lib/source-strings";
import { GuideEndCta } from "@/components/guide-cta";
import { Crumbs, LinkList } from "@/components/places/listing";
import { places, placeStatePath } from "@/lib/places";
import { PlaceCards } from "@/components/places/place-cards";
import { mainData } from "@/lib/analytics";
import { hubIndexPageKey, hubPageKey } from "@/lib/routes/hubs";
import { SITE_URL, articles, articleHref, sitePath } from "@/lib/site";
import { builtHubs, hubGate, listedHubs, proseFor, type BuiltHubKind, type Hub } from "@/lib/hubs";
import { hubSource } from "@/lib/hub-strings";
import { regionIntros } from "@/lib/region-intros";
import { hubGuides, nearbyHubs, noteSources } from "@/lib/hub-regions";

/**
 * The data hubs: a DOC region's campsites or huts, or a DOC district's freedom-camping notices.
 *
 * Every number on the page comes from the hub's record (lib/data/hubs.json); the prose is hand-written
 * from the same record and checked by scripts/audit-hubs.mjs. The full map stays in the app, so the
 * call to action points to the app.
 */

const guideTitle = (slug: string) => articles.find((article) => article.slug === slug);

type KindCopy = {
  indexTitle: string; indexMetaTitle: string; indexIntro: string; noun: string; nounSingular: string;
  h1: (hub: Hub) => string; metaTitle: (hub: Hub) => string; metaDescription: (hub: Hub) => string; intro: (hub: Hub) => string;
  mapLabel: (hub: Hub) => string; listTitle: string; ctaTitle: (hub: Hub) => string; ctaText: (hub: Hub) => string;
};


export const hubCopy: Record<BuiltHubKind, KindCopy> = {
  camping: {
    indexTitle: "DOC campsites by region",
    indexMetaTitle: "DOC Campsites by Region: Fees, Facilities and Access",
    indexIntro: "Department of Conservation campsites region by region: how many there are, what they charge, how you reach them and which facilities they have, from DOC's own data.",
    noun: "campsites", nounSingular: "campsite",
    h1: (hub) => `DOC campsites in ${hub.name}`,
    metaTitle: (hub) => `DOC Campsites in ${hub.name}: ${hub.placeCount} Sites, Fees, Facilities`,
    metaDescription: (hub) => `DOC campsites and holiday parks in ${hub.name}: which are free, fees, campervan or walk-in access, facilities and a map.`,
    intro: (hub) => `Department of Conservation campsites and holiday parks in the ${hub.name} region, with photos, fees, access and facilities.`,
    mapLabel: (hub) => `Map of ${hub.placeCount} DOC campsites in ${hub.name}`,
    listTitle: "Campsites",
    ctaTitle: (hub) => `All ${hub.placeCount} campsites on one map`,
    ctaText: (hub) => `KiwiCamping shows every DOC campsite in ${hub.name} on the map with fees, facilities and DOC alerts, and puts the ones you pick into a trip with distances and dates.`,
  },
  huts: {
    indexTitle: "DOC huts by region",
    indexMetaTitle: "DOC Huts by Region: Bunks, Fees and Bookings",
    indexIntro: "Department of Conservation backcountry huts region by region: how many there are, how many bunks, which are free, which must be booked and what they have inside, from DOC's own data.",
    noun: "huts", nounSingular: "hut",
    h1: (hub) => `DOC huts in ${hub.name}`,
    metaTitle: (hub) => `DOC Huts in ${hub.name}: ${hub.placeCount} Huts, Bunks and Fees`,
    metaDescription: (hub) => `DOC huts in ${hub.name}: bunks, free and paid huts, which need booking, heating and water, with a map.`,
    intro: (hub) => `Department of Conservation huts in the ${hub.name} region, with photos, bunks, fees and facilities.`,
    mapLabel: (hub) => `Map of ${hub.placeCount} DOC huts in ${hub.name}`,
    listTitle: "Huts",
    ctaTitle: (hub) => `All ${hub.placeCount} huts on one map`,
    ctaText: (hub) => `KiwiCamping shows every DOC hut in ${hub.name} on the map with bunks, fees and DOC alerts, next to the campsites and tracks around them.`,
  },
  "freedom-camping": {
    indexTitle: "Freedom camping notices on DOC land",
    indexMetaTitle: "Freedom Camping on DOC Land: Notices by District",
    indexIntro: "Where the Department of Conservation prohibits or restricts freedom camping on conservation land, district by district. These are DOC notices, not council bylaws: on council land the council's own rules apply.",
    noun: "notices", nounSingular: "notice",
    h1: (hub) => `Freedom camping notices on DOC land: ${hub.name}`,
    metaTitle: (hub) => `Freedom Camping on DOC Land, ${hub.name}: ${hub.placeCount} Notices`,
    metaDescription: (hub) => `Where DOC bans or restricts freedom camping on conservation land in its ${hub.name} district, with the conditions and a map.`,
    intro: (hub) => `Where freedom camping is banned or restricted on conservation land in DOC's ${hub.name} district.`,
    mapLabel: (hub) => `Map of ${hub.placeCount} DOC freedom camping notice areas in ${hub.name}`,
    listTitle: "Notice areas",
    ctaTitle: () => "Find somewhere you can stay",
    ctaText: (hub) => `KiwiCamping maps DOC campsites and bookable holiday parks across New Zealand, so you can find a place you are allowed to stay near ${hub.name}.`,
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

export function HubPage({ hub }: { hub: Hub }) {
  const kind = hub.kind as BuiltHubKind;
  const copy = hubCopy[kind];
  const prose = proseFor(hub);
  const intro = kind === "freedom-camping" ? undefined : regionIntros[hub.slug];
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
    .sort((a, b) => Number(a.type !== "doc_campsite") - Number(b.type !== "doc_campsite") || b.photoCount - a.photoCount || a.name.localeCompare(b.name)).slice(0, 5);

  return <>
    <Header />
    <main {...mainData({ kind: "hub", locale: "en", slug: hub.id })}>
      <div className="pl-wrap pl-index">
        <Crumbs trail={[{ name: "Home", path: "/" }, { name: kindLabel(kind), path: sitePath(`/${hub.kind}`) }, { name: hub.name, path: hub.path }]} />
        <header className="pl-header">
          <h1>{copy.h1(hub)}</h1>
          {intro && <p className="pl-intro">{intro}</p>}
        </header>
        <PlaceMap points={hub.points.map(([lat, lng]) => [lng, lat] as [number, number])} label={copy.h1(hub)} />
        {listed.length > 0 && <section className="pl-block">
          <h2>{copy.listTitle}</h2>
          <PlaceCards places={listed} more={{ href: placeStatePath({ slug: hub.slug }), label: `Explore all places in ${hub.name}` }} />
        </section>}
        {kind === "freedom-camping" && hub.places.length > 0 && <LinkList title={copy.listTitle} links={hub.places.map((place) => ({ href: place.url ?? hub.path, label: place.name, external: Boolean(place.url) }))} />}
        {kind === "freedom-camping" && <section className="pl-block pl-notes">
          <h2>DOC notices, not council bylaws</h2>
          <p>These notices cover public conservation land managed by the Department of Conservation. On land a district or city council manages, that council&apos;s own freedom camping rules apply, and signs at the site always take priority.</p>
        </section>}
        {kind === "freedom-camping" && <LinkList title="Council rules" links={[...(prose?.councils ?? []).map((council) => ({ href: council.url, label: council.label, external: true })), ...(councilGuide ? [{ href: articleHref(councilGuide), label: councilGuide.title }] : [])]} />}
        <section className="pl-block pl-notes">
          <h2>{notes.notesTitle}</h2>
          <p>{notes.noteRules}</p>
          <p>{notes.noteSeason}</p>
          <p>Official sources: {noteSources[kind].map((source, index) => <span key={source.url}>{index > 0 && ", "}<a href={source.url} rel="noopener">{source.name}</a></span>)}</p>
        </section>
        <LinkList title={`Guides for ${hub.name}`} links={guides.map((item) => ({ href: articleHref(item), label: item.title }))} />
        <LinkList title={kind === "freedom-camping" ? "Nearby districts" : "Nearby regions"} links={nearby.map((other) => ({ href: other.path, label: copy.h1(other) }))} />
        <LinkList title="Before you go" links={[
          ...(guide ? [{ href: articleHref(guide), label: guide.title }] : []),
          ...(related ? [{ href: related.href, label: related.label }] : []),
          ...sources.map((source) => ({ href: source.url, label: source.label, external: true })),
        ]} />
        <GuideEndCta reuse={false} locale="en" placement="hub" label={uiStrings.download} eyebrow={uiStrings.takeRoad} title={uiStrings.savePlanTitle} text={uiStrings.savePlanText} />
      </div>
    </main>
    <Footer pageKey={hubPageKey(hub.id)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema(hub)) }} />
  </>;
}

export function hubIndexMetadataFor(kind: BuiltHubKind) {
  return { title: hubCopy[kind].indexMetaTitle, description: hubCopy[kind].indexIntro };
}

export function HubIndexPage({ kind }: { kind: BuiltHubKind }) {
  const copy = hubCopy[kind];
  const listed = listedHubs(kind);
  const groups = [...new Set(listed.map((hub) => hub.operationsRegion ?? hub.island ?? ""))];
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
      <div className="pl-wrap pl-index">
        <Crumbs trail={[{ name: "Home", path: "/" }, { name: copy.indexTitle, path: sitePath(`/${kind}`) }]} />
        <header className="pl-header"><h1>{copy.indexTitle}</h1></header>
        <PlaceMap points={listed.flatMap((hub) => hub.points.map(([lat, lng]) => [lng, lat] as [number, number]))} label={copy.indexTitle} precision={1} />
        {groups.map((group) => <LinkList key={group} title={group} links={listed.filter((hub) => (hub.operationsRegion ?? hub.island ?? "") === group).map((hub) => ({ href: hub.path, label: hub.name }))} />)}
        <GuideEndCta reuse={false} locale="en" placement="hub" label={uiStrings.download} eyebrow={uiStrings.takeRoad} title={uiStrings.savePlanTitle} text={uiStrings.savePlanText} />
      </div>
    </main>
    <Footer pageKey={hubIndexPageKey(kind)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
