import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Database } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import credits from "@/lib/image-credits.json";
import dataMeta from "@/lib/data/hubs.meta.json";
import { articleHref, articles, isScheduled } from "@/lib/site";
import { mainData } from "@/lib/analytics";

type Credit = { slug: string; subject: string; creator: string; licence: string; licenceUrl?: string; sourceUrl?: string };
type DataSource = { licence: string; name: string; attribution?: string; changes?: string; licenceUrl?: string; termsUrl?: string; sourceUrl?: string };
type DataFile = { source: string; read?: boolean; date?: string };

export const metadata: Metadata = {
  title: "Photo and data credits",
  description: "Attribution and licence details for every photograph used in the KiwiCamping guides, and for the Department of Conservation data behind the region pages.",
  // English only, so it advertises no language alternates.
  alternates: { canonical: "/credits/" },
};

// Keyed by slug, but linked by the article's own canonical path: fifteen guides are published
// at their original .html URL rather than under /guides/.
const bySlug = new Map(articles.map((article) => [article.slug, article]));

/**
 * One page carrying every image attribution.
 *
 * The article pages used to link their photo credit to this repository on GitHub, which put a follow
 * link off-site on every one of them and asked a reader to go and read a markdown table on a code
 * host. The records come from the same notes in docs/, via scripts/build-image-credits.mjs.
 */
/**
 * The data sources the site republishes facts from, straight from the export's own record
 * (lib/data/hubs.meta.json), so the attribution can never drift from what was actually used.
 * Excluded sources are not listed: nothing from them appears on the site.
 */
const dataFiles = Object.entries(dataMeta.files as Record<string, DataFile>);
const dataSources = Object.entries(dataMeta.sources as Record<string, DataSource>)
  .filter(([, source]) => source.licence !== "exclude")
  .map(([key, source]) => ({ key, ...source, files: dataFiles.filter(([, file]) => file.source === key).map(([name]) => name).sort() }));

const licenceLabel = (licence: string) => licence === "cc-by-4.0" ? "CC BY 4.0" : "Facts only";

export default function CreditsPage() {
  // A scheduled guide's photograph is credited from the day the guide is published.
  const rows = (credits as Credit[]).filter((row) => !isScheduled(row.slug));
  return <>
    <Header />
    <main {...mainData({ kind: "legal", locale: "en" })}>
      <section className="page-hero">
        <p className="eyebrow"><Camera size={13} /> Photo credits</p>
        <h1>Whose photographs<br /><em>these are.</em></h1>
        <p>Every article photograph and the licence it is used under. Most come from Wikimedia Commons and are resized and centre-cropped to 1600 by 900 pixels for the article headers and cards; those changes are adaptations. Follow a source link for the full attribution and terms.</p>
      </section>
      <section className="content-shell">
        <div className="price-table-wrap">
          <table className="price-table credits-table">
            <thead><tr><th scope="col">Guide</th><th scope="col">Photograph</th><th scope="col">Creator</th><th scope="col">Licence</th></tr></thead>
            <tbody>
              {rows.map((row) => <tr key={row.slug} id={row.slug}>
                <th scope="row">
                  {bySlug.has(row.slug)
                    ? <Link href={articleHref(bySlug.get(row.slug)!)}>{bySlug.get(row.slug)!.title}</Link>
                    : row.slug}
                </th>
                <td>{row.sourceUrl ? <a href={row.sourceUrl}>{row.subject}</a> : row.subject}</td>
                <td>{row.creator}</td>
                <td>{row.licenceUrl ? <a href={row.licenceUrl}>{row.licence}</a> : row.licence}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </section>
      <section className="content-shell" id="data-sources">
        <p className="eyebrow"><Database size={13} /> Data sources</p>
        <h2>Where the place data comes from</h2>
        <p>Facts about DOC campsites, huts and freedom-camping notices on this website come from the public data below. Data as of {dataMeta.dataAsOf}, exported {dataMeta.exportDate}. Partner booking feeds and third-party directories used inside the app are not republished on this website.</p>
        <div className="hub-table-wrap">
          <table className="hub-table">
            <thead><tr><th scope="col">Source</th><th scope="col">Attribution</th><th scope="col">Licence</th><th scope="col">Datasets</th></tr></thead>
            <tbody>
              {dataSources.map((source) => <tr key={source.key}>
                <th scope="row">{source.sourceUrl ? <a href={source.sourceUrl}>{source.name}</a> : source.name}</th>
                <td>{source.attribution} {source.changes}</td>
                <td>{source.licenceUrl ? <a href={source.licenceUrl}>{licenceLabel(source.licence)}</a> : licenceLabel(source.licence)}{source.termsUrl ? <> (<a href={source.termsUrl}>terms</a>)</> : null}</td>
                <td>{source.files.join(", ")}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <p className="price-table-disclaimer">Coastline and lakes on the region maps: <a href="https://www.naturalearthdata.com/">Natural Earth</a>, public domain, simplified.</p>
      </section>
    </main>
    <Footer pageKey="credits" />
  </>;
}
