import { FaApple } from "react-icons/fa6";
import { appStoreUrl, type CtaLocale, type CtaPlacement } from "@/lib/app-store";
import { QrCode } from "./qr-code";

export function DownloadCard({ compact = false, placement = "card", locale = "en" }: { compact?: boolean; placement?: CtaPlacement; locale?: CtaLocale }) {
  return (
    <div className={`download-card ${compact ? "download-card-compact" : ""}`}>
      {!compact && <QrCode locale={locale} label="QR code to download KiwiCamping from the App Store" />}
      <a className="store-button" href={appStoreUrl({ placement, locale })} data-cta={placement} aria-label="Download KiwiCamping for iOS">
        <FaApple aria-hidden="true" />
        <span>Download app</span>
      </a>
    </div>
  );
}
