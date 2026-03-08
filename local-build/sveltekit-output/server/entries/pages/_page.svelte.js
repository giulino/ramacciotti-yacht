import { a as attr_class, b as attr, s as stringify, e as ensure_array_like, d as escape_html, h as head } from "../../chunks/index.js";
import { F as Footer } from "../../chunks/Footer.js";
import { F as FullscreenMenu } from "../../chunks/FullscreenMenu.js";
import "clsx";
import { C as ConsultationForm } from "../../chunks/ConsultationForm.js";
import { e as events } from "../../chunks/events.js";
function HomeStickyPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const navLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "#about" },
      { label: "Fleet", href: "#fleet-overview" },
      { label: "The Club", href: "#club" },
      { label: "Corporate", href: "#corporate-circle" },
      { label: "Journal", href: "#journal-home" }
    ];
    let menuOpen = false;
    function closeMenu() {
      menuOpen = false;
    }
    $$renderer2.push(`<div${attr_class(`home-sticky-panel ${stringify("")}`, "svelte-1n2b91h")}${attr("aria-hidden", true)}><div class="home-sticky-panel__bar svelte-1n2b91h"><button type="button" class="home-sticky-panel__menu svelte-1n2b91h" aria-label="Open menu"${attr("aria-expanded", menuOpen)} aria-controls="home-sticky-menu-panel"><span class="home-sticky-panel__menu-icon svelte-1n2b91h" aria-hidden="true"><span class="svelte-1n2b91h"></span> <span class="svelte-1n2b91h"></span></span> <span class="home-sticky-panel__menu-label svelte-1n2b91h">Menu</span></button> <a href="/" class="home-sticky-panel__brand svelte-1n2b91h" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BLU_COMPLETO.png" alt="Ramacciotti Yachts" loading="eager" decoding="async" class="svelte-1n2b91h"/></a> <nav class="home-sticky-panel__links svelte-1n2b91h" aria-label="Page shortcuts"><a href="#home-enquiry" class="svelte-1n2b91h">Contacts</a></nav></div></div> `);
    FullscreenMenu($$renderer2, {
      open: menuOpen,
      navLinks,
      panelId: "home-sticky-menu-panel",
      onclose: closeMenu
    });
    $$renderer2.push(`<!---->`);
  });
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const menuLinks = [
      { label: "Home", href: "/" },
      { label: "About", href: "#about" },
      { label: "Fleet", href: "#fleet-overview" },
      { label: "The Club", href: "#club" },
      { label: "Corporate", href: "#corporate-circle" },
      { label: "Journal", href: "#journal-home" }
    ];
    let menuOpen = false;
    function closeMenu() {
      menuOpen = false;
    }
    $$renderer2.push(`<section class="hero-shell svelte-gzujjl"><div class="hero-sticky-stage svelte-gzujjl"><header class="hero-top-nav svelte-gzujjl" aria-label="Primary"><button type="button" class="hero-menu-trigger svelte-gzujjl" aria-label="Open menu"${attr("aria-expanded", menuOpen)} aria-controls="hero-menu-panel"><span class="hero-menu-icon svelte-gzujjl" aria-hidden="true"><span class="hero-menu-line hero-menu-line-top svelte-gzujjl"></span> <span class="hero-menu-line hero-menu-line-bottom svelte-gzujjl"></span></span> <span>Menu</span></button> <a href="/" class="hero-brand-mark svelte-gzujjl" aria-label="Ramacciotti Yachts"><img src="/LOGO/RAMACCIOTTI_BLU_COMPLETO.png" alt="Ramacciotti Yachts" class="hero-brand-logo svelte-gzujjl" loading="eager" decoding="async"/></a> <nav class="hero-quick-links svelte-gzujjl" aria-label="Quick links"><a href="#home-enquiry" class="svelte-gzujjl">Contacts</a></nav></header> <div class="hero-copy-block svelte-gzujjl"><h1 class="hero-title svelte-gzujjl"><span class="hero-title-italic svelte-gzujjl">The Art</span> <span class="svelte-gzujjl">of Yacht Chartering</span></h1> <a href="#fleet-overview" class="hero-cta svelte-gzujjl">Discover the fleet</a></div> <div class="hero-media-positioner svelte-gzujjl"><div class="hero-media-frame svelte-gzujjl"><video class="hero-media-video svelte-gzujjl" autoplay="" muted="" loop="" playsinline="" preload="auto" aria-label="Ramacciotti Yachts hero film"><source src="/videos/video.mov" type="video/quicktime"/></video></div></div></div> <div class="hero-anchor svelte-gzujjl" aria-hidden="true"></div></section> `);
    FullscreenMenu($$renderer2, {
      open: menuOpen,
      navLinks: menuLinks,
      panelId: "hero-menu-panel",
      onclose: closeMenu
    });
    $$renderer2.push(`<!---->`);
  });
}
function HomeAboutSection($$renderer) {
  $$renderer.push(`<section id="about" class="home-about-text svelte-1xmint6"><a href="/" class="about-text-corner-logo svelte-1xmint6" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BLU_MONOGRAMMA.png" alt="Ramacciotti Yachts monogram" loading="eager" decoding="async" class="svelte-1xmint6"/></a> <div class="about-container svelte-1xmint6"><div class="about-layout svelte-1xmint6"><div class="about-compass-wrap svelte-1xmint6" aria-label="Ramacciotti philosophy pillars"><article class="about-pillar about-pillar-boutique svelte-1xmint6"><h3 class="about-pillar-title svelte-1xmint6">boutique</h3> <p class="about-pillar-text svelte-1xmint6">We intentionally limit our seasonal charters to preserve quality, focus, and care.</p></article> <article class="about-pillar about-pillar-elegance svelte-1xmint6"><h3 class="about-pillar-title svelte-1xmint6">italian elegance</h3> <p class="about-pillar-text svelte-1xmint6">A calm balance of refinement, authenticity, and effortless style, felt in every detail.</p></article> <article class="about-pillar about-pillar-tailored svelte-1xmint6"><h3 class="about-pillar-title svelte-1xmint6">tailored</h3> <p class="about-pillar-text svelte-1xmint6">Each journey is custom-built around your rhythm, priorities, and personal expectations.</p></article> <article class="about-pillar about-pillar-discreet svelte-1xmint6"><h3 class="about-pillar-title svelte-1xmint6">discreet</h3> <p class="about-pillar-text svelte-1xmint6">Confidentiality is a standard: every step of your voyage remains private and protected.</p></article></div></div></div></section>`);
}
function HomeDestinationsSection($$renderer) {
  const destinations = [
    {
      name: "The Caribbean",
      tagline: "The Caribbean — winter, reimagined.",
      bestSeason: "December - April",
      description: "A collection of islands shaped by light and rhythm — St. Barth, Antigua, the Bahamas, Cayman Islands. Warm winds, long lunches on deck, evenings of quiet laughter under starlit skies. A winter chapter written in turquoise.",
      cta: "Enquire for Caribbean Voyages",
      image: "/images/destinations/CARAIBI1.jpg"
    },
    {
      name: "Sardinia & Costa Smeralda",
      tagline: "Sardinia — where summer becomes an art form.",
      bestSeason: "June - September",
      description: "Days of barefoot elegance between hidden coves and the unmistakable hum of Porto Cervo. The scent of the sea, Italian music in the distance, and the timeless ease of Mediterranean living. The heart of Mediterranean grace.",
      cta: "Plan a Sardinia Voyage",
      image: "/images/destinations/SARDINIA2.jpg"
    },
    {
      name: "The Ligurian Riviera",
      tagline: "Liguria — where color meets the sea.",
      bestSeason: "May - October",
      description: "Sail along a coastline painted with charm — Portofino, Camogli, Cinque Terre. Mornings of espresso and sea spray, evenings of lights flickering on the harbor. A voyage of light, cliffs, and quiet Italian rhythm.",
      cta: "Request Itinerary Inspiration",
      image: "/images/fleet/folgore-88/folgore-88-06.jpg"
    }
  ];
  $$renderer.push(`<section id="destinations" class="home-destinations svelte-g7qdi2"><a href="/" class="destinations-corner-logo svelte-g7qdi2" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BLU_MONOGRAMMA.png" alt="Ramacciotti Yachts monogram" loading="lazy" decoding="async" class="svelte-g7qdi2"/></a> <header class="destinations-intro svelte-g7qdi2"><p class="destinations-kicker svelte-g7qdi2">Our Destinations</p> <h2 class="svelte-g7qdi2">Journeys Curated by Feeling</h2> <p class="svelte-g7qdi2">At Ramacciotti Yachts, we curate journeys defined not by distance, but by feeling. From the turquoise calm
			of the Caribbean to the timeless allure of the Mediterranean, each destination is chosen for its spirit, its
			elegance, and its sense of belonging.</p></header> <section class="destinations-editorial svelte-g7qdi2"><!--[-->`);
  const each_array = ensure_array_like(destinations);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let destination = each_array[index];
    $$renderer.push(`<article${attr_class(`destination-block ${stringify(index % 2 === 1 ? "is-reversed" : "")}`, "svelte-g7qdi2")}><div class="destination-media svelte-g7qdi2"><img${attr("src", destination.image)}${attr("alt", destination.name)} loading="lazy" decoding="async" class="svelte-g7qdi2"/></div> <div class="destination-copy svelte-g7qdi2"><p class="destination-region svelte-g7qdi2">${escape_html(destination.name)}</p> <h3 class="svelte-g7qdi2">`);
    if (destination.name === "Sardinia & The Costa Smeralda") {
      $$renderer.push("<!--[-->");
      $$renderer.push(`Sardinia — where summer becomes an <span class="destination-emphasis svelte-g7qdi2">art form</span>.`);
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push(`${escape_html(destination.tagline)}`);
    }
    $$renderer.push(`<!--]--></h3> <p class="svelte-g7qdi2">${escape_html(destination.description)}</p> <p class="destination-season svelte-g7qdi2">Best Season: ${escape_html(destination.bestSeason)}</p> <a href="#home-enquiry" class="destination-cta svelte-g7qdi2">${escape_html(destination.cta)}</a></div></article>`);
  }
  $$renderer.push(`<!--]--></section></section>`);
}
function HomeFleetSection($$renderer) {
  const vessel = {
    name: "Riva Folgore 88",
    image: "/images/fleet/folgore-88/folgore-88-01.jpg",
    length: "88 ft",
    guests: "8 guests",
    style: "Sport flybridge",
    cruising: "Mediterranean day and multi-day charters"
  };
  $$renderer.push(`<section id="fleet" class="home-fleet svelte-1x5aeip"><header id="fleet-overview" class="fleet-heading-wrap svelte-1x5aeip"><h2 class="fleet-heading svelte-1x5aeip"><span class="fleet-heading-main svelte-1x5aeip">OUR</span> <span class="fleet-heading-italic svelte-1x5aeip">Fleet</span></h2></header> <div class="fleet-stage svelte-1x5aeip"${attr("aria-label", `${vessel.name} feature image`)}><a href="/" class="fleet-corner-logo svelte-1x5aeip" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BIANCO_MONOGRAMMA.png" alt="Ramacciotti Yachts monogram" loading="lazy" decoding="async" class="svelte-1x5aeip"/></a> <img${attr("src", vessel.image)}${attr("alt", `${vessel.name} yacht`)} class="fleet-image is-active svelte-1x5aeip" loading="eager" decoding="async"/> <div class="fleet-info svelte-1x5aeip"><button type="button" class="fleet-info-trigger svelte-1x5aeip"${attr("aria-label", `View quick details for ${vessel.name}`)}><span class="fleet-info-icon svelte-1x5aeip" aria-hidden="true"><span class="fleet-info-icon-dot svelte-1x5aeip"></span> <span class="fleet-info-icon-stem svelte-1x5aeip"></span></span></button> <div class="fleet-info-panel svelte-1x5aeip"${attr("aria-label", `${vessel.name} quick details`)}><p class="fleet-info-title svelte-1x5aeip">${escape_html(vessel.name)}</p> <dl class="fleet-info-grid svelte-1x5aeip"><div class="svelte-1x5aeip"><dt class="svelte-1x5aeip">Length</dt> <dd class="svelte-1x5aeip">${escape_html(vessel.length)}</dd></div> <div class="svelte-1x5aeip"><dt class="svelte-1x5aeip">Guests</dt> <dd class="svelte-1x5aeip">${escape_html(vessel.guests)}</dd></div> <div class="svelte-1x5aeip"><dt class="svelte-1x5aeip">Style</dt> <dd class="svelte-1x5aeip">${escape_html(vessel.style)}</dd></div> <div class="svelte-1x5aeip"><dt class="svelte-1x5aeip">Cruising</dt> <dd class="svelte-1x5aeip">${escape_html(vessel.cruising)}</dd></div></dl></div></div> <a href="/fleet-showcase" data-sveltekit-reload="" class="fleet-discover-cta svelte-1x5aeip"${attr("aria-label", `Discover more about ${vessel.name}`)}>Discover more</a></div></section>`);
}
function HomeClubSection($$renderer) {
  $$renderer.push(`<section id="club" class="home-club svelte-1sztp8b"><a href="/" class="club-corner-logo svelte-1sztp8b" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BLU_CLUB.png" alt="Ramacciotti Club logo" loading="lazy" decoding="async" class="svelte-1sztp8b"/></a> <section class="club-intro svelte-1sztp8b"><h3 class="svelte-1sztp8b">Belonging begins when the voyage ends.</h3> <p class="svelte-1sztp8b">Ramacciotti Club is the natural continuation of our voyages — a private circle reserved for those who
			have experienced the care of sailing with us. It’s not a membership in the traditional sense, but a way of
			belonging. A connection that extends beyond the sea, defined by shared elegance, trust, and the quiet
			privileges of returning home to something familiar.</p></section> <section class="club-feature svelte-1sztp8b"><div class="club-feature-media svelte-1sztp8b"><img src="/images/club/club-table-setting.jpg" alt="Ramacciotti Club table setting" class="club-feature-image svelte-1sztp8b" loading="lazy" decoding="async"/></div> <div class="club-feature-content svelte-1sztp8b"><p class="club-feature-kicker svelte-1sztp8b">The Club</p> <p class="svelte-1sztp8b">For our returning guests, the Founders’ Circle represents continuity. It offers access to private
				gatherings, early voyage previews, and collaborations with select partners in hospitality and lifestyle.
				Each journey deepens the connection — every return feels like being welcomed back into something
				personal.</p> <a href="/club" class="club-feature-cta svelte-1sztp8b">Discover the Club</a></div></section> <p class="club-membership-note svelte-1sztp8b">Membership is by invitation or through chartering with Ramacciotti Yachts.</p></section>`);
}
function HomeCorporateSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section id="corporate-circle" class="home-corporate svelte-1o7mmzs"><a href="/" class="corporate-corner-logo svelte-1o7mmzs" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BLU_MONOGRAMMA.png" alt="Ramacciotti Yachts monogram" loading="lazy" decoding="async" class="svelte-1o7mmzs"/></a> <section class="corporate-intro svelte-1o7mmzs"><p class="corporate-kicker svelte-1o7mmzs">Corporate Circle</p> <h2 class="svelte-1o7mmzs">Corporate Voyages</h2> <p class="svelte-1o7mmzs">The Ramacciotti Yachts Corporate Voyages division is dedicated to creating private, high-end experiences
			for companies seeking an elegant alternative to conventional corporate hospitality. Each voyage is tailored
			to reflect your brand's identity, blending professionalism and pleasure with seamless execution and absolute
			discretion. Whether designed for leadership retreats, client entertainment, or executive incentives, every
			detail is curated with precision and intent.</p></section> <section class="corporate-experiences svelte-1o7mmzs"><h3 class="svelte-1o7mmzs">Signature Experiences</h3> <div class="corporate-cards svelte-1o7mmzs"><article class="corporate-card svelte-1o7mmzs"><div class="corporate-card-icon svelte-1o7mmzs" aria-hidden="true"></div> <h4 class="svelte-1o7mmzs">Executive Retreats</h4> <p class="svelte-1o7mmzs">For leadership teams who value focus, privacy, and rejuvenation — days of strategy balanced with
					calm horizons.</p></article> <article class="corporate-card svelte-1o7mmzs"><div class="corporate-card-icon svelte-1o7mmzs" aria-hidden="true"></div> <h4 class="svelte-1o7mmzs">Client Entertainment</h4> <p class="svelte-1o7mmzs">An elegant setting to nurture relationships — fine dining on deck, sunset aperitifs, and
					destinations that impress.</p></article> <article class="corporate-card svelte-1o7mmzs"><div class="corporate-card-icon svelte-1o7mmzs" aria-hidden="true"></div> <h4 class="svelte-1o7mmzs">Incentive Voyages</h4> <p class="svelte-1o7mmzs">Reward excellence with experiences that inspire — a curated journey blending leisure, exclusivity,
					and recognition.</p></article></div> <a href="/corporate" class="corporate-cta svelte-1o7mmzs">Request Brochure</a></section> <section class="corporate-why svelte-1o7mmzs"><p class="corporate-why-kicker svelte-1o7mmzs">Why Choose Ramacciotti Yachts</p> <h3 class="svelte-1o7mmzs">Corporate hospitality, redefined.</h3> <div class="corporate-pillars svelte-1o7mmzs"><article class="corporate-pillar svelte-1o7mmzs"><h4 class="svelte-1o7mmzs">Discretion</h4> <p class="svelte-1o7mmzs">NDAs and private-crew briefings ensure confidentiality on every voyage.</p></article> <article class="corporate-pillar svelte-1o7mmzs"><h4 class="svelte-1o7mmzs">Professionalism</h4> <p class="svelte-1o7mmzs">Seamless coordination with corporate planners, tailored invoices, and compliant documentation.</p></article> <article class="corporate-pillar svelte-1o7mmzs"><h4 class="svelte-1o7mmzs">Flexibility</h4> <p class="svelte-1o7mmzs">Custom scheduling, weather contingency policies, and adaptable itineraries.</p></article> <article class="corporate-pillar svelte-1o7mmzs"><h4 class="svelte-1o7mmzs">Continuity</h4> <p class="svelte-1o7mmzs">A dedicated liaison before, during, and after each charter — one point of contact for the entire
					journey.</p></article></div> <p class="corporate-note svelte-1o7mmzs">All operations managed under CYBA and MYBA standards, ensuring full transparency and compliance.</p> <a href="/corporate" class="corporate-cta corporate-cta-secondary svelte-1o7mmzs">Design a Corporate Voyage</a></section></section>`);
  });
}
function HomeJournalSection($$renderer) {
  const launchArticles = [
    {
      title: "The Calm Between Coves",
      type: "Voyages",
      date: "March 2, 2026",
      excerpt: "Discover Sardinia through light, silence, and the effortless pace of summer.",
      image: "/images/destinations/SARDINIA2.jpg",
      href: "/journal"
    },
    {
      title: "Founders' Notes: The Art of Belonging",
      type: "Founder's Notes",
      date: "February 24, 2026",
      excerpt: "A reflection on why every charter is more than a voyage - it's a return.",
      image: "/images/fleet/casagnola-heritage/casagnola-heritage-06.jpeg",
      href: "/journal"
    }
  ];
  $$renderer.push(`<section id="journal-home" class="home-journal svelte-bbeyu0"><a href="/" class="journal-corner-logo svelte-bbeyu0" aria-label="Ramacciotti Yachts home"><img src="/LOGO/RAMACCIOTTI_BLU_MONOGRAMMA.png" alt="Ramacciotti Yachts monogram" loading="lazy" decoding="async" class="svelte-bbeyu0"/></a> <section class="journal-intro svelte-bbeyu0"><p class="journal-kicker svelte-bbeyu0">Journal</p> <h2 class="svelte-bbeyu0">The Journal</h2> <p class="svelte-bbeyu0">The Journal is our ongoing collection of stories, reflections, and seasonal notes from the world of
			Ramacciotti Yachts. From destination insight to founder perspective and selected partnerships, each entry
			is shaped with the same discretion, calm, and editorial clarity that define our voyages.</p> <div class="journal-categories svelte-bbeyu0" aria-label="Journal categories"><span class="svelte-bbeyu0">Voyages</span> <span class="svelte-bbeyu0">Founder's Notes</span> <span class="svelte-bbeyu0">Partners</span> <span class="svelte-bbeyu0">News</span></div></section> <section class="journal-grid svelte-bbeyu0"><!--[-->`);
  const each_array = ensure_array_like(launchArticles);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    $$renderer.push(`<a${attr("href", article.href)} class="journal-card svelte-bbeyu0"><div class="journal-card-image-wrap svelte-bbeyu0"><img${attr("src", article.image)}${attr("alt", article.title)} loading="lazy" decoding="async" class="svelte-bbeyu0"/></div> <div class="journal-card-copy svelte-bbeyu0"><p class="journal-card-meta svelte-bbeyu0"><span>${escape_html(article.type)}</span> <span>${escape_html(article.date)}</span></p> <h3 class="svelte-bbeyu0">${escape_html(article.title)}</h3> <p class="svelte-bbeyu0">${escape_html(article.excerpt)}</p></div></a>`);
  }
  $$renderer.push(`<!--]--></section> <div class="journal-cta-wrap svelte-bbeyu0"><a href="/journal" class="journal-pill svelte-bbeyu0">Read more</a></div></section>`);
}
function ContactCTA($$renderer) {
  $$renderer.push(`<section id="home-enquiry" class="home-enquiry svelte-1ct17u3"><div class="home-enquiry-shell svelte-1ct17u3"><div class="home-enquiry-copy svelte-1ct17u3"><p class="home-enquiry-kicker svelte-1ct17u3">Private Consultation</p> <h2 class="svelte-1ct17u3">Begin your journey with a conversation shaped around you.</h2> <p class="home-enquiry-intro svelte-1ct17u3">Share your timing, preferred destinations, and the atmosphere you want to create onboard. We reply
				personally with discretion, clarity, and a considered next step.</p> <div class="home-enquiry-details svelte-1ct17u3" aria-label="Consultation details"><p class="svelte-1ct17u3">Founder-led advisory</p> <p class="svelte-1ct17u3">Mediterranean and Caribbean itineraries</p> <p class="svelte-1ct17u3">Response within 24 hours</p></div></div> <div class="home-enquiry-form-wrap svelte-1ct17u3">`);
  ConsultationForm($$renderer, {
    context: "Home",
    title: "Request a private proposal",
    subtitle: "Tell us where you want to go and how you want it to feel. We will come back with a considered response.",
    variant: "light"
  });
  $$renderer.push(`<!----></div></div></section>`);
}
function HomeEventsSection($$renderer) {
  let activeEventIndex = null;
  $$renderer.push(`<section id="events-home" class="home-events svelte-1y29z1u"><div class="events-shell svelte-1y29z1u"><header class="events-header svelte-1y29z1u"><div><p class="events-kicker svelte-1y29z1u">Events</p> <h2 class="svelte-1y29z1u">Upcoming Events</h2></div> <a href="/journal" class="events-pill svelte-1y29z1u">View Journal</a></header> <div${attr_class("events-list svelte-1y29z1u", void 0, { "is-hovering": activeEventIndex !== null })}><!--[-->`);
  const each_array = ensure_array_like(events);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let event = each_array[index];
    $$renderer.push(`<a${attr("href", `/events/${event.slug}`)}${attr_class("event-row svelte-1y29z1u", void 0, { "event-active": activeEventIndex === index })}${attr("aria-label", `${event.title}, ${event.location}`)}><div class="event-date svelte-1y29z1u"${attr("aria-label", `${event.month} ${event.days}, ${event.year}`)}><span class="svelte-1y29z1u">${escape_html(event.month)} ${escape_html(event.days)}</span> <span class="svelte-1y29z1u">${escape_html(event.year)}</span></div> <div class="event-main svelte-1y29z1u"><h3 class="svelte-1y29z1u">${escape_html(event.title)}</h3> <p class="svelte-1y29z1u">${escape_html(event.location)}</p></div></a>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Ramacciotti Yachts | Home</title>`);
    });
  });
  HomeStickyPanel($$renderer);
  $$renderer.push(`<!----> `);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  HomeAboutSection($$renderer);
  $$renderer.push(`<!----> `);
  HomeFleetSection($$renderer);
  $$renderer.push(`<!----> `);
  HomeDestinationsSection($$renderer);
  $$renderer.push(`<!----> `);
  HomeClubSection($$renderer);
  $$renderer.push(`<!----> `);
  HomeCorporateSection($$renderer);
  $$renderer.push(`<!----> `);
  HomeJournalSection($$renderer);
  $$renderer.push(`<!----> `);
  HomeEventsSection($$renderer);
  $$renderer.push(`<!----> `);
  ContactCTA($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
