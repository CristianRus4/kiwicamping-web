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
];
