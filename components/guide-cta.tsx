import { FaApple } from "react-icons/fa6";
import { appStoreUrl, type CtaLocale, type CtaPlacement } from "@/lib/app-store";
import { modulePath } from "./qr-code";
import { OPEN_APP_LABEL } from "@/lib/open-app";

/** `openApp` (a page's app link, lib/open-app.ts) turns the store button into "Open in app". */
/** `qrFile`: draw the QR code from a cached file (the place pages' /places/qr-en.svg) instead of inline. */
type Copy = { locale: CtaLocale; placement: CtaPlacement; label: string; openApp?: string; qrFile?: string };

/**
 * The download boxes every guide carries in every language: one beside the article that stays in view
 * while reading, one inside the text and one at the end. On a desktop, hovering a store button narrows
 * it and grows it upward into the QR code (`ct=w_qr_<locale>`); the code is drawn once per page and
 * the others reuse it.
 */
const QR_ID = "guide-qr";

/** The QR code as a standalone SVG file, for `qrFile`: its path has the id `qr`. */
export function qrSvgFile(locale: CtaLocale) {
  const { d } = modulePath(appStoreUrl({ placement: "qr", locale }));
  return `<svg xmlns="http://www.w3.org/2000/svg"><path id="qr" d="${d}" fill="currentColor"/></svg>\n`;
}

function QrCode({ locale, reuse, file }: { locale: CtaLocale; reuse: boolean; file?: string }) {
  const { size, d } = modulePath(appStoreUrl({ placement: "qr", locale }));
  return <svg className="qr-morph-code" viewBox={`0 0 ${size} ${size}`} focusable="false" shapeRendering="crispEdges">{file ? <use href={`${file}#qr`} /> : reuse ? <use href={`#${QR_ID}`} /> : <path id={QR_ID} d={d} fill="currentColor" />}</svg>;
}

function StoreButton({ locale, placement, label, openApp }: Copy) {
  return <a className="store-button" href={appStoreUrl({ placement, locale })} data-cta={placement} data-open-app={openApp}><FaApple aria-hidden="true" /><span>{openApp ? OPEN_APP_LABEL : label}</span></a>;
}

/** The store button; on a desktop, hovering it morphs it into the QR code with the label kept below. */
export function StoreWithQr({ reuse = false, ...copy }: Copy & { reuse?: boolean }) {
  return <div className="store-qr">
    <StoreButton {...copy} />
    <div className="qr-morph" aria-hidden="true"><QrCode locale={copy.locale} reuse={reuse} file={copy.qrFile} /><span className="qr-morph-label"><FaApple />{copy.openApp ? OPEN_APP_LABEL : copy.label}</span></div>
  </div>;
}

export function GuideSideCard({ eyebrow, title, ...copy }: Copy & { eyebrow: string; title: string }) {
  return <div className="article-side-card"><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><StoreWithQr {...copy} /></div>;
}

/**
 * The end box of a translated guide and of the place pages (English guides end with the screenshot box,
 * components/context-cta.tsx). `reuse` borrows the side box's QR code; a page without one draws its own.
 */
export function GuideEndCta({ eyebrow, title, text, reuse = true, ...copy }: Copy & { eyebrow: string; title: string; text: string; reuse?: boolean }) {
  return <div className="article-end-cta">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
    <StoreWithQr {...copy} reuse={reuse} />
  </div>;
}

/**
 * The one download box inside a guide's text, in the end box's style but smaller: after the second
 * paragraph of the first section. Its text sits in <div>s, not <p>s, so the
 * similarity audit never reads it as prose.
 */
export function GuideMidCta({ eyebrow, title, ...copy }: Copy & { eyebrow: string; title: string }) {
  return <div className="article-mid-cta"><div><div className="eyebrow">{eyebrow}</div><div className="article-mid-cta-title">{title}</div></div><StoreWithQr {...copy} reuse /></div>;
}

/** The box sits in the first section, after its second paragraph (or its only one). */
export const midAfter = (paragraphs: number) => Math.min(2, paragraphs) - 1;
