import { Fuel } from "lucide-react";
import { toolStrings, type ToolStrings } from "@/lib/source-strings";
import { defaultOutput, toolDefaults } from "@/lib/tools";

export function FuelCalculator({ copy = toolStrings, tag = "en-NZ" }: { copy?: ToolStrings; tag?: string }) {
  const t = copy.fuel, v = toolDefaults.fuel;
  return <section className="tool-card" data-fuel-tool>
    <div className="tool-heading"><Fuel/><div><p className="eyebrow">{t.cardEyebrow}</p><h2>{t.cardTitle}</h2></div></div>
    <p>{t.cardText}</p>
    <div className="converter-grid">
      <label><span>{t.labelDistance}</span><input data-fuel-distance inputMode="decimal" defaultValue={v.distance} /></label>
      <label><span>{t.labelConsumption}</span><input data-fuel-consumption inputMode="decimal" defaultValue={v.consumption} /></label>
      <label><span>{t.labelPrice}</span><input data-fuel-price inputMode="decimal" defaultValue={v.price} /></label>
    </div>
    <output className="tool-output" data-fuel-output>{defaultOutput("fuel", tag, copy)}</output>
  </section>;
}
