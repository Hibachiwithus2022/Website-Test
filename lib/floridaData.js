// ─────────────────────────────────────────────────────────────────────────────
// Florida City Page Variation System
// 5 rotating variants for every content section.
// Florida personality: vacation rentals, beach houses, waterfront events,
// Airbnb gatherings, bachelorette weekends, snowbird entertaining.
// Florida should NOT feel like Texas. Different tone, different hooks.
// ─────────────────────────────────────────────────────────────────────────────

// ── Deterministic variant index from city slug ────────────────────────────────
export function getFloridaVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) {
    h = (((h << 5) + h) ^ citySlug.charCodeAt(i)) >>> 0
  }
  return h % 5
}

// ── Hero subtitles — 5 Florida-specific tag lines ─────────────────────────────
export const FLORIDA_HERO_SUBTITLES = [
  (city) => `Beach House Hibachi · ${city} Vacation Rentals · Waterfront Events From $60/Adult`,
  (city) => `Airbnb Parties · Poolside Teppanyaki · Private Chef in ${city}, FL`,
  (city) => `Family Vacation Dining · Vacation Homes · We Come to Your ${city} Rental`,
  (city) => `Bachelorette Weekends · Pool Deck Events · Private Hibachi in ${city}`,
  (city) => `Snowbird Entertaining · Waterfront Patios · Serving ${city} & All of Florida`,
]

// ── Local highlights — 5 sets of 6 sidebar bullets ───────────────────────────
export const FLORIDA_LOCAL_HIGHLIGHTS = [
  // 0 — Beach house / vacation rental focus
  (city) => [
    `Perfect for Airbnb and VRBO vacation rentals in ${city} — we set up on any pool deck or patio`,
    `Beach house groups of 12–40 are our sweet spot — all equipment travels with the chef`,
    `Always confirm your rental allows open-flame outdoor cooking before booking`,
    `Summer evenings and holiday weekends book fast in ${city} — reserve your date early`,
    `We've run poolside hibachi events across the Florida coast — the waterfront setting makes it unforgettable`,
    `All-inclusive pricing: $60/adult, $30/child, $600 minimum — no hidden vacation fees`,
  ],
  // 1 — Luxury / waterfront estate focus
  (city) => [
    `Waterfront estate dinners, canal-front patios, and luxury pool decks are our specialty in ${city}`,
    `Premium protein upgrades available: filet mignon, lobster tail, scallops, Chilean sea bass`,
    `White-glove setup on your private dock, terrace, or outdoor dining area`,
    `${city}'s luxury residential market expects premium — our chefs deliver every time`,
    `Corporate retreats, VIP client dinners, anniversary celebrations — no occasion too refined`,
    `Snowbird season (October–April) is our busiest window in ${city} — book early for winter dates`,
  ],
  // 2 — Family vacation / theme park area focus
  (city) => [
    `Vacation homes, VRBO properties, and resort-area rentals welcome — we come to your home base`,
    `Family reunion dinners at vacation houses in the ${city} area are one of our most-booked events`,
    `Hibachi is the best way to feed 20 family members without leaving your vacation rental`,
    `Kids love the fire tricks and flying shrimp — the whole family stays at the table for once`,
    `One chef handles 10–20 guests; two stations cover families of 30–50 easily`,
    `Central Florida vacation season runs year-round — same-week bookings often available`,
  ],
  // 3 — Bachelorette / group social focus
  (city) => [
    `Bachelorette weekends, birthday trips, and girl's getaways are our most-booked in ${city}`,
    `Pool deck hibachi is the move when you want the night to be genuinely unforgettable`,
    `Groups of 12–25 women at a ${city} vacation rental — this is what we do best`,
    `The chef stays, performs, and keeps the energy high all the way through dessert`,
    `Way more memorable than another restaurant reservation — and it stays at the house`,
    `${city} party houses and vacation rentals with pools are perfect for hibachi nights`,
  ],
  // 4 — Snowbird / residential focus
  (city) => [
    `Year-round outdoor entertaining in ${city} — hibachi works every month, not just summer`,
    `Snowbird season events (October–April) are our most popular window in Southwest and Gulf Florida`,
    `Covered lanais, screened-in patios, and pool cages all work perfectly for hibachi setup`,
    `${city} residential communities and gated neighborhoods love private chef dining at home`,
    `Same-week bookings available on weekdays — weekend dates book 2–3 weeks out`,
    `$60/adult covers everything: chef, grill, propane, all food, setup, and complete cleanup`,
  ],
]

// ── Featured occasions — 5 rotating event-type grids ─────────────────────────
export const FLORIDA_OCCASIONS = [
  // 0 — Beach / vacation rental focus
  [
    'Beach House Parties', 'Bachelorette Weekends', 'Birthday Getaways',
    'Family Reunions', 'Vacation Rental Events', 'Bachelor Parties',
    'Pool Deck Dinners', 'Anniversary Getaways', 'Graduation Trips', 'Group Vacation Nights',
  ],
  // 1 — Luxury / waterfront focus
  [
    'Waterfront Estate Dinners', 'Corporate Retreats', 'Anniversary Celebrations',
    'Bachelorette Weekends', 'VIP Client Dinners', 'Pool Deck Parties',
    'Snowbird Entertaining', 'Birthday Milestones', 'Luxury Vacation Nights', 'Holiday Gatherings',
  ],
  // 2 — Family vacation focus
  [
    'Family Vacation Reunions', 'Birthday Pool Parties', 'Vacation Home Dinners',
    'Graduation Celebrations', 'Multi-Generational Gatherings', 'Anniversary Trips',
    'Group Vacation Nights', 'Kids Birthday Parties', 'Theme Park Trip Dinners', 'Holiday Gatherings',
  ],
  // 3 — Bachelorette / social focus
  [
    'Bachelorette Weekends', 'Birthday Getaways', 'Pool Party Upgrades',
    'Bachelorette Parties', 'Bachelor Parties', 'Bridal Shower Events',
    'Vacation House Parties', 'Girls Trip Dinners', 'Couples Getaways', 'Group Celebrations',
  ],
  // 4 — Snowbird / residential focus
  [
    'Snowbird Entertaining', 'Backyard Patio Dinners', 'Birthday Celebrations',
    'Anniversary Dinners', 'Corporate Events', 'Holiday Gatherings',
    'Neighborhood Dinner Parties', 'Family Reunions', 'Retirement Celebrations', 'Charity Fundraisers',
  ],
]

// ── FAQ sets — 5 rotating sets of 6 Florida-specific FAQs ─────────────────────
export const FLORIDA_FAQ_SETS = [
  // 0 — Beach house / vacation rental focus
  (city) => [
    {
      q: `Can you set up at a vacation rental, Airbnb, or VRBO in the ${city} area?`,
      a: `Yes — vacation rentals are one of our most common setups across Florida. We come to your rental property with the full teppan grill, all ingredients, and complete setup. Before booking, confirm the property allows outdoor open-flame cooking — most short-term rentals in Florida permit it with advance notice to the host.`,
    },
    {
      q: `Is a pool deck or covered lanai the right setup for hibachi in ${city}?`,
      a: `Absolutely — pool decks, covered lanais, and screened-in patios are our favorite setups in Florida. We need a flat, stable surface of at least 10×10 ft away from the pool edge. The chef stays safely on hard surface, and your guests can gather around the station or stay poolside. It works beautifully.`,
    },
    {
      q: `What's the best time of year to book hibachi at a ${city} beach house?`,
      a: `Hibachi works year-round in Florida. Peak season at most beach and vacation destinations runs June–August (summer) and March–April (spring break, Easter). For snowbird-heavy areas like Naples and Sarasota, October through April is very popular. Book 2–3 weeks ahead for summer weekends, 3–4 weeks for holiday weekends.`,
    },
    {
      q: `Can you set up on a waterfront property or boat dock in ${city}?`,
      a: `Yes — waterfront properties, canal-front homes, and private dock areas are some of our most memorable Florida setups. We need vehicle access to the setup area and a flat stable surface for the grill. Describe your venue when requesting a quote and we'll confirm coverage. Waterfront events are a specialty in the Sunshine State.`,
    },
    {
      q: `How many guests can one hibachi chef serve at a ${city} vacation rental?`,
      a: `One chef comfortably serves 10–20 guests per session. For groups of 25+, we recommend two chef stations. Most Florida vacation rental groups run 12–25 people — right in our sweet spot. Give us your head count and we'll size the setup to match your group and your space.`,
    },
    {
      q: `Do you serve vacation communities and resort areas outside ${city} proper?`,
      a: `Yes — we serve the entire ${city} metro area including vacation communities, resort corridors, and adjacent communities. Most locations within 30 miles of the city center are in our standard service area with no travel fee. For vacation properties further out, a travel fee may apply and is always disclosed in your quote upfront.`,
    },
  ],
  // 1 — Luxury / waterfront estate focus
  (city) => [
    {
      q: `Do you offer premium protein options for luxury events in ${city}?`,
      a: `Yes — all premium upgrades are available at any event: filet mignon (+$10/person), lobster tail (+$15/person), Chilean sea bass (+$12/person), and scallops (+$5/person). Premium events can mix standard and upgrade proteins per guest. We accommodate per-guest customization and can configure an all-premium menu for elevated occasions.`,
    },
    {
      q: `Can you cater a corporate retreat or VIP client dinner at a ${city} property?`,
      a: `Absolutely — corporate retreats, client appreciation events, and executive dinners are among our most-requested bookings in ${city}. Our chefs are experienced in professional presentation and coordinated service timing. We scale from intimate 10-person executive dinners to multi-station corporate events for 100+ guests.`,
    },
    {
      q: `Do you set up on waterfront terraces, rooftop decks, or private docks in ${city}?`,
      a: `Yes — waterfront terraces, elevated pool decks, rooftop spaces, and private dock areas all work for hibachi setup. We need a flat, stable surface (at least 10×10 ft) and vehicle access to the setup location. Describe your specific venue when requesting a quote — we've run events on some of the most beautiful properties in Florida.`,
    },
    {
      q: `How far in advance should I book a luxury hibachi event in ${city}?`,
      a: `For premium weekend events and corporate bookings, we recommend 3–4 weeks ahead. Peak season (October–April in Gulf Coast cities, June–August in tourist areas) can fill 4–6 weeks out for premium Saturday dates. Weekday executive dinners can often be arranged with 1–2 weeks notice. Contact us early — popular dates go fast.`,
    },
    {
      q: `What does a ${city} hibachi event include at the standard price?`,
      a: `The standard $60/adult rate includes the certified chef, full teppan grill setup, propane, 2 protein choices per person (chicken, steak, shrimp, salmon, or tofu), fried rice, grilled vegetables, salad, miso soup, yum yum sauce, ginger sauce, plates, chopsticks, and complete setup and cleanup. Nothing is held back — the full show is always included.`,
    },
    {
      q: `Do you handle snowbird season events and year-round bookings in ${city}?`,
      a: `Yes — ${city} is a year-round market. Snowbird season (October–April) is our busiest window in Gulf Coast communities, with many seasonal residents hosting regular dinners and events. Summer is peak in tourist and vacation-rental cities. We maintain chef coverage year-round across all Florida markets.`,
    },
  ],
  // 2 — Family vacation / theme park focus
  (city) => [
    {
      q: `Can you come to a vacation rental or vacation home in the ${city} area?`,
      a: `Yes — this is one of our most common Florida bookings. We set up at your vacation home, VRBO, or Airbnb with the full teppan grill, all ingredients, and complete entertainment. Confirm the property allows outdoor open-flame cooking. Most vacation homes in the ${city} area have pool decks or covered outdoor areas that work perfectly.`,
    },
    {
      q: `Is hibachi good for large family vacation groups in ${city}?`,
      a: `It's one of the best options for family vacation groups. Everyone eats at the same time, kids are entertained by the fire tricks and chef performance, and there's no managing multiple restaurant reservations for 20 people. One chef handles 10–20 guests comfortably; two stations cover families of 30–50. It turns the vacation home into the evening's main event.`,
    },
    {
      q: `Are hibachi events kid-friendly for vacation groups in ${city}?`,
      a: `Absolutely — kids are consistently the most enthusiastic guests at hibachi events. The fire tricks, flying shrimp, and onion volcano keep them engaged from start to finish. Children ages 4–12 are $30 each (under 3 eat free). Our chefs know how to work a mixed-age crowd and adjust the show energy to the room.`,
    },
    {
      q: `Do you serve theme park corridor communities near ${city}?`,
      a: `Yes — we serve vacation home communities, resort corridors, and the full metro area around ${city}. The Central Florida vacation rental market is one of our busiest, and we have chefs available across the region. Most vacation-area properties are within our standard service zone. Give us your address and we'll confirm coverage.`,
    },
    {
      q: `How much notice do I need to book a vacation group hibachi event in ${city}?`,
      a: `We recommend booking 1–2 weeks in advance for vacation group events. Summer and holiday weekends fill faster — book 3–4 weeks ahead for July 4th, Memorial Day, and Thanksgiving-week dates. We do our best to accommodate last-minute requests; contact us directly for same-week availability.`,
    },
    {
      q: `What do vacation rental guests need to have ready for the hibachi chef?`,
      a: `Tables and chairs for your guests — that's it. The chef handles everything else. We arrive 5–10 minutes before your scheduled start time with the full grill, all ingredients, sauces, plates, and chopsticks. No grocery shopping, no cleanup — you just gather your group and enjoy the evening.`,
    },
  ],
  // 3 — Bachelorette / social group focus
  (city) => [
    {
      q: `Is hibachi a good activity for a bachelorette party in ${city}?`,
      a: `It's one of the best. A private hibachi chef at your vacation rental or Airbnb eliminates the restaurant reservation headache for a group of 12–20 women, keeps everyone together in your space, and gives the night a built-in entertainment anchor that goes way beyond a dinner out. The chef plays to the crowd — and bachelorette groups bring the best energy. Book early: weekends in ${city} fill fast.`,
    },
    {
      q: `Can the hibachi chef set up at our pool deck or Airbnb patio in ${city}?`,
      a: `Yes — pool decks and outdoor patios are our most popular bachelorette setups in Florida. We need a flat surface of at least 10×10 ft, confirmed permission from the property host for open-flame outdoor cooking, and vehicle access to unload equipment. Most ${city}-area vacation rentals and party houses accommodate us easily.`,
    },
    {
      q: `How many people can hibachi serve for a bachelorette group in ${city}?`,
      a: `One chef handles 10–20 guests per session beautifully — the sweet spot for most bachelorette groups. For larger groups (25–40), we bring two chef stations running in parallel. For bachelorette groups over 40, we configure accordingly and the setup becomes truly spectacular. Give us your head count and we'll size it correctly.`,
    },
    {
      q: `Can we customize the evening for the bride at a ${city} bachelorette hibachi?`,
      a: `Yes — let us know in advance and we'll incorporate the bride's name, customize the chef's engagement during the performance, and accommodate any special moments you're planning. We've done plenty of bachelorette events and understand the assignment. The chef will make the bride feel like the star of the evening.`,
    },
    {
      q: `How far in advance should we book hibachi for our ${city} bachelorette weekend?`,
      a: `Bachelorette weekend dates — especially Saturday evenings — book out 3–5 weeks ahead in popular Florida destinations. Holiday weekends and peak season dates (March–April, June–August) can fill 5–6 weeks out. Don't wait once you have your dates confirmed. Popular ${city} party houses fill up quickly across the board.`,
    },
    {
      q: `What makes hibachi better than going to a restaurant for a ${city} bachelorette group?`,
      a: `You stay at your rental. No Ubers, no shared dining rooms with strangers, no splitting checks across 18 people. The chef comes to you, performs the full show, cooks every plate to order, and cleans up when it's done. It's a contained, private, completely customizable evening — and the photos are incredible. Bachelorette groups consistently say hibachi night is the best event of the trip.`,
    },
  ],
  // 4 — Snowbird / residential focus
  (city) => [
    {
      q: `Is private hibachi good for year-round entertaining in ${city}?`,
      a: `Florida's outdoor season is effectively year-round — which means hibachi works every month. We operate from January through December. Snowbird season (October–April) is especially popular in Gulf Coast and Southwest Florida communities. Summer evenings work beautifully as well. We maintain year-round chef coverage across all Florida markets.`,
    },
    {
      q: `Can you set up on a covered lanai or screened pool cage in ${city}?`,
      a: `Yes — screened enclosures, covered lanais, and enclosed pool cages are some of our favorite Florida setups. We need adequate ventilation (a screened enclosure counts) and a flat, stable surface of at least 10×10 ft. If your lanai is enclosed with screens and has a concrete floor, it's an ideal hibachi setup. Describe your outdoor space when requesting a quote.`,
    },
    {
      q: `Can hibachi work for smaller ${city} dinner parties of 10–15 guests?`,
      a: `Absolutely — smaller dinner parties are a great fit. Our minimum is 10 guests (or $600 event minimum, whichever is greater). For 10–15 guests, one chef runs the full show: cooking to order, fire tricks, full performance. It's an intimate evening that feels incredibly personal. Many of our best events are smaller dinner parties in Florida residential homes.`,
    },
    {
      q: `Do you serve ${city}'s gated communities and private residential neighborhoods?`,
      a: `Yes — we serve gated communities, HOA neighborhoods, and private residential areas throughout Florida. We confirm security gate procedures when you book. For events inside gated communities, let us know the gate access process when submitting your request and we'll coordinate accordingly — no delays on event day.`,
    },
    {
      q: `What time of year is most popular for hibachi events in ${city}?`,
      a: `It depends on the local market. In Gulf Coast and Southwest Florida communities, the snowbird season (October–April) is our peak demand window. In tourist-heavy cities (Orlando, Tampa, Fort Lauderdale), summer brings the most event traffic. Year-round, Saturday evenings are always the most-requested slot. Book 2–3 weeks ahead for weekend dates.`,
    },
    {
      q: `Do you serve retirement communities and active adult neighborhoods in ${city}?`,
      a: `Yes — many of our Florida events take place in active adult and retirement communities. Hibachi is one of the most engaging dining experiences for a mixed or older crowd — the chef performs throughout the meal, the food is fresh and cooked to order at your preference, and it's a genuinely social evening that everyone talks about afterward.`,
    },
  ],
]

// ── Testimonials — 5 sets of 3 Florida-authentic reviews ─────────────────────
export const FLORIDA_TESTIMONIALS = [
  // 0 — Beach house / bachelorette / vacation rental
  [
    {
      text: '"Bachelorette weekend in a Destin beach house — 16 women, chef came to the pool deck, and it was the highlight of the entire trip. Every single person said it was the best part of the weekend. The bride cried happy tears during the fire show. Already planning one for the next bachelorette in the group."',
      name: 'Ashley R.',
      city: 'Nashville, TN',
      event: 'Bachelorette Party',
      initials: 'AR',
    },
    {
      text: '"Family reunion at a vacation rental in Kissimmee — 28 guests, pool deck setup, chef had the kids absolutely losing their minds over the tricks. We do a family trip every year and everyone agreed this was the best dinner we\'ve ever done on any trip. Booking again next year."',
      name: 'The Martinez Family',
      city: 'Tampa, FL',
      event: 'Family Reunion',
      initials: 'MF',
    },
    {
      text: '"Booked for my VRBO in Fort Lauderdale — a group trip with 20 friends. Nobody wanted to deal with restaurants for a group that size. The chef came to our waterfront rental, set up on the patio, and the whole night was incredible. Zero logistics on our end. Everyone is still talking about it."',
      name: 'Derek T.',
      city: 'Atlanta, GA',
      event: 'Group Vacation Dinner',
      initials: 'DT',
    },
  ],
  // 1 — Luxury / waterfront / corporate
  [
    {
      text: '"Corporate retreat at a Sarasota waterfront property — 35 people, full setup on the terrace, premium menu with filet mignon and lobster. The chef was extraordinary — professional, engaging, perfect timing. Our clients still mention it. We\'ve replaced our annual restaurant reservation permanently."',
      name: 'Michael W.',
      city: 'Sarasota, FL',
      event: 'Corporate Retreat',
      initials: 'MW',
    },
    {
      text: '"Anniversary dinner at our Naples estate — just 12 guests but the chef made it feel like a five-star restaurant. Lobster tail, filet, scallops — every plate was incredible. Our guests couldn\'t believe you could get this quality at home. Will be booking for every dinner party going forward."',
      name: 'Catherine & James L.',
      city: 'Naples, FL',
      event: 'Anniversary Dinner',
      initials: 'CL',
    },
    {
      text: '"Client appreciation event at a Boca Raton country club property — 45 guests, impeccable chef, perfect execution from first flame to cleanup. Several clients asked for the contact info on the spot. This is the standard for all our future client events."',
      name: 'Richard F.',
      city: 'Boca Raton, FL',
      event: 'Client Appreciation Dinner',
      initials: 'RF',
    },
  ],
  // 2 — Family vacation / theme park / multi-gen
  [
    {
      text: '"Family vacation in Kissimmee — rented a 10-bedroom house for 40 family members. The hibachi chef set up by the pool and we had three generations completely entertained for two hours. No one left the table. Kids were catching shrimp mid-air. Grandma said it was the best vacation moment in 20 years."',
      name: 'The Johnson Family',
      city: 'Cleveland, OH',
      event: 'Family Vacation Reunion',
      initials: 'JF',
    },
    {
      text: '"Big birthday trip to Orlando — 22 people at a vacation home, chef came to us, kids and adults equally obsessed. We did Disney the day before and this topped it. Easily the best meal of the week. Already planning our next trip around doing this again."',
      name: 'Sandra M.',
      city: 'Chicago, IL',
      event: 'Birthday Vacation Dinner',
      initials: 'SM',
    },
    {
      text: '"Booked for a family trip to Clermont — 18 family members, vacation home, pool deck setup. The chef was incredible with the kids — flying shrimp tosses, fire tricks, the whole show. Adults got a legitimate dinner. Nobody checked their phone for two hours. That never happens."',
      name: 'Luis & Maria G.',
      city: 'Miami, FL',
      event: 'Family Vacation Dinner',
      initials: 'LG',
    },
  ],
  // 3 — Bachelorette / social weekend / birthday trip
  [
    {
      text: '"Bachelorette trip to Miami — 14 of us at a South Beach Airbnb, pool deck hibachi. Best night of the whole weekend and that\'s saying something because we went all out. The chef had everyone screaming and laughing from the first flame. The bride said it was the highlight of her entire engagement."',
      name: 'Taylor P.',
      city: 'New York, NY',
      event: 'Bachelorette Party',
      initials: 'TP',
    },
    {
      text: '"Girls trip to Key West — 20 of us in a vacation house. Restaurant for a group that size sounded like a nightmare. Hibachi at the house was perfect. Chef was hilarious, food was incredible, nobody wanted the night to end. We\'re already planning next year\'s trip around doing this again."',
      name: 'Jennifer S.',
      city: 'Orlando, FL',
      event: 'Girls Trip Dinner',
      initials: 'JS',
    },
    {
      text: '"30th birthday trip to St. Pete Beach — Airbnb with a pool, hibachi on the deck. 20 guests, best dinner I\'ve had outside of a real restaurant. The chef\'s energy matched ours the entire time. Still getting texts from people who came saying it was the best birthday party they\'ve ever attended."',
      name: 'Rachel K.',
      city: 'Tampa, FL',
      event: 'Birthday Trip',
      initials: 'RK',
    },
  ],
  // 4 — Snowbird / residential / dinner party
  [
    {
      text: '"Snowbird season dinner party at our Cape Coral home — 16 guests, covered lanai setup, chef was exceptional. Our friends up from Michigan couldn\'t believe the quality you could get at home in January. Already have four more Florida dinner parties booked through April."',
      name: 'Bob & Carol H.',
      city: 'Cape Coral, FL',
      event: 'Snowbird Dinner Party',
      initials: 'BH',
    },
    {
      text: '"Neighborhood dinner party in our Naples community — 24 neighbors, pool deck, gorgeous winter evening. The chef had everyone up close and entertained for two hours. Our HOA community has never been more social. Booking again next season — this is our new annual thing."',
      name: 'Patricia M.',
      city: 'Naples, FL',
      event: 'Neighborhood Dinner Party',
      initials: 'PM',
    },
    {
      text: '"Retirement celebration for my husband in Sarasota — 30 friends and colleagues, waterfront patio, a perfect Florida evening. Everything was flawless. The chef made my husband feel like a celebrity the whole night. We have no idea how the restaurant ever competed with this."',
      name: 'Susan & Tom W.',
      city: 'Sarasota, FL',
      event: 'Retirement Celebration',
      initials: 'SW',
    },
  ],
]

// ── Image themes — 5 visual directions per variant ───────────────────────────
export const FLORIDA_IMAGE_THEMES = [
  {
    heroImage: '/pics/hero-4.jpg',
    palette:   'warm tropical, golden hour, pool shimmer',
    style:     'Beach house pool deck hibachi, outdoor living, tropical setting',
    altHint:   'Beach house hibachi party on pool deck at Florida vacation rental',
  },
  {
    heroImage: '/pics/hero-2.jpg',
    palette:   'evening luxury, waterfront glow, deep blue',
    style:     'Luxury waterfront property, upscale private dining, refined outdoor setting',
    altHint:   'Upscale private hibachi dinner at Florida waterfront estate',
  },
  {
    heroImage: '/pics/hero-1.jpg',
    palette:   'bright daylight, warm family energy, vacation home vibes',
    style:     'Vacation home, large family group, pool area, midday celebration',
    altHint:   'Family vacation hibachi dinner at Central Florida vacation rental',
  },
  {
    heroImage: '/pics/hero-3.jpg',
    palette:   'evening party, social energy, warm outdoor lighting',
    style:     'Bachelorette group at vacation rental, pool deck, celebration energy',
    altHint:   'Bachelorette party hibachi night at Florida vacation rental pool deck',
  },
  {
    heroImage: '/pics/hero-1.jpg',
    palette:   'warm afternoon, residential, serene outdoor setting',
    style:     'Screened lanai or covered patio, residential neighborhood, intimate dinner',
    altHint:   'Snowbird season private hibachi dinner on covered Florida lanai',
  },
]

// ── Intro variants — Florida-specific 0–4 ───────────────────────────────────
// These are appended to INTRO_VARIANTS at indices 18–22.
export const FLORIDA_INTRO_VARIANTS = [
  // ── 18: Vacation Rental / Beach House ─────────────────────────────────────
  {
    angle:    'florida-vacation-rental',
    headline: (city) => `Your ${city} Vacation Rental Just Got a Private Hibachi Chef`,
    opening:  (city, state) =>
      `You've booked the house, packed your people, and landed in ${city}. Now comes the question every vacation group faces: where does 20 people go for dinner without splitting into three Lyfts, waiting an hour at a restaurant, and spending half the night managing checks? The answer is — nowhere. A certified hibachi chef from Hibachi Connect comes to your rental, sets up on your pool deck, and turns your vacation home into the best dining experience of the trip.`,
    middle:   (city, state) =>
      `It works on any outdoor surface: pool decks, covered patios, lanais, waterfront terraces. The chef arrives 5–10 minutes before your start time with a full propane grill, fresh proteins, all ingredients, sauces, plates, and chopsticks. Your group gathers around the station. The flames go up. The shrimp flies. Three hours later, everyone agrees it was the best night of the vacation — and nobody had to Google parking.`,
    closing:  (city, state) =>
      `Always confirm your rental property allows outdoor open-flame cooking before booking. Most ${city}-area vacation homes do, especially properties with dedicated outdoor kitchens or pool decks. Starting at $60 per adult, $30 per child, $600 event minimum. One chef for up to 20 guests; two stations for larger vacation groups. Most quotes returned same day.`,
  },
  // ── 19: Luxury / Waterfront ───────────────────────────────────────────────
  {
    angle:    'florida-luxury-waterfront',
    headline: (city) => `Private Hibachi Dining at Your ${city} Waterfront Property`,
    opening:  (city, state) =>
      `${city} knows how to set a scene. The water behind the property, the evening light, the outdoor table set for twelve. Hibachi Connect adds the one element that elevates a beautiful setting into a genuinely unforgettable evening: a certified teppanyaki chef at the center of it, cooking premium proteins to order while entertaining everyone at the table with precision knife work, controlled fire displays, and the kind of quiet confidence that makes every guest feel like a VIP.`,
    middle:   (city, state) =>
      `Premium protein upgrades are available for any event: filet mignon, lobster tail, Chilean sea bass, scallops — mix and match by guest or configure an all-premium menu for a truly elevated experience. Your chef arrives fully equipped, handles setup on your terrace or deck, works the station throughout the evening, and leaves your property exactly as they found it. White-glove execution is the standard, not the upgrade.`,
    closing:  (city, state) =>
      `We serve ${city} and surrounding waterfront communities. Corporate retreats, VIP client dinners, anniversary celebrations, and snowbird season entertaining are among our most-requested occasions. Premium events and large groups book earlier — weekend dates during Florida's peak season can fill 4–6 weeks out. Starting at $60 per adult, with premium upgrades available at any tier.`,
  },
  // ── 20: Family Vacation ───────────────────────────────────────────────────
  {
    angle:    'florida-family-vacation',
    headline: (city) => `The Best Dinner Your ${city} Vacation Group Will Have All Week`,
    opening:  (city, state) =>
      `You planned the theme park day. You booked the beach excursion. You reserved the dinner cruise. And then someone in the family group chat suggested hibachi at the vacation house — and everything else suddenly felt like a warm-up act. When a certified teppanyaki chef from Hibachi Connect shows up at your ${city} vacation rental, the evening stops being a meal and starts being the memory everyone talks about on the drive home.`,
    middle:   (city, state) =>
      `Kids — especially the 4–12 crowd — are our most enthusiastic audience. Flying shrimp, the flaming onion volcano, fire tricks that make adults gasp and kids scream with delight. Grandparents get front-row seats and their proteins cooked exactly how they want them. Every plate made fresh to order at the grill, no buffet line, no cold chafing dishes, no managing a group order at a restaurant that wasn't designed for twenty people. One chef handles 10–20 guests; two stations for your 30–50 person family vacation group.`,
    closing:  (city, state) =>
      `We serve vacation home communities throughout the ${city} area, including vacation-rental corridors, resort communities, and nearby zip codes. Confirm your rental allows outdoor open-flame cooking before booking — most ${city}-area vacation homes do. Starting at $60 per adult, $30 per child. Most ${city} vacation group bookings are confirmed same day. Reserve your date early — summer and holiday weekends fill fast.`,
  },
  // ── 21: Bachelorette / Social ─────────────────────────────────────────────
  {
    angle:    'florida-bachelorette-social',
    headline: (city) => `Skip the Restaurant. Book a Hibachi Chef for Your ${city} Girls' Weekend.`,
    opening:  (city, state) =>
      `You've done the bachelorette brunch. The club night. The restaurant reservation that somehow turned into a 90-minute wait for a table that was never quite big enough. Here's what actually works for a ${city} bachelorette weekend or girls' trip when the group has 12–20 people and everyone wants the night to feel genuinely special: a private hibachi chef at your vacation rental, pool deck setup, chef performing all evening, nobody has to leave the house. This is the move.`,
    middle:   (city, state) =>
      `Hibachi Connect sends a certified teppanyaki chef directly to your ${city} Airbnb, VRBO, or beach house. They arrive 5–10 minutes before start, set up on the pool deck or patio, and run a full performance from first flame to last plate — fire tricks, flying shrimp, the onion volcano, chef banter that keeps a bachelorette group laughing for two hours straight. Every plate cooked to order. No split checks. No Ubers. No restaurant loud enough that you can't hear the person next to you.`,
    closing:  (city, state) =>
      `Bachelorette weekends and girls' trip dates in ${city} book 3–5 weeks out, especially during peak season (March–April, June–August). Saturday evenings fill fastest. If you have your dates confirmed, reach out now — don't risk losing your date. $60/adult, $30/child, $600 event minimum. Confirm your vacation rental allows outdoor open-flame cooking before booking. We handle everything from there.`,
  },
  // ── 22: Snowbird / Residential ────────────────────────────────────────────
  {
    angle:    'florida-snowbird-residential',
    headline: (city) => `Year-Round Private Hibachi Entertaining in ${city}, Florida`,
    opening:  (city, state) =>
      `One of the better advantages of living in — or spending the season in — ${city} is that your outdoor entertaining space works twelve months a year. No garage events in February. No frozen fingers around the grill. Your covered lanai, screened pool cage, or waterfront terrace is an ideal hibachi setting from October through April, and equally beautiful the rest of the year. Hibachi Connect brings a certified teppanyaki chef directly to your ${city} property, fully equipped and ready to run the full show for your dinner guests.`,
    middle:   (city, state) =>
      `Whether it's a snowbird season dinner party for neighbors you see every winter, a milestone birthday celebration for a Florida friend, or an anniversary evening on your waterfront patio — a private hibachi chef delivers a dining experience your guests genuinely haven't seen before. No restaurant to book. No coordinating a group for two hours in transit. Your chef sets up in your outdoor space, cooks every plate to order from your grill, entertains the table throughout, and leaves your space spotless.`,
    closing:  (city, state) =>
      `${state} outdoor season means we operate year-round. Snowbird season (October–April) is especially active in Gulf Coast communities — we recommend booking 2–3 weeks ahead for winter weekend dates. Screened enclosures, covered lanais, and pool cages all work. Starting at $60 per adult, $600 event minimum. Most ${city} quotes are returned the same day.`,
  },
]

// ── Closing CTA variants — Florida-specific 0–4 ──────────────────────────────
// These are appended to CLOSING_VARIANTS at indices 18–22.
export const FLORIDA_CLOSING_VARIANTS = [
  // ── 18: Beach house close ──────────────────────────────────────────────────
  {
    headline:     (city) => `Your ${city} Vacation Rental Deserves This Night`,
    sub:          (city) => `Pool deck, beach house, or waterfront patio — a private hibachi chef makes it the best evening of the trip. Book before your date is gone.`,
    urgency:      `Florida vacation weekend dates fill 2–4 weeks out during peak season. Reserve yours today.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },
  // ── 19: Luxury close ──────────────────────────────────────────────────────
  {
    headline:     (city) => `Elevate Your Next ${city} Event`,
    sub:          (city) => `Premium proteins, waterfront setup, white-glove service — get a same-day quote for your ${city} private dining experience.`,
    urgency:      `Peak Florida season dates book 4–6 weeks out. Premium Saturdays go faster.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See Premium Options',
  },
  // ── 20: Family vacation close ─────────────────────────────────────────────
  {
    headline:     (city) => `Make It the Night Everyone Remembers`,
    sub:          (city) => `Family vacation dinner at your ${city} rental — fire tricks, fresh food, zero logistics. Tell us your date and head count.`,
    urgency:      `Summer and holiday vacation weekends fill fast. Check your date now.`,
    btnPrimary:   'Check Availability',
    btnSecondary: 'See How It Works',
  },
  // ── 21: Bachelorette close ────────────────────────────────────────────────
  {
    headline:     (city) => `The Bachelorette Night Nobody Forgets in ${city}`,
    sub:          (city) => `Pool deck hibachi, chef performs all night, nobody leaves the house — this is the ${city} bachelorette move. Book before your dates are gone.`,
    urgency:      `Bachelorette weekend dates book 3–5 weeks ahead. Don't wait.`,
    btnPrimary:   'Book a Chef',
    btnSecondary: 'Learn More',
  },
  // ── 22: Snowbird / residential close ──────────────────────────────────────
  {
    headline:     (city) => `Your ${city} Patio Is Ready. So Is Your Chef.`,
    sub:          (city) => `Year-round hibachi at home in ${city} — screened lanai, waterfront terrace, or covered patio. Get a quote today.`,
    urgency:      `Snowbird season weekend dates fill 2–3 weeks out. Check availability now.`,
    btnPrimary:   'Get a Free Quote',
    btnSecondary: 'See Pricing',
  },
]

// ── Master builder — returns a complete data object for any Florida city ──────
// Major Florida cities: maps slug → { content variant, profile index for intros 23–32, nearby cities }
const FLORIDA_MAJOR_CITIES = {
  'miami':           { v: 1, profileIdx: 0, nearby: ['Fort Lauderdale','Boca Raton','Coral Gables','Kendall','Hialeah','Aventura','Hollywood','Doral','Homestead','Pembroke Pines'] },
  'orlando':         { v: 2, profileIdx: 1, nearby: ['Kissimmee','Winter Park','Lake Nona','Sanford','Davenport','Celebration','Clermont','Winter Garden','Oviedo','Altamonte Springs'] },
  'tampa':           { v: 3, profileIdx: 2, nearby: ['St. Petersburg','Clearwater','Brandon','Wesley Chapel','Land O\'Lakes','Riverview','Lutz','New Tampa','Westchase','Carrollwood'] },
  'jacksonville':    { v: 4, profileIdx: 3, nearby: ['Ponte Vedra Beach','Atlantic Beach','Neptune Beach','Mandarin','Fleming Island','Orange Park','St. Augustine','Palm Coast','Amelia Island','Fernandina Beach'] },
  'fort-lauderdale': { v: 1, profileIdx: 4, nearby: ['Pompano Beach','Deerfield Beach','Hallandale','Hollywood','Coral Springs','Pembroke Pines','Boca Raton','Coconut Creek','Wilton Manors','Weston'] },
  'sarasota':        { v: 4, profileIdx: 5, nearby: ['Siesta Key','Longboat Key','Bradenton','Venice','Lakewood Ranch','Osprey','Nokomis','North Port','Port Charlotte','Englewood'] },
  'naples':          { v: 1, profileIdx: 6, nearby: ['Bonita Springs','Marco Island','Estero','Cape Coral','Fort Myers','Golden Gate','Pelican Bay','Port Royal','Olde Naples','Immokalee'] },
  'west-palm-beach': { v: 1, profileIdx: 7, nearby: ['Palm Beach','Jupiter','Boca Raton','Delray Beach','Lake Worth','Wellington','Boynton Beach','Greenacres','Royal Palm Beach','Palm Beach Gardens'] },
  'destin':          { v: 0, profileIdx: 8, nearby: ['Miramar Beach','Fort Walton Beach','Niceville','30A','Santa Rosa Beach','Panama City Beach','Navarre','Crestview','DeFuniak Springs','Freeport'] },
  'st-petersburg':   { v: 3, profileIdx: 9, nearby: ['Clearwater','Gulfport','St. Pete Beach','Treasure Island','Pinellas Park','Largo','Seminole','Tarpon Springs','Dunedin','Safety Harbor'] },
}

export function getFloridaCityData(citySlug, cityName) {
  const major   = FLORIDA_MAJOR_CITIES[citySlug]
  const v       = major ? major.v : getFloridaVariantIndex(citySlug)
  const theme   = FLORIDA_IMAGE_THEMES[v]
  const profile = FLORIDA_CITY_PROFILES[citySlug]

  return {
    cityName,
    stateName:   'Florida',
    stateAbbr:   'FL',
    stateSlug:   'florida',
    variant:     v % 3,
    heroImage:   theme.heroImage,
    heroSubtitle: profile?.heroSubtitle ?? FLORIDA_HERO_SUBTITLES[v](cityName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    localHighlights:   FLORIDA_LOCAL_HIGHLIGHTS[v](cityName),
    featuredOccasions: FLORIDA_OCCASIONS[v],
    faqSet:            FLORIDA_FAQ_SETS[v](cityName),
    testimonials:      FLORIDA_TESTIMONIALS[v],
    // Major cities get city-specific intros 23–32; others get generic 18–22
    uniqueIntroVariant:   major ? 23 + major.profileIdx : 18 + v,
    uniqueWhyUsVariant:   v,
    uniqueClosingVariant: major ? 23 + major.profileIdx : 18 + v,
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// FLORIDA CITY IDENTITY PROFILES
// ─────────────────────────────────────────────────────────────────────────────

export const FLORIDA_CITY_PROFILES = {
  miami: {
    tone:          'luxury-multicultural',
    eventFocus:    'rooftop dinners, waterfront estate events, bachelorette weekends, corporate retreats, Latin celebrations',
    keywordAnchors: ['private hibachi chef Miami', 'hibachi at home Miami', 'hibachi bachelorette Miami'],
    neighborhoods: ['South Beach', 'Brickell', 'Coral Gables', 'Coconut Grove', 'Wynwood', 'Kendall', 'Aventura'],
    wording:       'upscale, waterfront, multicultural, Latin energy, South Florida luxury',
    heroSubtitle:  'Rooftop Events · Waterfront Dining · Bachelorette Weekends · Serving Greater Miami',
  },
  orlando: {
    tone:          'family-vacation',
    eventFocus:    'vacation rental dinners, family reunions, theme park trip gatherings, kids birthday parties',
    keywordAnchors: ['hibachi at vacation rental Orlando', 'family hibachi Orlando', 'hibachi chef Kissimmee'],
    neighborhoods: ['Kissimmee', 'Celebration', 'Lake Buena Vista', 'Winter Park', 'Lake Nona', 'Oviedo'],
    wording:       'vacation home, Airbnb, VRBO, family, all ages, theme park corridor',
    heroSubtitle:  'Vacation Home Dinners · Family Reunions · Group Vacations · Serving Greater Orlando',
  },
  tampa: {
    tone:          'social-bachelorette',
    eventFocus:    'bachelorette weekends, corporate events, poolside parties, group vacation nights, Ybor City celebrations',
    keywordAnchors: ['hibachi bachelorette Tampa', 'private hibachi chef Tampa', 'pool deck hibachi Tampa'],
    neighborhoods: ['Ybor City', 'Hyde Park', 'South Tampa', 'Channelside', 'Westchase', 'Brandon', 'Clearwater'],
    wording:       'social, bachelorette, corporate, waterfront, energetic, Tampa Bay',
    heroSubtitle:  'Bachelorette Weekends · Pool Deck Events · Corporate Dinners · Serving Tampa Bay',
  },
  jacksonville: {
    tone:          'residential-community',
    eventFocus:    'suburban backyard events, beach community gatherings, military family events, graduation parties',
    keywordAnchors: ['private hibachi Jacksonville', 'hibachi at home Jacksonville FL', 'hibachi chef Northeast Florida'],
    neighborhoods: ['Ponte Vedra Beach', 'Atlantic Beach', 'Neptune Beach', 'Mandarin', 'Southside', 'Fleming Island'],
    wording:       'community, residential, beach suburbs, military family, Northeast Florida',
    heroSubtitle:  'Backyard Events · Beach Community Gatherings · Graduation Parties · Serving All of Jacksonville',
  },
  'fort-lauderdale': {
    tone:          'waterfront-social',
    eventFocus:    'canal-front patio parties, intracoastal events, bachelorette weekends, boating community gatherings',
    keywordAnchors: ['hibachi Fort Lauderdale', 'waterfront hibachi Fort Lauderdale', 'private chef Broward County'],
    neighborhoods: ['Las Olas', 'Victoria Park', 'Wilton Manors', 'Pompano Beach', 'Deerfield Beach', 'Hallandale'],
    wording:       'canal-front, intracoastal, boating community, waterfront, Broward County',
    heroSubtitle:  'Canal-Front Patios · Waterfront Events · Bachelorette Weekends · Serving Broward County',
  },
  sarasota: {
    tone:          'luxury-snowbird',
    eventFocus:    'snowbird season entertaining, luxury waterfront dinners, arts circle gatherings, anniversary celebrations',
    keywordAnchors: ['private hibachi chef Sarasota', 'hibachi Sarasota FL', 'luxury hibachi Sarasota'],
    neighborhoods: ['Siesta Key', 'Longboat Key', 'Bird Key', 'Palmer Ranch', 'Lakewood Ranch', 'Bradenton'],
    wording:       'refined, snowbird, waterfront, arts community, Gulf Coast luxury',
    heroSubtitle:  'Waterfront Dining · Snowbird Entertaining · Luxury Events · Serving Sarasota & Gulf Coast',
  },
  naples: {
    tone:          'ultra-luxury',
    eventFocus:    'gated community events, estate dinners, corporate retreats, anniversary celebrations, country club circle gatherings',
    keywordAnchors: ['private hibachi chef Naples FL', 'luxury hibachi Naples', 'hibachi at home Naples Florida'],
    neighborhoods: ['Port Royal', 'Pelican Bay', 'Olde Naples', 'Bonita Springs', 'Marco Island', 'Estero'],
    wording:       'ultra-luxury, gated community, estate, premium, Southwest Florida elite',
    heroSubtitle:  'Estate Dinners · Gated Community Events · Ultra-Premium Dining · Serving Naples & Southwest Florida',
  },
  'west-palm-beach': {
    tone:          'upscale-social',
    eventFocus:    'Palm Beach County luxury events, corporate gatherings, birthday celebrations, snowbird entertaining',
    keywordAnchors: ['hibachi West Palm Beach', 'private chef Palm Beach County', 'hibachi at home West Palm Beach'],
    neighborhoods: ['Palm Beach Island', 'Jupiter', 'Boca Raton', 'Delray Beach', 'Lake Worth', 'Wellington'],
    wording:       'Palm Beach County, upscale, corporate, snowbird, Gold Coast',
    heroSubtitle:  'Palm Beach County Events · Corporate Dinners · Snowbird Entertaining · Serving West Palm Beach',
  },
  destin: {
    tone:          'beach-vacation',
    eventFocus:    'beach house events, bachelorette weekends, family reunion dinners, vacation rental groups',
    keywordAnchors: ['hibachi Destin Florida', 'beach house hibachi Destin', 'private chef Destin FL'],
    neighborhoods: ['Miramar Beach', 'Fort Walton Beach', 'Niceville', '30A', 'Santa Rosa Beach', 'Panama City Beach'],
    wording:       'beach house, vacation rental, Emerald Coast, bachelorette, family reunion',
    heroSubtitle:  'Beach House Parties · Bachelorette Weekends · Family Reunions · Serving Destin & Emerald Coast',
  },
  'st-petersburg': {
    tone:          'artsy-social',
    eventFocus:    'birthday celebrations, arts district gatherings, pool deck parties, waterfront events, group nights',
    keywordAnchors: ['hibachi St Petersburg FL', 'private hibachi chef St Pete', 'hibachi at home St Petersburg'],
    neighborhoods: ['Old Northeast', 'Grand Central', 'Kenwood', 'Gulfport', 'St. Pete Beach', 'Treasure Island'],
    wording:       'arts scene, social, waterfront, St. Pete energy, Tampa Bay',
    heroSubtitle:  'Pool Deck Parties · Waterfront Events · Birthday Celebrations · Serving St. Petersburg & Tampa Bay',
  },
}

// ── City-specific intro variants — indices 23–32 in combined INTRO_VARIANTS ──
export const FLORIDA_CITY_INTROS = [

  // ── 23: Miami — Luxury Multicultural ─────────────────────────────────────
  {
    angle:    'miami-luxury-multicultural',
    headline: (city) => `${city}'s Private Hibachi Chef — Live Fire on Your Terms`,
    opening:  (city, state) =>
      `In ${city}, the best experiences happen at home — or at least, at someone's home. When you book a private hibachi chef through Hibachi Connect, a certified teppanyaki chef arrives at your Brickell penthouse, your Coral Gables estate, your South Beach Airbnb, or your Aventura high-rise terrace with a full propane grill, premium proteins, and a live-fire performance that makes every guest feel like they're at the city's most exclusive dinner. Without the reservation. Without the noise.`,
    middle:   (city, state) =>
      `${city} runs on energy, culture, and experience — and a private hibachi chef delivers all three. Latin celebrations, rooftop birthday dinners, bachelorette weekends, corporate client events, waterfront anniversary parties — our ${city} chefs are experienced with the full spectrum of South Florida occasions. Premium upgrades like lobster tail, filet mignon, and Chilean sea bass are available for any event. Every plate is cooked to order right in front of your guests, with the full fire performance running throughout.`,
    closing:  (city, state) =>
      `We serve all of Greater ${city} and Miami-Dade County: South Beach, Wynwood, Brickell, Coconut Grove, Coral Gables, Kendall, Aventura, Hialeah, and surrounding areas. Most locations in the ${city} metro are within our standard service area. Weekend and waterfront event dates fill 3–5 weeks out during peak season. Starting at $60 per adult — premium menu options available.`,
  },

  // ── 24: Orlando — Family Vacation ────────────────────────────────────────
  {
    angle:    'orlando-family-vacation',
    headline: (city) => `Private Hibachi Chef in ${city} — The Vacation Dinner Nobody Forgets`,
    opening:  (city, state) =>
      `You've done the theme parks. You've done the character dining. You've done the pool day that turned into everyone ordering pizza at 9 PM. Here's what your ${city} vacation group actually wants: a certified hibachi chef who shows up at your Kissimmee vacation rental, sets up on the pool deck, and turns a Wednesday evening into the single best dinner of the whole trip. Hibachi Connect makes that happen — without anyone leaving the house, managing a group Uber, or fighting over a restaurant reservation for 22 people.`,
    middle:   (city, state) =>
      `Central Florida is one of our most active markets. Vacation home communities across the ${city} area — Kissimmee, Celebration, Clermont, Davenport, Lake Nona — see hibachi groups every week. It works because it solves the vacation dinner problem perfectly: one location, everyone at the table at the same time, kids completely entertained (fire tricks, flying shrimp, the onion volcano), and adults actually having a conversation instead of waiting on their food. One chef handles 10–20 guests; two stations cover the 30–50 person family reunion group.`,
    closing:  (city, state) =>
      `We serve all of the ${city} metro and Central Florida vacation corridor: Kissimmee, Celebration, Clermont, Davenport, Winter Garden, Lake Nona, Winter Park, Sanford, and surrounding communities. Confirm your vacation rental allows outdoor open-flame cooking before booking — most Central Florida vacation homes do. Starting at $60 per adult, $30 per child, $600 event minimum. Summer vacation dates book fast — reach out early.`,
  },

  // ── 25: Tampa — Social Bachelorette ──────────────────────────────────────
  {
    angle:    'tampa-social-bachelorette',
    headline: (city) => `Private Hibachi Chef in ${city} — Pool Deck to Pool Deck, We Bring the Show`,
    opening:  (city, state) =>
      `${city} runs on good food, good company, and weekends that go further than the plan. A private hibachi chef from Hibachi Connect fits perfectly into that energy. Whether it's a bachelorette weekend at a Tampa Bay Airbnb, a corporate team dinner in Hyde Park, or a birthday pool party in South Tampa — a certified teppanyaki chef arrives at your location with the full setup, the full performance, and enough energy to keep a group of 20 completely riveted from first flame to last plate.`,
    middle:   (city, state) =>
      `${city} is one of the top bachelorette destinations in the South — and hibachi at your vacation rental is the move that bachelorette groups consistently name as the best event of the weekend. No Ybor City crowding, no group Ubers, no 90-minute waits. Just the chef, the pool deck, the fire, and a group of people who will still be talking about that night six months later. Corporate events in ${city}'s growing tech and finance sector are equally popular — we scale from intimate client dinners to 80-person team events.`,
    closing:  (city, state) =>
      `We serve all of ${city} and the Tampa Bay area: South Tampa, Westchase, Brandon, Wesley Chapel, Land O'Lakes, Lutz, New Tampa, and surrounding communities. Clearwater and St. Petersburg are also covered. Bachelorette weekend dates book 3–5 weeks out. Corporate events and group bookings should reserve 3–4 weeks ahead. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 26: Jacksonville — Residential Community ─────────────────────────────
  {
    angle:    'jacksonville-residential-community',
    headline: (city) => `Private Hibachi Chef in ${city} — Northeast Florida's Favorite Backyard Upgrade`,
    opening:  (city, state) =>
      `${city} is a city that hosts. Big backyards, beach communities, suburban neighborhoods with the space and the culture to throw a genuine party — and Hibachi Connect is the private chef service that matches that energy. A certified teppanyaki chef arrives at your ${city} home, your Atlantic Beach property, or your Ponte Vedra rental with a full propane grill, fresh proteins, and a live performance that turns any outdoor space into the neighborhood's most talked-about event.`,
    middle:   (city, state) =>
      `Graduation parties, military homecoming celebrations, neighborhood cookouts, milestone birthdays, and family reunions are among our most-requested ${city} events. Our chefs are experienced with ${city}-area communities: Ponte Vedra Beach, Atlantic Beach, Neptune Beach, Mandarin, Fleming Island, Southside, and all surrounding neighborhoods. One chef handles 10–20 guests; two stations for 40–60. Kids get the fire show. Adults get perfectly cooked proteins and a meal they didn't have to cook.`,
    closing:  (city, state) =>
      `We cover all of ${city} and Northeast Florida: Atlantic Beach, Neptune Beach, Ponte Vedra Beach, Amelia Island, Orange Park, Fleming Island, St. Augustine, Palm Coast, and surrounding communities. Most ${city} area locations are within our standard service zone with no travel fee. Weekend dates book 2–3 weeks ahead. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 27: Fort Lauderdale — Waterfront Social ───────────────────────────────
  {
    angle:    'fort-lauderdale-waterfront-social',
    headline: (city) => `Private Hibachi Chef in ${city} — Waterfront Dining, No Restaurant Required`,
    opening:  (city, state) =>
      `${city} has more miles of navigable waterways than any city in the world — and almost every canal-front home has an outdoor space that was built for a night like this. A certified hibachi chef from Hibachi Connect arrives at your ${city} property with a full teppan grill, premium proteins, and a live-fire performance that turns your patio, dock, or pool deck into the best venue in Broward County. You already have the setting. We bring the show.`,
    middle:   (city, state) =>
      `Canal-front patio events, intracoastal-view dinners, Las Olas birthday parties, Wilton Manors group nights, bachelorette weekends in Hallandale — our ${city} chefs run the full range of South Florida event types. Premium proteins are available for any event: filet mignon, lobster tail, scallops. Every plate is cooked fresh to order while the chef entertains the table. Snowbird season (October–April) is our busiest window for Broward County residential events — and those dates fill fast.`,
    closing:  (city, state) =>
      `We serve all of ${city} and Broward County: Pompano Beach, Deerfield Beach, Coconut Creek, Coral Springs, Pembroke Pines, Hollywood, Hallandale, and surrounding communities. Weekend waterfront dates book 3–4 weeks out during peak season. Starting at $60 per adult. Premium menu upgrades available. Most ${city} quotes returned same day.`,
  },

  // ── 28: Sarasota — Luxury Snowbird ───────────────────────────────────────
  {
    angle:    'sarasota-luxury-snowbird',
    headline: (city) => `Private Hibachi Chef in ${city} — Waterfront Entertaining, Gulf Coast Standard`,
    opening:  (city, state) =>
      `${city} sets a high bar. The arts scene, the waterfront properties, the caliber of entertaining that happens in this community — the experience has to match the setting. Hibachi Connect sends a certified teppanyaki chef to your ${city} home, your Siesta Key property, or your Longboat Key residence with a full propane grill, premium proteins, and a dining experience that satisfies both the food enthusiast and the showmanship that makes a dinner genuinely memorable.`,
    middle:   (city, state) =>
      `Snowbird season (October through April) is our busiest window in ${city} — seasonal residents and their visiting family and friends fill our calendar every winter. Anniversary celebrations on waterfront patios, dinner parties for arts community friends, retirement celebrations at Palmer Ranch estates, corporate events at Lakewood Ranch venues — our ${city} chefs are experienced with the kinds of occasions this community actually runs. Premium upgrades (filet mignon, lobster tail, scallops) are available for any event.`,
    closing:  (city, state) =>
      `We serve all of ${city} and the surrounding Gulf Coast: Siesta Key, Longboat Key, Bird Key, Palmer Ranch, Lakewood Ranch, Bradenton, Venice, and Englewood. Snowbird season weekend dates fill 3–4 weeks out — book early if your event falls between October and April. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 29: Naples — Ultra Luxury ─────────────────────────────────────────────
  {
    angle:    'naples-ultra-luxury',
    headline: (city) => `Private Hibachi Chef in ${city} — Estate-Level Dining at Your Home`,
    opening:  (city, state) =>
      `${city} doesn't do ordinary. The estates, the waterfront properties, the gated communities — the standard of entertaining here is exceptional, and the dining experience should be no different. Hibachi Connect sends a certified teppanyaki chef to your ${city} property with a full propane grill, premium proteins, and the kind of live-fire culinary performance that matches the caliber of a city where excellence is the baseline expectation.`,
    middle:   (city, state) =>
      `Filet mignon, lobster tail, Chilean sea bass, scallops — premium upgrades are available for every plate or by individual guest preference. Your chef arrives fully equipped, sets up on your terrace or outdoor dining area, and delivers a performance that treats every guest as the evening's VIP. Corporate retreats at Port Royal properties, winter anniversary celebrations at Pelican Bay homes, dinner parties for country club communities — our ${city} chefs understand the occasion and execute accordingly.`,
    closing:  (city, state) =>
      `We serve ${city} and all of Southwest Florida: Pelican Bay, Olde Naples, Port Royal, Bonita Springs, Estero, Marco Island, Cape Coral, and Fort Myers. October through April is our peak ${city} season — weekend dates during snowbird season fill 4–6 weeks out. Premium events and large corporate groups should book 6+ weeks ahead. Starting at $60 per adult, with all premium protein upgrades available.`,
  },

  // ── 30: West Palm Beach — Upscale Social ─────────────────────────────────
  {
    angle:    'west-palm-beach-upscale-social',
    headline: (city) => `Private Hibachi Chef in ${city} — Palm Beach County Entertaining Done Right`,
    opening:  (city, state) =>
      `${city} and the Palm Beach County corridor runs on a high standard of entertaining — the properties, the outdoor spaces, the client circles and social networks that make private dining a regular part of life here. Hibachi Connect sends a certified teppanyaki chef to your ${city} property, your Jupiter estate, your Boca Raton home, or your Delray Beach rental with a full propane grill, premium proteins, and a live-fire performance built for the occasion.`,
    middle:   (city, state) =>
      `Corporate client dinners, anniversary celebrations, milestone birthday events, and snowbird season entertaining are our most popular occasions in the Palm Beach County market. Premium upgrades (filet mignon, lobster tail, scallops) are available for any event. Every plate is cooked to order at the grill. Your chef handles setup on your patio or terrace, manages the entire performance, and leaves your outdoor space spotless.`,
    closing:  (city, state) =>
      `We serve all of ${city} and Palm Beach County: Jupiter, Palm Beach Gardens, Boca Raton, Delray Beach, Lake Worth, Boynton Beach, and surrounding communities. Snowbird season dates (October–April) fill faster — plan 3–4 weeks ahead for winter weekends. Starting at $60 per adult, $600 event minimum. Premium menu options available. Same-day quotes on most requests.`,
  },

  // ── 31: Destin — Beach Vacation ───────────────────────────────────────────
  {
    angle:    'destin-beach-vacation',
    headline: (city) => `Private Hibachi Chef in ${city} — Beach House Dining, Emerald Coast Style`,
    opening:  (city, state) =>
      `Your ${city} beach house is the best seat in the Panhandle — and a private hibachi chef makes it the best dining experience of the trip. Hibachi Connect sends a certified teppanyaki chef directly to your ${city} rental, your 30A beach house, or your Miramar Beach VRBO with a full propane grill, fresh proteins, and the complete live-fire show. No restaurant run for a group of 20. No 90-minute wait on a Destin Friday night. The chef comes to you.`,
    middle:   (city, state) =>
      `Beach house events are what we do best on the Emerald Coast. Bachelorette weekends from across the South end up in ${city} every weekend of summer — and hibachi on the pool deck has become the go-to group dinner for trips with 12–25 people. Family reunions filling a 10-bedroom beach house? We've run that event dozens of times. The chef sets up in your outdoor space, performs the full show, cooks every plate to order, and cleans up completely. You're back on the back porch with a drink before the night is over.`,
    closing:  (city, state) =>
      `We serve all of the Emerald Coast: ${city} proper, Miramar Beach, Fort Walton Beach, Niceville, Santa Rosa Beach, 30A (Rosemary Beach, Seaside, WaterColor), and Panama City Beach. Always confirm your beach house allows outdoor open-flame cooking — most do. Summer weekend dates book 3–5 weeks ahead. Starting at $60 per adult, $600 event minimum.`,
  },

  // ── 32: St. Petersburg — Artsy Social ────────────────────────────────────
  {
    angle:    'st-petersburg-artsy-social',
    headline: (city) => `Private Hibachi Chef in ${city} — The Tampa Bay Event Nobody Expects`,
    opening:  (city, state) =>
      `${city} has a way of surprising people. The arts scene. The waterfront. The energy that lives in every neighborhood from Old Northeast to Grand Central. Hibachi Connect fits right into that spirit: a certified teppanyaki chef arrives at your ${city} home, your St. Pete Beach rental, or your Gulfport waterfront property with a full propane grill and a live-fire performance that gives a dinner party in this city exactly the unexpected turn it deserves.`,
    middle:   (city, state) =>
      `Birthday pool parties in South St. Pete. Anniversary dinners on waterfront patios in Old Northeast. Group nights at Airbnb rentals on St. Pete Beach. Bachelorette weekends that wanted to do something other than every ${city} bar in a row. Our chefs work across the city and into the beach communities — Treasure Island, Madeira Beach, Gulfport — and the full Tampa Bay corridor. One chef handles 10–20 guests; two stations for 25–40 person parties.`,
    closing:  (city, state) =>
      `We serve all of ${city} and the Tampa Bay beach communities: St. Pete Beach, Treasure Island, Madeira Beach, Gulfport, Tierra Verde, Pinellas Park, and surrounding areas. Saturday evening dates book 2–3 weeks ahead. Starting at $60 per adult, $600 event minimum. Most ${city}-area quotes returned same day.`,
  },
]

// ── City-specific CTA closings — indices 23–32 in combined CLOSING_VARIANTS ──
export const FLORIDA_CITY_CLOSINGS = [

  // ── 23: Miami ──────────────────────────────────────────────────────────────
  {
    headline:     (city) => `Book Your Private Hibachi Experience in ${city}`,
    sub:          (city) => `Waterfront estate, South Beach Airbnb, or Coral Gables patio — get a same-day quote for your ${city} event.`,
    urgency:      `Miami waterfront and weekend dates book 3–5 weeks ahead. Premium Saturday evenings go faster.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See Premium Options',
  },

  // ── 24: Orlando ────────────────────────────────────────────────────────────
  {
    headline:     (city) => `Make It the Best Night of Your ${city} Vacation`,
    sub:          (city) => `Vacation rental, Kissimmee pool house, or Celebration vacation home — tell us your date and we'll confirm same day.`,
    urgency:      `Summer vacation weekends in Central Florida fill 3–4 weeks out. Book early.`,
    btnPrimary:   'Check Availability',
    btnSecondary: 'See How It Works',
  },

  // ── 25: Tampa ──────────────────────────────────────────────────────────────
  {
    headline:     (city) => `Your ${city} Weekend Deserves This Night`,
    sub:          (city) => `Pool deck hibachi, fire show, zero logistics — bachelorette parties, corporate events, and birthday trips all welcome.`,
    urgency:      `Tampa bachelorette and summer weekend dates book 3–5 weeks ahead. Don't wait on your date.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },

  // ── 26: Jacksonville ───────────────────────────────────────────────────────
  {
    headline:     (city) => `Bring the Hibachi to Your ${city} Backyard`,
    sub:          (city) => `Graduation parties, beach community events, family reunions — get a same-day quote for your ${city} event.`,
    urgency:      `Weekend dates fill 2–3 weeks out. Graduation season books 4+ weeks ahead.`,
    btnPrimary:   'Get a Free Quote',
    btnSecondary: 'See Pricing',
  },

  // ── 27: Fort Lauderdale ────────────────────────────────────────────────────
  {
    headline:     (city) => `Your ${city} Canal-Front Patio Is Ready for This`,
    sub:          (city) => `Waterfront events, bachelorette weekends, corporate dinners — get a ${city} quote returned same day.`,
    urgency:      `Broward County peak season dates fill 3–4 weeks out. Book before your date is gone.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See How It Works',
  },

  // ── 28: Sarasota ───────────────────────────────────────────────────────────
  {
    headline:     (city) => `Elevate Your ${city} Entertaining Season`,
    sub:          (city) => `Snowbird season dinner parties, waterfront celebrations, and Gulf Coast events — get a same-day quote.`,
    urgency:      `Sarasota snowbird season (October–April) books 3–4 weeks ahead. Reserve your date now.`,
    btnPrimary:   'Get a Quote',
    btnSecondary: 'See Premium Options',
  },

  // ── 29: Naples ─────────────────────────────────────────────────────────────
  {
    headline:     (city) => `${city} Estate Dining — Request Your Private Chef`,
    sub:          (city) => `Gated community events, waterfront estate dinners, corporate retreats — the ${city} private hibachi experience starts here.`,
    urgency:      `Naples peak season (October–April) fills 4–6 weeks out. Book early for premium dates.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See Premium Options',
  },

  // ── 30: West Palm Beach ────────────────────────────────────────────────────
  {
    headline:     (city) => `Palm Beach County's Private Hibachi Experience`,
    sub:          (city) => `From Jupiter to Boca Raton — a certified hibachi chef at your home, with a same-day ${city} quote.`,
    urgency:      `Palm Beach County winter dates fill 3–4 weeks ahead. Act early for peak season.`,
    btnPrimary:   'Check Availability',
    btnSecondary: 'See Pricing',
  },

  // ── 31: Destin ─────────────────────────────────────────────────────────────
  {
    headline:     (city) => `Your ${city} Beach House Party Starts Here`,
    sub:          (city) => `Bachelorette weekends, family reunions, vacation group nights — get an Emerald Coast quote today.`,
    urgency:      `Destin summer weekends book 3–5 weeks out. Confirm your beach house date now.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },

  // ── 32: St. Petersburg ────────────────────────────────────────────────────
  {
    headline:     (city) => `The ${city} Night You Didn't Know You Were Missing`,
    sub:          (city) => `Pool deck hibachi in St. Pete — fire show, fresh food, nobody leaves the house. Book your date today.`,
    urgency:      `St. Pete weekend dates book 2–3 weeks out. Saturday evenings go fastest.`,
    btnPrimary:   'Book a Chef',
    btnSecondary: 'Learn More',
  },
]

// ── How It Works — 5 Florida-specific rotating variants ──────────────────────
export const FLORIDA_HOW_IT_WORKS = [

  // ── 0: Beach house / vacation rental tone ───────────────────────────────────
  {
    headline:   (city) => `Hibachi at Your ${city} Beach House — Four Steps to the Best Night of the Trip`,
    footerNote: (city) => `Whether you're in a Destin beach house, an Orlando vacation rental, or a Fort Lauderdale Airbnb — the process is the same: simple on your end, unforgettable for everyone who shows up.`,
    steps: [
      {
        num:   '01',
        title: 'Send Us Your Rental Address',
        desc:  'Tell us your vacation property address, event date, and group size. We confirm coverage and send pricing fast — usually same day. Always confirm your rental allows outdoor open-flame cooking.',
      },
      {
        num:   '02',
        title: 'Chef Gets Confirmed',
        desc:  'A certified hibachi chef in the area gets assigned to your event. You\'ll receive a confirmation with all details and a quick prep note so your pool deck or patio is ready.',
      },
      {
        num:   '03',
        title: 'We Arrive Fully Loaded',
        desc:  'Your chef arrives 5–10 minutes before your scheduled start time with the full propane grill, all proteins, rice, vegetables, sauces, plates, and chopsticks. You supply the chairs — we bring everything else.',
      },
      {
        num:   '04',
        title: 'The Show. The Food. The Night.',
        desc:  'Fire tricks, flying shrimp, the onion volcano — the chef performs and cooks every plate to order while the whole group watches. Complete cleanup when the last plate is done. You\'re back on the deck before midnight.',
      },
    ],
  },

  // ── 1: Luxury / waterfront tone ────────────────────────────────────────────
  {
    headline:   (city) => `Book Your ${city} Private Hibachi Experience — Confirmed Same Day`,
    footerNote: (city) => `From an intimate ${city} estate dinner for 12 to a corporate retreat for 60 — the same white-glove process runs every event. Seamless on your end. Exceptional for every guest.`,
    steps: [
      {
        num:   '01',
        title: 'Request a Quote',
        desc:  'Submit your date, location, and guest count. We confirm coverage and return a full quote — most ${city}-area requests are answered same day. Premium menu options available on request.',
      },
      {
        num:   '02',
        title: 'Chef Assigned & Confirmed',
        desc:  'A certified teppanyaki chef is confirmed for your event. You\'ll receive their details plus a pre-event checklist to have your terrace or outdoor space event-ready.',
      },
      {
        num:   '03',
        title: 'White-Glove Setup',
        desc:  'Your chef arrives 5–10 minutes before your scheduled start time with the full teppan station: propane grill, premium proteins, sauces, plates, and all serving ware. Setup is entirely handled — you greet your guests.',
      },
      {
        num:   '04',
        title: 'The Full Performance',
        desc:  'From precision knife work to fire displays — every plate cooked to order while the chef commands the table. Full teardown and cleanup the moment dinner is complete. Your property is left exactly as it was.',
      },
    ],
  },

  // ── 2: Family vacation / fun tone ─────────────────────────────────────────
  {
    headline:   (city) => `From Booking to Beach House Dinner — Here's How It Works`,
    footerNote: (city) => `Planning a family vacation dinner at your ${city}-area rental? One chef for 10–20 guests, two stations for 25–50. Tell us your head count and we'll size it right.`,
    steps: [
      {
        num:   '01',
        title: 'Pick Your Date & Tell Us the House',
        desc:  'Give us your vacation rental address, event date, and how many guests are joining. We confirm coverage and get a quote back fast — vacation group bookings are confirmed same day in most cases.',
      },
      {
        num:   '02',
        title: 'Chef Locked In',
        desc:  'We match you with a certified chef serving your area. You\'ll get a confirmation with everything you need to prep the pool deck or patio. Your only job from here is gathering the family.',
      },
      {
        num:   '03',
        title: 'Everything Comes to You',
        desc:  'Your chef arrives 5–10 minutes before your scheduled start with the full grill, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. Nothing for you to shop, prep, or clean.',
      },
      {
        num:   '04',
        title: 'Kids. Adults. Fire. Dinner.',
        desc:  'Flying shrimp, onion volcano, fire tricks — kids go wild. Adults get perfectly cooked proteins and a genuinely great meal. Everyone eats at the same time. Chef cleans up after. Vacation saved.',
      },
    ],
  },

  // ── 3: Bachelorette / social tone ─────────────────────────────────────────
  {
    headline:   (city) => `Your ${city} Bachelorette Hibachi — Four Steps to the Best Night of the Weekend`,
    footerNote: (city) => `Vacation rental? Beach house? Airbnb pool deck? Same process. Easy on the planner. Unforgettable for the group. The bride gets the night she deserves.`,
    steps: [
      {
        num:   '01',
        title: 'Send Your Rental & Group Size',
        desc:  'Drop us your Airbnb or vacation rental address, the date, and how many are coming. We\'ll confirm coverage and send pricing. Most bachelorette bookings are locked in same day.',
      },
      {
        num:   '02',
        title: 'Chef Confirmed',
        desc:  'Your chef is assigned and confirmed. We send everything you need to know — plus tips on setting up your pool deck for the event. You just send the group the time.',
      },
      {
        num:   '03',
        title: 'The Grill Comes to You',
        desc:  'Your chef arrives 5–10 minutes before your start, sets up on the pool deck or patio, and begins the full show. No restaurant runs. No Ubers. No check-splitting drama. The chef is already at the house.',
      },
      {
        num:   '04',
        title: 'Fire Tricks. Fresh Food. The Night the Bride Talks About Forever.',
        desc:  'Flying shrimp, fire show, chef banter — the whole performance runs while every plate gets cooked fresh to order. Chef cleans up when it\'s done. You stay on the deck. Perfect night.',
      },
    ],
  },

  // ── 4: Snowbird / residential tone ────────────────────────────────────────
  {
    headline:   (city) => `Your ${city} Hibachi Dinner Party — Four Easy Steps`,
    footerNote: (city) => `Snowbird season or summer in ${city} — same seamless process. Your covered lanai, pool cage, or waterfront patio becomes a private restaurant for the evening.`,
    steps: [
      {
        num:   '01',
        title: 'Tell Us Your Date & Guest Count',
        desc:  'Send your address, preferred date, and number of guests. We confirm coverage and pricing quickly — most ${city}-area responses come back same day. Screened lanais and covered outdoor spaces welcome.',
      },
      {
        num:   '02',
        title: 'Chef Assigned to Your Event',
        desc:  'A certified chef serving your community gets confirmed. You\'ll receive a pre-event checklist outlining exactly what to have ready — hint: just your guest seating.',
      },
      {
        num:   '03',
        title: 'Everything Arrives at Your Door',
        desc:  'Your chef shows up 5–10 minutes before your start time with the full propane grill, all ingredients, sauces, plates, and serving ware. You supply the chairs. We supply everything else, including the show.',
      },
      {
        num:   '04',
        title: 'Dinner and a Show, Right on Your Lanai',
        desc:  'Every plate cooked fresh at the teppan grill, in front of your guests, with the full performance running throughout. Guests rave about it every time. Chef does a complete cleanup. Your evening stays effortless.',
      },
    ],
  },
]

const FLORIDA_HIW_MAP = {
  miami:              1,  // luxury/waterfront
  orlando:            2,  // family vacation
  kissimmee:          2,  // family vacation
  davenport:          2,  // family vacation
  clermont:           2,  // family vacation
  tampa:              3,  // bachelorette/social
  'fort-lauderdale':  3,  // social
  'key-west':         3,  // bachelorette
  'st-petersburg':    3,  // social
  'panama-city-beach':0,  // beach house
  destin:             0,  // beach house
  '30a':              0,  // beach house
  'miramar-beach':    0,  // beach house
  'fort-walton-beach':0,  // beach house
  'amelia-island':    0,  // beach house
  'st-augustine':     0,  // vacation/tourism
  sarasota:           1,  // luxury
  naples:             1,  // luxury
  'west-palm-beach':  1,  // luxury
  'boca-raton':       1,  // luxury
  'coral-gables':     1,  // luxury
  aventura:           1,  // luxury
  'ponte-vedra-beach':1,  // luxury
  jupiter:            1,  // luxury
  'marco-island':     1,  // luxury
  'bonita-springs':   1,  // luxury
  venice:             1,  // luxury
  jacksonville:       4,  // residential
  'cape-coral':       4,  // residential/snowbird
  'fort-myers':       4,  // residential/snowbird
  pensacola:          0,  // beach/vacation
  tallahassee:        4,  // residential
  gainesville:        2,  // family/college
  'daytona-beach':    0,  // beach/vacation
  'port-st-lucie':    4,  // residential
  bradenton:          4,  // snowbird
  clearwater:         0,  // beach
  'palm-coast':       4,  // residential
  'winter-garden':    4,  // residential
  'wesley-chapel':    4,  // residential
  riverview:          4,  // residential
}

export function getFloridaHowItWorks(citySlug) {
  const v = FLORIDA_HIW_MAP[citySlug] ?? getFloridaVariantIndex(citySlug)
  return FLORIDA_HOW_IT_WORKS[v]
}

// ─────────────────────────────────────────────────────────────────────────────
// FLORIDA SECTION VARIANTS
// 5 personality-matched content sets for hero pill, experience section,
// areas served, occasions, FAQ heading, testimonial subheading.
// ─────────────────────────────────────────────────────────────────────────────

export const FLORIDA_SECTION_VARIANTS = [
  // ── [0] Beach House / Vacation Rental ──────────────────────────────────────
  {
    heroPill: 'Private Hibachi Chef',
    experiencePill: 'At Your Vacation Rental',
    experienceImage: '/pics/backyard-hibachi-2.jpg',
    experienceImageAlt: (city) => `Pool deck hibachi at a vacation rental near ${city}, Florida`,
    experiencePoints: [
      {
        icon: '🏖️',
        title: 'Beach House & Vacation Rental Ready',
        desc: 'Pool deck, covered patio, or waterfront terrace — we set up at your rental property. Just confirm the property allows outdoor open-flame cooking.',
      },
      {
        icon: '🔥',
        title: 'Full Chef Performance',
        desc: 'Fire tricks, flying shrimp, the onion volcano — the complete show runs while every plate gets cooked fresh. Your group won\'t put their phones down for the first two minutes.',
      },
      {
        icon: '🍽️',
        title: 'No Restaurant Runs for 20 People',
        desc: 'Stay at your rental. The chef comes to you. Everyone eats at the same time, cooked to order at the grill. No Ubers, no waits, no splitting a check across a group that\'s already half-asleep.',
      },
      {
        icon: '🧹',
        title: 'Zero Cleanup on Your End',
        desc: 'Chef sets up, cooks, performs, and cleans up completely. Your vacation rental stays clean. You stay on the pool deck.',
      },
    ],
    areasPill: 'Florida Coverage',
    areasHeadline: (city) => `We Serve ${city} & All Surrounding Vacation Communities`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves vacation rentals, Airbnbs, VRBOs, and beach houses throughout the ${city} area and all of ${stateName}. If your group has a pool deck, we've got a chef.`,
      (city) => `Coverage extends across the ${city} metro and surrounding vacation communities. Send us your property address and we'll confirm same day — most quotes returned within a few hours.`,
    ],
    areasButton: 'Check My Rental Address',
    occasionPill: 'Perfect for Any Florida Trip',
    occasionHeadline: (city) => `The Events That Bring People to ${city} — And Why Hibachi Fits`,
    occasionSubtext: 'Beach house parties, family reunions, bachelorette weekends — hibachi at your vacation rental is the move that makes the trip.',
    faqPill: 'Vacation Rental FAQs',
    faqHeadline: (city, stateAbbr) => `Hibachi at Your ${city}, ${stateAbbr} Vacation Rental — Common Questions`,
    testimonialSubheading: 'Vacation groups, bachelorette weekends, and family reunions across Florida — what they\'re saying.',
  },

  // ── [1] Luxury / Waterfront ────────────────────────────────────────────────
  {
    heroPill: 'Private Teppanyaki Chef',
    experiencePill: 'The Full Dining Experience',
    experienceImage: '/pics/hibachi-dallas-tyler.jpg',
    experienceImageAlt: (city) => `Upscale private hibachi dinner at a ${city}, Florida waterfront property`,
    experiencePoints: [
      {
        icon: '🌊',
        title: 'Waterfront & Estate Setup',
        desc: 'Canal-front patios, pool terraces, private docks, rooftop decks — we set up wherever the setting is most spectacular. Your property is the backdrop; we provide the experience.',
      },
      {
        icon: '🥩',
        title: 'Premium Proteins Available',
        desc: 'Filet mignon, lobster tail, Chilean sea bass, scallops — available for any event, per guest or for the full table. Elevate the menu to match the occasion.',
      },
      {
        icon: '👨‍🍳',
        title: 'Certified Teppanyaki Chefs',
        desc: 'Professional presentation, precise knife work, controlled fire displays — our chefs are trained for high-expectation events and deliver accordingly.',
      },
      {
        icon: '✅',
        title: 'Complete White-Glove Service',
        desc: 'Full setup, the entire performance, and complete cleanup. Your property is left exactly as you found it. Zero coordination required during the event.',
      },
    ],
    areasPill: 'Our Service Area',
    areasHeadline: (city) => `${city} & South Florida — We Come to Your Property`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves ${city} and the surrounding ${stateName} waterfront communities. From gated estates to resort properties to corporate retreat venues — our chefs travel to your location fully equipped.`,
      (city) => `Coverage extends throughout the metro area and nearby communities. Contact us with your property address and we\'ll confirm availability and pricing. Premium events and corporate bookings welcome.`,
    ],
    areasButton: 'Confirm My Location',
    occasionPill: 'Designed for Premier Occasions',
    occasionHeadline: (city) => `Elevated Private Dining Events in ${city}`,
    occasionSubtext: 'Corporate retreats, anniversary celebrations, estate dinner parties — a private teppanyaki chef delivers an experience your guests haven\'t seen before.',
    faqPill: 'Questions & Answers',
    faqHeadline: (city, stateAbbr) => `Private Teppanyaki in ${city}, ${stateAbbr} — Everything You Need to Know`,
    testimonialSubheading: 'Trusted by hosts, executives, and event planners across South Florida.',
  },

  // ── [2] Family Vacation ────────────────────────────────────────────────────
  {
    heroPill: 'Vacation Group Hibachi',
    experiencePill: 'Why Every Vacation Group Books This',
    experienceImage: '/pics/hibachi-at-home.jpg',
    experienceImageAlt: (city) => `Family vacation group hibachi dinner at a ${city}, Florida rental home`,
    experiencePoints: [
      {
        icon: '🏠',
        title: 'Comes to Your Vacation Home',
        desc: 'No restaurant logistics for a group of 25. The chef comes to your vacation rental — everyone eats together, on time, in your space.',
      },
      {
        icon: '🎉',
        title: 'Built for All Ages',
        desc: 'Kids get the fire tricks and flying shrimp. Adults get perfectly cooked proteins. Grandparents get front-row seats. Everyone wins.',
      },
      {
        icon: '🔥',
        title: 'The Show Is Included',
        desc: 'Fire performance, knife work, onion volcano — it\'s all part of the price. Your vacation group gets a show and a meal running simultaneously.',
      },
      {
        icon: '🧹',
        title: 'Zero Mess, Zero Work',
        desc: 'Chef handles full setup and cleanup. Your vacation rental stays clean. You go back to enjoying your trip the moment the last plate goes out.',
      },
    ],
    areasPill: 'Vacation Corridor Coverage',
    areasHeadline: (city) => `${city} & Central Florida — We Cover the Whole Vacation Corridor`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves vacation rental properties throughout the ${city} area and all of ${stateName}'s major vacation corridors. If your family is there, we can be there.`,
      (city) => `Most vacation-area properties in the ${city} metro are within our standard service zone. Send us your address and we confirm fast — vacation group bookings often confirmed same day.`,
    ],
    areasButton: 'Check My Vacation Rental',
    occasionPill: 'Perfect for Family Trips',
    occasionHeadline: (city) => `Why ${city} Vacation Groups Keep Booking Hibachi`,
    occasionSubtext: 'Family reunions, birthday trips, and multi-generational vacation dinners — private hibachi at your rental turns any night into the trip highlight.',
    faqPill: 'Vacation Group FAQs',
    faqHeadline: (city, stateAbbr) => `Family Vacation Hibachi in ${city}, ${stateAbbr} — Your Questions Answered`,
    testimonialSubheading: 'Vacation families, group trips, and multi-generational reunions across Florida.',
  },

  // ── [3] Bachelorette / Social ──────────────────────────────────────────────
  {
    heroPill: 'Bachelorette Hibachi',
    experiencePill: 'The Move for Your Florida Weekend',
    experienceImage: '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Bachelorette group hibachi night at a vacation rental in ${city}, Florida`,
    experiencePoints: [
      {
        icon: '🥂',
        title: 'Nobody Leaves the House',
        desc: 'The chef comes to your Airbnb or vacation rental. No Ubers, no crowded restaurants, no group-check nightmares. The party stays exactly where it should.',
      },
      {
        icon: '🔥',
        title: 'A Show All Night Long',
        desc: 'Fire tricks, flying shrimp, the onion volcano — the chef keeps the energy up from first flame to last plate. This isn\'t dinner. It\'s the entertainment.',
      },
      {
        icon: '🎭',
        title: 'Content-Worthy From Start to Finish',
        desc: 'The flames, the tricks, the reactions — there are photos and videos from every angle by the time the chef is done. Your bachelorette group chat is going to be very active.',
      },
      {
        icon: '✅',
        title: 'Zero Coordination Required',
        desc: 'Book it. Tell the group the time. Chef handles everything from arrival to cleanup. The planner\'s job ends the moment the quote is confirmed.',
      },
    ],
    areasPill: 'Florida Weekend Coverage',
    areasHeadline: (city) => `${city} & Surrounding Areas — We Come to Your Rental`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves bachelorette houses, birthday Airbnbs, and group vacation rentals throughout ${city} and all of ${stateName}. If you have a pool deck, we've got your night covered.`,
      (city) => `Coverage spans ${city} and all nearby vacation communities. Send us your property address — we confirm bachelorette weekend bookings fast and often same day.`,
    ],
    areasButton: 'Check My Bachelorette House',
    occasionPill: 'Built for Girls\' Trip Energy',
    occasionHeadline: (city) => `The ${city} Bachelorette Night That Makes the Whole Trip`,
    occasionSubtext: 'Pool deck hibachi, chef performs all night, nobody leaves the house — this is the move that bachelorette groups across Florida keep coming back to.',
    faqPill: 'Bachelorette FAQs',
    faqHeadline: (city, stateAbbr) => `Bachelorette Hibachi in ${city}, ${stateAbbr} — FAQs`,
    testimonialSubheading: 'Bachelorette groups, birthday trips, and girls\' weekends across Florida — what they\'re saying.',
  },

  // ── [4] Snowbird / Residential ─────────────────────────────────────────────
  {
    heroPill: 'Year-Round Hibachi Chef',
    experiencePill: 'Why Florida Hosts Love This',
    experienceImage: '/pics/hibachi-chef-at-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a Florida residential patio event in ${city}`,
    experiencePoints: [
      {
        icon: '🌴',
        title: 'Year-Round Florida Entertaining',
        desc: 'No cold winters, no weather cancellations, no garage setups. Your covered lanai or screened pool cage works twelve months a year — and so do we.',
      },
      {
        icon: '🍽️',
        title: 'Premium Quality at Your Home',
        desc: 'Restaurant-quality proteins cooked fresh on the teppan at your property. Steak, shrimp, salmon, lobster tail — every plate exactly how your guest wants it.',
      },
      {
        icon: '🏡',
        title: 'Gated Communities & Private Neighborhoods Welcome',
        desc: 'We coordinate gate access when you book. Your chef arrives on time, sets up without any hassle, and leaves your community exactly as it was.',
      },
      {
        icon: '💯',
        title: 'The Dinner Party That Runs Itself',
        desc: 'You show up to your own event and enjoy it. Chef handles everything from setup to cleanup. Your guests leave saying it was the best dinner party they\'ve attended.',
      },
    ],
    areasPill: 'Our Florida Coverage',
    areasHeadline: (city) => `Serving ${city} & All Surrounding Communities`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect operates year-round throughout ${city} and the surrounding ${stateName} communities. Covered lanais, screened enclosures, and outdoor pool decks are all supported — we work with your outdoor space.`,
      (city) => `Service extends throughout the ${city} area and nearby communities. Travel fees may apply beyond 30 miles. Send us your address and we'll confirm coverage quickly.`,
    ],
    areasButton: 'Check Coverage in My Area',
    occasionPill: 'For Every Florida Occasion',
    occasionHeadline: (city) => `Year-Round Private Events in ${city}`,
    occasionSubtext: 'Snowbird season entertaining, neighborhood dinner parties, milestone celebrations — a private hibachi chef is the event upgrade your Florida guests haven\'t seen before.',
    faqPill: 'FAQs',
    faqHeadline: (city, stateAbbr) => `Private Hibachi Chef in ${city}, ${stateAbbr} — Common Questions`,
    testimonialSubheading: 'Florida residents, snowbird hosts, and community event planners — what they\'re saying.',
  },
]

const FLORIDA_SECTION_MAP = {
  miami:               1,
  orlando:             2,
  kissimmee:           2,
  davenport:           2,
  clermont:            2,
  'winter-garden':     4,
  tampa:               3,
  'fort-lauderdale':   3,
  'key-west':          3,
  'st-petersburg':     3,
  'panama-city-beach': 0,
  destin:              0,
  '30a':               0,
  'miramar-beach':     0,
  'fort-walton-beach': 0,
  'amelia-island':     0,
  'st-augustine':      0,
  clearwater:          0,
  sarasota:            1,
  naples:              1,
  'west-palm-beach':   1,
  'boca-raton':        1,
  'coral-gables':      1,
  aventura:            1,
  'ponte-vedra-beach': 1,
  jupiter:             1,
  'marco-island':      1,
  'bonita-springs':    1,
  venice:              1,
  jacksonville:        4,
  'cape-coral':        4,
  'fort-myers':        4,
  tallahassee:         4,
  bradenton:           4,
  'port-st-lucie':     4,
  'palm-coast':        4,
  'wesley-chapel':     4,
  riverview:           4,
  'deerfield-beach':   4,
  pensacola:           0,
  'daytona-beach':     0,
}

export function getFloridaSectionVariant(citySlug) {
  const idx = FLORIDA_SECTION_MAP[citySlug] ?? getFloridaVariantIndex(citySlug)
  return FLORIDA_SECTION_VARIANTS[idx % FLORIDA_SECTION_VARIANTS.length]
}

// ─────────────────────────────────────────────────────────────────────────────
// PER-CITY IMAGE MAP — Florida Experience section images
// ─────────────────────────────────────────────────────────────────────────────

const FLORIDA_CITY_IMAGE_MAP = {
  miami:               { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Upscale private hibachi dinner at a waterfront venue in ${city}, Florida` },
  orlando:             { src: '/pics/hibachi-at-home.jpg',      alt: (city) => `Family vacation hibachi dinner at a rental home in ${city}, Florida` },
  tampa:               { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Bachelorette group hibachi pool deck party in ${city}, Florida` },
  jacksonville:        { src: '/pics/hibachi-home-austin.jpg',  alt: (city) => `Backyard private hibachi event in ${city}, Florida` },
  'fort-lauderdale':   { src: '/pics/hibachi-dallas-tyler.jpg', alt: (city) => `Canal-front hibachi dinner in ${city}, Florida` },
  sarasota:            { src: '/pics/hibachi-chef-at-home.jpg', alt: (city) => `Luxury waterfront hibachi event in ${city}, Florida` },
  naples:              { src: '/pics/hibachi-pic-62.jpg',       alt: (city) => `Private estate hibachi dinner in ${city}, Florida` },
  'west-palm-beach':   { src: '/pics/hibachi-shot-1.jpg',      alt: (city) => `Upscale hibachi event at a ${city}, Florida property` },
  destin:              { src: '/pics/backyard-hibachi-2.jpg',   alt: (city) => `Beach house pool deck hibachi in ${city}, Florida` },
  'st-petersburg':     { src: '/pics/hibachi-event.jpg',       alt: (city) => `Social hibachi party in ${city}, Florida` },
  'key-west':          { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Vacation rental hibachi event in ${city}, Florida` },
  'boca-raton':        { src: '/pics/hibachi-shot-1.jpg',      alt: (city) => `Luxury hibachi dinner party in ${city}, Florida` },
  'cape-coral':        { src: '/pics/traveling-hibachi.jpg',   alt: (city) => `Canal-front hibachi event in ${city}, Florida` },
  'panama-city-beach': { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Beach vacation hibachi party in ${city}, Florida` },
  clearwater:          { src: '/pics/hibachi-to-you.jpg',      alt: (city) => `Beach community hibachi event in ${city}, Florida` },
  'fort-myers':        { src: '/pics/mobile-hibachi.jpg',      alt: (city) => `Residential hibachi event in ${city}, Florida` },
  pensacola:           { src: '/pics/hibachi-pic-3.jpg',       alt: (city) => `Gulf Coast hibachi party near ${city}, Florida` },
  tallahassee:         { src: '/pics/hibachi-pic-4.jpg',       alt: (city) => `Backyard hibachi event in ${city}, Florida` },
  gainesville:         { src: '/pics/hibachi-austin.jpg',      alt: (city) => `College-town hibachi party in ${city}, Florida` },
  'daytona-beach':     { src: '/pics/hibachi-pic-32.jpg',      alt: (city) => `Beachside hibachi group event near ${city}, Florida` },
  kissimmee:           { src: '/pics/hibachi-catering-2.jpg',  alt: (city) => `Vacation home hibachi dinner in ${city}, Florida` },
  'coral-gables':      { src: '/pics/hibachi-dallas.jpg',      alt: (city) => `Upscale patio hibachi in ${city}, Florida` },
  aventura:            { src: '/pics/hibachi-pic-2.jpg',       alt: (city) => `Luxury condo terrace hibachi in ${city}, Florida` },
  '30a':               { src: '/pics/backyard-hibachi-2.jpg',  alt: (city) => `Upscale beach house hibachi on scenic 30A, Florida` },
  bradenton:           { src: '/pics/hibachi-austin-2.jpg',    alt: (city) => `Waterfront hibachi event in ${city}, Florida` },
  venice:              { src: '/pics/hibachi-austin-3.jpg',    alt: (city) => `Gulf Coast hibachi dinner party in ${city}, Florida` },
  'bonita-springs':    { src: '/pics/hibachi-pic-4.jpg',       alt: (city) => `Luxury residential hibachi in ${city}, Florida` },
  'marco-island':      { src: '/pics/hibachi-shot-2.jpg',      alt: (city) => `Island resort hibachi event in ${city}, Florida` },
  jupiter:             { src: '/pics/hibachi-pic-62.jpg',      alt: (city) => `Waterfront hibachi event in ${city}, Florida` },
  'delray-beach':      { src: '/pics/hibachi-event.jpg',       alt: (city) => `Social hibachi dinner in ${city}, Florida` },
  'st-augustine':      { src: '/pics/hibachi-to-you.jpg',      alt: (city) => `Vacation rental hibachi in historic ${city}, Florida` },
  'ponte-vedra-beach': { src: '/pics/hibachi-chef-at-home.jpg',alt: (city) => `Luxury community hibachi event in ${city}, Florida` },
  'amelia-island':     { src: '/pics/traveling-hibachi.jpg',   alt: (city) => `Island vacation rental hibachi in ${city}, Florida` },
}

export function getFloridaCityImage(citySlug) {
  return FLORIDA_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images — above Testimonials + above Final CTA ────────────────────
const FLORIDA_SUPPORT_IMAGES = {
  miami: {
    testimonial: {
      src:     '/pics/hibachi-shot-2.jpg',
      alt:     (city) => `Upscale private hibachi dinner at a Miami waterfront event`,
      caption: 'Waterfront terraces, rooftop decks, and South Beach Airbnbs — Miami hibachi at home.',
      intro:   (city) => `Trusted by ${city} hosts, executives, and event planners across South Florida. From intimate Brickell apartment dinners to 60-person Coral Gables estate parties — our guests consistently rate the food, entertainment, and service as exceptional.`,
    },
    cta: {
      src:     '/pics/hibachi-dallas-tyler.jpg',
      alt:     (city) => `Private hibachi chef performing at a waterfront ${city} event`,
      caption: null,
    },
  },
  orlando: {
    testimonial: {
      src:     '/pics/hibachi-at-home.jpg',
      alt:     (city) => `Family vacation group gathered around hibachi grill at an Orlando rental home`,
      caption: 'Vacation homes, Kissimmee pool houses, and VRBO rentals — Orlando vacation groups choose hibachi every time.',
    },
    cta: {
      src:     '/pics/hibachi-catering-2.jpg',
      alt:     (city) => `Hibachi chef serving a vacation group at an ${city} area rental`,
      caption: null,
    },
  },
  tampa: {
    testimonial: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Bachelorette group enjoying hibachi on a pool deck in Tampa, Florida`,
      caption: 'Bachelorette weekends, corporate events, and birthday trips — Tampa Bay hibachi at home.',
    },
    cta: {
      src:     '/pics/backyard-hibachi.jpg',
      alt:     (city) => `Private hibachi chef performing at a ${city} pool deck event`,
      caption: null,
    },
  },
  jacksonville: {
    testimonial: {
      src:     '/pics/hibachi-home-austin.jpg',
      alt:     (city) => `Backyard hibachi party at a Jacksonville, Florida home`,
      caption: 'Northeast Florida\'s largest city — backyard events, beach communities, and graduation parties.',
    },
    cta: {
      src:     '/pics/mobile-hibachi.jpg',
      alt:     (city) => `Mobile hibachi chef arriving for a ${city} backyard event`,
      caption: null,
    },
  },
  'fort-lauderdale': {
    testimonial: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Waterfront patio hibachi event in Fort Lauderdale, Florida`,
      caption: 'Canal-front patios, intracoastal views, and Las Olas dinner parties — Fort Lauderdale hibachi.',
    },
    cta: {
      src:     '/pics/hibachi-dallas-tyler.jpg',
      alt:     (city) => `Private hibachi chef at a Fort Lauderdale waterfront property`,
      caption: null,
    },
  },
  sarasota: {
    testimonial: {
      src:     '/pics/hibachi-chef-at-home.jpg',
      alt:     (city) => `Luxury hibachi dinner on a Sarasota, Florida waterfront property`,
      caption: 'Gulf Coast luxury, snowbird season entertaining, and waterfront events — Sarasota hibachi at home.',
    },
    cta: {
      src:     '/pics/hibachi-shot-1.jpg',
      alt:     (city) => `Private chef hibachi at a ${city} waterfront estate`,
      caption: null,
    },
  },
  naples: {
    testimonial: {
      src:     '/pics/hibachi-pic-62.jpg',
      alt:     (city) => `Estate hibachi dinner at a private Naples, Florida property`,
      caption: 'Pelican Bay, Port Royal, Olde Naples — the Sunshine State\'s most refined market.',
    },
    cta: {
      src:     '/pics/hibachi-shot-2.jpg',
      alt:     (city) => `Premium hibachi dining at a ${city} estate property`,
      caption: null,
    },
  },
  destin: {
    testimonial: {
      src:     '/pics/backyard-hibachi-2.jpg',
      alt:     (city) => `Beach house pool deck hibachi in Destin, Florida`,
      caption: 'Emerald Coast beach houses, bachelorette weekends, and family reunion dinners — Destin hibachi.',
    },
    cta: {
      src:     '/pics/hibachi-catering-austin.jpg',
      alt:     (city) => `Private hibachi chef at a ${city} beach house event`,
      caption: null,
    },
  },
  'st-petersburg': {
    testimonial: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Social hibachi night at a St. Petersburg, Florida vacation rental`,
      caption: 'Old Northeast patios, St. Pete Beach rentals, and waterfront dinners — St. Pete hibachi at home.',
    },
    cta: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Private hibachi chef at a ${city} pool deck event`,
      caption: null,
    },
  },
  'west-palm-beach': {
    testimonial: {
      src:     '/pics/hibachi-shot-1.jpg',
      alt:     (city) => `Upscale hibachi event at a West Palm Beach, Florida property`,
      caption: 'Palm Beach County entertaining — corporate events, snowbird dinners, and luxury celebrations.',
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private chef hibachi at a ${city} outdoor event`,
      caption: null,
    },
  },
}

// Fallback pool for all other Florida cities — 5 slots by variant index
const FLORIDA_SUPPORT_FALLBACKS = [
  {
    testimonial: { src: '/pics/backyard-hibachi.jpg',      alt: (city) => `Pool deck hibachi at a vacation rental near ${city}, Florida`,    caption: null },
    cta:         { src: '/pics/hibachi-to-you.jpg',        alt: (city) => `Private hibachi chef arriving for a ${city}, Florida event`,      caption: null },
  },
  {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',        alt: (city) => `Luxury private hibachi event near ${city}, Florida`,             caption: null },
    cta:         { src: '/pics/hibachi-chef-at-home.jpg',  alt: (city) => `Hibachi chef at home event in ${city}, Florida`,                 caption: null },
  },
  {
    testimonial: { src: '/pics/hibachi-at-home.jpg',       alt: (city) => `Family vacation hibachi near ${city}, Florida`,                  caption: null },
    cta:         { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Hibachi catering for a vacation group in ${city}, Florida`,      caption: null },
  },
  {
    testimonial: { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Bachelorette hibachi event near ${city}, Florida`,             caption: null },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Pool deck hibachi party near ${city}, Florida`,                  caption: null },
  },
  {
    testimonial: { src: '/pics/hibachi-chef-at-home.jpg',  alt: (city) => `Residential hibachi event in ${city}, Florida`,                 caption: null },
    cta:         { src: '/pics/traveling-hibachi.jpg',     alt: (city) => `Private hibachi chef traveling to ${city}, Florida home`,        caption: null },
  },
]

export function getFloridaSupportImages(citySlug, variantIdx) {
  return FLORIDA_SUPPORT_IMAGES[citySlug] ?? FLORIDA_SUPPORT_FALLBACKS[variantIdx % FLORIDA_SUPPORT_FALLBACKS.length]
}

// ── Florida blog posts ─────────────────────────────────────────────────────────
export const FLORIDA_BLOG_POSTS = [
  // 0 — Florida vacation rental guide (always slot 1)
  {
    slug:     'hibachi-at-vacation-rental-florida',
    title:    'Hibachi at Your Florida Vacation Rental: The Complete Guide',
    tag:      'Planning',
    readTime: '6 min read',
    excerpt:  'Pool deck setup, Airbnb rules, group sizes, and what to confirm before booking — everything you need for an unforgettable hibachi night at your Florida rental.',
  },
  // 1 — Florida bachelorette guide (always slot 2)
  {
    slug:     'hibachi-bachelorette-party',
    title:    'Why Hibachi Is the Best Bachelorette Party Activity in Florida',
    tag:      'Occasions',
    readTime: '5 min read',
    excerpt:  'Bachelorette groups across Florida are skipping the restaurant reservation and booking a private hibachi chef instead. Here\'s why it works so well.',
  },
  // 2 — Pricing guide (rotation slot 3)
  {
    slug:     'how-much-does-private-hibachi-cost',
    title:    'How Much Does a Private Hibachi Chef Cost?',
    tag:      'Pricing',
    readTime: '5 min read',
    excerpt:  'A complete breakdown of private hibachi pricing: per-person rates, event minimums, premium add-ons, and what\'s included at every price point.',
  },
  // 3 — Planning checklist (rotation slot 3)
  {
    slug:     'how-to-plan-a-backyard-hibachi-party',
    title:    'How to Plan a Backyard Hibachi Party (Complete Checklist)',
    tag:      'Planning',
    readTime: '7 min read',
    excerpt:  'Everything you need to prepare before your private hibachi chef arrives — space setup, guest seating, timing, and the questions to ask your chef.',
  },
  // 4 — Family vacation guide (rotation slot 3)
  {
    slug:     'hibachi-at-home-vs-restaurant',
    title:    'Hibachi at Home vs. Restaurant: Which Is Better for Your Group?',
    tag:      'Comparison',
    readTime: '5 min read',
    excerpt:  'A straight comparison: cost, convenience, experience, and who wins for vacation groups, bachelorette parties, and family reunions.',
  },
]

export function getFloridaBlogPosts(cityVariant, count = 3) {
  const rotatingIndex = [2, 3, 4, 3, 2][cityVariant % 5]
  return [
    FLORIDA_BLOG_POSTS[0],
    FLORIDA_BLOG_POSTS[1],
    FLORIDA_BLOG_POSTS[rotatingIndex],
  ].slice(0, count)
}
