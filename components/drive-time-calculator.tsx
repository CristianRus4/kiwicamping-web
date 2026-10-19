import { Clock } from "lucide-react";
import { toolStrings, type ToolStrings } from "@/lib/source-strings";
import { defaultOutput, toolDefaults } from "@/lib/tools";

export function DriveTimeCalculator({ copy = toolStrings, tag = "en-NZ" }: { copy?: ToolStrings; tag?: string }) {
  const t = copy.drive, v = toolDefaults.drive;
  return <section className="tool-card" data-drive-tool>
    <div className="tool-heading"><Clock/><div><p className="eyebrow">{t.cardEyebrow}</p><h2>{t.cardTitle}</h2></div></div>
    <p>{t.cardText}</p>
    <div className="converter-grid">
      <label><span>{t.labelDistance}</span><input data-drive-distance inputMode="decimal" defaultValue={v.distance} /></label>
      <label><span>{t.labelRoadType}</span><select data-drive-speed defaultValue={String(v.speed)}><option value="85">{t.roadMotorway}</option><option value="70">{t.roadHighway}</option><option value="60">{t.roadWinding}</option><option value="45">{t.roadNarrow}</option></select></label>
      <label><span>{t.labelStops}</span><input data-drive-stops inputMode="numeric" defaultValue={v.stops} /></label>
    </div>
    <output className="tool-output" data-drive-output>{defaultOutput("drive", tag, copy)}</output>
  </section>;
}
