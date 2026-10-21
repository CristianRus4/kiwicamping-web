import Link from "next/link";
import { ArrowLeft, ArrowRight, Database } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { LocalizedFooter, LocalizedHeader } from "@/components/localized-site";
import { HubMap } from "@/components/hub-map";
import { mainData } from "@/lib/analytics";
import { appStoreUrl } from "@/lib/app-store";
import { SITE_URL, sitePath } from "@/lib/site";
import { htmlLang, localeRoot, type LocaleCode } from "@/lib/locales";
import { localizedArticles } from "@/lib/localized";
import { factValue, listedHubs, proseFor, type BuiltHubKind, type Hub } from "@/lib/hubs";
import { hubIndexPageKey, hubPageKey } from "@/lib/routes/hubs";
import { fill, labelKey, localizeFactValue, localizeFee, term, type HubStrings } from "@/lib/hub-strings";
import { localizedHubPath, localizedHubs, localizedHubView, localizedIndexPath, type LocalizedHubView } from "@/lib/hubs-localized";
import productFacts from "@/lib/data/product-facts.json";

/**
 * One data hub in another language: the same facts, map, places and CTA as the English page
 * (components/hub-page.tsx), with its copy from the `hubs` namespace (lib/hub-strings.ts). When the
 * translation is not complete for this hub, the whole body is English and the page is noindex.
 * Place, park, region and council names are data and stay as DOC writes them.
 */

const hasPage = new Set(localizedHubs.map((hub) => hub.path));
const link = (strings: HubStrings, label: string) => strings.links[labelKey(label)] ?? label;

function Cta({ locale, t, eyebrow, title, text }: { locale: LocaleCode; t: HubStrings; eyebrow: string; title: string; text: string }) {
  return <div className="article-end-cta">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
    <div className="download-card download-card-compact">
      <a className="store-button" href={appStoreUrl({ placement: "hub", locale })} data-cta="hub" aria-label={t.common.downloadLabel}><FaApple aria-hidden="true" /><span>{t.common.download}</span></a>
    </div>
  </div>;
}

function PlaceDetail({ hub, place, view }: { hub: Hub; place: Hub["places"][number]; view: LocalizedHubView }) {
  const t = view.strings;
  if (hub.kind === "freedom-camping") return <>{place.conditions?.length ? place.conditions.map((item) => term(t, item)).join("; ") : t.common.noFreedomCamping}{place.areaHa ? ` · ${view.number(place.areaHa)} ha` : ""}</>;
  if (hub.kind === "huts") return <>{place.bunks ? fill(t.common.bunks, { count: view.number(place.bunks) }) : t.common.bunksNotListed}{place.facilities?.length ? ` · ${place.facilities.map((item) => term(t, item)).join(", ")}` : ""}</>;
  return <>{[...(place.access ?? []), ...(place.facilities ?? [])].map((item) => term(t, item)).join(", ")}</>;
}

export function LocalizedHubPage({ hub, locale }: { hub: Hub; locale: LocaleCode }) {
  const view = localizedHubView(locale, hub);
  const { strings: t, translated, number, date } = view;
  const kind = hub.kind as BuiltHubKind;
  const copy = t.kinds[kind];
  const prefix = localeRoot(locale);
  const values = { name: hub.name, count: number(hub.placeCount), pass: t.common.passLine };
  const paragraphs = t.prose[hub.id] ?? [];
  const english = proseFor(hub);
  const guide = localizedArticles(locale).find((article) => article.slug === hub.guide.slug);
  const councilGuide = localizedArticles(locale).find((article) => article.slug === "camping-rules-local-councils-new-zealand");
  const related = hub.related && hasPage.has(hub.related) ? { href: sitePath(`${prefix}${hub.related}`), label: fill(hub.kind === "camping" ? t.common.relatedHuts : t.common.relatedCampsites, { name: hub.name }) } : null;
  const sources = [...hub.officialLinks, ...(english?.sources ?? [])];
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

  return <>
    <LocalizedHeader locale={locale} />
    <main {...mainData({ kind: "hub", locale, slug: hub.id })} lang={translated ? undefined : "en"}>
      <article className="article-page hub-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href={indexPath}><ArrowLeft />{copy.indexTitle}</Link><span>{hub.operationsRegion ?? hub.island}</span></nav>
        <header className="article-header">
          <p className="eyebrow">{copy.indexTitle}</p>
          <h1>{fill(copy.h1, values)}</h1>
          <p>{fill(copy.intro, values)}</p>
        </header>
        <div className="article-layout hub-layout">
          <div className="article-body">
            <p className="hub-source"><Database aria-hidden="true" /> {fill(t.common.sourceLine, { date: date(hub.asOf) })} <Link href="/credits/#data-sources">{t.common.dataCredits}</Link></p>
            <HubMap points={hub.points} label={fill(copy.mapLabel, values)} caption={t.common.mapCaption} />
            <section>
              <span className="section-count">DATA</span>
              <h2>{fill(t.common.atAGlance, { name: hub.name })}</h2>
              <div className="hub-table-wrap"><table className="hub-table hub-facts"><tbody>{hub.facts.map((fact) => <tr key={fact.key}><th scope="row">{t.facts[labelKey(fact.label)] ?? fact.label}</th><td>{typeof fact.value === "number" ? number(fact.value) : localizeFactValue(t, fact.key, fact.value, date)}</td></tr>)}</tbody></table></div>
            </section>
            {kind === "freedom-camping" && <section className="hub-council">
              <h2>{t.common.councilTitle}</h2>
              <p>{t.common.councilText}</p>
              <ul>
                {(english?.councils ?? []).map((council) => <li key={council.url}><a href={council.url}>{link(t, council.label)}<ArrowRight /></a></li>)}
                {councilGuide && <li><Link href={sitePath(`${prefix}/guides/${councilGuide.slug}`)}>{councilGuide.title}<ArrowRight /></Link></li>}
              </ul>
            </section>}
            {paragraphs.length > 0 && <section className="hub-prose">
              <span className="section-count">01</span>
              <h2>{fill(copy.proseTitle, { name: hub.name })}</h2>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>}
            <section>
              <span className="section-count">{hub.places.length === hub.placeCount ? "ALL" : hub.places.length}</span>
              <h2>{copy.listTitle}</h2>
              {hub.places.length < hub.placeCount && <p>{fill(t.common.placesSome, { shown: hub.places.length, count: number(hub.placeCount), noun: copy.noun })} {kind === "freedom-camping" ? t.common.placesMoreFreedom : t.common.placesMoreApp}</p>}
              <div className="hub-table-wrap">
                <table className="hub-table hub-places">
                  <thead><tr><th scope="col">{t.common.colName}</th><th scope="col">{kind === "freedom-camping" ? t.common.colNotice : t.common.colType}</th><th scope="col">{kind === "freedom-camping" ? t.common.colConditions : kind === "huts" ? t.common.colHutDetail : t.common.colCampDetail}</th>{kind !== "freedom-camping" && <th scope="col">{t.common.colFee}</th>}</tr></thead>
                  <tbody>{hub.places.map((place) => <tr key={place.id}>
                    <th scope="row">{place.url ? <a href={place.url}>{place.name}</a> : place.name}<span>{kind === "freedom-camping" ? (place.noticeNumber ? fill(t.common.notice, { number: place.noticeNumber }) : "") : place.locality}{place.open ? "" : ` · ${t.common.markedClosed}`}</span></th>
                    <td>{term(t, place.type)}</td>
                    <td><PlaceDetail hub={hub} place={place} view={view} /></td>
                    {kind !== "freedom-camping" && <td>{place.fee ? localizeFee(t, place.fee) : ""}</td>}
                  </tr>)}</tbody>
                </table>
              </div>
            </section>
            <section className="sources">
              <h2>{t.common.checkTitle}</h2>
              <p>{t.common.checkText}</p>
              <ul>
                {guide && <li><Link href={sitePath(`${prefix}/guides/${guide.slug}`)}>{guide.title}<ArrowRight /></Link></li>}
                {related && <li><Link href={related.href}>{related.label}<ArrowRight /></Link></li>}
                {sources.map((source) => <li key={source.url}><a href={source.url}>{link(t, source.label)}<ArrowRight /></a></li>)}
              </ul>
            </section>
            <Cta locale={locale} t={t} eyebrow={kind === "freedom-camping" ? t.common.ctaEyebrowFreedom : t.common.ctaEyebrowMap} title={fill(copy.ctaTitle, values)} text={fill(copy.ctaText, values)} />
          </div>
        </div>
      </article>
    </main>
    <LocalizedFooter locale={locale} pageKey={hubPageKey(hub.id)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}

/** National figures for an index page, from product-facts.json, labelled in the page's language. */
function indexFacts(kind: BuiltHubKind, view: LocalizedHubView): { label: string; value: string }[] {
  const c = productFacts.categories;
  const n = view.number;
  const label = (english: string) => view.strings.index[labelKey(english)] ?? english;
  if (kind === "camping") return [
    { label: label("DOC campsites in the data"), value: n(c.docCampsites.total) },
    { label: label("Free"), value: n(c.docCampsites.fee.free) },
    { label: label("With a fee"), value: n(c.docCampsites.fee.paid) },
    { label: label("Bookable online through DOC"), value: n(c.docCampsites.bookable) },
    { label: label("Campervan access"), value: n(c.docCampsites.campervanAccess) },
  ];
  if (kind === "huts") return [
    { label: label("DOC huts in the data"), value: n(c.docHuts.total) },
    { label: label("Bunks"), value: n(c.docHuts.bunks) },
    { label: label("Free"), value: n(c.docHuts.fee.free) },
    { label: label("With a fee"), value: n(c.docHuts.fee.paid) },
    { label: label("Must be booked through DOC"), value: n(c.docHuts.bookable) },
  ];
  const notices = c.docFreedomCampingNotices;
  return [
    { label: label("Current DOC notices"), value: n(notices.current) },
    ...Object.entries(notices.currentByType).map(([type, count]) => ({ label: fill(view.strings.common.currentType, { type: term(view.strings, type) }), value: n(count) })),
    { label: label("Historic notices (no longer current)"), value: n(notices.historic) },
    { label: label("DOC districts with notices"), value: n(notices.districts) },
  ];
}

export function LocalizedHubIndex({ kind, locale }: { kind: BuiltHubKind; locale: LocaleCode }) {
  const view = localizedHubView(locale);
  const { strings: t, translated, number, date } = view;
  const copy = t.kinds[kind];
  const listed = listedHubs(kind);
  const groups = [...new Set(listed.map((hub) => hub.operationsRegion ?? hub.island ?? ""))];
  const asOf = productFacts.categories[kind === "camping" ? "docCampsites" : kind === "huts" ? "docHuts" : "docFreedomCampingNotices"].asOf;
  const prefix = localeRoot(locale);
  const indexPath = localizedIndexPath(kind, locale);
  const extraKey = kind === "huts" ? "bunks" : kind === "camping" ? "free" : "prohibited";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t.common.home, item: `${SITE_URL}${sitePath(prefix || "/")}` }, { "@type": "ListItem", position: 2, name: copy.indexTitle, item: `${SITE_URL}${indexPath}` }] },
      { "@type": "ItemList", name: copy.indexTitle, numberOfItems: listed.length, itemListElement: listed.map((hub, index) => ({ "@type": "ListItem", position: index + 1, name: fill(copy.h1, { name: hub.name, count: number(hub.placeCount) }), url: `${SITE_URL}${localizedHubPath(hub, locale)}` })) },
    ],
  };
  return <>
    <LocalizedHeader locale={locale} />
    <main {...mainData({ kind: "hub", locale, slug: kind })} lang={translated ? undefined : "en"}>
      <article className="article-page hub-page">
        <header className="article-header">
          <p className="eyebrow">{t.common.indexEyebrow}</p>
          <h1>{copy.indexTitle}</h1>
          <p>{copy.indexIntro}</p>
        </header>
        <div className="article-layout hub-layout">
          <div className="article-body">
            <p className="hub-source"><Database aria-hidden="true" /> {fill(t.common.sourceLine, { date: date(asOf) })} <Link href="/credits/#data-sources">{t.common.dataCredits}</Link></p>
            <HubMap points={listed.flatMap((hub) => hub.points)} label={fill(t.common.indexMapLabel, { noun: copy.noun })} caption={t.common.mapCaption} />
            <section>
              <span className="section-count">DATA</span>
              <h2>{t.common.nzAtAGlance}</h2>
              <div className="hub-table-wrap"><table className="hub-table hub-facts"><tbody>{indexFacts(kind, view).map((fact) => <tr key={fact.label}><th scope="row">{fact.label}</th><td>{fact.value}</td></tr>)}</tbody></table></div>
            </section>
            {groups.map((group) => <section key={group} className="hub-directory">
              <h2>{group}</h2>
              <ul>{listed.filter((hub) => (hub.operationsRegion ?? hub.island ?? "") === group).map((hub) => {
                const extra = factValue(hub, extraKey);
                return <li key={hub.id}><Link href={localizedHubPath(hub, locale)}><strong>{hub.name}</strong><span>{number(hub.placeCount)} {copy.noun}{extra !== undefined ? ` · ${fill(copy.directoryExtra, { value: typeof extra === "number" ? number(extra) : extra })}` : ""}</span><ArrowRight /></Link></li>;
              })}</ul>
            </section>)}
            <Cta locale={locale} t={t} eyebrow={t.common.ctaEyebrowMap} title={copy.indexCtaTitle} text={fill(t.common.indexCtaText, { pass: t.common.passLine })} />
          </div>
        </div>
      </article>
    </main>
    <LocalizedFooter locale={locale} pageKey={hubIndexPageKey(kind)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
