/**
 * Links to AussieCamps (aussiecamps.app), the sister site for Australia.
 *
 * A guide whose subject has a twin on AussieCamps ends one paragraph with a sentence that names it,
 * such as "the AussieCamps guide to beer prices in Australia". That phrase becomes a link to the twin
 * through the same selection as the guide-to-guide links (lib/internal-links.ts), so it is carried
 * into en.json as `<a data-guide="aussiecamps-…">` and a translation keeps it like any other link.
 *
 * Keys start with `aussiecamps-` so they never collide with a guide slug on this site. One phrase per
 * twin, and each phrase names AussieCamps, which is the only place the content audit lets the brand
 * appear in guide prose (scripts/audit-content.mjs).
 */
export const SISTER_SITE = { name: "AussieCamps", url: "https://aussiecamps.app/" } as const;

export const sisterLinks: Readonly<Record<string, { pattern: RegExp; url: string }>> = {
  "aussiecamps-alcohol-coffee-drink-prices-australia": { pattern: /\bAussieCamps guide to beer prices in Australia\b/, url: "https://aussiecamps.app/guides/alcohol-coffee-drink-prices-australia/" },
  "aussiecamps-cigarette-prices-australia": { pattern: /\bAussieCamps guide to cigarette prices in Australia\b/, url: "https://aussiecamps.app/guides/cigarette-prices-australia/" },
  "aussiecamps-smoking-vaping-rules-australia": { pattern: /\bAussieCamps guide to smoking and vaping rules in Australia\b/, url: "https://aussiecamps.app/guides/smoking-vaping-rules-australia/" },
  "aussiecamps-where-to-buy-cigarettes-vapes-australia": { pattern: /\bAussieCamps guide to buying cigarettes and vapes in Australia\b/, url: "https://aussiecamps.app/guides/where-to-buy-cigarettes-vapes-australia/" },
};

export const isSisterLink = (key: string) => Object.hasOwn(sisterLinks, key);
