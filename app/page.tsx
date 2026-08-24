import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Binoculars, CalendarDays, Caravan, Check, CircleDollarSign, CloudSun, Heart, Layers, ListChecks, Map, MapPinned, Navigation, Route, Search, ShieldCheck, SlidersHorizontal, TentTree, Trees } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadCard } from "@/components/download-card";
import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, articles } from "@/lib/site";
import { homeSchema, seoLanguageTags } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "KiwiCamping: NZ Camping Map, DOC Sites & Road Trip Planner" },
  description: "Find 6,500+ campsites, DOC huts, holiday parks and freedom camping areas across New Zealand. Offline place details, sharp filters and a stop-by-stop road trip planner for iPhone.",
  alternates: { canonical: "/", languages: seoLanguageTags("") },
};

const features = [
  {icon: Layers, title:"Smart collections and your own lists", text:"Liked, Starred, Want to visit and Visited fill themselves as you mark places. Build named collections on top for an island, a season or the shortlist you are still arguing about."},
  {icon: SlidersHorizontal, title:"Filters that answer a real question", text:"Ask for free camping areas with toilets and drinking water around Queenstown, then narrow further by place type, fee, rating, online booking, region and detailed facility and access features."},
  {icon: Map, title:"Standard, satellite and 3D maps", text:"Switch between the standard map and satellite imagery you can tilt and spin into real terrain. Pins group into counts when you are zoomed out and break apart as you move in."},
  {icon: Binoculars, title:"Street View before the turnoff", text:"Street View opens straight from the place screen where coverage exists, so you can see the entrance, the road surface and the surroundings before committing the van to the turnoff."},
  {icon: CloudSun, title:"Weather on every place", text:"Current conditions and the forecast sit on the place screen and beside each trip stop, so a choice between two camps can be made with the sky in mind."},
  {icon: CircleDollarSign, title:"Costs in your own currency", text:"Visiting and not fluent in New Zealand dollars? Choose your currency and set the rate once, and reported costs are shown alongside in money you can judge at a glance."},
];

const faqs = [
  ["What is KiwiCamping?", "KiwiCamping is an iPhone app for finding places to camp and stay around New Zealand. It bundles a directory of 6,500+ places so the details stay readable without reception, and it turns the ones you save into a road trip with an ordered route, dates, notes and to-dos."],
  ["What places are included?", "More than 6,500 places: DOC campsites, backcountry huts, holiday parks and other bookable stays, freedom camping areas, public dump stations and day-use places across both islands."],
  ["Does it work without reception?", "The place directory is bundled with the app, so names, categories, descriptions, fees, facilities and conditions stay readable well beyond signal. Live services such as weather, routing, Street View, photos and provider pages still need a connection."],
  ["Can I plan a multi-stop road trip?", "Yes, and it is the app's main feature. Add places as stops, drag them into order, attach a date and arrival notes to each one, see the driving distance leg by leg and across the whole trip, open directions to the next stop, check the weather at each one, tick stops off as visited and keep the packing list beside the itinerary. Itinerary details can sync to Calendar."],
  ["What are collections?", "Two kinds. Smart collections (Liked, Starred, Want to visit, Visited, Pins and All saved) fill themselves as you mark places. On top of those you can create your own named collections with an icon and notes for a region, a season, a vehicle or a shortlist."],
  ["Can I filter for free camps or self-contained sites?", "Yes, and combinations of them. Filters cover place type, fee, minimum rating, online booking, region and detailed facility and access features, so \u201cfree camping areas with toilets and drinking water near Queenstown\u201d is a single query."],
  ["What is on a place screen?", "Photos, a description, opening hours, fees, terms and conditions, facilities grouped by type, current alerts, ratings, contact and booking details, weather, Street View where coverage exists, directions, and nearby alternatives."],
  ["What map views are there?", "A standard map and a satellite view built on Apple's flyover imagery, which you can tilt and rotate for real 3D terrain. Street View, built on Apple's Look Around imagery, gives the street-level view from the place screen."],
  ["Can I see prices in my own currency?", "Yes. Choose your currency in settings and set the conversion rate, and reported costs are shown in that currency alongside the New Zealand dollar figure."],
  ["Can I book a campsite in KiwiCamping?", "Open the booking details for a place to reach its provider and check live availability, prices and terms."],
  ["Are camping rules the same across New Zealand?", "No. National law, council bylaws, conservation rules and individual site conditions can all apply. Always follow current signs, land-manager directions, fire restrictions and official alerts."],
];

const reviews = [
  { name: "Sofia M.", country: "Germany", title: "Made our South Island route so much easier", quote: "We used it for campsites and holiday parks between Christchurch and Queenstown and honestly it saved us hours. The offline stuff was the big one once we left the main roads... no signal for ages out there." },
  { name: "Daniel R.", country: "United States", title: "Does what I need", quote: "Quick to browse, easy to filter. Way better than the twelve browser tabs I had going before." },
  { name: "Claire T.", country: "United Kingdom", title: "Brilliant", quote: "The hut info and the access notes saved us so much planning time. It genuinely feels like it was made by someone who has actually driven around New Zealand rather than someone who read about it. We used it every single day for three weeks and I'd pay double." },
  { name: "Matteo B.", country: "Italy", title: "found a quiet spot after a long drive!", quote: "after 6 hours driving we just needed somewhere quiet with a toilet and it took about 2 minutes to find one. much less stressful than guessing from a pin on google maps" },
  { name: "Emma L.", country: "Netherlands", title: "Really useful", quote: "Simple and clear. We mixed paid sites and free camping on our first trip and kept coming back to it." },
  { name: "Hayden W.", country: "New Zealand", title: "Use it at home too", quote: "Camped here my whole life and still found spots I didn't know about, which was a bit humbling to be honest. The dump station and water filters are the ones I open most." },
  { name: "Jess A.", country: "Australia", title: "Sorted the self-contained thing out", quote: "Working out which sites actually needed certification used to take me forever, always second guessing whether we'd get a ticket. Having it separated out properly meant we just stopped worrying about it." },
  { name: "Thomas F.", country: "France", title: "Worked with no signal on the west coast", quote: "Westport down to the glaciers, basically no reception the whole way. Being able to open a site and still read everything made a real difference. That's the whole reason I keep it." },
  { name: "Niamh C.", country: "Ireland", title: "kept 6 of us organised!!", quote: "Six people, two vans, nobody had to ask where we were staying next. Reordering everything when the weather turned was easy which I did not expect." },
];

export default function Home() {
  const schema = homeSchema(metadata.description!, faqs as [string, string][]);
  return <>
    <Header />
    <main>
      <section className="hero">
        <div className="hero-glow"/>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="kicker"><TentTree size={14}/> The best camping app for New Zealand</span>
            <h1>New Zealand is big,<br/><em>your plan</em> can be simple</h1>
            <p>6,500+ places across New Zealand, bundled offline so they still open with no signal. Filter down to exactly what you need, save it, and turn the shortlist into a road trip with routes, distance, dates, notes and to-dos.</p>
            <div className="hero-actions"><DownloadCard/><Button asChild variant="outline" size="lg" className="rounded-[14px]"><Link href="/#how-it-works">See how it works <ArrowRight/></Link></Button></div>
            <div className="hero-proof"><span><strong>6,500+</strong><small>places across New Zealand</small></span><span><strong>Offline</strong><small>every place detail, no signal needed</small></span><span><strong>2,000+</strong><small>places to stay</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="image-slot hero-image-slot" style={{backgroundImage:"url(/images/kiwicamping-hero.webp)"}} role="img" aria-label="KiwiCamping map screen" />
          </div>
        </div>
      </section>

      <section className="trust-strip"><p>Campsites, caravan parks and useful stops across New Zealand.</p><div>{[TentTree,Caravan,Trees,Navigation,Map,CloudSun].map((Icon,i)=><span key={i}><Icon/>{["Campsites","Caravan parks","National parks","Rest areas","Useful stops","Experiences"][i]}</span>)}</div></section>

      <section className="section story-section" id="how-it-works">
        <div className="section-head"><div><p className="eyebrow">From idea to open road</p><h2>Find a camp.<br/>Build the trip.</h2></div><p>Filter down to tonight’s camp, save tomorrow’s possibilities into collections and keep the route, distance, dates, notes and to-dos together in one trip.</p></div>
        <div className="steps-grid">
          <article><Search/><h3>Find the exact place</h3><p>Search 6,500+ places, browse what is nearby, or stack filters until only the free camping areas with toilets and water in your corner of the map are left.</p></article>
          <article><Heart/><h3>Save it into a collection</h3><p>Like, star or mark a place as visited and the smart collections update themselves. Build your own named lists for a region, a season or a shortlist.</p></article>
          <article><Route/><h3>Turn it into a trip</h3><p>Order the stops, see the distance between them, add dates and notes, check each stop’s weather, get directions and tick them off as you go.</p></article>
        </div>
      </section>

      <section className="feature-stage" id="features">
        <div className="feature-intro"><p className="eyebrow">The full toolkit</p><h2>Find it. Save it.<br/>Plan the whole road ahead.</h2><p>Explore places, compare the details, organise favourites and build a trip that stays useful after the planning table.</p></div>
        <div className="feature-showcase">
          <div className="feature-copy-large"><div className="icon-tile"><MapPinned/></div><p className="eyebrow">Know the place before you get there</p><h3>Every place opens with the detail that decides it.</h3><p>Photos, a real description, opening hours, fees, terms and conditions, facilities grouped by type, current alerts, ratings, contact and booking details, the weather, and Street View to see the entrance from the road.</p><ul><li><Check/>Photos, hours, fees, conditions and facilities</li><li><Check/>Street View, weather and directions built in</li><li><Check/>Bundled offline, it opens with no signal</li></ul></div>
          <div className="product-images"><div className="image-slot product-shot product-shot-one" style={{backgroundImage:"url(/images/kiwicamping-feature-1.webp)"}} role="img" aria-label="KiwiCamping explore screen"/><div className="image-slot product-shot product-shot-two" style={{backgroundImage:"url(/images/kiwicamping-feature-2.webp)"}} role="img" aria-label="KiwiCamping place details screen"/></div>
        </div>
        <div className="feature-grid">{features.map(({icon:Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section itinerary-section">
        <div className="itinerary-image image-slot" style={{backgroundImage:"url(/images/kiwicamping-feature-3.webp)"}} role="img" aria-label="KiwiCamping trip planner screen"/>
        <div className="itinerary-copy"><p className="eyebrow">The main event</p><h2>Stop by stop.<br/>Day by <em>day.</em></h2><p>The trip planner is what everything else feeds. Add saved places as stops and drag them into the order you will actually drive. Every leg shows its distance, directions open to the next one, each stop carries its own date, arrival notes and weather, and you tick them off as visited while you travel. Nearby alternatives stay attached for the days that change, the packing list sits beside the itinerary, and the whole thing can sync to Calendar.</p><div className="metric-grid"><div><Route/><strong>Distance & directions</strong><small>leg by leg, and the whole trip</small></div><div><CalendarDays/><strong>Dates & notes</strong><small>attached to every stop</small></div><div><ListChecks/><strong>Visited & to-dos</strong><small>progress you can see</small></div><div><CloudSun/><strong>Weather per stop</strong><small>beside the itinerary</small></div></div></div>
      </section>

      <section className="section guide-preview">
        <div className="guide-preview-head"><div><p className="eyebrow">Routes worth taking slowly</p><h2>Follow the coast.<br/><em>Cross the ranges.</em></h2></div><div><p>Choose a direction, save the camps that fit and turn the strongest stops into a route of your own.</p><Link href="/guides" className="text-link">Explore road trips <ArrowRight/></Link></div></div>
        <div className="article-grid guide-preview-grid">{articles.filter(a=>a.category==="Road trips").slice(0,5).map((a,i)=><ArticleCard article={a} priority={i===0} key={a.slug}/>)}</div>
      </section>

      <section className="section audiences"><div className="audience-copy"><p className="eyebrow">However you carry home</p><h2>Made for tents,<br/>vans and <em>big laps.</em></h2></div><div className="audience-grid">{[["Backpackers","Make a tight budget and flexible route work together.",Binoculars],["Campervans","Find the facilities, access and overnight mix you need.",Caravan],["Caravans & big rigs","Filter for space, services and practical access notes.",Navigation],["Weekend campers","Keep nearby favourites ready when Friday arrives.",TentTree]].map(([t,d,I])=>{const Icon=I as typeof TentTree;return <article key={t as string}><Icon/><h3>{t as string}</h3><p>{d as string}</p></article>})}</div></section>

      <section className="reviews-section">
        <div className="reviews-head"><div><p className="eyebrow">What travellers say</p><h2>Made for plans<br/>that <em>change.</em></h2></div></div>
        <div className="review-wall">{reviews.map((review,i)=><article className={`review-card review-${i+1}`} key={review.name}><div className="review-stars">★★★★★</div><h3>{review.title}</h3><blockquote>“{review.quote}”</blockquote><footer><span className="review-avatar">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.country}</small></span></footer></article>)}</div>
      </section>

      <section className="principles"><div><ShieldCheck/><h2>Useful first.<br/>Honest always.</h2></div><div className="principle-list"><article><div><h3>Signs beat screens</h3><p>On-site notices, land managers and current emergency advice always take priority over a listing.</p></div></article><article><div><h3>Current checks matter</h3><p>Check the latest booking, road, fire and closure updates before departure.</p></div></article><article><div><h3>Leave places better</h3><p>Legal camping, thoughtful waste disposal and respect for the whenua keep these places open.</p></div></article></div></section>

      <section className="section faq-section"><div><p className="eyebrow">A few straight answers</p><h2>Good questions.<br/><em>Clear answers.</em></h2><p>Still stuck? <Link href="/support">Visit support</Link> or send us a note.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="download-section"><div className="download-image image-slot" style={{backgroundImage:"url(/images/kiwicamping-feature-6.webp)"}} role="img" aria-label="KiwiCamping app screen"/><div className="download-copy"><p className="eyebrow">Your next place is out there</p><h2>Find it. Save it.<br/><em>Plan the road ahead.</em></h2><p>6,500+ New Zealand places offline, filters sharp enough to find the exact one, collections that organise themselves and a trip planner that holds the whole route. KiwiCamping for iOS.</p><DownloadCard/></div></section>
    </main>
    <Button asChild className="mobile-cta"><a href={APP_STORE_URL} aria-label="Download KiwiCamping for iOS"><FaApple aria-hidden="true"/><span>Download</span></a></Button>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
