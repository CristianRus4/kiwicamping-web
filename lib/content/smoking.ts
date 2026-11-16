import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], cta?: boolean): ArticleSection => ({ heading, body, tips, ...(cta && { cta }) });

const customsAllowances = { label: "New Zealand Customs: duty-free allowances", url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/duty-free-shopping" };
const smokefreeLaws = { label: "Ministry of Health: recent changes to smokefree laws", url: "https://www.health.govt.nz/regulation-legislation/vaping-herbal-smoking-and-smokeless-tobacco/requirements/recent-changes-to-smokefree-laws" };

/**
 * Cigarettes and vapes for travellers, written on 16 November 2026: what they cost, the rules, and
 * where to buy them. Each has a twin on the sister site (lib/sister-links.ts). Prices are today's ranges;
 * tobacco tax rises every 1 January with inflation, so the copy says prices rise rather than guessing.
 */
export const smokingArticles: Article[] = [
  a({
    slug: "cigarette-prices-new-zealand",
    publishAt: "2026-11-17",
    title: "How Much Do Cigarettes Cost in New Zealand in 2027?",
    description: "A pack of 20 cigarettes costs about NZ$37 to $55 in New Zealand and a pack of 25 about $50 to $68. Tobacco pouch and vape prices, and why tax keeps pushing them up.",
    category: "Costs & budget",
    region: "New Zealand",
    places: ["Dairies", "Supermarkets", "Petrol stations", "Vape shops", "Duty free"],
    imageAlt: "A corner dairy and food centre on a sunny suburban street in Dunedin",
    related: ["smoking-vaping-rules-new-zealand", "where-to-buy-cigarettes-vapes-new-zealand", "beer-wine-coffee-prices-new-zealand", "new-zealand-travel-cost-2026", "new-zealand-grocery-prices-2026", "campfire-rules-new-zealand"],
    intro:
      "A pack of 20 cigarettes costs about NZ$37 to $55 in New Zealand and a pack of 25 about $50 to $68, which puts them among the most expensive in the world. A 30 g pouch of rolling tobacco is about $80 to $105. Most of that is tax, the tax goes up every January, and vaping costs a fraction of it, so smokers on a long trip feel the difference quickly.",
    priceTable: {
      asOf: "2026-11-16",
      note: "Typical shop prices in November 2026. The brand sets the price more than the shop or the town, and tobacco tax rises every January, so expect a little more each year.",
      rows: [
        { label: "Cigarettes, value brand", nzdLow: 37, nzdHigh: 42, unit: "pack of 20" },
        { label: "Cigarettes, premium brand", nzdLow: 48, nzdHigh: 55, unit: "pack of 20" },
        { label: "Cigarettes", nzdLow: 50, nzdHigh: 68, unit: "pack of 25" },
        { label: "Rolling tobacco", nzdLow: 80, nzdHigh: 105, unit: "30 g pouch" },
        { label: "Vape starter device", nzdLow: 20, nzdHigh: 50, unit: "refillable" },
        { label: "Vape e-liquid", nzdLow: 15, nzdHigh: 30, unit: "30 ml bottle" },
      ],
    },
    sections: [
      s("Cigarette prices by pack size", [
        "The cheapest packs of 20 cost about $37 to $42, mid-range and premium brands $45 to $55, and a pack of 25 runs from about $50 for a value brand to $68 for a premium one. Cigarettes come only in packs of 20 or 25, and a carton is simply ten packs at the same price each, so buying in bulk saves nothing.",
        "The brand sets the price, not the town, so an Auckland supermarket and a West Coast dairy charge much the same, give or take a dollar or two. Every pack is the same plain dark olive colour with large health warnings, so the brand name in small print is how you tell them apart.",
      ], ["Value 20s about $37 to $42", "Premium 20s up to about $55", "No discount for a carton"]),
      s("Rolling tobacco and other tobacco", [
        "Rolling tobacco is taxed by weight, so it is no longer the cheap option it once was. A 30 g pouch costs about $80 to $105 and a 50 g pouch proportionally more, and papers and filters add a few dollars. Per cigarette it works out about the same as a value pack of 20.",
        "Cigars, cigarillos and pipe tobacco carry the same weight-based tax and are sold mostly by tobacconists and some bottle stores. Heated tobacco sticks for devices such as IQOS are taxed at a lower rate than cigarettes, but fewer shops stock them.",
      ]),
      s("Why cigarettes cost so much in New Zealand", [
        "Tax makes up about four-fifths of the price of a pack. Between 2010 and 2020 tobacco tax rose by 10% above inflation every year, which is how a pack of 20 climbed from under $15 to over $35. Since then the tax has gone up every 1 January in line with inflation, so prices still rise a little each year.",
        "The aim of the tax is to help people stop and to keep young people from starting, and New Zealand sits with Australia among the most expensive places in the world to smoke. For a traveller it comes down to one thing: budget for local prices, and use your duty-free allowance on the way in.",
      ]),
      s("Bringing your own: the duty-free allowance", [
        "Each traveller aged 17 or over can bring 50 cigarettes, or 50 g of tobacco or cigars, or a 50 g mix of them, into New Zealand without paying duty. That is two and a half packs of 20, so it covers a few days at most.",
        "Anything over the allowance must be declared on your arrival card, and you pay duty and GST on everything beyond the first 50 cigarettes or 50 g, which brings it close to the price in a shop here. Tobacco you do not declare is seized and you can be fined, so declare it or leave the extra in the bins at the airport. The guide to smoking and vaping rules covers the rest of what you can bring.",
      ], ["50 cigarettes or 50 g duty free", "Declare anything over the limit", "Undeclared tobacco is seized"]),
      s("What vaping costs", [
        "Vaping costs far less than smoking. A refillable starter device costs about $20 to $50, a 30 ml bottle of e-liquid $15 to $30 and a pack of two pre-filled pods about $10 to $20, so most vapers spend a small part of what a pack-a-day smoker does.",
        "Single-use disposable vapes have not been sold since June 2025, so everything on the shelf is refillable or takes replaceable pods. Dairies, petrol stations and supermarkets can sell only tobacco, mint and menthol flavours, while specialist vape shops carry the full range.",
      ]),
      s("Keeping the cost down on a trip", [
        "Prices barely change between towns, so there is little to gain from shopping around. What helps is planning: the West Coast, Fiordland, the East Cape and Stewart Island have few shops, and a small store may stock only a couple of brands, so buy enough of yours before a long stretch.",
        "Keep packs and pouches dry and out of the sun in the van, and carry a pocket ashtray, because butts are litter and a fire risk in summer. Rental campervans and holiday park cabins are smokefree inside, and a cleaning fee for smoke in a rental can run to several hundred dollars.",
      ], ["Buy before remote stretches", "Carry a pocket ashtray", "No smoking inside rentals"]),
      s("Where to buy, and where to smoke", [
        "Cigarettes are sold in supermarkets, dairies, petrol stations and many bottle stores, always from a closed cabinet behind the counter, and you must be 18 to buy them. The guide on where to buy cigarettes and vapes covers the shops, ID and remote areas.",
        "Smokefree places, fire seasons and fines have a guide of their own. If Australia is next on your trip, the AussieCamps guide to cigarette prices in Australia has the prices there.",
      ]),
    ],
    faq: [
      ["How much is a pack of cigarettes in New Zealand?", "About NZ$37 to $55 for a pack of 20 and $50 to $68 for a pack of 25, depending on the brand. A 30 g pouch of rolling tobacco is about $80 to $105, and prices rise each January when tobacco tax goes up."],
      ["Is it cheaper to bring cigarettes into New Zealand duty free?", "Only for a small amount: each traveller aged 17 or over can bring 50 cigarettes or 50 g of tobacco duty free. Anything more must be declared and is charged duty and GST, which brings it close to the price in a New Zealand shop."],
    ],
    sources: [
      customsAllowances,
      { label: "New Zealand Customs: tobacco excise rates from 1 January 2026", url: "https://www.customs.govt.nz/about-us/news/important-notices-archive/important-notices-archive-2025/new-excise-duty-rates-for-tobacco-products-from-1-january-2026" },
      smokefreeLaws,
    ],
  }),
  a({
    slug: "smoking-vaping-rules-new-zealand",
    publishAt: "2026-11-17",
    title: "Smoking and Vaping in New Zealand: Rules for Travellers (2027)",
    description: "What you can bring in duty free, the vape rules, the legal age, where you cannot smoke or vape in New Zealand, fire seasons and butts, and the fines, for campers and travellers.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["Airports", "Campgrounds", "Beaches", "National parks", "Rental campervans"],
    imageAlt: "A sign on a sports ground fence in Lower Hutt saying the park is alcohol and smoke free",
    related: ["campfire-rules-new-zealand", "cigarette-prices-new-zealand", "where-to-buy-cigarettes-vapes-new-zealand", "doc-campsite-rules", "camping-wastewater-rubbish-new-zealand", "responsible-camping-new-zealand"],
    intro:
      "You can smoke and vape in New Zealand: cigarettes are still sold to anyone 18 or over, because the planned ban for younger generations was repealed in 2024. Travellers aged 17 or over can bring 50 cigarettes or 50 g of tobacco duty free, plus a personal supply of vaping gear. What catches visitors out is where they cannot light up: indoors, in a car with children, in rental vans and cabins, on many council parks and beaches, and anywhere outdoors when the fire danger is high.",
    sections: [
      s("What you can bring into New Zealand", [
        "Each traveller aged 17 or over can bring 50 cigarettes, or 50 g of cigars or tobacco, or a 50 g mix of them, duty free. Over that, declare it on your arrival card and pay duty and GST on the extra, or drop it in the bins before the Customs desk. Undeclared tobacco is seized and can bring a fine, and the allowance belongs to each traveller, so it cannot be shared.",
        "The alcohol allowance is separate: 4.5 litres of wine or beer and three bottles of spirits of up to 1.125 litres each. Heated tobacco sticks count as tobacco, so they come out of the same 50 g.",
      ], ["50 cigarettes or 50 g, aged 17 or over", "Declare anything over the limit", "The allowance is per person"]),
      s("Bringing a vape", [
        "You can bring a vape and a personal supply of e-liquid or pods for your own use. Pack the device and spare batteries in your cabin bag, never in checked luggage, and do not use or charge it on the plane. A personal amount is fine; a quantity that looks like stock for resale is not.",
        "Single-use disposable vapes cannot be sold in New Zealand, so if you vape, a refillable device is easier to keep going, because pods, coils and e-liquid are sold everywhere. Dairies and petrol stations sell only tobacco, mint and menthol flavours, and specialist vape shops have the rest.",
      ], ["Vape in your cabin bag", "Bring a refillable device", "Personal amounts only"]),
      s("The legal age, and the ban that never started", [
        "You must be 18 to buy cigarettes, tobacco and vaping products, and shops ask for ID from anyone who looks under 25. Bring your passport, because an overseas driver licence may not be accepted. Buying them for someone under 18 is an offence too.",
        "You may have read that New Zealand banned cigarettes for anyone born after 2008. That law was repealed in 2024 before it took effect, together with the plans to cut the number of shops and the nicotine in cigarettes, so adults of any age can still buy them.",
      ]),
      s("Where you cannot smoke or vape", [
        "Smoking and vaping are banned inside workplaces, bars, restaurants, cafes, shops and airports, on public transport, and anywhere on the grounds of schools and early learning centres. It is also illegal to smoke or vape in a vehicle with anyone under 18 in it, even with the windows down, and police can fine you $50.",
        "Outdoors the rules are local. Many councils have made their playgrounds, parks, sports grounds, beaches and town squares smokefree, with signs asking you not to smoke or vape there; most rely on goodwill rather than fines, but people will notice. Outdoor dining areas are often smokefree by the venue's own rules, so look for a sign before lighting up.",
      ], ["No smoking or vaping indoors in public", "$50 fine with children in the car", "Respect smokefree signs outdoors"]),
      s("Campgrounds, huts and rental vans", [
        "Holiday parks keep their kitchens, bathrooms, cabins and lounges smokefree, and most ask you to smoke away from other people's sites. DOC huts are smokefree inside. At DOC campsites and in national parks the fire danger is what matters most, because one dropped butt can start a fire in dry grass or scrub.",
        "Rental campervans and cars are smokefree inside, vaping included, and the companies charge a cleaning fee, often several hundred dollars, if they can smell smoke. Smoke outside, away from the awning and the gas bottle, and never smoke in a tent or near a gas cooker.",
      ], ["Huts are smokefree inside", "No smoking in rental vans", "Smoke away from other campers"]),
      s("Fire seasons and cigarette butts", [
        "In summer much of New Zealand is in a restricted or prohibited fire season, and a total fire ban can be declared at short notice in dry, windy weather. Check the fire danger at checkitsalright.nz before lighting anything, and when it is high, smoke only on gravel, sand or bare ground well away from grass, and put every butt right out.",
        "Never flick a butt from a car window or drop it on a track or beach. Butts are litter, they are toxic to birds and sea life, and a single one can start a roadside fire that costs thousands to put out. Carry a pocket ashtray or a small tin and empty it into a rubbish bin later.",
      ], ["Check checkitsalright.nz", "Carry a pocket ashtray", "Never flick a butt from a car"]),
      s("Fines at a glance", [
        "Smoking or vaping in a car with a child under 18 is a $50 fine, and dropping a butt can bring a council littering fine of up to $400. Undeclared tobacco over the allowance is seized, and Customs can fine you or take you to court. Lighting a fire in a prohibited fire season, or causing one, is an offence that can bring a large fine.",
        "None of this stops anyone smoking on a camping trip; it just means picking the place. If you are crossing the Tasman too, the AussieCamps guide to smoking and vaping rules in Australia covers the rules there, which are stricter on vapes.",
      ]),
    ],
    faq: [
      ["Can I bring a vape to New Zealand?", "Yes. You can bring a vape and a personal supply of e-liquid or pods. Carry the device and batteries in your cabin bag, not in checked luggage, and do not use it on the plane. Disposable vapes are no longer sold in New Zealand, so a refillable device is easier to keep going."],
      ["Did New Zealand ban cigarettes?", "No. A law that would have banned sales to anyone born after 2008 was repealed in 2024 before it took effect. Anyone 18 or over can buy cigarettes, tobacco and vapes, with ID if they look under 25."],
    ],
    sources: [
      customsAllowances,
      smokefreeLaws,
      { label: "Fire and Emergency New Zealand: fire seasons and bans", url: "https://www.checkitsalright.nz/" },
    ],
  }),
];
