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
  // Existing guides whose topic has a twin there (one sentence each, added 16 November 2026).
  "aussiecamps-australia-travel-cost-2026": { pattern: /\bAussieCamps guide to travel costs in Australia\b/, url: "https://aussiecamps.app/guides/australia-travel-cost-2026/" },
  "aussiecamps-australia-grocery-prices-2026": { pattern: /\bAussieCamps guide to grocery prices in Australia\b/, url: "https://aussiecamps.app/guides/australia-grocery-prices-2026/" },
  "aussiecamps-eating-out-australia-prices-2026": { pattern: /\bAussieCamps guide to eating out in Australia\b/, url: "https://aussiecamps.app/guides/eating-out-australia-prices-2026/" },
  "aussiecamps-accommodation-costs-australia-2026": { pattern: /\bAussieCamps guide to accommodation costs in Australia\b/, url: "https://aussiecamps.app/guides/accommodation-costs-australia-2026/" },
  "aussiecamps-australia-road-trip-fuel-cost-2026": { pattern: /\bAussieCamps guide to fuel costs in Australia\b/, url: "https://aussiecamps.app/guides/australia-road-trip-fuel-cost-2026/" },
  "aussiecamps-public-transport-costs-australia-2026": { pattern: /\bAussieCamps guide to public transport costs in Australia\b/, url: "https://aussiecamps.app/guides/public-transport-costs-australia-2026/" },
  "aussiecamps-domestic-flight-costs-australia-2026": { pattern: /\bAussieCamps guide to domestic flight costs in Australia\b/, url: "https://aussiecamps.app/guides/domestic-flight-costs-australia-2026/" },
  "aussiecamps-bus-train-costs-australia-2026": { pattern: /\bAussieCamps guide to bus and train costs in Australia\b/, url: "https://aussiecamps.app/guides/bus-train-costs-australia-2026/" },
  "aussiecamps-two-week-australia-trip-cost": { pattern: /\bAussieCamps guide to the cost of a two-week trip in Australia\b/, url: "https://aussiecamps.app/guides/two-week-australia-trip-cost/" },
  "aussiecamps-campervan-hire-cost-australia-2026": { pattern: /\bAussieCamps guide to campervan hire costs in Australia\b/, url: "https://aussiecamps.app/guides/campervan-hire-cost-australia-2026/" },
  "aussiecamps-holiday-park-prices-australia-2026": { pattern: /\bAussieCamps guide to holiday park prices in Australia\b/, url: "https://aussiecamps.app/guides/holiday-park-prices-australia-2026/" },
  "aussiecamps-working-holiday-road-trip-budget-australia-2026": { pattern: /\bAussieCamps guide to a working holiday road trip budget in Australia\b/, url: "https://aussiecamps.app/guides/working-holiday-road-trip-budget-australia-2026/" },
  "aussiecamps-campervan-road-trip-budget-australia": { pattern: /\bAussieCamps guide to a campervan road trip budget in Australia\b/, url: "https://aussiecamps.app/guides/campervan-road-trip-budget-australia/" },
  "aussiecamps-best-camping-app-australia": { pattern: /\bAussieCamps guide to the best camping apps in Australia\b/, url: "https://aussiecamps.app/guides/best-camping-app-australia/" },
  "aussiecamps-best-fuel-price-apps-australia": { pattern: /\bAussieCamps guide to fuel price apps in Australia\b/, url: "https://aussiecamps.app/guides/best-fuel-price-apps-australia/" },
  "aussiecamps-mosquitoes-march-flies-camping-australia": { pattern: /\bAussieCamps guide to mosquitoes and march flies in Australia\b/, url: "https://aussiecamps.app/guides/mosquitoes-march-flies-camping-australia/" },
  "aussiecamps-campfires-camping-australia": { pattern: /\bAussieCamps guide to campfire rules in Australia\b/, url: "https://aussiecamps.app/guides/campfires-camping-australia/" },
  "aussiecamps-driving-in-australia-overseas-licence": { pattern: /\bAussieCamps guide to driving on an overseas licence in Australia\b/, url: "https://aussiecamps.app/guides/driving-in-australia-overseas-licence/" },
  "aussiecamps-best-dump-point-toilet-apps-australia": { pattern: /\bAussieCamps guide to dump point and toilet apps in Australia\b/, url: "https://aussiecamps.app/guides/best-dump-point-toilet-apps-australia/" },
  "aussiecamps-best-road-trip-planner-apps-australia": { pattern: /\bAussieCamps guide to road trip planner apps in Australia\b/, url: "https://aussiecamps.app/guides/best-road-trip-planner-apps-australia/" },
};

export const isSisterLink = (key: string) => Object.hasOwn(sisterLinks, key);
