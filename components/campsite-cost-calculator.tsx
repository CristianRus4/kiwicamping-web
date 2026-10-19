import { Wallet } from "lucide-react";
import { toolStrings, type ToolStrings } from "@/lib/source-strings";
import { defaultOutput, toolDefaults } from "@/lib/tools";

export function CampsiteCostCalculator({ copy = toolStrings, tag = "en-NZ" }: { copy?: ToolStrings; tag?: string }) {
  const t = copy.campsite, v = toolDefaults.campsite;
  return <section className="tool-card" data-camp-tool>
    <div className="tool-heading"><Wallet/><div><p className="eyebrow">{t.cardEyebrow}</p><h2>{t.cardTitle}</h2></div></div>
    <p>{t.cardText}</p>
    <div className="converter-grid">
      <label><span>{t.labelAdults}</span><input data-camp-adults inputMode="numeric" defaultValue={v.adults} /></label>
      <label><span>{t.labelNights}</span><input data-camp-nights inputMode="numeric" defaultValue={v.nights} /></label>
      <label><span>{t.labelPerAdult}</span><input data-camp-per-person inputMode="decimal" defaultValue={v.perAdult} /></label>
      <label><span>{t.labelPerSite}</span><input data-camp-per-site inputMode="decimal" defaultValue={v.perSite} /></label>
    </div>
    <output className="tool-output" data-camp-output>{defaultOutput("campsite", tag, copy)}</output>
  </section>;
}
