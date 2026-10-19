import QRCode from "qrcode";
import { appStoreUrl, type CtaLocale } from "@/lib/app-store";

/**
 * The App Store QR code, drawn at build time as inline SVG.
 *
 * It used to be a PNG painted through a CSS mask, which encoded the bare listing URL forever and
 * could not carry a campaign. Generating it from `appStoreUrl()` means a scan is attributed to
 * `w_qr_<locale>` like every other link, and the code always matches the configured token.
 * One path element, with a module per unit, so it stays crisp at any size and costs about 2 KB.
 */
function modulePath(text: string): { size: number; d: string } {
  const { modules } = QRCode.create(text, { errorCorrectionLevel: "M" });
  const { size, data } = modules;
  let d = "";
  for (let y = 0; y < size; y += 1) {
    let x = 0;
    while (x < size) {
      if (!data[y * size + x]) { x += 1; continue; }
      // Merge each horizontal run of dark modules into one rectangle.
      let run = 1;
      while (x + run < size && data[y * size + x + run]) run += 1;
      d += `M${x} ${y}h${run}v1h-${run}z`;
      x += run;
    }
  }
  return { size, d };
}

/** Without a label the code is decorative: the store button beside it carries the same link. */
export function QrCode({ locale, label }: { locale: CtaLocale; label?: string }) {
  const url = appStoreUrl({ placement: "qr", locale });
  const { size, d } = modulePath(url);
  return <div className="qr-image" data-cta="qr" data-qr-url={url}>
    <svg viewBox={`0 0 ${size} ${size}`} shapeRendering="crispEdges" {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}><path d={d} fill="currentColor"/></svg>
  </div>;
}
