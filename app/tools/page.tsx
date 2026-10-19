import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, CircleDollarSign } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CurrencyConverter } from "@/components/currency-converter";
import { FuelCalculator } from "@/components/fuel-calculator";
import { DriveTimeCalculator } from "@/components/drive-time-calculator";
import { TankDurationCalculator } from "@/components/tank-duration-calculator";
import { CampsiteCostCalculator } from "@/components/campsite-cost-calculator";
import { alternatesFor } from "@/lib/seo";
import { mainData } from "@/lib/analytics";
import { toolStrings } from "@/lib/source-strings";
import { toolIds, toolPath, toolScript } from "@/lib/tools";

const index = toolStrings.index;
export const metadata: Metadata = { title: index.metaTitle, description: index.metaDescription, alternates: { canonical: "/tools/", languages: alternatesFor("tools") } };

/**
 * The tools index. Every calculator still works here, and each one also has its own page with the
 * formula, a worked example and its FAQ (/tools/<slug>/), which is what the index links to.
 */
export default function ToolsPage() {
  // One inline script for the five calculators. It is marked data-static-tools so the static export
  // keeps it, and each handler is guarded so a missing element cannot break the others.
  const script = toolScript(toolIds, "en-NZ", toolStrings);

  return <><Header/><main {...mainData({ kind: "tools", locale: "en" })}>
    <section className="page-hero tools-hero">
      <p className="eyebrow">Useful numbers</p>
      <h1>Road trip tools.<br/>No mystery maths.</h1>
      <p>Quick planning calculators for New Zealand prices, distances and capacity. Every assumption stays visible so you can replace it with the number that fits your route.</p>
    </section>
    <section className="tools-shell">
      <CurrencyConverter/>
      <FuelCalculator/>
      <DriveTimeCalculator/>
      <TankDurationCalculator/>
      <CampsiteCostCalculator/>
      <section className="tools-reading tools-directory">
        <div><Calculator/><h2>{index.toolsTitle}</h2></div>
        <div><p>{index.toolsText}</p><ul>{toolIds.map((id) => <li key={id}><Link href={toolPath("en", id)} className="text-link">{toolStrings[id].h1} <ArrowRight/></Link></li>)}</ul></div>
      </section>
      <section className="tools-reading">
        <div><CircleDollarSign/><h2>Build the budget from current benchmarks.</h2></div>
        <p>The tools calculate exactly what you enter. Our cost guides explain where the starting figures came from, when they were checked and what can change the final price.</p>
        <Link href="/guides/" className="text-link">Explore cost guides <ArrowRight/></Link>
      </section>
      <section className="tools-note"><Calculator/><p>These calculators are planning aids, not live booking, fuel-station or foreign-exchange quotes. Tank estimates assume roughly 11 litres of fresh water and 9 litres of grey water per person per day, which varies with showering and cooking. Confirm current prices before purchase.</p></section>
    </section>
  </main><Footer pageKey="tools"/><script data-static-tools dangerouslySetInnerHTML={{__html:script}}/></>;
}
