import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LocalizedFooter, LocalizedHeader } from "@/components/localized-site";
import { AppCta } from "@/components/app-cta";
import { mainData } from "@/lib/analytics";
import { FuelCalculator } from "@/components/fuel-calculator";
import { DriveTimeCalculator } from "@/components/drive-time-calculator";
import { CampsiteCostCalculator } from "@/components/campsite-cost-calculator";
import { CurrencyConverter } from "@/components/currency-converter";
import { TankDurationCalculator } from "@/components/tank-duration-calculator";
import { toolStrings, type ToolStrings } from "@/lib/source-strings";
import { copyValues, fill, intlLocale, toolCopy, toolGuides, toolIds, toolPath, toolSchema, toolScript, tools, toolsIndexPath, workedExample, type ToolId, type ToolPageLocale } from "@/lib/tools";

const calculators = { fuel: FuelCalculator, drive: DriveTimeCalculator, campsite: CampsiteCostCalculator, currency: CurrencyConverter, water: TankDurationCalculator };

/**
 * One calculator page: the tool, how it is calculated, a worked example with New Zealand defaults,
 * the assumptions, official sources, a short FAQ (with matching FAQPage markup), the guides it
 * belongs with, and the app call to action.
 */
export function ToolPage({ id, locale }: { id: ToolId; locale: ToolPageLocale }) {
  const { shared, tool, translated } = toolCopy(locale, id);
  // Translated copy has the English shape; only the literal types differ.
  const copy = (translated ? { ...toolStrings, shared, [id]: tool } : toolStrings) as ToolStrings;
  const tag = intlLocale(locale, id);
  const values = copyValues(tag);
  const Calculator = calculators[id];
  const guides = toolGuides(locale, id);
  const others = toolIds.filter((other) => other !== id);
  const sections = [
    { heading: shared.howTitle, body: <><ul className="tool-formula">{tool.formula.map((line) => <li key={line}><code>{line}</code></li>)}</ul><p>{tool.formulaNote}</p></> },
    { heading: shared.exampleTitle, body: <p>{workedExample(id, tag, copy)}</p> },
    { heading: shared.assumptionsTitle, body: <ul className="tool-assumptions">{tool.assumptions.map((line) => <li key={line}>{fill(line, values)}</li>)}</ul> },
  ];

  return <>
    {locale === "en" ? <Header /> : <LocalizedHeader locale={locale} />}
    <main {...mainData({ kind: "tool", locale, slug: tools[id].slug })}>
      <article className="article-page tool-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href={toolsIndexPath(locale)}><ArrowLeft />{shared.breadcrumbTools}</Link><span>{tool.eyebrow}</span></nav>
        <header className="article-header">
          <p className="eyebrow">{tool.eyebrow}</p>
          <h1>{tool.h1}</h1>
          <p>{fill(tool.intro, values)}</p>
        </header>
        <div className="tools-shell tool-single"><Calculator copy={copy} tag={tag} /></div>
        <div className="article-layout tool-layout">
          <div className="article-body">
            {sections.map((part, index) => <section key={part.heading}>
              <span className="section-count">{String(index + 1).padStart(2, "0")}</span>
              <h2>{part.heading}</h2>
              {part.body}
            </section>)}
            {tools[id].sources.length > 0 && <section className="sources">
              <h2>{shared.sourcesTitle}</h2>
              <ul>{tools[id].sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}<ArrowRight /></a></li>)}</ul>
            </section>}
            <section className="article-faq">
              <span className="section-count">FAQ</span>
              <h2>{shared.faqTitle}</h2>
              {tool.faq.map(([question, answer]) => <details key={question}><summary>{fill(question, values)}<span>+</span></summary><p>{fill(answer, values)}</p></details>)}
            </section>
            <section className="sources tool-guides">
              <h2>{shared.guidesTitle}</h2>
              <ul>{guides.map((guide) => <li key={guide.href}><Link href={guide.href}>{guide.title}<ArrowRight /></Link></li>)}</ul>
            </section>
            <section className="sources tool-guides">
              <h2>{shared.otherToolsTitle}</h2>
              <ul>{others.map((other) => <li key={other}><Link href={toolPath(locale, other)}>{toolCopy(locale, other).tool.h1}<ArrowRight /></Link></li>)}</ul>
            </section>
            <AppCta placement="tool" locale={locale} eyebrow={shared.ctaEyebrow} title={shared.ctaTitle} text={shared.ctaText} button={shared.ctaButton} />
          </div>
        </div>
      </article>
    </main>
    {locale === "en" ? <Footer /> : <LocalizedFooter locale={locale} />}
    <script data-static-tools dangerouslySetInnerHTML={{ __html: toolScript([id], tag, copy) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema(locale, id)) }} />
  </>;
}
