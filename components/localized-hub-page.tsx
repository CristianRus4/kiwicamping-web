import { LocalizedFooter, LocalizedHeader } from "@/components/localized-site";
import { PlaceMap } from "@/components/places/place-map";
import { mainData } from "@/lib/analytics";
import { GuideEndCta } from "@/components/guide-cta";
import { Crumbs, LinkList } from "@/components/places/listing";
import { PlaceCards } from "@/components/places/place-cards";
import { places } from "@/lib/places";
import { SITE_URL, sitePath } from "@/lib/site";
import { englishFallback, htmlLang, localeRoot, type LocaleCode } from "@/lib/locales";
import { getTranslation, localizedArticles } from "@/lib/localized";
import { listedHubs, proseFor, type BuiltHubKind, type Hub } from "@/lib/hubs";
import { hubIndexPageKey, hubPageKey } from "@/lib/routes/hubs";
import { guidePageKey } from "@/lib/routes/guides";
import { hrefFor } from "@/lib/routes";
import { fill, labelKey, type HubStrings } from "@/lib/hub-strings";
import { localizedHubPath, localizedHubs, localizedHubView, localizedIndexPath } from "@/lib/hubs-localized";
import { hubGuides, nearbyHubs, noteSources } from "@/lib/hub-regions";

/**
 * One data hub in another language: the same facts, map, places and CTA as the English page
 * (components/hub-page.tsx), with its copy from the `hubs` namespace (lib/hub-strings.ts). When the
 * translation is not complete for this hub, the whole body is English and the page is noindex.
 * Place, park, region and council names are data and stay as DOC writes them.
 */

const localizedByPath = new Map(localizedHubs.map((hub) => [hub.path, hub]));
const link = (strings: HubStrings, label: string) => strings.links[labelKey(label)] ?? label;

export function LocalizedHubPage({ hub, locale }: { hub: Hub; locale: LocaleCode }) {
  const view = localizedHubView(locale, hub);
  const { strings: t, translated, number } = view;
  const kind = hub.kind as BuiltHubKind;
  const copy = t.kinds[kind];
  const prefix = localeRoot(locale);
  const values = { name: hub.name, count: number(hub.placeCount), pass: "" };
  const english = proseFor(hub);
  const guide = localizedArticles(locale).find((article) => article.slug === hub.guide.slug);
  const councilGuide = localizedArticles(locale).find((article) => article.slug === "camping-rules-local-councils-new-zealand");
  const relatedHub = hub.related ? localizedByPath.get(hub.related) : undefined;
  const related = relatedHub ? { href: hrefFor(hubPageKey(relatedHub.id), locale), label: fill(hub.kind === "camping" ? t.common.relatedHuts : t.common.relatedCampsites, { name: hub.name }) } : null;
  const sources = [...hub.officialLinks, ...(english?.sources ?? [])];
  const articlesHere = localizedArticles(locale);
  const guides = hubGuides(hub).flatMap((slug) => articlesHere.find((article) => article.slug === slug) ?? []);
  const nearby = nearbyHubs(hub).filter((other) => localizedByPath.has(other.path));
  const indexPath = localizedIndexPath(kind, locale);
  const url = `${SITE_URL}${localizedHubPath(hub, locale)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: t.common.home, item: `${SITE_URL}${sitePath(prefix || "/")}` },
        { "@type": "ListItem", position: 2, name: copy.indexTitle, item: `${SITE_URL}${indexPath}` },
        { "@type": "ListItem", position: 3, name: hub.name, item: url },
      ] },
      { "@type": "ItemList", "@id": `${url}#places`, name: fill(copy.h1, values), numberOfItems: hub.places.length, inLanguage: translated ? htmlLang(locale) : htmlLang("en"),
        itemListElement: hub.places.map((place, index) => ({ "@type": "ListItem", position: index + 1, name: place.name, ...(place.url ? { url: place.url } : {}) })) },
    ],
  };

  const ui = getTranslation(locale);
  const listed = kind === "freedom-camping" ? [] : places.filter((place) => place.stateSlug === hub.slug && (kind === "huts" ? place.type === "doc_hut" : place.type !== "doc_hut"))
    .sort((a, b) => b.photoCount - a.photoCount || a.name.localeCompare(b.name)).slice(0, 5);

  return <>
    <LocalizedHeader locale={locale} />
    <main {...mainData({ kind: "hub", locale, slug: hub.id })} {...englishFallback(translated)}>
      <div className="pl-wrap pl-index">
        <Crumbs trail={[{ name: t.common.home, path: sitePath(prefix || "/") }, { name: copy.indexTitle, path: indexPath }, { name: hub.name, path: localizedHubPath(hub, locale) }]} />
        <header className="pl-header"><h1>{fill(copy.h1, values)}</h1></header>
        <PlaceMap points={hub.points.map(([lat, lng]) => [lng, lat] as [number, number])} label={fill(copy.mapLabel, values)} />
        {listed.length > 0 && <section className="pl-block">
          <h2>{copy.listTitle}</h2>
          <PlaceCards places={listed} />
        </section>}
        {kind === "freedom-camping" && hub.places.length > 0 && <LinkList title={copy.listTitle} links={hub.places.map((place) => ({ href: place.url ?? localizedHubPath(hub, locale), label: place.name, external: Boolean(place.url) }))} />}
        {kind === "freedom-camping" && <LinkList title={t.common.councilTitle} links={[...(english?.councils ?? []).map((council) => ({ href: council.url, label: link(t, council.label), external: true })), ...(councilGuide ? [{ href: hrefFor(guidePageKey(councilGuide.slug), locale), label: councilGuide.title }] : [])]} />}
        <section className="pl-block pl-notes">
          <h2>{copy.notesTitle}</h2>
          <p>{copy.noteRules}</p>
          <p>{copy.noteSeason}</p>
          <p>{t.common.notesSources}: {noteSources[kind].map((source, index) => <span key={source.url}>{index > 0 && ", "}<a href={source.url} rel="noopener">{source.name}</a></span>)}</p>
        </section>
        <LinkList title={fill(t.common.guidesTitle, { name: hub.name })} links={guides.map((item) => ({ href: hrefFor(guidePageKey(item.slug), locale), label: item.title }))} />
        <LinkList title={kind === "freedom-camping" ? t.common.nearbyDistricts : t.common.nearbyRegions} links={nearby.map((other) => ({ href: hrefFor(hubPageKey(other.id), locale), label: fill(copy.h1, { name: other.name }) }))} />
        <LinkList title={t.common.checkTitle} links={[
          ...(guide ? [{ href: hrefFor(guidePageKey(guide.slug), locale), label: guide.title }] : []),
          ...(related ? [related] : []),
          ...sources.map((source) => ({ href: source.url, label: link(t, source.label), external: true })),
        ]} />
        <GuideEndCta reuse={false} locale={locale} placement="hub" label={ui.download} eyebrow={ui.takeRoad} title={ui.savePlanTitle} text={ui.savePlanText} />
      </div>
    </main>
    <LocalizedFooter locale={locale} pageKey={hubPageKey(hub.id)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}

export function LocalizedHubIndex({ kind, locale }: { kind: BuiltHubKind; locale: LocaleCode }) {
  const view = localizedHubView(locale);
  const { strings: t, translated, number } = view;
  const copy = t.kinds[kind];
  const listed = listedHubs(kind);
  const groups = [...new Set(listed.map((hub) => hub.operationsRegion ?? hub.island ?? ""))];
  const prefix = localeRoot(locale);
  const indexPath = localizedIndexPath(kind, locale);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t.common.home, item: `${SITE_URL}${sitePath(prefix || "/")}` }, { "@type": "ListItem", position: 2, name: copy.indexTitle, item: `${SITE_URL}${indexPath}` }] },
      { "@type": "ItemList", name: copy.indexTitle, numberOfItems: listed.length, itemListElement: listed.map((hub, index) => ({ "@type": "ListItem", position: index + 1, name: fill(copy.h1, { name: hub.name, count: number(hub.placeCount) }), url: `${SITE_URL}${hrefFor(hubPageKey(hub.id), locale)}` })) },
    ],
  };
  const ui = getTranslation(locale);
  return <>
    <LocalizedHeader locale={locale} />
    <main {...mainData({ kind: "hub", locale, slug: kind })} {...englishFallback(translated)}>
      <div className="pl-wrap pl-index">
        <Crumbs trail={[{ name: t.common.home, path: sitePath(prefix || "/") }, { name: copy.indexTitle, path: indexPath }]} />
        <header className="pl-header"><h1>{copy.indexTitle}</h1></header>
        <PlaceMap points={listed.flatMap((hub) => hub.points.map(([lat, lng]) => [lng, lat] as [number, number]))} label={fill(t.common.indexMapLabel, { noun: copy.noun })} precision={1} />
        {groups.map((group) => <LinkList key={group} title={group} links={listed.filter((hub) => (hub.operationsRegion ?? hub.island ?? "") === group).map((hub) => ({ href: hrefFor(hubPageKey(hub.id), locale), label: hub.name }))} />)}
        <GuideEndCta reuse={false} locale={locale} placement="hub" label={ui.download} eyebrow={ui.takeRoad} title={ui.savePlanTitle} text={ui.savePlanText} />
      </div>
    </main>
    <LocalizedFooter locale={locale} pageKey={hubIndexPageKey(kind)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
