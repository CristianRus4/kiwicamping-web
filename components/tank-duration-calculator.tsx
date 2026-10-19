import { Droplets } from "lucide-react";
import { toolStrings, type ToolStrings } from "@/lib/source-strings";
import { defaultOutput, toolDefaults } from "@/lib/tools";

export function TankDurationCalculator({ copy = toolStrings, tag = "en-NZ" }: { copy?: ToolStrings; tag?: string }) {
  const t = copy.water, v = toolDefaults.water;
  return <section className="tool-card" data-tank-tool>
    <div className="tool-heading"><Droplets/><div><p className="eyebrow">{t.cardEyebrow}</p><h2>{t.cardTitle}</h2></div></div>
    <p>{t.cardText}</p>
    <div className="converter-grid">
      <label><span>{t.labelFresh}</span><input data-tank-fresh inputMode="decimal" defaultValue={v.fresh} /></label>
      <label><span>{t.labelGrey}</span><input data-tank-grey inputMode="decimal" defaultValue={v.grey} /></label>
      <label><span>{t.labelPeople}</span><input data-tank-people inputMode="numeric" defaultValue={v.people} /></label>
    </div>
    <output className="tool-output" data-tank-output>{defaultOutput("water", tag, copy)}</output>
  </section>;
}
