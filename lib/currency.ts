export const nzdRates = {
  NZD: 1,
  USD: 0.58715,
  GBP: 0.43475,
  AUD: 0.83185,
  JPY: 93.55945,
  EUR: 0.50885,
  CNY: 3.9608,
  KRW: 831.50,
  INR: 56.05,
  SGD: 0.7523,
} as const;

export type DisplayCurrency = keyof typeof nzdRates;
export const displayCurrencies = Object.keys(nzdRates) as DisplayCurrency[];
/** The RBNZ rates' publication date, ISO. Render it with formatArticleDate(exchangeRateDate, intl). */
export const exchangeRateDate = "2026-08-12";

const zeroDecimal = new Set<DisplayCurrency>(["JPY", "KRW"]);

export function convertNzd(amount: number, currency: DisplayCurrency) {
  return amount * nzdRates[currency];
}

/**
 * An amount in a currency, in the reader's own number format: "NZ$35" in English, "35 NZ$" in
 * German. Yen and won have no minor unit; other small amounts keep cents.
 */
export function formatMoney(amount: number, currency: DisplayCurrency, intl = "en-NZ") {
  return new Intl.NumberFormat(intl, {
    style: "currency",
    currency,
    maximumFractionDigits: zeroDecimal.has(currency) ? 0 : amount < 10 ? 2 : 0,
  }).format(amount);
}

/** @deprecated Use formatMoney; kept for the English pages' existing call sites. */
export const formatCurrency = (amount: number, currency: DisplayCurrency) => formatMoney(amount, currency);

export function formatNzdRange(low: number, high: number | undefined, currency: DisplayCurrency, intl = "en-NZ") {
  const convertedLow = convertNzd(low, currency);
  if (high === undefined || high === low) return formatMoney(convertedLow, currency, intl);
  return `${formatMoney(convertedLow, currency, intl)}–${formatMoney(convertNzd(high, currency), currency, intl)}`;
}
