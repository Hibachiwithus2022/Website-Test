// =============================================================================
// lib/tennesseeData.js — Tennessee Expansion — Batch 1 (5 cities)
// 19 cities planned · 6 geographic themes
// Theme 0: Nashville Core (Nashville, Brentwood, Franklin)
// Theme 1: Nashville South (Nolensville, Spring Hill, Cookeville)
// Theme 2: Nashville East & North (Murfreesboro, Hendersonville, Mt. Juliet)
// Theme 3: Smoky Mountains (Gatlinburg, Pigeon Forge, Sevierville)
// Theme 4: East Tennessee (Knoxville, Farragut, Maryville)
// Theme 5: West & South Tennessee (Memphis, Germantown, Collierville, Chattanooga)
//
// INTRO_VARIANTS indices:  297–302 TN generic · 303–321 TN city-specific
// CLOSING_VARIANTS indices: 297–302 TN generic · 303–321 TN city-specific
// Batch 1 city indices: Nashville=303, Brentwood=304, Franklin=305, Nolensville=306, Spring Hill=307
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getTNVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const TN_HERO_SUBTITLES = [
  (city) => `Bachelorette Weekends · Vacation Rental Events · Estate Dinners · Corporate Entertainment · Serving ${city} & Nashville Metro`,
  (city) => `Graduation Parties · Backyard Celebrations · Birthday Dinners · Family Milestones · Serving ${city} & Williamson County`,
  (city) => `MTSU Graduation Events · Backyard Celebrations · Family Milestones · Birthday Parties · Serving ${city} & Middle Tennessee`,
  (city) => `Cabin Group Dinners · Bachelorette Rentals · Family Reunion Weekends · Private Vacation Dining · Serving ${city} & Sevier County`,
  (city) => `UT Graduation Events · Estate Dinners · Private Celebrations · Backyard Teppanyaki · Serving ${city} & Knox County`,
  (city) => `Corporate Team Dinners · Graduation Parties · Estate Celebrations · Private Events · Serving ${city} & Greater Tennessee`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const TN_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Nashville Core
  (city) => [
    `Nashville is the bachelorette capital of America — and private hibachi at the vacation rental is the anchor dinner that no Honky Tonk can replicate`,
    `Belle Meade, Governors Club, and Green Hills estate entertaining at the level those addresses deserve`,
    `Music Row and corporate Nashville client events served throughout Davidson County`,
    `The Gulch, East Nashville, 12 South, Germantown, and all Nashville vacation rental neighborhoods within standard service radius`,
    `Nashville summer and bachelorette weekends book 4–6 weeks ahead — reserve your ${city} date early`,
    `Fully self-contained setup — grill, propane, all proteins, everything — at your Nashville rental or estate`,
  ],
  // Theme 1 — Nashville South
  (city) => [
    `Williamson County School System produces some of Tennessee's top graduating classes — the graduation market here is exceptional`,
    `${city} and the surrounding WCS communities book 2–4 weeks ahead for May graduation Saturday events`,
    `Nolensville, Spring Hill, Franklin, and Brentwood backyards all within standard service radius`,
    `Dual-station capacity for large Williamson County graduation gatherings of 25–80 guests`,
    `The fastest-growing county in Tennessee — new neighborhoods, new families, and a graduation culture that grows every spring`,
    `Full setup and complete cleanup — you provide the backyard, we handle everything from arrival to departure`,
  ],
  // Theme 2 — Nashville East & North
  (city) => [
    `MTSU graduation (one of Tennessee's largest universities) drives significant Middle Tennessee event demand each May`,
    `Old Hickory Lake and Percy Priest Lake waterfront properties within our standard Middle Tennessee service radius`,
    `Hendersonville, Smyrna, LaVergne, and surrounding Sumner, Wilson, and Rutherford County communities all served`,
    `Dual-station setups for large Middle Tennessee graduation gatherings of 25–80 guests`,
    `Most ${city} bookings confirmed same day — graduation season (May–June) fills 2–4 weeks ahead`,
    `Full setup and complete cleanup — your backyard or waterfront property is immaculate when the chef leaves`,
  ],
  // Theme 3 — Smoky Mountains
  (city) => [
    `Gatlinburg is one of America's top bachelorette weekend destinations — private cabin hibachi is the dinner format the Smokies market was built for`,
    `Pigeon Forge family reunion cabins, Dollywood-proximity rentals, and Chalet Village chalets all served`,
    `Fully self-contained propane grill — no hookups needed at any cabin or vacation rental`,
    `October leaf season, July, and Spring Break weekends book 4–6 weeks ahead — reserve early for peak Smokies dates`,
    `Serving Gatlinburg, Pigeon Forge, Sevierville, Wears Valley, Townsend, and all Sevier County rental communities`,
    `Travel fees for elevated or remote cabin locations — always disclosed upfront, never a surprise`,
  ],
  // Theme 4 — East Tennessee
  (city) => [
    `UT Knoxville graduation (May) is one of East Tennessee's busiest event windows — book 3–4 weeks ahead for any spring weekend`,
    `Sequoyah Hills, West Knoxville, Turkey Creek, and Farragut estate entertaining at the level those addresses deserve`,
    `Knox and Blount County communities — Farragut, Maryville, Alcoa, Oak Ridge, and surrounding areas all served`,
    `Corporate client entertainment for Knoxville and East Tennessee businesses throughout the year`,
    `Football season game-day weekends and UT-adjacent events are among our most common East TN occasions`,
    `Full setup and complete cleanup — your Knoxville or Farragut property is immaculate when the chef leaves`,
  ],
  // Theme 5 — West & South Tennessee
  (city) => [
    `Memphis corporate community — FedEx, AutoZone, International Paper and surrounding professional network events served throughout Shelby County`,
    `East Memphis estates, Midtown rentals, and Harbor Town island community all within standard service radius`,
    `Germantown and Collierville graduation parties are some of our largest Shelby County events — dual stations standard for 40+ guests`,
    `Chattanooga markets: Lookout Mountain, Signal Mountain, North Shore, and East Brainerd all served`,
    `Most ${city} bookings confirmed same day — corporate events and graduation parties book 2–3 weeks ahead`,
    `Full setup and complete cleanup — your estate, terrace, or backyard is immaculate when the chef leaves`,
  ],
]

// ── Occasions ──────────────────────────────────────────────────────────────────
const TN_OCCASIONS = [
  // Theme 0 — Nashville Core
  ['Nashville Bachelorette Weekends', 'Corporate Client Entertainment', 'Estate Dinner Parties', 'Vacation Rental Group Dinners', 'Birthday & Milestone Trips', 'Anniversary Celebrations', 'Music Row Industry Events', 'Holiday Estate Gatherings', 'Engagement Parties', 'Wedding Party Dinners'],
  // Theme 1 — Nashville South
  ['Graduation Parties', 'Backyard Birthday Celebrations', 'Family Milestone Dinners', 'Neighborhood Block Events', 'Wedding Rehearsal Dinners', 'Anniversary Dinners', 'Corporate Team Events', 'Holiday Gatherings', 'Engagement Parties', 'Family Reunions'],
  // Theme 2 — Nashville East & North
  ['MTSU Graduation Parties', 'Lake Waterfront Dinner Events', 'Family Reunion Celebrations', 'Birthday Milestone Parties', 'Anniversary Dinners', 'Backyard Corporate Events', 'Engagement Parties', 'Holiday Gatherings', 'Neighborhood Cookouts', 'Multi-Generational Family Dinners'],
  // Theme 3 — Smoky Mountains
  ['Bachelorette Cabin Weekends', 'Family Reunion Rentals', 'Mountain Birthday Trips', 'Anniversary Cabin Events', 'Corporate Retreat Weekends', 'Honeymoon Celebrations', 'Group Vacation Dinners', 'Holiday Cabin Gatherings', 'Engagement Trips', 'Bachelor Party Weekends'],
  // Theme 4 — East Tennessee
  ['UT Graduation & Alumni Events', 'Estate Dinner Parties', 'Corporate Client Entertainment', 'Backyard Birthday Celebrations', 'Anniversary Dinners', 'Retirement Celebrations', 'Family Reunions', 'Engagement Parties', 'Holiday Gatherings', 'Neighborhood Block Events'],
  // Theme 5 — West & South Tennessee
  ['Corporate Team Dinners', 'Graduation Parties', 'Estate Milestone Events', 'Anniversary Dinners', 'Birthday Celebrations', 'Client Appreciation Events', 'Family Reunions', 'Holiday Corporate Gatherings', 'Engagement Parties', 'Retirement Celebrations'],
]

// ── FAQ sets ───────────────────────────────────────────────────────────────────
const TN_FAQ_SETS = [
  // Theme 0 — Nashville Core
  (city) => [
    { q: `Can you come to a Nashville vacation rental, Airbnb, or bachelorette house?`, a: `Yes — vacation rentals are among our most common Nashville events. We serve any property with outdoor space: The Gulch, East Nashville, 12 South rentals, Belle Meade estates, and all Nashville-area properties. Give us the address and we'll confirm availability.` },
    { q: `What Nashville neighborhoods do you serve?`, a: `All of Nashville — The Gulch, East Nashville, 12 South, Belle Meade, Germantown, Music Row, Sylvan Park, Green Hills, and every Davidson County neighborhood. Brentwood, Franklin, Nolensville, and Spring Hill are within standard radius.` },
    { q: `Is private hibachi a good format for a Nashville bachelorette weekend?`, a: `It's the best available. The chef comes to the rental, the group never leaves the property, and the performance itself — fire tricks, flying shrimp, 90–120 minutes of live teppanyaki — is the anchor of the trip. Most Nashville bachelorette groups book it as the Saturday night dinner.` },
    { q: `How far in advance should I book for Nashville?`, a: `Summer weekends (June–August) and bachelorette peak season book 4–6 weeks ahead. Holiday weekends fill earlier. Off-peak Nashville events typically confirm 1–2 weeks out. Reserve early for any summer Saturday.` },
    { q: `Can you set up at a Nashville estate or Belle Meade property?`, a: `Yes. Estate setups are common in Belle Meade, Governors Club, and Green Hills. We arrive with a fully self-contained grill and setup — no outdoor kitchen required, just a flat outdoor area of at least 10×10 feet.` },
    { q: `Is there a travel fee for Nashville events?`, a: `Most Nashville events fall within our standard service radius with no travel fee. Events in outlying communities may include a travel fee — always disclosed upfront before you confirm.` },
  ],
  // Theme 1 — Nashville South
  (city) => [
    { q: `Can you set up in a Williamson County backyard or patio?`, a: `Yes — backyard setups are our most common format in ${city} and all of Williamson County. We arrive fully equipped with the grill, propane, and everything needed for any outdoor setup.` },
    { q: `Do you serve ${city} and surrounding Williamson County communities?`, a: `Yes. We serve all of Williamson County — Nolensville, Spring Hill, Franklin, Brentwood, Thompson's Station, Fairview, and surrounding communities. Most locations within 30 miles fall within our standard service area.` },
    { q: `How far in advance should I book for a graduation party?`, a: `Williamson County graduation season (May–June) is our busiest window. Book 3–4 weeks ahead for any May Saturday event. Off-graduation weekends typically confirm 1–2 weeks out.` },
    { q: `Can you handle a large graduation party of 40 or 50 guests?`, a: `Yes. For groups over 25, we bring dual chef stations — two teppan grills running simultaneously so your entire guest list eats together rather than in waves.` },
    { q: `What about corporate events in the Williamson County area?`, a: `Yes. We serve corporate events at outdoor venues, company properties, and private estates throughout Williamson County. Same process — contact us with your guest count, location, and date.` },
    { q: `What do I need to provide for the event?`, a: `Just your outdoor space and your guest list. We bring the grill, propane, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. You provide a flat outdoor surface (10×10 minimum per station) and vehicle access for equipment unloading.` },
  ],
  // Theme 2 — Nashville East & North
  (city) => [
    { q: `Can you set up in a ${city} backyard or patio?`, a: `Yes — backyard setups are our most common Middle Tennessee format. We arrive fully equipped and set up completely independently in your outdoor space.` },
    { q: `Do you serve ${city} and surrounding Middle Tennessee communities?`, a: `Yes. We serve all of Middle Tennessee — Murfreesboro, Hendersonville, Mt. Juliet, Smyrna, LaVergne, and surrounding Rutherford, Sumner, and Wilson County communities.` },
    { q: `How far in advance for a MTSU graduation party?`, a: `MTSU graduation (May) is our busiest Middle Tennessee window. Book 3–4 weeks ahead for any May Saturday. Off-graduation weekends confirm 1–2 weeks out.` },
    { q: `Can you do events at Old Hickory Lake or Percy Priest Lake waterfront properties?`, a: `Yes. Lake waterfront decks and dock-side setups are among our most common Hendersonville and Middle Tennessee events. We arrive fully self-contained — no hookups or outdoor kitchen needed.` },
    { q: `Can you handle a large graduation gathering of 40+ guests?`, a: `Yes. For groups over 25, we bring dual chef stations running simultaneously. Your entire guest list eats together at the same time.` },
    { q: `What do I need to provide?`, a: `Just your outdoor space and your guest list. We bring everything — grill, propane, proteins, rice, vegetables, sauces, plates, and chopsticks. You provide a flat outdoor area and vehicle access.` },
  ],
  // Theme 3 — Smoky Mountains
  (city) => [
    { q: `Can you come to a Gatlinburg or Pigeon Forge cabin?`, a: `Yes — cabin setups are our most common Smokies events. Our grill is fully self-contained and propane-powered. We set up on your cabin deck or outdoor space. Let us know the property details at booking.` },
    { q: `Do you serve chalets and vacation rentals throughout Sevier County?`, a: `Yes. We serve Gatlinburg, Pigeon Forge, Sevierville, Wears Valley, Townsend, Chalet Village, Arts & Crafts Community, and all Sevier County rental communities.` },
    { q: `What setup do I need at my Smoky Mountain cabin?`, a: `A flat deck or patio area at least 10×10 feet and vehicle access for equipment. Most cabin decks work perfectly. Let us know access details (gate codes, road type) 24–48 hours before the event.` },
    { q: `How far in advance for Smokies peak season?`, a: `October (leaf season), July, and Spring Break weekends book 4–6 weeks ahead. Summer Fridays and Saturdays fill fast. Off-peak spring and winter events typically confirm 1–2 weeks out.` },
    { q: `Can you do a bachelorette cabin event in the Smokies?`, a: `Absolutely — it's one of our most common events. The group never leaves the cabin, the chef performs for everyone simultaneously, and the dinner becomes the evening's highlight rather than a logistics challenge.` },
    { q: `Are there travel fees for remote cabin locations?`, a: `Travel fees may apply for properties at high elevation or far from standard access roads. These are always disclosed upfront before you confirm — never a surprise.` },
  ],
  // Theme 4 — East Tennessee
  (city) => [
    { q: `Do you serve ${city}, Knoxville, and the surrounding East Tennessee area?`, a: `Yes. We serve the full Knoxville Metro — Farragut, Maryville, Oak Ridge, Alcoa, Lenoir City, Loudon, and surrounding Knox and Blount County communities.` },
    { q: `Is private hibachi popular for UT graduation parties?`, a: `Very much so. UT graduation (May) is our busiest East Tennessee window. Families fly in from across the country — private hibachi at the home or property is the format that works for 30–50 guests eating together.` },
    { q: `How far in advance for ${city} events?`, a: `UT graduation (May) and fall football weekends fill 3–4 weeks ahead. Off-peak ${city} events typically confirm 1–2 weeks out. Book early for any May or October Saturday.` },
    { q: `Can you set up at a Sequoyah Hills or West Knoxville estate?`, a: `Yes. Estate setups are common in Farragut, Sequoyah Hills, and West Knoxville. We arrive fully self-contained — no outdoor kitchen required, just a flat outdoor surface and vehicle access.` },
    { q: `What about corporate events for Knoxville businesses?`, a: `We serve corporate events throughout East Tennessee — Turkey Creek businesses, downtown Knoxville teams, and companies throughout Knox and Blount County. Same process as residential events.` },
    { q: `Do you serve Maryville and Blount County?`, a: `Yes. Maryville, Alcoa, Friendsville, Vonore, and surrounding Blount County communities are all within our standard service radius.` },
  ],
  // Theme 5 — West & South Tennessee
  (city) => [
    { q: `Do you serve ${city} and surrounding communities?`, a: `Yes. For Memphis events: East Memphis, Midtown, Harbor Town, Germantown, Collierville, Bartlett, and all of Shelby County. For Chattanooga: Signal Mountain, Lookout Mountain, North Shore, East Brainerd, Ooltewah, and Hamilton County.` },
    { q: `Is private hibachi good for Memphis corporate events?`, a: `Excellent format. We serve corporate events throughout the Memphis Metro — outdoor venues, executive homes, and corporate properties. One station for up to 20 guests, dual stations for 25+.` },
    { q: `How far in advance for ${city} events?`, a: `Most ${city} events confirm 1–2 weeks out. Corporate events and large gatherings should book 2–3 weeks ahead. Graduation season (May–June) fills fastest.` },
    { q: `Do you serve Chattanooga and Hamilton County?`, a: `Yes. Chattanooga, Signal Mountain, Lookout Mountain, North Shore, East Brainerd, Ooltewah, and surrounding Hamilton County communities are all within our service area.` },
    { q: `What about Lookout Mountain and Signal Mountain events?`, a: `Yes — we serve both. For elevated or remote mountain properties, travel fees may apply and are always disclosed upfront. Let us know the property address at booking.` },
    { q: `Can you handle a large Germantown or Collierville graduation party?`, a: `Yes. Germantown and Collierville are our most common Shelby County graduation markets. For groups over 25, we bring dual chef stations running simultaneously so everyone eats together.` },
  ],
]

// ── Testimonials ───────────────────────────────────────────────────────────────
const TN_TESTIMONIALS = [
  // Theme 0 — Nashville Core
  [
    { quote: `Bachelorette weekend in Nashville — 18 of us in a rental house in East Nashville. The hibachi chef arrived Friday night and completely changed the whole trip. Fire tricks, flying shrimp, the full performance on the deck. We've done Nashville bachelorette weekends before. Nothing has ever been the highlight of the trip the way that dinner was.`, author: `Megan R.`, location: `Nashville, TN`, occasion: `Bachelorette Weekend` },
    { quote: `Anniversary dinner at our Brentwood estate. Twenty-two guests on the back patio. Chef arrived on time, set up completely independently, and exceeded every expectation. The filet mignon and lobster combination was exceptional. Three of our guests requested the contact before the chef finished cleanup.`, author: `David & Lisa M.`, location: `Brentwood, TN`, occasion: `Anniversary Dinner` },
    { quote: `Client entertainment event for our healthcare group at our Franklin property — 28 guests, chef was genuinely professional from arrival through cleanup. Every client commented on it afterward. This is now our standard format for quarterly client dinners.`, author: `James T.`, location: `Franklin, TN`, occasion: `Corporate Client Event` },
  ],
  // Theme 1 — Nashville South
  [
    { quote: `Graduation party for our son in Nolensville — 48 guests in our backyard. Chef had everyone gathered from the first flame. His entire friend group plus our extended family from Memphis all cheering at the same grill. We're already planning our daughter's event for next May.`, author: `Mark & Jennifer H.`, location: `Nolensville, TN`, occasion: `Graduation Party` },
    { quote: `Birthday dinner in our Spring Hill backyard — 34 guests on a June evening. The chef was engaging, professional, and turned what would have been a regular dinner party into a full performance. My guests have not stopped asking me for the contact.`, author: `Sandra W.`, location: `Spring Hill, TN`, occasion: `Birthday Dinner` },
    { quote: `Neighborhood Fourth of July in our Westhaven community — 42 guests, dual stations, chef ran the whole crowd for almost two hours. Best neighborhood gathering we've ever hosted. We're already organizing next summer.`, author: `The Bradford Family`, location: `Franklin, TN`, occasion: `Neighborhood Gathering` },
  ],
  // Theme 2 — Nashville East & North
  [
    { quote: `MTSU graduation party — 55 guests at our Murfreesboro home. Dual chef stations had everyone eating at the same time, grandparents from both coasts, his whole friend group from the program. The whole evening was exactly what we wanted a graduation party to feel like.`, author: `The Wallace Family`, location: `Murfreesboro, TN`, occasion: `MTSU Graduation Party` },
    { quote: `Birthday dinner at our Old Hickory Lake home in Hendersonville — 24 guests on the dock-side deck. Perfect summer evening, chef set up on the deck without any input from us, and the performance ran the whole time we were out there. Everyone is still talking about it.`, author: `Robert & Carol T.`, location: `Hendersonville, TN`, occasion: `Birthday on the Lake` },
    { quote: `Anniversary dinner with family at our Mt. Juliet home — 20 guests, chef exceeded every expectation. Our parents had never seen live hibachi cooking before and were completely captivated. The whole evening was worth every penny.`, author: `Michael & Sarah K.`, location: `Mt. Juliet, TN`, occasion: `Anniversary Celebration` },
  ],
  // Theme 3 — Smoky Mountains
  [
    { quote: `Bachelorette weekend in Gatlinburg — 14 of us in a cabin in Chalet Village. Chef came Saturday night, set up on the deck, and performed for all of us. The mountains in the background, the fire, the whole group at the grill together. I've been to dozens of bachelorette weekends. Nobody has ever done anything like this.`, author: `Ashley M.`, location: `Gatlinburg, TN`, occasion: `Bachelorette Weekend` },
    { quote: `Family reunion at a Pigeon Forge cabin — 38 people, dual stations, every generation from the grandparents down to the grandkids all gathered around the same grill. The chef was patient, funny, and made the whole night. We've already made this our annual tradition.`, author: `The Henderson Family`, location: `Pigeon Forge, TN`, occasion: `Family Reunion` },
    { quote: `Birthday weekend in Sevierville for my husband — 22 guests at a vacation rental near the Parkway. Chef arrived exactly on time, set up on the deck, and the whole group was completely engaged from the first minute to the last. We couldn't have planned a better evening.`, author: `Rachel L.`, location: `Sevierville, TN`, occasion: `Birthday Weekend` },
  ],
  // Theme 4 — East Tennessee
  [
    { quote: `UT graduation party for our daughter — 44 guests at our Sequoyah Hills home. Extended family flew in from four states. Chef set up on the back patio, ran dual stations for the whole group, and had everyone engaged for two hours. Our family has done every kind of graduation celebration. This was the best.`, author: `The Morrison Family`, location: `Knoxville, TN`, occasion: `UT Graduation Party` },
    { quote: `Retirement dinner at our Farragut home — 30 guests on the back patio. Chef arrived perfectly on time, performed exclusively for our group, and left the property immaculate. Filet mignon and lobster tail were exceptional. Several guests asked for the contact before the chef finished.`, author: `Robert & Patricia C.`, location: `Farragut, TN`, occasion: `Retirement Celebration` },
    { quote: `Birthday dinner in Maryville — 26 guests, backyard setup, chef was completely professional and had the whole group captivated. My husband kept saying he'd never had a birthday dinner that became an actual event before. The whole experience was unforgettable.`, author: `Jennifer H.`, location: `Maryville, TN`, occasion: `Birthday Dinner` },
  ],
  // Theme 5 — West & South Tennessee
  [
    { quote: `Team dinner for our Memphis distribution group — 32 guests at our company property in East Memphis. Chef handled everything, set up independently, and performed for the whole team. Our people have been talking about it for three weeks. We're booking again for Q4.`, author: `Marcus T.`, location: `Memphis, TN`, occasion: `Corporate Team Dinner` },
    { quote: `Graduation party for our son in Germantown — 46 guests in our backyard. Dual stations had the whole family eating together. The grandparents who flew in from Atlanta, his college friends, our neighbors — all gathered around the same grill at the same time. Already planning his sister's event.`, author: `The Davis Family`, location: `Germantown, TN`, occasion: `Graduation Party` },
    { quote: `Dinner party at our Lookout Mountain home — 22 guests on the terrace. Chef set up completely independently and performed for two hours. The views, the fire, the whole evening was exactly what we hoped it would be. Our guests were still mentioning it weeks later.`, author: `William & Margaret S.`, location: `Chattanooga, TN`, occasion: `Dinner Party` },
  ],
]

// ── Image themes ───────────────────────────────────────────────────────────────
const TN_IMAGE_THEMES = [
  { heroImage: '/pics/hero-4.jpg' },          // Theme 0 — Nashville Core
  { heroImage: '/pics/backyard-hibachi-3.jpg' }, // Theme 1 — Nashville South
  { heroImage: '/pics/hero-1.jpg' },          // Theme 2 — Nashville East/North
  { heroImage: '/pics/hibachi-colorado-home.jpg' }, // Theme 3 — Smoky Mountains
  { heroImage: '/pics/hero-2.jpg' },          // Theme 4 — East Tennessee
  { heroImage: '/pics/hibachi-catering-2.jpg' }, // Theme 5 — West/South TN
]

// ── How it works ───────────────────────────────────────────────────────────────
const TN_HOW_IT_WORKS = [
  // Theme 0 — Nashville Core
  {
    headline:   (city) => `How Mobile Hibachi Works at Your Nashville Rental or Estate`,
    footerNote: (city) => `We serve Nashville and all of Middle Tennessee — Brentwood, Franklin, Nolensville, Spring Hill, Hendersonville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Book From Your Rental',     desc: 'Reserve online or by phone with your Nashville rental address and guest count. Most Nashville quotes confirmed same day.' },
      { title: 'Chef Comes to You',         desc: 'Arrives fully equipped with teppan grill, propane, all proteins and ingredients. No setup for you — arrival through service is fully managed.' },
      { title: 'Live Show at the Property', desc: '90–120 minutes of live teppanyaki on your deck or patio — fire tricks, flying shrimp, every dish cooked to order for your group.' },
      { title: 'Complete Cleanup',          desc: 'Chef handles all teardown. Your Nashville rental or estate is spotless when the chef leaves. Security deposit safe.' },
      { title: 'Review & Rebook',           desc: 'Most Nashville groups rebook within the year. Same chef, same format, same result — the dinner that anchored the trip.' },
    ],
  },
  // Theme 1 — Nashville South
  {
    headline:   (city) => `How Backyard Hibachi Works in ${city}`,
    footerNote: (city) => `We serve ${city} and all of Williamson County — Franklin, Brentwood, Nolensville, Spring Hill, and surrounding Middle Tennessee communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',       desc: 'Tell us your event date, backyard location, guest count, and any preferences. Dual-station setups for 25+ guests confirmed in your quote. Response same day.' },
      { title: 'Confirm & Secure',      desc: 'Review your quote and confirm with a deposit. Your date is locked — especially important for graduation season (May–June). Provide your address 24–48 hours before.' },
      { title: 'Chef Setup',            desc: 'Chef arrives 30–45 minutes before start. Sets up in your backyard or outdoor space completely independently — grill, propane, all ingredients, plates, and utensils.' },
      { title: 'Live Teppanyaki',       desc: '90–120 minutes of live cooking for your entire guest list — fire tricks, flying shrimp, every dish cooked to order. Dual stations for groups over 25.' },
      { title: 'Zero Cleanup for You',  desc: 'Chef packs everything out. Your backyard is exactly as you left it — no grease, no residue, no cleanup for you or your family.' },
    ],
  },
  // Theme 2 — Nashville East & North
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `We serve ${city} and all of Middle Tennessee — Murfreesboro, Hendersonville, Mt. Juliet, Smyrna, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',       desc: 'Tell us your event date, location, guest count, and any preferences. Dual-station setups for 25+ guests confirmed in your quote. Response same day.' },
      { title: 'Confirm & Secure',      desc: 'Confirm with deposit. Your date is locked — graduation season (May–June) fills fastest in Middle Tennessee. Provide your address 24–48 hours before.' },
      { title: 'Chef Setup',            desc: 'Chef arrives 30–45 minutes before start. Sets up in your backyard, deck, or outdoor space independently — grill, propane, all ingredients, plates, and utensils.' },
      { title: 'Live Teppanyaki',       desc: '90–120 minutes of live cooking — fire tricks, flying shrimp, every dish cooked to order. Dual stations for groups over 25 mean everyone eats together.' },
      { title: 'Complete Cleanup',      desc: 'Full cleanup when dinner is done. Your backyard or waterfront property is exactly as we found it when the chef leaves.' },
    ],
  },
  // Theme 3 — Smoky Mountains
  {
    headline:   (city) => `How Cabin Hibachi Works at Your ${city} Rental`,
    footerNote: (city) => `We serve the full Smoky Mountains corridor — Gatlinburg, Pigeon Forge, Sevierville, Wears Valley, Townsend, and all Sevier County cabin communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Book Your Cabin Date',      desc: 'Reserve with your Sevier County cabin address and guest count. Peak-season dates fill fast — book early for October, July, and Spring Break.' },
      { title: 'Chef Comes to the Cabin',   desc: 'Arrives fully equipped — self-contained propane grill, all ingredients, everything needed for your cabin deck or outdoor space. No hookups required.' },
      { title: 'Live Show on the Deck',     desc: '90–120 minutes of live teppanyaki with the mountains as the backdrop — fire tricks, flying shrimp, every dish cooked to order at your cabin.' },
      { title: 'Complete Cleanup',          desc: 'Chef handles all teardown and cleanup. Your cabin rental is immaculate when the chef leaves. Security deposit safe.' },
      { title: 'The Dinner That Anchors the Trip', desc: 'Most Smokies groups say it\'s the highlight of the whole weekend. The evening nobody was expecting to be the best part.' },
    ],
  },
  // Theme 4 — East Tennessee
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `We serve ${city} and all of East Tennessee — Knoxville, Farragut, Maryville, Oak Ridge, Alcoa, and surrounding Knox and Blount County communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',       desc: 'Tell us your event date, property location, guest count, and protein preferences. Premium upgrades — filet mignon, lobster tail — available at any East TN event. Quote same day.' },
      { title: 'Confirm & Secure',      desc: 'Confirm with deposit. Your date is locked — UT graduation (May) and fall football weekends fill 3–4 weeks ahead. Provide your address 24–48 hours before.' },
      { title: 'Chef Setup',            desc: 'Chef arrives 30–45 minutes before start. Sets up on your estate patio, backyard, or outdoor space completely independently. Fully self-contained.' },
      { title: 'Live Teppanyaki',       desc: '90–120 minutes of live cooking — fire tricks, precision knife work, every dish cooked to order. Dual stations available for gatherings over 25 guests.' },
      { title: 'Complete Cleanup',      desc: 'Full cleanup when dinner is done. Your Knoxville or Farragut property is immaculate when the chef leaves.' },
    ],
  },
  // Theme 5 — West & South Tennessee
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `We serve ${city} and surrounding Tennessee communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
    steps: [
      { title: 'Contact & Quote',       desc: 'Tell us your event date, location (estate, corporate venue, or backyard), guest count, and any preferences. Response same day.' },
      { title: 'Confirm & Secure',      desc: 'Review your quote, confirm with deposit. Provide your venue address and any access notes 24–48 hours before the event.' },
      { title: 'Chef Setup',            desc: 'Chef arrives 30–45 minutes before start. Sets up independently at your outdoor space — no direction needed from you or your team.' },
      { title: 'Live Teppanyaki',       desc: '90–120 minutes of live teppanyaki — fire tricks, flying shrimp, every dish cooked to order. Two stations for groups of 25+.' },
      { title: 'Complete Cleanup',      desc: 'Full cleanup when dinner is done. Your estate, venue, or backyard is exactly as it was before the chef arrived.' },
    ],
  },
]

// ── Section variants ───────────────────────────────────────────────────────────
const TN_SECTION_VARIANTS = [
  // Theme 0 — Nashville Core
  {
    heroPill:         'Nashville\'s Private Hibachi Chef',
    experiencePill:   'Why Nashville Chooses Private Over the Restaurant',
    experienceImage:  '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a Nashville vacation rental or estate`,
    experiencePoints: (city) => [
      { icon: '🏠', title: 'The Rental Is Your Venue',           desc: `Skip the bar reservation. Your certified teppanyaki chef comes to your Nashville vacation rental, estate, or Airbnb and performs exclusively for your group on the deck or patio.` },
      { icon: '🔥', title: 'Live Fire at Your Property',         desc: `Fire tricks, flying shrimp, and 90–120 minutes of teppanyaki — the full show at your Nashville rental, not a shared dining room with strangers.` },
      { icon: '🎉', title: 'Built for the Nashville Group',      desc: `Bachelorette weekends, corporate dinners, birthday trips, and estate celebrations — the private hibachi format is built for exactly the Nashville gathering that needs a venue to match the occasion.` },
      { icon: '✨', title: 'Full Setup and Complete Cleanup',    desc: `Your chef arrives with everything, performs for your group, and leaves the property immaculate. The rental deposit is safe. The evening is remarkable.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Mobile Hibachi Service Area — Nashville & Middle Tennessee`,
    areasIntro:      [
      (city, state) => `We serve all of Nashville — The Gulch, East Nashville, 12 South, Belle Meade, Germantown, Music Row, Sylvan Park, and every vacation rental and residential neighborhood throughout Davidson County. Brentwood, Franklin, Nolensville, Spring Hill, and Hendersonville are within our standard service radius.`,
      (city) => `Most Nashville bookings confirmed same day. Summer and bachelorette weekends fill 4–6 weeks ahead — confirm your date with a deposit to lock it in. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Check Nashville Availability',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Nashville Hibachi for Every Occasion`,
    occasionSubtext: `From The Gulch vacation rental to the Belle Meade estate, we serve every Nashville occasion where the group deserves a private chef rather than a restaurant table.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `Nashville Mobile Hibachi FAQs`,
    testimonialSubheading: `What Nashville bachelorette groups, estate hosts, and corporate clients are saying`,
  },
  // Theme 1 — Nashville South
  {
    heroPill:         'Backyard Hibachi in Williamson County',
    experiencePill:   'Better Than Any Williamson County Restaurant',
    experienceImage:  '/pics/hibachi-austin-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a backyard graduation party in ${city}, Tennessee`,
    experiencePoints: (city) => [
      { icon: '🏡', title: 'Your Backyard Is the Venue',          desc: `No restaurant reservations for 40 guests. No waiting rooms for a party that started at your house. Your ${city} backyard becomes an exclusive private dining room for the evening.` },
      { icon: '🎓', title: 'Built for Graduation Season',         desc: `When every Franklin and Brentwood restaurant is fully booked for May graduation weekends, we come to your ${city} property with everything — the chef, the grill, the proteins, and the performance.` },
      { icon: '🍱', title: 'Every Plate Cooked to Order',         desc: `Your certified teppanyaki chef cooks for every guest live at the grill — from the first onion volcano to the final plate of fried rice. Nothing pre-made. Everything live.` },
      { icon: '✨', title: 'Complete Setup and Cleanup',          desc: `We arrive, set up, perform, and leave your ${city} backyard exactly as we found it. You host without lifting a finger. Your guests leave talking about the dinner.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Private Hibachi Service Area — ${city} & Williamson County`,
    areasIntro:      [
      (city, state) => `We serve all of Williamson County — ${city}, Franklin, Brentwood, Nolensville, Spring Hill, Thompson's Station, Fairview, and surrounding southern Nashville communities. Murfreesboro and the broader Middle Tennessee area are also within our service radius.`,
      (city) => `Most ${city} bookings confirmed same day. Graduation season (May–June) fills 2–4 weeks ahead — reserve early for any spring Saturday event. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Check Williamson County Availability',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Hibachi at Home in ${city} for Every Occasion`,
    occasionSubtext: `From graduation parties to neighborhood block events — Williamson County hosted in your own backyard with a certified teppanyaki chef.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city}, ${abbr} Hibachi FAQs`,
    testimonialSubheading: `What Williamson County graduation hosts and backyard entertainers are saying`,
  },
  // Theme 2 — Nashville East & North
  {
    heroPill:         'Middle Tennessee Private Dining',
    experiencePill:   'The Middle Tennessee Backyard Upgrade',
    experienceImage:  '/pics/hibachi-shot-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a family event in ${city}, Tennessee`,
    experiencePoints: (city) => [
      { icon: '🎓', title: 'Built for Middle Tennessee Graduation', desc: `MTSU graduation and Middle Tennessee family milestones deserve more than a restaurant table for eight. Your certified chef performs for the whole extended family at once in your backyard.` },
      { icon: '🏡', title: 'Your Property, Your Gathering',         desc: `Old Hickory Lake dock decks, Hendersonville backyards, and Mt. Juliet patios — wherever your group is gathering in Middle Tennessee, we set up and perform exclusively for your guests.` },
      { icon: '🔥', title: 'Live Teppanyaki for Everyone',          desc: `90–120 minutes of live cooking from first flame to final plate. Fire tricks, flying shrimp, every protein cooked to order at the grill in front of your ${city} guests.` },
      { icon: '✨', title: 'Full Setup and Zero Cleanup',           desc: `We bring everything and take everything out. Your backyard or waterfront property is exactly as we found it. You just hosted the best dinner of the season.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Private Hibachi Service Area — ${city} & Middle Tennessee`,
    areasIntro:      [
      (city, state) => `We serve all of Middle Tennessee — Murfreesboro, Hendersonville, Mt. Juliet, Smyrna, LaVergne, Cookeville, and surrounding Rutherford, Sumner, and Wilson County communities. Nashville proper and all of the Nashville Metro are within our service area.`,
      (city) => `Most ${city} bookings confirmed same day. MTSU graduation (May) and spring events fill 2–4 weeks ahead. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Reserve Your Middle Tennessee Date',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Hibachi at Home in ${city} for Every Occasion`,
    occasionSubtext: `From MTSU graduation celebrations to Old Hickory Lake dock dinners — every Middle Tennessee occasion made unforgettable with a certified teppanyaki chef at your property.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city}, ${abbr} Hibachi at Home FAQs`,
    testimonialSubheading: `What Middle Tennessee graduation hosts and backyard entertainers are saying`,
  },
  // Theme 3 — Smoky Mountains
  {
    heroPill:         'Smoky Mountain Cabin Hibachi',
    experiencePill:   'Your Cabin Deck Becomes the Restaurant',
    experienceImage:  '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a Smoky Mountain cabin near ${city}, Tennessee`,
    experiencePoints: (city) => [
      { icon: '🏔️', title: 'The Cabin Deck Becomes the Restaurant', desc: `Your Chalet Village or Wears Valley cabin deck is the venue. Your certified teppanyaki chef arrives fully equipped and performs for your entire group on your cabin's outdoor space.` },
      { icon: '🔥', title: 'Live Fire in the Mountains',            desc: `Fire tricks, flying shrimp, and 90–120 minutes of teppanyaki in the Great Smoky Mountains. The cabin group experience nobody forgets.` },
      { icon: '🎉', title: 'Built for Smokies Group Occasions',     desc: `Gatlinburg bachelorette weekends, Pigeon Forge family reunions, cabin birthday trips — the private hibachi format is built for exactly the Smoky Mountain group that needs the dinner to match the mountains.` },
      { icon: '✨', title: 'Self-Contained and Complete Cleanup',   desc: `Fully self-contained propane grill — no hookups needed at your cabin. Complete cleanup when dinner is done. Your rental is immaculate and the security deposit is safe.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Cabin Hibachi Service Area — The Smokies & Sevier County`,
    areasIntro:      [
      (city, state) => `We serve the full Smoky Mountains corridor — Gatlinburg, Pigeon Forge, Sevierville, Wears Valley, Townsend, Chalet Village, Arts & Crafts Community, and all vacation rental communities throughout Sevier County. For elevated or remote cabin locations, travel details are disclosed upfront.`,
      (city) => `${city} peak-season weekends (October, July, Spring Break) fill 4–6 weeks ahead. Off-peak spring and winter events confirm 1–2 weeks out. Call or text (201) 565-3878 to check your date.`,
    ],
    areasButton:     'Check Cabin Availability',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Smoky Mountain Cabin Hibachi for Every Occasion`,
    occasionSubtext: `From Gatlinburg bachelorette weekends to Pigeon Forge family reunions — the full teppanyaki performance at your Sevier County cabin or vacation rental.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city} Cabin Hibachi FAQs`,
    testimonialSubheading: `What Smoky Mountain cabin guests are saying about private hibachi in the mountains`,
  },
  // Theme 4 — East Tennessee
  {
    heroPill:         'East Tennessee\'s Private Chef',
    experiencePill:   'East Tennessee\'s Private Dining Standard',
    experienceImage:  '/pics/hibachi-pic-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at an event in ${city}, Tennessee`,
    experiencePoints: (city) => [
      { icon: '🎓', title: 'Built for UT Graduation Season',      desc: `Vol families fly in from across the country for May graduation. Your certified teppanyaki chef performs for the whole extended guest list at your ${city} or Farragut property — dual stations for larger gatherings.` },
      { icon: '🏡', title: 'Sequoyah Hills to Maryville',         desc: `Estate dinners in Sequoyah Hills, West Knoxville, and Farragut. Backyard gatherings in Maryville and Alcoa. Wherever your group is in East Tennessee, we bring the full setup.` },
      { icon: '🔥', title: 'Live Teppanyaki Performance',         desc: `Fire tricks, precision knife work, and 90–120 minutes of live cooking from first flame to final plate. Every protein cooked to order in front of your East Tennessee guests.` },
      { icon: '✨', title: 'Zero Cleanup for You',                desc: `Your chef arrives with everything and leaves the property immaculate. You hosted an exceptional dinner without a single dish to wash or a grill to clean.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Private Hibachi Service Area — ${city} & East Tennessee`,
    areasIntro:      [
      (city, state) => `We serve all of East Tennessee — Knoxville, Farragut, Maryville, Oak Ridge, Alcoa, Lenoir City, Loudon, and surrounding Knox and Blount County communities.`,
      (city) => `UT graduation (May) and fall football weekends fill 3–4 weeks ahead. Off-peak ${city} events confirm 1–2 weeks out. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Reserve Your East Tennessee Date',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Private Hibachi in ${city} for Every Occasion`,
    occasionSubtext: `From UT graduation celebrations at Sequoyah Hills estates to Maryville birthday dinners — the full teppanyaki experience at your East Tennessee property.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city}, ${abbr} Private Hibachi FAQs`,
    testimonialSubheading: `What East Tennessee hosts are saying about private hibachi at home`,
  },
  // Theme 5 — West & South Tennessee
  {
    heroPill:         'Tennessee\'s Private Dining Experience',
    experiencePill:   'The Private Event Your Tennessee City Deserves',
    experienceImage:  '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a corporate or milestone event in ${city}, Tennessee`,
    experiencePoints: (city) => [
      { icon: '🏢', title: 'Built for Corporate Tennessee',        desc: `FedEx, AutoZone, International Paper — the Memphis professional community and Chattanooga's growing corporate sector have adopted private hibachi as the entertainment format for occasions where a restaurant table won't do.` },
      { icon: '🎓', title: 'Shelby County Graduation Culture',     desc: `Germantown and Collierville graduation parties are some of our largest Tennessee events — 40 to 60 guests in a single backyard, dual stations running simultaneously, the whole extended family at the same grill.` },
      { icon: '🔥', title: 'Live Teppanyaki for Every Group Size', desc: `One chef station for up to 20 guests, dual stations for larger gatherings. 90–120 minutes of live cooking from first flame to final plate. Fire tricks, flying shrimp, every dish cooked to order.` },
      { icon: '✨', title: 'Full Setup and Complete Cleanup',      desc: `We arrive fully equipped and leave the property immaculate. Your Memphis estate, Chattanooga terrace, or Germantown backyard is exactly as we found it when the chef leaves.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Private Hibachi Service Area — ${city} & Greater Tennessee`,
    areasIntro:      [
      (city, state) => `We serve the greater ${city} area and all surrounding communities. Memphis service area: East Memphis, Midtown, Harbor Town, Germantown, Collierville, Bartlett, and Shelby County. Chattanooga service area: Signal Mountain, Lookout Mountain, North Shore, East Brainerd, Ooltewah, and Hamilton County.`,
      (city) => `Most ${city} bookings confirmed same day. Corporate events and graduation parties should book 2–3 weeks ahead. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Book Your Tennessee Event',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Private Hibachi in ${city} for Every Occasion`,
    occasionSubtext: `From Memphis corporate team dinners to Germantown graduation parties to Chattanooga estate evenings — the full teppanyaki experience at your Tennessee property.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city}, ${abbr} Private Hibachi FAQs`,
    testimonialSubheading: `What Memphis, Germantown, and Chattanooga hosts are saying about private hibachi`,
  },
]

// ── City experience image map (Batch 1) ────────────────────────────────────────
const TN_CITY_IMAGE_MAP = {
  'nashville':   { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Mobile hibachi chef at a Nashville vacation rental or bachelorette event` },
  'brentwood':   { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef at a Brentwood, TN estate dinner` },
  'franklin':    { src: '/pics/hibachi-dallas-home.jpg',    alt: (city) => `Private hibachi chef at a Franklin, TN estate or backyard event` },
  'nolensville': { src: '/pics/backyard-hibachi.jpg',       alt: (city) => `Private hibachi chef at a Nolensville, TN backyard graduation party` },
  'spring-hill':   { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Private hibachi chef at a Spring Hill, TN backyard celebration` },
  // Batch 2
  'murfreesboro':  { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Private hibachi chef at a Murfreesboro, TN graduation party` },
  'hendersonville':{ src: '/pics/hibachi-at-home.jpg',       alt: (city) => `Private hibachi chef at a Hendersonville, TN lakefront gathering` },
  'mt-juliet':     { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Private hibachi chef at a Mt. Juliet, TN backyard celebration` },
  'cookeville':    { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi chef at a Cookeville, TN graduation party` },
  'knoxville':     { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Private hibachi catering event in Knoxville, TN` },
  // Batch 3
  'gatlinburg':    { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Mobile hibachi chef at a Gatlinburg, TN cabin bachelorette weekend` },
  'pigeon-forge':  { src: '/pics/mobile-hibachi-2.jpg',      alt: (city) => `Mobile hibachi chef at a Pigeon Forge, TN cabin group dinner` },
  'sevierville':   { src: '/pics/hibachi-shot-2.jpg',        alt: (city) => `Private hibachi chef at a Sevierville, TN vacation rental event` },
  'farragut':      { src: '/pics/hibachi-chef-2.jpg',        alt: (city) => `Private hibachi chef at a Farragut, TN estate dinner` },
  'maryville':     { src: '/pics/backyard-hibachi-3.jpg',    alt: (city) => `Backyard hibachi chef at a Maryville, TN home celebration` },
  // Batch 4
  'memphis':       { src: '/pics/hibachi-dallas.jpg',        alt: (city) => `Private hibachi catering at a Memphis, TN corporate or estate event` },
  'germantown':    { src: '/pics/private-hibachi.jpg',       alt: (city) => `Private hibachi chef at a Germantown, TN estate dinner` },
  'collierville':  { src: '/pics/hibachi-dallas-2.jpg',      alt: (city) => `Private hibachi chef at a Collierville, TN backyard graduation party` },
  'chattanooga':   { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi catering at a Chattanooga, TN corporate or estate event` },
}

// ── Support images for profiled cities (Batch 1) ───────────────────────────────
// Rule: testimonial.src MUST differ from TN_CITY_IMAGE_MAP[city].src
//       cta.src MUST differ from both testimonial.src and TN_CITY_IMAGE_MAP[city].src
const TN_SUPPORT_IMAGES = {
  'nashville': {
    testimonial: {
      src:     '/pics/hibachi-photo-1.jpg',
      alt:     (city) => `Happy guests at a Nashville private hibachi dinner`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-photo-2.jpg',
      alt: (city) => `Nashville private hibachi chef experience`,
    },
  },
  'brentwood': {
    testimonial: {
      src:     '/pics/hibachi-chef-at-home.jpg',
      alt:     (city) => `Private hibachi chef at a Brentwood, TN estate event`,
      caption: '',
    },
    cta: {
      src: '/pics/private-hibachi.jpg',
      alt: (city) => `Private hibachi chef in Brentwood, Tennessee`,
    },
  },
  'franklin': {
    testimonial: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef performing at a Franklin, TN estate event`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-chef-at-home.jpg',
      alt: (city) => `Hibachi chef at a Franklin, TN home`,
    },
  },
  'nolensville': {
    testimonial: {
      src:     '/pics/hibachi-at-home.jpg',
      alt:     (city) => `Private hibachi chef at a Nolensville, TN backyard gathering`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-event.jpg',
      alt: (city) => `Hibachi event at a Nolensville, Tennessee home`,
    },
  },
  'spring-hill': {
    testimonial: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef at a Spring Hill, TN celebration`,
      caption: '',
    },
    cta: {
      src: '/pics/backyard-hibachi.jpg',
      alt: (city) => `Backyard hibachi in Spring Hill, Tennessee`,
    },
  },
  // Batch 2
  'murfreesboro': {
    testimonial: {
      src:     '/pics/hibachi-shot-2.jpg',
      alt:     (city) => `Happy guests at a Murfreesboro, TN private hibachi graduation party`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-event.jpg',
      alt: (city) => `Private hibachi chef experience in Murfreesboro, Tennessee`,
    },
  },
  'hendersonville': {
    testimonial: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Private hibachi chef at a Hendersonville, TN lakefront event`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-shot-2.jpg',
      alt: (city) => `Hibachi at home in Hendersonville, Tennessee`,
    },
  },
  'mt-juliet': {
    testimonial: {
      src:     '/pics/hibachi-pic-2.jpg',
      alt:     (city) => `Private hibachi chef at a Mt. Juliet, TN backyard party`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-at-home.jpg',
      alt: (city) => `Hibachi at home in Mt. Juliet, Tennessee`,
    },
  },
  'cookeville': {
    testimonial: {
      src:     '/pics/backyard-hibachi.jpg',
      alt:     (city) => `Private hibachi chef at a Cookeville, TN graduation celebration`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-catering-3.jpg',
      alt: (city) => `Hibachi catering for a Tennessee Tech graduation party in Cookeville`,
    },
  },
  'knoxville': {
    testimonial: {
      src:     '/pics/hibachi-dallas.jpg',
      alt:     (city) => `Private hibachi chef at a Knoxville, TN estate event`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-pic-2.jpg',
      alt: (city) => `Hibachi catering in Knoxville, Tennessee`,
    },
  },
  // Batch 3
  'gatlinburg': {
    testimonial: {
      src:     '/pics/hibachi-colorado.jpg',
      alt:     (city) => `Mobile hibachi chef at a Gatlinburg, TN cabin bachelorette weekend`,
      caption: '',
    },
    cta: {
      src: '/pics/mobile-hibachi.jpg',
      alt: (city) => `Mobile hibachi chef traveling to a Gatlinburg Smoky Mountain cabin`,
    },
  },
  'pigeon-forge': {
    testimonial: {
      src:     '/pics/hibachi-photo-1.jpg',
      alt:     (city) => `Happy guests at a Pigeon Forge, TN cabin group hibachi dinner`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-colorado.jpg',
      alt: (city) => `Mobile hibachi chef at a Pigeon Forge, Tennessee cabin rental`,
    },
  },
  'sevierville': {
    testimonial: {
      src:     '/pics/mobile-hibachi.jpg',
      alt:     (city) => `Private hibachi chef at a Sevierville, TN vacation rental event`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-photo-1.jpg',
      alt: (city) => `Hibachi at home in Sevierville, Tennessee near the Smoky Mountains`,
    },
  },
  'farragut': {
    testimonial: {
      src:     '/pics/hibachi-dallas-home.jpg',
      alt:     (city) => `Private hibachi chef at a Farragut, TN estate dinner`,
      caption: '',
    },
    cta: {
      src: '/pics/private-hibachi.jpg',
      alt: (city) => `Private hibachi chef in Farragut, Tennessee`,
    },
  },
  'maryville': {
    testimonial: {
      src:     '/pics/hibachi-at-home.jpg',
      alt:     (city) => `Private hibachi chef at a Maryville, TN backyard gathering`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-shot-1.jpg',
      alt: (city) => `Backyard hibachi in Maryville, Tennessee`,
    },
  },
  // Batch 4
  'memphis': {
    testimonial: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi catering at a Memphis, TN corporate or estate event`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-shot-2.jpg',
      alt: (city) => `Private hibachi chef experience in Memphis, Tennessee`,
    },
  },
  'germantown': {
    testimonial: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef at a Germantown, TN estate graduation party`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-chef-at-home.jpg',
      alt: (city) => `Private hibachi chef in Germantown, Tennessee`,
    },
  },
  'collierville': {
    testimonial: {
      src:     '/pics/hibachi-shot-1.jpg',
      alt:     (city) => `Private hibachi chef at a Collierville, TN backyard graduation party`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-catering.jpg',
      alt: (city) => `Hibachi at home in Collierville, Tennessee`,
    },
  },
  'chattanooga': {
    testimonial: {
      src:     '/pics/hibachi-shot-2.jpg',
      alt:     (city) => `Private hibachi chef at a Chattanooga, TN corporate or estate event`,
      caption: '',
    },
    cta: {
      src: '/pics/hibachi-catering-3.jpg',
      alt: (city) => `Private hibachi catering in Chattanooga, Tennessee`,
    },
  },
}

// ── Support image fallbacks by theme ──────────────────────────────────────────
const TN_SUPPORT_FALLBACKS = [
  {
    testimonial: { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi chef in ${city}, TN`, caption: '' },
    cta:         { src: '/pics/hibachi-photo-2.jpg',    alt: (city) => `Hibachi experience in ${city}, Tennessee` },
  },
  {
    testimonial: { src: '/pics/hibachi-at-home.jpg',    alt: (city) => `Backyard hibachi chef in ${city}, TN`, caption: '' },
    cta:         { src: '/pics/hibachi-event.jpg',      alt: (city) => `Hibachi at home in ${city}, Tennessee` },
  },
  {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',     alt: (city) => `Private hibachi chef in ${city}, TN`, caption: '' },
    cta:         { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Hibachi in ${city}, Tennessee` },
  },
  {
    testimonial: { src: '/pics/hibachi-colorado.jpg',   alt: (city) => `Cabin hibachi near ${city}, TN`, caption: '' },
    cta:         { src: '/pics/mobile-hibachi.jpg',     alt: (city) => `Mobile hibachi chef near ${city}, Tennessee` },
  },
  {
    testimonial: { src: '/pics/hibachi-pic-2.jpg',      alt: (city) => `Private hibachi chef in ${city}, TN`, caption: '' },
    cta:         { src: '/pics/backyard-hibachi-2.jpg', alt: (city) => `Backyard hibachi in ${city}, Tennessee` },
  },
  {
    testimonial: { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Hibachi catering in ${city}, TN`, caption: '' },
    cta:         { src: '/pics/hibachi-shot-1.jpg',     alt: (city) => `Private hibachi in ${city}, Tennessee` },
  },
]

// ── Nearby major cities (update each batch) ────────────────────────────────────
const TN_NEARBY_MAJOR = [
  ['Nashville', 'Brentwood', 'Franklin', 'Murfreesboro', 'Knoxville', 'Nolensville', 'Spring Hill'],   // v=0 Nashville Core
  ['Franklin', 'Nolensville', 'Nashville', 'Brentwood', 'Spring Hill', 'Murfreesboro', 'Cookeville'],  // v=1 Nashville South
  ['Nashville', 'Murfreesboro', 'Hendersonville', 'Mt. Juliet', 'Brentwood', 'Franklin'],              // v=2 Nashville East/North
  ['Gatlinburg', 'Pigeon Forge', 'Sevierville', 'Knoxville', 'Farragut', 'Maryville'],                // v=3 Smoky Mountains
  ['Knoxville', 'Farragut', 'Maryville', 'Gatlinburg', 'Pigeon Forge', 'Sevierville'],                // v=4 East Tennessee
  ['Memphis', 'Germantown', 'Collierville', 'Chattanooga', 'Nashville'],                               // v=5 West/South TN
]

// ── Blog posts ─────────────────────────────────────────────────────────────────
// variant = v % 3, so themes 3/4/5 reuse arrays 0/1/2 respectively
const TN_BLOG_POSTS = [
  // Theme 0 (variant=0) — Nashville bachelorette / vacation rental / estate
  [
    { slug: 'hibachi-bachelorette-party',         title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',                 excerpt: 'Nashville bachelorette weekends — why private hibachi at your vacation rental is the best dinner of the trip.', date: '2025-02-10' },
    { slug: 'what-to-expect-hibachi-chef-home',   title: 'What to Expect When You Book a Private Hibachi Chef at Home',                 excerpt: 'Nashville hosts: what happens from booking through cleanup at a vacation rental or estate hibachi event.', date: '2024-11-20' },
    { slug: 'hibachi-at-home-vs-restaurant',      title: 'Hibachi at Home vs. Restaurant: Why Nashville Hosts Choose Private',          excerpt: 'The Nashville bachelorette group and estate entertainer on why a private hibachi chef outclasses any Music City restaurant for group dinners.', date: '2025-01-22' },
  ],
  // Theme 1 (variant=1) — Nashville South / backyard / graduation
  [
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                 excerpt: 'Everything Williamson County and Middle Tennessee hosts need before the private hibachi chef arrives at your backyard.', date: '2025-02-28' },
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Nolensville, Spring Hill, and Franklin hosts — how to plan a backyard hibachi birthday or graduation party in Williamson County.', date: '2025-04-08' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for Williamson County hibachi events — dual stations, graduation parties, and what\'s included.', date: '2025-01-15' },
  ],
  // Theme 2 (variant=2) — Nashville East/North / family / graduation
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Murfreesboro, Hendersonville, and Middle Tennessee hosts — how to plan a backyard hibachi graduation or family milestone event.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                 excerpt: 'Everything Middle Tennessee hosts need before the private hibachi chef arrives at your Murfreesboro or Hendersonville home.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for Middle Tennessee hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
  ],
]

// ── Major cities map (Batch 1 — 5 cities) ─────────────────────────────────────
const TN_MAJOR_CITIES = {
  // Theme 0 — Nashville Core
  'nashville':   { v: 0, profileIdx: 0, nearby: ['Brentwood', 'Franklin', 'Nolensville', 'Spring Hill', 'Hendersonville'] },
  'brentwood':   { v: 0, profileIdx: 1, nearby: ['Nashville', 'Franklin', 'Nolensville', 'Spring Hill'] },
  'franklin':    { v: 0, profileIdx: 2, nearby: ['Nashville', 'Brentwood', 'Nolensville', 'Spring Hill'] },
  // Theme 1 — Nashville South
  'nolensville': { v: 1, profileIdx: 3,  nearby: ['Franklin', 'Brentwood', 'Spring Hill', 'Nashville'] },
  'spring-hill': { v: 1, profileIdx: 4,  nearby: ['Franklin', 'Nolensville', 'Nashville', 'Brentwood'] },
  'cookeville':  { v: 1, profileIdx: 8,  nearby: ['Nashville', 'Murfreesboro', 'Franklin', 'Brentwood'] },
  // Theme 2 — Nashville East/North
  'murfreesboro':   { v: 2, profileIdx: 5,  nearby: ['Nashville', 'Hendersonville', 'Mt. Juliet', 'Franklin', 'Brentwood'] },
  'hendersonville': { v: 2, profileIdx: 6,  nearby: ['Nashville', 'Murfreesboro', 'Mt. Juliet', 'Gallatin'] },
  'mt-juliet':      { v: 2, profileIdx: 7,  nearby: ['Nashville', 'Murfreesboro', 'Hendersonville', 'Lebanon'] },
  // Theme 3 — Smoky Mountains
  'gatlinburg':    { v: 3, profileIdx: 10, nearby: ['Pigeon Forge', 'Sevierville', 'Knoxville'] },
  'pigeon-forge':  { v: 3, profileIdx: 11, nearby: ['Gatlinburg', 'Sevierville', 'Knoxville'] },
  'sevierville':   { v: 3, profileIdx: 12, nearby: ['Gatlinburg', 'Pigeon Forge', 'Knoxville', 'Maryville'] },
  // Theme 4 — East Tennessee
  'knoxville': { v: 4, profileIdx: 9,  nearby: ['Farragut', 'Maryville', 'Gatlinburg', 'Pigeon Forge'] },
  'farragut':  { v: 4, profileIdx: 13, nearby: ['Knoxville', 'Maryville', 'Sevierville'] },
  'maryville': { v: 4, profileIdx: 14, nearby: ['Knoxville', 'Farragut', 'Sevierville', 'Gatlinburg'] },
  // Theme 5 — West/South TN
  'memphis':      { v: 5, profileIdx: 15, nearby: ['Germantown', 'Collierville', 'Bartlett', 'Cordova'] },
  'germantown':   { v: 5, profileIdx: 16, nearby: ['Memphis', 'Collierville', 'Bartlett'] },
  'collierville': { v: 5, profileIdx: 17, nearby: ['Memphis', 'Germantown', 'Bartlett'] },
  'chattanooga':  { v: 5, profileIdx: 18, nearby: ['Nashville', 'Knoxville', 'Memphis'] },
}

// ── H1 prefix arrays ───────────────────────────────────────────────────────────
// profileIdx order: 0=Nashville, 1=Brentwood, 2=Franklin, 3=Nolensville, 4=Spring Hill,
//   5=Murfreesboro, 6=Hendersonville, 7=Mt.Juliet, 8=Cookeville, 9=Knoxville,
//   10=Gatlinburg, 11=Pigeon Forge, 12=Sevierville, 13=Farragut, 14=Maryville,
//   15=Memphis, 16=Germantown, 17=Collierville, 18=Chattanooga
const TN_PROFILE_H1_PREFIXES = [
  'Mobile Hibachi in',         // 0 — Nashville
  'Private Hibachi Chef in',   // 1 — Brentwood
  'Private Hibachi Chef in',   // 2 — Franklin
  'Hibachi at Home in',        // 3 — Nolensville
  'Hibachi at Home in',        // 4 — Spring Hill
  'Hibachi at Home in',        // 5 — Murfreesboro
  'Hibachi at Home in',        // 6 — Hendersonville
  'Hibachi at Home in',        // 7 — Mt. Juliet
  'Hibachi at Home in',        // 8 — Cookeville
  'Hibachi Catering in',       // 9 — Knoxville
  'Mobile Hibachi in',         // 10 — Gatlinburg
  'Mobile Hibachi in',         // 11 — Pigeon Forge
  'Hibachi at Home in',        // 12 — Sevierville
  'Private Hibachi Chef in',   // 13 — Farragut
  'Backyard Hibachi in',       // 14 — Maryville
  'Hibachi Catering in',       // 15 — Memphis
  'Private Hibachi Chef in',   // 16 — Germantown
  'Hibachi at Home in',        // 17 — Collierville
  'Hibachi Catering in',       // 18 — Chattanooga
]

const TN_THEME_H1_PREFIXES = [
  'Mobile Hibachi in',       // v=0 — Nashville Core
  'Hibachi at Home in',      // v=1 — Nashville South
  'Hibachi at Home in',      // v=2 — Nashville East/North
  'Mobile Hibachi in',       // v=3 — Smoky Mountains
  'Hibachi at Home in',      // v=4 — East Tennessee
  'Hibachi Catering in',     // v=5 — West/South TN
]

// ── Custom meta (all Batch 1 cities — no auto-generated titles) ────────────────
const TN_CUSTOM_META = {
  'nashville': {
    title: 'Mobile Hibachi in Nashville, TN | Bachelorette & Vacation Rental Chef | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Nashville, TN for bachelorette weekends, vacation rental group dinners, and estate events. Chef travels to your rental with full setup and cleanup. From $60/adult.',
  },
  'brentwood': {
    title: 'Private Hibachi Chef in Brentwood, TN | Estate Dinners & Milestone Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Brentwood, TN for estate dinners, anniversary celebrations, and milestone events. Certified teppanyaki chef at your Brentwood property. Full setup and cleanup. From $60/adult.',
  },
  'franklin': {
    title: 'Private Hibachi Chef in Franklin, TN | Estate Dinners & Corporate Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Franklin, TN for estate celebrations, graduation parties, and corporate events. Certified teppanyaki chef at your Williamson County property. From $60/adult.',
  },
  'nolensville': {
    title: 'Hibachi at Home in Nolensville, TN | Graduation Parties & Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Nolensville, TN for graduation parties, birthday celebrations, and backyard events. Certified teppanyaki chef with full setup and cleanup. From $60/adult.',
  },
  'spring-hill': {
    title: 'Hibachi at Home in Spring Hill, TN | Graduation Parties & Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Spring Hill, TN for graduation parties, birthday dinners, and backyard celebrations. Certified teppanyaki chef with full setup and cleanup. From $60/adult.',
  },
  // Batch 2
  'murfreesboro': {
    title: 'Hibachi at Home in Murfreesboro, TN | MTSU Graduation Parties & Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Murfreesboro, TN for MTSU graduation parties, birthday celebrations, and backyard events. Certified teppanyaki chef with full setup and cleanup. From $60/adult.',
  },
  'hendersonville': {
    title: 'Hibachi at Home in Hendersonville, TN | Old Hickory Lake Events & Graduation Parties | Hibachi Connect',
    desc:  'Book a private hibachi chef in Hendersonville, TN for lakefront gatherings, graduation parties, and backyard events. Certified teppanyaki chef at your Sumner County property. From $60/adult.',
  },
  'mt-juliet': {
    title: 'Hibachi at Home in Mt. Juliet, TN | Backyard Events & Graduation Parties | Hibachi Connect',
    desc:  'Book a private hibachi chef in Mt. Juliet, TN for graduation parties, birthday dinners, and backyard celebrations. Certified teppanyaki chef with full setup and cleanup. From $60/adult.',
  },
  'cookeville': {
    title: 'Hibachi at Home in Cookeville, TN | Tennessee Tech Graduation Parties & Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Cookeville, TN for Tennessee Tech graduation parties, backyard celebrations, and milestone events. Certified teppanyaki chef in the Upper Cumberland. From $60/adult.',
  },
  'knoxville': {
    title: 'Hibachi Catering in Knoxville, TN | UT Graduation Parties & Estate Dinners | Hibachi Connect',
    desc:  'Book a private hibachi chef in Knoxville, TN for UT graduation parties, estate dinners, and corporate events. Certified teppanyaki team serving Sequoyah Hills, West Knoxville, and Knox County. From $60/adult.',
  },
  // Batch 3
  'gatlinburg': {
    title: 'Mobile Hibachi in Gatlinburg, TN | Cabin & Bachelorette Weekend Chef | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Gatlinburg, TN for cabin bachelorette weekends, group dinners, and Smoky Mountain vacation rentals. Self-contained setup, no hookups needed. From $60/adult.',
  },
  'pigeon-forge': {
    title: 'Mobile Hibachi in Pigeon Forge, TN | Cabin Group Dinners & Family Reunions | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Pigeon Forge, TN for cabin group dinners, family reunions, and Smoky Mountain vacation rentals. Fully self-contained setup, complete cleanup. From $60/adult.',
  },
  'sevierville': {
    title: 'Hibachi at Home in Sevierville, TN | Cabin & Vacation Rental Private Chef | Hibachi Connect',
    desc:  'Book a private hibachi chef in Sevierville, TN for vacation rental events, backyard gatherings, and Smoky Mountain milestone occasions. Certified teppanyaki chef in Sevier County. From $60/adult.',
  },
  'farragut': {
    title: 'Private Hibachi Chef in Farragut, TN | Estate Dinners & Milestone Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Farragut, TN for estate dinners, graduation parties, and milestone events. Certified teppanyaki chef serving Turkey Creek, West Knoxville, and Knox County. From $60/adult.',
  },
  'maryville': {
    title: 'Backyard Hibachi in Maryville, TN | Private Teppanyaki Chef at Home | Hibachi Connect',
    desc:  'Book a private hibachi chef in Maryville, TN for backyard graduation parties, birthday celebrations, and milestone events. Certified teppanyaki chef in Blount County. From $60/adult.',
  },
  // Batch 4
  'memphis': {
    title: 'Hibachi Catering in Memphis, TN | Corporate Team Dinners & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Memphis, TN for corporate events, estate dinners, and graduation parties. Certified teppanyaki team serving East Memphis, Midtown, and all of Shelby County. From $60/adult.',
  },
  'germantown': {
    title: 'Private Hibachi Chef in Germantown, TN | Estate Dinners & Graduation Parties | Hibachi Connect',
    desc:  'Book a private hibachi chef in Germantown, TN for estate dinners, graduation parties, and corporate events. Certified teppanyaki chef serving Germantown and East Shelby County. From $60/adult.',
  },
  'collierville': {
    title: 'Hibachi at Home in Collierville, TN | Graduation Parties & Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Collierville, TN for graduation parties, birthday celebrations, and backyard events. Certified teppanyaki chef with full setup and cleanup in Shelby County. From $60/adult.',
  },
  'chattanooga': {
    title: 'Hibachi Catering in Chattanooga, TN | Corporate Events & Estate Dinners | Hibachi Connect',
    desc:  'Book a private hibachi chef in Chattanooga, TN for corporate team dinners, estate events, and graduation parties. Certified teppanyaki team serving Lookout Mountain, Signal Mountain, and Hamilton County. From $60/adult.',
  },
}

// ── Closing variants (TN generic 297–302) ─────────────────────────────────────
export const TN_CLOSING_VARIANTS = [
  // 297 — Nashville Core generic
  {
    headline: (city) => `Your ${city} Nashville Dinner Starts Here`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins including filet mignon and lobster tail. Full setup and zero cleanup. Starting at $60 per adult in ${city}, Tennessee.`,
    urgency:  `Nashville and Middle Tennessee summer dates book 4–6 weeks out. Reserve your evening now.`,
  },
  // 298 — Nashville South generic
  {
    headline: (city) => `${city}'s Best Graduation Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Williamson County graduation weekends (May–June) book 2–4 weeks ahead. Secure your date now.`,
  },
  // 299 — Nashville East/North generic
  {
    headline: (city) => `${city}'s Best Graduation Dinner — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chef for groups of 10–60+. All proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Middle Tennessee graduation and milestone events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 300 — Smoky Mountains generic
  {
    headline: (city) => `The ${city} Cabin Dinner Your Weekend Deserves`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} cabin or vacation rental. Full performance, complete cleanup. From $60/adult.`,
    urgency:  `Smoky Mountain peak-season dates fill 4–6 weeks ahead. Reserve your cabin dinner now.`,
  },
  // 301 — East Tennessee generic
  {
    headline: (city) => `Your ${city} Private Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your ${city} property. Premium proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `UT graduation (May) and fall football weekends fill fast. Reserve your East Tennessee date now.`,
  },
  // 302 — West/South TN generic
  {
    headline: (city) => `Book Your ${city} Private Hibachi Event`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} team dinner, graduation party, or estate celebration. Full setup and cleanup. From $60/adult.`,
    urgency:  'Memphis and Chattanooga events book 2–3 weeks out. Reserve your date now.',
  },
]

// ── City-specific closings (TN city-specific 303–307, Batch 1) ────────────────
export const TN_CITY_CLOSINGS = [
  // 303 — Nashville (profileIdx 0)
  {
    headline: () => `Nashville Vacation Rental Hibachi — Book Your Date`,
    sub:      () => `A certified mobile hibachi chef comes to your Nashville rental or estate — grill, ingredients, full show, complete cleanup. From $60/adult.`,
    urgency:  `Nashville summer and bachelorette weekends book 4–6 weeks out. Secure your date now.`,
  },
  // 304 — Brentwood (profileIdx 1)
  {
    headline: () => `Brentwood's Private Dining Standard — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Brentwood estate — Governors Club, Annandale, Taramore, or anywhere in Williamson County. Premium proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Brentwood estate events book 2–4 weeks ahead. Reserve your date now.`,
  },
  // 305 — Franklin (profileIdx 2)
  {
    headline: () => `Franklin Estate Hibachi — Reserve Your Chef`,
    sub:      () => `A certified private hibachi chef at your Franklin property — Westhaven, Cool Springs, Leiper's Fork, or anywhere in Williamson County. Hand-selected proteins, full show, complete cleanup. From $60/adult.`,
    urgency:  `Franklin graduation season and holiday entertaining fill early. Reserve your date well ahead.`,
  },
  // 306 — Nolensville (profileIdx 3)
  {
    headline: () => `Nolensville's Best Backyard Party — Book It`,
    sub:      () => `A certified teppanyaki chef at your Nolensville home. All proteins, full show, complete cleanup. From $60/adult.`,
    urgency:  `Nolensville graduation weekends (May–June) fill 2–3 weeks ahead. Secure your date now.`,
  },
  // 307 — Spring Hill (profileIdx 4)
  {
    headline: () => `Spring Hill Graduation Season — Don't Wait`,
    sub:      () => `A certified hibachi chef comes to your Spring Hill backyard. Full setup, all proteins, complete cleanup. From $60/adult.`,
    urgency:  `Spring Hill graduation weekends fill fast — book 3–4 weeks ahead for any May or June Saturday.`,
  },
  // ── Batch 2 (308–312) ──────────────────────────────────────────────────────────
  // 308 — Murfreesboro (profileIdx 5)
  {
    headline: () => `Murfreesboro's Best Graduation Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Murfreesboro home — all proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Murfreesboro graduation weekends (May–June) book 2–3 weeks ahead. Secure your date now.`,
  },
  // 309 — Hendersonville (profileIdx 6)
  {
    headline: () => `Hendersonville Hibachi — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Hendersonville property — lakefront or backyard, all proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Hendersonville graduation and Old Hickory Lake summer events book 2–3 weeks ahead. Reserve now.`,
  },
  // 310 — Mt. Juliet (profileIdx 7)
  {
    headline: () => `Mt. Juliet's Best Backyard Dinner — Book It`,
    sub:      () => `A certified hibachi chef at your Mt. Juliet home. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Mt. Juliet graduation weekends (May–June) fill 2–3 weeks ahead. Secure your date now.`,
  },
  // 311 — Cookeville (profileIdx 8)
  {
    headline: () => `Cookeville Graduation Season — Don't Wait`,
    sub:      () => `A certified hibachi chef comes to your Cookeville backyard — all proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Tennessee Tech graduation (May) weekends fill 2–3 weeks ahead — book early for Saturday events.`,
  },
  // 312 — Knoxville (profileIdx 9)
  {
    headline: () => `Your Knoxville Hibachi Event — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Knoxville property — Sequoyah Hills, West Knoxville, Turkey Creek, or anywhere in Knox County. Premium proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Knoxville UT graduation (May) and football-season Saturdays book 3–4 weeks ahead. Reserve now.`,
  },
  // ── Batch 3 (313–317) ──────────────────────────────────────────────────────────
  // 313 — Gatlinburg (profileIdx 10)
  {
    headline: () => `Gatlinburg Cabin Dinner — Book Before It's Gone`,
    sub:      () => `A certified mobile hibachi chef comes to your Gatlinburg cabin or vacation rental — fully self-contained, no hookups needed. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Gatlinburg peak dates (October, summer, bachelorette season) fill 4–6 weeks ahead. Reserve your cabin dinner now.`,
  },
  // 314 — Pigeon Forge (profileIdx 11)
  {
    headline: () => `Pigeon Forge Cabin Hibachi — Book Your Group Dinner`,
    sub:      () => `A certified mobile hibachi chef comes to your Pigeon Forge cabin or rental — no hookups required. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Pigeon Forge peak-season cabin dates book 4–6 weeks ahead. Reserve your group dinner now.`,
  },
  // 315 — Sevierville (profileIdx 12)
  {
    headline: () => `Your Sevierville Hibachi — Reserve Your Date`,
    sub:      () => `A certified hibachi chef at your Sevierville vacation rental or backyard. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Sevierville peak-season dates fill 3–4 weeks ahead. Reserve your Smoky Mountain dinner now.`,
  },
  // 316 — Farragut (profileIdx 13)
  {
    headline: () => `Farragut's Private Dining Standard — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Farragut estate — Turkey Creek, Choto Road, or anywhere in West Knoxville. Premium proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Farragut estate evenings book 2–4 weeks ahead. Reserve your date now.`,
  },
  // 317 — Maryville (profileIdx 14)
  {
    headline: () => `Maryville Backyard Hibachi — Book Your Date`,
    sub:      () => `A certified hibachi chef at your Maryville home. All proteins, full backyard performance, complete cleanup. From $60/adult.`,
    urgency:  `Maryville weekend evenings and Blount County graduation dates book 2–3 weeks ahead. Reserve now.`,
  },
  // ── Batch 4 (318–321) ──────────────────────────────────────────────────────────
  // 318 — Memphis (profileIdx 15)
  {
    headline: () => `Book Your Memphis Private Hibachi Event`,
    sub:      () => `A certified teppanyaki chef for your Memphis estate dinner, corporate event, or graduation party — East Memphis, Midtown, or anywhere in Shelby County. Premium proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Memphis corporate events and graduation parties book 2–3 weeks out. Reserve your date now.`,
  },
  // 319 — Germantown (profileIdx 16)
  {
    headline: () => `Germantown's Private Dining Standard — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Germantown estate — Forest Hill, Poplar Avenue corridor, or anywhere in East Shelby County. Premium proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Germantown estate evenings and graduation season (May–June) fill 2–4 weeks ahead. Reserve now.`,
  },
  // 320 — Collierville (profileIdx 17)
  {
    headline: () => `Collierville's Best Graduation Party — Book It`,
    sub:      () => `A certified hibachi chef at your Collierville backyard. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Collierville graduation weekends (May–June) book 2–3 weeks ahead. Secure your date now.`,
  },
  // 321 — Chattanooga (profileIdx 18)
  {
    headline: () => `Book Your Chattanooga Hibachi Event`,
    sub:      () => `A certified teppanyaki chef for your Chattanooga corporate dinner or estate celebration — Lookout Mountain, Signal Mountain, North Shore, or anywhere in Hamilton County. Premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Chattanooga corporate events and fall dates book 2–3 weeks out. Reserve your date now.`,
  },
]

// ── Intro variants (TN generic 297–302) ───────────────────────────────────────
export const TN_INTRO_VARIANTS = [
  // 297 — Nashville Core generic
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Nashville Vacation Rental & Estate Experience`,
    opening:  (city) => `Nashville is the bachelorette capital of America, and ${city} is where the best group dinners happen — not at a restaurant with a ninety-minute wait, but at the vacation rental where the chef arrives, performs for two hours on the deck, and leaves the property spotless. Private hibachi in ${city} brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live-fire performance that becomes the anchor of the trip rather than the obstacle between the group and the rest of the evening.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and premium upgrades, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your group. For gatherings over 25, we deploy dual chef stations. Full cleanup when dinner is done.`,
    closing:  (city) => `${city} events book 4–6 weeks ahead during Nashville summer and bachelorette season. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 298 — Nashville South generic
  {
    headline: (city) => `Hibachi at Home in ${city}: The Williamson County Graduation & Backyard Dinner`,
    opening:  (city) => `Williamson County has one of the most accomplished residential communities in Tennessee — the families who moved here from Brentwood and Franklin as those communities built out, the young professional households who chose ${city} for its schools and backyard space, and the graduation culture that grows every spring as the community expands. Private hibachi at home in ${city} brings a certified teppanyaki chef to your backyard with the full setup and a live-fire cooking performance that turns any Williamson County gathering into the dinner your guests are still referencing the following week.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city) => `${city} graduation weekends (May–June) and weekend events book 2–3 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 299 — Nashville East/North generic
  {
    headline: (city) => `Hibachi at Home in ${city}: Middle Tennessee's Graduation & Milestone Dinner`,
    opening:  (city) => `Middle Tennessee has built one of the most diverse and growing residential communities in the state — the MTSU families who mark graduation as the most important celebration of the academic chapter, the Old Hickory Lake and Percy Priest Lake households who mark their milestones with the outdoor water-adjacent gatherings that define Middle Tennessee summer, and the new-neighborhood communities throughout Rutherford, Sumner, and Wilson County whose graduation seasons grow each year. Private hibachi at home in ${city} brings a certified teppanyaki chef to your backyard or waterfront property with the full setup and a live-fire cooking performance that turns any Middle Tennessee gathering into the evening your guests plan around.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Middle Tennessee graduation events over 25 guests, we bring two chef stations running simultaneously. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  (city) => `${city} graduation weekends (May–June) book 2–3 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 300 — Smoky Mountains generic
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Smoky Mountain Cabin Dinner Experience`,
    opening:  (city) => `The Smoky Mountains have become one of the top destination travel markets in the United States — and ${city} is at the center of it. The bachelorette cabin weekends in Chalet Village and the Wears Valley chalets. The Pigeon Forge family reunion that rented the whole lodge. The birthday trip group at the Arts & Crafts Community rental that wants the Saturday dinner to be the thing that anchors the weekend rather than just the thing that precedes it. Mobile hibachi in ${city} brings a certified teppanyaki chef to your cabin deck or outdoor space with the full setup — fully self-contained propane grill, all proteins, all ingredients — and a live-fire performance with the Great Smoky Mountains as the backdrop.`,
    middle:   (city) => `Your chef arrives with everything: self-contained propane grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. No hookups required at your cabin. Setup takes 20 minutes on your deck or outdoor space. The performance runs 90–120 minutes from first flame to final plate. For cabin groups over 25, we bring dual chef stations. Complete cleanup when dinner is done — your rental is immaculate.`,
    closing:  (city) => `${city} peak-season dates (October, July, Spring Break) fill 4–6 weeks ahead. Travel fees may apply for elevated or remote cabin locations — always disclosed upfront. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 301 — East Tennessee generic
  {
    headline: (city) => `Hibachi at Home in ${city}: East Tennessee's Private Chef Experience`,
    opening:  (city) => `East Tennessee has some of the most loyal and community-oriented residential culture in the state — the Vol families who built their lives in Knoxville and the surrounding communities, the Sequoyah Hills and Farragut estates where the professional and executive community that has chosen East Tennessee marks its milestone occasions with the full quality those events deserve, and the Maryville and Alcoa families whose graduation seasons are exactly the kind of backyard gathering that private hibachi was built to serve. Hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live-fire performance calibrated for the East Tennessee host and their guests.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, all fresh proteins including premium filet mignon and lobster tail upgrades, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For East Tennessee events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city) => `${city} UT graduation (May) and football-season weekends book 3–4 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 302 — West/South TN generic
  {
    headline: (city) => `Private Hibachi in ${city}: Tennessee's Corporate & Milestone Dining Standard`,
    opening:  (city) => `${city} is one of Tennessee's major cities, and the event culture here reflects it — the corporate team dinners that the Memphis and Chattanooga professional communities have made private hibachi their preferred format for, the Germantown and Collierville graduation parties that routinely host 40 to 60 guests in a single backyard, and the estate dinner occasions at the East Memphis and Lookout Mountain properties where the host expects a standard that a restaurant cannot match. Private hibachi in ${city} brings a certified teppanyaki chef to your property with the full setup, premium protein options, and a live-fire performance built for the Tennessee city that takes its entertaining seriously.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For ${city} corporate and graduation events over 25 guests, we bring two chef stations running simultaneously. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  (city) => `${city} corporate events and graduation parties book 2–3 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── City-specific intros (TN city-specific 303–307, Batch 1) ──────────────────
export const TN_CITY_INTROS = [
  // 303 — Nashville (profileIdx 0)
  {
    headline: () => `Mobile Hibachi in Nashville`,
    opening:  () =>
      `Nashville is the bachelorette capital of America. The vacation rental on The Gulch that sixteen people booked six months ago. The East Nashville Airbnb for a corporate retreat. The Music Row rental house for a birthday weekend that somebody organized the whole trip around. Private hibachi in Nashville brings a certified teppanyaki chef to your vacation rental, estate, or outdoor venue with everything included — the grill, the proteins, the performance, and complete cleanup. The format that makes the dinner the anchor of the trip instead of the obstacle between the group and the rest of the evening.`,
    middle:   () =>
      `Your chef arrives fully equipped with teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. For Nashville gatherings over 25, we deploy dual chef stations. Full cleanup when dinner is done. Your Nashville rental is spotless.`,
    closing:  () =>
      `Nashville summer and bachelorette weekend dates book 4–6 weeks ahead. Serving Nashville proper — The Gulch, East Nashville, 12 South, Belle Meade, Germantown, Music Row, and all Nashville vacation rental properties. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 304 — Brentwood (profileIdx 1)
  {
    headline: () => `Private Hibachi Chef in Brentwood`,
    opening:  () =>
      `Brentwood doesn't need an introduction. The consistently top-ranked community in Tennessee for household income and quality of life, home to the executives of HCA Healthcare, Tractor Supply, and the broader Franklin Road and Maryland Farms corporate corridor — and to the private dinner parties, anniversary occasions, and milestone celebrations that require a standard the local restaurant circuit simply cannot meet. A certified private hibachi chef at your Brentwood estate or backyard brings the full teppanyaki performance directly to your property. The format this address was built for.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, wagyu, and Chilean sea bass available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate patio, deck, or lawn. The performance runs 90–120 minutes from first flame to final plate. Every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Brentwood property is spotless when the chef leaves.`,
    closing:  () =>
      `Brentwood evenings book 2–4 weeks ahead. Governors Club, Annandale, Taramore, and all of the Brentwood estate corridors are within our standard service radius. Serving Brentwood and all of Williamson County. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 305 — Franklin (profileIdx 2)
  {
    headline: () => `Private Hibachi Chef in Franklin`,
    opening:  () =>
      `Franklin is where Music Row comes home. The country music executives who built careers in Nashville, the healthcare and legal leadership who chose Williamson County for its school systems and quiet space, the families in Westhaven who planned the dinner six weeks out because the occasion deserved it — private hibachi at your Franklin property brings a certified teppanyaki chef to your estate, patio, or outdoor space with the full setup, hand-selected proteins, and a live-fire performance that earns its place at a Franklin dinner table. No downtown reservation. The chef comes to you.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including premium filet mignon, lobster tail, and Chilean sea bass, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Leiper's Fork properties, Cool Springs executive communities, and historic Franklin neighborhoods are all within our standard service radius. Full cleanup when dinner is done.`,
    closing:  () =>
      `Franklin private events book 2–4 weeks ahead. Graduation season (May–June) and holiday entertaining (November–December) fill fastest. Serving Franklin and all of Williamson County — Brentwood, Nolensville, Spring Hill, and surrounding communities. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 306 — Nolensville (profileIdx 3)
  {
    headline: () => `Hibachi at Home in Nolensville`,
    opening:  () =>
      `Nolensville has built one of the most aspirational residential communities in Middle Tennessee in under a decade. The families who moved here from Brentwood and Franklin as those communities built out, the young professional families who chose Nolensville for its schools and outdoor space, and the graduation parties happening every May in the new neighborhoods along Nolensville Road — hibachi at home in Nolensville brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that upgrades any gathering into the event the neighborhood hears about for weeks.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Nolensville parties over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Nolensville weekend evenings book 2–3 weeks ahead. Graduation season (May–June) fills fastest — book 3–4 weeks out for Saturday events. Serving Nolensville and all of southern Williamson County — Franklin, Brentwood, Spring Hill, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 307 — Spring Hill (profileIdx 4)
  {
    headline: () => `Hibachi at Home in Spring Hill`,
    opening:  () =>
      `Spring Hill has been growing faster than almost any city in Tennessee for twenty years — new neighborhoods, new schools, and a graduation season that grows every spring as the community expands. The families who put roots down here along Port Royal Road and Saturn Parkway bring the same gathering culture that built the neighborhood: everyone in the backyard, everyone at the same table, the kind of evening you plan weeks ahead because it's worth the preparation. Hibachi at home in Spring Hill brings a certified teppanyaki chef to your property with the full setup and a live-fire performance built for exactly the Spring Hill party size.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Spring Hill events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your Spring Hill backyard is exactly as we found it.`,
    closing:  () =>
      `Spring Hill weekend evenings book 2–3 weeks ahead. Graduation season (May–June) is our busiest Williamson County window — book 3–4 weeks out for Saturday events. Serving Spring Hill and surrounding Middle Tennessee communities — Franklin, Nolensville, Brentwood, Murfreesboro, and beyond. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // ── Batch 2 (308–312) ──────────────────────────────────────────────────────────
  // 308 — Murfreesboro (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Murfreesboro`,
    opening:  () =>
      `Murfreesboro is Tennessee's fastest-growing city, and the numbers bear it out — more than 160,000 residents, the MTSU campus that brings in tens of thousands of students and the graduation celebrations that follow, and the suburban family communities spreading out across Rutherford County in every direction. Private hibachi at home in Murfreesboro brings a certified teppanyaki chef to your backyard or property with the full setup, fresh proteins, and a live-fire performance that has made the format the go-to choice for the MTSU graduation party that wants to do more than the restaurant route.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Murfreesboro graduation events over 25 guests, we bring two chef stations running simultaneously. Full cleanup when dinner is done.`,
    closing:  () =>
      `Murfreesboro graduation weekends (May–June) book 2–3 weeks ahead. Serving Murfreesboro and surrounding Rutherford County — La Vergne, Smyrna, Christiana, and all communities along the Medical Center Parkway corridor. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 309 — Hendersonville (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Hendersonville`,
    opening:  () =>
      `Hendersonville sits along Old Hickory Lake and has been one of the most consistently desirable suburban communities in the greater Nashville area for decades. The waterfront properties along Drake's Creek and Indian Lake Peninsula where summer gatherings are anchored by the outdoor space and the water. The families who chose Sumner County for its schools and lake access. The graduation parties that mark May and June along the same lakefront neighborhoods where the community built itself. Private hibachi at home in Hendersonville brings a certified teppanyaki chef to your property — lakefront, backyard, or anywhere in Sumner County — with the full setup and a live-fire performance that becomes the anchor of your gathering.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Hendersonville gatherings over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Hendersonville weekend events book 2–3 weeks ahead. Old Hickory Lake waterfront properties and all Sumner County locations are within our standard service radius. Serving Hendersonville and surrounding communities — Gallatin, White House, Goodlettsville, and beyond. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 310 — Mt. Juliet (profileIdx 7)
  {
    headline: () => `Hibachi at Home in Mt. Juliet`,
    opening:  () =>
      `Mt. Juliet has grown faster than almost any community in Wilson County over the past two decades — the Providence Marketplace corridor that transformed the city's commercial identity, the new residential communities that draw Nashville families who want the space and school access that the city proper no longer offers, and a graduation culture that grows every spring as those communities build out. Hibachi at home in Mt. Juliet brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live-fire performance built for exactly the Mt. Juliet gathering size.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Mt. Juliet graduation and milestone parties over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Mt. Juliet weekend events book 2–3 weeks ahead. Graduation season (May–June) fills fastest — plan 3 weeks out for Saturday dates. Serving Mt. Juliet and all of Wilson County — Lebanon, Watertown, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 311 — Cookeville (profileIdx 8)
  {
    headline: () => `Hibachi at Home in Cookeville`,
    opening:  () =>
      `Cookeville is the hub of the Upper Cumberland — a university city whose Tennessee Tech campus brings in nearly 10,000 students and the graduation celebrations that anchor the local calendar each May, surrounded by one of the most scenic stretches of Middle Tennessee landscape, from the Caney Fork River gorge to Burgess Falls State Natural Area. Private hibachi at home in Cookeville brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live-fire performance that turns any Tennessee Tech graduation party or Cookeville backyard event into the dinner the whole group talks about.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For Cookeville graduation events over 25 guests, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Cookeville weekends around Tennessee Tech graduation (May) book 2–3 weeks ahead. Serving Cookeville and the Upper Cumberland — Sparta, Crossville, Livingston, and surrounding Putnam County communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 312 — Knoxville (profileIdx 9)
  {
    headline: () => `Hibachi Catering in Knoxville`,
    opening:  () =>
      `Knoxville is East Tennessee's largest city and the home of the University of Tennessee flagship — and the private event culture that has grown around it reflects both the Vol identity and the executive and professional community that UT's medical, law, and engineering programs have built here over generations. The Turkey Creek households who want the estate dinner to match the address. The Sequoyah Hills families who have been entertaining for decades and know what quality looks like. The UT graduation party with 50 people attending that needs a format that can scale. Private hibachi catering in Knoxville brings a certified teppanyaki team to your property — West Knoxville, Sequoyah Hills, North Shore, or anywhere in Knox County — with the full setup, premium protein packages, and a live-fire performance built for the Knoxville host.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins including premium filet mignon, lobster tail, and Chilean sea bass, fried rice, vegetables, house-made sauces, plates, and chopsticks. For UT graduation and corporate events over 25 guests, we bring dual chef stations. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Knoxville UT graduation (May) and football-season weekends (September–November) book 3–4 weeks ahead. Serving Knoxville proper — Sequoyah Hills, West Knoxville, Turkey Creek, North Shore, Farragut, and surrounding Knox County communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // ── Batch 3 (313–317) ──────────────────────────────────────────────────────────
  // 313 — Gatlinburg (profileIdx 10)
  {
    headline: () => `Mobile Hibachi in Gatlinburg`,
    opening:  () =>
      `Gatlinburg is the bachelorette capital of America. The Chalet Village cabin that twelve people booked for the bachelorette weekend. The Ski Mountain rental where the group wanted Saturday dinner to be the event of the trip rather than just the meal before the bars. The SkyLift Park area property where the reunion group decided the weekend needed a real chef. Mobile hibachi in Gatlinburg brings a certified teppanyaki chef directly to your cabin deck or outdoor space with a fully self-contained setup — no hookups needed, no venue coordination required. The chef arrives, performs, and leaves your Gatlinburg rental spotless.`,
    middle:   () =>
      `Your chef travels to your Gatlinburg cabin with everything: self-contained propane grill, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your group. For cabin groups over 25, we bring dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Gatlinburg peak-season dates (October, July, Spring Break, bachelorette season year-round) book 4–6 weeks ahead. Travel fees may apply for elevated or remote cabin locations — always disclosed upfront. Serving Gatlinburg and the Smoky Mountain corridor — Pigeon Forge, Sevierville, Chalet Village, and surrounding cabin communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 314 — Pigeon Forge (profileIdx 11)
  {
    headline: () => `Mobile Hibachi in Pigeon Forge`,
    opening:  () =>
      `Pigeon Forge is one of the most visited destination cities in the Southeast — Dollywood, The Island, the LeConte Center convention space, and the cabin corridor that runs along Wears Valley Road where family reunions, church group retreats, and corporate trip cabins rent out for days at a time. The format that makes the most sense for any Pigeon Forge cabin group is simple: you don't want to move 30 people to a restaurant in the Sevierville traffic. You want the chef to come to you. Mobile hibachi in Pigeon Forge brings a certified teppanyaki chef to your cabin deck or outdoor space with everything included — the grill, the proteins, the show, the cleanup.`,
    middle:   () =>
      `Your chef travels to your Pigeon Forge cabin with everything: self-contained propane grill, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. No hookups required. Setup takes 20 minutes on your deck. The performance runs 90–120 minutes from first flame to final plate. For large cabin groups over 25, we bring dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Pigeon Forge peak-season dates (summer, fall color season, spring break) book 4–6 weeks ahead. Travel fees may apply for elevated or remote cabin locations — always disclosed upfront. Serving Pigeon Forge and the Smoky Mountain corridor — Gatlinburg, Sevierville, Wears Valley, and surrounding vacation rental communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 315 — Sevierville (profileIdx 12)
  {
    headline: () => `Hibachi at Home in Sevierville`,
    opening:  () =>
      `Sevierville is the gateway to the Smokies — and unlike Gatlinburg and Pigeon Forge, it has a genuine residential community built around the tourism corridor: the families along Boyds Creek and Kodak who have lived here for generations, the newer residential developments that have emerged as Sevier County has grown, and the vacation rental properties closer to town that sit outside the heaviest cabin traffic but still offer the Smoky Mountain backdrop. Hibachi at home in Sevierville brings a certified teppanyaki chef to your property — vacation rental, private backyard, or anywhere in Sevier County — with the full setup, hand-selected proteins, and a live-fire performance that becomes the highlight of your Smoky Mountain stay.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, deck, or outdoor space. The performance runs 90–120 minutes from first flame to final plate. For Sevierville events over 25 guests, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Sevierville events book 3–4 weeks ahead during peak Smoky Mountain season. Serving Sevierville and all of Sevier County — Gatlinburg, Pigeon Forge, Kodak, Boyds Creek, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 316 — Farragut (profileIdx 13)
  {
    headline: () => `Private Hibachi Chef in Farragut`,
    opening:  () =>
      `Farragut is Knoxville's premier address — consistently ranked at the top of Tennessee's most livable community rankings, home to the Turkey Creek corridor's executive and medical professional community, the Fox Den and Choto Road estate properties where the standard of entertaining reflects the neighborhood's status, and the graduation parties and anniversary dinners that the Farragut household plans with the same care they bring to everything else in their lives. A certified private hibachi chef at your Farragut property brings the full teppanyaki experience — live-fire cooking, premium proteins, professional performance — directly to your estate or backyard without the reservation or the restaurant format that cannot serve a private party of 30 the way a dedicated chef at your home can.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including premium filet mignon, lobster tail, wagyu, and Chilean sea bass, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate patio or lawn. The performance runs 90–120 minutes from first flame to final plate. Every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Farragut property is spotless when the chef leaves.`,
    closing:  () =>
      `Farragut evenings book 2–4 weeks ahead. Serving Farragut and all of West Knoxville — Turkey Creek, Choto Road, Fox Den, and surrounding Knox County communities. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 317 — Maryville (profileIdx 14)
  {
    headline: () => `Backyard Hibachi in Maryville`,
    opening:  () =>
      `Maryville sits at the foothills of the Great Smoky Mountains and has built one of the most genuine and rooted community identities in East Tennessee. Maryville College in the center of town, the Alcoa-Blount County industrial and manufacturing community that has supported families here for generations, and the newer residential growth that has brought professional families from Knoxville who want the Blount County school access and the mountain backdrop without the city pace. Backyard hibachi in Maryville brings a certified teppanyaki chef to your home with the full setup and a live-fire performance that turns any Maryville backyard gathering — graduation party, milestone birthday, family reunion — into the dinner nobody forgets.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Maryville events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Maryville weekend events book 2–3 weeks ahead. Serving Maryville and all of Blount County — Alcoa, Friendsville, Louisville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // ── Batch 4 (318–321) ──────────────────────────────────────────────────────────
  // 318 — Memphis (profileIdx 15)
  {
    headline: () => `Hibachi Catering in Memphis`,
    opening:  () =>
      `Memphis is Tennessee's second-largest city and one of the South's major corporate centers — home to FedEx, AutoZone, International Paper, and a broad professional and executive community that has built its entertaining culture in East Memphis, the Chickasaw Gardens estates, and the Central Gardens corridor where the city's private event standard is set. The corporate team dinner that the regional office plans once a year and needs to be memorable. The Germantown or Collierville graduation party that started in Memphis proper and scaled to 60 guests. The East Memphis estate dinner that required a chef rather than a restaurant. Hibachi catering in Memphis brings a certified teppanyaki team to your property with the full setup, premium protein packages, and a live-fire performance built for the Memphis host who expects the standard their address commands.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins including premium filet mignon, lobster tail, and Chilean sea bass, fried rice, vegetables, house-made sauces, plates, and chopsticks. For large Memphis corporate and graduation events over 25 guests, we bring dual chef stations running simultaneously. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Memphis corporate events and estate dinners book 2–3 weeks ahead. Serving Memphis proper — East Memphis, Midtown, Chickasaw Gardens, Central Gardens — and all of Shelby County including Germantown, Collierville, Bartlett, and Cordova. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 319 — Germantown (profileIdx 16)
  {
    headline: () => `Private Hibachi Chef in Germantown`,
    opening:  () =>
      `Germantown is Tennessee's premier suburban address — consistently ranked at the top of the state for household income and quality of life, home to the executives of FedEx and the Memphis corporate corridor, and to the estate communities along Forest Hill Road and Poplar Avenue where the standard of private entertaining reflects the neighborhood's status. The Germantown graduation party where 50 guests are invited to the backyard. The anniversary dinner that deserves more than the Poplar Avenue restaurant circuit. The corporate dinner at the Forest Hill estate where the host expects exactly right. A certified private hibachi chef at your Germantown property brings the full teppanyaki experience directly to your estate with the premium proteins, live performance, and complete cleanup that this address deserves.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — premium filet mignon, lobster tail, wagyu, and Chilean sea bass available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate patio, deck, or lawn. The performance runs 90–120 minutes from first flame to final plate. Every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Germantown property is spotless when the chef leaves.`,
    closing:  () =>
      `Germantown estate evenings book 2–4 weeks ahead. Graduation season (May–June) fills fastest — plan early for Saturday events. Serving Germantown and all of East Shelby County — Collierville, Cordova, Bartlett, and surrounding communities. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 320 — Collierville (profileIdx 17)
  {
    headline: () => `Hibachi at Home in Collierville`,
    opening:  () =>
      `Collierville has built one of the most desirable community identities in all of Shelby County — anchored by its historic downtown square, a school system that draws families from Memphis proper, and the residential growth that has made it one of Tennessee's fastest-growing suburban communities over the past decade. The graduation parties that fill the backyard every May. The milestone birthday that the family has been planning since February. The anniversary dinner where 40 guests are invited to the property and the host wants something more than catering boxes and a rented venue. Hibachi at home in Collierville brings a certified teppanyaki chef to your backyard or outdoor space with the full setup, fresh proteins, and a live-fire performance that turns any Collierville gathering into the dinner the neighborhood talks about.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Collierville graduation and milestone events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Collierville graduation season (May–June) and weekend events book 2–3 weeks ahead. Serving Collierville and all of eastern Shelby County — Germantown, Cordova, Bartlett, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 321 — Chattanooga (profileIdx 18)
  {
    headline: () => `Hibachi Catering in Chattanooga`,
    opening:  () =>
      `Chattanooga is one of Tennessee's most transformed cities — the revitalized riverfront and Tennessee Aquarium corridor, the tech and creative economy that has made it one of the Southeast's most discussed urban success stories, and the Lookout Mountain and Signal Mountain residential communities where the city's professional and executive class have built estates with the Tennessee River Valley as the backdrop. The VW Chattanooga corporate group that hosts a team dinner twice a year. The Lookout Mountain estate where the anniversary dinner is happening and the host expects a standard the local restaurant cannot match. Hibachi catering in Chattanooga brings a certified teppanyaki team to your property — North Shore, Signal Mountain, Lookout Mountain, or anywhere in Hamilton County — with the full setup, premium proteins, and a live-fire performance built for the Chattanooga host.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins including premium filet mignon, lobster tail, and Chilean sea bass, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Chattanooga corporate and estate events over 25 guests, we bring dual chef stations. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Chattanooga corporate events and estate dinners book 2–3 weeks ahead. Serving Chattanooga and all of Hamilton County — Lookout Mountain, Signal Mountain, Hixson, East Brainerd, East Ridge, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
]

// ── Display name overrides ─────────────────────────────────────────────────────
const TN_CITY_DISPLAY_NAMES = {
  'spring-hill': 'Spring Hill',
  'mt-juliet':   'Mt. Juliet',
}

// ── Main city data function ────────────────────────────────────────────────────
export function getTennesseeCityData(citySlug, cityName) {
  const major       = TN_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getTNVariantIndex(citySlug)
  const theme       = TN_IMAGE_THEMES[v]
  const displayName = TN_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Tennessee',
    stateAbbr:    'TN',
    stateSlug:    'tennessee',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: TN_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: TN_NEARBY_MAJOR[v],
    localHighlights:   TN_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: TN_OCCASIONS[v],
    faqSet:            TN_FAQ_SETS[v](displayName),
    testimonials:      TN_TESTIMONIALS[v],
    // INTRO_VARIANTS: 297–302 = TN generic, 303–321 = TN city-specific
    uniqueIntroVariant:  (major?.profileIdx != null) ? 303 + major.profileIdx : 297 + v,
    uniqueWhyUsVariant:  v % 5,
    // CLOSING_VARIANTS: 297–302 = TN generic, 303–321 = TN city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 303 + major.profileIdx : 297 + v,
    // H1 prefix for CityHero
    heroH1Prefix: major?.profileIdx != null
      ? TN_PROFILE_H1_PREFIXES[major.profileIdx]
      : TN_THEME_H1_PREFIXES[v],
    // Custom meta overrides
    ...(TN_CUSTOM_META[citySlug]
      ? { metaTitle: TN_CUSTOM_META[citySlug].title, metaDescription: TN_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ────────────────────────────────────────────────────
export function getTnHowItWorks(citySlug) {
  const major = TN_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getTNVariantIndex(citySlug)
  return TN_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ─────────────────────────────────────────────────
export function getTnSectionVariant(citySlug) {
  const major = TN_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getTNVariantIndex(citySlug)
  return TN_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ──────────────────────────────────────────
export function getTnCityImage(citySlug) {
  return TN_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ──────────────────────────────────────────────────
export function getTnSupportImages(citySlug) {
  if (TN_SUPPORT_IMAGES[citySlug]) return TN_SUPPORT_IMAGES[citySlug]
  const major = TN_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getTNVariantIndex(citySlug)
  return TN_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ──────────────────────────────────────────────────────
export function getTnBlogPosts(variant, count) {
  return TN_BLOG_POSTS[variant % TN_BLOG_POSTS.length].slice(0, count)
}
