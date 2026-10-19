import Link from "next/link";
import { SUPPORT_MAILTO } from "@/lib/site";
import { appStoreUrl } from "@/lib/app-store";
import { BrandMark } from "./brand-mark";
import { ConsentBar, PrivacyChoicesLink } from "./consent-bar";
import { LanguageSwitcher } from "./language-switcher";

/** `pageKey` lets the language switcher link to this page in each language (see lib/routes.ts). */
export function Footer({ pageKey = "home" }: { pageKey?: string }) {
  return (<>
    <footer className="footer">
      <div className="footer-grid">
        <div><BrandMark /><p>Find 6,500+ New Zealand places offline, save the ones that matter and build complete road trips with routes, distance, dates, notes and to-dos.</p></div>
        <div><strong>Explore</strong><Link href="/guides/">Travel guides</Link><Link href="/tools/">Tools</Link><Link href="/#features">Features</Link></div>
        <div><strong>Help</strong><Link href="/support/">Support & FAQ</Link><a href={SUPPORT_MAILTO}>Contact</a></div>
        <div><strong>Get the app</strong><a href={appStoreUrl({ placement: "foot", locale: "en" })} data-cta="foot">Download app</a><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><PrivacyChoicesLink locale="en" /></div>
      </div>
      <LanguageSwitcher current="en" pageKey={pageKey} />
      <div className="footer-bottom"><span>© {new Date().getFullYear()} <a href="https://cntxtlabs.co/">Cntxt Labs</a></span><span>Made for the long way around New Zealand.</span></div>
    </footer>
    <ConsentBar locale="en" />
  </>);
}
