import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { BrandMark } from "./brand-mark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><BrandMark /><p>Find 4,500+ places, save the ones that matter and build complete New Zealand road trips with routes, distance, notes and to-dos.</p></div>
        <div><strong>Explore</strong><Link href="/guides">Travel guides</Link><Link href="/tools">Tools</Link><Link href="/#features">Features</Link></div>
        <div><strong>Help</strong><Link href="/support">Support & FAQ</Link><a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a><a href="https://github.com/CristianRus4/kiwicamping-web/tree/main/docs">Photo credits</a></div>
        <div><strong>Get the app</strong><a href={APP_STORE_URL}>Download app</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <nav className="language-nav" aria-label="Languages"><Link href="/" aria-current="page">English</Link><Link href="/de">Deutsch</Link><Link href="/es">Español</Link><Link href="/fr">Français</Link><Link href="/it">Italiano</Link><Link href="/nl">Nederlands</Link><Link href="/pt">Português</Link></nav>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} KiwiCamping</span><span>Made for the long way around New Zealand.</span></div>
    </footer>
  );
}
