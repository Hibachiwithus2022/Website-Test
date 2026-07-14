// =============================================================================
// lib/marylandData.js — Maryland (All Batches Complete)
// 18 cities · 6 geographic themes
// Theme 0: DC Corridor Luxury (Bethesda, Potomac, Chevy Chase)
// Theme 1: Montgomery County Diverse & Tech (Rockville, Gaithersburg, Germantown)
// Theme 2: Howard County & Inner Suburbs (Columbia, Ellicott City, Owings Mills)
// Theme 3: Baltimore Metro (Baltimore, Towson)
// Theme 4: Capital & Southern Maryland (Annapolis, Bowie, Frederick, Waldorf, Severna Park)
// Theme 5: Chesapeake Bay & Eastern Shore (Ocean City, St. Michaels)
//
// INTRO_VARIANTS indices:  273–278 MD generic · 279–296 MD city-specific (profileIdx 0–17)
// CLOSING_VARIANTS indices: 273–278 MD generic · 279–296 MD city-specific (profileIdx 0–17)
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
  // Batch 2 — Howard County + Baltimore Metro
  'columbia':       { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi chef at a Columbia MD graduation party` },
  'ellicott-city':  { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at an Ellicott City MD milestone event` },
  'owings-mills':   { src: '/pics/backyard-hibachi-3.jpg', alt: (city) => `Private hibachi chef at an Owings Mills MD private event` },
  'towson':         { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Hibachi catering at a Towson MD corporate or graduation event` },
  'baltimore':      { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Hibachi catering at a Baltimore MD corporate event` },
  // Batch 3 — Capital & Southern Maryland
  'annapolis':      { src: '/pics/private-hibachi.jpg',    alt: (city) => `Private hibachi chef at an Annapolis MD waterfront event` },
  'bowie':          { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Bowie MD graduation party` },
  'frederick':      { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi chef at a Frederick MD private event` },
  'waldorf':        { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Waldorf MD private event` },
  // Batch 4 — Eastern Shore + Severna Park + Germantown
  'ocean-city':     { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at an Ocean City MD beach house event` },
  'st-michaels':    { src: '/pics/private-hibachi.jpg',    alt: (city) => `Private hibachi chef at a St. Michaels MD Chesapeake Bay event` },
  'severna-park':   { src: '/pics/private-hibachi.jpg',    alt: (city) => `Private hibachi chef at a Severna Park MD waterfront event` },
  'germantown':     { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Germantown MD graduation party` },
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
  // Batch 2 — Howard County + Baltimore Metro
  'columbia': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Graduation hibachi party in Columbia, MD`,
      caption:    'Columbia Howard County graduation season',
      trustBadge: 'Trusted by Howard County Families',
      intro:      (city) => `Columbia hosts — the diverse, high-achieving community in Wilde Lake, River Hill, and Owen Brown that has made Howard County the highest-median-income county in America, the South Asian and East Asian graduation families whose May celebrations draw extended family from across the East Coast, and the Columbia Association neighborhoods where community gathering and milestone celebration are genuinely woven into the culture — choose private hibachi for the graduation parties and milestone dinners where every guest at the backyard matters as much as the occasion itself. See what Columbia hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Columbia, MD`,
      caption: 'Columbia graduation dinner standard',
    },
  },
  'ellicott-city': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi event in Ellicott City, MD`,
      caption:    'Ellicott City Howard County entertaining',
      trustBadge: 'Highly Rated by Howard County Hosts',
      intro:      (city) => `Ellicott City hosts — the accomplished residential community in the Turf Valley, Chatham, and Centennial Park neighborhoods, the high-income Howard County families whose graduation and milestone culture is shaped by the same South Asian and diverse community that has made Ellicott City one of the most sought-after addresses in Maryland, and the multi-generational extended families who gather here from across the state for the occasion that counts — choose private hibachi for the dinners where everyone matters and no one gets a separate table. See what Ellicott City hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Ellicott City, MD`,
      caption: 'Ellicott City milestone dinner standard',
    },
  },
  'owings-mills': {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Private hibachi event in Owings Mills, MD`,
      caption:    'Owings Mills private entertaining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Owings Mills hosts — the Jewish and diverse professional community in the Caves Valley and Greenspring neighborhoods, the Baltimore County suburban families whose graduation season and milestone occasions are the biggest entertaining events of the year, and the households that choose Owings Mills specifically because the neighborhood and property match the standard they expect for every occasion — choose private hibachi for the dinners that the format needs to match. See what Owings Mills hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Owings Mills, MD`,
      caption: 'Owings Mills private dining standard',
    },
  },
  'towson': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Corporate or graduation hibachi event in Towson, MD`,
      caption:    'Towson corporate and graduation entertaining',
      trustBadge: 'Trusted by Maryland Businesses & Families',
      intro:      (city) => `Towson hosts — the Towson University graduation families who make the Towson and Timonium corridor one of the most active university graduation markets in Maryland, the corporate and professional community in the Towson financial district, and the Baltimore County residential families in the Ruxton, Sherwood, and Lutherville neighborhoods who mark their milestones with the format and quality that the occasion genuinely deserves — choose hibachi catering in Towson for the team dinners and graduation events that should feel as good as the occasion they mark. See what Towson hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Towson, MD`,
      caption: 'Towson corporate and graduation standard',
    },
  },
  'baltimore': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Hibachi catering at a Baltimore MD corporate event`,
      caption:    'Baltimore corporate and private dining',
      trustBadge: 'Trusted by Baltimore Businesses & Families',
      intro:      (city) => `Baltimore hosts — the Johns Hopkins and UMMC research and medical community, the Inner Harbor financial and legal corridor, the Fells Point and Canton residential neighborhoods whose bachelorette weekends and birthday milestone culture make weekend Baltimore one of Maryland's strongest private event markets, and the university graduation families from Towson, Loyola, Morgan State, and UMBC who make May and June the most competitive event-booking weeks in the city — choose hibachi catering in Baltimore for the occasions where the setting should be extraordinary and the dinner should match it. See what Baltimore hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Baltimore, MD`,
      caption: 'Baltimore private dining standard',
    },
  },
  // Batch 3 — Capital & Southern Maryland
  'annapolis': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Waterfront hibachi dinner in Annapolis, MD`,
      caption:    'Annapolis waterfront entertaining',
      trustBadge: 'Five-Star Waterfront Events',
      intro:      (city) => `Annapolis hosts — the Naval Academy families whose graduation weekend means every restaurant in the city is full and the wisest hosts are at home with a private chef at the waterfront property, the Severn River estate households and the Chesapeake Bay dock-side community whose anniversary and milestone culture is inseparable from the extraordinary setting they chose when they moved here, and the bachelorette weekends and corporate groups that come to Annapolis from Washington DC for the specific combination of the Chesapeake waterfront and the private dining format that no downtown Annapolis restaurant can replicate. Kent Island, the Bay Bridge corridor, and the broader Chesapeake waterfront community are all within our service area. See what Annapolis hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Annapolis, MD`,
      caption: 'Annapolis waterfront dining standard',
    },
  },
  'bowie': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi event in Bowie, MD`,
      caption:    'Bowie private entertaining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Bowie hosts — the diverse Prince George's County community in the Belair and Pointer Ridge neighborhoods, the professional families who chose Bowie for its combination of suburban quality and easy access to both Annapolis and the National Harbor entertainment corridor along the Potomac, and the graduation families whose May celebration draws extended family from across the DC-Baltimore-Virginia triangle — choose private hibachi for the dinners where the occasion and the setting deserve the format. See what Bowie hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Bowie, MD`,
      caption: 'Bowie graduation dinner standard',
    },
  },
  'frederick': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi event in Frederick, MD`,
      caption:    'Frederick Western Maryland entertaining',
      trustBadge: 'Trusted by Frederick County Hosts',
      intro:      (city) => `Frederick hosts — the historic downtown community that has built one of the strongest independent dining and arts scenes in Western Maryland, the growing residential neighborhoods where the DC and Baltimore commuter families who have chosen Frederick mark their graduation seasons and milestone occasions with genuine intention, and the University of Maryland and Hood College graduation families whose May events make spring the busiest entertaining season in Frederick County — choose private hibachi for the dinners that the Frederick outdoor setting and the Frederick occasion both deserve. See what Frederick hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Frederick, MD`,
      caption: 'Frederick private dining standard',
    },
  },
  'waldorf': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi event in Waldorf, MD`,
      caption:    'Waldorf Southern Maryland entertaining',
      trustBadge: 'Highly Rated by Southern Maryland Hosts',
      intro:      (city) => `Waldorf hosts — the Southern Maryland military community whose homecoming celebrations are some of the most emotionally significant occasions we serve in Maryland, the Charles County residential families whose graduation culture has grown significantly as Waldorf has become one of the strongest residential growth markets in the state, and the Prince George's County corridor between Waldorf and the National Harbor whose corporate and professional community marks its milestones with increasing ambition — choose private hibachi for the dinners where the celebration is the point. See what Waldorf hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Waldorf, MD`,
      caption: 'Waldorf private dining standard',
    },
  },
  // Batch 4 — Eastern Shore + Severna Park + Germantown
  'ocean-city': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Beach house hibachi dinner in Ocean City, MD`,
      caption:    'Ocean City beach house entertaining',
      trustBadge: 'Trusted by OC Vacation Groups',
      intro:      (city) => `Ocean City hosts — the bachelorette groups from DC and Baltimore who book the Coastal Highway condos and north OC vacation rentals for the weekend and want the dinner to be as memorable as the setting, the multi-family beach house reunions where the whole extended family is finally in the same place at the same time, and the couples who drove to Ocean City for a milestone anniversary weekend and want the private chef at the rental rather than another crowded Boardwalk restaurant — choose private hibachi in Ocean City because the chef comes to the vacation property, the group never has to leave, and the dinner becomes the evening everyone talks about on the drive home. See what Ocean City vacation groups are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Ocean City, MD`,
      caption: 'Ocean City vacation dining standard',
    },
  },
  'st-michaels': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Chesapeake Bay hibachi dinner in St. Michaels, MD`,
      caption:    'St. Michaels Chesapeake Bay entertaining',
      trustBadge: 'Five-Star Eastern Shore Events',
      intro:      (city) => `St. Michaels hosts — the couples who chose this Talbot County waterfront town for the anniversary weekend because the Chesapeake Bay setting is extraordinary and the dinner should match it, the wine and sailing culture that makes St. Michaels one of the most distinctive vacation destinations on the East Coast, and the Kent Island and Bay Bridge corridor groups who use St. Michaels as the anchor for a weekend on the water. The Chesapeake Bay waterfront communities throughout Talbot County — Easton, Tilghman Island, Oxford — are all within our Eastern Shore service area. See what St. Michaels hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in St. Michaels, MD`,
      caption: 'St. Michaels waterfront dining standard',
    },
  },
  'severna-park': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Waterfront hibachi dinner in Severna Park, MD`,
      caption:    'Severna Park waterfront entertaining',
      trustBadge: 'Highly Rated by Chesapeake Bay Hosts',
      intro:      (city) => `Severna Park hosts — the Magothy River and Severn River waterfront community where the estate properties and dock-side decks represent some of the most desirable private entertaining settings in Anne Arundel County, the high-income professional and military community that has made Severna Park one of the top-ranked suburban ZIP codes in Maryland, and the Annapolis-adjacent residential households whose graduation season and milestone occasions draw extended family from across the DC and Baltimore metro areas — choose private hibachi in Severna Park for the waterfront dinners where the setting and the occasion deserve the best available format. See what Severna Park hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Severna Park, MD`,
      caption: 'Severna Park waterfront dining standard',
    },
  },
  'germantown': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Graduation hibachi party in Germantown, MD`,
      caption:    'Germantown MCPS graduation season',
      trustBadge: 'Trusted by Montgomery County Families',
      intro:      (city) => `Germantown hosts — the South Asian, East Asian, and diverse community along the Germantown and Clarksburg corridor of the I-270 tech and biotech spine, the MCPS graduation families in the Church Road and Waring Station neighborhoods whose May Saturday graduation parties draw the largest extended family gatherings in Montgomery County, and the growing Clarksburg community to the north where the newest development in the county is home to the next generation of Maryland's accomplished diverse professional families — choose private hibachi for the graduation dinners and milestone celebrations where the full guest list at the same grill is the only format that makes sense. See what Germantown hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Germantown, MD`,
      caption: 'Germantown graduation dinner standard',
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
  'rockville':      { v: 1, profileIdx: 3, nearby: ['Gaithersburg','Bethesda','Germantown','North Potomac','Darnestown','Montgomery Village'] },
  'gaithersburg':   { v: 1, profileIdx: 4, nearby: ['Rockville','Germantown','North Potomac','Montgomery Village','Clarksburg','Darnestown'] },
  // ── Theme 2 — Howard County & Inner Suburbs ───────────────────────────────
  'columbia':       { v: 2, profileIdx: 5, nearby: ['Ellicott City','Owings Mills','Laurel','Clarksville','Fulton','Elkridge'] },
  'ellicott-city':  { v: 2, profileIdx: 6, nearby: ['Columbia','Owings Mills','Catonsville','Pikesville','Maple Lawn','Clarksville'] },
  'owings-mills':   { v: 2, profileIdx: 7, nearby: ['Towson','Pikesville','Timonium','Reisterstown','Columbia','Ellicott City'] },
  // ── Theme 3 — Baltimore Metro ─────────────────────────────────────────────
  'towson':         { v: 3, profileIdx: 8,  nearby: ['Baltimore','Pikesville','Timonium','Lutherville','Cockeysville','Owings Mills'] },
  'baltimore':      { v: 3, profileIdx: 9,  nearby: ['Towson','Columbia','Ellicott City','Owings Mills','Catonsville','Pikesville'] },
  // ── Theme 4 — Capital & Southern Maryland ────────────────────────────────
  'annapolis':      { v: 4, profileIdx: 10, nearby: ['Severna Park','Arnold','Edgewater','Crofton','Glen Burnie','Stevensville'] },
  'bowie':          { v: 4, profileIdx: 11, nearby: ['Annapolis','Severna Park','Crofton','Upper Marlboro','Largo','Greenbelt'] },
  'frederick':      { v: 4, profileIdx: 12, nearby: ['Germantown','Gaithersburg','Rockville','Hagerstown','Clarksburg','Damascus'] },
  'waldorf':        { v: 4, profileIdx: 13, nearby: ['Bowie','Annapolis','Upper Marlboro','La Plata','Clinton','Oxon Hill'] },
  'severna-park':   { v: 4, profileIdx: 16, nearby: ['Annapolis','Arnold','Bowie','Crofton','Pasadena','Glen Burnie'] },
  // ── Theme 5 — Chesapeake Bay & Eastern Shore ─────────────────────────────
  'ocean-city':     { v: 5, profileIdx: 14, nearby: ['St. Michaels','Annapolis','Bethesda','Rockville','Baltimore'] },
  'st-michaels':    { v: 5, profileIdx: 15, nearby: ['Ocean City','Annapolis','Bethesda','Baltimore','Rockville'] },
  // ── Theme 1 — Montgomery County (Batch 4) ────────────────────────────────
  'germantown':     { v: 1, profileIdx: 17, nearby: ['Gaithersburg','Rockville','Clarksburg','Darnestown','North Potomac','Montgomery Village'] },
}

// ── Nearby major cities by theme (only link to pages that exist) ──────────────
const MD_NEARBY_MAJOR = [
  ['Bethesda', 'Potomac', 'Chevy Chase', 'Rockville', 'Gaithersburg'],                    // v=0 DC Luxury
  ['Rockville', 'Gaithersburg', 'Bethesda', 'Chevy Chase', 'Potomac'],                    // v=1 Montgomery County
  ['Columbia', 'Ellicott City', 'Owings Mills', 'Bethesda', 'Rockville'],                 // v=2 Howard County
  ['Baltimore', 'Towson', 'Columbia', 'Ellicott City', 'Bethesda'],                       // v=3 Baltimore Metro
  ['Annapolis', 'Bowie', 'Severna Park', 'Frederick', 'Waldorf'],                          // v=4 Capital/Southern Maryland
  ['Ocean City', 'St. Michaels', 'Annapolis', 'Baltimore', 'Bethesda'],                   // v=5 Chesapeake Bay & Eastern Shore
]

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const MD_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in', // 0  — Bethesda
  'Private Hibachi Chef in', // 1  — Potomac
  'Hibachi at Home in',      // 2  — Chevy Chase
  'Hibachi at Home in',      // 3  — Rockville
  'Hibachi at Home in',      // 4  — Gaithersburg
  'Hibachi at Home in',      // 5  — Columbia
  'Hibachi at Home in',      // 6  — Ellicott City
  'Hibachi at Home in',      // 7  — Owings Mills
  'Hibachi Catering in',     // 8  — Towson
  'Hibachi Catering in',     // 9  — Baltimore
  'Private Hibachi Chef in', // 10 — Annapolis
  'Hibachi at Home in',      // 11 — Bowie
  'Hibachi at Home in',      // 12 — Frederick
  'Hibachi at Home in',      // 13 — Waldorf
  'Private Hibachi Chef in', // 14 — Ocean City
  'Private Hibachi Chef in', // 15 — St. Michaels
  'Private Hibachi Chef in', // 16 — Severna Park
  'Hibachi at Home in',      // 17 — Germantown
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
  'columbia': {
    title: 'Hibachi at Home in Columbia, MD | Graduation & Milestone Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Columbia, MD for graduation parties, milestone celebrations, and family events in Howard County. Dual stations for 25+ guests. Full setup & cleanup. From $60/adult.',
  },
  'ellicott-city': {
    title: 'Hibachi at Home in Ellicott City, MD | Graduation & Family Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Ellicott City, MD for graduation parties, birthday milestones, and family celebrations in Howard County. Full setup & cleanup. From $60/adult.',
  },
  'owings-mills': {
    title: 'Hibachi at Home in Owings Mills, MD | Private Events & Milestone Dinners | Hibachi Connect',
    desc:  'Book a private hibachi chef in Owings Mills, MD for graduation parties, private dinners, and milestone events. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'towson': {
    title: 'Hibachi Catering in Towson, MD | Corporate & Graduation Events | Hibachi Connect',
    desc:  'Book hibachi catering in Towson, MD for corporate team dinners, Towson University graduation events, and private parties. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'baltimore': {
    title: 'Hibachi Catering in Baltimore, MD | Corporate & Private Events | Hibachi Connect',
    desc:  'Book hibachi catering in Baltimore, MD for corporate team dinners, client appreciation events, and graduation parties. Johns Hopkins, UMMC, Inner Harbor corridor. Full setup & cleanup. From $60/adult.',
  },
  'annapolis': {
    title: 'Private Hibachi Chef in Annapolis, MD | Waterfront & USNA Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Annapolis, MD for waterfront estate dinners, Naval Academy graduation events, and Chesapeake Bay entertaining. Lobster tail & filet mignon upgrades. From $60/adult.',
  },
  'bowie': {
    title: 'Hibachi at Home in Bowie, MD | Graduation & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Bowie, MD for graduation parties, private dinners, and community events. Near National Harbor and Annapolis. Full setup & cleanup. From $60/adult.',
  },
  'frederick': {
    title: 'Hibachi at Home in Frederick, MD | Private Events & Graduation Parties | Hibachi Connect',
    desc:  'Book a private hibachi chef in Frederick, MD for graduation parties, birthday milestones, and family events in Western Maryland. Full setup & cleanup. From $60/adult.',
  },
  'waldorf': {
    title: 'Hibachi at Home in Waldorf, MD | Private Events & Graduation Parties | Hibachi Connect',
    desc:  'Book a private hibachi chef in Waldorf, MD for graduation parties, military homecoming events, and private celebrations in Southern Maryland. Full setup & cleanup. From $60/adult.',
  },
  'severna-park': {
    title: 'Private Hibachi Chef in Severna Park, MD | Waterfront & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Severna Park, MD for waterfront estate dinners, private events, and milestone celebrations near Annapolis and the Chesapeake Bay. From $60/adult.',
  },
  'ocean-city': {
    title: 'Private Hibachi Chef in Ocean City, MD | Beach House & Vacation Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Ocean City, MD for beach house dinners, bachelorette weekends, and vacation rental group events. Chef travels to your rental. Full cleanup. From $60/adult.',
  },
  'st-michaels': {
    title: 'Private Hibachi Chef in St. Michaels, MD | Chesapeake Bay Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in St. Michaels, MD for Chesapeake Bay waterfront dinners, cottage events, and vacation rental group gatherings. Full setup & cleanup. From $60/adult.',
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

// ── City-specific closings (MD city-specific 279–296, all batches) ─────────────
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
  // 284 — Columbia (profileIdx 5)
  {
    headline: () => `Columbia's Best Graduation Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Columbia graduation party or Howard County milestone event. Dual stations for 25+ guests. Full setup and cleanup. From $60/adult.`,
    urgency:  `Columbia graduation weekends (May–June) and weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 285 — Ellicott City (profileIdx 6)
  {
    headline: () => `Ellicott City's Best Milestone Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Ellicott City graduation party, family celebration, or milestone event in Howard County. Full setup and cleanup. From $60/adult.`,
    urgency:  `Ellicott City graduation weekends (May–June) and weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 286 — Owings Mills (profileIdx 7)
  {
    headline: () => `Owings Mills' Best Private Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Owings Mills graduation party, private dinner, or milestone event. Dual stations available for 25+ guests. Full setup and cleanup. From $60/adult.`,
    urgency:  `Owings Mills weekend events and graduation parties book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 287 — Towson (profileIdx 8)
  {
    headline: () => `Towson's Corporate & Graduation Dinner Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Towson corporate dinner, Towson University graduation event, or private gathering. Full setup and cleanup. From $60/adult.`,
    urgency:  `Towson graduation weekends (May–June) and corporate events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 288 — Baltimore (profileIdx 9)
  {
    headline: () => `Baltimore's Private Dining Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Baltimore corporate team dinner, graduation party, or private event. Dual stations for 25+ guests. Full setup and cleanup. From $60/adult.`,
    urgency:  `Baltimore graduation season (May–June) and weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 289 — Annapolis (profileIdx 10)
  {
    headline: () => `The Annapolis Waterfront Dinner Your Occasion Deserves — Reserve Now`,
    sub:      () => `A certified hibachi chef at your Annapolis waterfront property. Lobster tail, filet mignon, premium proteins. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `USNA graduation weekend (May) and Annapolis summer dates fill 3–4 weeks ahead. Reserve your waterfront evening now.`,
  },
  // 290 — Bowie (profileIdx 11)
  {
    headline: () => `Bowie's Best Private Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Bowie graduation party, private dinner, or milestone event. Near National Harbor and Annapolis. Full setup and cleanup. From $60/adult.`,
    urgency:  `Bowie weekend events and graduation parties book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 291 — Frederick (profileIdx 12)
  {
    headline: () => `Frederick's Best Private Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Frederick graduation party, milestone celebration, or private event in Western Maryland. Full setup and cleanup. From $60/adult.`,
    urgency:  `Frederick graduation weekends (May–June) and weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 292 — Waldorf (profileIdx 13)
  {
    headline: () => `Waldorf's Best Private Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Waldorf graduation party, military homecoming celebration, or milestone event in Southern Maryland. Full setup and cleanup. From $60/adult.`,
    urgency:  `Waldorf graduation and military homecoming events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 293 — Ocean City (profileIdx 14)
  {
    headline: () => `The Ocean City Beach House Dinner Your Weekend Deserves`,
    sub:      () => `A certified hibachi chef travels to your Ocean City vacation rental or beach house. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Ocean City summer dates fill 3–4 weeks ahead. Reserve your vacation dinner now.`,
  },
  // 294 — St. Michaels (profileIdx 15)
  {
    headline: () => `The St. Michaels Waterfront Dinner Your Weekend Deserves`,
    sub:      () => `A certified hibachi chef at your St. Michaels cottage or Chesapeake Bay waterfront property. Premium proteins, live teppanyaki, complete cleanup. From $60/adult.`,
    urgency:  `St. Michaels and Eastern Shore summer dates fill 3–4 weeks ahead. Reserve your waterfront evening now.`,
  },
  // 295 — Severna Park (profileIdx 16)
  {
    headline: () => `Severna Park's Waterfront Dining Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Severna Park waterfront estate or residential property. Premium proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Severna Park waterfront and graduation events book 3–4 weeks ahead. Reserve your date now.`,
  },
  // 296 — Germantown (profileIdx 17)
  {
    headline: () => `Germantown's Best Graduation Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Germantown MCPS graduation party or milestone celebration. Dual stations for 25+ guests. Full setup and cleanup. From $60/adult.`,
    urgency:  `Germantown MCPS graduation weekends (May–June) book 2–3 weeks ahead. Reserve your date now.`,
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

// ── City-specific intros (MD city-specific 279–296, all batches) ──────────────
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
  // 284 — Columbia (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Columbia`,
    opening:  () =>
      `Columbia is Howard County's centerpiece — one of the most intentionally planned and genuinely diverse cities in America, organized around village centers, Columbia Association community spaces, and the principle that neighbors of every background belong at the same table. That principle extends to the graduation parties and milestone dinners hosted in the Wilde Lake, River Hill, and Long Reach backyards where the May celebration for the family's graduating senior means not just the immediate household but the aunts and uncles and cousins who drove from New Jersey and the grandparents who flew from Mumbai. Howard County has the highest median household income of any county in the United States. The graduation culture here matches: dual-station hibachi setups for forty and sixty guests are among our most common Howard County bookings, because the Columbia family does not want a restaurant reservation for eight when the occasion calls for a chef performing for the whole extended family at once.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Columbia graduation events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your Columbia backyard or outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Columbia graduation weekends (May–June) book 2–3 weeks ahead — reserve 3–4 weeks ahead for Saturday commencement events. Serving Columbia and all of Howard County — Ellicott City, Owings Mills, Laurel, Clarksville, Fulton, Elkridge, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 285 — Ellicott City (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Ellicott City`,
    opening:  () =>
      `Ellicott City is the most historically rooted address in Howard County — the Old Ellicott City stone mill district and the 18th-century Main Street that draws visitors from across the state, and the Turf Valley and Centennial Park residential neighborhoods that represent some of the highest-income ZIP codes in Maryland. The graduation and milestone culture in Ellicott City is shaped by the same diverse, high-achieving community that has made Howard County the benchmark for residential excellence in the Baltimore-Washington corridor: South Asian and East Asian families who mark graduation not as an ending but as the most important celebration of the academic chapter, and the multi-generational extended family networks who gather at the Ellicott City backyard because the celebration needs to happen in a space that can hold everyone who matters. Hibachi at home in Ellicott City brings a certified teppanyaki chef to your property with the full setup, dual-station capacity for large milestone gatherings, and a live-fire cooking performance that turns any Howard County backyard into the dinner your guests plan around for years.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Ellicott City graduation and milestone events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Ellicott City graduation weekends (May–June) book 2–3 weeks ahead. Serving Ellicott City and all of Howard County — Columbia, Owings Mills, Catonsville, Clarksville, Maple Lawn, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 286 — Owings Mills (profileIdx 7)
  {
    headline: () => `Hibachi at Home in Owings Mills`,
    opening:  () =>
      `Owings Mills is Baltimore County's fastest-growing suburban market — the Metro Centre and the Owings Mills Town Center corridor where the residential development has accelerated through the last decade, and the Caves Valley and Greenspring neighborhoods where the Jewish community, the South Asian professional families, and the high-income Baltimore County households who have chosen Owings Mills for its proximity to the city and its residential quality mark their graduation seasons and milestone occasions with the full intention those events deserve. Hibachi at home in Owings Mills brings a certified teppanyaki chef to your outdoor space with the full setup, all fresh ingredients, and a live-fire cooking performance that the whole extended guest list — the family members who came from Chevy Chase and Columbia and Rockville, the friends who drove from Howard County, the neighbors who were the first phone call when the invitation list came together — can experience simultaneously at the same grill.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Owings Mills graduation and milestone events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard or outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Owings Mills weekend events and graduation parties book 2–3 weeks ahead. Serving Owings Mills and the Baltimore Metro — Towson, Pikesville, Timonium, Reisterstown, and surrounding Baltimore County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 287 — Towson (profileIdx 8)
  {
    headline: () => `Hibachi Catering in Towson`,
    opening:  () =>
      `Towson is Baltimore County's hub — the Towson Town Center retail and dining corridor that draws from all of north Baltimore County, the financial and professional district where the county government and the legal and accounting firms that serve it are concentrated, and the residential neighborhoods of Ruxton, Sherwood Forest, and Lutherville where the accomplished Baltimore professional community has lived for generations. The Towson event market is anchored by two reliable pillars: Towson University graduation, which draws thousands of families to the corridor every May, and the Baltimore corporate community that increasingly looks to private hibachi catering for the team dinners and client appreciation events that a restaurant reservation can no longer adequately serve. Hibachi catering in Towson brings a certified teppanyaki chef to your outdoor venue, corporate space, or backyard with the full setup and a live-fire cooking performance that turns any Towson gathering into the occasion the format was built for.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Towson corporate and graduation events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes at your venue or outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Towson graduation weekends (May–June) and corporate events book 2–3 weeks ahead. Serving Towson and the Baltimore Metro — Baltimore, Pikesville, Timonium, Lutherville, Cockeysville, Owings Mills, and surrounding Baltimore County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 288 — Baltimore (profileIdx 9)
  {
    headline: () => `Hibachi Catering in Baltimore`,
    opening:  () =>
      `Baltimore is Maryland's largest city and one of the most historically layered cities in the Mid-Atlantic — the Inner Harbor that transformed the city's identity as a destination, the Johns Hopkins medical and university corridor that makes Baltimore one of the top research and intellectual cities in the United States, and the neighborhoods from Fells Point and Federal Hill to Roland Park and Guilford that have defined Baltimore residential culture for generations. The Baltimore event market spans everything from corporate team dinners for Hopkins and UMMC research groups to the bachelorette weekends that fill the Canton and Fells Point rental houses on summer Friday nights to the university graduation parties for Towson, Loyola, Morgan State, UMBC, and Baltimore families who need the private chef at the Canton rental or the Roland Park backyard because the guest list does not fit at a restaurant table and the occasion does not belong in a restaurant anyway. Hibachi catering in Baltimore brings a certified teppanyaki chef to your outdoor venue, backyard, or private space with the full setup and a live-fire cooking performance calibrated for the Baltimore occasion and the Baltimore host.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Baltimore corporate and large private events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes at your venue, backyard, or outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done — your property and your rental are immaculate when the chef leaves.`,
    closing:  () =>
      `Baltimore graduation season (May–June) and weekend events book 2–3 weeks ahead. Serving Baltimore City and the Baltimore Metro — Towson, Columbia, Ellicott City, Owings Mills, Catonsville, Pikesville, and all of Baltimore County. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 289 — Annapolis (profileIdx 10)
  {
    headline: () => `Private Hibachi Chef in Annapolis`,
    opening:  () =>
      `Annapolis is Maryland's capital and its most distinctive city — the United States Naval Academy, the Chesapeake Bay waterfront that draws sailors and boaters and visitors from across the East Coast, and the State Circle neighborhood where the history of Maryland governance is still visibly present in the architecture and in the professional community that makes Annapolis home. The Naval Academy graduation weekend in May is the single most important entertaining weekend in the Annapolis calendar: every restaurant in the city is booked, hotel rooms are gone months in advance, and the family that has flown in from Seattle or Houston or Seoul to watch their midshipman graduate is staying at a property in Severna Park or Arnold or on the Severn River, and the dinner that evening needs to match the weight of the occasion. Private hibachi at your Annapolis waterfront property brings a certified teppanyaki chef with hand-selected premium proteins — lobster tail and filet mignon are the most common USNA graduation dinner choice — and a live-fire performance that holds the whole family's attention exactly as completely as the ceremony did that afternoon. Beyond the Academy, the Kent Island corridor along Route 50 on the eastern side of the Bay Bridge, the Chesapeake Bay waterfront communities of Arnold, Edgewater, and Annapolis Neck, and the broader Anne Arundel County waterfront market are all within our standard service radius. National Harbor, just twenty minutes north on the Beltway, frequently sends corporate and entertainment groups to Annapolis for the waterfront combination — and we serve both communities without distinction.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including lobster tail, filet mignon, Chilean sea bass, and premium upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your dock-side deck, Severn River terrace, or waterfront outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done — your waterfront property is immaculate when the chef leaves.`,
    closing:  () =>
      `USNA graduation weekend (May) and Annapolis summer waterfront events book 3–4 weeks ahead. Book in March or April for a May USNA graduation event. Serving Annapolis and the Chesapeake Bay community — Severna Park, Arnold, Edgewater, Crofton, Kent Island, and all of Anne Arundel County. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 290 — Bowie (profileIdx 11)
  {
    headline: () => `Hibachi at Home in Bowie`,
    opening:  () =>
      `Bowie is one of the largest cities in Prince George's County and one of the most demographically accomplished communities in the DC Maryland suburbs — the Belair and Pointer Ridge residential neighborhoods where the African American and diverse professional community that has made Bowie home built one of the strongest community traditions in the county, the Bowie State University campus that anchors the city's academic identity and generates a consistent graduation market, and the location that makes Bowie uniquely positioned at the intersection of every major Maryland entertainment and destination corridor: Annapolis is twenty minutes east, the National Harbor on the Potomac is twenty minutes north, Washington DC is thirty minutes west. The families and professionals who have chosen Bowie understand the geography perfectly. Hibachi at home in Bowie brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance built for the graduation parties, family reunions, and milestone celebrations that the Bowie community marks with genuine intention. The National Harbor corporate and entertainment community is also well within our service radius — groups who have driven from National Harbor for a Prince George's County gathering will find Bowie private hibachi equally convenient.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Bowie graduation and milestone events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard or outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Bowie weekend events and graduation parties book 2–3 weeks ahead. Serving Bowie and Prince George's County — Annapolis, Crofton, Upper Marlboro, Largo, Greenbelt, and surrounding communities. Also serving the National Harbor and Waldorf corridors. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 291 — Frederick (profileIdx 12)
  {
    headline: () => `Hibachi at Home in Frederick`,
    opening:  () =>
      `Frederick is Western Maryland's most vibrant city and one of the fastest-growing residential markets in the state — the Carroll Creek Linear Park and the Patrick Street independent dining scene that have made downtown Frederick a genuine destination, the MARC train corridor that makes the city a viable commute base for DC and Baltimore professionals who have chosen Frederick for its quality of life, its genuine community character, and the historic architecture that sets it apart from every other Maryland suburb. The Frederick event market is built around three anchors: the University of Maryland at Shady Grove and Hood College graduation families whose May ceremonies make the spring the busiest private entertaining season in Frederick County, the DC and Baltimore commuter households who have brought their celebration culture with them when they relocated west, and the Catoctin Mountain and western Maryland agricultural community whose farm-to-table outdoor entertaining philosophy makes a private hibachi chef at the Frederick backyard both philosophically consistent and genuinely excellent. Hibachi at home in Frederick brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any Frederick backyard into the dinner your guest list was already hoping the evening would be.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Frederick graduation and milestone events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard or outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Frederick graduation weekends (May–June) and weekend events book 2–3 weeks ahead. Serving Frederick and Western Maryland — Germantown, Gaithersburg, Rockville, Hagerstown, Clarksburg, Damascus, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 292 — Waldorf (profileIdx 13)
  {
    headline: () => `Hibachi at Home in Waldorf`,
    opening:  () =>
      `Waldorf is Southern Maryland's largest city and one of the most rapidly growing residential markets in the DC suburb corridor — the Charles County communities where the military families from NAS Patuxent River, Joint Base Andrews, and the broader Southern Maryland defense community have put down roots, the Prince George's County border neighborhoods where the Waldorf corridor connects to the National Harbor and the broader DC Metro entertainment market, and the residential development along Route 301 that has brought tens of thousands of new households to a city that is evolving its identity from bedroom community to genuine urban destination. The Waldorf event market is shaped significantly by its military character: homecoming celebrations, deployment farewell dinners, retirement parties, and the milestone occasions that military families mark with the full weight and emotional significance those moments deserve are among our most frequent and most meaningful Southern Maryland bookings. Hibachi at home in Waldorf brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance calibrated for every occasion from the graduation party to the homecoming dinner — the military homecoming where the family has been counting down the days and the evening should reflect everything that wait meant.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Waldorf milestone and graduation events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard or outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Waldorf graduation and homecoming events book 2–3 weeks ahead. Serving Waldorf and Southern Maryland — Bowie, Annapolis, Upper Marlboro, La Plata, Clinton, Oxon Hill, and the National Harbor corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 293 — Ocean City (profileIdx 14)
  {
    headline: () => `Private Hibachi Chef in Ocean City`,
    opening:  () =>
      `Ocean City is Maryland's most visited beach destination — the Boardwalk that runs for three miles along the Atlantic, the Coastal Highway that stretches from the inlet to the Delaware border, and the vacation rental and condo market that fills every summer weekend from Memorial Day through Labor Day with groups from Baltimore, Washington DC, Northern Virginia, and the Philadelphia corridor who have come to the Maryland shore for exactly the kind of outdoor group experience that the beach town format is built for. The bachelorette weekend that rents the condo at 118th Street for four nights. The multi-family reunion that found a beach house with enough bedrooms for thirty people. The anniversary couple that wanted the Shore house and the water view instead of a hotel room, and wants the Thursday dinner at the property to be the one the whole weekend is organized around. Private hibachi at your Ocean City vacation rental or beach house brings a certified teppanyaki chef to your deck, patio, or outdoor space with the full setup and a live-fire cooking performance that removes every logistical obstacle between your group and a genuinely extraordinary dinner. No parking on 94th Street. No waiting for a table at Fager's Island. The chef comes to the rental, performs for your group, and leaves the property immaculate when dinner is done.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20–30 minutes on your deck, patio, or outdoor space at the rental. The performance runs 90–120 minutes from first flame to final plate. For vacation groups over 25, we bring dual chef stations. Full cleanup when dinner is done — your rental is immaculate when the chef leaves.`,
    closing:  () =>
      `Ocean City summer events book 3–4 weeks ahead — peak July and August dates fill fastest. Travel fees may apply for specific locations — always disclosed upfront before you confirm. Serving Ocean City and the Maryland shore — Fenwick Island, Bethany Beach, and the Delaware shore are also within reach. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 294 — St. Michaels (profileIdx 15)
  {
    headline: () => `Private Hibachi Chef in St. Michaels`,
    opening:  () =>
      `St. Michaels is the Chesapeake Bay's most storied waterfront town — the Chesapeake Bay Maritime Museum, the harbor where the skipjacks still sail, the Main Street galleries and restaurants that draw visitors from across the Mid-Atlantic, and the cottage and estate rental market that brings the most intentional vacation guests on the Chesapeake: couples who are celebrating something, groups who want the Bay and the Maryland countryside together, families who return to the same Talbot County property every summer because the setting cannot be replicated anywhere else on the East Coast. Private hibachi at your St. Michaels cottage, waterfront estate, or vacation rental brings a certified teppanyaki chef to your deck or outdoor space with hand-selected premium proteins — lobster tail paired with filet mignon is the most common St. Michaels choice — and a live-fire performance that pairs as naturally with a 2023 Robert Morris Cab as it does with a St. Michaels sunset on the Miles River. Kent Island, just fifteen minutes west across the Chester River, and the broader Chesapeake waterfront communities of Easton, Tilghman Island, and Oxford are all within our Eastern Shore service radius.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including lobster tail, filet mignon, Chilean sea bass, and premium upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your cottage deck, estate terrace, or waterfront outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `St. Michaels summer events book 3–4 weeks ahead — peak season fills fastest. Travel fees may apply for remote cottage or island locations — always disclosed upfront. Serving St. Michaels, Kent Island, Easton, Tilghman Island, Oxford, and the full Chesapeake Bay Eastern Shore. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 295 — Severna Park (profileIdx 16)
  {
    headline: () => `Private Hibachi Chef in Severna Park`,
    opening:  () =>
      `Severna Park is one of Anne Arundel County's most prestigious and most waterfront-oriented residential communities — the Magothy River estates and the Severn River properties where the boat lifts and dock-side decks are as central to the residential identity as the houses themselves, the Chartwell Golf Club and the Chartwell and Round Bay neighborhoods where the professional and executive community that has chosen Severna Park for its combination of Annapolis proximity and residential exclusivity marks its graduation seasons and milestone occasions with the full quality those events deserve. The Naval Academy connection is real here: Severna Park is one of the most common home addresses for USNA faculty families, and the USNA graduation weekend in May — when every Annapolis restaurant is booked and the families who flew in from across the country need the dinner that evening to match the ceremony that afternoon — is one of the most important booking weekends we serve in Maryland. Private hibachi at your Severna Park waterfront property or residential estate brings a certified teppanyaki chef with hand-selected premium proteins, the full setup, and a live-fire performance calibrated for the Anne Arundel County waterfront host and their guests.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including lobster tail, filet mignon, and Chilean sea bass — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your Magothy or Severn River dock-side deck, rear terrace, or waterfront outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Severna Park waterfront and graduation events book 3–4 weeks ahead. USNA graduation weekend (May) fills earliest. Serving Severna Park and all of Anne Arundel County — Annapolis, Arnold, Pasadena, Crofton, Glen Burnie, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 296 — Germantown (profileIdx 17)
  {
    headline: () => `Hibachi at Home in Germantown`,
    opening:  () =>
      `Germantown is Montgomery County's third-largest city and one of the most ethnically diverse communities in Maryland — the South Asian, East Asian, Latino, and African American families who have built a genuinely multicultural community along the Germantown Road and Crystal Rock Drive corridors, the biotech and government professional households whose careers along the I-270 tech corridor have brought them to Germantown precisely because the community matches the quality of their professional lives, and the MCPS graduation families whose May Saturdays in Germantown operate at the same scale and intention as the graduation culture throughout the rest of Montgomery County. The Clarksburg neighborhoods to the north — one of the newest and fastest-growing planned communities in Montgomery County — are also home to the next generation of the county's diverse professional families, and many of their graduation and milestone events fall within Germantown's service radius. Hibachi at home in Germantown brings a certified teppanyaki chef to your outdoor space with the full setup, dual-station capacity for large milestone gatherings, and a live-fire cooking performance that turns any Germantown backyard into the graduation dinner the whole guest list — from the grandparents who traveled from overseas to the friends from the Clarksburg neighborhood — experiences together.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Germantown graduation and milestone events over 25 guests — the standard here — we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard or outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Germantown MCPS graduation weekends (May–June) book 2–3 weeks ahead. Reserve 3–4 weeks ahead for Saturday commencement events. Serving Germantown and all of Montgomery County — Gaithersburg, Rockville, Clarksburg, North Potomac, Darnestown, Montgomery Village, and surrounding I-270 corridor communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
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
