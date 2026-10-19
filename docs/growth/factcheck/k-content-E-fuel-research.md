# NZ fuel research for new-zealand-road-trip-fuel-cost-2026 (checked 20 October 2026)

Method note: mbie.govt.nz HTML pages, nzta.govt.nz and transport.govt.nz are behind Incapsula bot protection and returned blank/blocked pages to every fetch (curl, WebFetch, Playwright). The MBIE data CSV itself downloaded fine and was read directly. Stats NZ and legislation.govt.nz pages were read directly. Items that depend on a blocked page are marked UNCONFIRMED.

## 1. Latest weekly national average retail price (MBIE)

Source file (official, downloaded 20 Oct 2026, 35,190 data rows, 2.9 MB):
https://www.mbie.govt.nz/assets/Data-Files/Energy/Weekly-fuel-price-monitoring/weekly-table.csv
(linked from https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/weekly-fuel-price-monitoring ; the exact CSV path was taken from MBIE's data dictionary via search and confirmed to download as a live file).

Latest row: week code 2026w41, CSV Date field 2026-10-09 (a Friday), status "Provisional". Under the same convention as the page's old figure (see below), this is ISO week 5-11 October 2026, i.e. week ending Sunday 11 October 2026.

| Fuel | Board price (advertised, NZD/L) | Adjusted retail price (NZD/L) |
|---|---|---|
| Regular 91 petrol | 3.544 (354.4 c/L) | 3.506 (350.6 c/L) |
| Diesel | 3.238 (323.8 c/L) | 3.209 (320.9 c/L) |

Prior weeks (board price, c/L): petrol 2 Oct 347.0, 25 Sep 338.3, 18 Sep 319.7, 11 Sep 306.0; diesel 2 Oct 319.9, 25 Sep 311.0, 18 Sep 289.9, 11 Sep 274.8. Prices have risen sharply for four weeks.

Definitions (UNCONFIRMED against the live MBIE page, taken from search-result excerpts of MBIE's methodology and data dictionary, and consistent with the CSV): "Board price" = national average of advertised pump prices at service stations; "Adjusted retail price" = board price adjusted for loyalty/discount schemes (consumers pay slightly less). The existing page's phrase "representative national board price" corresponds to the Board price series.

What the diesel figure includes: MBIE's published diesel price is the pump price including GST and the fuel taxes/levies (excise/ETS/GST columns exist in the CSV), but does NOT include Road User Charges. MBIE states Road User Charges are not included in the price of diesel (source: MBIE data notes as quoted in search excerpt, UNCONFIRMED on the live page; the CSV carries no RUC variable). Verify "price includes taxes" directly in the CSV: variables per fuel are Importer cost, Price excluding tax, ETS, GST, Board price, Adjusted retail price, Importer margin, Importer margin trend (units NZD c/L).

Stale benchmark check: the page's "$2.96/L on 26 July 2026" equals the CSV row dated 2026-07-24 (week 2026w30): regular petrol Board price 295.73 c/L (= $2.96). So that figure was the week ending Sunday 26 July, and it is now stale: the latest week is $3.54 (about 20 percent higher, +58.6 c/L). The page's own numbers are therefore unsupported as "current".

## 2. Monthly series January to October 2026 (computed from the CSV)

Averaging: arithmetic mean of weekly national values whose CSV Date (the Friday of the MBIE week) falls in the calendar month. n = number of weeks. NZD per litre. Provisional values for the latest weeks may be revised. MBIE revised some series (population weighting) in January 2026, and the CSV reflects the revised figures.

Board price (advertised):

| Month | n | Regular 91 | Diesel |
|---|---|---|---|
| Jan | 5 | 2.593 | 1.910 |
| Feb | 4 | 2.558 | 1.880 |
| Mar | 4 | 3.002 | 2.622 |
| Apr | 4 | 3.436 | 3.686 |
| May | 5 | 3.271 | 3.236 |
| Jun | 4 | 3.163 | 2.908 |
| Jul | 5 | 2.977 | 2.512 |
| Aug | 4 | 3.026 | 2.708 |
| Sep | 4 | 3.161 | 2.864 |
| Oct (2 wks: 2 and 9 Oct) | 2 | 3.507 | 3.218 |

Adjusted retail price (after discounts):

| Month | Regular 91 | Diesel |
|---|---|---|
| Jan | 2.564 | 1.900 |
| Feb | 2.529 | 1.870 |
| Mar | 2.973 | 2.612 |
| Apr | 3.399 | 3.659 |
| May | 3.234 | 3.208 |
| Jun | 3.125 | 2.879 |
| Jul | 2.940 | 2.483 |
| Aug | 2.989 | 2.679 |
| Sep | 3.123 | 2.835 |
| Oct (2 wks) | 3.470 | 3.190 |

Alternative bucketing (by Sunday week-ending = Date + 2 days, board price): petrol Jan 2.599, Feb 2.562, Mar 2.913, Apr 3.436, May 3.271, Jun 3.163, Jul 2.966, Aug 3.026, Sep 3.161, Oct 3.507; diesel Jan 1.916, Feb 1.882, Mar 2.474, Apr 3.686, May 3.236, Jun 2.908, Jul 2.475, Aug 2.698, Sep 2.864, Oct 3.218. Only Jan, Mar, Jul and Aug differ materially (because of weeks straddling month ends).

Price shock context: the Middle East conflict began late February 2026; the weekly table shows Regular 91 board price peaked around 3.51 (April) and diesel around 3.84 (April), then eased to a July low (petrol 2.94, diesel 2.43 weekly lows) before the September-October rise. Source for the conflict context: MBIE page https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-statistics/weekly-fuel-price-monitoring/impacts-of-the-2026-middle-east-conflict-on-weekly-fuel-monitoring (seen only via search excerpt, UNCONFIRMED in detail).

## 3. Stats NZ claim: "petrol prices up 20.1 percent in the June 2026 quarter"

VERIFIED (true as stated, for the CPI quarterly change). Source: Stats NZ, Consumers price index: June 2026 quarter, released 21 July 2026: https://www.stats.govt.nz/information-releases/consumers-price-index-june-2026-quarter/ . Key facts text: "Within the 1.5 percent rise in the CPI in the June 2026 quarter, higher prices were recorded for: petrol, up 20.1 percent". The same release gives annual change: petrol up 27.5 percent; other vehicle fuels and lubricants up 47.7 percent for the quarter and 71.0 percent annually.

Caveat: the claim is now dated. The September 2026 quarter CPI is due 22 October 2026 (per Stats NZ release calendar, UNCONFIRMED on the calendar page) and is not yet published. Also, the page's remark that MBIE "noted unusual volatility" is consistent with MBIE's Middle East conflict page.

Correct latest Stats NZ petrol/diesel movement: Selected price indexes: September 2026, released 16 October 2026: https://www.stats.govt.nz/information-releases/selected-price-indexes-september-2026/ (headline article: https://www.stats.govt.nz/news/petrol-and-diesel-prices-rise-in-september/ ).
- Petrol: +6.4 percent in September 2026 vs August 2026 (monthly); +24.3 percent vs September 2025 (annual).
- Diesel: +7.8 percent monthly; +55.8 percent annual.
Earlier months for context: August 2026 SPI https://www.stats.govt.nz/information-releases/selected-price-indexes-august-2026/ (petrol +2.0 monthly, +17.9 annual; diesel +8.6 monthly, +45.8 annual, per search excerpt). June 2026 SPI https://www.stats.govt.nz/information-releases/selected-price-indexes-june-2026/ : petrol -4.2 monthly, +23.6 annual; diesel -12.1 monthly (annual not read).

## 4. Diesel cheaper at the pump, plus RUC

"Diesel is cheaper per litre at the pump": TRUE as of the latest week, but NOT true throughout 2026. Evidence from the CSV (board price): diesel was cheaper than regular 91 in every week from January to March and from 15 May onwards, but diesel was DEARER than petrol in six weeks: 3 Apr (355.1 vs 343.7), 10 Apr (383.0 vs 350.6), 17 Apr (383.8 vs 345.9), 24 Apr (352.6 vs 334.1), 1 May (333.0 vs 326.2), 8 May (327.4 vs 326.8). Current gap, week 9 Oct: diesel is 30.6 c/L below petrol (323.8 vs 354.4). The page should say "usually cheaper, currently about 30 cents a litre cheaper" rather than imply a constant.

"Diesel vehicles pay RUC on top": TRUE. Diesel pump price excludes RUC (see item 1). Rate source: Road User Charges (Rates) Regulations 2015 (LI 2015/87), Schedule 1, version as at 6 August 2026: https://legislation.govt.nz/secondary-legislation/pco-drafted/2015/87/en/latest/ . Type 1 (powered vehicle with 2 axles, RUC weight not more than 3,500 kg): $76 per 1,000 km including GST. Schedule 1 was replaced with effect from 1 July 2020 (Road User Charges (Rates) Amendment Regulations 2020, LI 2020/73), which set that $76 rate; the Light Electric RUC Vehicles Amendment Act 2024 amended item 1 and inserted type 12 (plug-in hybrid, $38 per 1,000 km) from 1 April 2024. I found no rate change to $76 since 1 July 2020 in the current consolidated text. Heavier 2-axle vehicles: more than 3,500 kg up to 6,000 kg is $82 per 1,000 km (relevant to some large motorhomes).
NZTA's own rates page (https://www.nzta.govt.nz/vehicles/road-user-charges/ruc-rates-and-transaction-fees ) could not be read (bot-blocked), so NZTA's wording and any transaction fees are UNCONFIRMED; search excerpts of that page agree on $76 per 1,000 km. A $76 per 1,000 km charge is about 7.6 c/km, equivalent to about 69 c/L for a diesel vehicle doing 9 L/100 km; this is my arithmetic, not an official figure.

Official policy note (UNCONFIRMED, third-party excerpt only): no announced date to move petrol cars onto RUC; do not state any such change.

## 5. Is coasting in neutral illegal in NZ?

Answer: NO, I found no NZ rule that makes coasting in neutral an offence.
- Searched the full text of the Land Transport (Road User) Rule 2004, version as at 1 October 2026 (https://www.legislation.govt.nz/regulation/public/2004/0427/latest/whole.html ): zero occurrences of "neutral", "coast", "out of gear" or "freewheel".
- Searched the full text of the Land Transport Act 1998, version as at 4 September 2026 (https://www.legislation.govt.nz/act/public/1998/0110/latest/whole.html ): no occurrence of neutral/coasting/out of gear (only "headgear" in a helmet standard).
- Road Code: NZTA Road Code pages could not be fetched (bot-blocked). Via search excerpts, the Road Code and Heavy Vehicle Road Code advise selecting the correct (lower) gear before descending steep hills, but no excerpt prohibits coasting. Whether the general Road Code says "do not coast" is UNCONFIRMED. Search for a US-style statute only found US states (e.g. West Virginia, New York), which are not NZ law.
- Practical consequence: coasting is discouraged advice (loss of engine braking, less control on steep descents), and a driver who loses control could still be charged under general careless/dangerous driving provisions, but it is not a specific offence. The page's wording "illegal in effect" is not supportable; suggest "not recommended on descents because you lose engine braking, and it saves little or no fuel in modern cars".

## Verdict summary for edits to the page
1. Replace "$2.96 per litre on 26 July 2026" with the latest MBIE week (board price petrol $3.54, diesel $3.24, week ending 11 October 2026 [CSV date 9 Oct], provisional).
2. The "June 2026 quarter, petrol up 20.1 percent" claim is correct but old; add the September 2026 monthly movement (petrol +6.4 percent month, +24.3 percent year; diesel +7.8 and +55.8).
3. "Diesel is cheaper per litre" holds now but was reversed in April to early May 2026; state it with a date.
4. RUC: $76 per 1,000 km (type 1, up to 3,500 kg, GST incl.), in the 2015 Regulations since 1 July 2020; heavier 2-axle motorhomes pay more (up to 6,000 kg: $82).
5. Remove or reword "coasting in neutral... illegal in effect".
6. The "price table" rows (45, 110, 360 litres at 2.96) all need recomputing: at 3.544 they become 159.5, 389.8, 1275.8 (before rounding choices); my arithmetic from the board price.
