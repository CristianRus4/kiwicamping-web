# Lane: October new posts (KiwiCamping)

Worker: t3-ava-oct-posts. Branch `growth/k-oct-posts`. AU side: `growth/a-oct-posts`.

Baseline before changes (BUILD_DATE 2026-11-03): `npm run check` passes; 137 indexable per locale, 138 en.

## Chosen posts (Step 1)

| # | Slug (planned) | Query evidence | Owner check |
|---|---|---|---|
| K1 | `doc-hut-great-walk-booked-out` | REVIEW.md: AI fan-out queries on the DOC hub ("compare pricing for hut booking cancellation services in new zealand" 41i, "alert systems for booking department of conservation huts" 28i, "explain the payment process for securing great walks hut spots" 25i); "hut cancellation alerts questions" on `/guides/doc-huts-new-zealand-guide/` | `/doc-campsites-huts-guide.html` (page lane) gives the booking steps and a short sold-out note; `christmas-summer-camping-new-zealand-2026-27` says DOC keeps no waitlist. New page owns the sold-out problem: cancellation fees that drive releases, alert services, retry tactics, alternative huts and walks. Wanted inbound link from the DOC hub. |
| K2 | `school-public-holidays-new-zealand-2027` | Brief candidate (Waitangi Day, Auckland Anniversary); summer demand on holiday dates | Christmas guide owns summer 2026-27 dates. New page owns the 2027 calendar: term breaks, every public holiday and regional anniversary, and what each means for campsites. |
| K3 | `road-user-charges-campervan-new-zealand` | `/tools/fuel-cost-calculator/` queries "diesel vs petrol calculator nz" p38, "campervan fuel cost new zealand" p6; RUC mentioned on 7 guides but owned by none | `new-zealand-road-trip-fuel-cost-2026` owns petrol price and trip fuel cost. New page owns RUC: rates, hire company charges, diesel vs petrol, the planned move of petrol cars to RUC. |
| K4 | `easy-doc-huts-families-first-timers` | `/guides/doc-huts-new-zealand-guide/` queries "doc huts you can drive to", "doc bookable huts", "doc hut fees" | Hut guide is general. New page owns first-hut picks from DOC's own easy-access bookable hut list with fees and walk times. |

Dropped: fire season by region (the page lane is improving `/campfire-rules-nz.html`); petrol prices (owned by `new-zealand-road-trip-fuel-cost-2026`).

## Research notes (read 3 Nov 2026)
- DOC T&Cs (huts-campsites-cabins-and-lodges-terms-and-conditions): rule 13 "No waitlists are held for future availability"; full payment at booking, Visa/Mastercard only; cancellation fee tiers (Great Walks 0% same/next day of booking, 10% 15+ days out, 50% 14 to 4 days, 75% 3 days to day before, 100% day before to day after; huts 10/20/30/100; campgrounds 10/20/75/100); $10 fee for visitor centre bookings and changes that reduce value; bookings cannot move between account holders; speculative bookings invalid; medical cancellations 0% with certificate.
- DOC blog "Great Walks mythbusting" (8 May 2024): even the Milford has cancellations through the year; first 25 minutes after opening duplicates drop; try other direction, quieter dates, less popular walks; 93% of bed-nights booked by public and independent walkers; bots claim a misconception.
- Reserve Nature (reservenature.com, New York company): pricing page lists Pay As You Go $10 and Adventurer Monthly Pass $15 (currency not stated); alerts by text or call. Not DOC. Coverage of NZ not confirmed on its site; Runaway Traveller blog says it covers the Milford Track.
- NZ 2027 terms (Gazette 2025-sl5849, 16 Oct 2025): T1 starts 28 Jan to 3 Feb, ends Fri 9 Apr; T2 Tue 27 Apr to Fri 2 Jul; T3 Mon 19 Jul to Fri 24 Sep; T4 Mon 11 Oct to no later than Fri 17 Dec.
- Employment NZ 2027: New Year Fri 1 Jan; 2 Jan Sat (Mon 4 Jan); Waitangi Sat 6 Feb (Mon 8 Feb); Good Friday 26 Mar; Easter Monday 29 Mar; Anzac Sat 25 Apr (Mon 26 Apr); King's Birthday Mon 7 Jun; Matariki Fri 25 Jun; Labour Day Mon 25 Oct; Christmas Sat (Mon 27 Dec); Boxing Day Sun (Tue 28 Dec). Anniversaries: Wellington Mon 25 Jan; Auckland Mon 1 Feb; Nelson Mon 1 Feb; Taranaki Mon 8 Mar; Otago Mon 22 Mar; Southland Tue 30 Mar; South Canterbury Mon 27 Sep; Hawke's Bay Fri 22 Oct; Marlborough Mon 1 Nov; Canterbury Fri 12 Nov; Westland Mon 29 Nov; Chatham Islands Mon 29 Nov.
- RUC: light diesel up to 3,500 kg $76 per 1,000 km; 3,501 to 6,000 kg $82; PHEV $38; admin $12.44 online/app, $13.71 agent (calculate.co.nz table effective 6 Aug 2026; NZTA page blocks bots). No RUC or excise cut in the 2026 fuel crisis (RNZ, Willis, March 2026). Govt scrapped the 1 Jan 2027 12c excise rise and the matching RUC rise; increases from 1 Jan 2028 at 5c steps (1News, 31 Aug 2026). Land Transport (Revenue) Amendment Bill introduced Nov 2025, petrol cars not yet on RUC. Hire: Maui $8.04 per 100 km ($8.18 for 4 and 6 berth toilet and shower), JUCY $8.00 per 100 km (agreement from 1 May 2026), Mighty $7.64 ($8.04 for 4/6 berth). MBIE weekly fuel price monitoring, week dated 23 Oct 2026: 91 at $3.61, diesel $3.24 (same as `fuelPrices` in lib/tools.ts).
- Easy huts (DOC release 30 Jul 2025 table): Lane Cove 2 hr or by water, 16 bunks; Mt Heale 3.5 hr, 20; Atiwhakatu 3 hr, 26, Oct to Apr, swing bridge one at a time; Haurangi 3 hr, 10, whole hut $127 to $229; Lakehead 3 hr or water taxi, 26 (page says 26); Bushline 2.5 hr, 14; Anti Crow 3 hr, 8, Jordan Stream crossing. Serviced fees: $25 May to Sep; Oct to Apr $28 weekdays, $32 weekends; Dec to Feb $29 and $34. Standard (Anti Crow, Atiwhakatu) $15 adult. From 1 Nov 2026 backcountry hut tickets sold in DOC's booking system. DOC has 900+ huts, about 60 bookable.

## Schedule
- K1 2026-11-13 and K2 2026-11-14 took the slots of two evergreen can-i guides.
- Moved: can-i-park-a-campervan-on-the-street-overnight-nz 2026-11-13 to 2027-01-03; can-i-drive-a-campervan-on-a-car-licence-nz 2026-11-14 to 2027-01-04.
- K3 RUC 2027-01-05, K4 easy huts 2027-01-06.

## Inbound links (related lists only, so no translated text changes)
- nz-great-walks-2026-27 -> K1; christmas-summer NZ -> K2; new-zealand-road-trip-fuel-cost-2026 and campervan-hire-cost-new-zealand-2026 -> K3; best-tramping-great-walks-apps and doc-hut-rules-etiquette -> K4.
- Left for the page lane (it is editing them): /doc-campsites-huts-guide.html and doc-huts-new-zealand-guide -> K1 and K4.

## Status
- [x] K1 [x] K2 [x] K3 [x] K4 written and wired; content and similarity checks pass.
