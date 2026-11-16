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
    publishAt: "2026-11-16",
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
        "Rolling tobacco is taxed by weight, so it is no longer the cheap option it once was. A 30 g pouch costs about $80 to $105 and a 50 g pouch proportionally more, and papers and filter tips add a few dollars. Per cigarette it works out about the same as a value pack of 20.",
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
        "Cigarettes are sold in supermarkets, dairies, petrol stations and many bottle stores, always from a closed cabinet behind the counter, and you must be 18 to buy them. The guide on where to buy cigarettes and vapes covers the shops, ID and remote areas, and the rules guide covers smokefree places and fines.",
        "Whatever you smoke, take the butts with you and check the fire danger before lighting up in summer. If Australia is next on your trip, the AussieCamps guide to cigarette prices in Australia has the prices there.",
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
    publishAt: "2026-11-16",
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
        "Smoking and vaping are banned inside workplaces, bars, restaurants, cafes, shops and airports, on buses, trains and ferries, and anywhere on the grounds of schools and early learning centres. It is also illegal to smoke or vape in a vehicle with anyone under 18 in it, even with the windows down, and police can fine you $50.",
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
  a({
    slug: "where-to-buy-cigarettes-vapes-new-zealand",
    publishAt: "2026-11-16",
    title: "Where to Buy Cigarettes and Vapes in New Zealand (2027)",
    description: "Where travellers buy cigarettes, tobacco and vapes in New Zealand: supermarkets, dairies, petrol stations and vape shops, the ID you need, and what to expect in remote areas.",
    category: "Trip planning",
    region: "New Zealand",
    places: ["Supermarkets", "Dairies", "Petrol stations", "Vape shops", "Remote areas"],
    imageAlt: "A Four Square general store on a small-town street in Mangawhai Heads",
    related: ["cigarette-prices-new-zealand", "smoking-vaping-rules-new-zealand", "food-fuel-resupply-new-zealand-road-trip", "beer-wine-coffee-prices-new-zealand", "new-zealand-grocery-prices-2026"],
    intro:
      "Cigarettes and rolling tobacco are sold in most supermarkets, dairies (the local corner shops), petrol stations and many bottle stores, and vapes in the same places plus specialist vape shops. You must be 18 and may be asked for ID, so carry your passport. In a city you are never far from a shop, but on a remote stretch the next one can be an hour away and may stock only a few brands.",
    sections: [
      s("Supermarkets", [
        "Most Woolworths, New World and Pak'nSave supermarkets sell cigarettes and rolling tobacco from a closed cabinet at the service desk rather than at the checkouts, so ask there. Some also sell a small range of vape pods and devices in tobacco, mint and menthol flavours.",
        "The price is the same as anywhere else, because tax sets it, but supermarkets in towns are usually open from about 7am to 10pm, longer than most small shops. In country towns the local Four Square is often the supermarket, and it closes earlier.",
      ]),
      s("Dairies and convenience stores", [
        "A dairy is New Zealand's corner shop, and almost every suburb and small town has one. Most sell cigarettes, tobacco, papers and lighters, and many sell vapes, all from behind the counter. Some city dairies stay open late or all night, which makes them the usual answer once the supermarket has shut.",
        "Shops cannot put tobacco or vapes on display, so ask at the counter for the brand and pack size you want. A dairy carries fewer brands than a supermarket, and city convenience chains work the same way.",
      ]),
      s("Petrol stations", [
        "Most staffed petrol stations sell cigarettes and tobacco at the counter, and most sell vape pods and devices too, although a few independent stations have stopped selling tobacco. Many on the main highways and in the cities are open 24 hours, which makes them the reliable late stop on a road trip.",
        "Unstaffed pay-at-the-pump stations, common in small towns, sell nothing but fuel, so do not count on one for supplies after dark.",
      ]),
      s("Specialist vape shops", [
        "Specialist vape shops sell the full range of devices, pods, coils and e-liquid flavours, while dairies, petrol stations and supermarkets can sell only tobacco, mint and menthol flavours. Vape shops are strictly for adults: nobody under 18 may go in, and staff check ID at the door.",
        "They are in every city and most larger towns, and the staff can match pods and coils to the device you brought from home. Smaller towns may have none, so stock up for an unusual device before heading somewhere remote.",
      ], ["Full flavour range only in vape shops", "Adults only, ID at the door", "Stock up on pods and coils in town"]),
      s("ID and what you can buy", [
        "You must be 18 to buy cigarettes, tobacco or vaping products. Shops ask for ID from anyone who looks under 25 and can refuse a sale without it. A passport always works; an overseas driver licence may be refused.",
        "Cigarettes come only in packs of 20 or 25 and rolling tobacco in 30 g or 50 g pouches, and you cannot buy single cigarettes. Disposable vapes are no longer sold, so expect refillable devices and pods.",
      ], ["Carry your passport", "Packs of 20 or 25 only", "No disposable vapes"]),
      s("Remote areas and long drives", [
        "On the West Coast, in Fiordland, the Catlins, the East Cape, the far north and on Stewart Island, shops are far apart and many close early, often by 6pm or 7pm. A small Four Square or general store usually sells cigarettes and tobacco but may carry only a few brands, and pods for a less common vape can be hard to find.",
        "Buy what you need for the next few days in the last big town, and keep a spare pack, pouch or pod in the van. In KiwiCamping a trip shows the driving distance and time between each stop, which makes the long gaps between towns easy to see before you set off.",
      ], ["Stock up in the last big town", "Small-town shops close early", "Keep a spare in the van"]),
      s("Duty free, and buying across the Tasman", [
        "If you fly in, you can buy your duty-free allowance of 50 cigarettes or 50 g of tobacco before you leave home or at the airport. It is a small amount, so most travellers end up buying in local shops within days, at the local price.",
        "If your trip carries on to Australia, the AussieCamps guide to buying cigarettes and vapes in Australia explains how it works there, where vapes are sold mostly through pharmacies.",
      ]),
    ],
    faq: [
      ["Can you buy cigarettes in supermarkets in New Zealand?", "Yes. Most supermarkets sell cigarettes and rolling tobacco from a closed cabinet at the service desk, and dairies, petrol stations and many bottle stores sell them too. You must be 18 and may be asked for ID."],
      ["Where can I buy vapes in New Zealand?", "Specialist vape shops sell the full range of devices, pods and flavours. Dairies, petrol stations and some supermarkets sell pods and devices in tobacco, mint and menthol flavours only. Disposable vapes are no longer sold."],
    ],
    sources: [smokefreeLaws, customsAllowances],
  }),
];
