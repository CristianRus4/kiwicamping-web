import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Binoculars, CalendarDays, Caravan, Check, CircleDollarSign, CloudSun, Heart, ListChecks, Map, MapPinned, Navigation, Route, Search, ShieldCheck, TentTree, Trees } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadCard } from "@/components/download-card";
import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, SITE_URL, articles } from "@/lib/site";

export const metadata: Metadata = {
  title: "KiwiCamping | Find camps, plan road trips and explore New Zealand",
  description: "Explore 4,500+ campsites, caravan parks, rest areas and useful stops across New Zealand. Filter places, save collections and plan every road trip in one iPhone app.",
  alternates: { canonical: "/" },
};

const features = [
  {icon: Heart, title:"Save every place worth returning to", text:"Star favourites, mark places visited or wanted, and organise camps into custom collections for this weekend or the next big lap."},
  {icon: Route, title:"Plan the complete trip", text:"Put every overnight stop in order, follow the route between them and see the total driving distance before committing to the plan."},
  {icon: ListChecks, title:"Keep notes and to-dos with the route", text:"Attach arrival notes to individual stops and keep the trip checklist beside the itinerary, where it is useful on the road."},
  {icon: CircleDollarSign, title:"Read costs in your currency", text:"Compare reported place costs in the currency you understand instead of converting every stop by hand."},
  {icon: CloudSun, title:"Check the weather around each stay", text:"See current conditions and the forecast while choosing between camps, then recheck official warnings before leaving coverage."},
  {icon: Binoculars, title:"Look Around before the turnoff", text:"Use Apple Look Around where coverage exists to understand the entrance, road and surrounding area before arrival."},
];

const faqs = [
  ["What is KiwiCamping?", "KiwiCamping is an iPhone app for finding places to camp and stay around New Zealand, comparing practical details, saving places and building road trips stop by stop."],
  ["What places are included?", "The bundled directory covers more than 4,500 places: campsites, backcountry huts, holiday parks and other bookable stays, freedom camping areas, dump stations and day-use places."],
  ["Does it work without reception?", "The app bundles its place directory so core place data remains available beyond reliable signal. Live services such as current weather, directions and some map content still need connectivity."],
  ["Can I plan a multi-stop road trip?", "Yes. Create a trip, order stops, add dates and notes, view route distance, track visited places, add packing tasks and sync itinerary details to Calendar."],
  ["Can I filter for free camps or caravan access?", "Yes. Filters cover place type, fee, booking and practical details such as water, toilets, power, dogs, waterfront location and vehicle access."],
  ["Can I see prices in my own currency?", "Yes. KiwiCamping can present reported place costs in your selected currency, making it easier to compare options while travelling."],
  ["Can I book a campsite in KiwiCamping?", "Open the booking details for a place to contact its provider and check live availability, prices and terms."],
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
  const schema = {"@context":"https://schema.org","@graph":[{"@type":"WebSite",name:"KiwiCamping",url:SITE_URL,description:metadata.description},{"@type":"MobileApplication",name:"KiwiCamping",operatingSystem:"iOS",applicationCategory:"TravelApplication",description:metadata.description},{"@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}]};
  return <>
    <Header />
    <main>
      <section className="hero">
        <div className="hero-glow"/>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="kicker"><TentTree size={14}/> The best camping app for New Zealand</span>
            <h1>New Zealand is big.<br/><em>Your plan</em> can be simple.</h1>
            <p>Find camps, save the places that matter and turn them into a complete road trip with routes, distance, dates, notes and to-dos.</p>
            <div className="hero-actions"><DownloadCard/><Button asChild variant="outline" size="lg" className="w-[170px] rounded-[14px]"><Link href="/#how-it-works">See how it works <ArrowRight/></Link></Button></div>
            <div className="hero-proof"><span><strong>4,500+</strong><small>places across New Zealand</small></span><span><strong>2,000+</strong><small>places to stay</small></span><span><strong>Offline</strong><small>core place details</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="image-slot hero-image-slot" style={{backgroundImage:"url(/images/kiwicamping-hero.webp)"}} role="img" aria-label="KiwiCamping map screen" />
          </div>
        </div>
      </section>

      <section className="trust-strip"><p>Campsites, caravan parks and useful stops across New Zealand.</p><div>{[TentTree,Caravan,Trees,Navigation,Map,CloudSun].map((Icon,i)=><span key={i}><Icon/>{["Campsites","Caravan parks","National parks","Rest areas","Useful stops","Experiences"][i]}</span>)}</div></section>

      <section className="section story-section" id="how-it-works">
        <div className="section-head"><div><p className="eyebrow">From idea to open road</p><h2>Find a camp.<br/>Build the trip.</h2></div><p>Find tonight’s camp, save tomorrow’s possibilities and keep the route, distance, notes and to-dos together.</p></div>
        <div className="steps-grid">
          <article><Search/><h3>Find the right place</h3><p>Search 4,500+ places, browse nearby and filter for the access, facilities and price that suit your setup.</p></article>
          <article><Heart/><h3>Save places without losing them</h3><p>Keep favourites, future stops and custom collections organised while the route is still taking shape.</p></article>
          <article><Route/><h3>Turn saved places into a trip</h3><p>Order the stops, calculate the route and distance, then add dates, notes and to-dos to the same plan.</p></article>
        </div>
      </section>

      <section className="feature-stage" id="features">
        <div className="feature-intro"><p className="eyebrow">The full toolkit</p><h2>Find it. Save it.<br/>Plan the whole road ahead.</h2><p>Explore places, compare the details, organise favourites and build a trip that stays useful after the planning table.</p></div>
        <div className="feature-showcase">
          <div className="feature-copy-large"><div className="icon-tile"><MapPinned/></div><p className="eyebrow">Explore and save</p><h3>New Zealand’s camping places, ready for a real plan.</h3><p>Move from national parks to caravan parks, free camps, rest areas and useful services, then save the strongest options directly into collections and trips.</p><ul><li><Check/>Map, list and satellite views</li><li><Check/>Powerful access and facility filters</li><li><Check/>Offline core place details</li></ul></div>
          <div className="product-images"><div className="image-slot product-shot product-shot-one" style={{backgroundImage:"url(/images/kiwicamping-feature-1.webp)"}} role="img" aria-label="KiwiCamping explore screen"/><div className="image-slot product-shot product-shot-two" style={{backgroundImage:"url(/images/kiwicamping-feature-2.webp)"}} role="img" aria-label="KiwiCamping place details screen"/></div>
        </div>
        <div className="feature-grid">{features.map(({icon:Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section itinerary-section">
        <div className="itinerary-image image-slot" style={{backgroundImage:"url(/images/kiwicamping-feature-3.webp)"}} role="img" aria-label="KiwiCamping trip planner screen"/>
        <div className="itinerary-copy"><p className="eyebrow">A planner that comes along</p><h2>Stop by stop.<br/>Day by <em>day.</em></h2><p>Turn saved places into an ordered route you can understand at a glance. Calculate the drive, add dates and stop notes, keep to-dos beside the itinerary and hold nearby alternatives for the days that change.</p><div className="metric-grid"><div><Route/><strong>Route & distance</strong><small>across ordered stops</small></div><div><CalendarDays/><strong>Dates & notes</strong><small>attached to every stop</small></div><div><ListChecks/><strong>Trip to-dos</strong><small>and packing tasks together</small></div><div><CloudSun/><strong>Place weather</strong><small>when live data is available</small></div></div></div>
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

      <section className="download-section"><div className="download-image image-slot" style={{backgroundImage:"url(/images/kiwicamping-feature-6.webp)"}} role="img" aria-label="KiwiCamping app screen"/><div className="download-copy"><p className="eyebrow">Your next place is out there</p><h2>Find it. Save it.<br/><em>Plan the road ahead.</em></h2><p>Explore New Zealand, organise favourite places and keep the route, distance, notes and to-dos together in KiwiCamping for iOS.</p><DownloadCard/></div></section>
    </main>
    <Button asChild className="mobile-cta"><a href={APP_STORE_URL} aria-label="Download KiwiCamping for iOS"><FaApple aria-hidden="true"/><span>Download</span></a></Button>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
