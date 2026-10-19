import Link from "next/link";
import { analyticsEnabled } from "@/lib/analytics";
import { getConsent, type LocaleCode } from "@/lib/localized";
import { sitePath } from "@/lib/site";

/**
 * The analytics consent bar, rendered hidden. The analytics script (lib/analytics.ts) shows it to
 * visitors in a European time zone who have not chosen yet, and the footer's "Privacy choices" link
 * reopens it. Accept and Decline are the same size and weight on purpose.
 */
export function ConsentBar({ locale }: { locale: LocaleCode | "en" }) {
  if (!analyticsEnabled) return null;
  const text = getConsent(locale);
  const privacy = sitePath(locale === "en" ? "/privacy" : `/${locale}/privacy`);
  return <aside className="consent-bar" data-consent-bar hidden aria-label={text.label}>
    <p>{text.text} <Link href={privacy}>{text.policy}</Link></p>
    <div className="consent-actions"><button type="button" data-consent-decline>{text.decline}</button><button type="button" data-consent-accept>{text.accept}</button></div>
  </aside>;
}

/** The footer link that reopens the bar. Without JavaScript it simply opens the privacy policy. */
export function PrivacyChoicesLink({ locale }: { locale: LocaleCode | "en" }) {
  if (!analyticsEnabled) return null;
  return <a href={sitePath(locale === "en" ? "/privacy" : `/${locale}/privacy`)} data-consent-open>{getConsent(locale).choices}</a>;
}
