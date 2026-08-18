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
export const exchangeRateDate = "12 August 2026";

const zeroDecimal = new Set<DisplayCurrency>(["JPY", "KRW"]);

export function convertNzd(amount: number, currency: DisplayCurrency) {
  return amount * nzdRates[currency];
}

export function formatCurrency(amount: number, currency: DisplayCurrency) {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency,
    maximumFractionDigits: zeroDecimal.has(currency) ? 0 : amount < 10 ? 2 : 0,
  }).format(amount);
}

export function formatNzdRange(low: number, high: number | undefined, currency: DisplayCurrency) {
  const convertedLow = convertNzd(low, currency);
  if (high === undefined || high === low) return formatCurrency(convertedLow, currency);
  return `${formatCurrency(convertedLow, currency)}–${formatCurrency(convertNzd(high, currency), currency)}`;
}
