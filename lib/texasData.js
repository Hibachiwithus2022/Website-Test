// ─────────────────────────────────────────────────────────────────────────────
// Texas City Page Variation System
// 5 rotating variants for every content section.
// Applied automatically to Texas cities that don't have explicit CITY_DATA
// entries — gives every city a semantically distinct page without manual work.
// ─────────────────────────────────────────────────────────────────────────────

// ── Deterministic variant index from city slug ────────────────────────────────
// djb2-XOR hash ensures even distribution across all Texas city slugs.
export function getTexasVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) {
    h = (((h << 5) + h) ^ citySlug.charCodeAt(i)) >>> 0
  }
  return h % 5
}

// ── Hero subtitles — 5 Texas-specific tag lines ───────────────────────────────
export const TEXAS_HERO_SUBTITLES = [
  (city) => `Backyard Hibachi · ${city}'s Biggest Celebrations · From $60/Adult`,
  (city) => `Quinceañeras · Graduations · Corporate Events · We Come to Your ${city} Home`,
  (city) => `Live Fire Teppanyaki · Big Texas Parties · Serving ${city} & All Suburbs`,
  (city) => `Three Generations Around One Grill · Private Hibachi Chef in ${city}, TX`,
  (city) => `Skip the Brisket. Book a Hibachi Chef. · ${city} Backyard Events from $60`,
]

// ── Local highlights — 5 sets of 6 sidebar bullets ───────────────────────────
// These appear in the "Popular in [City]" sidebar inside CityIntro.
export const TEXAS_LOCAL_HIGHLIGHTS = [
  // 0 — Quinceañeras + graduation focus
  (city) => [
    `Quinceañeras and graduation parties in ${city} — groups of 25–60 are our sweet spot`,
    `May–June graduation season fills fast — book 3–4 weeks ahead for weekend dates`,
    `Multi-generational crowds from grandkids to grandparents — our chefs engage everyone`,
    `All-inclusive pricing: you provide tables and chairs, we bring everything else`,
    `Two chef stations for groups of 40+ — we've run events up to 120 guests in the area`,
    `Texas outdoor season runs 10 months — we operate year-round, rain plan included`,
  ],
  // 1 — Corporate + game-day focus
  (city) => [
    `Corporate team cookouts, client dinners, and company holiday parties in ${city}`,
    `Texans, Cowboys, Longhorns, and Aggies game-night watch parties — beats a catering truck every time`,
    `Multi-station setups for 40–100 employees — we've replaced BBQ caterers at corporate events across Texas`,
    `Neighborhood HOA block parties and subdivision get-togethers — flat surface is all we need`,
    `Same-day quotes — most ${city} bookings confirmed within hours of inquiry`,
    `Outdoor hibachi in ${city} works every month of the year — we schedule year-round`,
  ],
  // 2 — Outdoor living + weather focus
  (city) => [
    `Pool decks, covered patios, and pergola setups are our specialty in the ${city} area`,
    `Texas outdoor season means hibachi in ${city} works January through November`,
    `Evening events after 6 PM are the sweet spot in summer — cooler air, better atmosphere`,
    `Ranch, rural property, and large private land setups — we travel beyond city limits`,
    `Waterfront and lake-house events in the ${city} area — coastal setups fully covered`,
    `String lights up, grill on, guests seated — your backyard does all the work`,
  ],
  // 3 — Family + multi-generational focus
  (city) => [
    `Family reunions, quinceañeras, and milestone birthdays are our most-requested in ${city}`,
    `Kids get the flying shrimp and fire tricks — grandparents get front-row seats — everyone eats hot food`,
    `Every plate cooked to order individually — no shared platters, no cold chafing dishes`,
    `We've run 60-person family reunions in ${city}-area backyards — it's what we do`,
    `Gender reveals, baby showers, and military homecomings all on our ${city} calendar`,
    `Chef entertainment is included in every event — the show is part of the price`,
  ],
  // 4 — Value vs. BBQ catering focus
  (city) => [
    `Same backyard. Same crowd. Completely different night — hibachi beats catering every time`,
    `$60/adult covers the grill, propane, proteins, rice, vegetables, sauces, plates, and full cleanup`,
    `No tip anxiety, no per-item billing, no surprise charges — one transparent quote before you book`,
    `Premium upgrades available: filet mignon, lobster tail, scallops, gyoza — elevate any ${city} event`,
    `Fire tricks, onion volcano, and shrimp tosses are included at every ${city} event — not extras`,
    `Most ${city} events booked with 2–3 weeks notice; weekday availability on shorter notice`,
  ],
]

// ── Featured occasions — 5 rotating event-type grids ─────────────────────────
export const TEXAS_OCCASIONS = [
  // 0 — Quinceañeras + family-forward
  [
    'Quinceañeras', 'Graduation Parties', 'Birthday Parties',
    'Family Reunions', 'Corporate Team Events', 'Bachelorette Parties',
    'Football Watch Parties', 'Anniversary Dinners', 'Holiday Gatherings', 'Neighborhood Block Parties',
  ],
  // 1 — Corporate + occasions variety
  [
    'Corporate Team Events', 'Birthday Milestones', 'Graduation Parties',
    'Quinceañeras', 'Family Reunions', 'Bachelorette Parties',
    'Holiday Office Parties', 'Anniversary Dinners', 'Client Appreciation Dinners', 'HOA Block Parties',
  ],
  // 2 — Summer + outdoor lifestyle
  [
    'Pool Party Upgrades', 'Backyard Birthday Bashes', 'Graduation Celebrations',
    'Quinceañeras', 'Family Reunions', 'Summer Corporate Cookouts',
    'Anniversary Dinners', 'Bachelorette Weekends', 'Neighborhood Parties', 'Ranch & Property Events',
  ],
  // 3 — Multi-generational family events
  [
    'Family Reunions', 'Quinceañeras', 'Graduation Parties',
    'Birthday Milestones', 'Multi-Generational Gatherings', 'Anniversary Dinners',
    'Bachelorette Parties', 'Gender Reveals & Baby Showers', 'Holiday Celebrations', 'Military Homecomings',
  ],
  // 4 — Entertainment + game-day
  [
    'Birthday Blowouts', 'Quinceañeras', 'Corporate Events',
    'Bachelorette Parties', 'Graduation Parties', 'Family Reunions',
    'Game Night Watch Parties', 'Anniversary Dinners', 'Neighborhood Cookouts', 'Custom Celebrations',
  ],
]

// ── FAQ sets — 5 rotating sets of 6 city-specific Texas FAQs ─────────────────
export const TEXAS_FAQ_SETS = [
  // 0 — Quinceañeras + large events focus
  (city) => [
    {
      q: `Do you handle quinceañeras and large family celebrations in the ${city} area?`,
      a: `Absolutely — quinceañeras, family reunions, and multi-generational birthday parties are among our most-booked events across Greater Texas. Our chefs are experienced with groups of 30–60+ guests, and we run two chef stations simultaneously for larger head counts. We regularly serve families throughout the ${city} area and surrounding suburbs.`,
    },
    {
      q: `How do you handle Texas summer heat for outdoor events near ${city}?`,
      a: `We've been cooking through Texas summers for years. For May through September events we strongly recommend scheduling after 6 PM, when the temperature drops and the evening becomes comfortable. Covered patios, pergola setups, and pool-deck arrangements with shade all work great. Let us know your outdoor setup and we'll advise on the best configuration.`,
    },
    {
      q: `Can you accommodate a ${city}-area group of 40, 50, or 60+ guests?`,
      a: `Yes — for groups over 25 we bring a second chef station. For 40–60 guests, two stations run in parallel and the meal wraps in under two hours. We've handled 80–120+ guest events for corporate groups and large family celebrations across Texas. Give us your head count and we'll size the setup accordingly.`,
    },
    {
      q: `How far in advance should I book for a graduation or quinceañera in ${city}?`,
      a: `We recommend booking 3–4 weeks ahead for weekend events during graduation season (May–June) and any summer Saturday. Quinceañera parties with 40+ guests should book 4+ weeks out to secure availability and allow time for menu planning. Weekday events are usually available on shorter notice of 5–7 days.`,
    },
    {
      q: `Do you travel to suburbs and communities outside ${city} proper?`,
      a: `Yes — we cover the full metro area surrounding ${city} and most nearby communities. Most locations within 35 miles of the city center have no travel fee. For locations beyond that range, a travel fee may apply and will always be disclosed in your quote before booking.`,
    },
    {
      q: `Can you set up at a ranch or large rural property near ${city}?`,
      a: `Yes — ranch properties, rural land, and large private venues are no problem. We need a flat, stable surface (at least 10×10 ft) and vehicle access to the setup area. Describe your venue when requesting a quote and we'll confirm coverage and any applicable travel fees upfront.`,
    },
  ],
  // 1 — Corporate + logistics focus
  (city) => [
    {
      q: `Can you run a corporate team event or company cookout near ${city}?`,
      a: `Absolutely — corporate events are one of our biggest categories across Texas. We scale to any group size: one chef for 15–20 employees, two stations for 40–60, and multi-station configurations for 80–150+ person company cookouts. We've replaced BBQ catering at company events all over Texas — and most teams never go back.`,
    },
    {
      q: `How many guests can one chef serve, and when do you add a second station?`,
      a: `One chef comfortably serves 10–20 guests per session. For groups of 25+, we recommend two chef stations. We can scale to 200+ guests with multiple stations for large corporate events and family reunions in the ${city} area.`,
    },
    {
      q: `Can you set up at a venue, event space, or rented property near ${city}?`,
      a: `Yes — many of our events are at short-term rentals, rented halls, outdoor venues, and private event spaces. Always confirm with the property manager that outdoor cooking and open-flame cooking is permitted. We advise on space requirements during the quoting process.`,
    },
    {
      q: `What proteins are available for ${city} events?`,
      a: `Our standard menu includes chicken, steak, shrimp, and tofu (vegetarian). Premium add-ons include filet mignon (+$10), lobster tail (+$15), scallops (+$5), and salmon. Every guest chooses their own proteins — no shared platters, everything cooked to order at the grill.`,
    },
    {
      q: `Do you accommodate dietary restrictions or halal and vegetarian requests for ${city} events?`,
      a: `We do our best to accommodate dietary needs. Tofu and vegetable plates are available for vegetarian guests. For serious allergies, please let us know at booking so we can take precautions. For halal or specific religious dietary requirements, contact us directly before booking and we'll advise on what we can provide.`,
    },
    {
      q: `Are there any hidden fees I should know about for a ${city} event?`,
      a: `No hidden fees. Your price is $60/adult, $30/child (ages 4–12), $600 event minimum. Children 3 and under eat free. Travel fees may apply for locations more than 35 miles from our nearest chef base in Texas. All fees are disclosed in your quote — nothing surprises you at the event.`,
    },
  ],
  // 2 — Outdoor + weather + setup focus
  (city) => [
    {
      q: `Can you set up on a pool deck or covered patio in the ${city} area?`,
      a: `Yes — pool decks and covered patios are our most common setup in Texas. We need a flat, stable surface of at least 10×10 ft for the grill station, with enough perimeter space for guests to gather. Pool decks work great as long as the grill sits on solid, non-slip surface away from the water's edge.`,
    },
    {
      q: `What time of year is best for outdoor hibachi events near ${city}?`,
      a: `Texas outdoor season runs almost year-round — we operate from January through December. Summer events (June–August) are best scheduled after 6 PM to avoid peak heat. Fall and spring are ideal for afternoon or early-evening events. December events on covered patios are popular for corporate holiday parties.`,
    },
    {
      q: `What happens if it rains on the day of my ${city} event?`,
      a: `We offer a full credit — no penalty — for weather-related cancellations made more than 24 hours before the event. We always recommend having a covered backup location for outdoor-only setups. Covered patios, large garages, and open indoor spaces with ventilation work well as rain contingencies. We'll work with you to reschedule at no cost.`,
    },
    {
      q: `How much space does the hibachi setup need in my ${city} backyard?`,
      a: `Plan for a minimum 10×10 ft flat area for the grill and the chef. Guests typically stand or sit in a horseshoe arrangement around the station. For groups of 20+, allow approximately 2 ft of perimeter space per person. We'll review your space description before confirming your booking.`,
    },
    {
      q: `Can you cook at a ranch or waterfront property outside ${city}?`,
      a: `Yes — ranch properties, lake houses, coastal properties, and rural land are all serviceable. We need vehicle access and a flat stable surface. For locations more than 35 miles outside ${city}, a travel fee may apply. Waterfront setups near the Texas Gulf Coast and Hill Country lakes are among our favorites — describe your venue in the quote request.`,
    },
    {
      q: `Can hibachi be set up indoors for a ${city} event?`,
      a: `Yes — in spaces with proper ventilation: open garages, large living/dining areas, or covered patios adjacent to the home. We require at minimum 10×10 ft clearance and good air circulation for safety. Most ${city}-area events are outdoors, but we adapt to your space. Contact us to discuss your specific setup.`,
    },
  ],
  // 3 — Family + multi-generational focus
  (city) => [
    {
      q: `Is hibachi safe and entertaining for kids and elderly guests at a ${city} party?`,
      a: `Absolutely — hibachi events are multigenerational by design. Kids (ages 4+) are the most enthusiastic guests — the fire tricks, shrimp tosses, and chef banter keep them completely engaged. Elderly guests enjoy being seated comfortably around the grill and watching the performance from the front row. Children ages 4–12 are $30 each; 3 and under eat free.`,
    },
    {
      q: `Can you accommodate a ${city} family reunion of 40, 50, or 60+ guests?`,
      a: `Yes — multi-generational family reunions are one of our most-requested event types in Texas. For 40–60 guests we run two chef stations in parallel. For 60–120 guests, we add a third station. Every plate is cooked to order at the grill — no buffet, no cold food sitting out. Just give us your head count and we'll configure the setup accordingly.`,
    },
    {
      q: `What do I need to have ready before the chef arrives at my ${city} home?`,
      a: `Tables and chairs for your guests — that's it. We arrive 30 minutes before your event start to set up the teppan grill, arrange the station, and run a safety check. We bring all ingredients, sauces, plates, chopsticks, and serving utensils, plus full cleanup when the last course is done.`,
    },
    {
      q: `Do you do gender reveals, baby showers, or milestone birthday parties in ${city}?`,
      a: `Yes — all of the above. We accommodate special requests for themed events: custom protein arrangements, specific timing for reveals, and sequenced service to align with event schedules. Let us know what you have planned and we'll coordinate the chef's timing accordingly.`,
    },
    {
      q: `How long does a hibachi event typically last for a large ${city} family gathering?`,
      a: `One chef serving 10–20 guests typically runs 1.5 to 2 hours. Two stations for 40–60 guests run a similar 1.5–2 hour window. For very large groups (80+), plan for 2–2.5 hours including staggered service. Your chef will pace the meal to your timeline — just let us know if you have timing constraints.`,
    },
    {
      q: `Can you cook a second round if our ${city} family gathering goes long?`,
      a: `Yes — if your event runs longer or you have overflow guests arriving late, we can accommodate additional rounds. Let us know in advance and we'll plan accordingly. Additional servings are priced at the standard per-person rate and added to your final quote.`,
    },
  ],
  // 4 — Pricing + value + BBQ comparison focus
  (city) => [
    {
      q: `Is private hibachi more or less expensive than BBQ catering for a ${city} event?`,
      a: `Per-head costs are comparable to quality BBQ catering — around $60/adult — but hibachi includes a live chef performance at no extra charge. A BBQ caterer drops off food; we stay, cook, entertain, and clean up. For most Texas families and corporate groups, hibachi replaces the catering truck and becomes the main event rather than just the food.`,
    },
    {
      q: `Are there travel fees for ${city} suburbs or areas outside the city?`,
      a: `Most locations within 35 miles of our nearest Texas chef base have no travel fee. For locations beyond that range, a travel fee is calculated based on distance and disclosed upfront in your quote — no surprises. Contact us with your address and we'll confirm coverage and any applicable fees before you commit.`,
    },
    {
      q: `Can I add premium proteins like lobster tail or filet mignon to my ${city} event?`,
      a: `Yes — premium add-ons are available at any tier: lobster tail (+$15/person), filet mignon (+$10/person), scallops (+$5/person), gyoza (+$10), and salmon. Mix and match by guest — some can have premium, others standard. We accommodate per-guest customization at booking.`,
    },
    {
      q: `Is gratuity included in the $60/adult price for ${city} events?`,
      a: `Gratuity is not included in the base price — it's entirely at your discretion. Most ${city} hosts tip 15–20% of the total event cost, which is appreciated and goes directly to the chef. There's no tip anxiety or hidden service charge added to your invoice. Your quoted price is your price.`,
    },
    {
      q: `How do I get a quote for a ${city} hibachi event, and how fast is confirmation?`,
      a: `Submit a request through our booking or estimation page with your date, location, guest count, and any special requests. Most ${city}-area quotes are returned within a few hours. Weekend dates book quickly — if you have a specific date in mind, don't wait to reach out.`,
    },
    {
      q: `What's included in the $600 event minimum for a ${city} backyard party?`,
      a: `The $600 minimum covers 8–10 adults at the standard rate and includes the chef, full teppan grill setup, propane, all ingredients (proteins, fried rice, vegetables, salad, miso soup), house-made sauces, plates, chopsticks, and complete post-event cleanup. You supply the space and guest seating.`,
    },
  ],
]

// ── Testimonials — 5 sets of 3 Texas-authentic reviews ───────────────────────
export const TEXAS_TESTIMONIALS = [
  // 0 — Quinceañera + graduation + corporate
  [
    {
      text: '"My daughter\'s quinceañera after-party in our backyard — 55 guests, two chef stations, and every single person was cheering around that grill. Cousins came in from out of state and said it was the best party they\'d been to in years. Already planning a repeat for her brother\'s graduation."',
      name: 'Maria G.',
      city: 'Sugar Land, TX',
      event: 'Quinceañera Party',
      initials: 'MG',
    },
    {
      text: '"Graduation party for my son — 45 guests in the backyard, chef had the fire going and kids losing their minds over the tricks. Grandparents sat front-row and loved every second. Showed up on time, set up in 20 minutes, left the yard spotless."',
      name: 'Denise & Kevin W.',
      city: 'Pearland, TX',
      event: 'Graduation Party',
      initials: 'DW',
    },
    {
      text: '"Company cookout for 70 employees — outdoor setup, two chefs running back to back. Nobody left the grill the whole evening. We ditched our boring BBQ caterer and this is the only way we do company events from now on."',
      name: 'James T.',
      city: 'Houston, TX',
      event: 'Corporate Event',
      initials: 'JT',
    },
  ],
  // 1 — Birthday + bachelorette + team dinner
  [
    {
      text: '"Booked for my 40th birthday — 30 guests in the backyard, chef was an absolute showman. The onion volcano got a standing ovation. Nobody has ever come to a birthday party of mine and said \'best one yet\' before. Now they all say it."',
      name: 'Brittany S.',
      city: 'Frisco, TX',
      event: 'Birthday Party',
      initials: 'BS',
    },
    {
      text: '"Bachelorette weekend — hibachi night was the highlight of the whole trip. Chef had 18 of us completely hysterical the whole time. Way more memorable than a restaurant. The bride still talks about it."',
      name: 'Rachel C.',
      city: 'Plano, TX',
      event: 'Bachelorette Party',
      initials: 'RC',
    },
    {
      text: '"Annual team dinner — 45 people, two stations, everyone raving about it. Replaced our standing restaurant reservation and the team voted it the best work event we\'ve done. Already booked for next year."',
      name: 'Mark H.',
      city: 'The Woodlands, TX',
      event: 'Corporate Dinner',
      initials: 'MH',
    },
  ],
  // 2 — Pool party + family reunion + ranch
  [
    {
      text: '"Pool party birthday — 35 guests, hibachi setup on the deck. Chef had flames going while everyone was still in the pool and they all came rushing out. It was electric. Best summer party we\'ve thrown."',
      name: 'Sandra L.',
      city: 'Katy, TX',
      event: 'Birthday Party',
      initials: 'SL',
    },
    {
      text: '"Family reunion — 60+ people, three generations. The chef engaged every single one of them. Kids were trying to catch shrimp mid-air, the older folks were cheering from folding chairs. Never seen the whole family that animated."',
      name: 'The Reyes Family',
      city: 'League City, TX',
      event: 'Family Reunion',
      initials: 'RF',
    },
    {
      text: '"We hosted on our ranch property about 40 miles outside the city — asked if they\'d travel. Not only did they come out, but the setup on the open land with the fire going against the night sky was something else. 50 guests, zero complaints."',
      name: 'Tom & Janet B.',
      city: 'Georgetown, TX',
      event: 'Ranch Event',
      initials: 'TB',
    },
  ],
  // 3 — Milestone birthday + HOA party + holiday corporate
  [
    {
      text: '"60th birthday party for my husband — 40 guests including his whole extended family. Chef played to the crowd perfectly: fire tricks for the grandkids, stories for the adults. My husband said it was the best birthday he\'s ever had."',
      name: 'Carmen & Felix R.',
      city: 'Cypress, TX',
      event: 'Milestone Birthday',
      initials: 'CR',
    },
    {
      text: '"HOA neighborhood block party — 80 neighbors, two chef stations, string lights up in the cul-de-sac. People who\'ve lived on this street for 20 years said it was the best event the neighborhood has ever done. Booking again next summer."',
      name: 'HOA Events Committee',
      city: 'New Braunfels, TX',
      event: 'Neighborhood Block Party',
      initials: 'HC',
    },
    {
      text: '"Company holiday party — 55 employees, outdoor setup at our corporate campus. Everyone skipped the restaurant reservation idea this year and nobody missed it. The chef kept the crowd warm and laughing for two hours straight."',
      name: 'Patricia N.',
      city: 'The Woodlands, TX',
      event: 'Holiday Party',
      initials: 'PN',
    },
  ],
  // 4 — Watch party + large graduation + surprise birthday
  [
    {
      text: '"Cowboys watch party for 25 people — hibachi during the first half, game during the second. The food was so good people kept talking about it during the game. Way better than pizza and wings. This is our game-day setup from now on."',
      name: 'David P.',
      city: 'Frisco, TX',
      event: 'Game Night Watch Party',
      initials: 'DP',
    },
    {
      text: '"Graduation party — 50 guests, backyard setup. Kids were going wild over the tricks, grandparents sat front-row with huge smiles. Chef had everyone entertained for two full hours. My son said it was the best graduation party he\'d been to."',
      name: 'The Johnson Family',
      city: 'Pearland, TX',
      event: 'Graduation Party',
      initials: 'JF',
    },
    {
      text: '"Surprise 50th birthday for my wife — 45 guests. I pulled it off without her suspecting a thing and when the chef lit the first flame she burst into tears happy. The whole night was exactly what she deserved. Already planning the 55th."',
      name: 'Sarah M.',
      city: 'Katy, TX',
      event: 'Birthday Party',
      initials: 'SM',
    },
  ],
]

// ── Image themes — 5 visual directions per variant ───────────────────────────
// heroImage is used for the page hero background.
// palette and style are art-direction notes for future photography/content.
export const TEXAS_IMAGE_THEMES = [
  {
    heroImage: '/pics/hero-4.jpg',
    palette:   'warm amber, golden hour, fire glow',
    style:     'Large multigenerational group around grill, covered patio, suburban Texas home',
    altHint:   'Quinceañera-style backyard hibachi party in Texas with extended family',
  },
  {
    heroImage: '/pics/hero-1.jpg',
    palette:   'daytime warm, bright outdoor light, green grass',
    style:     'Corporate or team cookout, large group standing around chef station',
    altHint:   'Outdoor corporate hibachi team event with chef performing fire tricks',
  },
  {
    heroImage: '/pics/hero-2.jpg',
    palette:   'evening blue-gold, pool deck reflections, fire on water',
    style:     'Pool deck or lakeside setup, summer evening, guests in casual Texas attire',
    altHint:   'Backyard pool party hibachi event at Texas home, evening fire glow',
  },
  {
    heroImage: '/pics/hero-3.jpg',
    palette:   'warm interior-exterior blend, string lights, dusk',
    style:     'Multi-generational family gathering, grandparents front-row, kids reacting',
    altHint:   'Texas family reunion hibachi event with three generations around grill',
  },
  {
    heroImage: '/pics/hero-4.jpg',
    palette:   'night sky, open land, fire against dark background',
    style:     'Ranch or rural property, wide open outdoor space, stars overhead',
    altHint:   'Backyard hibachi chef performing fire tricks at Texas ranch property event',
  },
]

// ── Intro variants — 5 Texas-specific angles ─────────────────────────────────
// Appended to the global INTRO_VARIANTS in cityData.js at indices 5–9.
// Texas city pages receive uniqueIntroVariant of 5+v, selecting these entries.
export const TEXAS_INTRO_VARIANTS = [
  // ── 5: Texas pride / hosting-as-identity ─────────────────────────────────
  {
    angle:    'texas-pride',
    headline: (city) => `Your ${city} Backyard Just Became the Best Seat in the House`,
    opening:  (city, state) =>
      `In Texas, how you host says something about you. When you book a private hibachi chef for your ${city} event, you're not just feeding your guests — you're making a statement. A certified teppanyaki chef arrives at your home with a full propane grill, fresh proteins, and the kind of live-fire performance that turns an ordinary backyard into the most talked-about venue in the neighborhood.`,
    middle:   (city, state) =>
      `The chef handles every detail from first flame to final plate. Your guests gather around the grill watching their food cooked to order right in front of them — shrimp tossed mid-air, the flaming onion volcano, fried rice layered in real time. You take the credit for throwing the best party anyone's been to this year. You barely lifted a finger.`,
    closing:  (city, state) =>
      `We've set up in backyards all across ${state} — quinceañeras in the suburbs, graduation parties on covered patios, corporate cookouts for 80 employees, and plain old Saturday nights that became the kind of evening everyone else's party gets compared to. If you can gather your people in ${city}, we'll handle the rest. Starting at $60 per adult, $600 event minimum.`,
  },
  // ── 6: Family scale / multi-generational ────────────────────────────────
  {
    angle:    'family-scale',
    headline: (city) => `One Grill. Your Whole Family. One Night Nobody in ${city} Forgets.`,
    opening:  (city, state) =>
      `Texas families don't do small. Whether it's a quinceañera, a graduation, a milestone birthday, or a reunion that pulls cousins in from three states, the gatherings here run big — and the catering has to match. Hibachi Connect sends a certified teppanyaki chef to your ${city} home with a full propane grill and everything needed to feed and entertain a crowd that actually feels like a crowd.`,
    middle:   (city, state) =>
      `One chef handles up to 20 guests; two stations cover 40–60 with ease. Kids get the fire tricks and shrimp tosses. Grandparents get front-row seats and their proteins cooked exactly how they want them. Everyone gets their plate made fresh at the grill — no buffet, no cold food sitting in chafing dishes, no line. Just the chef, the heat, and the crowd reacting to every move.`,
    closing:  (city, state) =>
      `We've hosted multi-generational family celebrations across ${state} — from Katy quinceañeras to Georgetown ranch reunions to Pearland graduation parties that packed 60 people into a backyard. If you're planning a ${city} event your whole family will talk about, start here. $60 per adult, $30 per child, $600 event minimum. Full setup and cleanup included.`,
  },
  // ── 7: Outdoor culture / backyard identity ───────────────────────────────
  {
    angle:    'outdoor-culture',
    headline: (city) => `The Best Use of Your ${city} Backyard All Year`,
    opening:  (city, state) =>
      `Texans invest in their outdoor spaces — covered patios, pool decks, fire pits, outdoor kitchens. Hibachi Connect is the natural next step. A certified teppanyaki chef brings a full propane grill to your ${city} property and turns your outdoor space into a live-fire dining experience that no restaurant can replicate, because no restaurant has your people in it.`,
    middle:   (city, state) =>
      `Texas outdoor season runs ten months a year. Whether it's a January birthday party on a heated patio, a July pool-deck cookout after the sun drops, or a November family reunion before the holidays hit — we set up, cook, and clean up in any ${state} weather. The only thing you need to provide: your space, your people, and tables and chairs.`,
    closing:  (city, state) =>
      `We've set up on ranch land, suburban backyards, pool decks, covered pergolas, and waterfront properties across ${state}. Every event uses the same standard: fresh proteins, live-fire cooking, full chef entertainment, and zero mess left behind. If your ${city} outdoor space can fit 10 people around a grill, we'll make it a night worth remembering. Starting at $60 per adult.`,
  },
  // ── 8: Show-stopping spectacle ───────────────────────────────────────────
  {
    angle:    'spectacle',
    headline: (city) => `Nobody in ${city} Has Been to a Party Like This`,
    opening:  (city, state) =>
      `You've done BBQ. You've done a catered dinner. You've made restaurant reservations for a group that was just a little too big. None of that comes close to what happens when a certified hibachi chef sets up in your ${city} backyard and the first flame goes up. The moment that grill lights, the party has already started.`,
    middle:   (city, state) =>
      `Flying shrimp. The flaming onion volcano. Knife juggling. Fried rice built layer by layer in front of 40 people who didn't know what to expect. Every plate cooked to order, right in front of the person eating it, while the chef keeps the whole crowd talking and laughing. This is the event people describe to their friends on Monday morning. The dinner your coworkers compare every office party to for years.`,
    closing:  (city, state) =>
      `Hibachi Connect has run events like this all across ${state} — for 10 guests and for 120, in backyards and on ranch land, for birthdays and quinceañeras and plain old Saturdays that became legend. Book a certified chef in ${city}. Starting at $60 per adult, $600 event minimum. We handle setup, the show, and full cleanup. You enjoy every second.`,
  },
  // ── 9: Value vs. BBQ / Texas-native comparison ───────────────────────────
  {
    angle:    'value-vs-bbq',
    headline: (city) => `Same Backyard. Same Crowd. Completely Different Night.`,
    opening:  (city, state) =>
      `Texas knows BBQ. There's a brisket joint in every ZIP code and a smoker on half the patios in ${city}. But there's a reason hibachi keeps winning at corporate cookouts and family celebrations across ${state} — it's not just food, it's a show. When a certified teppanyaki chef cooks for your guests, they're not comparing it to last year's catered brisket. They're still talking about it next year.`,
    middle:   (city, state) =>
      `Private hibachi at home through Hibachi Connect runs $60 per adult — roughly the same as a quality per-head catering package, but with a live performance built in. Your chef arrives with all ingredients, sauces, the propane grill, plates, chopsticks, and handles complete cleanup after the last plate. No tip anxiety. No chafing dishes. No food sitting out for two hours before anyone eats.`,
    closing:  (city, state) =>
      `The $600 event minimum covers 8–10 guests at the standard rate. Groups of 20–60 are our sweet spot for ${state} events, and we scale chef stations to match any head count. Get a free quote today — most ${city} bookings are confirmed the same day. Fire tricks and cleanup included. Brisket not required.`,
  },
]

// ── Closing CTA variants — 5 Texas-specific CTAs ─────────────────────────────
// Appended to the global CLOSING_VARIANTS in cityData.js at indices 5–9.
export const TEXAS_CLOSING_VARIANTS = [
  // ── 5: Texas pride close ─────────────────────────────────────────────────
  {
    headline:     (city) => `Ready to Host the Best Party in ${city} This Year?`,
    sub:          (city) => `Weekend backyard slots in ${city} fill fast — especially graduation season, summer, and football weekends. Lock your date before it's gone.`,
    urgency:      `Most weekend dates book 2–3 weeks out. Summer and graduation season fill faster.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },
  // ── 6: Family scale close ────────────────────────────────────────────────
  {
    headline:     (city) => `Your ${city} Family Deserves Something They've Never Seen`,
    sub:          (city) => `Quinceañeras, graduation parties, family reunions — hibachi at home is the Texas celebration upgrade your guests will still be talking about at the next gathering.`,
    urgency:      `Large-group dates (30+ guests) book out early — reserve yours now.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See How It Works',
  },
  // ── 7: Outdoor culture close ─────────────────────────────────────────────
  {
    headline:     (city) => `The Show Comes to Your ${city} Backyard`,
    sub:          (city) => `Fire tricks, flying shrimp, three proteins cooked to order — tell us your date and head count and we'll have a quote to you same day.`,
    urgency:      `Weekend evening slots go first — especially Saturdays in summer and fall.`,
    btnPrimary:   'Book a Chef',
    btnSecondary: 'Learn More',
  },
  // ── 8: Spectacle close ───────────────────────────────────────────────────
  {
    headline:     (city) => `Three Generations Around One Grill in ${city}`,
    sub:          (city) => `Quinceañeras, graduation parties, milestone birthdays — private hibachi is built for the way Texas families celebrate. Get a quote for your next big gather.`,
    urgency:      `Dates book out 2–4 weeks ahead during peak Texas season. Check availability now.`,
    btnPrimary:   'Get a Free Quote',
    btnSecondary: 'See Pricing',
  },
  // ── 9: Value vs. BBQ close ───────────────────────────────────────────────
  {
    headline:     (city) => `Skip the Brisket. Book a Hibachi Chef in ${city}.`,
    sub:          (city) => `Same backyard, same crowd — completely different night. Private hibachi starting at $60/adult in ${city}. Full setup, full show, full cleanup.`,
    urgency:      `Weekend availability in your area fills fast. Check your date today.`,
    btnPrimary:   'Check Availability',
    btnSecondary: 'Call Us Instead',
  },
]

// ── Master builder — returns a complete data object for any Texas city ────────
// Used as the Texas fallback in page.js for cities without explicit CITY_DATA.
export function getTexasCityData(citySlug, cityName) {
  const v     = getTexasVariantIndex(citySlug)
  const theme = TEXAS_IMAGE_THEMES[v]

  return {
    cityName,
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    // variant controls CityExperience heading (3 headings, cycles)
    variant:     v % 3,
    heroImage:   theme.heroImage,
    heroSubtitle: TEXAS_HERO_SUBTITLES[v](cityName),
    // nearbyCities intentionally omitted — page.js falls back to CITIES_BY_STATE['texas']
    nearbyMajorCities: ['Houston', 'Dallas', 'Austin', 'San Antonio'],
    localHighlights:   TEXAS_LOCAL_HIGHLIGHTS[v](cityName),
    featuredOccasions: TEXAS_OCCASIONS[v],
    faqSet:            TEXAS_FAQ_SETS[v](cityName),
    testimonials:      TEXAS_TESTIMONIALS[v],
    // uniqueIntroVariant 5–9 indexes into TEXAS_INTRO_VARIANTS appended to INTRO_VARIANTS
    uniqueIntroVariant:   5 + v,
    // WHY_US uses existing 5 global variants — no Texas extension needed
    uniqueWhyUsVariant:   v,
    // uniqueClosingVariant 5–9 indexes into TEXAS_CLOSING_VARIANTS appended to CLOSING_VARIANTS
    uniqueClosingVariant: 5 + v,
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// TEXAS CITY IDENTITY PROFILES
// Each major Texas city gets a distinct emotional tone, event focus, keyword
// angle, and local reference set. These drive TEXAS_CITY_INTROS and
// TEXAS_CITY_CLOSINGS — one per city, consumed by CityIntro and CityFinalCTA.
// Combined-array indices: 10=Houston 11=Dallas 12=Austin 13=SanAntonio
//                          14=FortWorth 15=Katy 16=SugarLand 17=TheWoodlands
// ─────────────────────────────────────────────────────────────────────────────

export const TEXAS_CITY_PROFILES = {
  houston: {
    tone:          'suburban-warmth',
    eventFocus:    'quinceañeras, graduation parties, poolside summer events, large family gatherings',
    keywordAnchors: ['quinceañera chef Houston', 'graduation party hibachi Houston', 'backyard hibachi Houston suburbs'],
    neighborhoods: ['Katy', 'Sugar Land', 'Pearland', 'The Woodlands', 'Friendswood', 'Clear Lake', 'Energy Corridor'],
    wording:       'multi-generational, poolside, suburban, covered patio, greater Houston',
    heroSubtitle:  'Quinceañeras · Graduation Parties · Poolside Events · Serving Greater Houston',
  },
  dallas: {
    tone:          'upscale-confident',
    eventFocus:    'corporate dinners, luxury birthday parties, bachelorette weekends, client appreciation',
    keywordAnchors: ['private hibachi chef Dallas', 'luxury hibachi Dallas', 'corporate hibachi DFW'],
    neighborhoods: ['Uptown', 'Preston Hollow', 'Southlake', 'Frisco', 'Plano', 'McKinney', 'Bishop Arts'],
    wording:       'elevated, upscale, private dining, DFW Metroplex, exclusive',
    heroSubtitle:  'Upscale Private Dining · Corporate Events · Bachelorette Weekends · Serving DFW',
  },
  austin: {
    tone:          'social-trendy',
    eventFocus:    'Airbnb parties, bachelorette weekends, tech team offsites, house party upgrades',
    keywordAnchors: ['hibachi Airbnb Austin', 'private chef Austin TX', 'bachelorette hibachi Austin'],
    neighborhoods: ['East Austin', 'Lake Travis', 'South Congress', 'Rainey Street', 'The Domain', 'Cedar Park'],
    wording:       'experience-first, Airbnb, social, Hill Country, tech crowd',
    heroSubtitle:  'Airbnb Parties · Bachelorette Weekends · Tech Offsites · Serving Austin & Hill Country',
  },
  'san-antonio': {
    tone:          'family-festive',
    eventFocus:    'quinceañeras, family reunions, cultural milestones, military homecomings, baptisms',
    keywordAnchors: ['hibachi San Antonio', 'quinceañera chef San Antonio', 'family hibachi party San Antonio'],
    neighborhoods: ['Stone Oak', 'Alamo Heights', 'Helotes', 'Boerne', 'New Braunfels', 'Schertz', 'Universal City'],
    wording:       'festive, family-centered, multi-generational, cultural, Hill Country',
    heroSubtitle:  'Quinceañeras · Family Reunions · Cultural Celebrations · Serving Greater San Antonio',
  },
  'fort-worth': {
    tone:          'authentic-texas',
    eventFocus:    'backyard BBQ alternatives, ranch events, game-day parties, neighborhood cookouts',
    keywordAnchors: ['hibachi Fort Worth', 'private chef Fort Worth TX', 'backyard hibachi DFW west'],
    neighborhoods: ['Southlake', 'Colleyville', 'Keller', 'Grapevine', 'Aledo', 'Burleson', 'Alliance corridor'],
    wording:       'genuine, no-nonsense, real Texas, authentic, western DFW',
    heroSubtitle:  'Backyard Hibachi · Fort Worth, TX · Authentic Texas Entertaining',
  },
  katy: {
    tone:          'suburban-community',
    eventFocus:    'quinceañeras, graduation parties, neighborhood block parties, family reunions',
    keywordAnchors: ['hibachi Katy TX', 'graduation party Katy Texas', 'quinceañera chef Katy'],
    neighborhoods: ['Cinco Ranch', 'Cross Creek Ranch', 'LaCenterra', 'Fulshear', 'Richmond', 'Cypress'],
    wording:       'community-proud, family-first, Fort Bend County, Katy ISD, suburban celebration',
    heroSubtitle:  'Hibachi at Home · Katy, TX · Quinceañeras, Graduations & Family Celebrations',
  },
  'sugar-land': {
    tone:          'multicultural-warmth',
    eventFocus:    'multicultural milestones, quinceañeras, Diwali gatherings, graduation, diverse family celebrations',
    keywordAnchors: ['hibachi Sugar Land TX', 'private chef Sugar Land', 'multicultural hibachi Fort Bend'],
    neighborhoods: ['First Colony', 'Riverstone', 'Telfair', 'Missouri City', 'Stafford', 'Fresno'],
    wording:       'inclusive, diverse, culturally aware, multi-generational, Fort Bend County',
    heroSubtitle:  'Private Hibachi Chef · Sugar Land, TX · Cultural Celebrations & Family Gatherings',
  },
  'the-woodlands': {
    tone:          'premium-polished',
    eventFocus:    'corporate client dinners, anniversary celebrations, bachelorette weekends, milestone birthdays',
    keywordAnchors: ['hibachi The Woodlands TX', 'corporate hibachi Woodlands', 'private chef North Houston'],
    neighborhoods: ['Hughes Landing', 'Creekside Park', 'Sterling Ridge', 'Lake Woodlands', 'Spring', 'Conroe'],
    wording:       'refined, elevated, premium, wooded properties, North Houston',
    heroSubtitle:  'Hibachi at Home · The Woodlands, TX · Backyard Dining & Corporate Events',
  },
}

// ── City-specific intro variants — indices 10–17 in combined INTRO_VARIANTS ──
// Each city gets a distinct emotional angle, local vocabulary, and event framing.
// Applied by setting uniqueIntroVariant: 10–17 in CITY_DATA.
export const TEXAS_CITY_INTROS = [

  // ── 10: Houston — Suburban Warmth ──────────────────────────────────────────
  {
    angle:    'houston-backyard-celebration',
    headline: (city) => `Greater ${city}'s Private Hibachi Chef — From Katy to Pearland`,
    opening:  (city, state) =>
      `When 40 people are coming over for your daughter's quinceañera and you want something genuinely unforgettable, a private hibachi chef in ${city} is the move. Hibachi Connect sends a certified teppanyaki chef directly to your home, your covered patio, or your backyard — full propane grill, all ingredients, complete setup — so your celebration gets the performance and the food without any of the logistics.`,
    middle:   (city, state) =>
      `From graduation parties in Pearland to Energy Corridor corporate cookouts, from quinceañera celebrations in Sugar Land to poolside birthday dinners in Memorial — our ${city}-area chefs scale to any crowd. One station handles 10–20 guests beautifully. Two stations run 40–60 in under two hours. For 80+ guest events, we configure accordingly and have run gatherings that size all across Greater ${city}.`,
    closing:  (city, state) =>
      `We cover all of Greater ${city}: Katy, Sugar Land, The Woodlands, Pearland, Friendswood, League City, Clear Lake, Cypress, Humble, Spring, Missouri City, Pasadena, and the Baytown area. Most locations within 35 miles of central ${city} have no travel fee. Weekend graduation and quinceañera dates book 3–5 weeks out in peak season. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 11: Dallas — Upscale Confident ─────────────────────────────────────────
  {
    angle:    'dallas-upscale-private-dining',
    headline: (city) => `${city}'s Private Hibachi Chef — Upscale In-Home Teppanyaki Dining`,
    opening:  (city, state) =>
      `In ${city}, the best events don't happen at restaurants — they happen at home. When you book a private hibachi chef through Hibachi Connect, you get a certified teppanyaki chef at your Uptown penthouse, your Southlake estate, your Frisco backyard, or your Preston Hollow dinner party — equipped with a full propane grill, premium proteins, and the kind of tableside performance that makes every guest feel like a VIP.`,
    middle:   (city, state) =>
      `Corporate client dinners, milestone birthdays, anniversary nights, bachelorette weekends — our ${city} chefs handle them all with the same high-execution standard. Filet mignon, lobster tail, and scallops are available for guests who want to upgrade. Every plate cooked to order, right in front of the person eating it. The chef engages the room, keeps the energy high, and makes the evening distinctly memorable in a way that a restaurant reservation simply can't match.`,
    closing:  (city, state) =>
      `We serve all of ${city} and the DFW Metroplex: Plano, Frisco, McKinney, Allen, Southlake, Grapevine, Colleyville, Irving, Richardson, and the full surrounding area. Corporate events, private celebrations, and intimate dinners for 10 to 100+ — same standard regardless of scale. Starting at $60 per adult. Premium proteins and full-service upgrades available. Weekend evenings typically book 2–3 weeks out.`,
  },

  // ── 12: Austin — Social + Trendy ───────────────────────────────────────────
  {
    angle:    'austin-social-experience',
    headline: (city) => `Private Hibachi Chef in ${city} — The House Party Upgrade Nobody Expects`,
    opening:  (city, state) =>
      `You've been to the bachelorette brunch, the birthday dinner reservation, the Airbnb weekend with the sad charcuterie board. None of those come close to what happens when a private hibachi chef shows up at your ${city} rental and the first flame goes up. Hibachi Connect sends a certified teppanyaki chef directly to your short-term rental, your East ${city} backyard, or your Lake Travis property — full grill, all ingredients, full entertainment. The food is great. The performance is better.`,
    middle:   (city, state) =>
      `${city} runs on experiences, and a private hibachi chef delivers one that photographs well, gets talked about on Monday, and genuinely surprises every guest who thought they knew what the evening would look like. Bachelorette weekends, tech company offsites, birthday house parties, and anniversary dinners — our ${city} chefs are experienced in short-term rental setups, lakehouse events, and the casual-elevated vibe ${city} actually runs on. Just confirm the property allows open-flame cooking outdoors and we handle everything else.`,
    closing:  (city, state) =>
      `We serve all of ${city} and the surrounding Hill Country: Round Rock, Cedar Park, Georgetown, Pflugerville, Kyle, Buda, Lakeway, Bee Cave, Bastrop, and Lake Travis properties. Weekday events can often be booked with a week's notice. Weekends during graduation season and major ${city} events fill quickly — if you have a date in mind, reach out early. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 13: San Antonio — Family Festive ───────────────────────────────────────
  {
    angle:    'san-antonio-family-festive',
    headline: (city) => `Private Hibachi Chef in ${city} — Where Family Celebrations Come Alive`,
    opening:  (city, state) =>
      `${city} knows how to celebrate. Quinceañeras, baptisms, family reunions that bring in cousins from every corner of ${state} — this city runs on gatherings, and the food has to match the occasion. When you book a private hibachi chef through Hibachi Connect, a certified teppanyaki chef arrives at your ${city} home or backyard with a full propane grill, fresh ingredients, and the kind of live-fire performance that has entire extended families cheering around the grill before the first plate is served.`,
    middle:   (city, state) =>
      `Our ${city} chefs are experienced with large, multi-generational guest lists. Kids get the fire tricks, shrimp tosses, and chef banter that keeps them engaged from start to finish. Grandparents get front-row seats and their plate cooked exactly how they want it. Everyone eats hot food, cooked to order at the grill — no buffet line, no chafing dishes, no food sitting for hours. For groups over 25, we bring two chef stations. For 60+ guest quinceañeras and family reunions, we configure accordingly.`,
    closing:  (city, state) =>
      `We serve all of ${city} and surrounding communities: Stone Oak, Alamo Heights, Helotes, Universal City, Converse, Schertz, New Braunfels, Boerne, and the Hill Country. Spring and fall in ${city} are ideal for outdoor hibachi events — and those weekend dates fill quickly. Starting at $60 per adult, $30 per child. Full setup and cleanup included.`,
  },

  // ── 14: Fort Worth — Authentic Texas ───────────────────────────────────────
  {
    angle:    'fort-worth-authentic-texas',
    headline: (city) => `Private Hibachi Chef in ${city} — Real Texas Backyard Entertaining`,
    opening:  (city, state) =>
      `${city} doesn't need gimmicks. When you host here, you want the food to be good, the setup smooth, and your guests genuinely impressed — not just going through the motions of another backyard cookout. A private hibachi chef through Hibachi Connect delivers exactly that. A certified teppanyaki chef arrives at your ${city} property with a full propane grill, premium proteins, and a live-fire performance that turns an ordinary evening into the kind of night your neighbors are still talking about next week.`,
    middle:   (city, state) =>
      `Birthday parties in Southlake, anniversary dinners in Westover Hills, neighborhood cookouts in Aledo, corporate events near the Alliance corridor — our ${city} chefs have run it all. No pretense, no complicated logistics. You provide the space and the guest list. We bring the grill, the propane, the ingredients, the sauces, the plates, and complete cleanup. The performance is included — fire tricks, the onion volcano, and a chef who actually engages your crowd rather than silently plating food in the corner.`,
    closing:  (city, state) =>
      `We serve all of ${city} and western DFW: Southlake, Colleyville, Keller, Grapevine, Burleson, Crowley, Mansfield, Aledo, and the surrounding area. Most locations have no travel fee. Weekend dates in ${city} book 2–3 weeks out. If you have a specific date in mind, request a quote today. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 15: Katy — Suburban Community ──────────────────────────────────────────
  {
    angle:    'katy-suburban-community',
    headline: (city) => `Private Hibachi Chef in ${city}, TX — The Suburb That Celebrates Big`,
    opening:  (city, state) =>
      `${city} families don't do small. Graduation parties that pack 40 people into a backyard. Quinceañera celebrations that pull cousins in from across ${state}. Neighborhood block parties where half the cul-de-sac shows up. When your event needs food that matches the energy, a private hibachi chef from Hibachi Connect is the answer. A certified teppanyaki chef arrives at your ${city} property — Cinco Ranch, Cross Creek Ranch, LaCenterra, wherever you are — with a full propane grill, fresh ingredients, and the kind of live-fire show that turns your backyard into the best venue in Fort Bend County.`,
    middle:   (city, state) =>
      `Katy ISD graduation season is our busiest window — May through June fills fast, and Saturday dates book 4–5 weeks out. Quinceañera receptions and multi-generational family celebrations are among our most-requested events all year. For groups over 25, we bring two chef stations; for 60+ guests, we configure accordingly. Every plate cooked to order at the grill — no chafing dishes, no buffet lines, no cold food sitting out while guests wait.`,
    closing:  (city, state) =>
      `We cover all of ${city} and the surrounding Fort Bend and west Harris County area: Fulshear, Richmond, Rosenberg, Cypress, Missouri City, Stafford, and the communities in between. Most ${city} locations are within our standard service zone with no travel fee. Request a quote with your date and guest count — most responses come back same day. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 16: Sugar Land — Multicultural Warmth ──────────────────────────────────
  {
    angle:    'sugar-land-multicultural-warmth',
    headline: (city) => `Private Hibachi Chef in ${city} — Every Tradition, One Unforgettable Table`,
    opening:  (city, state) =>
      `${city} celebrates differently than anywhere else in ${state}. The guest list at a ${city} family celebration might span three continents worth of backgrounds, food traditions, and expectations — and the experience has to work for all of them. Hibachi at home through Hibachi Connect does exactly that. A certified teppanyaki chef arrives at your ${city} property with a full propane grill and a completely interactive cooking experience that transcends any single food culture. The performance engages every guest. The cooking adapts to every dietary need. The energy brings every table together.`,
    middle:   (city, state) =>
      `Quinceañeras, Diwali celebrations, milestone birthday dinners, graduation parties, family reunions that pull relatives from multiple states — our ${city} chefs are experienced with diverse, multi-generational guest lists and the kind of cultural celebrations that deserve something genuinely memorable. We accommodate vegetarian plates, halal-style preparations, shellfish-free setups, and dietary customizations. For groups over 25, two chef stations run in parallel. For 50+ guests, we configure accordingly.`,
    closing:  (city, state) =>
      `We serve all of ${city} and surrounding Fort Bend County: First Colony, Riverstone, Telfair, Missouri City, Stafford, Fresno, Sienna, Richmond, and Rosenberg. Most ${city} locations are within our standard service area with no travel fee. Weekend dates — especially during the May–June graduation season — book 3–4 weeks ahead. Request a quote with your date, guest count, and any dietary notes. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 17: The Woodlands — Premium Polished ───────────────────────────────────
  {
    angle:    'the-woodlands-premium-backyard',
    headline: (city) => `Private Hibachi Chef in ${city} — Elevated Backyard Dining, North Houston`,
    opening:  (city, state) =>
      `${city} was built around the idea that where you live and how you entertain are connected. Custom homes, wooded properties, covered patios designed for the kind of evening gatherings that feel effortless even at 40 guests — this community knows what it expects from an event. Hibachi Connect sends a certified teppanyaki chef to your ${city} property with a full propane grill, premium ingredients, and a performance-driven dining experience that lives up to the setting. This isn't catering. It's entertainment and a meal wrapped into one experience.`,
    middle:   (city, state) =>
      `Corporate client dinners at a Sterling Ridge property. Anniversary dinners on a Creekside Park patio. Bachelorette weekends at a Hughes Landing rental. Milestone birthday celebrations at a Lake Woodlands waterfront home. Our ${city} chefs are experienced in the kinds of events the North Houston corridor runs — polished, organized, and expected to exceed expectations. Premium protein upgrades (filet mignon, lobster tail, scallops) are available for guests who want to go above the standard menu.`,
    closing:  (city, state) =>
      `We serve all of ${city} and surrounding North Houston communities: Spring, Tomball, Conroe, Humble, Kingwood, Magnolia, and Cypress. Corporate and large-group events welcome — we scale stations to any head count and provide a quote within hours of your request. Weekend evening slots in ${city} book 2–3 weeks out. For corporate and milestone events, 4–5 weeks is recommended. Starting at $60 per adult, $600 event minimum.`,
  },
]

// ── City-specific CTA closings — indices 10–17 in combined CLOSING_VARIANTS ──
// Each city gets urgency copy and button wording that matches its event focus.
export const TEXAS_CITY_CLOSINGS = [

  // ── 10: Houston ─────────────────────────────────────────────────────────────
  {
    headline:     (city) => `Ready to Throw the Best Party in Greater ${city}?`,
    sub:          (city) => `Graduation season, quinceañera weekends, and summer pool parties fill our ${city} schedule fast. Lock your date before it's gone.`,
    urgency:      `Saturday dates in the Houston area book 3–5 weeks out during graduation season (May–June). Check availability now.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },

  // ── 11: Dallas ──────────────────────────────────────────────────────────────
  {
    headline:     (city) => `Book a Private Hibachi Experience in ${city}`,
    sub:          (city) => `From Uptown dinner parties to Frisco backyard celebrations — get a same-day quote for your ${city} event.`,
    urgency:      `Weekend evening slots across DFW book 2–3 weeks out. Premium Saturday dates go faster.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See Premium Options',
  },

  // ── 12: Austin ──────────────────────────────────────────────────────────────
  {
    headline:     (city) => `Your ${city} Party Deserves Better Than a Restaurant Reservation`,
    sub:          (city) => `Airbnb weekends, bachelorette parties, tech offsites — a private hibachi chef in ${city} books in minutes and delivers an experience nobody forgets.`,
    urgency:      'Austin weekends — especially graduation season and major event weekends — fill out early. Check your date now.',
    btnPrimary:   'Check Availability',
    btnSecondary: 'See How It Works',
  },

  // ── 13: San Antonio ─────────────────────────────────────────────────────────
  {
    headline:     (city) => `Your ${city} Family Celebration Starts Here`,
    sub:          (city) => `Quinceañeras, family reunions, graduation parties — private hibachi at home is the ${city} celebration upgrade that gets the whole family cheering.`,
    urgency:      'San Antonio spring and fall weekend dates fill quickly. Reserve your date today.',
    btnPrimary:   'Get a Free Quote',
    btnSecondary: 'See Pricing',
  },

  // ── 14: Fort Worth ──────────────────────────────────────────────────────────
  {
    headline:     (city) => `Bring the Grill to Your ${city} Backyard`,
    sub:          (city) => `Fire tricks, flying shrimp, three proteins cooked to order — tell us your date and we'll have a ${city}-area quote back to you same day.`,
    urgency:      'Fort Worth weekend evenings book 2–3 weeks ahead. Don\'t wait on a popular date.',
    btnPrimary:   'Book a Chef',
    btnSecondary: 'View Pricing',
  },

  // ── 15: Katy ────────────────────────────────────────────────────────────────
  {
    headline:     (city) => `${city}'s Graduation Season Books Fast — Lock Your Date`,
    sub:          (city) => `Quinceañeras, graduation parties, and summer backyard events in ${city} are our busiest windows. Request a quote now before your weekend date is gone.`,
    urgency:      `Katy ISD graduation season (May–June) fills 4–5 weeks out. Book early.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },

  // ── 16: Sugar Land ──────────────────────────────────────────────────────────
  {
    headline:     (city) => `Every ${city} Celebration Deserves This`,
    sub:          (city) => `Quinceañeras, graduation parties, cultural milestone dinners — private hibachi at home is the ${city} experience your guests will still be talking about at the next family gathering.`,
    urgency:      'Sugar Land weekends during graduation season book 3–4 weeks out. Check your date.',
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See How It Works',
  },

  // ── 17: The Woodlands ───────────────────────────────────────────────────────
  {
    headline:     (city) => `Elevate Your Next ${city} Event`,
    sub:          (city) => `Corporate dinners, anniversary celebrations, bachelorette weekends — a private hibachi chef in ${city} delivers a premium experience your guests haven't seen before.`,
    urgency:      'The Woodlands weekend slots book 2–3 weeks out. Corporate and large-group events should reserve 4–5 weeks ahead.',
    btnPrimary:   'Get a Quote',
    btnSecondary: 'Learn More',
  },
]

// ── Texas blog posts ──────────────────────────────────────────────────────────
// Two Texas-specific posts always shown first, third slot rotates by city variant.
export const TEXAS_BLOG_POSTS = [
  // 0 — Texas planning guide (always slot 1)
  {
    slug:     'backyard-hibachi-texas-guide',
    title:    'Backyard Hibachi in Texas: The Complete Party Planning Guide',
    tag:      'Planning',
    readTime: '7 min read',
    excerpt:  'The best seasons to book, how to handle summer heat, venue types (backyard, pool deck, ranch), group size guide, and every Texas market we serve.',
  },
  // 1 — Texas family celebrations (always slot 2)
  {
    slug:     'hibachi-family-celebrations-texas',
    title:    'Hibachi at Home for Texas Family Celebrations: Quinceañeras, Graduations & Reunions',
    tag:      'Occasions',
    readTime: '6 min read',
    excerpt:  'How Texas families plan hibachi at home for quinceañeras, graduation parties, family reunions, and milestone birthdays — with practical tips for large multi-generational groups.',
  },
  // 2 — Pricing guide (variant rotation slot 3, variants 0 & 2)
  {
    slug:     'how-much-does-private-hibachi-cost',
    title:    'How Much Does a Private Hibachi Chef Cost?',
    tag:      'Pricing',
    readTime: '5 min read',
    excerpt:  'A complete breakdown of private hibachi pricing: per-person rates, event minimums, premium add-ons, and what\'s included at every price point.',
  },
  // 3 — Party planning checklist (variant rotation slot 3, variants 1 & 3)
  {
    slug:     'how-to-plan-a-backyard-hibachi-party',
    title:    'How to Plan a Backyard Hibachi Party (Complete Checklist)',
    tag:      'Planning',
    readTime: '7 min read',
    excerpt:  'Everything you need to prepare before your private hibachi chef arrives — space setup, guest seating, timing, and the questions to ask your chef.',
  },
  // 4 — Corporate events (variant rotation slot 3, variant 4)
  {
    slug:     'hibachi-catering-corporate-events',
    title:    'Why Hibachi Catering Works for Corporate Events',
    tag:      'Occasions',
    readTime: '5 min read',
    excerpt:  'From client appreciation dinners to team cookouts — how companies across Texas are using private hibachi chefs instead of traditional catering.',
  },
]

// Returns 2 Texas-specific posts + 1 rotating generic post keyed to city variant.
export function getTexasBlogPosts(cityVariant, count = 3) {
  const rotatingIndex = [2, 3, 2, 3, 4][cityVariant % 5]
  return [
    TEXAS_BLOG_POSTS[0],
    TEXAS_BLOG_POSTS[1],
    TEXAS_BLOG_POSTS[rotatingIndex],
  ].slice(0, count)
}
