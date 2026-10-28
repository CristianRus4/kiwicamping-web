import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Campervan hire cost, buying and selling a campervan on a working holiday. Facts files:
 * docs/growth/costs/nz-hire-budget-facts.md and nz-buy-sell-compare-facts.md (read 21 October 2026).
 * Drip-published through publishAt (docs/growth/publish-schedule.md).
 */
export const costsWhvArticlesA: Article[] = [
  a({
    slug: "campervan-hire-cost-new-zealand-2026",
    publishAt: "2026-12-01",
    title: "Campervan Hire Cost in NZ 2026: Rates, Excess, Fees",
    description: "Jucy's own guide lists 2-berth vans from $35 a day in low season and $95 at peak. See the excess, bond, one-way and Queenstown fees that change the real price.",
    category: "Costs & budget",
    region: "New Zealand",
    places: ["Auckland","Christchurch","Queenstown","Cook Strait ferry"],
    imageAlt: "Four white campervans parked at a coastal lookout in Otago, New Zealand",
    related: ["campervan-budget-new-zealand","cook-strait-ferry-campervan-guide","self-contained-campervan-green-warrant","new-zealand-road-trip-fuel-cost-2026","camping-fees-new-zealand-2026"],
    intro:
      "Hiring a campervan in New Zealand starts at about $35 a day for a 2-berth van in the cheapest season and about $95 a day at peak, according to Jucy's own price guide last updated on 22 May 2026, and a 6-berth van runs from $145 to $320. Most other rental companies show a price only after you enter dates, so the table below uses Jucy's published figures and the sections after it cover the extras that decide what you really pay: insurance excess, bond, one-way fees, road user charges and the Cook Strait ferry. Everything here was read on the company pages on 21 October 2026, in New Zealand dollars with GST included unless a page says otherwise.",
    sections: [
      s("Daily rates by season and size", [
        "Jucy's guide calls these indicative starting rates based on historical demand, subject to availability and pick-up location, with insurance and extras not included. It puts low season in May and June, shoulder in March, April and July to October, and peak from November to February. Travellers Autobarn splits the year differently: its FAQ calls May to September very low season at under $40 a day, April and October shoulder, and November to March peak.",
        "Britz, Maui, Mighty, Apollo, Spaceships, Travellers Autobarn and CamperCo publish no daily rate in their page text, and Wicked Campers shows only \"from\" prices on its homepage: $35 a day for the Mystery Machine 2 and the economy car, and $40 a day for the Freedom Camping Aventus, with no season or dates given. Book three to six months ahead for summer, as Jucy advises.",
      ], ["Peak is November to February on Jucy's calendar","Prices appear in the booking engine for most companies","Compare the same dates on each site"], {
        caption: "Jucy's indicative starting rates per day, from its price guide last updated 22 May 2026. Insurance and extras are not included.",
        head: ["Van","Low (May to Jun)","Shoulder (Mar to Apr, Jul to Oct)","Peak (Nov to Feb)"],
        rows: [
          ["Crib, 2-berth","$35","$50","$95"],
          ["Condo, 4-berth","$75","$125","$275"],
          ["Chaser","$88","$200","$300"],
          ["Chill'd Big Kahuna, 6-berth","$145","$220","$320"],
        ],
      }),
      s("Insurance excess and bond", [
        "Every company sets a liability or excess figure and sells a way to reduce it. The thl group (Maui, Britz, Apollo, Mighty and MightyLITE) includes a Low Road level of liability per claim: $7,500 on Maui, $5,000 on Britz and Apollo vans without a toilet and shower and $7,500 with one, and $3,500 on MightyLITE. Its High Road option cuts that to $0 for $42 to $67 a day depending on the brand and van, capped at 50 days, and windscreen and tyres are excluded from it. Check the thl summary of rental conditions for the exact van you want.",
        "Jucy's Crib has three levels: Risk Taker at $0 a day with a $3,000 bond and excess, Essentials at $35 a day with $1,500, and Comprehensive at $50 a day with no bond, plus a $125 claims administration fee on all. A debit card user pays a $300 security bond whatever the level. Travellers Autobarn freezes a $3,500 bond on a credit card for about 14 days on its standard $0 level, or charges $30 to $35 a day for Protection Plus with no bond. Spaceships shows a $5,000 bond on its basic level, $3,000 on Partial at $30 a day and none on Stress-Free at $40 a day for its classic range. Its terms page still says $30 for Stress-Free, so the insurance page, which notes a price change from 1 October 2026, is the one to trust.",
        "A bond is held on the card, not charged, unless there is a claim. Most companies want a credit card, and Autobarn refuses cash cards, so check this before you fly.",
      ], ["Add the daily cover to the hire rate","Bond is a hold, not a charge","Use a credit card"], {
        caption: "Excess, bond and cover prices as published on each company's own pages, read 21 October 2026.",
        head: ["Company","Basic level","Reduced cover (per day)","Notes"],
        rows: [
          ["Maui, Britz, Apollo, Mighty (thl)","$3,500 to $7,500 liability per claim","High Road $42 to $67","Capped at 50 days; windscreen and tyres excluded"],
          ["Jucy Crib","$3,000 bond and excess","Essentials $35; Comprehensive $50","$125 claims fee; $300 bond on a debit card"],
          ["Travellers Autobarn","$3,500 bond held about 14 days","Protection Plus $30 to $35 (wagon, campervan)","Credit card only; cash cards refused"],
          ["Spaceships (classic range)","$5,000 bond","Partial $30; Stress-Free $40","Terms page shows an older $30 Stress-Free price"],
        ],
      }),
      s("One-way, Queenstown and other fees", [
        "One-way hires are common because many travellers fly into Auckland and out of Christchurch or Queenstown. The thl group lists Auckland to Christchurch or Queenstown at $200 from 1 April to 30 September 2026 and $300 from 1 October 2026 to 31 March 2027, Christchurch or Queenstown to Auckland at $200 from 1 October to 31 March, Christchurch to Queenstown at $200 all year, and Queenstown to Christchurch at $100 from 1 October to 31 March. These need a minimum hire of 5 days, and other minimums may apply. Spaceships says one-way travel carries no extra fee, while Travellers Autobarn says a fee may apply, varies and is not published, with one-way minimums of 10 to 35 days.",
        "Other thl charges: a $270 Queenstown location fee per rental, a $125 public holiday surcharge on listed holidays, an extra driver at $4.25 a day capped at 15 days, card fees of 2.46% on Visa and Mastercard and 5.2% on Amex, and a 5% discount on hires of 21 days or more. Smaller companies charge less for a second driver: Jucy lists $2 a day on the Crib, Travellers Autobarn $1 a day up to $25, and Spaceships includes an extra driver in its price.",
      ], ["Plan the end point before you book","Ask about the minimum hire for one-way trips","Check which public holidays are in your dates"]),
      s("Road user charges, fuel and the ferry", [
        "Diesel vans carry road user charges, paid per kilometre. The thl group collects them on return at $8.04 per 100 km for most vans and $8.18 per 100 km for 4 and 6 berth vans with a toilet and shower, or sells a prepay at $14.50 or $15.00 a day. At the MBIE national board price of $3.617 a litre for petrol and $3.245 for diesel on 16 October 2026 (provisional), fuel is on top of the rate, and the fuel cost guide has the route maths.",
        "The Cook Strait ferry is not included in hire. thl says ferry travel is required between the islands and that you book it yourself with the operator, and it advises booking a 7.7 m motorhome space on the ferry whatever size of van you hired. Wicked Campers states the same. Neither Interislander nor Bluebridge publishes a campervan fare in page text: fares come from their booking engines and depend on the sailing and vehicle length. See the Cook Strait guide for how the booking works.",
      ], ["RUC applies to diesel vans","Book the ferry yourself","Fares depend on length"]),
      s("Roads you cannot take a hire van on", [
        "Hire terms tie cover to the roads you drive. The thl group allows sealed roads and well-maintained access roads under 12 km to recognised campgrounds or major attractions, and bars Skippers Road, the Crown Range and Cardrona Valley road, Ninety Mile Beach, the Wānaka to Mount Aspiring road beyond the Treble Cone exit, Ball Hut Road and the Coromandel north of Colville and Waikawau. Travellers Autobarn is stricter, allowing only access roads under 500 metres. Spaceships allows gravel roads but bars Skippers Canyon Road, Ball Hut Road and Ninety Mile Beach.",
        "Breaking these rules can void your cover. Plan the route against the company's list before you book, not at the depot.",
      ], ["Read the road list for your company","Crown Range is barred by thl and Autobarn","Breaking the list can void cover"]),
      s("A worked two-week example", [
        "Take Jucy's Crib at its peak rate of $95 a day for 14 days: $1,330 before extras. Adding Essentials cover at $35 a day gives $130 a day, or $1,820 for the 14 days. The Crib is not self-contained, so freedom camping on council land is off the table and each night is a campground. Add fuel, any ferry fare and campsite fees on top, and read the freedom camping guide on what a certified self-contained van allows.",
        "The same arithmetic applies to any company once you have a quote: the daily rate plus the daily cover, times the days, then the one-way fee, location fee, ferry and fuel.",
      ], ["Rate plus daily cover, times days","Add one-way, location and ferry fees","Not self-contained means campgrounds"]),
      s("Plan the hire around the route in KiwiCamping", [
        `KiwiCamping lists 287 DOC campsites and 927 DOC huts in its bundled data (as of 24 August 2026), with fees and facilities from DOC's own pages. You can save places, build a trip with ordered stops and read the distance and drive time between them, so you can see how many kilometres and nights a route needs before you pick a van size and hire length. Its place details sit on your phone and open without signal, while map tiles, routing, weather and photos need coverage. KiwiCamping is free to download, with in-app purchases.`,
        "The app does not show hire prices. Use the rental company's site for the quote, and use the app to decide what the route needs.",
      ], ["Count the nights the route needs","Save campsites for each stop","Price the hire after you have the route"], undefined, true),
    ],
    faq: [
      ["How much does it cost to hire a campervan in New Zealand?", "Jucy's own guide, last updated 22 May 2026, lists indicative starting rates per day of $35 to $145 in low season, $50 to $220 in shoulder season and $95 to $320 at peak, depending on the van. Insurance and extras are not included, and other companies show a price only in their booking engine."],
      ["Is there a bond when you hire a campervan in NZ?", "Yes, with most companies, on the lower insurance levels. Examples are $3,000 on Jucy's Risk Taker level, $3,500 at Travellers Autobarn and $5,000 on Spaceships' basic level. It is held on a credit card and released unless there is a claim, and a higher daily cover can reduce it to $0."],
      ["Is the Cook Strait ferry included in campervan hire?", "No. thl and Wicked Campers both say you book the ferry yourself with Interislander or Bluebridge. Fares depend on the sailing and the vehicle length, and neither operator publishes a campervan fare in its page text."],
      ["Can I take a hire campervan on gravel roads in NZ?", "It depends on the company. thl and Travellers Autobarn limit you to sealed roads and short access roads, Spaceships allows gravel with some roads barred, and all of them bar named roads such as Skippers Road and Ninety Mile Beach. Breaking the rules can void your cover."],
    ],
    sources: [
      { label: "thl: Summary of Rental Conditions, New Zealand, version 16, 19 October 2026", url: "https://thl.widen.net/content/i0uybterg6/original/NZ_2627_Direct-Summary-of-Rental-Conditions.pdf" },
      { label: "Britz: liability reduction", url: "https://www.britz.com/nz/en/travel-info/liability-reduction" },
      { label: "Britz: road restrictions", url: "https://www.britz.com/nz/en/travel-info/road-restrictions" },
      { label: "Maui: frequently asked questions", url: "https://www.maui-rentals.com/faqs" },
      { label: "Jucy: how much does it cost to hire a campervan in New Zealand", url: "https://www.jucy.com/nz/en/tips-tricks-and-road-trips/how-much-does-it-cost-to-hire-a-campervan-in-new-zealand-2026-guide" },
      { label: "Jucy: Crib campervan", url: "https://www.jucy.com/nz/en/campervans/jucy-crib" },
      { label: "Travellers Autobarn: New Zealand campervan hire FAQs", url: "https://www.travellers-autobarn.co.nz/campervan-hire-new-zealand/faqs" },
      { label: "Travellers Autobarn: Terms and Conditions New Zealand, 19 June 2026", url: "https://www.travellers-autobarn.co.nz/wp-content/uploads/2026/06/Terms-and-Conditions-New-Zealand-19th-June-2026.pdf" },
      { label: "Spaceships: insurance", url: "https://www.spaceshipsrentals.co.nz/vehicles/insurance" },
      { label: "Wicked Campers New Zealand", url: "https://www.wickedcampers.co.nz/" },
      { label: "Interislander: Cook Strait ferry fares and payment options", url: "https://www.interislander.co.nz/book/cook-strait-ferry-fares-and-payment-options" },
      { label: "MBIE: weekly fuel price monitoring data", url: "https://www.mbie.govt.nz/assets/Data-Files/Energy/Weekly-fuel-price-monitoring/weekly-table.csv" },
    ],
  }),

  a({
    slug: "buying-a-campervan-new-zealand-working-holiday",
    publishAt: "2026-12-02",
    title: "Buying a Campervan in NZ on a Working Holiday (2026)",
    description: "What to check before buying a campervan in New Zealand: WoF changes from 1 November 2026, change of ownership, PPSR, RUC and the green warrant for freedom camping.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Auckland","Christchurch","Dealers","Private sales"],
    imageAlt: "An older cab-over campervan on a Mazda truck chassis parked beside a hedge",
    related: ["wof-registration-campervan-new-zealand","self-contained-campervan-green-warrant","can-i-drive-a-campervan-on-a-car-licence-nz","selling-a-campervan-new-zealand-before-you-leave","working-holiday-apps-new-zealand"],
    intro:
      "Buying a campervan in New Zealand means a current WoF and licence (rego), a change of ownership recorded with NZTA, a PPSR check for money owing and, if you want to freedom camp on public land, a green self-containment warrant. The rules for the warrant of fitness change on 1 November 2026, and blue self-containment stickers stopped counting on 7 June 2026. NZTA's own site blocks automated readers, so the NZTA figures below are the points its pages state in plain text, and you should confirm fees and forms on the live NZTA pages before you pay.",
    sections: [
      s("Dealer or private sale", [
        "Consumer Protection explains the main difference. A dealer must be on the Motor Vehicle Traders Register, is bound by the Consumer Guarantees Act and the Fair Trading Act, and must attach a Consumer Information Notice with the vehicle's history, price, odometer reading and money owing. \"As is where is\" does not remove your rights with a dealer.",
        "A private seller need not be registered, show that notice or follow those Acts, so you have far fewer rights, though a private seller still must not mislead you and you can claim through the Disputes Tribunal. Travellers Autobarn, a licensed dealer in Auckland and Christchurch, sells ex-rental Toyota Hiace campervans, offers a 3-day money-back guarantee for a serious mechanical issue and a 10,000 km or 6 month engine and gearbox warranty on ex-rental vans with a $4,200 claim limit, and lets you try a van for up to 7 days with rental charges deducted if you buy. Its NZ page shows no prices, so ask for the current price list.",
      ], ["Dealers carry legal duties","Private sales carry few rights","Get any warranty in writing"]),
      s("Check money owing with the PPSR", [
        "A van with money owing on it can be taken back by the lender even if the seller never mentioned it. Consumer Protection tells buyers to search the Personal Property Securities Register by registration number, chassis number or VIN, with the VIN best. A search costs $2.30 with GST, results are kept for 14 days and you confirm a legitimate reason for searching.",
        "The same checklist suggests checking whether the vehicle has been written off or water damaged, whether it is reported stolen, whether the odometer is consistent and getting an independent inspection. If you buy from a trader that did not disclose a registered security interest you take the vehicle free of it, but that protection does not apply to a private sale.",
      ], ["Search by VIN","Pay an independent mechanic to look","Do the PPSR check before you pay"]),
      s("WoF, rego and the 1 November 2026 change", [
        "Light vehicles registered on or after 1 January 2000 need an annual WoF now. NZTA does not set the inspection price, so garages do, and NZTA charges $4.16 for the label. From 1 November 2026, light vehicles registered on or after 1 November 2019 move to a WoF every 2 years, those registered between 1 November 2013 and 31 October 2019 move on 1 November 2027, vehicles 14 to 26 years old stay annual, and vehicles registered before 1 January 2000 move from 6-monthly to annual. The infringement fee for a WoF expired by more than 2 months rises from $200 to $350. A typical backpacker campervan, such as a 2000s Hiace, falls in the 14 to 26 year band and stays annual.",
        "Registration, called rego, is a separate licence with an ACC levy and an admin fee, and the price depends on the vehicle and the period. NZTA's licensing fees page lists the fee tables, so read it for your vehicle on the day you buy. The WoF and rego guide explains what to look for on the labels.",
      ], ["Aim for a long WoF and rego","Annual WoF applies to most older vans","Read the NZTA fee table on the day"]),
      s("Change of ownership", [
        "NZTA says a buyer must tell it immediately and that the change online is free, and a seller should do it straight away at the time of sale. The paperwork is form MR13B. NZTA's page gives no deadline in days, and delay can leave the previous owner liable for licence fees. For an individual, the seller can only check a New Zealand driver licence as ID, and NZTA says a buyer without a New Zealand driver licence must go to an NZTA agent. With no valid ID the owner is recorded as incomplete.",
        "This guide did not find an NZTA page that sets out what an overseas visitor needs to prove an address, so ask the agent before you hand over the money. Bringing your own vehicle to New Zealand is a different process (a temporary import, form MR2C) and is outside this guide.",
      ], ["Do it online with the seller","Overseas licence holders use an agent","Keep proof of the change"]),
      s("Road user charges for diesel", [
        "Diesel vans pay road user charges, bought in advance in units of 1,000 km. NZTA's factsheet and its April 2024 rate schedule give $76.00 per 1,000 km including GST for a light diesel vehicle of 2 axles up to 3,500 kg, but NZTA changed some RUC types from 6 August 2026 and its live rates page could not be read, so confirm the current rate. The licence belongs to the vehicle, so unused RUC passes to the next owner, and you can claim a refund on a vehicle you sell, scrap or export if the unused amount is at least $20 within 2 years of the licence issue date.",
        "The odometer matters: check the RUC label against the odometer reading when you buy, so you do not inherit someone else's overrun.",
      ], ["Check the RUC label against the odometer","Confirm the current rate with NZTA","Petrol vans do not pay RUC"]),
      s("The green warrant for freedom camping", [
        "A blue self-containment sticker stopped counting for freedom camping on 7 June 2026. Only a green warrant does now: the certificate plus a green warrant card displayed in the vehicle, with the details in the national register so officers can check on the spot. It lasts 4 years and comes from a certification authority regulated by the Plumbers, Gasfitters and Drainlayers Board.",
        "The vehicle needs a toilet permanently fixed to it and usable inside, since portable toilets no longer qualify, plus water supply, wastewater, ventilation, sink and rubbish storage systems. The cost is the certifier's own inspection fee, which is not published centrally, plus a $120 levy including GST. Size alone does not decide eligibility. The warrant lets you freedom camp on public land where self-contained vehicles are permitted, and it does not apply in campgrounds, holiday parks or on private property. The warrant guide has the full requirements.",
        "A van advertised as self-contained should have the green card and a current entry in the register, so ask to see both.",
      ], ["Green warrant only","Fixed toilet needed","Ask to see the warrant and the register entry"]),
      s("What vans cost to buy", [
        "This guide could not read Trade Me, which shows no listing text to automated readers, or Backpacker Board, which blocks them, so it quotes no asking-price range for typical backpacker vans. The one dated figures read directly are Turners auction starting bids closing on 26 October 2026: a 1995 Toyota Dyna motorhome at $10,699 with 110,628 km, a 1990 Mazda T3500 motorhome at $15,500 with 96,466 km and a 2011 Volkswagen Crafter 50 motorhome at $63,000 with 283,643 km. These are heavier, older motorhomes rather than typical Hiace backpacker vans.",
        "Search the same make and year on Trade Me and Backpacker Board on the day you buy, compare at least five listings, and treat asking prices as the start of a negotiation, not a sale price. Travellers Autobarn's NZ page quotes buy-back figures that do not agree with each other (50% in the text, 40% in an example), so get any buy-back schedule in writing.",
      ], ["Compare at least five listings","Asking price is not sale price","Buy-back terms in writing"]),
      s("Check the van and the route in KiwiCamping", [
        `KiwiCamping lists 287 DOC campsites and 927 DOC huts in its bundled data (as of 24 August 2026). Once you own a van, you can search by place, filter by facilities and cost, save the places you want and build a trip with ordered stops, distances and drive times. Saved places and their details still open in a dead zone; only the map tiles, routing, weather and photos wait for reception. KiwiCamping is free to download, with in-app purchases.`,
        "The app does not check a vehicle. Use the checks above for the van and the app for where to sleep in it.",
      ], ["Filter for facilities your van lacks","Save the stops for the first week","Check the DOC page for fees"], undefined, true),
    ],
    faq: [
      ["Do I need a WoF to buy a campervan in New Zealand?", "The van needs a current WoF to be driven on the road. NZTA's rules change on 1 November 2026: vehicles registered on or after 1 November 2019 move to a WoF every 2 years, and vehicles 14 to 26 years old stay annual. The infringement fee for a WoF expired more than 2 months rises from $200 to $350."],
      ["How do I register a campervan in my name in NZ?", "Tell NZTA of the change of ownership, which is free online, using form MR13B. NZTA says a buyer without a New Zealand driver licence must go to an NZTA agent, so ask the agent what ID and address proof they need."],
      ["Can I freedom camp in a campervan I bought in New Zealand?", "Only on public land where self-contained vehicles are allowed, and only with a certified self-contained vehicle showing a green warrant. Blue stickers stopped counting on 7 June 2026. The vehicle needs a fixed toilet."],
      ["How do I check a used campervan for money owing in NZ?", "Search the PPSR by registration number, chassis number or VIN. A search costs $2.30 with GST, and Consumer Protection recommends it because a lender can take back a vehicle with money owing, even if the seller did not mention it."],
    ],
    sources: [
      { label: "Consumer Protection: buying a car from a dealer", url: "https://www.consumerprotection.govt.nz/help-product-service/cars/finding-the-right-car/buying-car-from-dealer" },
      { label: "Consumer Protection: buying a car privately", url: "https://www.consumerprotection.govt.nz/help-product-service/cars/finding-the-right-car/buying-car-privately" },
      { label: "Consumer Protection: before buying a used car", url: "https://www.consumerprotection.govt.nz/help-product-service/cars/before-buying-used-car" },
      { label: "PPSR: schedule of fees", url: "https://ppsr.companiesoffice.govt.nz/help-centre/paying-ppsr-fees/schedule-of-fees/" },
      { label: "NZTA Vehicle Inspection Portal: changes to light vehicle inspections from 1 November 2026", url: "https://vehicleinspection.nzta.govt.nz/news/changes-to-light-vehicle-inspections-from-1-november-2026" },
      { label: "NZTA: warrant of fitness", url: "https://www.nzta.govt.nz/vehicles/warrants-and-certificates/warrant-of-fitness" },
      { label: "NZTA: vehicle ownership", url: "https://www.nzta.govt.nz/vehicles/buying-or-selling-a-vehicle/vehicle-ownership" },
      { label: "NZTA: licensing fees", url: "https://www.nzta.govt.nz/vehicles/licensing-rego/vehicle-fees/licensing-fees" },
      { label: "NZTA: road user charges rates and transaction fees", url: "https://www.nzta.govt.nz/vehicles/road-user-charges/ruc-rates-and-transaction-fees" },
      { label: "PGDB: self-contained vehicles, private vehicle owners", url: "https://www.pgdb.co.nz/self_contained_vehicles/private_vehicle_owners/" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "Travellers Autobarn: Toyota Hiace campervans for sale", url: "https://www.travellers-autobarn.co.nz/toyota-hiace-campervans-for-sale" },
      { label: "Turners: used caravans and motorhomes", url: "https://www.turners.co.nz/buses-caravans/Used-Caravans-and-Motorhomes-for-Sale/toyota/hiace/" },
    ],
  }),

  a({
    slug: "selling-a-campervan-new-zealand-before-you-leave",
    publishAt: "2026-12-03",
    title: "Selling a Campervan in NZ Before You Leave (2026)",
    description: "Tell NZTA at the time of sale, clear any money owing, sell unused RUC with the van and plan your timing. What NZTA says about plates, rego refunds and buyers.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Auckland","Christchurch","Private buyers","Dealers"],
    imageAlt: "A brightly painted converted bus parked under trees at a New Zealand holiday park, next to a late arrivals sign",
    related: ["buying-a-campervan-new-zealand-working-holiday","wof-registration-campervan-new-zealand","self-contained-campervan-green-warrant","working-holiday-road-trip-budget-new-zealand-2026"],
    intro:
      "When you sell a campervan in New Zealand, tell NZTA straight away, ideally online at the time of sale, which is free and needs your New Zealand driver licence and the buyer's full name and address. Clear any money owing first, hand over the unused road user charges with the van and leave the plates on it. NZTA's main site blocks automated readers, so these points come from what its pages state in plain text, and you should confirm them on the live page before you act.",
    sections: [
      s("Tell NZTA the moment you sell", [
        "NZTA says a seller should record the sale online at the time of the sale, and that it is free. You need your New Zealand driver licence and the buyer's full name and address. If you are a company or hold no New Zealand licence, contact NZTA on 0800 108 809 or info@nzta.govt.nz. The legal basis NZTA cites is section 247 of the Land Transport Act 1998.",
        "NZTA states no deadline in days, but reporting late has a cost: you may be sent the buyer's fines and tolls, and if rego was overdue you owe fees up to the date you tell NZTA. Check that the buyer has registered the van in their name before you hand over the keys. NZTA says you can check this online.",
      ], ["Record the sale online at handover","Keep a copy of the confirmation","Use a New Zealand licence for the online route"]),
      s("Plates, rego and unused road user charges", [
        "Plates stay with the vehicle when it is sold, apart from personalised plates, which are separate. NZTA says it can refund unexpired licence fees only if you cancel the registration and hand in the plates, which suits a vehicle that is going off the road permanently, and the admin fee is not refundable. A plain sale does not trigger a rego refund, so price the remaining rego into the sale.",
        "Road user charges work differently. RUC licences belong to the vehicle, so unused RUC passes to the buyer. NZTA allows an off-road refund if the vehicle is sold or deregistered, destroyed or exported, claimed within 2 years of the licence issue date, for at least $20 and with a form MR15 and an odometer reading. NZTA does not mediate any refund between buyer and seller, so agree it in writing.",
      ], ["Price remaining rego into the sale","Agree RUC in writing","Petrol vans have no RUC"]),
      s("Clear any money owing", [
        "A private seller who says a van is debt free when money is owing may be misleading the buyer. Consumer Protection says the buyer may cancel the deal or claim compensation, and the buyer can lose the van to the lender. Clear the debt and keep proof before you sell, and expect a careful buyer to search the PPSR, which costs $2.30 with GST.",
        "Where a van has a current WoF, say so, since Consumer Protection tells buyers to look for a current WoF and rego. This guide found no NZTA rule that requires a seller to supply a WoF to a private buyer, and NZTA's own wording on selling a van without one was not readable, so check the live NZTA page.",
      ], ["Keep the payout letter","Show the WoF and rego dates","Do not claim a van is debt free if it is not"]),
      s("Where to sell and what to expect", [
        "Backpacker Board runs a noticeboard of campervans and motorhomes for sale, and Trade Me carries private and dealer listings. This guide read no official or company statement about other places, and could not read either site's listing text, so it quotes no sale prices. Look at what comparable vans are asking on the day you list, and expect to drop from the asking price.",
        "Dealers are one option. Travellers Autobarn offers an optional buy-back on its own vans, but its NZ page quotes 50% in the text and 40% in an example, so ask for the current NZ buy-back schedule in writing before you rely on it. This guide found no official page on selling to a wrecker or exporting a van, so contact NZTA if you plan either.",
      ], ["List 3 to 4 weeks before you fly","Price against live listings","Get any buy-back terms in writing"]),
      s("A green warrant helps you sell", [
        "A van with a current green self-containment warrant lets a buyer freedom camp on public land where self-contained vehicles are allowed, which is why Travellers Autobarn advertises \"green sticker\" vans. The warrant lasts 4 years, so note its expiry in your listing. Blue stickers no longer count since 7 June 2026, so do not describe a blue-stickered van as self-contained for freedom camping.",
        "A buyer who wants the warrant will check the register entry against the plate, so keep the paperwork with the van.",
      ], ["Note the warrant expiry","Do not call a blue sticker valid","Keep the certificate with the van"]),
      s("Plan the last weeks with KiwiCamping", [
        `Its bundled data, dated 24 August 2026, covers 927 DOC huts and 287 DOC campsites. Plan the last leg of your trip back to the city where you will sell, save the stops, and check each stop's fee and facilities before you drive there. Out of coverage you can still read every place page, though the map, directions, forecasts and photos load only with a connection. KiwiCamping is free to download, with in-app purchases.`,
        "Leave days at the end for the sale, the paperwork and a clean-out, and do not book your flight for the day after your last night in the van.",
      ], ["Finish the trip near where you sell","Leave days for paperwork","Empty the tanks before handover"], undefined, true),
    ],
    faq: [
      ["How do I tell NZTA I sold my campervan?", "Record the sale online at the time of sale, which is free. Have your NZ driver licence ready, along with the buyer's full name and address. If you are a company or have no New Zealand licence, contact NZTA on 0800 108 809."],
      ["Do I get a rego refund when I sell my campervan in NZ?", "NZTA says it refunds unexpired licence fees only if you cancel the registration and hand in the plates, and the admin fee is not refundable. A plain sale does not trigger a refund, so price the remaining rego into the sale."],
      ["What happens to the road user charges when I sell a diesel van?", "Any unused road user charges stay with the vehicle and go to the buyer. NZTA allows a refund of at least $20 if the vehicle is sold, scrapped or exported, claimed within 2 years of the licence issue date, and it does not mediate between buyer and seller."],
      ["Where can I sell a campervan in New Zealand?", "Backpacker Board and Trade Me carry campervan listings, and dealers such as Travellers Autobarn sell their own vans. Compare live asking prices on the day you list, and get any buy-back terms in writing."],
    ],
    sources: [
      { label: "NZTA: selling a vehicle", url: "https://www.nzta.govt.nz/vehicles/buying-or-selling-a-vehicle/selling-a-vehicle" },
      { label: "NZTA: vehicle ownership", url: "https://www.nzta.govt.nz/vehicles/buying-or-selling-a-vehicle/vehicle-ownership" },
      { label: "NZTA: cancelling your registration", url: "https://www.nzta.govt.nz/vehicles/vehicle-registration/cancelling-your-registration" },
      { label: "NZTA: road user charges refunds", url: "https://www.nzta.govt.nz/vehicles/road-user-charges/ruc-refunds" },
      { label: "NZTA: about road user charges", url: "https://www.nzta.govt.nz/vehicles/road-user-charges/about-ruc" },
      { label: "Consumer Protection: solving issues with a private seller", url: "https://www.consumerprotection.govt.nz/help-product-service/cars/solving-issues-private-seller" },
      { label: "Consumer Protection: before buying a used car", url: "https://www.consumerprotection.govt.nz/help-product-service/cars/before-buying-used-car" },
      { label: "PPSR: schedule of fees", url: "https://ppsr.companiesoffice.govt.nz/help-centre/paying-ppsr-fees/schedule-of-fees/" },
      { label: "PGDB: self-contained vehicles, private vehicle owners", url: "https://www.pgdb.co.nz/self_contained_vehicles/private_vehicle_owners/" },
      { label: "Travellers Autobarn: Toyota Hiace campervans for sale", url: "https://www.travellers-autobarn.co.nz/toyota-hiace-campervans-for-sale" },
    ],
  }),
  a({
    slug: "holiday-park-prices-new-zealand-2026",
    publishAt: "2026-12-26",
    title: "Holiday Park Prices in NZ 2026: Powered, Unpowered and Cabin Rates",
    description: "What NZ holiday parks publish for powered and unpowered sites and cabins, by region and season, set against DOC's serviced campsite fees, with the TOP 10 membership and ways to spend less.",
    category: "Costs & budget",
    region: "New Zealand",
    places: ["Lake Hāwea", "Nelson", "Whangateau", "Christchurch", "Kaeo", "Auckland"],
    imageAlt: "The grounds of Reefton Motor Camp on the West Coast, looking east across the grass from the domain",
    related: ["holiday-parks-new-zealand-guide", "camping-fees-new-zealand-2026", "campervan-hire-cost-new-zealand-2026", "accommodation-costs-new-zealand-2026", "christmas-summer-camping-new-zealand-2026-27"],
    intro:
      "A powered site at a New Zealand holiday park publishes at roughly $50 to $75 a night for two people in summer, an unpowered site at about $20 to $26 per adult, and a basic cabin at about $80 to $100 for two, rising to $155 to $250 for four at peak. Those are the figures the parks list on their own pages and tourism listings, and they sit well above DOC's serviced campsites at $20 to $28 per adult. No park group publishes one national price list, so the table below uses named parks in different regions, read on 28 October 2026.",
    sections: [
      s("What a night costs", [
        "Holiday park pricing has three moving parts: the type of site, the season and whether the price is per site or per adult. The Camp at Lake Hāwea, for example, charges for two adults on a powered site and then adds $25 a night for each extra adult and $15 for each child aged 5 to 15, with children under 5 free. Cable Bay Holiday Park outside Nelson charges per adult, at $28 powered and $26 unpowered, with children aged 5 to 13 at $15.",
        "That means a couple pays about the same as a family of four only at parks that price per site, and the per-adult parks reward couples and singles. Before comparing two parks, convert both quotes to the same party, such as two adults in one campervan, and the same dates.",
      ], ["Powered about $50 to $75 for two", "Unpowered about $20 to $26 per adult", "Compare the same party and dates"]),
      s("Published rates by region and season", [
        "The table collects what named parks in five regions publish, with the season each price belongs to. It is a sample of how prices behave rather than a national average, and the parks' own booking pages decide the price for your dates. Where a source gives only a range across every accommodation type, the table says so instead of guessing which part of the range is a powered site.",
        "The pattern is the same everywhere: a lower price from May to September, a middle band for most of the summer half of the year and a peak that starts around 20 December and runs until after Waitangi Day. Cabins carry the steepest swing, since a Northland cabin lists $80 to $100 in winter for two and $155 to $250 at peak for four.",
      ], ["Peak starts around 20 December", "Cabins swing the most", "Ranges cover every accommodation type"], {
        caption: "Rates as published by each park's own page (The Camp, Cable Bay) or by its listing on newzealand.com (the others), read on 28 October 2026. Prices change, so confirm them for your dates.",
        head: ["Park and region", "Powered site", "Unpowered site", "Cabin"],
        rows: [
          ["The Camp, Lake Hāwea (Otago)", "$50 for 2 adults, 1 May to 30 Sep; $60 from 1 Oct to 30 Apr; $70 at peak", "On a separate page", "On a separate page"],
          ["Cable Bay Holiday Park, Nelson", "$28 per adult", "$26 per adult", "Powered cabin $90 for up to 2"],
          ["Tauranga Bay Holiday Park, Kaeo (Northland)", "Not listed", "$20 per adult, $10 per child; peak $60 to $75 per site", "$80 to $100 for 2 in winter; $155 to $250 for 4 at peak"],
          ["Whangateau Holiday Park (Auckland)", "Range across all types: $46 to $145 (Oct to Apr)", "Included in the range", "Included in the range"],
          ["Spencer Beach Holiday Park (Christchurch)", "Range across all types: $27 to $150", "Included in the range", "Included in the range"],
        ],
      }),
      s("Powered, unpowered and cabin: what you pay for", [
        "A powered site adds a power point to the pitch, and in most parks it also brings you closer to the kitchen and amenity blocks. An unpowered site suits a tent or a campervan that does not need to plug in, and it costs less. A cabin includes a bed under a roof, so it is the choice when the forecast is poor or you travel without a tent.",
        "DOC is the benchmark on conservation land. Its serviced campsites charge adults $25 for an unpowered site and $20 to $28 for a powered one, with children at $12.50 and $10 to $14, and infants free. Standard DOC campsites cost adults $10 to $20 and basic ones are free, but they have fewer facilities than a holiday park, so the price gap buys showers, kitchens and laundry.",
      ], ["Powered sites add a power point", "Cabins include a bed", "DOC serviced sites cost $20 to $28 per adult"]),
      s("The networks and memberships", [
        "TOP 10 Holiday Parks says it has 52 parks in New Zealand. Its TOP 10 Club costs $55 for two years and gives 10% off accommodation at all TOP 10 parks, subject to terms and conditions, which one park's own blog describes as capped at $40 a stay. It takes about $550 of accommodation spend to earn back $55 at 10%, and a single three-night stay at $55 a night saves about $16.",
        "Some parks belong to no network. Christchurch City Council operates Spencer Beach TOP 10 among its camping grounds, so a council park can sit inside a network and still set its own prices. Check whether a membership discount applies to a site, a cabin or both.",
      ], ["TOP 10 Club: $55 for two years", "10% off, capped at $40 a stay per one park", "Council parks set their own prices"]),
      s("Ways to spend less", [
        "Travel outside the peak window, because the winter rate for a powered site at The Camp is $20 lower than its peak rate and Tauranga Bay lists its winter cabins well below its peak cabins. A night in a DOC serviced campsite costs less than most holiday park sites, so alternate the two on a longer trip.",
        "Choose an unpowered site when the van has a house battery, since the per-adult price is lower, and watch the child rate when you travel as a family. Fewer, longer stays also cut the minimum-stay problem that some parks apply over peak and public holidays. A prepaid cancellation rule can cancel the saving, so read it before paying.",
      ], ["Avoid the 20 December to Waitangi Day window", "Mix DOC and holiday park nights", "Read cancellation terms"]),
      s("Booking terms that change the price", [
        "Tauranga Bay's listing says a cancellation within 14 days of arrival costs one night's rate for each cabin or site booked. Spencer Beach's listing notes that minimum stays apply over the peak season and public holidays. The Camp's page says guests who stayed the previous summer book Christmas and New Year before 31 March, and new guests email the park from 1 April, so the best summer sites go early.",
        "Parks also charge for pets, extra vehicles and visitors at some sites, so ask when you book. A quote that leaves them out will not match the final bill.",
      ], ["Cancellation can cost a night", "Peak minimum stays apply", "Summer bookings open as early as April"]),
      s("Using KiwiCamping to price a trip", [
        "KiwiCamping lists holiday parks next to DOC campsites and huts, with a fees and facilities summary, a link to book where a park takes bookings, and the nightly cost shown in the currency you choose. A cost filter limits the map to free places or paid ones. Place details, saved places and guides work offline, and the map tiles, routing, weather and photos need signal.",
        "Save a holiday park and a DOC campsite for each night, drop them into a trip with dates and notes, and compare the two on price and facilities. The trip adds up the driving between stops and shows the forecast at each one. Free to download, with in-app purchases.",
      ], ["Compare a park and a DOC campsite", "Switch the currency", "Add a night's cost to the trip notes"], undefined, true),
    ],
    sources: [
      { label: "The Camp, Lake Hāwea: powered sites", url: "https://thecamp.co.nz/accommodation/powered-sites/" },
      { label: "Cable Bay Holiday Park, Nelson", url: "https://cablebayholidaypark.nz/" },
      { label: "newzealand.com: Tauranga Bay Holiday Park pricing", url: "https://www.newzealand.com/au/plan/business/tauranga-bay-holiday-park" },
      { label: "newzealand.com: Whangateau Holiday Park pricing", url: "https://www.newzealand.com/au/plan/business/whangateau-holiday-park" },
      { label: "newzealand.com: Spencer Beach Holiday Park pricing", url: "https://www.newzealand.com/us/plan/business/spencer-beach-holiday-park/" },
      { label: "TOP 10 Holiday Parks", url: "https://www.top10.co.nz/" },
      { label: "DOC: campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "Christchurch City Council: camping and campervans", url: "https://www.ccc.govt.nz/rec-and-sport/camping" },
    ],
  }),


];
