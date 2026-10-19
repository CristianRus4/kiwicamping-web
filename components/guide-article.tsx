import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadCard } from "@/components/download-card";
import { ArticleCard } from "@/components/article-card";
import { CoverImage } from "@/components/site-image";
import { SITE_URL, articleHref, type Article } from "@/lib/site";
import { relatedGuides } from "@/lib/related";
import { guidePageKey } from "@/lib/routes/guides";
import { articleSchema } from "@/lib/seo";
import { articleDates, formatArticleDate } from "@/lib/article-dates";
import { linkProse } from "@/lib/internal-links";
import { displayCurrencies, exchangeRateDate, formatNzdRange } from "@/lib/currency";
import { mainData } from "@/lib/analytics";
import { hubCopy } from "@/components/hub-page";
import { hubKinds, indexableHubs, listedHubs, type BuiltHubKind, type Hub } from "@/lib/hubs";

/** The indexable DOC data hubs a guide names, grouped by kind, in the order the guide lists them. */
function guideHubs(item: Article): { kind: BuiltHubKind; all: boolean; hubs: Hub[] }[] {
  const groups = new Map<BuiltHubKind, { kind: BuiltHubKind; all: boolean; hubs: Hub[] }>();
  for (const entry of item.hubs ?? []) {
    const kind = (hubKinds as readonly string[]).includes(entry) ? entry as BuiltHubKind : undefined;
    const picked = kind ? listedHubs(kind) : indexableHubs.filter((hub) => hub.id === entry);
    for (const hub of picked) {
      const hubKind = hub.kind as BuiltHubKind;
      const group = groups.get(hubKind) ?? { kind: hubKind, all: false, hubs: [] };
      if (kind) group.all = true;
      if (!group.hubs.some((existing) => existing.id === hub.id)) group.hubs.push(hub);
      groups.set(hubKind, group);
    }
  }
  return [...groups.values()];
}

export function GuideArticle({ item }: { item: Article }) {
  const related = relatedGuides(item);
  const hubGroups = guideHubs(item);
  const schema = articleSchema(item, `${SITE_URL}${articleHref(item)}`);
  // A date Google can see on the page, matching the one in the Article schema.
  const dates = articleDates(item.slug);

  return <>
    <Header />
    <main {...mainData({ kind: "guide", locale: "en", slug: item.slug, category: item.category })}>
      <article className="article-page">
        <div className="article-breadcrumb"><Link href="/guides/"><ArrowLeft />Guides</Link><span>{item.category}</span></div>
        <header className="article-header">
          <p className="eyebrow">{item.category} · {item.region}</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div>
            <span><Clock />{item.readTime} minute read</span>
            <span><MapPin />{item.places.length} places</span>
            {dates && <span><CalendarDays />Updated <time dateTime={dates.modified}>{formatArticleDate(dates.modified)}</time></span>}
          </div>
        </header>
        <figure className="article-hero-image">
          <CoverImage src={item.image} alt={item.imageAlt} priority sizes="(max-width: 1180px) 100vw, 1120px" />
          <figcaption className="article-photo-credit"><Link href={`/credits/#${item.slug}`}>Photo credits</Link></figcaption>
        </figure>
        <div className="article-layout">
          <div className="article-body">
            <p className="article-intro">{item.intro}</p>
            {item.priceTable && <section className="article-price-section">
              <span className="section-count">NZD</span>
              <h2>Price table in 10 currencies</h2>
              <p>{item.priceTable.note}</p>
              <div className="price-table-meta"><strong>Prices checked {formatArticleDate(item.priceTable.asOf)}</strong><span>Conversions use RBNZ rates from {formatArticleDate(exchangeRateDate)}.</span></div>
              <div className="price-table-wrap">
                <table className="price-table">
                  <thead><tr><th scope="col">Item</th>{displayCurrencies.map((currency) => <th scope="col" key={currency}>{currency}</th>)}</tr></thead>
                  <tbody>{item.priceTable.rows.map((row) => <tr key={row.label}><th scope="row"><strong>{row.label}</strong>{row.unit && <span>{row.unit}</span>}</th>{displayCurrencies.map((currency) => <td key={currency}>{formatNzdRange(row.nzdLow, row.nzdHigh, currency)}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <p className="price-table-disclaimer">Currency figures are mechanical conversions of the NZD benchmark, not card or cash quotes. Banks and payment providers apply their own rates and fees.</p>
            </section>}
            {item.comparison && <section className="article-price-section article-comparison-section">
              <span className="section-count">VS</span>
              <h2>{item.comparison.caption}</h2>
              <p>{item.comparison.note}</p>
              <div className="price-table-meta"><strong>Checked {item.comparison.asOf}</strong></div>
              <div className="price-table-wrap">
                <table className="price-table comparison-table">
                  <thead><tr><th scope="col">{item.comparison.rowHeader ?? "App"}</th>{item.comparison.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
                  <tbody>{item.comparison.rows.map((row) => <tr key={row.label}><th scope="row"><strong>{row.label}</strong></th>{row.cells.map((cell, index) => <td key={item.comparison!.columns[index]}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </section>}
            {item.sections.map((part, index) => <section key={part.heading} id={`step-${index + 1}`}>
              <span className="section-count">{String(index + 1).padStart(2, "0")}</span>
              <h2>{part.heading}</h2>
              {/* The only HTML here is the anchor linkProse inserted; the prose itself is escaped. */}
              {linkProse(part.body, item.slug).map((paragraph, position) => <p key={part.body[position]} dangerouslySetInnerHTML={{ __html: paragraph }} />)}
              {part.tips && <div className="article-tips"><strong>Keep in mind</strong><ul>{part.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul></div>}
            </section>)}
            {item.places.length > 0 && <section>
              <span className="section-count">MAP</span>
              <h2>Places along the way</h2>
              <div className="place-chips">{item.places.map((place) => <span key={place}><MapPin />{place}</span>)}</div>
            </section>}
            {item.sources && <section className="sources">
              <h2>Check before you go</h2>
              <p>Rules and conditions change. Recheck the official source and the page for your exact park or campground before departure.</p>
              <ul>{item.sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}<ArrowRight /></a></li>)}</ul>
            </section>}
            {item.faq && <section className="article-faq">
              <span className="section-count">FAQ</span>
              <h2>Common questions</h2>
              {item.faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </section>}
            <div className="article-end-cta">
              <div><p className="eyebrow">Take it on the road</p><h2>Save the stops. Plan the whole trip.</h2><p>Build an ordered route from saved places, calculate the distance and keep dates, notes and to-dos attached.</p></div>
              <DownloadCard compact />
            </div>
          </div>
          <aside>
            <div className="article-side-card"><p className="eyebrow">Plan it in KiwiCamping</p><h3>Save the places. Build the route.</h3><p>Order the stops, see the distance and keep notes and to-dos with the trip.</p><DownloadCard compact /></div>
            <nav className="on-this-page" aria-label="Page contents"><strong>On this page</strong>{item.sections.map((part) => <span key={part.heading}>{part.heading}</span>)}</nav>
          </aside>
        </div>
      </article>
      {hubGroups.length > 0 && <section className="related-section guide-hubs"><p className="eyebrow">From DOC&apos;s own data</p><h2>Browse by region</h2>{hubGroups.map((group) => <div className="hub-directory" key={group.kind}><h3><Link href={`/${group.kind}/`}>{hubCopy[group.kind].indexTitle}</Link></h3><ul>{group.hubs.map((hub) => <li key={hub.id}><Link href={hub.path}><strong>{group.all ? hub.name : hubCopy[group.kind].h1(hub)}</strong><span>{hub.placeCount} {hubCopy[group.kind].noun}</span><ArrowRight /></Link></li>)}</ul></div>)}</section>}
      <section className="related-section"><p className="eyebrow">Keep planning</p><h2>Related guides</h2><div className="article-grid">{related.map((candidate) => <ArticleCard article={candidate} key={candidate.slug} />)}</div></section>
    </main>
    <Footer pageKey={guidePageKey(item.slug)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
