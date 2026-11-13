import { APP_ID, APP_STORE_URL, APPLE_PROVIDER_TOKEN } from "@/lib/site";

/**
 * Where on the site a store link sits. Each one becomes its own App Store Connect campaign
 * (`ct=w_<placement>_<locale>`), so downloads can be traced to the button that earned them.
 *
 * hdr header · hero home hero · card download card · stick sticky mobile bar · foot footer ·
 * inl inline in prose · tool tool page · hub data hub · sb Smart App Banner · qr QR code ·
 * dl the /download redirect · llms llms.txt · listicle "best apps" and "alternatives" comparison
 * guides (their in-article and end CTAs) · ig, tt, fb social bio links opened from Instagram, TikTok or
 * Facebook (lib/social.ts) · ans the download line right after a page's opening answer (components/answer-cta.tsx) ·
 * intro the app sentence at the end of a guide's first paragraph (components/intro-cta.tsx) ·
 * place the store button on a place page · trip the store button on a trip shared from the app (/trip/)
 */
export const ctaPlacements = ["hdr", "hero", "card", "stick", "foot", "inl", "tool", "hub", "sb", "qr", "dl", "llms", "listicle", "ig", "tt", "fb", "ans", "intro", "place", "trip"] as const;
export type CtaPlacement = (typeof ctaPlacements)[number];

/** `en` for the English site, otherwise the locale's URL segment (`de`, `zh-hans`, ...). */
export type CtaLocale = string;

/**
 * App Store Connect accepts campaign tokens of up to 30 characters (the longest today,
 * `w_stick_zh-hans`, is 15). Anything longer is refused here rather than silently truncated there.
 */
export const CAMPAIGN_TOKEN_MAX = 30;
export const campaignTokenPattern = /^w_[a-z]+_[a-z0-9-]+$/;

/** The campaign token for one placement on one edition of the site, e.g. `w_hero_de`. */
export function campaignToken(placement: CtaPlacement, locale: CtaLocale = "en"): string {
  const token = `w_${placement}_${locale}`;
  if (!campaignTokenPattern.test(token) || token.length > CAMPAIGN_TOKEN_MAX) throw new Error(`Invalid App Store campaign token "${token}"`);
  return token;
}

/**
 * The store URL for a visible link. With no provider token configured it is the plain listing URL,
 * because a `ct` without a `pt` is ignored by App Store Connect and only adds noise.
 */
export function appStoreUrl({ placement, locale = "en" }: { placement: CtaPlacement; locale?: CtaLocale }, providerToken: string = APPLE_PROVIDER_TOKEN): string {
  const ct = campaignToken(placement, locale);
  if (!providerToken) return APP_STORE_URL;
  return `${APP_STORE_URL}?pt=${providerToken}&ct=${ct}&mt=8`;
}

/**
 * The Smart App Banner's meta content. `affiliate-data` carries the campaign so banner installs are
 * attributed like any other link; it is omitted when no provider token is configured. Place pages pass
 * their absolute URL as `appArgument`, so the app opens that place from the banner, even after install.
 */
export function smartBannerContent(locale: CtaLocale = "en", providerToken: string = APPLE_PROVIDER_TOKEN, appArgument?: string): string {
  const ct = campaignToken("sb", locale);
  const argument = appArgument ? `, app-argument=${appArgument}` : "";
  return providerToken ? `app-id=${APP_ID}, affiliate-data=pt=${providerToken}&ct=${ct}${argument}` : `app-id=${APP_ID}${argument}`;
}
