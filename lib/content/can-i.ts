import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[]): ArticleSection => ({ heading, body, tips });

/**
 * "Can I...?" answer pages: one question people actually search, answered in the first two
 * sentences, then the rule that decides it, the detail by council or DOC district, and what to do
 * instead. Rules come from the official owner (DOC, councils, NZTA, legislation.govt.nz, FENZ).
 * Each page is drip-published through publishAt (docs/growth/publish-schedule.md).
 */
export const canIArticles: Article[] = [
  a({
    slug: "can-i-sleep-in-my-car-in-new-zealand",
    publishAt: "2026-11-09",
    title: "Can I Sleep in My Car in New Zealand? (2026 Rules)",
    description: "Resting to beat driver fatigue is exempt, but a planned night in a car on council land is a $400 fine unless a bylaw names the spot. 2026 rules, by land type.",
    category: "Rules & safety",
    region: "New Zealand",
    places: ["Council streets and car parks","Roadside lay-bys","Conservation land","Campgrounds and private land"],
    imageAlt: "Lakeside rest area at Lake Taupō with a picnic table and a single car parked beneath the trees",
    related: ["freedom-camping-rules-new-zealand","self-contained-campervan-green-warrant","camping-rules-local-councils-new-zealand"],
    intro:
      "Sometimes: it depends on whether you are resting or camping, and on who manages the land you are parked on. The Freedom Camping Act 2011 excludes resting or sleeping at the roadside in a vehicle to avoid driver fatigue, but a planned night in a car on public land counts as freedom camping, and on council land that needs a certified self-contained vehicle unless a bylaw names a spot for other vehicles. An ordinary car lacks the fixed toilet and tanks a green warrant requires, and since 7 June 2026 an old blue warrant no longer counts either. In practice a car can sleep legally at a campground, on private land with permission, at the rare council site opened to non-certified vehicles, or on conservation land DOC has not restricted.",
    sections: [
      s("Resting to stay safe is not the same as camping", [
        "Section 5 of the Freedom Camping Act 2011 defines freedom camping as camping outside a camping ground, using a tent or a motor vehicle, within 200 metres of a formed road, of anywhere vehicles can reach, or of the sea or a harbour. It then carves out three things: temporary and short-term parking, day-trip excursions, and resting or sleeping at the roadside in a motor vehicle to avoid driver fatigue.",
        "The Act gives no clock time for when a rest becomes a night, so an officer judges what they see. Pulling over because you are too tired to drive safely is the situation the exclusion protects. Picking a pretty spot at dusk and setting up to sleep until morning is the situation it does not, and stopping early rather than pushing on tired is the right call either way.",
      ], ["Tired is a reason to stop, not a loophole","The Act sets no minimum or maximum rest time","Leave in the morning, not the next evening"]),
      s("Why a car runs into trouble on council land", [
        "On land a council manages, section 10 allows freedom camping in a tent or a self-contained vehicle unless a bylaw restricts or prohibits it. A vehicle that is not self-contained can camp only where a bylaw made under section 11A names the area, or under other legislation. Camping in a non-certified vehicle anywhere else is an infringement offence, and so is parking up to do it.",
        "Self-contained now means a green warrant, which needs a toilet fixed inside the vehicle plus water, wastewater and rubbish systems. A saloon, a hatchback or a van carrying a portable toilet does not qualify. Christchurch City Council says it plainly: if you are sleeping in a vehicle without facilities, you need to stay in a camping ground that has facilities you can use.",
        "Tents are no easier in the biggest city. Auckland Council states that freedom camping in tents in public places is not allowed in Auckland, and its roadside permission applies only to certified self-contained vehicles.",
      ], ["No fixed toilet means no green warrant","A blue sticker has not counted since 7 June 2026","Check the council before the night, not at midnight"]),
      s("The few places that open a spot to cars", [
        "A council can say yes to non-certified vehicles, but it has to name the area in a bylaw, and few do. Central Hawke's Bay's 2024 bylaw lets any vehicle or tent camp at Pourerere Beach Road and at Te Paerahi Beach in Pōrangahau, and Pourerere needs a ballot permit from mid-December to the end of February. Whakatāne's 2024 bylaw permits vehicles that are not self-contained at Aniwhenua Reserve near Murupara, for a maximum of seven nights in any four-week period.",
        "Even where a spot is open to cars, it comes with conditions a council car park would never carry. Central Hawke's Bay limits any one area to three vehicles and three tents, requires you to leave by noon and sets a one-week stand-down before you return to the same place. The council's web page can lag its bylaw, and its page still mentions blue stickers, which stopped counting on 7 June 2026, so read the schedule rather than the summary.",
      ], ["Only the bylaw's named sites count","Expect stand-down periods and vehicle caps","Permits can be ballot-based in peak season"]),
      s("Conservation land, where cars have more room", [
        "On public conservation land the default runs the other way. Section 15 of the Act permits freedom camping on land DOC manages unless a notice or another law restricts it, and DOC's page says you can freedom camp on public conservation land except where it is specifically prohibited or restricted. Many of DOC's notices cover car parks beside tracks, road ends and visitor centres, so the notice list matters more than the type of vehicle.",
        "Two limits catch people sleeping in cars. DOC-administered scenic and recreation reserves are closed to freedom camping unless DOC provides or approves a campsite, under the Reserves Act 1977, and DOC will not allow dogs to camp with you in a national park. DOC campsites are the straightforward alternative: basic ones cost nothing, and standard ones charge $10 to $20 per adult per night and list vehicle access.",
      ], ["DOC reserves are closed unless a campsite is provided","Self-contained-only notices still apply to cars","Dogs cannot camp with you in national parks"]),
      s("What a mistake costs", [
        "Camping in a vehicle that is not self-contained on council land, or parking up to do it, is a $400 infringement. So is breaking a bylaw prohibition or restriction, and so is sleeping in a certified vehicle with more people than its certificate allows. Failing to display a warrant card where one is required is $200, refusing to leave when an enforcement officer tells you to is $600, and damaging the area or leaving waste outside a bin is $800. The amounts are set by the Freedom Camping (Penalties for Infringement Offences) Regulations 2023.",
        "A notice sets a payment deadline, 28 days from delivery on the Act's default form, and explains how to challenge it. A court can fine more than the notice amount, up to $1,200 for a $400 offence. Officers can also seize and impound a vehicle where that is reasonable and necessary, for example to protect public health, wildlife or access or to stop an ongoing offence, and if you are with the vehicle they must first tell you to stop and warn you.",
        "If the car is a rental, the notice usually goes to the company. A hire agreement can make you liable for the fee and an administration charge, and the company must send you the notice within five working days before charging the card you left at pick-up.",
      ], ["$400 for a non-certified vehicle on council land","$600 for refusing to leave when told","Rental companies can pass the fee to your card"]),
      s("Emergencies, housing and bad weather", [
        "The Act includes defences where breaking the rule was necessary to save or protect life or health, prevent injury or serious damage to property, or avoid damage to the environment, and your conduct was reasonable (section 22). A medical problem or a storm that closes the road can fit. Ordinary tiredness is handled by the fatigue exclusion in section 5, not by a defence.",
        "The Act also says a person is not freedom camping if they cannot live in appropriate residential accommodation and are living in a tent or vehicle as a result, unless they are in New Zealand on a visitor visa. Councils treat this as a welfare issue: Auckland Council points anyone worried about a person living in a vehicle to its community safety and support page.",
      ], ["Genuine emergencies have a statutory defence","Fatigue is excluded, not defended","Welfare concerns go to the council's support page"]),
      s("Where to sleep legally instead", [
        "A camping ground is the simplest answer, and the Act defines it broadly: a ground registered under the Camping-Grounds Regulations 1985 or any site where a fee is payable for camping. That covers holiday parks, council-run grounds and DOC campsites that charge. Christchurch points people in cars and tents to its four council-operated camping grounds at Duvauchelle, Okains Bay, Pigeon Bay and Spencer Beach.",
        "Private land with the owner's permission falls outside the Act, because it applies only to land managed by councils, DOC, LINZ and, by bylaw, NZTA. A friend's driveway or a farm that has said yes is lawful in a way a street never is. Agree the details first, so the arrangement is an invitation rather than an assumption.",
      ], ["Registered grounds and paid sites count as camping grounds","Basic DOC campsites cost nothing","Written permission is the safest kind"]),
      s("Checking before you shut the door", [
        "Photograph the sign at the entrance, read the vehicle requirement and stay limit, and look at the council's freedom camping page or bylaw map the evening before. Auckland lists 58 prohibited areas and 20 restricted ones, so even a city that allows roadside nights can ban a particular street. If an officer asks you to leave, go: refusing is its own $600 offence.",
        "KiwiCamping, an iPhone app, carries DOC's freedom-camping notices by district alongside its campsite and hut data, with dump stations, filters, saved places and trips. Place details, saved places and guides work without signal, while map tiles, routing, weather and photos need it, so look up a campsite before you lose reception. The notices are DOC's conservation-land ones rather than council bylaws, so the council's own page still decides a street or car park.",
      ], ["Photograph the sign on arrival","Check the council map the evening before","Leave when an officer says so"]),
      s("The short version", [
        "Resting because you are too tired to drive is fine. Camping is a different act, and a car without a green warrant has no right to a council street or car park overnight, with a few named exceptions.",
        "Use a campground or a DOC campsite, ask a landowner, or find the rare council site that welcomes ordinary vehicles. Pack a fallback so a full site never turns into a fine.",
      ]),
    ],
    faq: [
      ["Can I sleep in my caravan on the road in NZ?", "Councils apply the freedom camping rules to caravans as well as vans, and Auckland's rules cover a vehicle or caravan on its land. On a council road you need a certified self-contained set-up unless the council has named the spot for others, and the street itself may be prohibited or time-limited. Auckland allows certified vehicles on most roadsides for two nights, while Christchurch bans freedom camping in its central city, so check the bylaw for the exact street."],
      ["Can you camp in NZ without a self-contained vehicle?", "Yes, but not on most public land. In a council area the Act permits tents and certified self-contained vehicles, so a car or van without a green warrant needs a campground, private land with permission, a conservation area DOC has not restricted, or a site a council has named for it, such as Pourerere Beach Road in Central Hawke's Bay."],
      ["Can I sleep in my car at a rest area or lay-by?", "A short rest to avoid driver fatigue is excluded from freedom camping, so pulling over to sleep because you are too tired to drive is not an offence under the Act. A planned night is different, and the owner matters: a rest area that NZTA manages is NZTA land, which falls under the Act only if a council has declared it by bylaw with NZTA's written consent. Read the sign for the owner's rules."],
    ],
    sources: [
      { label: "Freedom Camping Act 2011 (legislation.govt.nz)", url: "https://www.legislation.govt.nz/act/public/2011/0061/latest/whole.html" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "Camping-Grounds Regulations 1985", url: "https://www.legislation.govt.nz/regulation/public/1985/0261/latest/whole.html" },
      { label: "DOC: Freedom camping on public conservation land", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
      { label: "DOC: Campsite categories, facilities and fees", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/facilities-and-fees/" },
      { label: "Christchurch City Council: Camping and campervans", url: "https://ccc.govt.nz/rec-and-sport/camping" },
      { label: "Auckland Council: General rules for freedom campers", url: "https://www.aucklandcouncil.govt.nz/en/parks-recreation/freedom-camping-auckland/general-rules-information-freedom-campers-auckland.html" },
      { label: "Central Hawke's Bay District Council: Freedom Camping Bylaw 2024", url: "https://chbdc.govt.nz/assets/Document-Library/Bylaws/20240627-Central-Hawkes-Bay-District-Council-Freedom-Camping-Bylaw.pdf" },
      { label: "Whakatāne District Council: Freedom Camping Bylaw 2024", url: "https://www.whakatane.govt.nz/files/documents/freedom_camping_bylaw_2024.pdf" },
    ],
  }),

];
