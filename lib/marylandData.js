// =============================================================================
// lib/marylandData.js — Maryland Expansion (Batch 1)
// 5 cities · 6 geographic themes
// Theme 0: DC Corridor Luxury (Bethesda, Potomac, Chevy Chase)
// Theme 1: Montgomery County Diverse & Tech (Rockville, Gaithersburg, Germantown)
// Theme 2: Howard County & Inner Suburbs (Columbia, Ellicott City, Owings Mills)
// Theme 3: Baltimore Metro (Baltimore, Towson, Severna Park)
// Theme 4: Capital & Southern Maryland (Annapolis, Bowie, Frederick, Waldorf)
// Theme 5: Chesapeake Bay & Eastern Shore (Ocean City, St. Michaels)
//
// INTRO_VARIANTS indices:  273–278 MD generic · 279–296 MD city-specific
// CLOSING_VARIANTS indices: 273–278 MD generic · 279–296 MD city-specific
// Batch 1: city-specific 279–283 (Bethesda, Potomac, Chevy Chase, Rockville, Gaithersburg)
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getMDVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const MD_HERO_SUBTITLES = [
  (city) => `Estate Entertaining · Government Executive Events · Private Diplomatic Dining · Serving ${city} & Washington DC Metro`,
  (city) => `Graduation Parties · Diverse Community Celebrations · Backyard Dining · Serving ${city} & Montgomery County`,
  (city) => `Graduation Parties · Milestone Celebrations · Backyard Entertaining · Serving ${city} & Howard County`,
  (city) => `Corporate Team Dinners · University Graduation Events · Private Dining · Serving ${city} & Baltimore Metro`,
  (city) => `Naval Academy Events · Waterfront Entertaining · Private Dining · Serving ${city} & Chesapeake Bay Communities`,
  (city) => `Beach House Events · Vacation Rental Dinners · Chesapeake Bay Entertaining · Serving ${city} & Eastern Shore`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const MD_LOCAL_HIGHLIGHTS = [
  // Theme 0 — DC Corridor Luxury
  (city) => [
    `Ultra-premium estate entertaining for ${city}'s government officials, lobbyists, and diplomatic community`,
    'Filet mignon, lobster tail, wagyu, and premium protein upgrades — the standard for DC corridor luxury events',
    `${city} estate properties and brick colonial terraces ideal for private teppanyaki dining`,
    `DC corridor estate events book 3–4 weeks ahead — spring and summer fill fastest`,
    `Full setup and cleanup at your ${city} estate or private property — complete discretion from arrival to departure`,
    'Certified teppanyaki chef performing exclusively for your guest list — no public audience, no restaurant logistics',
  ],
  // Theme 1 — Montgomery County Diverse & Tech
  (city) => [
    `Graduation parties and milestone celebrations for ${city}'s South Asian, East Asian, and diverse community`,
    'Montgomery County Public Schools produce some of the top graduating classes in America — the MCPS graduation market is exceptional',
    `${city} and the surrounding I-270 tech corridor all served within standard radius`,
    `MCPS graduation season (May–June) and spring events in ${city} book 3–4 weeks ahead`,
    'Dual-station capacity for large gatherings of 25–80 guests — standard for Montgomery County graduation parties',
    'Full setup and cleanup — you provide the backyard, we handle everything else',
  ],
  // Theme 2 — Howard County & Inner Suburbs
  (city) => [
    `Milestone celebrations for ${city}'s diverse, high-income community — Howard County has the highest median household income in the United States`,
    'South Asian, East Asian, and diverse families throughout Howard County celebrate milestones with genuine intention',
    `${city} and surrounding Howard County communities all served within standard radius`,
    `Graduation season (May–June) and spring events in ${city} book 2–3 weeks ahead`,
    'Dual-station capacity for large milestone gatherings — the standard for Howard County graduation and community events',
    'Full setup and cleanup at your ${city} home or outdoor space — you provide the setting, we handle everything else',
  ],
  // Theme 3 — Baltimore Metro
  (city) => [
    `Corporate team dinners, client events, and private gatherings throughout ${city} and the Baltimore Metro`,
    'Johns Hopkins, UMMC, and the Baltimore financial and legal corridor are among our most common corporate event markets',
    `${city} and the greater Baltimore area all served within standard radius`,
    `Graduation events and summer weekends in ${city} book 2–3 weeks ahead`,
    'Full setup and cleanup at your venue — indoor-adjacent outdoor space, corporate terrace, or residential backyard',
    'Premium proteins, full live teppanyaki performance, and dual-station capacity for 25–60+ guests',
  ],
  // Theme 4 — Capital & Southern Maryland
  (city) => [
    `Waterfront estate entertaining, Naval Academy events, and milestone celebrations throughout ${city} and the Chesapeake Bay community`,
    'Annapolis waterfront properties, Severn River estates, and Chesapeake Bay dock-side decks are our most requested Maryland settings',
    `${city} and surrounding Anne Arundel and Prince George's County communities all served within standard radius`,
    `Naval Academy graduation weekend (May) and summer waterfront events book 3–4 weeks ahead`,
    'Full setup and cleanup at your waterfront property — your deck or dock-side outdoor space is the ideal setting',
    'Premium proteins available — lobster tail and filet mignon are popular for Chesapeake Bay waterfront events',
  ],
  // Theme 5 — Chesapeake Bay & Eastern Shore
  (city) => [
    `Beach house, vacation rental, and Chesapeake Bay waterfront hibachi events throughout ${city} and the Eastern Shore`,
    'Bachelorette weekends, family reunions, and summer vacation rental group dinners are our biggest Eastern Shore bookings',
    `Ocean City, St. Michaels, Kent Island — the full Chesapeake and Eastern Shore vacation corridor served`,
    `Eastern Shore summer events book 3–4 weeks ahead — secure yours early`,
    `Full setup and cleanup at your ${city} beach house, vacation rental, or waterfront deck`,
    'Private chef comes to your vacation rental — no restaurant logistics, no driving, just the dinner at your property',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const MD_OCCASIONS = [
  // Theme 0 — DC Corridor Luxury
  ['Estate Dinner Parties', 'Government Executive Events', 'Diplomatic Entertaining', 'Corporate Client Dinners', 'Anniversary Celebrations', 'Milestone Birthday Dinners', 'Embassy Staff Gatherings', 'Holiday Executive Dinners', 'Retirement Celebrations', 'Wedding Party Dinners'],
  // Theme 1 — Montgomery County Diverse & Tech
  ['Graduation Parties', 'Diwali Dinners', 'Eid Celebrations', 'Engagement Parties', 'Birthday Parties', 'Family Reunions', 'Anniversary Dinners', 'Community Gatherings', 'Corporate Team Dinners', 'Cultural Milestone Events'],
  // Theme 2 — Howard County & Inner Suburbs
  ['Graduation Parties', 'Birthday Milestones', 'Family Reunions', 'Anniversary Dinners', 'Community Celebrations', 'Bachelorette Weekends', 'Corporate Events', 'Holiday Dinners', 'Engagement Parties', 'Neighborhood Gatherings'],
  // Theme 3 — Baltimore Metro
  ['Corporate Team Dinners', 'Client Appreciation Events', 'Graduation Parties', 'Birthday Parties', 'Bachelorette Weekends', 'Anniversary Dinners', 'Holiday Gatherings', 'Engagement Parties', 'Retirement Parties', 'Family Reunions'],
  // Theme 4 — Capital & Southern Maryland
  ['Naval Academy Graduation Dinners', 'Waterfront Estate Events', 'Military Homecoming Celebrations', 'Chesapeake Bay Deck Dinners', 'Anniversary Getaways', 'Birthday Milestones', 'Engagement Parties', 'Wedding Rehearsal Dinners', 'Family Reunions', 'Corporate Retreat Dinners'],
  // Theme 5 — Chesapeake Bay & Eastern Shore
  ['Bachelorette Weekends', 'Vacation Rental Group Dinners', 'Family Reunion Beach House Events', 'Anniversary Getaways', 'Birthday Celebrations', 'Summer Group Events', 'Engagement Parties', 'Wedding Party Dinners', 'Summer Birthday Milestones', 'Chesapeake Waterfront Gatherings'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const MD_FAQ_SETS = [
  // Theme 0 — DC Corridor Luxury
  (city) => [
    {
      q: `Can you set up hibachi at a Bethesda, Potomac, or ${city} estate property?`,
      a: `Absolutely — Bethesda, Potomac, and Chevy Chase estate properties are among our most requested Maryland setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most ${city} properties have ideal estate terraces, rear patios, or property grounds that work perfectly. Premium protein upgrades including filet mignon, lobster tail, and wagyu are standard for any ${city} estate event.`,
    },
    {
      q: `Do you serve government officials, lobbyists, and corporate professionals in ${city}?`,
      a: `Yes — government executive entertaining, diplomatic staff events, corporate client dinners, and high-discretion estate events are among our most common DC corridor bookings. We maintain full professionalism from arrival through complete cleanup. Your property remains exactly as it was when the chef arrived — no trace, no exception.`,
    },
    {
      q: `How far in advance should I book a ${city} estate event?`,
      a: `For estate and luxury events in the ${city} area, we recommend booking 3–4 weeks in advance. Spring and summer fill fastest — May and June when graduation season overlaps with outdoor entertaining season throughout the DC Metro. Premium event dates and large estate gatherings should be secured 4–6 weeks ahead.`,
    },
    {
      q: `What premium protein upgrades are available for ${city} estate dinners?`,
      a: `Full premium menu available for any Maryland estate event: filet mignon, lobster tail, Chilean sea bass, dry scallops, king shrimp, and A5 wagyu beef. Mix and match per guest at booking. Premium packages are the standard addition for Bethesda, Potomac, and Chevy Chase estate events.`,
    },
    {
      q: `Is there a travel fee for ${city} and surrounding DC Metro communities?`,
      a: `No extra travel fee for ${city}, Bethesda, Potomac, Chevy Chase, and most of the DC Maryland Metro. For locations more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you confirm.`,
    },
    {
      q: `Can you handle a large estate gathering in ${city} with 40+ guests?`,
      a: `Yes — for groups over 25, we bring two chef stations running simultaneously. Estate gatherings, large anniversary parties, and milestone events of 40–80 guests are among our most common DC corridor luxury bookings. Full coordination handled end-to-end.`,
    },
  ],
  // Theme 1 — Montgomery County Diverse & Tech
  (city) => [
    {
      q: `Can you set up hibachi in a ${city} backyard or outdoor space?`,
      a: `Yes — ${city} suburban backyards, townhouse patios, and outdoor spaces are among our most common Maryland setups. We need a flat outdoor area of at least 10×10 ft. Most ${city} residential properties meet this easily.`,
    },
    {
      q: `Do you serve South Asian, East Asian, and diverse communities in ${city}?`,
      a: `Absolutely — the South Asian and East Asian communities throughout Montgomery County are among our strongest Maryland markets. Graduation parties, Diwali dinners, Eid celebrations, engagement parties, and large milestone events are our most common ${city} bookings. Dual-station setups for 40–80 guests are the standard for large Montgomery County graduation events.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation or milestone event?`,
      a: `For MCPS graduation weekends and milestone events in ${city}, we recommend booking 3–4 weeks ahead. May and June fill fastest — Montgomery County graduation season is one of the most competitive event scheduling windows in Maryland. Reserve early for May and June Saturday events.`,
    },
    {
      q: `Can you handle large graduation parties for ${city} families?`,
      a: `Yes — large graduation events are our biggest Montgomery County market. For groups over 25, we bring two chef stations running simultaneously. South Asian and diverse community graduation parties of 40–80 guests are among our most common ${city} bookings. The entire extended family at the same grill, the same chef, the same performance.`,
    },
    {
      q: `Do you serve all Montgomery County communities near ${city}?`,
      a: `Yes — we serve all of Montgomery County including ${city} and surrounding communities: Rockville, Gaithersburg, Germantown, Bethesda, Chevy Chase, North Potomac, Darnestown, and the full I-270 corridor. Most locations fall within our standard service radius with no extra travel fee.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Montgomery County locations. For events more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront. Serving all of Montgomery County and surrounding DC Maryland suburbs.`,
    },
  ],
  // Theme 2 — Howard County & Inner Suburbs
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} home or outdoor space?`,
      a: `Yes — ${city} backyards, patios, and outdoor spaces are among our most common Howard County setups. We need a flat outdoor area of at least 10×10 ft. Most ${city} properties have ideal setups with excellent outdoor entertaining space.`,
    },
    {
      q: `Do you serve the diverse community and graduation market in ${city}?`,
      a: `Absolutely — Howard County's diverse communities, including the South Asian and multicultural families throughout Columbia, Ellicott City, and the surrounding area, are among our strongest Maryland markets. Graduation parties, milestone celebrations, and cultural events are our most common ${city} bookings.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For graduation events and milestone celebrations in ${city}, we recommend booking 2–3 weeks ahead. Howard County graduation season in May and June fills quickly — reserve 3–4 weeks ahead for Saturday events during peak graduation weekends.`,
    },
    {
      q: `Can you handle large gatherings in ${city}?`,
      a: `Yes — for groups over 25, we bring two chef stations running simultaneously. Large graduation parties, family reunions, and community milestone events of 40–80 guests are among our most common Howard County bookings.`,
    },
    {
      q: `Do you serve all Howard County communities near ${city}?`,
      a: `Yes — we serve all of Howard County including ${city} and surrounding communities: Columbia, Ellicott City, Owings Mills, Laurel, Clarksville, Fulton, Elkridge, and the full Howard County corridor. Most locations fall within our standard service radius.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Howard County locations. For events more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront. Serving all of Howard County and surrounding Baltimore-Washington corridor communities.`,
    },
  ],
  // Theme 3 — Baltimore Metro
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} corporate venue or private outdoor space?`,
      a: `Yes — ${city} corporate outdoor venues, residential backyards, and private event spaces are among our most common Maryland setups. We need a flat outdoor area of at least 10×10 ft. Most ${city} properties and corporate outdoor spaces meet this easily.`,
    },
    {
      q: `Do you serve Baltimore corporate teams and professional communities in ${city}?`,
      a: `Yes — Johns Hopkins, UMMC, the Baltimore financial sector, law firms, and the broader professional community throughout the Baltimore Metro are among our most regular Maryland corporate clients. ${city} corporate team dinners and client appreciation events are some of our strongest recurring bookings.`,
    },
    {
      q: `How far in advance should I book a ${city} corporate or graduation event?`,
      a: `Weekend events in the ${city} area book 2–3 weeks ahead. Graduation season in May and June fills fastest — university and high school graduation events near ${city} should be booked 3–4 weeks ahead. Corporate events with weekday flexibility can often be arranged 1–2 weeks ahead.`,
    },
    {
      q: `Can you handle large corporate dinners or graduation parties near ${city}?`,
      a: `Absolutely — corporate team dinners and graduation parties are both major ${city} markets. For groups over 25, we bring two chef stations running simultaneously. Events of 40–80 guests are common across the Baltimore Metro.`,
    },
    {
      q: `Do you serve all Baltimore Metro communities near ${city}?`,
      a: `Yes — we serve all of the Baltimore Metro including ${city} and surrounding communities: Baltimore, Towson, Bel Air, Owings Mills, Columbia, Ellicott City, Lutherville, Timonium, and all of Baltimore County. Most locations fall within our standard service radius.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Baltimore Metro locations. For events more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront. Serving all of Baltimore City, Baltimore County, and surrounding communities.`,
    },
  ],
  // Theme 4 — Capital & Southern Maryland
  (city) => [
    {
      q: `Can you set up hibachi at a waterfront property or dock-side deck in ${city}?`,
      a: `Yes — waterfront properties, dock-side decks, and estate terraces along the Chesapeake Bay and Severn River are among our most requested Maryland setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most ${city} waterfront and residential properties meet this easily.`,
    },
    {
      q: `Do you serve Naval Academy families and military communities in ${city}?`,
      a: `Absolutely — Naval Academy graduation weekend (May), military homecoming celebrations, and military family milestone events are among our most important ${city} bookings. The USNA graduation dinner, where families travel from across the country, is one of the most emotionally significant occasions we serve in Maryland.`,
    },
    {
      q: `How far in advance should I book a ${city} waterfront or graduation event?`,
      a: `For Naval Academy graduation weekend and summer waterfront events in ${city}, we recommend booking 3–4 weeks ahead. USNA graduation week (late May) fills fastest — book in March or April for a May event. Summer Chesapeake Bay events should be secured 3–4 weeks ahead.`,
    },
    {
      q: `What premium protein upgrades are available for ${city} waterfront events?`,
      a: `Full premium menu available for any Maryland waterfront event: filet mignon, lobster tail, Chilean sea bass, dry scallops, king shrimp, and A5 wagyu. Lobster tail paired with filet mignon is the most popular combination for Chesapeake Bay and Annapolis waterfront occasions.`,
    },
    {
      q: `Do you serve Chesapeake Bay communities and Kent Island near ${city}?`,
      a: `Yes — we serve ${city} and all surrounding communities including Severna Park, Arnold, Edgewater, Crofton, the Kent Island corridor along the Bay Bridge, and the full Anne Arundel and Prince George's County area. Kent Island and Stevensville are within our standard service radius.`,
    },
    {
      q: `Is there a travel fee for ${city} waterfront events?`,
      a: `No extra travel fee for most ${city} and Anne Arundel County locations. Travel fees may apply for remote Chesapeake Bay island locations or destinations more than 40 miles from our nearest chef base — always disclosed upfront.`,
    },
  ],
  // Theme 5 — Chesapeake Bay & Eastern Shore
  (city) => [
    {
      q: `Can you set up hibachi at a beach house, vacation rental, or waterfront property in ${city}?`,
      a: `Yes — beach houses, vacation rentals, and Chesapeake Bay waterfront properties are our primary ${city} event setting. We need a flat outdoor area of at least 10×10 ft on your deck, patio, or outdoor space. No hookups required — the grill is fully self-contained and propane-powered.`,
    },
    {
      q: `What's the best way to book a private hibachi chef for my ${city} vacation rental?`,
      a: `Contact us with your event date, property location, guest count, and any protein preferences. Most ${city} quotes are returned the same day. Confirm with a deposit to secure your chef. Provide the property address and access notes (gate codes, parking) 24–48 hours before. The chef handles everything from setup through complete cleanup — your rental is immaculate when we leave.`,
    },
    {
      q: `How far in advance should I book for ${city} summer events?`,
      a: `${city} summer events book 3–4 weeks ahead — peak season (July–August) and beach weekends fill fastest. For Ocean City bachelorette weekends and Eastern Shore family reunions, book as early as you confirm the trip dates. Most quotes confirmed same day, deposit secures the date.`,
    },
    {
      q: `Can you handle bachelorette weekends and large vacation groups in ${city}?`,
      a: `Bachelorette weekends and vacation rental group dinners are our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Beach house parties of 15–40 guests are our standard Eastern Shore format. Full cleanup when dinner is done — your rental property is exactly as you found it.`,
    },
    {
      q: `Do you serve all Eastern Shore and Chesapeake Bay communities near ${city}?`,
      a: `Yes — we serve ${city} and the full Eastern Shore and Chesapeake Bay corridor: Ocean City, St. Michaels, Kent Island, Easton, Cambridge, Tilghman Island, and surrounding communities. Travel fees may apply for remote island or waterfront locations — always disclosed upfront.`,
    },
    {
      q: `Is there a travel fee for ${city} beach house events?`,
      a: `Travel fees may apply for remote Eastern Shore locations — always disclosed before you confirm, never a surprise. For most Ocean City and St. Michaels vacation rental events, we provide the fee in your same-day quote so you know the full cost before confirming.`,
    },
  ],
]

// ── Testimonials ───────────────────────────────────────────────────────────────
const MD_TESTIMONIALS = [
  // Theme 0 — DC Corridor Luxury
  [
    { text: `Our Bethesda estate dinner for eighteen exceeded every expectation. The chef's professionalism was impeccable — premium proteins, flawless performance, and the property looked like no one had ever been there when he left.`, name: 'Margaret L.', location: 'Bethesda, MD', rating: 5 },
    { text: `I've hosted a lot of private dinners in Potomac. This was the most impressive format we've done. The filet mignon and lobster tail combination was extraordinary, and the chef handled every detail without me having to manage a thing.`, name: 'Richard K.', location: 'Potomac, MD', rating: 5 },
    { text: `Chevy Chase doesn't have many options for this kind of exclusive private entertaining. The chef brought the entire experience to our rear terrace and the guests — including several diplomatic colleagues — were genuinely impressed.`, name: 'Patricia H.', location: 'Chevy Chase, MD', rating: 5 },
    { text: `Booked for a corporate client dinner in Bethesda. The presentation was exceptional, the proteins were premium quality, and the live performance gave the evening a level of entertainment that a restaurant simply cannot replicate.`, name: 'James T.', location: 'Bethesda, MD', rating: 5 },
  ],
  // Theme 1 — Montgomery County Diverse & Tech
  [
    { text: `Incredible graduation party. Eighty guests, two chef stations, and everyone was at the grill at the same time — grandparents from India, cousins from New Jersey, my daughter's entire friend group. This is the format for a Rockville graduation.`, name: 'Priya S.', location: 'Rockville, MD', rating: 5 },
    { text: `We've done restaurant graduations before. The private hibachi is in a completely different category. My son's MCPS graduation party in Gaithersburg — sixty people at our house, two chefs, nobody waiting at a separate table.`, name: 'Raj M.', location: 'Gaithersburg, MD', rating: 5 },
    { text: `The Diwali dinner was everything we hoped. The chef was respectful of our preferences, the performance kept everyone engaged for the whole evening, and the cleanup was genuinely spotless.`, name: 'Ananya P.', location: 'Rockville, MD', rating: 5 },
    { text: `Booked for my daughter's Quinceanera in Gaithersburg. The chef was professional, the food was exceptional, and the fire tricks had the whole family talking. Best party we've hosted.`, name: 'Maria G.', location: 'Gaithersburg, MD', rating: 5 },
  ],
  // Theme 2 — Howard County & Inner Suburbs
  [
    { text: `Columbia graduation party for fifty guests. Two chef stations, everything running simultaneously, complete cleanup after. Howard County does milestones right — this format was perfect for what we wanted.`, name: 'Kevin W.', location: 'Columbia, MD', rating: 5 },
    { text: `Our Ellicott City anniversary dinner was exactly what we wanted — a private chef at home, premium proteins, the whole performance just for our group. No restaurant comparison. Worth every dollar.`, name: 'Sarah J.', location: 'Ellicott City, MD', rating: 5 },
    { text: `Bar mitzvah celebration dinner in Owings Mills. The format worked beautifully — the whole extended family at the same grill, traditional food preferences respected throughout, and the performance kept the teenagers completely engaged.`, name: 'David R.', location: 'Owings Mills, MD', rating: 5 },
    { text: `Booked for my daughter's graduation in Columbia. Best decision we made. The chef arrived on time, set up completely independently, performed for two hours, and left our backyard cleaner than he found it.`, name: 'Michelle T.', location: 'Columbia, MD', rating: 5 },
  ],
  // Theme 3 — Baltimore Metro
  [
    { text: `Johns Hopkins team dinner in Towson. Fifteen researchers, outdoor venue, two hours of live teppanyaki. The team hasn't stopped talking about it. This is the format for a meaningful team event.`, name: 'Dr. Andrew S.', location: 'Towson, MD', rating: 5 },
    { text: `We hosted our firm's client appreciation dinner in Baltimore. The private hibachi format worked perfectly for the outdoor space — professional, impressive, and the kind of experience clients remember.`, name: 'Catherine B.', location: 'Baltimore, MD', rating: 5 },
    { text: `Towson University graduation party, forty guests, dual stations. Everything ran perfectly. The chef was professional and the cleanup was complete. Our backyard was spotless when he left.`, name: 'Robert N.', location: 'Towson, MD', rating: 5 },
    { text: `Bachelorette weekend in Baltimore. The chef came to our rental house, performed for the whole group, and left the place perfect. Absolute highlight of the weekend.`, name: 'Alicia M.', location: 'Baltimore, MD', rating: 5 },
  ],
  // Theme 4 — Capital & Southern Maryland
  [
    { text: `USNA graduation weekend in Annapolis — restaurants were booked everywhere. We had the chef at our dock-side property on the Severn, twenty guests, lobster tail and filet mignon. Perfect in every way.`, name: 'Commander (Ret.) Thomas H.', location: 'Annapolis, MD', rating: 5 },
    { text: `Our anniversary dinner on the Chesapeake Bay was extraordinary. The chef set up on the deck while the sun was still high, and we ate with the bay right in front of us. This is why we live in Annapolis.`, name: 'Elizabeth F.', location: 'Annapolis, MD', rating: 5 },
    { text: `Military homecoming dinner in Waldorf. The whole family was there — thirty people, dual stations, two hours of live cooking. You could feel how much the occasion meant to everyone at the grill.`, name: 'Sergeant (Ret.) Marcus B.', location: 'Waldorf, MD', rating: 5 },
    { text: `Booked for a bachelorette weekend group that drove down from DC to Annapolis. The chef came to the waterfront rental, performed for eighteen guests, and the cleanup was spotless. Perfect evening.`, name: 'Lindsey W.', location: 'Annapolis, MD', rating: 5 },
  ],
  // Theme 5 — Chesapeake Bay & Eastern Shore
  [
    { text: `Ocean City bachelorette weekend. We had twelve people at the rental, the chef set up on the deck, and the dinner was the highlight of the whole trip. Nobody wanted to go out after — why would you?`, name: 'Brittany K.', location: 'Ocean City, MD', rating: 5 },
    { text: `St. Michaels anniversary weekend. The chef came to our Chesapeake Bay cottage, set up while we were finishing the wine tour, and the dinner was extraordinary. The bay view and the hibachi — the perfect combination.`, name: 'Jonathan M.', location: 'St. Michaels, MD', rating: 5 },
    { text: `Family reunion at our Ocean City beach house. Twenty-four people, two chef stations, complete cleanup. Easiest group dinner we've ever hosted. The kids are still talking about the fire tricks.`, name: 'Karen A.', location: 'Ocean City, MD', rating: 5 },
    { text: `Booked the chef for our St. Michaels getaway group — eight couples, anniversary celebration, waterfront deck. The lobster tail and filet mignon was exceptional, and the whole performance matched the occasion.`, name: 'Christine P.', location: 'St. Michaels, MD', rating: 5 },
  ],
]

// ── How It Works ──────────────────────────────────────────────────────────────
const MD_HOW_IT_WORKS = [
  // Theme 0 — DC Corridor Luxury
  {
    headline:   (city) => `Your ${city} Estate Hibachi Event — How It Works`,
    footerNote: (city) => `We serve ${city} and all of Metro DC Maryland — Bethesda, Potomac, Chevy Chase, Rockville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',      desc: 'Tell us your event date, estate location, guest count, and protein preferences. Premium upgrades — filet mignon, lobster tail, wagyu — included at your discretion. Quote returned same day.' },
      { title: 'Confirm & Secure',     desc: 'Review your quote and confirm with a deposit. Your chef date is locked. Provide estate address and access details 24–48 hours before the event.' },
      { title: 'Chef Setup',           desc: 'Chef arrives 30–45 minutes before start. Sets up independently on your terrace, rear patio, or estate grounds. No direction from you needed — arrival through setup is fully managed.' },
      { title: 'Live Teppanyaki',      desc: '90–120 minutes of live cooking exclusively for your guest list — fire tricks, precision knife work, every dish cooked to order. No public audience. No restaurant format.' },
      { title: 'Complete Cleanup',     desc: 'Immaculate departure. Your estate property is exactly as it was before the chef arrived — no trace, no residue, complete discretion.' },
    ],
  },
  // Theme 1 — Montgomery County Diverse & Tech
  {
    headline:   (city) => `Your ${city} Hibachi Event — How It Works`,
    footerNote: (city) => `We serve ${city} and all of Montgomery County — Rockville, Gaithersburg, Germantown, Bethesda, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',      desc: 'Tell us your event date, backyard location, guest count, and any dietary preferences. Dual-station setups for 25+ guests confirmed in your quote. Response same day.' },
      { title: 'Confirm & Secure',     desc: 'Review your quote, confirm with deposit. Your date is locked — especially important for MCPS graduation season (May–June). Provide your address 24–48 hours before.' },
      { title: 'Chef Setup',           desc: 'Chef arrives 30–45 minutes before your start. Sets up in your backyard or outdoor space — grill, propane, all ingredients, plates, and utensils. Fully independent.' },
      { title: 'Live Teppanyaki',      desc: '90–120 minutes of live cooking for your entire guest list — fire tricks, flying shrimp, every dish cooked to order at the grill. Dual stations available for groups over 25.' },
      { title: 'Complete Cleanup',     desc: 'Full cleanup when dinner is done. Your backyard is exactly as you left it — no grease, no residue, no cleanup for you.' },
    ],
  },
  // Theme 2 — Howard County & Inner Suburbs
  {
    headline:   (city) => `Your ${city} Hibachi Event — How It Works`,
    footerNote: (city) => `We serve ${city} and all of Howard County — Columbia, Ellicott City, Owings Mills, Laurel, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',      desc: 'Tell us your event date, property location, guest count, and protein preferences. Dual-station setups for 25+ guests confirmed in your quote. Response same day.' },
      { title: 'Confirm & Secure',     desc: 'Review your quote, confirm with deposit. Your date is locked — important during Howard County graduation season (May–June). Provide your address 24–48 hours before.' },
      { title: 'Chef Setup',           desc: 'Chef arrives 30–45 minutes before start. Sets up in your backyard or outdoor space completely independently — grill, propane, all ingredients, plates, utensils.' },
      { title: 'Live Teppanyaki',      desc: '90–120 minutes of live cooking for your entire guest list — fire tricks, flying shrimp, every dish cooked to order. Dual stations available for groups over 25.' },
      { title: 'Complete Cleanup',     desc: 'Full cleanup when dinner is done. Your property is exactly as you left it — no work for you or your family after the event.' },
    ],
  },
  // Theme 3 — Baltimore Metro
  {
    headline:   (city) => `Your ${city} Hibachi Event — How It Works`,
    footerNote: (city) => `We serve ${city} and the Baltimore Metro — Baltimore, Towson, Owings Mills, Columbia, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',      desc: 'Tell us your event date, location (corporate venue, backyard, or outdoor space), guest count, and any preferences. Quote returned same day.' },
      { title: 'Confirm & Secure',     desc: 'Review your quote, confirm with deposit. Provide your venue address and any access notes 24–48 hours before the event.' },
      { title: 'Chef Setup',           desc: 'Chef arrives 30–45 minutes before start. Sets up independently at your outdoor space — no direction needed from you or your team.' },
      { title: 'Live Teppanyaki',      desc: '90–120 minutes of live teppanyaki performance — fire tricks, flying shrimp, every dish cooked to order. Two stations available for corporate groups of 25+.' },
      { title: 'Complete Cleanup',     desc: 'Full cleanup when dinner is done. Your venue or backyard is exactly as it was before the chef arrived.' },
    ],
  },
  // Theme 4 — Capital & Southern Maryland
  {
    headline:   (city) => `Your ${city} Waterfront Hibachi Event — How It Works`,
    footerNote: (city) => `We serve ${city} and the Chesapeake Bay community — Annapolis, Severna Park, Arnold, Edgewater, Kent Island, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',      desc: 'Tell us your event date, waterfront property or location, guest count, and protein preferences. Premium upgrades — lobster tail, filet mignon — available at any Chesapeake Bay event. Quote same day.' },
      { title: 'Confirm & Secure',     desc: 'Review your quote, confirm with deposit. USNA graduation weekend (May) and summer dates book fast — secure early. Provide your waterfront address and access details 24–48 hours before.' },
      { title: 'Chef Setup',           desc: 'Chef arrives 30–45 minutes before start. Sets up on your dock-side deck, terrace, or waterfront outdoor space. Fully self-contained — no gas hookups or outdoor kitchen needed.' },
      { title: 'Live Teppanyaki',      desc: '90–120 minutes of live cooking for your guest list — fire tricks, premium proteins cooked to order, the full performance at your Chesapeake Bay property.' },
      { title: 'Complete Cleanup',     desc: 'Full cleanup when dinner is done. Your waterfront property is immaculate when the chef leaves.' },
    ],
  },
  // Theme 5 — Chesapeake Bay & Eastern Shore
  {
    headline:   (city) => `Your ${city} Beach House Hibachi Event — How It Works`,
    footerNote: (city) => `We serve ${city} and the Eastern Shore — Ocean City, St. Michaels, Kent Island, Easton, and the full Chesapeake Bay vacation corridor. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Contact & Quote',      desc: 'Tell us your event date, vacation rental or beach house location, guest count, and protein preferences. Travel fee (if applicable) included in your same-day quote — never a surprise.' },
      { title: 'Confirm & Secure',     desc: 'Review your quote, confirm with deposit. Summer Eastern Shore dates fill 3–4 weeks ahead — book as early as you confirm the trip. Provide the rental address and access notes before arrival.' },
      { title: 'Chef Setup',           desc: 'Chef arrives 30–45 minutes before start. Sets up on your deck, patio, or outdoor space completely independently. Fully self-contained propane grill — no hookups required at your rental.' },
      { title: 'Live Teppanyaki',      desc: '90–120 minutes of live cooking for your vacation group — fire tricks, flying shrimp, every dish cooked to order. Two stations for groups over 25. Your whole group eats together.' },
      { title: 'Complete Cleanup',     desc: 'Your rental property is immaculate when the chef leaves. No cleanup, no grease, no residue — exactly as you found it.' },
    ],
  },
]

// ── Section variants ───────────────────────────────────────────────────────────
const MD_SECTION_VARIANTS = [
  // Theme 0 — DC Corridor Luxury
  {
    heroPill:              'Private Hibachi Chef in Maryland',
    experiencePill:        'The DC Metro Estate Experience',
    experiencePoints:      (city) => [
      `Certified teppanyaki chef performing exclusively at your ${city} estate`,
      'Filet mignon, lobster tail, wagyu, and premium protein upgrades available',
      'Complete discretion from arrival through cleanup — your guest list, your property',
      `Estate and executive events throughout ${city} and all of DC Metro Maryland`,
    ],
    experienceImage:       '/pics/hibachi-chef-home.jpg',
    experienceImageAlt:    (city) => `Private hibachi chef at a ${city} MD estate event`,
    areasPill:             'Service Area',
    areasHeadline:         (city) => `Serving ${city} and All of DC Metro Maryland`,
    areasIntro:            [
      (city, state) => `We serve ${city} and all of the Washington DC Maryland Metro — Bethesda, Potomac, Chevy Chase, Rockville, Gaithersburg, Germantown, and surrounding communities throughout Montgomery County.`,
      (city) => `Most ${city} estate and suburban events fall within our standard service radius with no travel fee. Premium events throughout the DC corridor — from Chevy Chase to Potomac — are our most common Maryland booking.`,
    ],
    areasButton:           'View All Maryland Locations',
    occasionPill:          'Estate & Executive Events',
    occasionHeadline:      (city) => `Private Hibachi for Every ${city} Occasion`,
    occasionSubtext:       'Estate dinners, diplomatic entertaining, corporate client events, and the milestone occasions that the DC Metro executive community marks with the discretion and quality they deserve.',
    faqPill:               'Common Questions',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi FAQ`,
    testimonialSubheading: 'What DC Metro Maryland hosts are saying about private hibachi at home.',
  },
  // Theme 1 — Montgomery County Diverse & Tech
  {
    heroPill:              'Private Hibachi Chef in Maryland',
    experiencePill:        'The Montgomery County Experience',
    experiencePoints:      (city) => [
      `Certified teppanyaki chef at your ${city} backyard or outdoor space`,
      'Dual-station capacity for graduation parties and large milestone events of 25–80 guests',
      'South Asian, East Asian, and diverse community milestone celebrations throughout Montgomery County',
      `Full setup and cleanup — your ${city} backyard is exactly as you left it`,
    ],
    experienceImage:       '/pics/hibachi-event.jpg',
    experienceImageAlt:    (city) => `Private hibachi graduation party in ${city} MD`,
    areasPill:             'Service Area',
    areasHeadline:         (city) => `Serving ${city} and All of Montgomery County`,
    areasIntro:            [
      (city, state) => `We serve ${city} and all of Montgomery County — Rockville, Gaithersburg, Germantown, Bethesda, Chevy Chase, North Potomac, and the full I-270 corridor.`,
      (city) => `Most ${city} events fall within our standard service radius with no travel fee. Graduation season (May–June) is our busiest Maryland period — reserve early for any spring Saturday in ${city}.`,
    ],
    areasButton:           'View All Maryland Locations',
    occasionPill:          'Community & Graduation Events',
    occasionHeadline:      (city) => `Private Hibachi for Every ${city} Celebration`,
    occasionSubtext:       'Graduation parties, Diwali dinners, Eid celebrations, engagement parties, family reunions, and every community milestone that the Montgomery County diverse community marks with genuine intention.',
    faqPill:               'Common Questions',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi FAQ`,
    testimonialSubheading: 'What Montgomery County Maryland hosts are saying about private hibachi at home.',
  },
  // Theme 2 — Howard County & Inner Suburbs
  {
    heroPill:              'Private Hibachi Chef in Maryland',
    experiencePill:        'The Howard County Experience',
    experiencePoints:      (city) => [
      `Certified teppanyaki chef at your ${city} home or outdoor space`,
      'Dual-station capacity for large graduation parties and milestone events',
      'Howard County\'s diverse, high-income community celebrates milestones with genuine intention',
      `Full setup and cleanup — your ${city} property is spotless when we leave`,
    ],
    experienceImage:       '/pics/hibachi-catering-3.jpg',
    experienceImageAlt:    (city) => `Private hibachi graduation party in ${city} MD`,
    areasPill:             'Service Area',
    areasHeadline:         (city) => `Serving ${city} and All of Howard County`,
    areasIntro:            [
      (city, state) => `We serve ${city} and all of Howard County — Columbia, Ellicott City, Owings Mills, Laurel, Clarksville, Fulton, Elkridge, and surrounding communities.`,
      (city) => `Most ${city} events fall within our standard service radius. Graduation season (May–June) fills quickly — reserve early for any spring Saturday event in ${city}.`,
    ],
    areasButton:           'View All Maryland Locations',
    occasionPill:          'Milestone & Graduation Events',
    occasionHeadline:      (city) => `Private Hibachi for Every ${city} Occasion`,
    occasionSubtext:       'Graduation parties, birthday milestones, family reunions, engagement parties, and the community celebrations that Howard County\'s diverse, accomplished community marks with full intention.',
    faqPill:               'Common Questions',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi FAQ`,
    testimonialSubheading: 'What Howard County Maryland hosts are saying about private hibachi at home.',
  },
  // Theme 3 — Baltimore Metro
  {
    heroPill:              'Private Hibachi Chef in Maryland',
    experiencePill:        'The Baltimore Metro Experience',
    experiencePoints:      (city) => [
      `Certified teppanyaki chef at your ${city} venue, backyard, or outdoor space`,
      'Corporate team dinners and client events for the Baltimore professional community',
      'University graduation parties — Towson, Johns Hopkins, UMBC, and surrounding schools',
      `Full setup and cleanup at your ${city} event location`,
    ],
    experienceImage:       '/pics/hibachi-catering.jpg',
    experienceImageAlt:    (city) => `Hibachi catering at a ${city} MD corporate event`,
    areasPill:             'Service Area',
    areasHeadline:         (city) => `Serving ${city} and the Baltimore Metro`,
    areasIntro:            [
      (city, state) => `We serve ${city} and the full Baltimore Metro — Baltimore City, Towson, Owings Mills, Bel Air, Columbia, Ellicott City, Lutherville, Timonium, and surrounding communities throughout Baltimore County.`,
      (city) => `Most ${city} events fall within our standard service radius. University graduation season (May–June) and summer weekends fill fast — reserve early for any Baltimore Metro event.`,
    ],
    areasButton:           'View All Maryland Locations',
    occasionPill:          'Corporate & Private Events',
    occasionHeadline:      (city) => `Private Hibachi for Every ${city} Occasion`,
    occasionSubtext:       'Corporate team dinners, client appreciation events, university graduation parties, birthday milestones, and the private gatherings that Baltimore Metro professionals and families mark with the format the occasion deserves.',
    faqPill:               'Common Questions',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi FAQ`,
    testimonialSubheading: 'What Baltimore Metro Maryland hosts are saying about private hibachi at home.',
  },
  // Theme 4 — Capital & Southern Maryland
  {
    heroPill:              'Private Hibachi Chef in Maryland',
    experiencePill:        'The Chesapeake Bay Experience',
    experiencePoints:      (city) => [
      `Certified teppanyaki chef at your ${city} waterfront property or dock-side deck`,
      'Lobster tail, filet mignon, and premium proteins — the standard for Chesapeake Bay events',
      'Naval Academy graduation, military homecomings, and waterfront milestone celebrations',
      `Full setup and cleanup — your ${city} waterfront property is immaculate when we leave`,
    ],
    experienceImage:       '/pics/private-hibachi.jpg',
    experienceImageAlt:    (city) => `Private hibachi chef at a ${city} MD waterfront event`,
    areasPill:             'Service Area',
    areasHeadline:         (city) => `Serving ${city} and the Chesapeake Bay Community`,
    areasIntro:            [
      (city, state) => `We serve ${city} and the full Chesapeake Bay community — Annapolis, Severna Park, Arnold, Edgewater, Crofton, Kent Island, and surrounding Anne Arundel and Prince George's County communities.`,
      (city) => `USNA graduation weekend (May) and summer waterfront events in ${city} fill 3–4 weeks ahead. Secure your date early — especially for Chesapeake Bay dock-side events in July and August.`,
    ],
    areasButton:           'View All Maryland Locations',
    occasionPill:          'Waterfront & Military Events',
    occasionHeadline:      (city) => `Private Hibachi for Every ${city} Occasion`,
    occasionSubtext:       'Naval Academy graduation dinners, waterfront estate events, military homecoming celebrations, anniversary getaways on the Chesapeake, and the milestone occasions that make life in the Annapolis community extraordinary.',
    faqPill:               'Common Questions',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi FAQ`,
    testimonialSubheading: 'What Chesapeake Bay Maryland hosts are saying about private hibachi at home.',
  },
  // Theme 5 — Chesapeake Bay & Eastern Shore
  {
    heroPill:              'Private Hibachi Chef in Maryland',
    experiencePill:        'The Eastern Shore Experience',
    experiencePoints:      (city) => [
      `Certified teppanyaki chef travels to your ${city} beach house or vacation rental`,
      'Bachelorette weekends, family reunions, and summer vacation group dinners',
      'Ocean City, St. Michaels, Kent Island — the full Chesapeake and Eastern Shore corridor served',
      `Full setup and cleanup — your ${city} vacation rental is spotless when the chef leaves`,
    ],
    experienceImage:       '/pics/hibachi-event.jpg',
    experienceImageAlt:    (city) => `Private hibachi chef at a ${city} MD beach house event`,
    areasPill:             'Service Area',
    areasHeadline:         (city) => `Serving ${city} and the Eastern Shore`,
    areasIntro:            [
      (city, state) => `We serve ${city} and the full Eastern Shore and Chesapeake Bay vacation corridor — Ocean City, St. Michaels, Kent Island, Easton, Cambridge, Tilghman Island, and surrounding communities.`,
      (city) => `${city} summer events book 3–4 weeks ahead. Peak season (July–August) and beach weekends fill earliest — secure your vacation dinner early, especially for bachelorette weekends and family reunion events.`,
    ],
    areasButton:           'View All Maryland Locations',
    occasionPill:          'Beach House & Vacation Events',
    occasionHeadline:      (city) => `Private Hibachi for Every ${city} Occasion`,
    occasionSubtext:       'Bachelorette weekends, family reunion beach house dinners, anniversary getaways, and summer vacation rental group events — the private chef comes to your property so the evening stays exactly where it should.',
    faqPill:               'Common Questions',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi FAQ`,
    testimonialSubheading: 'What Eastern Shore Maryland vacation hosts are saying about private hibachi at the beach house.',
  },
]

// ── Image themes (one per geographic theme) ────────────────────────────────────
const MD_IMAGE_THEMES = [
  { heroImage: '/pics/hibachi-chef-home.jpg' },    // 0 DC Luxury
  { heroImage: '/pics/hibachi-event.jpg' },         // 1 Montgomery County Diverse
  { heroImage: '/pics/hibachi-catering-3.jpg' },    // 2 Howard County
  { heroImage: '/pics/hibachi-catering.jpg' },      // 3 Baltimore Metro
  { heroImage: '/pics/private-hibachi.jpg' },       // 4 Capital/Chesapeake
  { heroImage: '/pics/hibachi-event.jpg' },         // 5 Eastern Shore
]

// ── Blog posts by theme ────────────────────────────────────────────────────────
const MD_BLOG_POSTS = [
  // Theme 0 — DC Corridor Luxury
  [
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: Why DC Metro Estate Hosts Choose Private',  excerpt: 'Bethesda, Potomac, and Chevy Chase hosts on why a certified private hibachi chef outclasses any Maryland restaurant for the occasions that matter most.', date: '2025-01-22' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',               excerpt: 'DC Metro luxury hosts: what happens from booking through cleanup at a premium estate hibachi event.', date: '2024-11-20' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for DC Metro estate hibachi events — premium proteins, dual stations, and what\'s included.', date: '2025-01-15' },
  ],
  // Theme 1 — Montgomery County Diverse & Tech
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Rockville, Gaithersburg, and Germantown hosts — how to plan a backyard hibachi graduation or milestone party in Montgomery County.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                excerpt: 'Everything Montgomery County hosts need before the private hibachi chef arrives at your Maryland backyard.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for Montgomery County hibachi events — dual stations, large graduation parties, and what\'s included.', date: '2025-01-15' },
  ],
  // Theme 2 — Howard County & Inner Suburbs
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Columbia, Ellicott City, and Owings Mills hosts — how to plan a backyard hibachi graduation or milestone event in Howard County.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                excerpt: 'Everything Howard County hosts need before the private hibachi chef arrives at your Maryland home.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for Howard County hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
  ],
  // Theme 3 — Baltimore Metro
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Baltimore, Towson, and Bel Air hosts — how to plan a backyard hibachi party or corporate event that stands out in the Baltimore Metro.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                excerpt: 'Everything Baltimore Metro hosts need before the private hibachi chef arrives at your Maryland venue or backyard.', date: '2025-02-28' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: The Baltimore Metro Verdict',               excerpt: 'Why Baltimore corporate and family hosts choose private hibachi over restaurant dining for their most important events.', date: '2025-01-22' },
  ],
  // Theme 4 — Capital & Southern Maryland
  [
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',              excerpt: 'Annapolis and Chesapeake Bay bachelorette weekends — why private hibachi at your waterfront rental is the best dinner of the trip.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: The Chesapeake Bay Edition',               excerpt: 'Why Annapolis waterfront hosts choose private hibachi over Chesapeake Bay restaurant dining for their most important occasions.', date: '2025-01-22' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',               excerpt: 'Annapolis and Chesapeake Bay hosts: what happens from booking through cleanup at a waterfront hibachi event.', date: '2024-11-20' },
  ],
  // Theme 5 — Eastern Shore
  [
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',              excerpt: 'Ocean City bachelorette weekends — why private hibachi at your beach house rental is the best dinner of the Maryland shore trip.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: The Eastern Shore Vacation Verdict',        excerpt: 'Why Ocean City and St. Michaels vacation rental guests choose private hibachi over Eastern Shore restaurant dining for their summer events.', date: '2025-01-22' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',               excerpt: 'Ocean City and St. Michaels hosts: what happens from booking through cleanup at a beach house hibachi event.', date: '2024-11-20' },
  ],
]

// ── City experience image map ──────────────────────────────────────────────────
const MD_CITY_IMAGE_MAP = {
  // Batch 1 — DC Luxury + Montgomery County
  'bethesda':     { src: '/pics/hibachi-chef-home.jpg',  alt: (city) => `Private hibachi chef at a Bethesda MD estate event` },
  'potomac':      { src: '/pics/private-hibachi.jpg',    alt: (city) => `Private hibachi chef at a Potomac MD estate dinner` },
  'chevy-chase':  { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Chevy Chase MD private event` },
  'rockville':    { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi chef at a Rockville MD graduation party` },
  'gaithersburg': { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Gaithersburg MD graduation party` },
}

// ── Support images for profiled cities ────────────────────────────────────────
const MD_SUPPORT_IMAGES = {
  // Batch 1 — DC Luxury + Montgomery County
  'bethesda': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Estate hibachi dinner in Bethesda, MD`,
      caption:    'Bethesda estate private dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Bethesda hosts set one of the highest standards for private entertaining in the Mid-Atlantic — government officials, lobbyists, biotech executives, and the diplomatic community that calls the DC Maryland suburbs home. Estate terrace dinners, corporate client events, and premium private gatherings are the occasions we serve here most. Filet mignon, lobster tail, and premium protein upgrades are the expected standard at a Bethesda estate event. See what Bethesda hosts have found:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef setting up at a Bethesda MD estate`,
      caption: 'Bethesda private dining standard',
    },
  },
  'potomac': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Estate hibachi dinner in Potomac, MD`,
      caption:    'Potomac estate entertaining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Potomac hosts represent one of the most exclusive private entertaining markets in the United States — estate properties along River Road and the Potomac corridor, automotive and government executive households, and the standard of private dining that no DC Metro restaurant can deliver at the property level. Premium proteins are the baseline expectation here, not the upgrade. See what Potomac hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-chef-home.jpg',
      alt:     (city) => `Private hibachi chef in Potomac, MD`,
      caption: 'Potomac estate dinner standard',
    },
  },
  'chevy-chase': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi dinner in Chevy Chase, MD`,
      caption:    'Chevy Chase private dining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Chevy Chase hosts — senior government officials, law firm partners, embassy staff, and the accomplished professional community that has chosen this DC-adjacent Maryland enclave for decades — choose private hibachi when the occasion requires exclusivity that a restaurant reservation simply cannot provide. The Chevy Chase private dinner is for the guest list that values discretion, quality, and the experience of a chef performing exclusively in their space. See what Chevy Chase hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-chef-home.jpg',
      alt:     (city) => `Private hibachi chef in Chevy Chase, MD`,
      caption: 'Chevy Chase private dining standard',
    },
  },
  'rockville': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Graduation hibachi party in Rockville, MD`,
      caption:    'Rockville graduation season',
      trustBadge: 'Thousands of Happy Guests',
      intro:      (city) => `Rockville hosts — the South Asian and East Asian community along the Pike District corridor and the Twinbrook and King Farm neighborhoods, the biotech and government professionals from NIH and FDA headquarters, and the MCPS graduation families whose milestones are marked with the full scale and intention the occasion deserves — choose private hibachi for the graduation parties and cultural celebrations that define Montgomery County's celebratory culture. See what Rockville hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Rockville, MD`,
      caption: 'Rockville graduation dinner standard',
    },
  },
  'gaithersburg': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Graduation hibachi party in Gaithersburg, MD`,
      caption:    'Gaithersburg MCPS graduation season',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Gaithersburg hosts — the South Asian and diverse community in the Kentlands, Rio, and Washingtonian neighborhoods, the MCPS graduation families whose May Saturdays are the most important days of the year, and the growing community of professionals along the I-270 tech corridor — choose private hibachi for the graduation parties and milestone celebrations that the Gaithersburg community marks with genuine intention. See what Gaithersburg hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Gaithersburg, MD`,
      caption: 'Gaithersburg graduation dinner standard',
    },
  },
}

// ── Support fallback images (per theme) ───────────────────────────────────────
const MD_SUPPORT_FALLBACKS = [
  // Theme 0 — DC Corridor Luxury
  {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Estate hibachi dinner in ${city}, MD`,
      caption:    'DC corridor estate private dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `${city} hosts choose private hibachi for the estate dinners, executive entertaining, and milestone occasions that define private dining in the DC Maryland corridor. See what hosts in the DC Metro are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef at a ${city} MD estate`,
      caption: 'DC corridor private dining standard',
    },
  },
  // Theme 1 — Montgomery County Diverse & Tech
  {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Graduation hibachi party in ${city}, MD`,
      caption:    'Montgomery County graduation celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `${city} hosts choose private hibachi for the graduation parties and community milestone celebrations that Montgomery County's diverse families mark with genuine intention. See what Montgomery County hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in ${city} MD`,
      caption: 'Montgomery County graduation standard',
    },
  },
  // Theme 2 — Howard County & Inner Suburbs
  {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi event in ${city}, MD`,
      caption:    'Howard County milestone celebrations',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `${city} hosts choose private hibachi for the graduation parties, milestone celebrations, and community events that Howard County's accomplished diverse families mark with full intention. See what Howard County hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in ${city} MD`,
      caption: 'Howard County milestone dining standard',
    },
  },
  // Theme 3 — Baltimore Metro
  {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Corporate hibachi event in ${city}, MD`,
      caption:    'Baltimore Metro corporate events',
      trustBadge: 'Trusted by Maryland Businesses',
      intro:      (city) => `${city} hosts choose private hibachi for the corporate team dinners, graduation parties, and private events that the Baltimore Metro professional community marks with genuine care. See what Baltimore Metro hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in ${city} MD`,
      caption: 'Baltimore Metro private dining standard',
    },
  },
  // Theme 4 — Capital & Southern Maryland
  {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Waterfront hibachi event in ${city}, MD`,
      caption:    'Chesapeake Bay waterfront entertaining',
      trustBadge: 'Highly Rated by Chesapeake Bay Hosts',
      intro:      (city) => `${city} hosts choose private hibachi for the waterfront estate dinners, Naval Academy celebrations, and Chesapeake Bay milestone occasions that define private entertaining in this extraordinary setting. See what Chesapeake Bay hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in ${city} MD`,
      caption: 'Chesapeake Bay waterfront dining standard',
    },
  },
  // Theme 5 — Eastern Shore
  {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Beach house hibachi event in ${city}, MD`,
      caption:    'Eastern Shore vacation entertaining',
      trustBadge: 'Trusted by Vacation Groups',
      intro:      (city) => `${city} vacation hosts choose private hibachi for the bachelorette weekends, family reunions, and summer beach house dinners that make the Eastern Shore trip worth planning. See what Eastern Shore vacation groups are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in ${city} MD`,
      caption: 'Eastern Shore vacation dining standard',
    },
  },
]

// ── Major cities map ──────────────────────────────────────────────────────────
const MD_MAJOR_CITIES = {
  // ── Theme 0 — DC Corridor Luxury ──────────────────────────────────────────
  'bethesda':     { v: 0, profileIdx: 0, nearby: ['Chevy Chase','Potomac','Rockville','Kensington','Silver Spring','Garrett Park'] },
  'potomac':      { v: 0, profileIdx: 1, nearby: ['Bethesda','Chevy Chase','Rockville','North Potomac','Great Falls','Cabin John'] },
  'chevy-chase':  { v: 0, profileIdx: 2, nearby: ['Bethesda','Potomac','Silver Spring','Kensington','Garrett Park','Friendship Heights'] },
  // ── Theme 1 — Montgomery County Diverse & Tech ────────────────────────────
  'rockville':    { v: 1, profileIdx: 3, nearby: ['Gaithersburg','Bethesda','Germantown','North Potomac','Darnestown','Montgomery Village'] },
  'gaithersburg': { v: 1, profileIdx: 4, nearby: ['Rockville','Germantown','North Potomac','Montgomery Village','Clarksburg','Darnestown'] },
}

// ── Nearby major cities by theme (only link to pages that exist) ──────────────
const MD_NEARBY_MAJOR = [
  ['Bethesda', 'Potomac', 'Chevy Chase', 'Rockville', 'Gaithersburg'],          // v=0 DC Luxury
  ['Rockville', 'Gaithersburg', 'Bethesda', 'Chevy Chase', 'Potomac'],          // v=1 Montgomery County
  ['Bethesda', 'Rockville', 'Gaithersburg', 'Chevy Chase', 'Potomac'],          // v=2 Howard County (placeholder)
  ['Bethesda', 'Rockville', 'Gaithersburg', 'Chevy Chase', 'Potomac'],          // v=3 Baltimore Metro (placeholder)
  ['Bethesda', 'Rockville', 'Gaithersburg', 'Chevy Chase', 'Potomac'],          // v=4 Capital/Southern (placeholder)
  ['Bethesda', 'Rockville', 'Gaithersburg', 'Chevy Chase', 'Potomac'],          // v=5 Eastern Shore (placeholder)
]

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const MD_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in', // 0  — Bethesda
  'Private Hibachi Chef in', // 1  — Potomac
  'Hibachi at Home in',      // 2  — Chevy Chase
  'Hibachi at Home in',      // 3  — Rockville
  'Hibachi at Home in',      // 4  — Gaithersburg
]

const MD_THEME_H1_PREFIXES = [
  'Private Hibachi Chef in', // v=0 DC Luxury
  'Hibachi at Home in',      // v=1 Montgomery County
  'Hibachi at Home in',      // v=2 Howard County
  'Hibachi Catering in',     // v=3 Baltimore Metro
  'Private Hibachi Chef in', // v=4 Capital/Chesapeake
  'Private Hibachi Chef in', // v=5 Eastern Shore
]

// ── Custom meta overrides ──────────────────────────────────────────────────────
const MD_CUSTOM_META = {
  'bethesda': {
    title: 'Private Hibachi Chef in Bethesda, MD | Estate & Executive Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Bethesda, MD for estate dinners, government executive entertaining, and corporate client events. Filet mignon & lobster tail upgrades. Full setup & cleanup. From $60/adult.',
  },
  'potomac': {
    title: 'Private Hibachi Chef in Potomac, MD | Estate & Luxury Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Potomac, MD for estate dinners, luxury entertaining, and milestone events. Premium proteins including filet mignon, lobster tail, and wagyu. Full setup & cleanup. From $60/adult.',
  },
  'rockville': {
    title: 'Hibachi at Home in Rockville, MD | Graduation & Milestone Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Rockville, MD for graduation parties, Diwali dinners, and community milestone events. Certified teppanyaki chef, dual stations available. Full setup & cleanup. From $60/adult.',
  },
  'gaithersburg': {
    title: 'Hibachi at Home in Gaithersburg, MD | MCPS Graduation & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Gaithersburg, MD for MCPS graduation parties, Kentlands events, and community milestone celebrations. Full setup & cleanup. From $60/adult.',
  },
}

// ── Closing variants (MD generic 273–278) ─────────────────────────────────────
export const MD_CLOSING_VARIANTS = [
  // 273 — DC Corridor Luxury
  {
    headline: (city) => `Your ${city} Estate Dinner Starts Here`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins including filet mignon and lobster tail. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Bethesda, Potomac, and Chevy Chase estate dates book 3–4 weeks out. Reserve your evening now.`,
  },
  // 274 — Montgomery County Diverse & Tech
  {
    headline: (city) => `${city}'s Best Graduation Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Montgomery County graduation weekends (May–June) book 2–3 weeks ahead. Secure your date now.`,
  },
  // 275 — Howard County & Inner Suburbs
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Howard County graduation and milestone events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 276 — Baltimore Metro
  {
    headline: (city) => `${city}'s Corporate Dinner Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} team dinner, graduation party, or private gathering. Full setup and cleanup. From $60/adult.`,
    urgency:  `Baltimore Metro weekend and corporate events book 2–3 weeks out. Check your date now.`,
  },
  // 277 — Capital & Southern Maryland
  {
    headline: (city) => `The ${city} Waterfront Dinner Your Occasion Deserves — Reserve Now`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} waterfront property. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `Annapolis and Chesapeake Bay summer dates fill 3–4 weeks ahead. Reserve your waterfront evening now.`,
  },
  // 278 — Chesapeake Bay & Eastern Shore
  {
    headline: (city) => `The ${city} Beach House Dinner Your Weekend Deserves`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} beach house or vacation rental. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `Eastern Shore summer dates fill 3–4 weeks ahead. Reserve your vacation dinner now.`,
  },
]

// ── City-specific closings (MD city-specific 279–283, Batch 1) ─────────────────
export const MD_CITY_CLOSINGS = [
  // 279 — Bethesda (profileIdx 0)
  {
    headline: () => `Bethesda's Private Dining Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Bethesda estate or property. Filet mignon, lobster tail, premium proteins. Full setup, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Bethesda estate and executive events book 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 280 — Potomac (profileIdx 1)
  {
    headline: () => `Potomac's Estate Dining Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Potomac estate or property — River Road, Avenel, or residential Potomac. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Potomac estate events book 3–4 weeks ahead. Confirm your date now.`,
  },
  // 281 — Chevy Chase (profileIdx 2)
  {
    headline: () => `Chevy Chase's Private Dining Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Chevy Chase home or property. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Chevy Chase private dinners and estate events book 3–4 weeks ahead. Reserve your date now.`,
  },
  // 282 — Rockville (profileIdx 3)
  {
    headline: () => `Rockville's Best Graduation Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Rockville graduation party, Diwali dinner, or milestone event. Dual stations for 25+ guests. Full setup and cleanup. From $60/adult.`,
    urgency:  `Rockville graduation season (May–June) and weekend events fill 2–3 weeks ahead. Reserve your date now.`,
  },
  // 283 — Gaithersburg (profileIdx 4)
  {
    headline: () => `Gaithersburg's Best Graduation Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Gaithersburg MCPS graduation party or milestone celebration. Dual stations available for 25+ guests. Full setup and cleanup. From $60/adult.`,
    urgency:  `Gaithersburg MCPS graduation weekends (May–June) book 2–3 weeks ahead. Reserve your date now.`,
  },
]

// ── Intro variants (MD generic 273–278) ───────────────────────────────────────
export const MD_INTRO_VARIANTS = [
  // 273 — DC Corridor Luxury
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Executive Entertaining for Maryland's Most Prestigious Addresses`,
    opening:  (city) =>
      `${city} sets the standard for private entertaining in the DC Maryland corridor — the estate properties where government careers are made, the outdoor terraces where the right private dinner says more than any restaurant reservation ever could. Private hibachi at your ${city} property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for the highest standard of private entertaining in the Mid-Atlantic. Bethesda, Potomac, and Chevy Chase are the Maryland addresses that define excellence in the DC Metro. The dinner worth hosting here happens at the property — not down the road.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, wagyu upgrades, and premium Chilean sea bass — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate terrace, rear patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  (city) =>
      `${city} estate events book 3–4 weeks ahead — spring through summer fills fastest. Starting at $60 per adult, $600 event minimum. Premium protein packages available for any ${city} occasion. Most quotes confirmed same day.`,
  },
  // 274 — Montgomery County Diverse & Tech
  {
    headline: (city) => `Hibachi at Home in ${city}: The Montgomery County Graduation & Milestone Dinner`,
    opening:  (city) =>
      `Montgomery County has one of the most accomplished and diverse communities in America — the South Asian and East Asian families whose graduation and milestone culture is built around the full weight of the occasion, the MCPS school district that produces some of the top graduating classes in the country, the biotech and government professionals of the I-270 corridor who mark their milestones with genuine intention. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space — suburban backyard, Kentlands community property, or residential patio — with everything included: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any Montgomery County gathering into the evening your guests are still referencing the following week.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city) =>
      `${city} graduation weekends (May–June) and weekend events book 2–3 weeks out during peak season. Starting at $60 per adult, $600 event minimum. MCPS graduation season fills fastest — reserve early for any spring Saturday event. Most quotes confirmed same day.`,
  },
  // 275 — Howard County & Inner Suburbs
  {
    headline: (city) => `Hibachi at Home in ${city}: Howard County's Milestone Dinner Format`,
    opening:  (city) =>
      `Howard County has the highest median household income of any county in the United States — and the community to match. Columbia's planned diversity, Ellicott City's high-achieving residential culture, and the South Asian, East Asian, and multicultural families throughout the county who mark graduation season with the scale and intention it deserves. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any Howard County gathering into the dinner your guests plan around for next time.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city) =>
      `${city} weekend events book 2–3 weeks ahead. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 276 — Baltimore Metro
  {
    headline: (city) => `Hibachi Catering in ${city}: Baltimore Metro's Private Dining Standard`,
    opening:  (city) =>
      `The Baltimore Metro is Maryland's largest and most diverse city — Johns Hopkins and UMMC making it one of the strongest medical and research markets in the country, the financial and legal corridor of the Inner Harbor, and the university communities at Towson, Loyola, and UMBC whose graduation culture drives one of the strongest event booking markets in the state. Hibachi catering in ${city} brings a certified teppanyaki chef to your corporate venue, outdoor space, or backyard with the full setup and a live-fire cooking performance built for the corporate team dinners, client appreciation events, graduation parties, and community milestone occasions that define how Baltimore professionals and families mark their best moments.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For corporate and milestone events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes at your venue or outdoor space. The performance runs 90–120 minutes. Full cleanup when done.`,
    closing:  (city) =>
      `${city} corporate and community events book 2–3 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. University graduation season (May–June) and summer weekends fill fastest. Most quotes confirmed same day.`,
  },
  // 277 — Capital & Southern Maryland
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Chesapeake Bay Waterfront Entertaining`,
    opening:  (city) =>
      `${city} is where Maryland's most distinctive outdoor entertaining happens — the Chesapeake Bay waterfront properties where dock-side decks look out over the Severn River, the Naval Academy graduation weekend that fills every restaurant in the city and sends the wisest families home to host their own, and the anniversary and milestone culture of a community that has chosen waterfront living because the setting matters. Private hibachi at your ${city} waterfront property brings a certified teppanyaki chef with hand-selected premium proteins — lobster tail, filet mignon, Chilean sea bass — and a live-fire performance that pairs as naturally with a Chesapeake Bay sunset as it does with a cold Maryland craft beer. Kent Island and the surrounding bay communities are within our standard service radius.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your dock-side deck, terrace, or waterfront outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done — your property is immaculate when the chef leaves.`,
    closing:  (city) =>
      `${city} summer waterfront and graduation events book 3–4 weeks ahead. USNA graduation weekend (May) fills earliest — book in March or April for a May event. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 278 — Chesapeake Bay & Eastern Shore
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Eastern Shore Vacation & Beach House Entertaining`,
    opening:  (city) =>
      `${city} is where Maryland summers happen — the beach houses and vacation rentals that fill from Memorial Day to Labor Day with bachelorette groups from DC and Baltimore, the family reunions that converge on the Eastern Shore because there's finally enough space and outdoor room for everyone, and the anniversary couples who drove two hours to the Chesapeake Bay for the specific purpose of having an extraordinary weekend without restaurant logistics getting in the way. Private hibachi at your ${city} vacation rental or beach house brings a certified teppanyaki chef to your deck, patio, or outdoor space with the full setup and a live-fire cooking performance that becomes the anchor memory of the trip. The chef comes to you. Your group stays exactly where it is.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your beach house deck or patio. The performance runs 90–120 minutes from first flame to final plate. For vacation groups over 25, we bring dual chef stations. Full cleanup when dinner is done — your rental property is immaculate when the chef leaves.`,
    closing:  (city) =>
      `${city} summer events book 3–4 weeks ahead — peak July and August fill fastest. Travel fees may apply for remote island or bay locations — always disclosed upfront. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── City-specific intros (MD city-specific 279–283, Batch 1) ──────────────────
export const MD_CITY_INTROS = [
  // 279 — Bethesda (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in Bethesda`,
    opening:  () =>
      `Bethesda is the professional capital of Maryland's DC suburb corridor — the Woodmont Triangle and Bethesda Row dining districts for date nights, and the residential neighborhoods along Bradley Boulevard and River Road where the real private entertaining happens. The guests at a Bethesda estate dinner are government officials, senior lobbyists, NIH and FDA executives, corporate attorneys, and the diplomatic community that has chosen this Montgomery County city for its proximity to DC and its level of residential quality. Private hibachi at your Bethesda property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance built for the occasions where the dinner needs to match the quality of the relationship. No restaurant on Bethesda Row can offer what your own outdoor space offers: complete exclusivity, no public audience, and a chef performing for your guest list alone.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, wagyu upgrades, and Chilean sea bass — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate terrace, rear patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For Bethesda estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Bethesda estate events book 3–4 weeks ahead — spring through summer fills fastest. Serving Bethesda and all of Montgomery County — Chevy Chase, Potomac, Rockville, Gaithersburg, Germantown, and surrounding DC Maryland Metro communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 280 — Potomac (profileIdx 1)
  {
    headline: () => `Private Hibachi Chef in Potomac`,
    opening:  () =>
      `Potomac is consistently listed among the wealthiest ZIP codes in the United States — the River Road corridor where estate properties look out over the Potomac River, the Avenel community with its private golf culture, and the residential addresses that represent the ceiling of private living in the DC Maryland suburbs. The private events hosted at Potomac estate properties have a profile distinct from almost anywhere else we serve: guests who include Cabinet-level officials, automotive and tech executives, investment managing directors, and their families, gathered at a rear terrace or estate grounds for the kind of exclusive dinner that no DC restaurant can replicate. Private hibachi at your Potomac estate brings a certified teppanyaki chef with the full setup, hand-selected premium proteins including filet mignon, lobster tail, and wagyu, and a live-fire performance calibrated to the standard the Potomac host and their guests expect.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, wagyu, and Chilean sea bass — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate terrace, rear lawn, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order. For Potomac estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done — your property is exactly as it was.`,
    closing:  () =>
      `Potomac estate events book 3–4 weeks ahead. Serving Potomac and all of Montgomery County — Bethesda, Chevy Chase, Rockville, Great Falls, North Potomac, and surrounding DC Maryland communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available and recommended for Potomac events. Most quotes confirmed same day.`,
  },
  // 281 — Chevy Chase (profileIdx 2)
  {
    headline: () => `Hibachi at Home in Chevy Chase`,
    opening:  () =>
      `Chevy Chase is the most DC-adjacent Maryland suburb with genuine Maryland ZIP codes — the Connecticut Avenue corridor that runs from the DC border north through one of the most accomplished residential communities in the state. The hosts here are senior government officials, law firm partners, embassy staff, medical system leaders, and the lobbying and policy community that has made Chevy Chase home precisely because it sits at the intersection of DC access and Maryland residential quality. Hibachi at home in Chevy Chase brings a certified teppanyaki chef to your property for the private dinners that the Chevy Chase host chooses when the occasion requires exclusivity that no restaurant reservation can provide. Anniversary dinners on the rear terrace, holiday gatherings for diplomatic colleagues, birthday milestone events where the guest list values privacy as much as it values extraordinary food — these are the occasions that make private hibachi in Chevy Chase the format worth booking.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and premium upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order. For Chevy Chase gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Chevy Chase events book 3–4 weeks ahead. Serving Chevy Chase and all of DC Metro Maryland — Bethesda, Potomac, Silver Spring, Kensington, and the full Montgomery County corridor. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 282 — Rockville (profileIdx 3)
  {
    headline: () => `Hibachi at Home in Rockville`,
    opening:  () =>
      `Rockville is one of the most diverse and accomplished cities in the Washington DC Maryland suburbs — one of the largest South Asian communities in the Metro area, the Pike District corridor and Twinbrook and King Farm neighborhoods where the celebration culture is built around milestones that match the full weight of the occasion, and the biotech and government professional corridor that includes the FDA, NIH, and dozens of life sciences companies along I-270. The graduation parties and cultural milestone celebrations in Rockville operate at a scale and with an intention that most private dining formats struggle to match. Hibachi at home in Rockville brings a certified teppanyaki chef to your outdoor space with dual-station capacity for 40–80 guests, the full setup, and a live-fire performance that the entire guest list — grandparents from India, cousins from New Jersey, the whole Montgomery County family network — can gather around simultaneously. No crowded restaurant. No split tables. Every milestone guest at the same grill, the same chef, the same performance.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Rockville milestone events over 25 guests — standard for the South Asian graduation and celebration culture here — we bring two chef stations running simultaneously. Setup takes 30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner is done.`,
    closing:  () =>
      `Rockville MCPS graduation weekends (May–June) and weekend events book 2–3 weeks ahead. Serving Rockville and all of Montgomery County — Gaithersburg, Germantown, Bethesda, North Potomac, Darnestown, and surrounding I-270 corridor communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 283 — Gaithersburg (profileIdx 4)
  {
    headline: () => `Hibachi at Home in Gaithersburg`,
    opening:  () =>
      `Gaithersburg is Montgomery County's second-largest city and one of the most genuinely diverse communities in Maryland — the Kentlands walkable neighborhood and the Rio/Washingtonian Center corridor where the South Asian, East Asian, and diverse professional families who have moved here for the MCPS school district mark their milestones with the scale and intention those occasions deserve. MCPS graduation season is one of the most competitive event scheduling environments in Maryland: May Saturdays in Gaithersburg are booked months in advance because the families here — many of them with two professional incomes, large extended family networks, and a cultural tradition of marking graduation with a genuine celebration — know that the right format for the occasion is not a restaurant table for eight but a private hibachi chef in the backyard for sixty. Hibachi at home in Gaithersburg brings that format to your outdoor space with the full setup, dual-station capacity for large groups, and a live-fire cooking performance that the whole guest list experiences together.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Gaithersburg graduation and milestone events over 25 guests — the standard here — we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Gaithersburg MCPS graduation weekends (May–June) book 2–3 weeks ahead — reserve 3–4 weeks ahead for Saturday commencement events. Serving Gaithersburg and Montgomery County — Rockville, Germantown, North Potomac, Montgomery Village, Clarksburg, Darnestown, and surrounding I-270 corridor communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── Main city data function ───────────────────────────────────────────────────
export function getMarylandCityData(citySlug, cityName) {
  const major       = MD_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getMDVariantIndex(citySlug)
  const theme       = MD_IMAGE_THEMES[v]
  const displayName = cityName

  return {
    cityName:     displayName,
    stateName:    'Maryland',
    stateAbbr:    'MD',
    stateSlug:    'maryland',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: MD_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: MD_NEARBY_MAJOR[v],
    localHighlights:   MD_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: MD_OCCASIONS[v],
    faqSet:            MD_FAQ_SETS[v](displayName),
    testimonials:      MD_TESTIMONIALS[v],
    // INTRO_VARIANTS: 273–278 = MD generic, 279–296 = MD city-specific
    uniqueIntroVariant:  (major?.profileIdx != null) ? 279 + major.profileIdx : 273 + v,
    uniqueWhyUsVariant:  v % 5,
    // CLOSING_VARIANTS: 273–278 = MD generic, 279–296 = MD city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 279 + major.profileIdx : 273 + v,
    // H1 prefix for CityHero
    heroH1Prefix: major?.profileIdx != null
      ? MD_PROFILE_H1_PREFIXES[major.profileIdx]
      : MD_THEME_H1_PREFIXES[v],
    // Custom meta overrides
    ...(MD_CUSTOM_META[citySlug]
      ? { metaTitle: MD_CUSTOM_META[citySlug].title, metaDescription: MD_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getMdHowItWorks(citySlug) {
  const major = MD_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMDVariantIndex(citySlug)
  return MD_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getMdSectionVariant(citySlug) {
  const major = MD_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMDVariantIndex(citySlug)
  return MD_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getMdCityImage(citySlug) {
  return MD_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getMdSupportImages(citySlug) {
  if (MD_SUPPORT_IMAGES[citySlug]) return MD_SUPPORT_IMAGES[citySlug]
  const major = MD_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMDVariantIndex(citySlug)
  return MD_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getMdBlogPosts(variant, count) {
  return MD_BLOG_POSTS[variant % MD_BLOG_POSTS.length].slice(0, count)
}
