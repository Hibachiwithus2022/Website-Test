// =============================================================================
// lib/virginiaData.js — Virginia Expansion (Batch 1)
// 5 cities · 6 geographic themes
// Theme 0: NoVA Luxury (McLean, Leesburg future)
// Theme 1: NoVA Urban/Corporate (Arlington, Alexandria, Reston, Herndon, Fairfax)
// Theme 2: Richmond Metro (Richmond, Short Pump, Midlothian, Fredericksburg)
// Theme 3: Hampton Roads (Virginia Beach, Chesapeake, Norfolk, Newport News)
// Theme 4: Wine Country & Historic (Charlottesville, Williamsburg, Winchester)
// Theme 5: Blue Ridge & Western (Roanoke, Blacksburg)
//
// INTRO_VARIANTS indices:  218–223 VA generic · 224–228 VA city-specific
// CLOSING_VARIANTS indices: 218–223 VA generic · 224–228 VA city-specific
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getVAVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const VA_HERO_SUBTITLES = [
  (city) => `Estate Entertaining · Embassy Events · Executive Private Dinners · Serving ${city} & Northern Virginia`,
  (city) => `Corporate Team Dinners · Tech Corridor Events · Government & Military Entertaining · Serving ${city} & NoVA`,
  (city) => `Backyard Celebrations · Graduation Parties · Family Milestones · Serving ${city} & the Richmond Metro`,
  (city) => `Waterfront Events · Military Family Milestones · Backyard Dining · Serving ${city} & Hampton Roads`,
  (city) => `Wine Country Entertaining · Historic Estate Dining · Private Chef Experiences · Serving ${city} & Central Virginia`,
  (city) => `Mountain Retreat Dining · University Events · Backyard Celebrations · Serving ${city} & Western Virginia`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const VA_LOCAL_HIGHLIGHTS = [
  // Theme 0 — NoVA Luxury
  (city) => [
    `Ultra-premium estate entertaining for ${city}'s most discerning hosts`,
    'Perfect for embassy staff, C-suite executives, and K Street professionals',
    `Filet mignon, lobster tail, and premium protein upgrades for ${city} estate events`,
    `McLean and Great Falls properties with 1+ acre lots — ideal private dining setups`,
    `NoVA luxury events book 3–4 weeks ahead — spring and summer fill fastest`,
    'Certified teppanyaki chef, full premium setup, and complete cleanup included',
  ],
  // Theme 1 — NoVA Urban/Corporate
  (city) => [
    `Corporate team dinners and client entertainment throughout the ${city} corridor`,
    'Pentagon civilian staff, defense contractors, tech companies, and government agencies',
    `Minutes from the Tysons corridor — the heart of Northern Virginia professional life`,
    `${city} corporate events and weekend gatherings book 2–4 weeks ahead`,
    'Ideal for suburban backyards, townhouse patios, and corporate outdoor spaces',
    'Premium proteins, full live teppanyaki performance, and complete setup and cleanup',
  ],
  // Theme 2 — Richmond Metro
  (city) => [
    `Backyard hibachi for ${city}'s growing family and professional community`,
    'Perfect for graduation parties, birthday milestones, and family reunions',
    `Short Pump, Midlothian, and Richmond suburbs all served with no extra travel fee`,
    `Graduation season (May–June) and spring events book 3–4 weeks ahead in ${city}`,
    'Full setup and cleanup — you provide the backyard, we handle everything else',
    'Dual-station capacity for large gatherings of 25–60+ guests',
  ],
  // Theme 3 — Hampton Roads
  (city) => [
    `Military family celebrations, waterfront dining, and Norfolk-area events`,
    'Perfect for Navy, Army, and Air Force family milestone celebrations',
    `Waterfront properties and beachfront homes in ${city} are ideal hibachi setups`,
    `Hampton Roads military community events book 2–3 weeks ahead`,
    'Full setup and cleanup at your ${city} home, base residence, or outdoor venue',
    'Dual-station capacity for large military family gatherings of 25–60+ guests',
  ],
  // Theme 4 — Wine Country & Historic
  (city) => [
    `Wine country estate entertaining and historic district private dining in ${city}`,
    'Perfect for Charlottesville vineyard events, Williamsburg historic property dinners',
    `Premium proteins and private chef experience for ${city}'s discerning hosts`,
    `Central Virginia wine country events book 3–4 weeks ahead`,
    'Full setup and cleanup at your ${city} property, vineyard venue, or estate grounds',
    'Premium protein upgrades — filet mignon, lobster tail — for any wine country occasion',
  ],
  // Theme 5 — Blue Ridge & Western
  (city) => [
    `Mountain retreat dining and university corridor events throughout ${city}`,
    'Perfect for Roanoke and Blacksburg backyard gatherings, campus events',
    `Blue Ridge setting adds natural ambiance to any ${city} hibachi evening`,
    `Western Virginia events book 2–3 weeks ahead for weekend dates`,
    'Full setup and cleanup at your ${city} property or outdoor venue',
    'Dual-station capacity for large university and community gatherings',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const VA_OCCASIONS = [
  // Theme 0 — NoVA Luxury
  ['Estate Dinner Parties', 'Embassy Entertaining', 'Executive Team Dinners', 'Anniversary Celebrations', 'Client Appreciation Events', 'Milestone Birthday Dinners', 'Engagement Parties', 'Holiday Galas', 'Retirement Celebrations', 'Political & Diplomatic Events'],
  // Theme 1 — NoVA Urban/Corporate
  ['Corporate Team Dinners', 'Client Entertainment', 'Birthday Parties', 'Bachelorette Parties', 'Graduation Parties', 'Anniversary Dinners', 'Holiday Gatherings', 'Engagement Parties', 'Military Promotion Celebrations', 'Retirement Parties'],
  // Theme 2 — Richmond Metro
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Family Reunions', 'Corporate Events', 'Bachelorette Parties', 'Neighborhood Gatherings', 'Holiday Dinners', 'Retirement Parties', 'Milestone Celebrations'],
  // Theme 3 — Hampton Roads
  ['Military Homecoming Celebrations', 'Promotion Parties', 'Family Reunions', 'Birthday Parties', 'Bachelorette Weekends', 'Graduation Parties', 'Anniversary Dinners', 'Retirement Celebrations', 'Neighborhood Cookouts', 'Waterfront Dinners'],
  // Theme 4 — Wine Country & Historic
  ['Vineyard Estate Dinners', 'Anniversary Getaways', 'Birthday Celebrations', 'Family Reunions', 'Engagement Dinners', 'Bachelorette Weekends', 'Graduation Parties', 'Corporate Retreats', 'Holiday Dinners', 'Milestone Celebrations'],
  // Theme 5 — Blue Ridge & Western
  ['Birthday Parties', 'Graduation Parties', 'Family Reunions', 'Anniversary Dinners', 'University Events', 'Bachelorette Parties', 'Community Gatherings', 'Retirement Parties', 'Backyard Celebrations', 'Mountain Retreat Dinners'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const VA_FAQ_SETS = [
  // Theme 0 — NoVA Luxury
  (city) => [
    {
      q: `Can you set up hibachi at a McLean or ${city} estate?`,
      a: `Absolutely — McLean and Great Falls estate properties are among our most requested NoVA setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most properties in this area have ideal outdoor entertaining spaces including rear patios, terraces, and estate grounds. Premium protein upgrades including filet mignon, lobster tail, and scallops are available for any ${city} event.`,
    },
    {
      q: `Do you serve embassy staff, executives, and government officials in ${city}?`,
      a: `Yes — diplomatic entertaining, executive team dinners, and private estate events for government officials and K Street professionals are among our most common McLean bookings. We maintain full professionalism from arrival through cleanup. For private, high-discretion events, your property remains exactly as it was when the chef arrived.`,
    },
    {
      q: `How far in advance should I book a ${city} estate event?`,
      a: `For estate and luxury events in the ${city} area, we recommend booking 3–4 weeks in advance. Spring and summer fill fastest — particularly May and June when graduation season overlaps with outdoor entertaining season across Northern Virginia. Premium dates and larger events should be secured 4–6 weeks ahead.`,
    },
    {
      q: `What premium protein upgrades are available for ${city} estate dinners?`,
      a: `Full premium menu is available for any Northern Virginia estate event: filet mignon, lobster tail, Chilean sea bass, dry-scallops, king shrimp, and wagyu beef. Mix and match per guest at booking. Premium packages are our most common addition for McLean, Potomac, and Great Falls estate events.`,
    },
    {
      q: `Is there a travel fee for ${city} and surrounding NoVA communities?`,
      a: `No extra travel fee for McLean, Great Falls, Vienna, Tysons, Falls Church, and most of Northern Virginia. For locations more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you confirm.`,
    },
    {
      q: `Can you handle a large estate gathering in ${city} with 40+ guests?`,
      a: `Yes — for groups over 25, we bring two chef stations running simultaneously. Estate gatherings, large anniversary parties, and significant milestone events of 40–80 guests are among our most common luxury Northern Virginia bookings. Full coordination handled end-to-end.`,
    },
  ],
  // Theme 1 — NoVA Urban/Corporate
  (city) => [
    {
      q: `Can you set up hibachi in a ${city} backyard, townhouse patio, or corporate space?`,
      a: `Yes — Northern Virginia townhouse patios, suburban backyards, and corporate outdoor spaces are among our most common setups. We need a flat outdoor area of at least 10×10 ft. Most ${city} residential properties and corporate outdoor venues meet this easily. We coordinate with property managers or HOAs when needed.`,
    },
    {
      q: `Do you serve the Pentagon, DOD, and tech corridor communities near ${city}?`,
      a: `Yes — defense contractors, DOD civilians, and tech companies along the Tysons and Reston corridor are major parts of our Northern Virginia business. We've run events for government agencies, consulting firms, and technology companies throughout the NoVA area. Corporate outdoor spaces and private residences both work perfectly.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend events in the ${city} area book 2–4 weeks out. Spring and early summer fill fastest — graduation season in May and June and the busy NoVA event calendar mean securing your date early is essential. Corporate events with weekday flexibility can often be arranged 1–2 weeks ahead.`,
    },
    {
      q: `Can you handle large corporate dinners for ${city} teams?`,
      a: `Absolutely — corporate team dinners, client appreciation events, and office celebrations for Northern Virginia businesses are a major part of what we do. For groups over 25, we bring two chef stations. Tech companies, government contractors, and consulting firms throughout the Tysons and Reston corridor are among our most regular corporate clients.`,
    },
    {
      q: `Do you serve all Northern Virginia communities near ${city}?`,
      a: `Yes — we serve all of Northern Virginia including ${city} and surrounding communities: McLean, Arlington, Alexandria, Reston, Herndon, Vienna, Falls Church, Fairfax, Tysons, Sterling, and all of Fairfax and Arlington County. Most NoVA locations fall within our standard service radius with no extra travel fee.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Northern Virginia locations. For events more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront. Serving all of Fairfax County, Arlington County, and the greater NoVA corridor.`,
    },
  ],
  // Theme 2 — Richmond Metro
  (city) => [
    {
      q: `Do you serve the ${city} area and surrounding Richmond communities?`,
      a: `Yes — we cover all of the Richmond metro area including ${city}, Short Pump, Midlothian, Henrico County, Chesterfield County, and surrounding communities. Most locations within 30 miles of downtown Richmond fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle a large graduation or family reunion in ${city}?`,
      a: `Absolutely — graduation parties and family reunions are our most common Richmond-area bookings. For groups over 25, we bring two chef stations running simultaneously. Multigenerational gatherings — kids, parents, and grandparents at the same grill — are our most common central Virginia setup.`,
    },
    {
      q: `How far in advance should I book a ${city} weekend event?`,
      a: `For Friday and Saturday events in the Richmond area, booking 2–3 weeks ahead is recommended. During graduation season (May–June), 3–4 weeks is safer. Summer weekend dates fill quickly. Weekday events can often be arranged with 5–7 days' notice depending on chef availability.`,
    },
    {
      q: `Can you set up at a ${city} backyard, patio, or outdoor venue?`,
      a: `Yes — backyard events, patio setups, and outdoor venue events all work well across the Richmond metro. We need a flat area of at least 10×10 ft with vehicle access. Most Richmond-area residential properties and suburban backyards meet this easily.`,
    },
    {
      q: `Is private hibachi better than catering for a ${city} graduation party?`,
      a: `Per-head cost is comparable to quality catering at around $60/adult — but hibachi includes a live chef performance at no extra charge. A caterer drops off food; we stay, cook in front of your guests, entertain throughout the meal, and handle complete cleanup. Most ${city} hosts who try hibachi say they won't go back to the standard catering format.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included in every event.`,
    },
  ],
  // Theme 3 — Hampton Roads
  (city) => [
    {
      q: `Do you serve the ${city} area and all of Hampton Roads?`,
      a: `Yes — we serve all of Hampton Roads including ${city}, Virginia Beach, Chesapeake, Norfolk, Newport News, Hampton, and surrounding communities. Most locations throughout the Hampton Roads metro fall within our standard service area.`,
    },
    {
      q: `Can you set up at a military base residence or waterfront property near ${city}?`,
      a: `Yes — military family residences, on-base event spaces (subject to access), waterfront homes, and standard backyard setups all work well throughout Hampton Roads. We need a flat outdoor area of at least 10×10 ft. Military homecoming celebrations, promotion parties, and retirement dinners are among our most common Hampton Roads bookings.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For weekend events in the Hampton Roads area, booking 2–3 weeks ahead is recommended. Military promotion celebrations and retirement events sometimes have compressed timelines — we work with that. Summer waterfront events fill faster; 3–4 weeks is safer for peak season dates.`,
    },
    {
      q: `Can you handle a large military family reunion or homecoming celebration near ${city}?`,
      a: `Absolutely — military homecomings and large family gatherings are among our most meaningful Hampton Roads events. For groups over 25, we bring two chef stations. These events mean something, and we approach them with the same professionalism and energy every time.`,
    },
    {
      q: `Is private hibachi a good option for a ${city} waterfront or beach property?`,
      a: `It's excellent. Waterfront patios, beach house decks, and outdoor spaces near the Virginia Beach and Chesapeake shoreline make ideal hibachi setups. We need a flat outdoor area with at least 10×10 ft clearance. Confirm the property allows open-flame cooking — most do — and we handle everything else.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: teppan grill, propane, all fresh proteins, fried rice, vegetables, sauces, plates, chopsticks, and serving utensils. Complete setup and full cleanup included in every Hampton Roads event.`,
    },
  ],
  // Theme 4 — Wine Country & Historic
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} vineyard, historic property, or estate?`,
      a: `Absolutely — central Virginia vineyard properties, historic district homes, and estate outdoor spaces are ideal private hibachi setups. We need a flat outdoor area of at least 10×10 ft. Most Charlottesville-area and Williamsburg properties have terraces, patios, or estate grounds that work perfectly. Premium protein upgrades are available for any wine country occasion.`,
    },
    {
      q: `Do you serve Charlottesville, Williamsburg, and other central Virginia communities near ${city}?`,
      a: `Yes — we serve ${city} and all of central Virginia including Charlottesville, Williamsburg, Winchester, Fredericksburg, Culpeper, and surrounding communities. For locations more than 40 miles from our nearest chef base, a travel fee may apply and will be disclosed upfront.`,
    },
    {
      q: `How far in advance should I book a ${city} wine country event?`,
      a: `For central Virginia vineyard events and historic property dinners, booking 3–4 weeks ahead is recommended. Spring and fall are peak seasons in wine country — UVA graduation in May and the fall harvest season both fill the calendar quickly. Summer vineyard events should be secured 4–5 weeks ahead.`,
    },
    {
      q: `What premium protein options are available for ${city} estate or vineyard events?`,
      a: `Full premium menu available: filet mignon, lobster tail, Chilean sea bass, scallops, king shrimp, and wagyu upgrades. Wine country events often pair premium proteins with the evening's wine selections. Mix and match per guest at booking — premium packages are a popular addition for any central Virginia estate dinner.`,
    },
    {
      q: `Can hibachi work for a smaller intimate dinner at a ${city} vineyard cottage or historic home?`,
      a: `Yes — intimate events of 8–14 guests are among our most common wine country bookings. A single chef station for a private terrace dinner at a Charlottesville cottage or Williamsburg historic property is a beautiful setup. One chef. One table. Full performance. Exactly the right scale.`,
    },
    {
      q: `Is there a travel fee for ${city} and central Virginia locations?`,
      a: `Travel fees may apply for locations in central Virginia depending on distance from our nearest chef base. All travel fees are always disclosed upfront before you confirm your booking — never a surprise after the fact.`,
    },
  ],
  // Theme 5 — Blue Ridge & Western
  (city) => [
    {
      q: `Do you serve the ${city} area and western Virginia communities?`,
      a: `Yes — we serve ${city} and western Virginia including Roanoke, Blacksburg, Salem, Vinton, Christiansburg, Radford, and surrounding communities in the Blue Ridge and Roanoke Valley region.`,
    },
    {
      q: `Can you set up at a ${city} backyard, outdoor venue, or mountain property?`,
      a: `Yes — backyard events, outdoor venue setups, and mountain property gatherings all work well throughout western Virginia. We need a flat outdoor area of at least 10×10 ft with vehicle access. The Blue Ridge setting makes for a genuinely memorable outdoor dining experience.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For weekend events in the ${city} area, booking 2–3 weeks ahead is recommended. Virginia Tech graduation in May and summer events fill fastest. Weekday events and off-peak dates typically have more flexibility.`,
    },
    {
      q: `Can you handle university events or large gatherings near ${city}?`,
      a: `Absolutely — Virginia Tech graduation parties and university community events are among our most common Blacksburg-area bookings. For groups over 25, we bring two chef stations. Large milestone events of 30–60+ guests are well within our western Virginia capacity.`,
    },
    {
      q: `Is private hibachi a good option for a mountain retreat dinner near ${city}?`,
      a: `It's one of the best settings for it. Blue Ridge mountain properties, cabin retreats, and outdoor spaces throughout western Virginia give any hibachi dinner a natural backdrop that elevates the entire experience. Chef arrives fully equipped; you provide the outdoor space and the guest list.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, sauces, plates, chopsticks, and serving utensils. Full setup and complete cleanup are included with every western Virginia event.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const VA_TESTIMONIALS = [
  // Theme 0 — NoVA Luxury
  [
    {
      text: '"Estate dinner at our McLean property — 22 guests on the rear terrace, chef arrived exactly on time and delivered a flawless two-hour performance. Embassy colleagues, a few K Street partners, and our family. Every guest asked for the contact information before they left. This is our standard for private entertaining going forward."',
      name: 'Robert & Catherine H.',
      city: 'McLean, VA',
      event: 'Estate Dinner Party',
      initials: 'RH',
    },
    {
      text: '"Anniversary dinner at our Great Falls property — 16 guests, outdoor terrace setup, chef was exceptional from first flame to final plate. The filet mignon and lobster tail upgrades were extraordinary. Three guests booked their own events within a week. Nothing in the Tysons corridor restaurant scene comes close to this."',
      name: 'Elizabeth & James F.',
      city: 'Great Falls, VA',
      event: 'Anniversary Dinner',
      initials: 'EF',
    },
    {
      text: '"Client dinner at our Vienna home — 18 attorneys and government relations professionals, patio setup, chef was perfectly professional throughout. The performance elevated what would have been a standard dinner into something our clients are still referencing two months later. Will make this our annual client entertainment format."',
      name: 'William T.',
      city: 'Vienna, VA',
      event: 'Client Dinner',
      initials: 'WT',
    },
  ],
  // Theme 1 — NoVA Urban/Corporate
  [
    {
      text: '"Corporate team dinner for our Arlington defense consulting group — 28 people, backyard venue, chef arrived with full setup and ran two stations seamlessly. Pentagon-corridor clients included. The performance landed better than any restaurant event we\'ve organized in Northern Virginia. This is our new team dinner format."',
      name: 'Sandra M.',
      city: 'Arlington, VA',
      event: 'Corporate Team Dinner',
      initials: 'SM',
    },
    {
      text: '"Reston tech team end-of-year dinner — 32 engineers and clients, outdoor venue near the Tysons corridor. Chef kept the whole crowd engaged for two hours. Our team has been doing the same restaurant circuit for years. This was the first event everyone actually talked about at the next all-hands."',
      name: 'Kevin L.',
      city: 'Reston, VA',
      event: 'Tech Team Dinner',
      initials: 'KL',
    },
    {
      text: '"Graduation party for our daughter in Fairfax — 42 guests, backyard setup, dual stations for the crowd. George Mason graduation weekend is fully booked at every restaurant in the area. Having the chef come to us was the best decision we made. The whole family is already planning next year\'s event."',
      name: 'Maria & David C.',
      city: 'Fairfax, VA',
      event: 'Graduation Party',
      initials: 'MC',
    },
  ],
  // Theme 2 — Richmond Metro
  [
    {
      text: '"Birthday party in Short Pump — 36 guests, backyard setup, chef had everyone gathered from the first flame. Richmond suburbs have no shortage of options, but none of them bring the entertainment to your house. Best decision we made for that evening."',
      name: 'Thomas & Lynn W.',
      city: 'Short Pump, VA',
      event: 'Birthday Party',
      initials: 'TW',
    },
    {
      text: '"Graduation party in Midlothian — 44 guests, dual stations, relatives in from three states. Chef kept three generations at the grill for two solid hours. Grandparents front row, cousins competing for the flying shrimp. Perfect Richmond family event."',
      name: 'The Johnson Family',
      city: 'Midlothian, VA',
      event: 'Graduation Party',
      initials: 'JF',
    },
    {
      text: '"Anniversary dinner in Richmond — 20 guests on our backyard deck. Chef was outstanding — food, performance, timing, energy. Our guests had never experienced private hibachi before. Now four of them have booked their own events. Would not have changed a single thing about the evening."',
      name: 'Patricia & Alan R.',
      city: 'Richmond, VA',
      event: 'Anniversary Dinner',
      initials: 'PR',
    },
  ],
  // Theme 3 — Hampton Roads
  [
    {
      text: '"Military homecoming celebration in Virginia Beach — 30 family members, waterfront backyard, chef was professional and energetic from start to finish. After 9 months apart, this was the dinner our family needed. Fire tricks, flying shrimp, everyone together at the grill. Absolutely perfect evening."',
      name: 'Amanda & Sgt. James K.',
      city: 'Virginia Beach, VA',
      event: 'Military Homecoming',
      initials: 'AK',
    },
    {
      text: '"Retirement party for my husband in Chesapeake — 38 Navy colleagues and family members, outdoor setup. Chef was outstanding. Twenty-four years of service deserved an evening that matched it. Every guest said it was the best event they\'d attended in Hampton Roads."',
      name: 'Carolyn P.',
      city: 'Chesapeake, VA',
      event: 'Military Retirement Party',
      initials: 'CP',
    },
    {
      text: '"Birthday party in Norfolk — 26 guests, backyard near the water, chef turned a casual gathering into a genuine event. The fire tricks had the kids completely captivated and the adults equally entertained. Easy booking, exactly on time, spotless cleanup."',
      name: 'Marcus D.',
      city: 'Norfolk, VA',
      event: 'Birthday Party',
      initials: 'MD',
    },
  ],
  // Theme 4 — Wine Country & Historic
  [
    {
      text: '"Anniversary dinner at our Charlottesville vineyard property — 14 guests on the outdoor terrace with Blue Ridge views. Chef arrived exactly on time, set up quietly, and delivered a two-hour performance that matched the setting perfectly. Filet and lobster tail for the occasion. Will make this an annual tradition."',
      name: 'Susan & David M.',
      city: 'Charlottesville, VA',
      event: 'Anniversary Vineyard Dinner',
      initials: 'SM',
    },
    {
      text: '"Bachelorette weekend in Williamsburg — rented a historic district property, 12 guests, hibachi Saturday night. Chef was outstanding. We\'ve done Colonial Williamsburg dozens of times. This was the first evening that had everyone at the same table for two hours laughing without looking at a menu."',
      name: 'Emily T.',
      city: 'Williamsburg, VA',
      event: 'Bachelorette Weekend',
      initials: 'ET',
    },
    {
      text: '"Family reunion at our Winchester property — 32 guests, outdoor setup, chef brought dual stations for the crowd. Relatives in from four states, multigenerational gathering. Grandparents front row, grandkids competing for the flying shrimp toss. Best reunion dinner we\'ve hosted in Shenandoah Valley."',
      name: 'The Crawford Family',
      city: 'Winchester, VA',
      event: 'Family Reunion',
      initials: 'CF',
    },
  ],
  // Theme 5 — Blue Ridge & Western
  [
    {
      text: '"Graduation party for our son in Roanoke — 40 guests, backyard setup, chef ran dual stations and kept the entire crowd engaged. Virginia Tech graduation weekend and every restaurant in the region was fully booked. Having the chef come to our house was the obvious answer. Perfect evening."',
      name: 'Barbara & Tom F.',
      city: 'Roanoke, VA',
      event: 'Graduation Party',
      initials: 'BF',
    },
    {
      text: '"Birthday dinner in Blacksburg — 22 guests, outdoor patio setup, chef was personable and professional throughout. The Blue Ridge setting made the whole experience feel different from any dinner event I\'ve attended. Fire tricks at altitude. Everyone loved it."',
      name: 'Rachel N.',
      city: 'Blacksburg, VA',
      event: 'Birthday Party',
      initials: 'RN',
    },
    {
      text: '"Family reunion near Roanoke — 34 guests, mountain property, chef set up in under 30 minutes and ran a two-hour show. Four generations at the same grill. Easy booking, exactly on time, complete cleanup. Western Virginia doesn\'t have many private dining options that match this level."',
      name: 'The Simmons Family',
      city: 'Salem, VA',
      event: 'Family Reunion',
      initials: 'SF',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const VA_IMAGE_THEMES = [
  { heroImage: '/pics/hibachi-chef-home.jpg' },      // Theme 0 — NoVA Luxury
  { heroImage: '/pics/hibachi-catering.jpg' },        // Theme 1 — NoVA Urban/Corporate
  { heroImage: '/pics/backyard-hibachi-3.jpg' },      // Theme 2 — Richmond Metro
  { heroImage: '/pics/hibachi-virginia-beach.jpg' },  // Theme 3 — Hampton Roads
  { heroImage: '/pics/hibachi-colorado-home.jpg' },   // Theme 4 — Wine Country & Historic
  { heroImage: '/pics/hibachi-colorado.jpg' },        // Theme 5 — Blue Ridge & Western
]

// ── How It Works ──────────────────────────────────────────────────────────────
const VA_HOW_IT_WORKS = [
  // Theme 0 — NoVA Luxury
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Estate`,
    footerNote: (city) => `Most ${city} estate bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Reserve Your Date',             desc: 'Contact us with your date, guest count, and property setup. Premium protein packages available at booking. Fast confirmation.' },
      { num: '02', title: 'Chef Arrives Fully Equipped',   desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, hand-selected proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Estate-Level Performance',      desc: 'Guests gather for 90–120 minutes of live hibachi — fire tricks, precision knife work, and every plate cooked to order at the teppan.' },
      { num: '04', title: 'Complete Cleanup, Nothing Left', desc: 'Chef handles all teardown and cleanup. Your estate or private property is exactly as it was before the chef arrived.' },
    ],
  },
  // Theme 1 — NoVA Urban/Corporate
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 2–4 weeks out. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Request Your Event',             desc: 'Tell us your date, guest count, and outdoor space — corporate venue, private home, or backyard. We confirm fast.' },
      { num: '02', title: 'Chef Arrives with Everything',   desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking Performance',       desc: 'Guests gather for 90–120 minutes of live hibachi — fire tricks, flying shrimp, freshly grilled food cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',          desc: 'Chef handles all cleanup and packs out completely. Your venue stays spotless. You keep the experience.' },
    ],
  },
  // Theme 2 — Richmond Metro
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 with questions.`,
    steps: [
      { num: '01', title: 'Book Your Date',                 desc: 'Request your event online or by phone. Tell us your guest count and backyard setup. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything',   desc: 'Certified chef arrives with full teppan grill, propane, all ingredients, sauces, plates, and chopsticks. No shopping required.' },
      { num: '03', title: 'The Performance Begins',         desc: 'Guests gather around the grill for a live teppanyaki show — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Zero Cleanup for You',           desc: 'Chef packs everything out completely. You hosted the best dinner of the season and didn\'t touch a single dish.' },
    ],
  },
  // Theme 3 — Hampton Roads
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 2–3 weeks out. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Request Your Event',             desc: 'Book online or by phone. Tell us your guest count — over 25 guests, we bring two chef stations. Confirmed quickly.' },
      { num: '02', title: 'Full Setup Arrives',             desc: 'Your chef (or two for large groups) arrives with everything: grills, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking for the Crowd',     desc: 'Every guest gathers around the grill for a live teppanyaki performance — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Chef Handles Cleanup',           desc: 'Complete cleanup done by your chef. Your family keeps the memory. You do none of the work.' },
    ],
  },
  // Theme 4 — Wine Country & Historic
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Property`,
    footerNote: (city) => `Central Virginia events book 3–4 weeks ahead. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Reserve Your Evening',           desc: 'Contact us with your date, guest count, and property setup. Premium proteins available. We confirm and coordinate travel.' },
      { num: '02', title: 'Chef Travels to You',            desc: 'Your certified teppanyaki chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Fire Dinner at Your Estate', desc: 'Guests gather for 90–120 minutes of live hibachi cooking — fire tricks, custom proteins, fried rice, grilled vegetables.' },
      { num: '04', title: 'Full Cleanup, Nothing Left',     desc: 'Chef handles all teardown and cleanup. Your property or vineyard estate is immaculate when they leave.' },
    ],
  },
  // Theme 5 — Blue Ridge & Western
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 2–3 weeks ahead. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Book Your Event',                desc: 'Request your date online or by phone. Tell us your guest count and outdoor space. We confirm fast and coordinate travel.' },
      { num: '02', title: 'Chef Arrives Equipped',          desc: 'Your certified chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and chopsticks.' },
      { num: '03', title: 'Blue Ridge Dinner Show',         desc: 'Every guest gathered at the grill for 90–120 minutes — fire tricks, proteins cooked to order, fried rice, grilled vegetables.' },
      { num: '04', title: 'Complete Cleanup Included',      desc: 'Chef handles all teardown and pack-out. Your mountain property or backyard is spotless when they leave.' },
    ],
  },
]

// ── Section variants ──────────────────────────────────────────────────────────
const VA_SECTION_VARIANTS = [
  // Theme 0 — NoVA Luxury
  {
    heroPill:           'Northern Virginia\'s Private Chef',
    experiencePill:     'Beyond Any McLean Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏛️', title: `Your ${city} Estate Is the Venue`,       desc: `No restaurant can give your guests this — a certified teppanyaki chef performing exclusively at your ${city} property for the evening.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',             desc: 'Filet mignon, lobster tail, wagyu upgrades — cooked live on the teppan in front of your guests. The restaurant version doesn\'t compare.' },
      { icon: '🤫', title: 'Complete Discretion',                     desc: 'Your event stays at your property. No shared dining rooms, no strangers, no noise. Just your guests and your chef.' },
      { icon: '✨', title: 'Full Show, Zero Cleanup',                  desc: 'Premium performance, hand-selected proteins, and complete teardown. Your estate is spotless when the chef leaves.' },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} VA estate event`,
    areasPill:          'Serving McLean & Northern Virginia',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding NoVA Communities`,
    areasIntro: [
      (city, state) => `We serve all of Northern Virginia — McLean, Great Falls, Vienna, Tysons, Falls Church, Arlington, Alexandria, Reston, Herndon, Fairfax, and every community throughout Fairfax and Arlington County.`,
      (city) => `Most ${city} estate bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Reserve Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Standard for Private Entertaining in ${city}`,
    occasionSubtext:       'Estate dinners, embassy entertaining, executive team events, and milestone celebrations — private hibachi is Northern Virginia\'s most exclusive in-home dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Private Hibachi Questions — Answered`,
    testimonialSubheading: 'What McLean & Northern Virginia Hosts Are Saying',
  },
  // Theme 1 — NoVA Urban/Corporate
  {
    heroPill:           'NoVA\'s Private Chef',
    experiencePill:     'Better Than Any NoVA Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Space Is the Venue`,         desc: `No restaurant reservation required — your ${city} outdoor space becomes an exclusive private dining room for your guests.` },
      { icon: '👨‍🍳', title: 'Certified Chef, Your Group Only',         desc: 'Your teppanyaki chef performs exclusively for your guests — no shared dining room, no strangers, no Tysons parking garage.' },
      { icon: '📍', title: 'All of Northern Virginia Served',          desc: `${city}, McLean, Arlington, Alexandria, Reston, Herndon — wherever your property is, we come to you.` },
      { icon: '✨', title: 'Full Show, Zero Cleanup',                   desc: 'Premium proteins cooked live on the teppan, fire tricks for your guests, and complete cleanup when dinner is done.' },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a corporate event in ${city}, VA`,
    areasPill:          'Serving Northern Virginia',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding NoVA Communities`,
    areasIntro: [
      (city, state) => `We serve all of Northern Virginia — ${city}, McLean, Arlington, Alexandria, Reston, Herndon, Fairfax, Vienna, Falls Church, and every community throughout Fairfax and Arlington County.`,
      (city) => `Most ${city} bookings are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       'From corporate team dinners to milestone celebrations, private hibachi is Northern Virginia\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city}, ${abbr} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Northern Virginia Hosts Are Saying',
  },
  // Theme 2 — Richmond Metro
  {
    heroPill:           'Richmond\'s Private Chef',
    experiencePill:     'Better Than Any Richmond Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `${city}'s Backyard Is the Venue`,         desc: `No reservation battles, no parking, no rushed tables — your ${city} backyard becomes an exclusive private dining room for the evening.` },
      { icon: '🔥', title: 'One Chef, One Show',                      desc: 'Every guest at the same grill, the same chef, the same moment — the shared experience is what makes hibachi unforgettable.' },
      { icon: '🎓', title: 'Built for Graduation Season',             desc: 'When every Richmond restaurant is fully booked in May and June, we come to your backyard.' },
      { icon: '🧹', title: 'Arrive & Disappear Spotless',             desc: 'Your chef arrives fully equipped, sets up, cooks the entire dinner, and packs out after. You host without lifting a finger.' },
    ],
    experienceImage:    '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a backyard event in ${city}, VA`,
    areasPill:          'Serving Richmond Metro',
    areasHeadline:      (city) => `Hibachi in ${city} and the Richmond Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Richmond metro — Short Pump, Midlothian, Henrico County, Chesterfield County, Fredericksburg, and every community throughout the greater Richmond area.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to neighborhood gatherings, private hibachi is the Richmond backyard upgrade you\'ve been waiting for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Richmond Metro Hosts Are Saying',
  },
  // Theme 3 — Hampton Roads
  {
    heroPill:           'Hampton Roads Private Chef',
    experiencePill:     'Virginia\'s Waterfront Dining Experience',
    experiencePoints:   (city) => [
      { icon: '⚓', title: `Military & Family Events in ${city}`,     desc: `Military homecomings, promotions, retirements, and family milestones — we serve Hampton Roads with the professionalism these occasions deserve.` },
      { icon: '🌊', title: 'Waterfront & Backyard Setups',            desc: `Beach houses, waterfront patios, and suburban backyards throughout ${city} and Hampton Roads are ideal hibachi setups.` },
      { icon: '🔥', title: 'Full Teppanyaki Show',                    desc: 'Every guest at the same outdoor grill for 90–120 minutes — fire tricks, fresh proteins cooked to order, the full experience.' },
      { icon: '✨', title: 'Full Show, Zero Cleanup',                  desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the celebration.' },
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} VA Hampton Roads event`,
    areasPill:          'Serving Hampton Roads',
    areasHeadline:      (city) => `Hibachi in ${city} and All of Hampton Roads`,
    areasIntro: [
      (city, state) => `We serve all of Hampton Roads — ${city}, Virginia Beach, Chesapeake, Norfolk, Newport News, Hampton, Suffolk, and every community throughout the Hampton Roads metro.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Hampton Roads military and family events book 2–3 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Family Celebration`,
    occasionSubtext:       'Military homecomings, retirement dinners, graduation parties, and family reunions — Hampton Roads families celebrate big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Hampton Roads Hosts Are Saying',
  },
  // Theme 4 — Wine Country & Historic
  {
    heroPill:           'Virginia Wine Country Private Chef',
    experiencePill:     'The Dinner of the Weekend',
    experiencePoints:   (city) => [
      { icon: '🍷', title: `Estate Dining in ${city}`,               desc: `Vineyard properties, historic homes, and estate outdoor spaces in central Virginia are the ideal setting for private hibachi.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',             desc: 'Filet mignon, lobster tail, scallops — cooked live at the teppan on your terrace or vineyard grounds.' },
      { icon: '👥', title: 'Scales from 8 to 60 Guests',             desc: `Intimate ${city} estate dinners of 8–16 or larger family gatherings — one or two stations sized to your exact guest count.` },
      { icon: '✨', title: 'Property Stays Immaculate',               desc: 'Flawless setup, full service throughout, and complete cleanup. You enjoy the vineyard evening; we handle everything else.' },
    ],
    experienceImage:    '/pics/hibachi-colorado-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} VA wine country estate`,
    areasPill:          'Serving Central Virginia',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Central Virginia`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of central Virginia — Charlottesville, Williamsburg, Winchester, Fredericksburg, Culpeper, and every community throughout the Virginia wine country and historic region.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Central Virginia wine country events fill 3–4 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Evening',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Talks About in ${city}`,
    occasionSubtext:       'Vineyard estate dinners, anniversary getaways, bachelorette weekends, and historic property gatherings — private hibachi elevates any central Virginia evening into a lasting memory',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Central Virginia & Wine Country Hosts Are Saying',
  },
  // Theme 5 — Blue Ridge & Western
  {
    heroPill:           'Western Virginia\'s Private Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   (city) => [
      { icon: '⛰️', title: `Blue Ridge Dining in ${city}`,           desc: `Mountain properties, outdoor venues, and backyard spaces throughout ${city} and western Virginia are ideal hibachi setups.` },
      { icon: '👨‍👩‍👧‍👦', title: 'Every Generation at the Grill',          desc: `Kids, parents, and grandparents in ${city} all gathered at the same teppan — multi-generational appeal that few dining formats can match.` },
      { icon: '🔥', title: 'No Restaurant Logistics',                desc: 'Fresh proteins cooked live, a full teppanyaki performance, and no reservations, parking, or rushed tables to manage.' },
      { icon: '🧹', title: 'We Handle Everything',                   desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the celebration.' },
    ],
    experienceImage:    '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} VA Blue Ridge outdoor event`,
    areasPill:          'Serving Western Virginia',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Western Virginia`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of western Virginia — Roanoke, Salem, Blacksburg, Christiansburg, Radford, Vinton, and surrounding communities throughout the Roanoke Valley and New River Valley.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events are confirmed within a day.`,
    ],
    areasButton:           'Book Your Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Celebration`,
    occasionSubtext:       'Graduation parties, family reunions, birthday milestones, and mountain retreat dinners — western Virginia families celebrate together, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Western Virginia Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
const VA_CITY_IMAGE_MAP = {
  // Batch 1 — NoVA
  'mclean':         { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Private hibachi chef at a McLean VA estate event` },
  'fairfax':        { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi chef at a Fairfax VA event` },
  'arlington':      { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Private hibachi chef at an Arlington VA event` },
  'alexandria':     { src: '/pics/private-hibachi.jpg',      alt: (city) => `Private hibachi chef at an Alexandria VA event` },
  'reston':         { src: '/pics/hibachi-event.jpg',        alt: (city) => `Corporate hibachi dinner in Reston VA` },
  // Batch 2 — Richmond Metro
  'richmond':         { src: '/pics/backyard-hibachi-3.jpg',    alt: (city) => `Private hibachi chef at a Richmond VA backyard event` },
  'short-pump':       { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Private hibachi chef at a Short Pump VA event` },
  'midlothian':       { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi chef at a Midlothian VA event` },
  'fredericksburg':   { src: '/pics/private-hibachi.jpg',       alt: (city) => `Private hibachi chef at a Fredericksburg VA event` },
  'henrico':          { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Private hibachi chef at a Henrico VA event` },
  // Batch 3 — Hampton Roads
  'virginia-beach':   { src: '/pics/hibachi-virginia-beach.jpg',alt: (city) => `Private hibachi chef at a Virginia Beach VA event` },
  'chesapeake':       { src: '/pics/backyard-hibachi-3.jpg',    alt: (city) => `Private hibachi chef at a Chesapeake VA event` },
  'norfolk':          { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Private hibachi chef at a Norfolk VA event` },
  'newport-news':     { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi chef at a Newport News VA event` },
  'hampton':          { src: '/pics/private-hibachi.jpg',       alt: (city) => `Private hibachi chef at a Hampton VA event` },
  // Batch 4 — Mix
  'charlottesville':  { src: '/pics/hibachi-colorado-home.jpg', alt: (city) => `Private hibachi chef at a Charlottesville VA estate` },
  'williamsburg':     { src: '/pics/hibachi-chef-home.jpg',     alt: (city) => `Private hibachi chef at a Williamsburg VA property` },
  'winchester':       { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Private hibachi chef at a Winchester VA event` },
  'roanoke':          { src: '/pics/hibachi-colorado.jpg',      alt: (city) => `Private hibachi chef at a Roanoke VA outdoor event` },
  'blacksburg':       { src: '/pics/backyard-hibachi-3.jpg',    alt: (city) => `Private hibachi chef at a Blacksburg VA event` },
  'herndon':          { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Private hibachi chef at a Herndon VA event` },
  'leesburg':         { src: '/pics/hibachi-chef-home.jpg',     alt: (city) => `Private hibachi chef at a Leesburg VA estate event` },
  'manassas':         { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi chef at a Manassas VA event` },
  'woodbridge':       { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Private hibachi chef at a Woodbridge VA event` },
  'chantilly':        { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi chef at a Chantilly VA event` },
}

// ── Support images for profileIdx cities ─────────────────────────────────────
const VA_SUPPORT_IMAGES = {
  'mclean': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Estate hibachi dinner in McLean, VA`,
      caption:    'McLean estate private dining',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `McLean hosts expect the exceptional — and our private hibachi chefs deliver it at every event. Estate terrace dinners, embassy entertaining, and executive private gatherings in Northern Virginia's most prestigious zip code are our specialty. The filet mignon and lobster tail upgrades are ready when you are. See what McLean hosts have discovered:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef setting up at a McLean VA estate`,
      caption: 'McLean\'s private dining standard',
    },
  },
  'fairfax': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Graduation hibachi party in Fairfax, VA`,
      caption:    'Fairfax graduation season',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Fairfax families and George Mason University graduates choose private hibachi when they want a celebration that genuinely stands apart. Backyard graduation dinners, multicultural milestone events, and birthday celebrations — our chefs show up fully equipped, perform for your guests, and leave without a trace. Fairfax's Korean-American, Indian-American, and Vietnamese-American communities celebrate milestones with intention, and we match that energy. See what Fairfax hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Private hibachi chef in Fairfax, VA`,
      caption: 'The Fairfax graduation dinner standard',
    },
  },
  'arlington': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Corporate hibachi event in Arlington, VA`,
      caption:    'Arlington Pentagon corridor events',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Arlington's DOD civilians, defense contractors, and young professionals choose private hibachi for corporate events, bachelorette weekends, and milestone celebrations throughout Clarendon, Rosslyn, Ballston, and Pentagon City. Minutes from DC, Arlington hosts expect quality — and our chefs deliver it at every event. See what Arlington hosts have been saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Arlington, VA`,
      caption: 'Arlington\'s private dining standard',
    },
  },
  'alexandria': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Private hibachi dinner in Alexandria, VA`,
      caption:    'Old Town Alexandria private dining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Alexandria's Old Town rowhouses, waterfront properties, and affluent Federal worker community choose private hibachi for dinner parties, anniversary celebrations, and milestone events throughout this historic city. From cobblestone-street patios to Fort Belvoir-adjacent homes, our chefs bring the full teppanyaki experience to your door. See what Alexandria hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-chef-home.jpg',
      alt:     (city) => `Private hibachi chef in Alexandria, VA`,
      caption: 'Alexandria\'s private dining standard',
    },
  },
  'reston': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Corporate hibachi dinner in Reston, VA`,
      caption:    'Reston tech corridor corporate dining',
      trustBadge: "Virginia's Favorite Hibachi Experience",
      intro:      (city) => `Reston's technology corridor — Leidos, DXC Technology, SAIC, Booz Allen Hamilton, Fannie Mae, and dozens of government contractors — chooses private hibachi for corporate client dinners, team celebrations, and milestone events. Reston's planned community culture and diverse population mean milestone entertaining happens at a high standard here. See what Reston hosts and corporate teams are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Reston, VA`,
      caption: 'Reston\'s corporate dinner standard',
    },
  },
  // Batch 2 — Richmond Metro
  'richmond': {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Backyard hibachi party in Richmond, VA`,
      caption:    'Richmond backyard entertaining',
      trustBadge: 'Thousands of Happy Guests',
      intro:      (city) => `Richmond hosts choose private hibachi for graduation parties, birthday milestones, and anniversary dinners — and come back because nothing else combines live entertainment and great food in your own backyard. Our chefs know the Fan District, the west end, and every Richmond neighborhood in between. Here's what Richmond hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Richmond, VA`,
      caption: "Richmond's backyard dinner standard",
    },
  },
  'short-pump': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi event in Short Pump, VA`,
      caption:    'Short Pump west end celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Short Pump families choose private hibachi when a backyard birthday or graduation party needs to rise above the ordinary. The west end Richmond crowd has options — and hibachi at home consistently outperforms every restaurant in the Short Pump Town Center corridor. Here's what Short Pump hosts are saying:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi-3.jpg',
      alt:     (city) => `Private hibachi chef in Short Pump, VA`,
      caption: 'Short Pump backyard entertaining',
    },
  },
  'midlothian': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Backyard hibachi party in Midlothian, VA`,
      caption:    'Midlothian family celebrations',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Midlothian families celebrate milestones — Midlothian and Monacan High graduations, birthday parties that bring relatives in from across Virginia, and summer backyard gatherings that deserve a format worthy of the occasion. Our chefs serve all of Chesterfield County with the same standard every time. Here's what Midlothian hosts are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in Midlothian, VA`,
      caption: 'Midlothian backyard celebrations',
    },
  },
  'fredericksburg': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Private hibachi event in Fredericksburg, VA`,
      caption:    'Fredericksburg family milestones',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Fredericksburg hosts celebrate UMW graduation parties, military milestone dinners, and family gatherings that span the growing I-95 commuter corridor between Richmond and DC. Our chefs serve Fredericksburg and all of Spotsylvania and Stafford County with full setup and zero cleanup. Here's what Fredericksburg hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Private hibachi chef in Fredericksburg, VA`,
      caption: 'Fredericksburg backyard entertaining',
    },
  },
  'henrico': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Private hibachi party in Henrico County, VA`,
      caption:    'Henrico County family celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Henrico County hosts — from Short Pump's west end to the established Glen Allen and Wyndham neighborhoods — choose private hibachi for graduation parties, birthday milestones, and neighborhood gatherings. Our chefs serve all of Henrico with the full setup and complete cleanup every time. Here's what Henrico hosts are saying:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi-3.jpg',
      alt:     (city) => `Private hibachi chef in Henrico County, VA`,
      caption: 'Henrico County backyard dining',
    },
  },
  // Batch 3 — Hampton Roads
  'virginia-beach': {
    testimonial: {
      src:        '/pics/hibachi-virginia-beach.jpg',
      alt:        (city) => `Private hibachi event in Virginia Beach, VA`,
      caption:    'Virginia Beach military & family celebrations',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `Virginia Beach hosts — military families from Oceana and Little Creek, beachfront property owners, and the diverse neighborhoods from Great Neck to Princess Anne — choose private hibachi for homecomings, graduation parties, and summer waterfront celebrations. Our chefs serve all of Hampton Roads and come fully equipped every time. Here's what Virginia Beach hosts have found:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi-3.jpg',
      alt:     (city) => `Private hibachi chef in Virginia Beach, VA`,
      caption: 'Virginia Beach backyard entertaining',
    },
  },
  'chesapeake': {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Backyard hibachi event in Chesapeake, VA`,
      caption:    'Chesapeake family celebrations',
      trustBadge: 'Thousands of Happy Guests',
      intro:      (city) => `Chesapeake families — Great Bridge, Western Branch, Deep Creek, and South Norfolk — choose private hibachi for graduation parties, birthday milestones, and summer backyard gatherings. Our chefs serve all of Chesapeake with the full setup and complete cleanup every time. Here's what Chesapeake hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Chesapeake, VA`,
      caption: 'Chesapeake backyard dining',
    },
  },
  'norfolk': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Private hibachi event in Norfolk, VA`,
      caption:    'Norfolk military & community celebrations',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Norfolk hosts — Navy families at NOB, ODU students and families, and the established communities of Ghent, Larchmont, and Park Place — choose private hibachi for military celebrations, graduation parties, and milestone dinners. Our chefs serve all of Norfolk and Hampton Roads with the full setup every time. Here's what Norfolk hosts have found:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in Norfolk, VA`,
      caption: 'Norfolk private dining standard',
    },
  },
  'newport-news': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi event in Newport News, VA`,
      caption:    'Newport News family celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Newport News hosts — shipyard families, Langley Air Force Base community, and the residential neighborhoods of Denbigh, Kiln Creek, and Port Warwick — choose private hibachi for graduation parties, military milestone dinners, and backyard celebrations. Our chefs serve all of Newport News and Hampton Roads. Here's what Newport News hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Newport News, VA`,
      caption: 'Newport News backyard entertaining',
    },
  },
  'hampton': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Private hibachi event in Hampton, VA`,
      caption:    'Hampton military & family milestones',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Hampton hosts — Joint Base Langley-Eustis Air Force families, NASA Langley community members, Hampton University families, and the residential neighborhoods of Buckroe Beach, Fox Hill, and Phoebus — choose private hibachi for milestone celebrations and backyard gatherings. Our chefs serve all of Hampton and Hampton Roads. Here's what Hampton hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Private hibachi chef in Hampton, VA`,
      caption: 'Hampton private celebration standard',
    },
  },
  // Batch 4 — Mix
  'charlottesville': {
    testimonial: {
      src:        '/pics/hibachi-colorado-home.jpg',
      alt:        (city) => `Private hibachi at a Charlottesville VA estate`,
      caption:    'Charlottesville wine country entertaining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Charlottesville hosts — UVA families, Blue Ridge vineyard property owners, and the academic community of Albemarle County — choose private hibachi for graduation dinners, wine country anniversary events, and estate gatherings. Premium proteins and complete cleanup included. Here's what Charlottesville hosts are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in Charlottesville, VA`,
      caption: 'Charlottesville wine country private dining',
    },
  },
  'williamsburg': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Private hibachi at a Williamsburg VA property`,
      caption:    'Williamsburg historic property entertaining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Williamsburg hosts — W&M families, Colonial Williamsburg historic district rental properties, and the James City County estates surrounding the resort corridor — choose private hibachi for graduation parties, bachelorette weekends, and anniversary dinners. Here's what Williamsburg hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-colorado-home.jpg',
      alt:     (city) => `Private hibachi chef in Williamsburg, VA`,
      caption: 'Williamsburg private dining standard',
    },
  },
  'winchester': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi event in Winchester, VA`,
      caption:    'Winchester Shenandoah Valley entertaining',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Winchester hosts — Shenandoah wine trail property owners, Frederick County families, and the growing northern Shenandoah Valley community — choose private hibachi for wine country estate dinners, graduation parties, and summer backyard gatherings. Here's what Winchester hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Winchester, VA`,
      caption: 'Winchester Shenandoah Valley celebrating',
    },
  },
  'roanoke': {
    testimonial: {
      src:        '/pics/hibachi-colorado.jpg',
      alt:        (city) => `Private hibachi at a Roanoke VA outdoor event`,
      caption:    'Roanoke Star City celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Roanoke hosts — the Grandin Village neighborhood, South Roanoke estate properties, and the growing Star City community — choose private hibachi for graduation parties, birthday milestones, and backyard summer gatherings with the Blue Ridge as backdrop. Here's what Roanoke hosts have found:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi-3.jpg',
      alt:     (city) => `Private hibachi chef in Roanoke, VA`,
      caption: 'Roanoke Blue Ridge backyard dining',
    },
  },
  'blacksburg': {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Private hibachi at a Blacksburg VA event`,
      caption:    'Blacksburg Virginia Tech graduation season',
      trustBadge: 'Thousands of Happy Guests',
      intro:      (city) => `Blacksburg hosts — Virginia Tech graduation families, Montgomery County residents, and the Blacksburg community — choose private hibachi when Virginia Tech graduation weekend has every venue booked solid and they want the chef at their backyard instead. Here's what Blacksburg hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Blacksburg, VA`,
      caption: 'Blacksburg VT graduation dinner standard',
    },
  },
  'herndon': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Private hibachi event in Herndon, VA`,
      caption:    'Herndon Dulles corridor events',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Herndon hosts — Dulles corridor tech professionals, government contractor families, and the diverse Herndon community — choose private hibachi for corporate team dinners, birthday milestones, and backyard celebrations. Minutes from Reston and Tysons. Here's what Herndon hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Herndon, VA`,
      caption: 'Herndon Dulles corridor private dining',
    },
  },
  'leesburg': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Private hibachi at a Leesburg VA estate`,
      caption:    'Leesburg Loudoun County estate entertaining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Leesburg hosts — Loudoun County wine country estate owners, the One Loudoun professional community, and the horse farm properties of western Loudoun — choose private hibachi for estate dinners, anniversary celebrations, and premium private gatherings. Here's what Leesburg hosts are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in Leesburg, VA`,
      caption: 'Leesburg Loudoun County private dining',
    },
  },
  'manassas': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi event in Manassas, VA`,
      caption:    'Manassas Prince William County celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Manassas hosts — Prince William County families, military families from Quantico, and the diverse Manassas community — choose private hibachi for graduation parties, birthday milestones, and backyard celebrations. Our chefs serve all of Prince William County. Here's what Manassas hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Manassas, VA`,
      caption: 'Manassas backyard entertaining',
    },
  },
  'woodbridge': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi event in Woodbridge, VA`,
      caption:    'Woodbridge I-95 corridor celebrations',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Woodbridge hosts — the diverse communities of Stonebridge, Dale City, and Lake Ridge, military families from Quantico, and the large South Asian and Hispanic families who celebrate milestones with genuine intention — choose private hibachi for graduation parties and multigenerational backyard gatherings. Here's what Woodbridge hosts are saying:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi-3.jpg',
      alt:     (city) => `Private hibachi chef in Woodbridge, VA`,
      caption: 'Woodbridge backyard dining standard',
    },
  },
  'chantilly': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi event in Chantilly, VA`,
      caption:    'Chantilly Westfields corridor events',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Chantilly hosts — Westfields tech professionals, Fairfax County families in Greenbriar and South Riding, and the Dulles corridor corporate community — choose private hibachi for backyard celebrations, team dinners, and milestone events. Near Herndon, Reston, and Tysons. Here's what Chantilly hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Private hibachi chef in Chantilly, VA`,
      caption: 'Chantilly Dulles corridor private dining',
    },
  },
}

// ── Support fallback images (per theme) ───────────────────────────────────────
const VA_SUPPORT_FALLBACKS = [
  // Theme 0 — NoVA Luxury
  {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Estate hibachi dinner in ${city}, VA`,
      caption:    'Northern Virginia estate entertaining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `${city} hosts who choose private hibachi discover what McLean and Great Falls have known for years: nothing combines live entertainment and truly elevated dining like a certified teppanyaki chef at your property. Premium proteins, estate-level service, and complete cleanup. Here's what ${city} hosts are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, VA`,
      caption: 'Your Northern Virginia private evening',
    },
  },
  // Theme 1 — NoVA Urban/Corporate
  {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Corporate hibachi event in ${city}, VA`,
      caption:    'Northern Virginia professionals agree',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `${city} professionals and families choose private hibachi for corporate dinners, milestone birthdays, and team celebrations — an experience that turns any outdoor space into an exclusive private dining room. Minutes from the Tysons corridor, our certified chefs bring the full setup and leave your property exactly as they found it. Here's what ${city} hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, VA`,
      caption: 'Your Northern Virginia private evening',
    },
  },
  // Theme 2 — Richmond Metro
  {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Backyard hibachi event in ${city}, VA`,
      caption:    'Richmond metro hosts agree',
      trustBadge: 'Thousands of Happy Guests',
      intro:      (city) => `${city} hosts choose private hibachi when they want their backyard celebration to feel like something genuinely different. Birthday dinners, graduation parties, and family milestones are our specialty — and our chefs handle everything from setup through cleanup. Here's what ${city} hosts have discovered:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, VA`,
      caption: 'Your Richmond area backyard, upgraded',
    },
  },
  // Theme 3 — Hampton Roads
  {
    testimonial: {
      src:        '/pics/hibachi-virginia-beach.jpg',
      alt:        (city) => `Hibachi event in ${city}, VA`,
      caption:    'Hampton Roads families agree',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `${city} families celebrate military milestones, homecomings, graduations, and family reunions with private hibachi — and they come back because nothing else combines live entertainment and great food in your own outdoor space. Our chefs bring the full setup and leave with everything they brought. Here's what ${city} hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, VA`,
      caption: 'Your Hampton Roads celebration, elevated',
    },
  },
  // Theme 4 — Wine Country & Historic
  {
    testimonial: {
      src:        '/pics/hibachi-colorado-home.jpg',
      alt:        (city) => `Estate hibachi dinner in ${city}, VA`,
      caption:    'Central Virginia hosts agree',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `${city} hosts discover something different every time: a private hibachi chef at your vineyard property or historic estate makes any evening genuinely memorable. Premium proteins cooked live at the teppan, complete cleanup, and an experience your guests will reference for years. Here's what ${city} wine country hosts are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, VA`,
      caption: 'Your central Virginia evening, elevated',
    },
  },
  // Theme 5 — Blue Ridge & Western
  {
    testimonial: {
      src:        '/pics/hibachi-colorado.jpg',
      alt:        (city) => `Hibachi gathering in ${city}, VA`,
      caption:    'Western Virginia families agree',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `${city} families bring private hibachi to backyard graduations, birthday milestones, and mountain retreat dinners — and they keep coming back for the same reason: nothing else comes close. Our chefs travel to your home fully equipped and leave with complete cleanup. Here's what ${city} hosts say:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, VA`,
      caption: 'Your western Virginia celebration',
    },
  },
]

// ── Closing variants (VA generic 218–223) ─────────────────────────────────────
export const VA_CLOSING_VARIANTS = [
  // 218 — NoVA Luxury
  {
    headline: (city) => `Your ${city} Estate Dinner Starts Here`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins including filet mignon and lobster tail. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `McLean and Great Falls estate dates book 3–4 weeks out. Reserve your evening now.`,
  },
  // 219 — NoVA Urban/Corporate
  {
    headline: (city) => `Your ${city} Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Northern Virginia weekend and corporate slots fill 2–4 weeks out. Check your date now.`,
  },
  // 220 — Richmond Metro
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Richmond metro weekends book 2–3 weeks ahead. Secure your date now.`,
  },
  // 221 — Hampton Roads
  {
    headline: (city) => `${city}'s Most Memorable Celebration — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Hampton Roads weekend dates fill quickly. Confirm your Virginia event now.`,
  },
  // 222 — Wine Country & Historic
  {
    headline: (city) => `The ${city} Evening Your Property Deserves`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} vineyard property or estate. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `Central Virginia spring and fall dates fill fast. Reserve your evening now.`,
  },
  // 223 — Blue Ridge & Western
  {
    headline: (city) => `${city}'s Best Outdoor Dinner — Reserve Your Chef`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full Blue Ridge dinner show, complete cleanup. From $60/adult in ${city}.`,
    urgency:  `Western Virginia weekend dates book 2–3 weeks ahead. Confirm your date now.`,
  },
]

// ── City-specific closings (VA city-specific 224–228) ─────────────────────────
export const VA_CITY_CLOSINGS = [
  // 224 — McLean (profileIdx 0)
  {
    headline: (city) => `McLean's Private Dining Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your McLean estate or property. Filet mignon, lobster tail, premium proteins. Full setup, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `McLean estate and executive events book 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 225 — Fairfax (profileIdx 1)
  {
    headline: (city) => `Fairfax Graduation Season — Reserve Your Date`,
    sub:      (city) => `When every restaurant near George Mason is fully booked, we come to you. A certified hibachi chef at your Fairfax home or backyard. From $60/adult.`,
    urgency:  `Fairfax and GMU graduation weekends book 3–4 weeks out. Reserve your date now.`,
  },
  // 226 — Arlington (profileIdx 2)
  {
    headline: (city) => `Arlington's Private Dining Standard — Reserve Your Evening`,
    sub:      (city) => `A certified teppanyaki chef at your Arlington property — Clarendon, Rosslyn, Pentagon City, or Ballston. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Arlington weekend and corporate events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 227 — Alexandria (profileIdx 3)
  {
    headline: (city) => `Alexandria's Private Dining Standard — Reserve Your Evening`,
    sub:      (city) => `A certified hibachi chef at your Alexandria property — Old Town, Del Ray, or Fort Belvoir corridor. Full setup, live teppanyaki, complete cleanup. From $60/adult.`,
    urgency:  `Alexandria weekend events book 2–3 weeks ahead. Reserve your evening now.`,
  },
  // 228 — Reston (profileIdx 4)
  {
    headline: (city) => `Reston's Corporate Dinner Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your Reston team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Reston tech corridor and weekend events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 229 — Richmond (profileIdx 5)
  {
    headline: (city) => `Richmond's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Richmond home, deck, or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Richmond graduation weekends (May–June) and summer Saturdays book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 230 — Short Pump (profileIdx 6)
  {
    headline: (city) => `Short Pump's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Short Pump home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Short Pump and west end Richmond weekends fill fast. Reserve your date now.`,
  },
  // 231 — Midlothian (profileIdx 7)
  {
    headline: (city) => `Midlothian's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Midlothian backyard or patio. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Midlothian graduation weekends and summer dates book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 232 — Fredericksburg (profileIdx 8)
  {
    headline: (city) => `Fredericksburg's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Fredericksburg home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Fredericksburg UMW graduation weekends and summer Saturdays book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 233 — Henrico (profileIdx 9)
  {
    headline: (city) => `Henrico's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Henrico County home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Henrico County graduation weekends and summer events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 234 — Virginia Beach (profileIdx 10)
  {
    headline: (city) => `Virginia Beach's Most Memorable Celebration — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chefs for military homecomings, graduation parties, and waterfront celebrations throughout Hampton Roads. From $60/adult.`,
    urgency:  `Virginia Beach summer waterfront dates fill 3–4 weeks ahead. Confirm your Hampton Roads event now.`,
  },
  // 235 — Chesapeake (profileIdx 11)
  {
    headline: (city) => `Chesapeake's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Chesapeake backyard or outdoor space. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Chesapeake graduation weekends and summer events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 236 — Norfolk (profileIdx 12)
  {
    headline: (city) => `Norfolk's Most Memorable Celebration — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chefs for military events, ODU graduation parties, and family milestones throughout Norfolk and Hampton Roads. From $60/adult.`,
    urgency:  `Norfolk military celebrations and summer dates fill quickly. Reserve your event date now.`,
  },
  // 237 — Newport News (profileIdx 13)
  {
    headline: (city) => `Newport News's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Newport News home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Newport News graduation weekends and military celebrations book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 238 — Hampton (profileIdx 14)
  {
    headline: (city) => `Hampton's Most Memorable Celebration — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chefs for Air Force milestones, NASA family events, Hampton University gatherings, and backyard celebrations throughout Hampton. From $60/adult.`,
    urgency:  `Hampton summer dates and military celebrations fill quickly. Reserve your event date now.`,
  },
  // 239 — Charlottesville (profileIdx 15)
  {
    headline: (city) => `The Charlottesville Evening Your Property Deserves`,
    sub:      (city) => `A certified hibachi chef travels to your Charlottesville property or vineyard estate. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `UVA graduation weekends and fall wine country season fill fast. Reserve your Charlottesville date now.`,
  },
  // 240 — Williamsburg (profileIdx 16)
  {
    headline: (city) => `The Williamsburg Evening Your Property Deserves`,
    sub:      (city) => `A certified hibachi chef at your Williamsburg property — historic district home, James City County estate, or resort-adjacent outdoor space. From $60/adult.`,
    urgency:  `W&M graduation weekends and summer Williamsburg dates fill fast. Reserve your evening now.`,
  },
  // 241 — Winchester (profileIdx 17)
  {
    headline: (city) => `Winchester's Best Outdoor Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Winchester property, vineyard estate, or outdoor space. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Winchester fall wine country season and spring dates fill quickly. Reserve your date now.`,
  },
  // 242 — Roanoke (profileIdx 18)
  {
    headline: (city) => `Roanoke's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Roanoke backyard or outdoor space. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Roanoke Virginia Tech graduation weekends and summer dates book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 243 — Blacksburg (profileIdx 19)
  {
    headline: (city) => `Blacksburg's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Blacksburg home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Virginia Tech graduation weekend (early May) books 4–6 weeks out. All other Blacksburg events book 2–3 weeks ahead.`,
  },
  // 244 — Herndon (profileIdx 20)
  {
    headline: (city) => `Herndon's Best Backyard Event — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your Herndon team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Herndon Dulles corridor and weekend events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 245 — Leesburg (profileIdx 21)
  {
    headline: (city) => `The Leesburg Evening Your Property Deserves`,
    sub:      (city) => `A certified hibachi chef at your Leesburg estate, vineyard property, or outdoor space. Premium proteins available. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Leesburg and Loudoun County estate dates fill 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 246 — Manassas (profileIdx 22)
  {
    headline: (city) => `Manassas's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Manassas home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Manassas graduation weekends and summer dates book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 247 — Woodbridge (profileIdx 23)
  {
    headline: (city) => `Woodbridge's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Woodbridge home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Woodbridge graduation weekends and summer events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 248 — Chantilly (profileIdx 24)
  {
    headline: (city) => `Chantilly's Best Backyard Event — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your Chantilly backyard event or corporate gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Chantilly Dulles corridor and summer events book 2–4 weeks ahead. Confirm your date now.`,
  },
]

// ── Intro variants (VA generic 218–223) ───────────────────────────────────────
export const VA_INTRO_VARIANTS = [
  // 218 — NoVA Luxury
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Executive Entertaining for Northern Virginia Estates`,
    opening:  (city, state) =>
      `${city} sets the standard for private entertaining in Northern Virginia — the estate properties, the connections that define careers here, and the occasions that require something genuinely above the ordinary. Private hibachi at your ${city} property brings a certified teppanyaki chef to your outdoor space with the full setup, hand-selected premium proteins, and a live-fire performance that earns its place on any Northern Virginia terrace. CIA executives, K Street lobbyists, embassy staff, and Fortune 500 leadership all live within five minutes of ${city}'s borders. The dinner they remember is the one that happened at someone's home.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — including filet mignon, lobster tail, wagyu upgrades, and premium shrimp — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, estate grounds, or patio. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done. Your property is exactly as you left it.`,
    closing:  (city, state) =>
      `${city} estate events book 3–4 weeks ahead — spring through summer fills fastest as NoVA's entertaining season peaks. Starting at $60 per adult, $600 event minimum. Premium protein packages available for any ${city} occasion. Most quotes confirmed same day.`,
  },
  // 219 — NoVA Urban/Corporate
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for the Northern Virginia Corridor`,
    opening:  (city, state) =>
      `Northern Virginia runs at a different pace — the DOD contracts, the tech firms along the Tysons and Reston corridor, the government agencies and consulting practices that define this part of the country. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space — corporate townhouse patio, suburban backyard, or residential property — with everything included: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any gathering in this corridor into the evening your guests are still talking about the following week.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events and corporate dinners book 2–4 weeks out during peak season. Starting at $60 per adult, $600 event minimum. Graduation season (May–June) fills fastest — reserve early for any spring Saturday event. Most quotes confirmed same day.`,
  },
  // 220 — Richmond Metro
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Dinner Richmond Has Been Waiting For`,
    opening:  (city, state) =>
      `${city} knows how to celebrate. The backyard culture here runs through graduation season in June, the birthday milestones that bring relatives in from across Virginia, and the summer evenings that finally feel right for an outdoor gathering. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup — propane grill, all proteins, and a live-fire cooking performance that turns any Richmond-area backyard gathering into the evening your guests still reference at the next occasion.`,
    middle:   (city, state) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for large graduations, family reunions, and birthday parties are our most common format across the Richmond metro.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 221 — Hampton Roads
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for Hampton Roads Families`,
    opening:  (city, state) =>
      `Hampton Roads celebrates differently — the military homecomings, the promotion dinners, the retirement events for careers that spanned two decades of service, and the family milestones that bring everyone to the same waterfront yard. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup and a live cooking performance that matches the occasion. No crowded restaurant in Virginia Beach or Norfolk. The chef comes to you.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Hampton Roads gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks ahead. Military celebrations, family reunions, graduation parties, and waterfront dinners are our most common Hampton Roads bookings. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 222 — Wine Country & Historic
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Wine Country Entertaining at Its Best`,
    opening:  (city, state) =>
      `${city} draws guests who know the difference between a good evening and an exceptional one — the vineyard properties along the Blue Ridge foothills, the historic homes in the heart of the Shenandoah, the colonial estates where the right dinner becomes the memory of the weekend. Private hibachi at your ${city} property brings a certified teppanyaki chef to your outdoor space with hand-selected premium proteins and a live-fire performance that pairs as well with any Virginia vintage as it does with the Blue Ridge backdrop.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, and premium upgrades available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, patio, or vineyard grounds. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `${city} events book 3–4 weeks ahead — spring and fall wine country season fills fastest. Starting at $60 per adult, $600 event minimum. Premium protein packages available. Most quotes returned same day.`,
  },
  // 223 — Blue Ridge & Western
  {
    headline: (city) => `Hibachi at Home in ${city}: Blue Ridge Private Dining`,
    opening:  (city, state) =>
      `${city} has always found a way to celebrate in the right setting — the mountain backdrop that makes any outdoor gathering feel more intentional, the backyard culture of the Roanoke Valley and New River Valley, and the university community that marks milestones with the energy they deserve. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any gathering in western Virginia into the evening your guests are planning around when the next occasion comes up.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large ${city} gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks ahead. Virginia Tech graduation season (May) and summer weekends fill fastest. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── City-specific intros (VA city-specific 224–228) ────────────────────────────
export const VA_CITY_INTROS = [
  // 224 — McLean (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in McLean`,
    opening:  () =>
      `McLean is Virginia's most private address — the Great Falls estate lots, the Vienna properties where senior government officials host, the homes where Beltway relationships are built around dinner tables rather than conference rooms. Private hibachi at your McLean property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for Northern Virginia's highest standard of private entertaining. CIA executives, K Street lobbyists, embassy staff, and tech executives who have made the Tysons corridor home all live within minutes of McLean's borders. The dinner they still talk about is the one that happened in somebody's back terrace — not the Tysons restaurant they've been to thirty times.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, wagyu upgrades, and premium Chilean sea bass — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate terrace, rear patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For McLean estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done. Your property is exactly as you left it.`,
    closing:  () =>
      `McLean estate events book 3–4 weeks ahead — spring through summer fills fastest as NoVA's entertaining season peaks. Serving McLean and all of Northern Virginia — Great Falls, Vienna, Falls Church, Tysons, and surrounding Fairfax County communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 225 — Fairfax (profileIdx 1)
  {
    headline: () => `Hibachi at Home in Fairfax`,
    opening:  () =>
      `Fairfax occupies a unique position in Northern Virginia — the George Mason University community (38,000 students and counting) drives one of the strongest graduation markets in the region, and the large Korean-American, Indian-American, and Vietnamese-American communities here celebrate milestones with the kind of intention that turns a backyard dinner into a genuine occasion. Hibachi at home in Fairfax brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for the kind of crowd that shows up at a Fairfax graduation party — families driving in from Northern Virginia and Maryland, generations gathered on a backyard lawn, everyone wanting the same thing: a dinner they'll be referencing when the next occasion comes up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Fairfax graduation events over 25, we bring dual chef stations. Near the Fair Oaks Mall corridor and minutes from the Tysons connector — our Fairfax coverage is complete. Full cleanup when dinner is done.`,
    closing:  () =>
      `Fairfax graduation season (May–June) and NoVA summer weekends book 3–4 weeks ahead — GMU weekends fill fastest. Serving Fairfax and all of Northern Virginia — Reston, Herndon, Vienna, McLean, Arlington, and surrounding Fairfax County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 226 — Arlington (profileIdx 2)
  {
    headline: () => `Hibachi at Home in Arlington`,
    opening:  () =>
      `Arlington doesn't need an introduction — the Pentagon corridor, the DOD civilians and defense contractors who define this part of Northern Virginia, and the dense urban neighborhoods of Clarendon, Rosslyn, Pentagon City, and Ballston where the young professional and military officer community lives. Hibachi at home in Arlington brings a certified teppanyaki chef to your outdoor space — townhouse patio, apartment rooftop, or suburban backyard — with the full setup and a live-fire cooking performance that gives any Arlington gathering its anchor moment. Minutes from DC, adjacent to Alexandria, and at the heart of the Northern Virginia corridor, Arlington hosts have high standards. Our chefs match them.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Arlington events over 25, we bring dual stations. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Arlington weekend events and corporate dinners book 2–4 weeks ahead — spring and early summer fill fastest. Bachelorette parties, young professional birthday dinners, Pentagon corridor team events, and military celebration dinners are our most common Arlington bookings. Serving Arlington and all of Northern Virginia — McLean, Alexandria, Fairfax, Reston, Tysons, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 227 — Alexandria (profileIdx 3)
  {
    headline: () => `Hibachi at Home in Alexandria`,
    opening:  () =>
      `Old Town Alexandria has been hosting remarkable dinners for a very long time — the cobblestone streets, the Federal-era rowhouses with rear gardens, and the waterfront properties along the Potomac where the right evening feels genuinely historic. The modern Alexandria that has grown up around Old Town is equally particular: Federal workers, military officers from Fort Belvoir, and the affluent Del Ray and Seminary Hill communities that have made Alexandria one of Northern Virginia's most sought-after addresses. Hibachi at home in Alexandria brings a certified teppanyaki chef to your outdoor space with everything included — a live-fire performance that gives any Alexandria gathering the energy it deserves.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your Old Town rear garden, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For larger Alexandria gatherings, dual-station capacity handles 25–60+ guests. Complete cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Alexandria weekend events book 2–3 weeks ahead. Serving Alexandria and all of Northern Virginia — McLean, Arlington, Fairfax, Reston, Springfield, and surrounding Fairfax and Arlington County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 228 — Reston (profileIdx 4)
  {
    headline: () => `Hibachi Catering in Reston`,
    opening:  () =>
      `Reston is Virginia's technology corridor — Leidos, DXC Technology, SAIC, Booz Allen Hamilton, Fannie Mae, and dozens of government contractors have made this planned community the professional anchor of Northern Virginia. The corporate client dinner is the primary social currency here, and Reston's diverse, internationally connected population means milestone celebrations happen with the full weight of occasion behind them. Hibachi catering in Reston brings a certified teppanyaki chef to your corporate outdoor venue, townhouse patio, or Reston Town Center-area property with the full setup and a live performance that elevates any professional gathering or private celebration into something your guests are still talking about the following quarter.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, backyard, or corporate outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Reston corporate events over 25, we bring two chef stations. Full cleanup when dinner is done. Near the Dulles Airport corridor, Herndon, and Tysons Corner — our NoVA coverage is complete.`,
    closing:  () =>
      `Reston corporate and weekend events book 2–4 weeks ahead — spring and early summer fill fastest along the tech corridor. Serving Reston and all of Northern Virginia — Herndon, Sterling, McLean, Fairfax, Tysons, and surrounding Fairfax County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 229 — Richmond (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Richmond`,
    opening:  () =>
      `Richmond is Virginia's capital — the Fan District rowhouses with rear gardens, the Scott's Addition corridor, Church Hill's historic hilltop properties, and the VCU community that marks graduation with the weight of a life milestone. Private hibachi at home in Richmond brings a certified teppanyaki chef to your backyard, patio, or outdoor space with everything included — the full setup, all fresh ingredients, and a live-fire cooking performance that turns any Richmond gathering into the evening your guests are still referencing when the next occasion comes up. Graduation parties, birthday milestones, anniversary dinners, and neighborhood gatherings are the Richmond metro's rhythm, and hibachi at home is the format that fits them all.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard deck, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Richmond events over 25, we bring dual chef stations running in parallel. Complete cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Richmond weekend events book 2–3 weeks ahead. Graduation season (May–June) and summer Saturdays fill fastest — reserve 3–4 weeks ahead for those dates. Serving Richmond and the entire metro — Short Pump, Midlothian, Henrico, Chesterfield, Chester, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 230 — Short Pump (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Short Pump`,
    opening:  () =>
      `Short Pump is Henrico County's most coveted west end address — the upscale residential neighborhoods, the Short Pump Town Center corridor, and the growing community of Richmond families who have made this part of western Henrico their home. Hibachi at home in Short Pump brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live-fire cooking performance that gives any Short Pump gathering a genuine centerpiece. Birthday parties, graduation dinners, and neighborhood celebrations in Short Pump have one format that consistently outperforms every restaurant reservation in the area — and that's having the chef come to you.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, deck, or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For larger Short Pump gatherings over 25, we bring dual chef stations. Complete cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Short Pump weekend events book 2–3 weeks ahead. Graduation season (May–June) fills fastest. Serving Short Pump and the entire west end Richmond corridor — Glen Allen, Goochland, Wyndham, Henrico County, and Richmond proper. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 231 — Midlothian (profileIdx 7)
  {
    headline: () => `Hibachi at Home in Midlothian`,
    opening:  () =>
      `Midlothian is Chesterfield County's family heartland — the planned communities and suburban neighborhoods where Richmond families put down roots, raise families, and mark milestones with the backyard gatherings that define this part of Virginia. Hibachi at home in Midlothian brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that turns any Chesterfield County backyard into the best evening of the season. Graduation parties for Midlothian and Monacan High graduates, birthday milestones that bring relatives in from across Virginia, and family reunions that deserve a format worthy of the occasion — this is the Richmond suburb that knows how to celebrate.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your backyard or patio space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Midlothian gatherings over 25, we bring two chef stations running in parallel. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Midlothian weekend events book 2–3 weeks ahead. Graduation season (May–June) fills fastest. Serving Midlothian and all of Chesterfield County — Chester, Bon Air, Brandermill, Chesterfield Courthouse, and Richmond proper. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 232 — Fredericksburg (profileIdx 8)
  {
    headline: () => `Hibachi at Home in Fredericksburg`,
    opening:  () =>
      `Fredericksburg sits at the intersection of Virginia's past and present — the historic downtown along the Rappahannock, the University of Mary Washington campus, the military communities from Quantico and Fort Belvoir who have made this city home, and the growing commuter corridor between Richmond and Washington that has made Fredericksburg one of the fastest-growing cities in the state. Hibachi at home in Fredericksburg brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live-fire cooking performance built for the occasions that define this community: UMW graduation parties, military milestone celebrations, family reunions, and the neighbor gatherings that mark a Fredericksburg summer evening properly.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For larger Fredericksburg gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Fredericksburg weekend events book 2–3 weeks ahead. UMW graduation (May) and summer weekends fill fastest — reserve 3–4 weeks ahead for those dates. Serving Fredericksburg and surrounding communities — Spotsylvania, Stafford County, King George, Culpeper, Woodbridge, and the I-95 corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 233 — Henrico (profileIdx 9)
  {
    headline: () => `Hibachi at Home in Henrico`,
    opening:  () =>
      `Henrico County wraps around Richmond on three sides — the upscale west end neighborhoods of Short Pump and Wyndham, the growing east end communities of Varina, the established suburbs of Glen Allen and Mechanicsville, and the diverse communities that have made Henrico one of the most populated and fastest-growing counties in Virginia. Hibachi at home in Henrico brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live-fire cooking performance that turns any Henrico gathering into the celebration your guests plan the next occasion around. Graduation parties, birthday milestones, neighborhood get-togethers, and family reunions are the rhythm of Henrico — and hibachi at home is the format that fits every one of them.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Henrico events over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Henrico County weekend events book 2–3 weeks ahead. Graduation season (May–June) and summer Saturdays fill fastest. Serving all of Henrico County — Short Pump, Glen Allen, Mechanicsville, Wyndham, Varina, and the entire Richmond metro. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 234 — Virginia Beach (profileIdx 10)
  {
    headline: () => `Hibachi at Home in Virginia Beach`,
    opening:  () =>
      `Virginia Beach is Virginia's largest city and military heartland — Naval Air Station Oceana, Naval Amphibious Base Little Creek, and Joint Expeditionary Base Little Creek-Fort Story make this the most military-concentrated metro in the country. The backyard culture runs deep here: homecomings happen on waterfront patios, graduation parties fill yards from the Great Neck corridor to the Chesapeake Beach shoreline, and family milestones are celebrated with everyone gathered outdoors. Hibachi at home in Virginia Beach brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance that matches the scale of every occasion this city hosts.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard patio, deck, or waterfront outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Virginia Beach gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Virginia Beach weekend events book 2–3 weeks ahead. Summer waterfront dates fill fastest — secure your date 3–4 weeks ahead for peak season. Serving Virginia Beach and all of Hampton Roads — Chesapeake, Norfolk, Newport News, Hampton, Suffolk, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 235 — Chesapeake (profileIdx 11)
  {
    headline: () => `Hibachi at Home in Chesapeake`,
    opening:  () =>
      `Chesapeake is Hampton Roads' most expansive city — a mosaic of suburban neighborhoods, rural countryside, and established communities across Great Bridge, Western Branch, Deep Creek, and South Norfolk that has made this one of the fastest-growing cities in Virginia. The backyard culture runs deep here: Chesapeake families celebrate graduations, birthday milestones, and neighborhood gatherings in the outdoor spaces that come with the city's suburban geography. Hibachi at home in Chesapeake brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any Chesapeake backyard gathering into the evening your guests remember longest.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard deck or patio. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For larger Chesapeake gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Chesapeake weekend events book 2–3 weeks ahead. Graduation season (May–June) and summer Saturdays fill fastest. Serving Chesapeake and all of Hampton Roads — Virginia Beach, Norfolk, Suffolk, Portsmouth, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 236 — Norfolk (profileIdx 12)
  {
    headline: () => `Hibachi at Home in Norfolk`,
    opening:  () =>
      `Norfolk is Hampton Roads' urban core — Naval Station Norfolk (the world's largest naval base), Old Dominion University, the Ghent arts district, and a waterfront city that has defined military and civilian life in this region for generations. The celebration culture here runs through military promotions and homecomings, ODU graduation parties, birthday milestones for a community that includes tens of thousands of active-duty Navy families, and neighborhood gatherings in Park Place, Larchmont, and the Willowwood corridor. Hibachi at home in Norfolk brings a certified teppanyaki chef to your outdoor space with everything included and a live-fire performance that gives any Norfolk gathering its centerpiece moment.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, backyard, or outdoor venue space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Norfolk gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Norfolk weekend events book 2–3 weeks ahead. Military celebration season and summer dates fill fastest. Serving Norfolk and all of Hampton Roads — Virginia Beach, Chesapeake, Portsmouth, Newport News, Hampton, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 237 — Newport News (profileIdx 13)
  {
    headline: () => `Hibachi at Home in Newport News`,
    opening:  () =>
      `Newport News is Hampton Roads' shipbuilding heartland — Huntington Ingalls Industries, the Newport News shipyard, and Joint Base Langley-Eustis make this a city where careers are built in service and celebration happens with military weight behind it. The residential neighborhoods of Denbigh, Kiln Creek, and Port Warwick are where Newport News families host birthday parties, military retirement dinners, and graduation events for Warwick and Menchville High graduates. Hibachi at home in Newport News brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance built for the milestone occasions this community celebrates right.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Newport News gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Newport News weekend events book 2–3 weeks ahead. Graduation season and military celebrations fill fastest. Serving Newport News and all of Hampton Roads — Hampton, Williamsburg, York County, Norfolk, Chesapeake, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 238 — Hampton (profileIdx 14)
  {
    headline: () => `Hibachi at Home in Hampton`,
    opening:  () =>
      `Hampton is Hampton Roads' oldest city — the NASA Langley Research Center, Joint Base Langley-Eustis (the Air Force's home on the East Coast), Hampton University, and a waterfront city that tells the story of Virginia's founding along the Chesapeake Bay. The Hampton community celebrates Air Force promotions and retirements, NASA family milestones, Hampton University events, and the summer gatherings that flow through the neighborhoods of Buckroe Beach, Fox Hill, and Phoebus. Hibachi at home in Hampton brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance that gives any Hampton celebration the occasion it deserves.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Hampton gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Hampton weekend events book 2–3 weeks ahead. Military celebrations, Hampton University events, and summer dates fill fastest. Serving Hampton and all of Hampton Roads — Newport News, Norfolk, Virginia Beach, Chesapeake, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 239 — Charlottesville (profileIdx 15)
  {
    headline: () => `Private Hibachi Chef in Charlottesville`,
    opening:  () =>
      `Charlottesville is Virginia's most cultured address — the University of Virginia campus designed by Thomas Jefferson, the Blue Ridge foothills vineyards of the Monticello wine trail, and an academic community that has made this city one of the most desirable destinations in the mid-Atlantic. Private hibachi at your Charlottesville property brings a certified teppanyaki chef with hand-selected premium proteins and a live-fire performance that pairs naturally with any Virginia vintage and the refined outdoor entertaining sensibility of the Charlottesville community. UVA graduation parties, wine country anniversary dinners, and estate gatherings are our most common Charlottesville bookings.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, and premium upgrades available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, terrace, or vineyard-adjacent outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your property is immaculate when the chef leaves.`,
    closing:  () =>
      `Charlottesville events book 3–4 weeks ahead. UVA graduation (May) and fall wine country season fill fastest. Serving Charlottesville and all of central Virginia — Waynesboro, Crozet, Staunton, Harrisonburg, and surrounding Albemarle County communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 240 — Williamsburg (profileIdx 16)
  {
    headline: () => `Private Hibachi Chef in Williamsburg`,
    opening:  () =>
      `Williamsburg is Virginia's most storied address — Colonial Williamsburg's 300-year-old historic district, the College of William & Mary campus (the second-oldest college in the country), and the surrounding James City County properties that draw residents and visitors who value history as a backdrop for living. Private hibachi at your Williamsburg property brings a certified teppanyaki chef to your outdoor space — a historic district rental home, a James City County estate, or a Kingsmill resort-adjacent yard — with the full setup and a live-fire performance that gives any Williamsburg gathering its defining moment. W&M graduation parties, bachelorette weekends at historic rental properties, and anniversary dinners are our most common Williamsburg bookings.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For larger gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Williamsburg events book 3–4 weeks ahead. W&M graduation (May) and summer dates fill fastest. Serving Williamsburg and surrounding communities — Newport News, Hampton, York County, James City County, and Richmond. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 241 — Winchester (profileIdx 17)
  {
    headline: () => `Hibachi at Home in Winchester`,
    opening:  () =>
      `Winchester anchors the northern Shenandoah Valley — Virginia wine country's fastest-growing corridor, the apple orchard heartland, and a city where Civil War history, Patsy Cline's legacy, and the growing Shenandoah wine trail intersect with a modern community that has made this one of the most desirable small cities in the mid-Atlantic. Hibachi at home in Winchester brings a certified teppanyaki chef to your property with the full setup and a live-fire performance built for the wine country entertaining sensibility of this part of Virginia — vineyard property dinners, historic home events, and backyard gatherings that deserve better than a restaurant reservation.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or estate outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For larger Winchester gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Winchester weekend events book 2–3 weeks ahead. Fall wine country season and spring events fill fastest. Serving Winchester and the northern Shenandoah Valley — Front Royal, Stephens City, Berryville, Woodstock, Strasburg, and surrounding Frederick County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 242 — Roanoke (profileIdx 18)
  {
    headline: () => `Hibachi at Home in Roanoke`,
    opening:  () =>
      `Roanoke is western Virginia's Star City — the Blue Ridge Mountain backdrop, the thriving Grandin Village and City Market arts district, and a community that has made this regional hub one of the most livable cities in the Southeast. The backyard culture in Roanoke runs through neighborhood celebrations, Virginia Tech graduation parties in the spring, birthday milestones that bring relatives in from across the region, and summer evenings on the decks and patios that take full advantage of the Blue Ridge setting. Hibachi at home in Roanoke brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any Roanoke gathering into the evening your guests plan the next one around.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Roanoke gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Roanoke weekend events book 2–3 weeks ahead. Virginia Tech graduation season (May) and summer weekends fill fastest. Serving Roanoke and all of western Virginia — Salem, Vinton, Botetourt County, Bedford, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 243 — Blacksburg (profileIdx 19)
  {
    headline: () => `Hibachi at Home in Blacksburg`,
    opening:  () =>
      `Blacksburg is Virginia Tech — and Virginia Tech is one of the largest universities in the country, with 37,000+ students, the Montgomery County community that has grown up around the campus, and a graduation season that fills every event space in the New River Valley for two weeks in May. Hibachi at home in Blacksburg brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that gives any Blacksburg gathering — graduation party, birthday dinner, neighborhood celebration — a centerpiece that no restaurant in the Blacksburg-Christiansburg corridor can match. When Virginia Tech graduation weekend has every venue booked solid, having the chef come to your backyard is the obvious answer.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Blacksburg graduation gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Blacksburg events book 2–3 weeks ahead — Virginia Tech graduation weekend (early May) requires 4–6 weeks' advance notice. Serving Blacksburg and all of Montgomery County — Christiansburg, Radford, Pulaski, Pearisburg, and surrounding New River Valley communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 244 — Herndon (profileIdx 20)
  {
    headline: () => `Hibachi at Home in Herndon`,
    opening:  () =>
      `Herndon sits at the geographic center of Northern Virginia's technology and government services corridor — minutes from Dulles International Airport, adjacent to Reston's tech campus cluster, and surrounded by AWS cloud campuses, cybersecurity firms, and intelligence community contractors that have made the Dulles corridor one of the most economically significant addresses in the country. Hibachi at home in Herndon brings a certified teppanyaki chef to your townhouse patio, corporate outdoor space, or suburban backyard with the full setup and a live-fire performance that elevates any Herndon gathering — corporate team dinner, birthday milestone, or neighborhood celebration — above anything the local restaurant circuit can deliver. Minutes from Tysons, serving the entire NoVA corridor.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, backyard, or corporate outdoor venue. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Herndon events over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Herndon events book 2–4 weeks ahead. Spring and early summer fill fastest along the Dulles corridor. Serving Herndon and all of Northern Virginia — Reston, Sterling, Chantilly, Fairfax, McLean, Tysons, and surrounding Fairfax County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 245 — Leesburg (profileIdx 21)
  {
    headline: () => `Private Hibachi Chef in Leesburg`,
    opening:  () =>
      `Leesburg is Loudoun County's seat and Virginia's most dynamic exurban address — the wine country estates of the Middleburg corridor, the horse farm properties of western Loudoun, and the One Loudoun district that has brought world-class dining and retail to what was once quiet hunt country. The Leesburg community entertains at a high standard: estate properties along the Catoctin foothills, farmhouse event venues of western Loudoun, and the established residential neighborhoods of downtown Leesburg and Kincaid Forest all host gatherings where a private hibachi chef at your property is the natural choice. Private hibachi at your Leesburg estate brings the full setup and a live-fire performance calibrated for Northern Virginia wine country's discerning hosts.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, and premium upgrades available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate grounds, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For large Leesburg estate gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Leesburg estate and weekend events book 3–4 weeks ahead. Spring wine country season and summer fill fastest. Serving Leesburg and all of Loudoun County — Ashburn, Sterling, Purcellville, Round Hill, Hamilton, Middleburg, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 246 — Manassas (profileIdx 22)
  {
    headline: () => `Hibachi at Home in Manassas`,
    opening:  () =>
      `Manassas is Prince William County's seat — the Civil War battlefields at Manassas National Battlefield, the growing commuter suburb that has expanded with the DC metro area, and a diverse community of families, military families from Quantico, and young professionals who have made Prince William one of Virginia's fastest-growing counties. Hibachi at home in Manassas brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live-fire cooking performance that gives any Manassas gathering — graduation party, birthday dinner, neighborhood celebration — a centerpiece that no Prince William County restaurant can replicate. The chef comes to you.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Manassas gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Manassas weekend events book 2–3 weeks ahead. Graduation season and summer Saturdays fill fastest. Serving Manassas and all of Prince William County — Woodbridge, Gainesville, Bristow, Centreville, Chantilly, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 247 — Woodbridge (profileIdx 23)
  {
    headline: () => `Hibachi at Home in Woodbridge`,
    opening:  () =>
      `Woodbridge is the I-95 corridor's hub — the Potomac Mills outlet district, the growing Stonebridge community, and a Prince William County city that has become one of the most diverse and rapidly growing addresses in Northern Virginia. The Woodbridge community spans military families from Quantico, federal workers commuting to DC, and large South Asian, Hispanic, and Eastern European communities that celebrate milestone occasions with genuine intention. Hibachi at home in Woodbridge brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live-fire cooking performance built for the celebrations that define this community — graduation parties that bring families in from three states, birthday milestones for multigenerational gatherings, and neighborhood events that deserve a real centerpiece.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Woodbridge gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Woodbridge weekend events book 2–3 weeks ahead. Graduation season and summer Saturdays fill fastest. Serving Woodbridge and all of Prince William County — Manassas, Dumfries, Occoquan, Lorton, Stafford, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 248 — Chantilly (profileIdx 24)
  {
    headline: () => `Hibachi at Home in Chantilly`,
    opening:  () =>
      `Chantilly is Fairfax County's Dulles corridor — the Westfields corporate campus, the AWS and data center infrastructure that has made this one of the most tech-dense addresses in the country, and the established suburban neighborhoods of Greenbriar, Westfields, and South Riding that have attracted the Northern Virginia professional class. The Chantilly community celebrates milestones at a high standard: tech and government contractor families here know good entertaining, and hibachi at home in Chantilly consistently outperforms every restaurant option between Reston and Dulles. Your certified teppanyaki chef arrives with the full setup, performs for your guests, and leaves your property spotless.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Chantilly events, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Chantilly weekend events book 2–4 weeks ahead. Spring and summer fill fastest along the Dulles corridor. Serving Chantilly and all of Fairfax County — Herndon, Reston, Centreville, Sterling, McLean, Tysons, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── Blog posts (6 theme arrays × 3 posts) ─────────────────────────────────────
const VA_BLOG_POSTS = [
  // Theme 0 — NoVA Luxury (variant 0)
  [
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?',                      excerpt: 'McLean and Northern Virginia estate hosts — why private hibachi at your property beats every Tysons corridor restaurant option.', date: '2025-01-22' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for Northern Virginia estate hibachi events — what\'s included and premium protein options.', date: '2025-01-15' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',            excerpt: 'McLean and Great Falls hosts: what happens from first contact through complete cleanup at a NoVA estate hibachi event.', date: '2024-11-20' },
  ],
  // Theme 1 — NoVA Urban/Corporate (variant 1)
  [
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',            excerpt: 'Arlington, Reston, and Fairfax tech corridor teams — why a private hibachi chef beats every Northern Virginia corporate dinner format.', date: '2025-03-15' },
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',            excerpt: 'Why Arlington and Alexandria young professionals are choosing private hibachi for bachelorette weekends.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: The Northern Virginia Verdict',          excerpt: 'Fairfax, Arlington, and Reston hosts — why private hibachi outclasses any Tysons corridor restaurant option.', date: '2025-01-22' },
  ],
  // Theme 2 — Richmond Metro (variant 2)
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'Richmond metro hosts — how to plan a backyard hibachi birthday party that outclasses any Short Pump restaurant.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything Richmond and Midlothian hosts need before the private hibachi chef arrives.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for Richmond metro hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
  ],
  // Theme 3 — Hampton Roads (variant 3)
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'Virginia Beach and Hampton Roads families — how to host a backyard hibachi event that matches the occasion.', date: '2025-04-08' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',            excerpt: 'Hampton Roads military families and Virginia Beach hosts: what happens from booking to cleanup.', date: '2024-11-20' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: The Hampton Roads Verdict',              excerpt: 'Why Virginia Beach and Norfolk families choose private hibachi over local restaurant dining for milestone events.', date: '2025-01-22' },
  ],
  // Theme 4 — Wine Country & Historic (variant 4)
  [
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',            excerpt: 'Charlottesville and Williamsburg bachelorette weekends — why private hibachi at your rental property is the right call.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: Virginia Wine Country Edition',          excerpt: 'Why central Virginia vineyard and historic property guests choose private hibachi over restaurant dining.', date: '2025-01-22' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',            excerpt: 'Charlottesville and Winchester hosts: what happens from booking through cleanup at a wine country hibachi event.', date: '2024-11-20' },
  ],
  // Theme 5 — Blue Ridge & Western (variant 5)
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'Roanoke and Blacksburg families — how to host a backyard hibachi party that stands out in western Virginia.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything Roanoke Valley and New River Valley hosts need before the private hibachi chef arrives.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for western Virginia hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
  ],
]

// ── Major cities map (Batch 1 + Batch 2 VA cities) ───────────────────────────
const VA_MAJOR_CITIES = {
  // ── Theme 0 — NoVA Luxury ───────────────────────────────────────────────────
  'mclean':         { v: 0, profileIdx: 0, nearby: ['Tysons','Great Falls','Vienna','Falls Church','Arlington','Fairfax'] },
  // ── Theme 1 — NoVA Urban/Corporate ─────────────────────────────────────────
  'fairfax':        { v: 1, profileIdx: 1, nearby: ['McLean','Arlington','Alexandria','Reston','Herndon','Vienna','Tysons'] },
  'arlington':      { v: 1, profileIdx: 2, nearby: ['McLean','Alexandria','Falls Church','Tysons','Fairfax','Washington DC'] },
  'alexandria':     { v: 1, profileIdx: 3, nearby: ['Arlington','McLean','Springfield','Fairfax','Woodbridge','Fort Belvoir'] },
  'reston':         { v: 1, profileIdx: 4, nearby: ['Herndon','McLean','Fairfax','Sterling','Tysons','Chantilly','Dulles'] },
  // ── Theme 2 — Richmond Metro ────────────────────────────────────────────────
  'richmond':         { v: 2, profileIdx: 5,  nearby: ['Short Pump','Midlothian','Henrico','Chesterfield','Fredericksburg','Petersburg'] },
  'short-pump':       { v: 2, profileIdx: 6,  nearby: ['Richmond','Henrico','Glen Allen','Mechanicsville','Chesterfield','Goochland'] },
  'midlothian':       { v: 2, profileIdx: 7,  nearby: ['Richmond','Chesterfield','Chester','Colonial Heights','Bon Air','Brandermill'] },
  'fredericksburg':   { v: 2, profileIdx: 8,  nearby: ['Spotsylvania','Stafford','King George','Woodbridge','Quantico','Culpeper'] },
  'henrico':          { v: 2, profileIdx: 9,  nearby: ['Richmond','Short Pump','Glen Allen','Mechanicsville','Varina','Lakeside'] },
  // ── Theme 3 — Hampton Roads ─────────────────────────────────────────────────
  'virginia-beach':   { v: 3, profileIdx: 10, nearby: ['Chesapeake','Norfolk','Hampton','Newport News','Suffolk','Portsmouth'] },
  'chesapeake':       { v: 3, profileIdx: 11, nearby: ['Virginia Beach','Norfolk','Suffolk','Portsmouth','Hampton','Newport News'] },
  'norfolk':          { v: 3, profileIdx: 12, nearby: ['Virginia Beach','Chesapeake','Portsmouth','Hampton','Newport News','Suffolk'] },
  'newport-news':     { v: 3, profileIdx: 13, nearby: ['Hampton','Norfolk','Williamsburg','Poquoson','York County','Suffolk'] },
  'hampton':          { v: 3, profileIdx: 14, nearby: ['Newport News','Norfolk','York County','Poquoson','Chesapeake','Virginia Beach'] },
  // ── Theme 4 — Wine Country & Historic ──────────────────────────────────────
  'charlottesville':  { v: 4, profileIdx: 15, nearby: ['Waynesboro','Crozet','Staunton','Harrisonburg','Lynchburg','Fredericksburg'] },
  'williamsburg':     { v: 4, profileIdx: 16, nearby: ['Newport News','Hampton','York County','James City County','Yorktown','Richmond'] },
  'winchester':       { v: 4, profileIdx: 17, nearby: ['Front Royal','Stephens City','Berryville','Woodstock','Martinsburg','Leesburg'] },
  // ── Theme 5 — Blue Ridge & Western ─────────────────────────────────────────
  'roanoke':          { v: 5, profileIdx: 18, nearby: ['Salem','Vinton','Blacksburg','Christiansburg','Radford','Bedford'] },
  'blacksburg':       { v: 5, profileIdx: 19, nearby: ['Roanoke','Christiansburg','Radford','Salem','Pulaski','Pearisburg'] },
  // ── Theme 1 — NoVA Urban/Corporate (Dulles/Prince William corridor) ─────────
  'herndon':          { v: 1, profileIdx: 20, nearby: ['Reston','Sterling','Dulles','Chantilly','McLean','Fairfax','Tysons'] },
  'manassas':         { v: 1, profileIdx: 22, nearby: ['Woodbridge','Centreville','Chantilly','Fairfax','Gainesville','Bristow'] },
  'woodbridge':       { v: 1, profileIdx: 23, nearby: ['Manassas','Dumfries','Occoquan','Lorton','Alexandria','Stafford'] },
  'chantilly':        { v: 1, profileIdx: 24, nearby: ['Herndon','Reston','Sterling','Centreville','Fairfax','Dulles','McLean'] },
  // ── Theme 0 — NoVA Luxury (Loudoun wine/horse country) ─────────────────────
  'leesburg':         { v: 0, profileIdx: 21, nearby: ['Ashburn','Sterling','Purcellville','Round Hill','Hamilton','Middleburg'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const VA_CITY_DISPLAY_NAMES = {}

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const VA_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in', // 0  — McLean
  'Hibachi at Home in',      // 1  — Fairfax
  'Hibachi at Home in',      // 2  — Arlington
  'Hibachi at Home in',      // 3  — Alexandria
  'Hibachi Catering in',     // 4  — Reston
  'Hibachi at Home in',      // 5  — Richmond
  'Hibachi at Home in',      // 6  — Short Pump
  'Hibachi at Home in',      // 7  — Midlothian
  'Hibachi at Home in',      // 8  — Fredericksburg
  'Hibachi at Home in',      // 9  — Henrico
  'Hibachi at Home in',      // 10 — Virginia Beach
  'Hibachi at Home in',      // 11 — Chesapeake
  'Hibachi at Home in',      // 12 — Norfolk
  'Hibachi at Home in',      // 13 — Newport News
  'Hibachi at Home in',      // 14 — Hampton
  'Private Hibachi Chef in', // 15 — Charlottesville
  'Private Hibachi Chef in', // 16 — Williamsburg
  'Hibachi at Home in',      // 17 — Winchester
  'Hibachi at Home in',      // 18 — Roanoke
  'Hibachi at Home in',      // 19 — Blacksburg
  'Hibachi at Home in',      // 20 — Herndon
  'Private Hibachi Chef in', // 21 — Leesburg
  'Hibachi at Home in',      // 22 — Manassas
  'Hibachi at Home in',      // 23 — Woodbridge
  'Hibachi at Home in',      // 24 — Chantilly
]

const VA_THEME_H1_PREFIXES = [
  'Private Hibachi Chef in', // v=0 NoVA Luxury generic
  'Hibachi at Home in',      // v=1 NoVA Urban/Corporate generic
  'Hibachi at Home in',      // v=2 Richmond Metro generic
  'Hibachi at Home in',      // v=3 Hampton Roads generic
  'Private Hibachi Chef in', // v=4 Wine Country & Historic generic
  'Hibachi at Home in',      // v=5 Blue Ridge & Western generic
]

// ── Custom meta overrides ──────────────────────────────────────────────────────
const VA_CUSTOM_META = {
  'mclean': {
    title: 'Private Hibachi Chef in McLean, VA | Estate & Executive Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in McLean, VA for estate dinners, embassy entertaining, and executive events. Filet mignon & lobster tail upgrades. Full setup & cleanup. From $60/adult.',
  },
  'reston': {
    title: 'Hibachi Catering in Reston, VA | Corporate & Private Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Reston corporate team dinner, client event, or private gathering. Certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving all of NoVA.',
  },
  'richmond': {
    title: 'Hibachi at Home in Richmond, VA | Private Chef for Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Richmond, VA for graduation parties, birthday dinners, and backyard celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'fredericksburg': {
    title: 'Hibachi at Home in Fredericksburg, VA | Private Chef for Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Fredericksburg, VA for graduation parties, military celebrations, and backyard dinners. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'virginia-beach': {
    title: 'Hibachi at Home in Virginia Beach, VA | Private Chef for Hampton Roads Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Virginia Beach, VA for military homecomings, graduation parties, and waterfront celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'norfolk': {
    title: 'Hibachi at Home in Norfolk, VA | Private Chef for Hampton Roads Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Norfolk, VA for military celebrations, ODU graduation parties, and backyard dinners. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'charlottesville': {
    title: 'Private Hibachi Chef in Charlottesville, VA | Wine Country & UVA Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Charlottesville, VA for UVA graduation parties, vineyard estate dinners, and anniversary celebrations. Premium proteins. Full setup & cleanup. From $60/adult.',
  },
  'williamsburg': {
    title: 'Private Hibachi Chef in Williamsburg, VA | Historic Estate & W&M Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Williamsburg, VA for W&M graduation parties, bachelorette weekends, and historic property dinners. Full setup & cleanup. From $60/adult.',
  },
  'blacksburg': {
    title: 'Hibachi at Home in Blacksburg, VA | Virginia Tech Graduation & Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Blacksburg, VA for Virginia Tech graduation parties and backyard celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'roanoke': {
    title: 'Hibachi at Home in Roanoke, VA | Private Chef for Blue Ridge Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Roanoke, VA for graduation parties, birthday celebrations, and backyard dinners. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
}

// ── Main builder ──────────────────────────────────────────────────────────────
export function getVirginiaCityData(citySlug, cityName) {
  const major       = VA_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getVAVariantIndex(citySlug)
  const theme       = VA_IMAGE_THEMES[v]
  const displayName = VA_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Virginia',
    stateAbbr:    'VA',
    stateSlug:    'virginia',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: VA_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['McLean', 'Arlington', 'Alexandria', 'Reston', 'Fairfax'],
    localHighlights:   VA_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: VA_OCCASIONS[v],
    faqSet:            VA_FAQ_SETS[v](displayName),
    testimonials:      VA_TESTIMONIALS[v],
    // INTRO_VARIANTS: 218–223 = VA generic, 224–228 = VA city-specific
    uniqueIntroVariant:  (major?.profileIdx != null) ? 224 + major.profileIdx : 218 + v,
    uniqueWhyUsVariant:  v % 5,
    // CLOSING_VARIANTS: 218–223 = VA generic, 224–228 = VA city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 224 + major.profileIdx : 218 + v,
    // H1 prefix for CityHero
    heroH1Prefix: major?.profileIdx != null
      ? VA_PROFILE_H1_PREFIXES[major.profileIdx]
      : VA_THEME_H1_PREFIXES[v],
    // Custom meta overrides
    ...(VA_CUSTOM_META[citySlug]
      ? { metaTitle: VA_CUSTOM_META[citySlug].title, metaDescription: VA_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getVaHowItWorks(citySlug) {
  const major = VA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getVAVariantIndex(citySlug)
  return VA_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getVaSectionVariant(citySlug) {
  const major = VA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getVAVariantIndex(citySlug)
  return VA_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getVaCityImage(citySlug) {
  return VA_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getVaSupportImages(citySlug, variantIdx) {
  if (VA_SUPPORT_IMAGES[citySlug]) return VA_SUPPORT_IMAGES[citySlug]
  const major = VA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getVAVariantIndex(citySlug)
  return VA_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getVaBlogPosts(variant, count) {
  return VA_BLOG_POSTS[variant % VA_BLOG_POSTS.length].slice(0, count)
}
