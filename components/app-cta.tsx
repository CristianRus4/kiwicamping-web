import { FaApple } from "react-icons/fa6";
import { appStoreUrl, type CtaLocale } from "@/lib/app-store";

/** The end-of-page call to action on tool and hub pages. The copy says plainly what needs the Pass. */
export function AppCta({ placement, locale, eyebrow, title, text, button }: { placement: "tool" | "hub"; locale: CtaLocale; eyebrow: string; title: string; text: string; button: string }) {
  return <div className="article-end-cta">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
    <div className="download-card download-card-compact">
      <a className="store-button" href={appStoreUrl({ placement, locale })} data-cta={placement} aria-label="Download KiwiCamping for iOS"><FaApple aria-hidden="true" /><span>{button}</span></a>
    </div>
  </div>;
}
