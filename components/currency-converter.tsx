import { ArrowRightLeft } from "lucide-react";
import { displayCurrencies } from "@/lib/currency";
import { toolStrings, type ToolStrings } from "@/lib/source-strings";
import { copyValues, defaultOutput, fill, toolDefaults } from "@/lib/tools";

export function CurrencyConverter({ copy = toolStrings, tag = "en-NZ" }: { copy?: ToolStrings; tag?: string }) {
  const t = copy.currency, v = toolDefaults.currency;
  return <section className="tool-card" data-currency-tool>
    <div className="tool-heading"><ArrowRightLeft/><div><p className="eyebrow">{t.cardEyebrow}</p><h2>{t.cardTitle}</h2></div></div>
    <p>{fill(t.cardText, copyValues(tag))}</p>
    <div className="converter-grid">
      <label><span>{t.labelAmount}</span><input data-currency-amount inputMode="decimal" defaultValue={v.amount} aria-label={t.labelAmount} /></label>
      <label><span>{t.labelFrom}</span><select data-currency-from defaultValue={v.from}>{displayCurrencies.map((currency) => <option value={currency} key={currency}>{currency}</option>)}</select></label>
      <label><span>{t.labelTo}</span><select data-currency-to defaultValue={v.to}>{displayCurrencies.map((currency) => <option value={currency} key={currency}>{currency}</option>)}</select></label>
    </div>
    <output className="tool-output" data-currency-output>{defaultOutput("currency", tag, copy)}</output>
  </section>;
}
