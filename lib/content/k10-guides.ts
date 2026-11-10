import { makeArticle as a, type Article, type ArticleSection } from "@/lib/article-model";

const s = (heading: string, body: string[], tips?: string[], cta?: boolean): ArticleSection => ({ heading, body, tips, ...(cta && { cta }) });

/**
 * Wildlife, wine, season and budget guides written on 10 November 2026 to close the last gaps in
 * the November search research. Facts are general and generalised from the official pages named in
 * each guide's `sources`.
 */
export const k10Articles: Article[] = [
  a({
    slug: "banks-peninsula-campsites",
    title: "Banks Peninsula Campsites: 10 of the Best Bays to Camp Around Akaroa",
    description: "Ten of the best places to camp on Banks Peninsula, from Akaroa and the harbour bays to Okains Bay, Le Bons Bay and Little River, with the roads, the rules and when to book.",
    category: "Camping guides",
    region: "Canterbury",
    places: ["Akaroa", "Duvauchelle", "Wainui", "Okains Bay", "Le Bons Bay", "Little Akaloa", "Pigeon Bay", "Purau Bay", "Little River", "Magnet Bay"],
    imageAlt: "Akaroa Harbour on Banks Peninsula with green hills around the water",
    related: ["banks-peninsula-camping-weekend", "freedom-camping-akaroa", "freedom-camping-christchurch-2026", "camping-in-christchurch", "christchurch-campervan-starting-point", "scenic-campsites-new-zealand"],
    hubs: ["camping/canterbury"],
    intro:
      "Banks Peninsula is a pair of old volcanoes worn down into a ring of harbours and deep green bays, an hour or so from Christchurch. It is one of the best short camping trips in Canterbury, and each bay feels different: Akaroa has the town and the harbour, the outer bays have long beaches at the end of steep roads, and the Lyttelton side is quiet and close to the city. These are ten of the places most worth a night, from the easy ones to the ones you have to work for.",
    sections: [
      s("Akaroa and the head of the harbour", [
        "1. Akaroa is the obvious base, with a holiday park above the town, cafes along the water and the harbour cruises that go looking for Hector's dolphins. It is busy on summer weekends and when cruise ships are in, so book the holiday park ahead and walk into town rather than hunting for a park.",
        "2. Duvauchelle, at the head of the harbour, is quieter and a few minutes before Akaroa on the main road. The camp sits right on the flat water, which suits families and kayaks, and it makes a good first night if you arrive late from Christchurch.",
      ], ["Akaroa: the town base", "Duvauchelle: flat water, quieter", "Book ahead for summer weekends"]),
      s("The western side of Akaroa Harbour", [
        "3. Wainui sits on the far side of the harbour from Akaroa, on a narrower road with views back across the water to the town. It is calm, sheltered and a good choice for a slower stay, with swimming and boating from the beach in fine weather.",
        "The road around this side continues to the harbour heads and a few small bays, and it is slow going. Allow plenty of time, and turn back where the seal ends if your van is not happy on gravel.",
      ], ["Wainui: calm and sheltered", "Views back to Akaroa", "Slow, narrow roads beyond"]),
      s("The outer bays", [
        "4. Okains Bay is the classic outer bay, with a long sandy beach, an estuary for paddling and a large camping ground behind the dunes that fills with Canterbury families in January. The road down from the Summit Road is steep and winding but sealed, and the bay has a small museum and a store that keeps summer hours.",
        "5. Le Bons Bay is the next bay along, smaller and quieter, with a sheltered beach and a simple camp in the valley. 6. Little Akaloa has a rocky bay, a little church and room for a few vans, and the drive in is one of the prettiest on the peninsula. All three are at the bottom of long descents, so check your brakes and use a low gear on the way down.",
      ], ["Okains Bay: long beach and estuary", "Le Bons Bay: smaller and quieter", "Little Akaloa: rocky and pretty"]),
      s("The northern bays and the Lyttelton side", [
        "7. Pigeon Bay is a long, deep inlet on the northern side, with farmland to the water and very little traffic. It suits people who want quiet and a short walk around the point more than a swimming beach.",
        "8. Purau Bay, on Lyttelton Harbour past Diamond Harbour, is the closest of the ten to Christchurch, with a grassy camp by the water and good swimming at high tide. It works for a Friday night escape from the city, and Port Levy, over the next hill, is a gravel road to a quieter bay if you want more space.",
      ], ["Pigeon Bay: deep and quiet", "Purau Bay: closest to the city", "Port Levy: gravel road, more space"]),
      s("Little River, Magnet Bay and the south", [
        "9. Little River sits at the base of the peninsula on the main road, beside Lake Forsyth, with a campground, a cafe stop and the Little River Rail Trail for an easy ride. It is flat, easy to reach and a sensible choice if the hill roads put you off or the weather is closing in.",
        "10. Magnet Bay and nearby Tumbledown Bay are on the exposed southern side, down a gravel road, with surf, cliffs and a wild feel. Camping there is limited, so treat them as a day trip from Little River or Akaroa, and leave the van at the top if the road is wet.",
      ], ["Little River: flat and easy", "Magnet Bay: surf and cliffs", "Day trip on the south side"]),
      s("Roads, rules and when to go", [
        "The peninsula roads are the main thing to plan around. The Summit Road along the crater rim is narrow with steep drops, the descents to the outer bays are long, and some bays are only reached by gravel. A small campervan handles them well with care, a large motorhome less so. Fill up with fuel before you leave Christchurch or at Little River.",
        "Freedom camping on Banks Peninsula is limited to a few signed areas and mostly needs a certified self-contained vehicle, so check Christchurch City Council's current rules before you plan a free night. January is the peak, and the holiday parks and domain camps book out, while February to April has warm water and far fewer people. The Banks Peninsula weekend guide has a two-night plan if you want one.",
      ], ["Narrow roads with steep descents", "Freedom camping is tightly limited", "February to April is quieter"]),
      s("Planning your trip in KiwiCamping", [
        "KiwiCamping maps the holiday parks, domain camps and DOC sites around the peninsula, and the campervan access filter helps you rule out the bays that are hard work in a bigger van. Save the bays you like to a dated trip, and check the forecast for each one before you commit to a long descent.",
        "Book holiday parks and domain camps with the operator. Free to download, with in-app purchases.",
      ], ["Save the bays you like", "Campervan access filter", "Forecast at each stop"], true),
    ],
    faq: [
      ["Where is the best place to camp on Banks Peninsula?", "Akaroa is the easiest base, Okains Bay has the best beach camping, and Purau Bay is the closest to Christchurch. Le Bons Bay and Pigeon Bay are quieter."],
      ["Can you freedom camp on Banks Peninsula?", "Only in a few signed areas, mostly for certified self-contained vehicles. Check Christchurch City Council's current rules before you go."],
    ],
    sources: [
      { label: "Christchurch City Council: freedom camping", url: "https://ccc.govt.nz/parks-and-gardens/freedom-camping" },
      { label: "ChristchurchNZ: Akaroa and Banks Peninsula", url: "https://www.christchurchnz.com/" },
      { label: "DOC: Canterbury places to go", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/" },
    ],
  }),
];
