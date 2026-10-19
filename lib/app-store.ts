import { APP_ID, APP_STORE_URL, APPLE_PROVIDER_TOKEN } from "@/lib/site";

/**
 * Where on the site a store link sits. Each one becomes its own App Store Connect campaign
 * (`ct=w_<placement>_<locale>`), so downloads can be traced to the button that earned them.
 *
 * hdr header · hero home hero · card download card · stick sticky mobile bar · foot footer ·
 * inl inline in prose · tool tool page · hub data hub · sb Smart App Banner · qr QR code ·
 * dl the /download redirect · llms llms.txt
 */
export const ctaPlacements = ["hdr", "hero", "card", "stick", "foot", "inl", "tool", "hub", "sb", "qr", "dl", "llms"] as const;
export type CtaPlacement = (typeof ctaPlacements)[number];

/** `en` for the English site, otherwise the locale's URL segment (`de`, `zh-hans`, ...). */
export type CtaLocale = string;

/** App Store Connect truncates campaign tokens longer than 40 characters. */
const MAX_CAMPAIGN_TOKEN = 40;

/** The campaign token for one placement on one edition of the site, e.g. `w_hero_de`. */
export function campaignToken(placement: CtaPlacement, locale: CtaLocale): string {
  const token = `w_${placement}_${locale}`;
  if (!/^w_[a-z]+_[a-z-]+$/.test(token) || token.length > MAX_CAMPAIGN_TOKEN) throw new Error(`Invalid App Store campaign token "${token}"`);
  return token;
}

/**
 * The store URL for a visible link. With no provider token configured it is the plain listing URL,
 * because a `ct` without a `pt` is ignored by App Store Connect and only adds noise.
 */
export function appStoreUrl({ placement, locale }: { placement: CtaPlacement; locale: CtaLocale }): string {
  const ct = campaignToken(placement, locale);
  if (!APPLE_PROVIDER_TOKEN) return APP_STORE_URL;
  return `${APP_STORE_URL}?pt=${APPLE_PROVIDER_TOKEN}&ct=${ct}&mt=8`;
}

/**
 * The Smart App Banner's meta content. `affiliate-data` carries the campaign so banner installs are
 * attributed like any other link; it is omitted when no provider token is configured.
 */
export function smartBannerContent(locale: CtaLocale): string {
  const ct = campaignToken("sb", locale);
  return APPLE_PROVIDER_TOKEN ? `app-id=${APP_ID}, affiliate-data=pt=${APPLE_PROVIDER_TOKEN}&ct=${ct}` : `app-id=${APP_ID}`;
}
