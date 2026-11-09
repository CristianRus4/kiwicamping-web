import { makeArticle as a, type Article, type ArticleSection, type ArticleTable } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], table?: ArticleTable, cta?: boolean): ArticleSection => ({ heading, body, tips, ...(table && { table }), ...(cta && { cta }) });

/**
 * Freedom camping by town: where a visitor to a popular town actually parks for the night, with the
 * council rules in general terms and the council page named as the authority. Rules and sites change,
 * so each guide sends the reader to the council page and the sign on the day. The whole-council guides
 * are in freedom-councils.ts; DOC land is covered by the /freedom-camping/ hubs.
 */
export const freedomTownArticles: Article[] = [
  a({
    slug: "freedom-camping-napier-hastings",
    title: "Freedom Camping in Napier and Hastings: Where You Can Stay",
    description: "Where certified self-contained campervans can park overnight in Napier and Hastings: Napier's Ahuriri and Marine Parade sites, Hastings district reserves, what is banned and the holiday parks to use instead.",
    category: "Rules & safety",
    region: "Hawke's Bay",
    places: ["Napier", "Ahuriri", "Hastings", "Clive", "Haumoana", "Te Awanga"],
    imageAlt: "Marine Parade in Napier, with the footpath, Norfolk pines and the Pacific Ocean beside it",
    related: ["freedom-camping-rules-new-zealand", "self-contained-campervan-green-warrant", "camping-rules-local-councils-new-zealand", "wellington-to-napier-drive-guide", "holiday-parks-new-zealand-guide"],
    hubs: ["freedom-camping/hawkes-bay", "camping/hawkes-bay"],
    intro:
      "Napier and Hastings both let certified self-contained campervans stay overnight, but only in a short list of signed places, and the two councils run their rules separately. Napier keeps its sites around the Ahuriri waterfront and Marine Parade, with short stays and no camping in the city centre or on its grassed reserves. Hastings keeps a handful of car parks and reserves in the district, from Hastings itself out to Clive and the beach settlements. Tents and vehicles without a self-containment certificate belong in a holiday park.",
    sections: [
      s("What you need to freedom camp in Hawke's Bay", [
        "Both councils want a certified self-contained vehicle: a fixed toilet, a water supply, wastewater storage and the rest of the certification, with the certificate card displayed in the windscreen. A tent, a car with a mattress or a van with a portable toilet does not meet it. Since 7 June 2026 only the green warrant counts, which the guide to the self-contained campervan warrant explains.",
        "Beyond the vehicle, the rules come down to where you park. Each council publishes a list of places where overnight parking is allowed, and anywhere else on its land is either prohibited or at best tolerated for a single night. The national rules are in the freedom camping rules guide, and the council page is the one to trust when the two differ.",
      ], ["Green warrant, displayed", "Signed places only", "Council page beats this guide"]),
      s("Napier: Ahuriri and Marine Parade", [
        "Napier's freedom camping spots sit mostly along the waterfront north of the city centre. The council's page names the Pump Track car park off Marine Parade, Perfume Point at Ahuriri, Marine Parade North and the National Aquarium car park, which is open for camping only in the evening and early morning. They are small, usually room for a handful of vehicles, and they are first come, first served, so a late arrival in summer may find them full.",
        "The council has been tightening its bylaw in recent years, moving towards certified self-contained vehicles only and shorter stays, so the number of nights allowed has changed more than once. Read the sign on the night: it states the limit, and a site that was open last season can be closed this one. The council also caps total freedom camping on its land across a rolling 30 days.",
      ], ["Sites are small and fill by evening", "Night limits have changed, read the sign", "Rolling monthly cap on council land"]),
      s("Napier: where it is banned", [
        "Freedom camping is prohibited across most of the rest of the city. The council lists the city centre, the Marewa, Taradale and Tamatea shopping areas, McLean Park, Westshore Beach Reserve, the Foreshore Reserve car park, all grassed reserves and any road with a speed limit above 50 km/h. In practice that covers the Marine Parade promenade and beach car parks outside the designated places, which are the spots a visitor is most tempted by.",
        "The council patrols its sites and can issue an infringement notice on the spot. For a night in Napier without a designated space free, the nearest dependable beds are the holiday parks in town, which the council itself lists as alternatives.",
      ], ["Marine Parade outside the signed spots: no", "Grassed reserves: no", "Fines are issued on site"]),
      s("Hastings and the district", [
        "Hastings District Council keeps a list of designated overnight sites for certified self-contained vehicles. Eastbourne Street West car park in Hastings is the closest to the town, with a two nights a month limit, free parking from 6pm to 8am, a 12 metre length limit and no awnings. Further out, the list includes Evers-Swindell Reserve at Clive, the Clifton Road beachfront between Haumoana and Te Awanga, Haumoana Domain, Puketapu Domain and Dartmoor Bridge Reserve.",
        "The sites are basic: toilets at most, no showers and no power. Evers-Swindell is limited to the playground end of the sealed car park, and the reserve beyond the boat ramp belongs to the regional council, which does not allow overnight camping. Puketapu Domain closes its gate when the ground is sodden, usually in mid-winter, and the Clive site can flood in heavy rain or very high tides. Pākōwhai Country Park, which sounds like an option, is closed to overnight camping.",
      ], ["Eastbourne Street West: 2 nights a month", "Check for flooding and closed gates", "Regional council reserves are separate"], {
        caption: "Overnight sites listed for the Hastings district on the Hawke's Bay Tourism page, read on 9 November 2026. Check Hastings District Council for the current list and limits.",
        head: ["Site", "Area", "Notes"],
        rows: [
          ["Eastbourne Street West car park", "Hastings", "Certified self-contained only, 2 nights a month, 6pm to 8am, 12 m limit, no awnings"],
          ["Evers-Swindell Reserve", "Clive", "Playground end of the sealed car park only; toilets; can flood"],
          ["Clifton Road beachfront", "Haumoana to Te Awanga", "The largest of the district's sites; toilets"],
          ["Haumoana Domain", "Haumoana", "Toilets; shop and cafe nearby"],
          ["Puketapu Domain", "Puketapu", "Gate closed when the ground is sodden; toilets and playground"],
          ["Dartmoor Bridge Reserve", "Dartmoor Valley", "No facilities"],
        ],
      }),
      s("Fines and what to do instead", [
        "A breach of a council bylaw is an infringement under the Freedom Camping Act. The fees come from the Freedom Camping (Penalties for Infringement Offences) Regulations 2023: $400 for camping where it is prohibited or restricted, $400 for staying in a vehicle that is not self-contained where that is not allowed, $200 for not displaying the warrant card, and $800 for damaging the area or leaving waste. A fine goes to the registered owner of the vehicle, which for a rental is usually the hire company, which then passes it on.",
        "The sensible fallback in Hawke's Bay is a holiday park. Napier has several, and the guide to holiday parks in New Zealand explains how to book and what to expect. Department of Conservation land in the region is mostly in the Kaweka and Ruahine ranges inland, and KiwiCamping's DOC data (11 August 2026) lists 7 DOC campsites in the region, 6 of them free, with campervan access at only 2. DOC's freedom camping notices for Hawke's Bay cover 16 places.",
      ], ["$400 for most breaches", "Holiday parks for tents and uncertified vans", "DOC land is inland and basic"]),
      s("Using KiwiCamping in Hawke's Bay", [
        "KiwiCamping shows the DOC campsites and huts in the region, holiday parks with their facilities, and dump stations, with filters to narrow them to what your vehicle needs. It does not hold the councils' freedom camping sites, so use the council pages above for those and save a holiday park as your fallback for each night.",
        "Put the Napier night into a trip with its date and a note, and read the distance to the next stop, which for most people is the drive to or from Wellington or Taupō. Saved places, place details and guides are kept on the phone, while map tiles, routing, weather and photos need signal. Free to download, with in-app purchases.",
      ], ["Council sites: use the council's page", "Save a holiday park as the fallback", "Saved places stay on the phone"], undefined, true),
    ],
    faq: [
      ["Can I freedom camp in Napier?", "Yes, in a certified self-contained vehicle at a signed site such as the Ahuriri and Marine Parade car parks. It is banned in the city centre, on grassed reserves and at Westshore Beach Reserve, and sites are small and fill early."],
      ["Can I freedom camp in a tent or an uncertified van in Hastings?", "No. The district's overnight sites are for certified self-contained vehicles, so tents and uncertified vans need a holiday park or a campground."],
    ],
    sources: [
      { label: "Napier City Council: Freedom camping", url: "https://www.napier.govt.nz/napier/freedom-camping/information/" },
      { label: "Hawke's Bay Tourism: Freedom camping in Hastings District", url: "https://www.hawkesbaynz.com/visit/us/freedom-camping-in-hastings-district" },
      { label: "Hawke's Bay Tourism: Freedom camping in Napier", url: "https://www.hawkesbaynz.com/visit/us/freedom-camping-in-napier" },
      { label: "Freedom Camping (Penalties for Infringement Offences) Regulations 2023", url: "https://www.legislation.govt.nz/regulation/public/2023/0136/latest/whole.html" },
      { label: "DOC: freedom camping", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-stay/stay-at-a-campsite/freedom-camping/" },
    ],
  }),
];
