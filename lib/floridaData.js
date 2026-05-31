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
    heroImage: '/pics/hero-5.jpg',
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
  // ── Major markets ─────────────────────────────────────────────────────────
  'miami':              { v: 1, profileIdx: 0, nearby: ['Fort Lauderdale', 'Boca Raton', 'Coral Gables', 'Kendall', 'Hialeah', 'Aventura', 'Hollywood', 'Doral', 'Homestead', 'Pembroke Pines'] },
  'orlando':            { v: 2, profileIdx: 1, nearby: ['Kissimmee', 'Winter Park', 'Lake Nona', 'Sanford', 'Davenport', 'Celebration', 'Clermont', 'Winter Garden', 'Oviedo', 'Altamonte Springs'] },
  'tampa':              { v: 3, profileIdx: 2, nearby: ['St. Petersburg', 'Clearwater', 'Brandon', 'Wesley Chapel', "Land O'Lakes", 'Riverview', 'Lutz', 'New Tampa', 'Westchase', 'Carrollwood'] },
  'jacksonville':       { v: 4, profileIdx: 3, nearby: ['Ponte Vedra Beach', 'Atlantic Beach', 'Neptune Beach', 'Mandarin', 'Fleming Island', 'Orange Park', 'St. Augustine', 'Palm Coast', 'Amelia Island', 'Fernandina Beach'] },
  'fort-lauderdale':    { v: 1, profileIdx: 4, nearby: ['Pompano Beach', 'Deerfield Beach', 'Hallandale', 'Hollywood', 'Coral Springs', 'Pembroke Pines', 'Boca Raton', 'Coconut Creek', 'Wilton Manors', 'Weston'] },

  // ── Beach/vacation ────────────────────────────────────────────────────────
  'sarasota':           { v: 4, profileIdx: 5, nearby: ['Siesta Key', 'Longboat Key', 'Bradenton', 'Venice', 'Lakewood Ranch', 'Osprey', 'Nokomis', 'North Port', 'Port Charlotte', 'Englewood'] },
  'naples':             { v: 1, profileIdx: 6, nearby: ['Bonita Springs', 'Marco Island', 'Estero', 'Cape Coral', 'Fort Myers', 'Golden Gate', 'Pelican Bay', 'Port Royal', 'Olde Naples', 'Immokalee'] },
  'west-palm-beach':    { v: 1, profileIdx: 7, nearby: ['Palm Beach', 'Jupiter', 'Boca Raton', 'Delray Beach', 'Lake Worth', 'Wellington', 'Boynton Beach', 'Greenacres', 'Royal Palm Beach', 'Palm Beach Gardens'] },
  'destin':             { v: 0, profileIdx: 8, nearby: ['Miramar Beach', 'Fort Walton Beach', 'Niceville', '30A', 'Santa Rosa Beach', 'Panama City Beach', 'Navarre', 'Crestview', 'DeFuniak Springs', 'Freeport'] },
  'st-petersburg':      { v: 3, profileIdx: 9, nearby: ['Clearwater', 'Gulfport', 'St. Pete Beach', 'Treasure Island', 'Pinellas Park', 'Largo', 'Seminole', 'Tarpon Springs', 'Dunedin', 'Safety Harbor'] },

  // ── Growth markets ────────────────────────────────────────────────────────
  'key-west':           { v: 0, nearby: ['Stock Island', 'Big Pine Key', 'Marathon', 'Islamorada', 'Key Largo', 'Sugarloaf Key', 'Cudjoe Key', 'Ramrod Key', 'Summerland Key', 'No Name Key'] },
  'cape-coral':         { v: 4, nearby: ['Fort Myers', 'Bonita Springs', 'Estero', 'Naples', 'Lehigh Acres', 'Sanibel', 'Pine Island', 'North Fort Myers', 'Gateway', 'Iona'] },
  'boca-raton':         { v: 1, nearby: ['Delray Beach', 'Deerfield Beach', 'Pompano Beach', 'Boynton Beach', 'West Palm Beach', 'Lake Worth', 'Coral Springs', 'Coconut Creek', 'Highland Beach', 'Parkland'] },
  'panama-city-beach':  { v: 0, nearby: ['Panama City', 'Lynn Haven', 'Callaway', 'Springfield', 'Destin', 'Fort Walton Beach', 'Santa Rosa Beach', '30A', 'Pier Park area', 'Rosemary Beach'] },
  '30a':                { v: 1, nearby: ['Seaside', 'Rosemary Beach', 'Alys Beach', 'WaterColor', 'Grayton Beach', 'Blue Mountain Beach', 'Inlet Beach', 'Santa Rosa Beach', 'Destin', 'Fort Walton Beach'] },

  // ── Panhandle ─────────────────────────────────────────────────────────────
  'pensacola':          { v: 0, nearby: ['Pensacola Beach', 'Gulf Breeze', 'Navarre', 'Milton', 'Pace', 'Ferry Pass', 'Cantonment', 'Warrington', 'Perdido Key', 'Molino'] },
  'fort-walton-beach':  { v: 0, nearby: ['Destin', 'Okaloosa Island', 'Niceville', 'Valparaiso', 'Navarre', 'Crestview', 'Mary Esther', 'Shalimar', 'Eglin AFB area', 'Hurlburt Field area'] },
  'miramar-beach':      { v: 0, nearby: ['Destin', 'Sandestin', 'Santa Rosa Beach', '30A', 'Fort Walton Beach', 'Niceville', 'DeFuniak Springs', 'Panama City Beach', 'Freeport', 'Navarre'] },

  // ── Northeast FL ──────────────────────────────────────────────────────────
  'st-augustine':       { v: 0, nearby: ['Ponte Vedra Beach', 'Palm Coast', 'Vilano Beach', 'Anastasia Island', 'St. Augustine Beach', 'Flagler Beach', 'Crescent Beach', 'Elkton', 'Hastings', 'Switzerland'] },
  'ponte-vedra-beach':  { v: 1, nearby: ['Jacksonville Beach', 'Neptune Beach', 'Atlantic Beach', 'St. Augustine', 'Palm Valley', 'Nocatee', 'Sawgrass', 'Palm Coast', 'Mandarin', 'Julington Creek'] },
  'palm-coast':         { v: 0, nearby: ['Flagler Beach', 'Bunnell', 'Ormond Beach', 'Daytona Beach', 'St. Augustine', 'Ponte Vedra Beach', 'Marineland', 'Beverly Beach', 'Hammock Beach', 'Matanzas'] },
  'daytona-beach':      { v: 0, nearby: ['Ormond Beach', 'Port Orange', 'South Daytona', 'Holly Hill', 'Daytona Beach Shores', 'New Smyrna Beach', 'Edgewater', 'Palm Coast', 'DeLand', 'Deltona'] },
  'amelia-island':      { v: 0, nearby: ['Fernandina Beach', 'Yulee', 'Callahan', 'Jacksonville', 'Atlantic Beach', 'St. Marys (GA)', 'Kingsland (GA)', 'Hilliard', 'Bryceville', 'Macclenny'] },

  // ── Central FL ────────────────────────────────────────────────────────────
  'kissimmee':          { v: 2, nearby: ['Celebration', 'Lake Buena Vista', 'Davenport', 'Champions Gate', 'Poinciana', 'St. Cloud', 'Reunion', 'Solterra', 'Windermere', 'Winter Garden'] },
  'davenport':          { v: 2, nearby: ['Champions Gate', 'Clermont', 'Kissimmee', 'Poinciana', 'Haines City', 'Winter Haven', 'Lake Wales', 'Four Corners', 'Solterra', 'Reunion'] },
  'clermont':           { v: 2, nearby: ['Winter Garden', 'Minneola', 'Groveland', 'Mascotte', 'Montverde', 'Windermere', 'Oakland', 'Leesburg', 'Tavares', 'Kissimmee'] },
  'winter-garden':      { v: 4, nearby: ['Clermont', 'Windermere', 'Ocoee', 'Oakland', 'Minneola', 'Gotha', 'Montverde', 'Apopka', 'Longwood', 'Altamonte Springs'] },
  'lake-buena-vista':   { v: 2, nearby: ['Kissimmee', 'Celebration', 'Windermere', 'Champions Gate', 'Davenport', 'Winter Garden', 'Doctor Phillips', 'Bay Hill', 'Orlando', 'Buena Ventura Lakes'] },

  // ── Tampa Bay ─────────────────────────────────────────────────────────────
  'clearwater':         { v: 3, nearby: ['Dunedin', 'Safety Harbor', 'Tarpon Springs', 'Largo', 'Palm Harbor', 'St. Petersburg', 'Seminole', 'Belleair', 'Indian Rocks Beach', 'Treasure Island'] },
  'wesley-chapel':      { v: 4, nearby: ["Land O'Lakes", 'Zephyrhills', 'New Tampa', 'Lutz', 'Pasco', 'Dade City', 'San Antonio', 'Odessa', 'Carrollwood', 'Tampa'] },
  'riverview':          { v: 4, nearby: ['Brandon', 'Valrico', 'Apollo Beach', 'Gibsonton', 'Sun City Center', 'Wimauma', 'Ruskin', 'Lithia', 'Boyette', 'Tampa'] },
  'bradenton':          { v: 4, nearby: ['Sarasota', 'Anna Maria Island', 'Palmetto', 'Lakewood Ranch', 'Ellenton', 'Parrish', 'Oneco', 'Cortez', 'Longboat Key', 'Venice'] },

  // ── Southwest FL ──────────────────────────────────────────────────────────
  'fort-myers':         { v: 4, nearby: ['Cape Coral', 'Bonita Springs', 'Estero', 'Naples', 'Lehigh Acres', 'Sanibel', 'Pine Island', 'Gateway', 'Daniels Corridor', 'McGregor'] },
  'bonita-springs':     { v: 1, nearby: ['Naples', 'Estero', 'Fort Myers', 'Cape Coral', 'Marco Island', 'Pelican Landing', 'Barefoot Beach', 'Lely', 'Ave Maria', 'Miromar Lakes'] },
  'marco-island':       { v: 1, nearby: ['Naples', 'Goodland', 'Isles of Capri', 'Bonita Springs', 'Estero', 'Fort Myers', 'Everglades City', 'Chokoloskee', 'Olde Naples', 'Pelican Bay'] },
  'venice':             { v: 4, nearby: ['Sarasota', 'Nokomis', 'Osprey', 'Englewood', 'North Port', 'Port Charlotte', 'Laurel', 'Manasota Key', 'South Venice', 'Wellen Park'] },

  // ── South FL ──────────────────────────────────────────────────────────────
  'coral-gables':       { v: 1, nearby: ['Coconut Grove', 'South Miami', 'Kendall', 'Pinecrest', 'Miami Beach', 'Brickell', 'Doral', 'Westchester', 'Sweetwater', 'Hialeah'] },
  'hollywood':          { v: 3, nearby: ['Hallandale Beach', 'Pembroke Pines', 'Fort Lauderdale', 'Dania Beach', 'Miramar', 'Cooper City', 'Davie', 'Aventura', 'Weston', 'Plantation'] },
  'aventura':           { v: 1, nearby: ['Hallandale Beach', 'Sunny Isles Beach', 'North Miami Beach', 'Golden Beach', 'Hollywood', 'Bal Harbour', 'Surfside', 'Fort Lauderdale', 'Dania Beach', 'Miami Beach'] },
  'delray-beach':       { v: 3, nearby: ['Boca Raton', 'Boynton Beach', 'Lake Worth', 'Lantana', 'Highland Beach', 'Deerfield Beach', 'Pompano Beach', 'West Palm Beach', 'Greenacres', 'Palm Springs'] },
  'pompano-beach':      { v: 0, nearby: ['Fort Lauderdale', 'Deerfield Beach', 'Coconut Creek', 'Margate', 'Coral Springs', 'Lighthouse Point', 'Boca Raton', 'Lauderdale-by-the-Sea', 'Oakland Park', 'Lauderhill'] },
  'deerfield-beach':    { v: 0, nearby: ['Boca Raton', 'Pompano Beach', 'Coconut Creek', 'Margate', 'Hillsboro Beach', 'Lighthouse Point', 'Fort Lauderdale', 'Coral Springs', 'Parkland', 'Hillsboro Pines'] },
  'jupiter':            { v: 1, nearby: ['Palm Beach Gardens', 'Tequesta', 'Juno Beach', 'North Palm Beach', 'West Palm Beach', 'Hobe Sound', 'Stuart', 'Palm City', 'Abacoa', 'Loxahatchee'] },
  'lake-worth':         { v: 0, nearby: ['West Palm Beach', 'Boynton Beach', 'Lantana', 'Greenacres', 'Lake Worth Beach', 'Wellington', 'Delray Beach', 'Royal Palm Beach', 'Palm Springs', 'Haverhill'] },

  // ── Others ────────────────────────────────────────────────────────────────
  'gainesville':        { v: 2, nearby: ['Newberry', 'Alachua', 'High Springs', 'Micanopy', 'Waldo', 'Jonesville', 'Archer', 'Hawthorne', 'Ocala', 'Lake City'] },
  'tallahassee':        { v: 4, nearby: ['Midway', 'Havana', 'Quincy', 'Crawfordville', 'Wakulla Springs', 'Monticello', 'Thomasville (GA)', 'Valdosta (GA)', 'Woodville', 'Apalachicola'] },
  'kendall':            { v: 3, nearby: ['Pinecrest', 'South Miami', 'Doral', 'Westchester', 'Sweetwater', 'Coral Gables', 'Hialeah', 'Homestead', 'Fontainebleau', 'Miami'] },
  'port-st-lucie':      { v: 0, nearby: ['Stuart', 'Palm City', 'Tradition', 'Torino', 'Lakewood Park', 'Jensen Beach', 'Vero Beach', 'Fort Pierce', 'Hobe Sound', 'White City'] },
}

export function getFloridaCityData(citySlug, cityName) {
  const major    = FLORIDA_MAJOR_CITIES[citySlug]
  const v        = major ? major.v : getFloridaVariantIndex(citySlug)
  const theme    = FLORIDA_IMAGE_THEMES[v]
  const profile  = FLORIDA_CITY_PROFILES[citySlug]
  const override = FLORIDA_CITY_OVERRIDES[citySlug]

  return {
    cityName,
    stateName:   'Florida',
    stateAbbr:   'FL',
    stateSlug:   'florida',
    variant:     v % 3,
    heroImage:   theme.heroImage,
    heroSubtitle: override?.heroSubtitle ?? profile?.heroSubtitle ?? FLORIDA_HERO_SUBTITLES[v](cityName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    localHighlights:   override?.localHighlights ?? FLORIDA_LOCAL_HIGHLIGHTS[v](cityName),
    featuredOccasions: FLORIDA_OCCASIONS[v],
    faqSet:            override?.faqSet ?? FLORIDA_FAQ_SETS[v](cityName),
    testimonials:      override?.testimonials ?? FLORIDA_TESTIMONIALS[v],
    // Top-10 major cities (profileIdx defined) get city-specific intros 23–32; all others get generic 18–22
    uniqueIntroVariant:   (major?.profileIdx != null) ? 23 + major.profileIdx : 18 + v,
    uniqueWhyUsVariant:   v,
    uniqueClosingVariant: (major?.profileIdx != null) ? 23 + major.profileIdx : 18 + v,
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

// ─────────────────────────────────────────────────────────────────────────────
// FLORIDA CITY OVERRIDES
// Per-city content overrides: localHighlights, faqSet, testimonials.
// C-level cities also include heroSubtitle.
// Priority: override > profile > generic variant array
// ─────────────────────────────────────────────────────────────────────────────

const FLORIDA_CITY_OVERRIDES = {

  // ── B-level major cities (no heroSubtitle — already in FLORIDA_CITY_PROFILES) ──

  miami: {
    localHighlights: [
      'Brickell penthouse terraces, Coconut Grove waterfront estates, and Coral Gables pool decks — we set up where Miami looks best',
      'Latin celebrations, quinceañeras, and multicultural milestone parties are among our most-booked Miami occasions',
      'South Beach Airbnbs, Wynwood lofts, and Aventura high-rise rooftops all work for hibachi setup — we confirm your space in advance',
      'Premium proteins always available: filet mignon, lobster tail, Chilean sea bass, and scallops for Miami\'s elevated palate',
      'Bachelorette weekends arriving from New York, Chicago, and Atlanta consistently make Miami hibachi night the trip highlight',
      'Miami-Dade County is one of our most active markets — we maintain year-round chef coverage from Homestead to Aventura',
    ],
    faqSet: [
      {
        q: 'Do you serve Brickell, South Beach, and Coral Gables?',
        a: 'Yes — we serve all Miami neighborhoods including Brickell, South Beach, Coral Gables, Coconut Grove, Wynwood, Aventura, Kendall, Doral, and surrounding communities. Most locations in Miami-Dade County fall within our standard service area with no travel fee. For properties further south toward Homestead or north toward Broward, a travel fee may apply and is disclosed upfront.',
      },
      {
        q: 'Can you set up on a rooftop, penthouse terrace, or high-rise balcony in Miami?',
        a: 'Yes — rooftop decks, penthouse terraces, and elevated outdoor spaces are some of our most popular Miami setups. We need a flat, stable surface of at least 10×10 ft, vehicle access to the building, and elevator or service entrance access to load the grill. Confirm with your building management that open-flame outdoor cooking is permitted. Most luxury Miami high-rises with rooftop amenities accommodate us.',
      },
      {
        q: 'Is hibachi a good choice for a Latin celebration or quinceañera in Miami?',
        a: 'Absolutely — Miami\'s Latin community loves private hibachi events. The live-fire performance and communal dining experience translate perfectly for birthday milestones, quinceañeras, and family celebrations. We work with the host to accommodate large, multigenerational groups — one chef for 10–20 guests, two stations for 25–50. Tell us your group size and occasion and we\'ll size the setup correctly.',
      },
      {
        q: 'How popular is hibachi for bachelorette weekends in Miami?',
        a: 'It\'s one of our most-booked Miami occasions. Groups of 12–20 women arriving for a bachelorette weekend at a South Beach Airbnb or Wynwood loft consistently name hibachi night as the trip highlight. The chef comes to your rental, sets up on the pool deck or rooftop, and runs the full performance all evening. No restaurant logistics for a group that size. Bachelorette weekend dates book 3–5 weeks out — reserve early.',
      },
      {
        q: 'What premium protein options are available for a Miami hibachi event?',
        a: 'All premium upgrades are available: filet mignon (+$10/person), lobster tail (+$15/person), Chilean sea bass (+$12/person), and scallops (+$5/person). You can mix and match by guest or configure a fully premium menu for the table. Miami events frequently include a combination of standard and premium proteins — we accommodate per-guest customization. Just let us know your preferences when booking.',
      },
      {
        q: 'How far in advance should I book a hibachi event in Miami?',
        a: 'For weekend events in Miami, we recommend booking 3–4 weeks ahead. Bachelorette weekends, holiday weekends, and Art Basel season can fill 5–6 weeks out for premium Saturday dates. Corporate events and large estate dinners should also plan 4+ weeks ahead. Weekday and corporate mid-week bookings can often be arranged with 1–2 weeks notice. Miami is a very active market — don\'t wait once you have your dates confirmed.',
      },
    ],
    testimonials: [
      {
        text: '"Bachelorette trip to Miami — 16 of us at a Brickell rooftop Airbnb, chef set up on the terrace, and it was genuinely the best night of the entire weekend. The fire show had everyone screaming. The food was incredible. The bride kept saying she couldn\'t believe we pulled this off. Already planning the same for the next one."',
        name: 'Jess M.',
        city: 'New York, NY',
        event: 'Bachelorette Party',
        initials: 'JM',
      },
      {
        text: '"We had a family birthday celebration in Coral Gables — 28 guests, pool deck setup, mix of Cuban and Japanese food cultures at the table. The chef was absolutely phenomenal and the whole family was entertained for two hours straight. My father-in-law said it was the best birthday dinner he\'d ever had. We are 100% doing this again."',
        name: 'Carlos & Lucia R.',
        city: 'Miami, FL',
        event: 'Milestone Birthday',
        initials: 'CR',
      },
      {
        text: '"Corporate client dinner at a Coconut Grove waterfront estate — 35 people, full premium menu with filet and lobster. The chef commanded the room from start to finish. Every client asked for the contact info afterward. We\'ve already replaced our annual restaurant reservation with this permanently."',
        name: 'David K.',
        city: 'Miami, FL',
        event: 'Corporate Client Dinner',
        initials: 'DK',
      },
    ],
  },

  orlando: {
    localHighlights: [
      'Kissimmee vacation home communities — Champions Gate, Solterra, Reunion Resort — are our most-booked Orlando-area setups',
      'Large family groups of 20–50 at Central Florida vacation rentals are our sweet spot — one or two chef stations sized to your group',
      'Vacation home pool decks with screen enclosures or covered lanais work perfectly for hibachi setup in the Orlando area',
      'Kids love hibachi — the onion volcano and flying shrimp are a bigger hit than most theme park experiences',
      'Lake Nona, Celebration, and Davenport vacation communities book up fast in summer — reserve your date 3–4 weeks ahead',
      'We serve all of Greater Orlando and the vacation corridor from Kissimmee south to Davenport and west through Clermont',
    ],
    faqSet: [
      {
        q: 'Do you serve vacation home communities in Kissimmee, Champions Gate, and Reunion Resort?',
        a: 'Yes — vacation home communities in the Kissimmee and Davenport area are among our most active markets. Champions Gate, Solterra, Reunion Resort, Windsor Hills, Emerald Island, and surrounding vacation communities are all in our regular service area. Most properties in these communities have pool decks or lanais that work perfectly for hibachi setup. Give us your property address and we\'ll confirm coverage same day.',
      },
      {
        q: 'How many people can you serve at a large family vacation house in the Orlando area?',
        a: 'One chef comfortably serves 10–20 guests per session. For larger groups — the 25–50 person family reunions that are common in Orlando-area vacation homes — we bring two chef stations running in parallel. This covers everyone efficiently, keeps the entertainment going at both ends of the table, and makes the evening feel like a real event rather than a catered meal.',
      },
      {
        q: 'Can you set up inside a screened pool enclosure at a Kissimmee vacation rental?',
        a: 'Yes — screened pool enclosures and covered lanais are among our most common Orlando-area setups. We need adequate ventilation (a screened enclosure provides this) and a flat, stable concrete or deck surface of at least 10×10 ft. The screen gives guests cover from Florida bugs and evening heat while keeping the outdoor ambiance. Confirm your property allows open-flame cooking before booking.',
      },
      {
        q: 'Is hibachi good for kids at an Orlando vacation group?',
        a: 'It\'s one of the best family vacation activities available. The fire tricks, flying shrimp tosses, and onion volcano keep kids aged 4–12 completely engaged from start to finish. Grandparents get front-row seats and cooked-to-order proteins. Everyone eats at the same time. No managing a restaurant reservation for 25 people. It consistently becomes the most-talked-about event of the whole vacation.',
      },
      {
        q: 'Do you serve Lake Nona, Celebration, and Davenport vacation areas?',
        a: 'Yes — Lake Nona, Celebration, Davenport, Clermont, Winter Garden, and all surrounding Central Florida vacation communities are in our service area. The entire I-4 vacation corridor is covered. Most properties in these areas are within our standard service zone with no travel fee. For vacation properties further from the metro, a small travel fee may apply and is always disclosed upfront in your quote.',
      },
      {
        q: 'How far in advance should I book for a summer vacation group in the Orlando area?',
        a: 'Summer is peak season for Central Florida vacation home communities — book 3–4 weeks ahead for July and August weekends. Spring break (March–April) and holiday weeks (Thanksgiving, Christmas, New Year\'s) fill even faster — plan 4–6 weeks ahead for those dates. We do our best to accommodate same-week requests on weekdays; contact us directly to check. Don\'t wait on summer Saturday nights.',
      },
    ],
    testimonials: [
      {
        text: '"We rented a 10-bedroom house in Kissimmee for a 40-person family reunion and the hibachi chef was genuinely the highlight of the entire trip. Three generations at the table — kids were catching shrimp mid-air, grandparents were laughing, everyone stayed at the table for two hours. No one checked their phone. We\'re doing this every year now."',
        name: 'The Williams Family',
        city: 'Atlanta, GA',
        event: 'Family Reunion',
        initials: 'WF',
      },
      {
        text: '"Vacation house in Champions Gate — 22 family members, pool deck setup, chef showed up perfectly on time. The kids were obsessed from the moment the fire came on. Adults got a legitimately great meal. We did Disney the day before and honestly this topped it. Booking again for next year\'s trip."',
        name: 'Sandra M.',
        city: 'Chicago, IL',
        event: 'Family Vacation Dinner',
        initials: 'SM',
      },
      {
        text: '"We had 18 people at a vacation rental near Reunion Resort — multiple families, ages 5 to 72. The chef had the whole group completely entertained. Food was fresh, cooked exactly how everyone wanted it, and nobody had to figure out a restaurant for that many people. This is the only way to do vacation dinners going forward."',
        name: 'Luis & Maria G.',
        city: 'Miami, FL',
        event: 'Multi-Family Vacation Dinner',
        initials: 'LG',
      },
    ],
  },

  tampa: {
    localHighlights: [
      'South Tampa pool decks, Hyde Park patios, and Westchase backyards are among our most-booked setup locations',
      'Bachelorette weekends from across the Southeast consistently arrive in Tampa — hibachi at the vacation rental is the move',
      'Corporate events in Tampa\'s growing tech and finance sector run from intimate 10-person dinners to 80-person team events',
      'Wesley Chapel, Brandon, and New Tampa residential communities love private chef dining on covered lanais',
      'Pool deck hibachi in Tampa Bay is a year-round activity — no weather cancellations, no cold evenings',
      'Ybor City, Channelside, and downtown Tampa Airbnbs with outdoor access are perfect for hibachi group nights',
    ],
    faqSet: [
      {
        q: 'Do you serve South Tampa, Hyde Park, and Westchase neighborhoods?',
        a: 'Yes — South Tampa, Hyde Park, Westchase, Carrollwood, New Tampa, Lutz, and Land O\'Lakes are all in our regular service area. We also cover Brandon, Riverview, Apollo Beach, and Sun City Center in the southeast corridor. Most Tampa-area locations are within our standard service zone with no travel fee. Give us your address and we\'ll confirm coverage same day.',
      },
      {
        q: 'Is a private hibachi chef a good idea for a Tampa bachelorette weekend?',
        a: 'It\'s consistently one of the best Tampa bachelorette activities for groups of 12–20 women. The chef comes to your vacation rental, sets up on the pool deck or patio, and runs the full performance all evening — fire tricks, flying shrimp, the complete show. No Ubers, no crowded restaurants, no splitting checks across 18 people. The bride stays at the house, the group stays together, and the night becomes the trip\'s most-talked-about event.',
      },
      {
        q: 'Can you handle corporate events and team dinners in Tampa?',
        a: 'Absolutely — corporate events are a major segment of our Tampa business. We scale from intimate 10-person executive dinners in Hyde Park to 80-person team events at Westchase or New Tampa venues. Our chefs are experienced with professional presentation and coordinated service timing. Premium proteins (filet mignon, lobster tail, scallops) are available for elevated corporate occasions.',
      },
      {
        q: 'Do you serve Wesley Chapel, Brandon, and Riverview residential areas?',
        a: 'Yes — Wesley Chapel, Brandon, Riverview, Valrico, Apollo Beach, and all surrounding Tampa Bay communities are in our service area. Covered lanais, screened pool cages, and backyard setups all work for hibachi. For gated communities in Wesley Chapel or Riverview, let us know the gate access process when booking and we\'ll coordinate with no delays on event day.',
      },
      {
        q: 'What\'s the best time of year to book hibachi in Tampa?',
        a: 'Tampa is a year-round market. Bachelorette weekends peak in spring (March–April) and early summer. Corporate events are heaviest in fall and winter. Summer brings vacation group events from visiting families. The good news is that Tampa\'s outdoor entertaining season is essentially twelve months — pool decks and screened lanais work in every season. Book 2–3 weeks ahead for weekend events, 3–5 weeks for bachelorette weekends.',
      },
      {
        q: 'How does hibachi compare to a restaurant dinner for a Tampa group event?',
        a: 'For groups of 12–25 people, private hibachi is dramatically easier and more memorable than a restaurant. No coordination for a large group reservation, no 90-minute waits, no splitting a check across the table. The chef comes to your location, performs the full show, cooks every plate to order, and cleans up after. Guests consistently rate it more memorable than any restaurant they could have chosen — and it stays at your house all evening.',
      },
    ],
    testimonials: [
      {
        text: '"Bachelorette weekend in Tampa — 18 of us at a South Tampa Airbnb with a pool. The hibachi chef arrived right on time, set up on the deck, and it was an absolutely incredible night. The energy, the food, the fire tricks — every single person said it was the best event of the weekend. Already planning to do this for the next bachelorette in the group."',
        name: 'Amanda L.',
        city: 'Nashville, TN',
        event: 'Bachelorette Party',
        initials: 'AL',
      },
      {
        text: '"Corporate team dinner in Westchase — 30 people, covered patio setup, premium proteins. The chef was exceptional, professional, and entertaining all at once. Our team has never been more engaged at a company event. Several people said it was the best company dinner they\'d ever attended. This is our new standard."',
        name: 'Brian T.',
        city: 'Tampa, FL',
        event: 'Corporate Team Dinner',
        initials: 'BT',
      },
      {
        text: '"30th birthday party at a Hyde Park vacation rental — 22 friends, pool deck hibachi, best night of the year. The chef matched our group\'s energy perfectly. Food was incredible. We stayed on that pool deck until midnight. I\'m still getting texts from people saying it was the best birthday party they\'ve ever been to."',
        name: 'Rachel K.',
        city: 'Tampa, FL',
        event: 'Birthday Party',
        initials: 'RK',
      },
    ],
  },

  jacksonville: {
    localHighlights: [
      'Ponte Vedra Beach, Atlantic Beach, and Neptune Beach communities are among our most-booked Northeast Florida setups',
      'Graduation parties, military homecomings, and neighborhood cookouts are Jacksonville\'s most-requested hibachi occasions',
      'Large Jacksonville backyards and Mandarin residential homes give chef events plenty of outdoor setup space',
      'Fleming Island, Orange Park, and St. Johns County communities are in our regular service area',
      'Jacksonville\'s military community — NAS Jax, Mayport, Blount Island — makes up a meaningful portion of our customer base',
      'Northeast Florida\'s year-round outdoor season means hibachi works every month from the First Coast to the Georgia border',
    ],
    faqSet: [
      {
        q: 'Do you serve Ponte Vedra Beach, Atlantic Beach, and Neptune Beach?',
        a: 'Yes — the Jacksonville beach communities (Atlantic Beach, Neptune Beach, Jacksonville Beach) and Ponte Vedra Beach are all in our regular service area. Most locations in these communities are within our standard service zone with no travel fee. We also cover Mandarin, Southside, Fleming Island, Orange Park, and the St. Johns County corridor including Nocatee and Julington Creek.',
      },
      {
        q: 'Is hibachi a good choice for a graduation party in Jacksonville?',
        a: 'It\'s one of the best graduation event options in Jacksonville. A private hibachi chef at your home or backyard means the whole family — grandparents, siblings, aunts and uncles — can all celebrate together without coordinating a restaurant for 25 people. The chef performs the full show, food is cooked to order for every guest, and the graduate gets the kind of evening that feels genuinely special. Book 3–4 weeks ahead for May and June Saturday dates — graduation season fills fast.',
      },
      {
        q: 'Do you serve military families and communities near NAS Jacksonville and Mayport?',
        a: 'Yes — military family events are a significant part of our Jacksonville business. We serve neighborhoods near NAS Jacksonville, Mayport Naval Station, and the Blount Island area. Homecoming celebrations, deployment farewell dinners, and promotions are among our most-booked military-community occasions. We appreciate the military community and are proud to serve it.',
      },
      {
        q: 'Can you set up at a Fleming Island or Orange Park home?',
        a: 'Yes — Fleming Island, Orange Park, Middleburg, and surrounding Clay County communities are within our service area. Most locations in the southwest Jacksonville corridor are within our standard service zone. Covered back patios, screened lanais, and large Florida backyards all work well for hibachi setup. Let us know your address and we\'ll confirm coverage and pricing quickly.',
      },
      {
        q: 'How many guests can you serve at a Jacksonville backyard event?',
        a: 'One chef serves 10–20 guests comfortably. For larger Jacksonville events — family reunions of 30–50 people or neighborhood block party-style gatherings — we bring two chef stations. Most Jacksonville residential properties have more than enough outdoor space for a two-station setup. Tell us your guest count and we\'ll size the event correctly.',
      },
      {
        q: 'How far in advance should I book for a Jacksonville event?',
        a: 'We recommend booking 2–3 weeks ahead for weekend events. Graduation season (May–June) and summer weekends book faster — plan 3–4 weeks ahead for those dates. Military homecoming celebrations sometimes need faster turnaround — contact us directly and we\'ll do our best to accommodate. Weekday dinners can often be arranged with 1 week notice.',
      },
    ],
    testimonials: [
      {
        text: '"High school graduation party at our Mandarin home — 35 guests, backyard setup, the whole extended family together. The chef was absolutely incredible with the whole crowd. Kids were amazed, grandparents were laughing, the graduate felt like the star of the night. We couldn\'t have asked for a better celebration. Worth every penny."',
        name: 'The Thompson Family',
        city: 'Jacksonville, FL',
        event: 'Graduation Party',
        initials: 'TF',
      },
      {
        text: '"My husband\'s homecoming from deployment — 28 people at our Ponte Vedra home, backyard hibachi. It was the perfect way to bring the family back together after a long separation. The chef made the whole evening feel special and celebratory. Our family still talks about it months later."',
        name: 'Sarah B.',
        city: 'Jacksonville, FL',
        event: 'Military Homecoming',
        initials: 'SB',
      },
      {
        text: '"Neighborhood dinner party at our Atlantic Beach home — 20 neighbors, patio setup, gorgeous evening. Everyone stayed at the table for two and a half hours, which never happens at a cookout. The chef ran a full show the whole time. Our neighborhood has been talking about it for weeks and wants to do it again already."',
        name: 'Mark & Denise W.',
        city: 'Jacksonville, FL',
        event: 'Neighborhood Dinner Party',
        initials: 'MW',
      },
    ],
  },

  'fort-lauderdale': {
    localHighlights: [
      'Canal-front patios in Victoria Park, Rio Vista, and Las Olas Isles are our most spectacular Fort Lauderdale setups',
      'Wilton Manors group nights, Hallandale bachelorette weekends, and Pompano Beach vacation rentals all book regularly',
      'Intracoastal-view terraces and private dock areas in Fort Lauderdale\'s boating community are a natural hibachi setting',
      'Snowbird season (October–April) is our busiest Broward County window — winter weekend dates fill 3–4 weeks out',
      'Fort Lauderdale\'s growing tech corridor and Las Olas business community drive a strong corporate event market',
      'We serve all of Broward County from Deerfield Beach south to Hallandale — no travel fee for most locations',
    ],
    faqSet: [
      {
        q: 'Do you serve Las Olas, Victoria Park, and canal-front neighborhoods in Fort Lauderdale?',
        a: 'Yes — Las Olas, Victoria Park, Rio Vista, Coral Ridge, and the Intracoastal neighborhoods are all in our regular service area. Canal-front patio events and dock-adjacent setups are some of our most popular Fort Lauderdale bookings. We need vehicle access to the property and a flat stable surface — most Lauderdale canal homes have both. Most Broward County locations carry no travel fee.',
      },
      {
        q: 'Can you set up on a private dock or waterfront patio in Fort Lauderdale?',
        a: 'Yes — waterfront patios, private docks, and canal-side outdoor areas are among our most-requested Fort Lauderdale setups. We need a flat, stable hard surface (concrete or composite decking) of at least 10×10 ft and vehicle access to unload the grill. Fort Lauderdale\'s boating community properties typically accommodate us easily. Describe your waterfront setup when requesting a quote and we\'ll confirm.',
      },
      {
        q: 'Is hibachi popular for bachelorette weekends in the Fort Lauderdale and Hallandale area?',
        a: 'It\'s one of our most-booked Broward County occasions. Groups of 12–20 women arriving for bachelorette weekends in Fort Lauderdale, Hallandale, or Pompano Beach vacation rentals consistently choose hibachi at the house over restaurant nights for the group. The chef comes to your rental, sets up on the pool deck, and runs the full performance. Bachelorette weekend Saturday dates book 3–5 weeks out.',
      },
      {
        q: 'Do you serve Pompano Beach, Deerfield Beach, and north Broward communities?',
        a: 'Yes — we cover all of Broward County: Pompano Beach, Deerfield Beach, Coconut Creek, Coral Springs, Margate, Lighthouse Point, and Boca Raton in the north, and Pembroke Pines, Miramar, Hollywood, and Hallandale in the south. Most locations in Broward are within our standard service area with no travel fee.',
      },
      {
        q: 'How busy is hibachi season in Fort Lauderdale during winter months?',
        a: 'Snowbird season (October–April) is our busiest window in Broward County. Seasonal residents and their visiting family and friends keep our calendar full from October through March. If your event falls in this window — especially November through February — book 3–4 weeks ahead for weekend dates. Premium Saturday evenings during peak season can fill faster.',
      },
      {
        q: 'Can you handle a large corporate event at a Fort Lauderdale waterfront venue?',
        a: 'Absolutely — corporate events are a strong part of our Fort Lauderdale market. We scale from 10-person executive dinners at canal-front homes to 80-person company events at waterfront properties. Our chefs are experienced with professional presentation and coordinated service timing. Premium proteins (filet, lobster, scallops) are available for elevated corporate occasions. Contact us with your guest count and venue and we\'ll size the setup.',
      },
    ],
    testimonials: [
      {
        text: '"We had a 40th birthday dinner at our Las Olas Isles canal-front home — 30 guests on the patio, chef set up right by the water. Absolutely spectacular evening. The setting, the food, the show — everything was perfect. Our guests are still talking about it three months later. We\'re already planning the next one for our anniversary."',
        name: 'Jennifer & Paul A.',
        city: 'Fort Lauderdale, FL',
        event: 'Birthday Dinner Party',
        initials: 'JA',
      },
      {
        text: '"Bachelorette weekend at a Hallandale Beach vacation rental — 16 women, pool deck setup, chef came right to us. It was the best night of the whole trip. The chef had everyone laughing from the first flame. Nobody wanted to leave the pool deck when it was over. The bride is still talking about it."',
        name: 'Taylor P.',
        city: 'Charlotte, NC',
        event: 'Bachelorette Party',
        initials: 'TP',
      },
      {
        text: '"Client appreciation dinner at a Victoria Park home — 25 clients, canal-front patio, premium menu. The chef was outstanding — professional, entertaining, perfect execution. Multiple clients asked for our event planner\'s contact after. This is now our go-to client event format for Fort Lauderdale."',
        name: 'Robert M.',
        city: 'Fort Lauderdale, FL',
        event: 'Client Appreciation Dinner',
        initials: 'RM',
      },
    ],
  },

  sarasota: {
    localHighlights: [
      'Siesta Key and Longboat Key vacation rental events are our most-booked Sarasota-area setups during winter season',
      'Lakewood Ranch and Palmer Ranch residential communities host regular snowbird dinner parties through our service',
      'Bird Key waterfront properties and downtown Sarasota condos with outdoor terraces work beautifully for hibachi',
      'Sarasota\'s arts community — the Ringling, theaters, arts patrons — makes up a sophisticated segment of our event hosts',
      'Gulf Coast snowbird season runs October through April — this is our peak demand window in the Sarasota area',
      'Premium proteins (filet, lobster tail, scallops) are popular for Sarasota\'s discerning host community',
    ],
    faqSet: [
      {
        q: 'Do you serve Siesta Key, Longboat Key, and barrier island properties in Sarasota?',
        a: 'Yes — Siesta Key, Longboat Key, Casey Key, and Manasota Key vacation rentals and private homes are all in our service area. Beach rental properties with pool decks or covered outdoor areas work well for hibachi setup. We need vehicle access to the property and confirmation that the rental permits outdoor open-flame cooking. Most Siesta Key and Longboat Key properties accommodate us without issue.',
      },
      {
        q: 'Is hibachi a good option for snowbird season entertaining in Sarasota?',
        a: 'It\'s one of the most popular winter entertaining options in the Sarasota area. Seasonal residents hosting returning friends and neighbors throughout October–April book us regularly. A private hibachi chef on your screened lanai or waterfront patio is something your guests genuinely haven\'t experienced before — and it gives the evening a built-in focal point that makes dinner parties memorable.',
      },
      {
        q: 'Do you serve Lakewood Ranch, Palmer Ranch, and the Sarasota residential corridor?',
        a: 'Yes — Lakewood Ranch, Palmer Ranch, Osprey, Nokomis, and the entire Sarasota residential corridor are in our service area. Covered lanais and screened pool cages in Lakewood Ranch communities are some of our most common setups. For gated Lakewood Ranch communities, provide the gate access details when booking and we\'ll coordinate ahead of time.',
      },
      {
        q: 'What premium menu options are available for a Sarasota dinner party?',
        a: 'All premium upgrades are available: filet mignon (+$10/person), lobster tail (+$15/person), Chilean sea bass (+$12/person), and scallops (+$5/person). You can mix standard and premium proteins by guest or configure a fully elevated menu. Sarasota dinner parties frequently include a combination of premium and standard selections. Let us know your preferences when requesting your quote.',
      },
      {
        q: 'How far in advance should I book a Sarasota hibachi event during snowbird season?',
        a: 'For snowbird season events (October–April), we recommend booking 3–4 weeks ahead for weekend dates. December through February is the most-booked window — premium Saturday evenings can fill 4–5 weeks out. If you have a specific winter date in mind, don\'t wait. Summer events in Sarasota typically book 2–3 weeks ahead.',
      },
      {
        q: 'Can hibachi work for a smaller Sarasota dinner party of 10–14 guests?',
        a: 'Absolutely — smaller, more intimate dinner parties are a great fit. Our minimum is 10 guests (or $600 event minimum). For 10–14 guests in a Sarasota home, one chef runs the full show in an intimate setting that feels personal and refined. Many of our most memorable Sarasota events are smaller dinners on beautiful outdoor patios. The chef adapts the performance energy to match the group.',
      },
    ],
    testimonials: [
      {
        text: '"Snowbird season anniversary dinner at our Siesta Key home — 14 guests on the waterfront lanai. The chef was extraordinary — refined, entertaining, and the food was genuinely exceptional. Our guests couldn\'t stop complimenting the whole experience. This has replaced our annual restaurant anniversary dinner permanently."',
        name: 'Catherine & James L.',
        city: 'Sarasota, FL',
        event: 'Anniversary Dinner',
        initials: 'CL',
      },
      {
        text: '"Winter dinner party at our Lakewood Ranch home — 20 neighbors, covered lanai, gorgeous January evening. The chef had everyone completely captivated. The food was outstanding and the show was legitimately fun. Our community has been talking about it for weeks. We\'ve already got three more dinner parties planned with the same group."',
        name: 'Patricia M.',
        city: 'Sarasota, FL',
        event: 'Snowbird Dinner Party',
        initials: 'PM',
      },
      {
        text: '"Retirement celebration for my husband at our Palmer Ranch home — 30 friends and colleagues, pool deck setup, perfect Florida evening. Everything was flawless from setup to cleanup. The chef made my husband feel like the star of the night all the way through. I have no idea why we ever went to a restaurant for an event like this."',
        name: 'Susan & Tom W.',
        city: 'Sarasota, FL',
        event: 'Retirement Celebration',
        initials: 'SW',
      },
    ],
  },

  naples: {
    localHighlights: [
      'Port Royal estates, Pelican Bay homes, and Grey Oaks gated communities are among our most prestigious Naples setups',
      'Ultra-premium menu available: filet mignon, lobster tail, Chilean sea bass, and scallops at any Naples event',
      'Olde Naples private residences, Aqualane Shores waterfront properties, and Third Street South-area homes book regularly',
      'October through April is our peak Naples season — winter weekend dates fill 4–6 weeks out',
      'Corporate retreats, executive client dinners, and charity event pre-dinners are all part of our Naples market',
      'Bonita Springs and Estero are in our regular service area — Marco Island events available with advance booking',
    ],
    faqSet: [
      {
        q: 'Do you serve Port Royal, Pelican Bay, and Grey Oaks gated communities in Naples?',
        a: 'Yes — Port Royal, Pelican Bay, Grey Oaks, Quail Creek, Tiburon, Audubon, and all surrounding Naples gated communities are in our service area. For events inside gated communities, provide the gate access process when booking and we coordinate ahead of time — no delays on event day. Premium events in Naples estates frequently include a fully elevated menu and we accommodate all requests.',
      },
      {
        q: 'What premium menu options do you offer for Naples estate dinners?',
        a: 'All premium upgrades are available: filet mignon (+$10/person), lobster tail (+$15/person), Chilean sea bass (+$12/person), and scallops (+$5/person). For Naples estate events, many hosts configure a fully premium menu for the entire table. We accommodate per-guest customization — different proteins for different guests within the same event. Let us know your preferences when requesting your quote.',
      },
      {
        q: 'How far in advance should I book a Naples estate hibachi event?',
        a: 'For Naples events during snowbird season (October–April), book 4–6 weeks ahead for weekend dates. December through February is our most-booked Naples window — premium Saturday evenings fill fastest. Corporate events and large estate dinners should plan 6+ weeks ahead during peak season. Summer events in Naples typically book 2–3 weeks ahead with more availability.',
      },
      {
        q: 'Do you serve Marco Island and Bonita Springs?',
        a: 'Yes — Bonita Springs and Estero are in our standard service area. Marco Island events are available with advance booking — a travel fee may apply and is always disclosed upfront in your quote. Marco Island\'s exclusivity and beautiful outdoor settings make it a great fit for a private hibachi evening. Contact us with your Marco Island address and event details to confirm.',
      },
      {
        q: 'Can you handle corporate retreat events and executive dinners in Naples?',
        a: 'Absolutely — corporate retreats, executive client dinners, and VIP appreciation events are a significant part of our Naples business. We scale from intimate 12-person boardroom-style dinners at a private estate to 60-person corporate retreats at resort properties. Our chefs are experienced with professional presentation and coordinated service timing appropriate for high-expectation corporate occasions.',
      },
      {
        q: 'What should I have ready for the chef at my Naples property?',
        a: 'Tables and chairs for your guests — that\'s it. Your chef arrives fully equipped with the teppan grill, propane, all proteins and ingredients, sauces, plates, chopsticks, and serving ware. No grocery shopping, no prep, no cleanup on your end. We need flat outdoor surface access and vehicle access to your property. For gated estates, coordinate gate access details when you book.',
      },
    ],
    testimonials: [
      {
        text: '"Anniversary dinner at our Pelican Bay home — 12 guests, lanai setup, fully premium menu with lobster and filet. The chef was extraordinary. Every single plate was perfect, the performance was engaging without being intrusive for our group, and the cleanup was spotless. Our guests said it was the best private dinner they\'d ever attended. Already booked for next season."',
        name: 'Margaret & Robert C.',
        city: 'Naples, FL',
        event: 'Anniversary Dinner',
        initials: 'RC',
      },
      {
        text: '"Corporate retreat at a Port Royal property — 30 clients, full outdoor setup, premium menu. The chef was absolutely exceptional. Clients who have attended events at the finest restaurants in the world said it was the most enjoyable dinner they\'d had in years. This is the standard for all our future Naples client events."',
        name: 'Richard F.',
        city: 'Naples, FL',
        event: 'Corporate Client Retreat',
        initials: 'RF',
      },
      {
        text: '"Neighborhood dinner party at our Grey Oaks home — 22 neighbors, pool terrace, gorgeous winter evening. The chef made the whole event feel like a five-star restaurant had materialized in our backyard. Food was perfect, the performance was genuinely fun, and our HOA community has never been more social. We\'re doing this every season now."',
        name: 'Eleanor & James M.',
        city: 'Naples, FL',
        event: 'Neighborhood Dinner Party',
        initials: 'EM',
      },
    ],
  },

  'west-palm-beach': {
    localHighlights: [
      'Palm Beach Island estates, Jupiter waterfront properties, and Boca Raton country club homes are our most-requested Palm Beach County setups',
      'Corporate events for Palm Beach County\'s finance, real estate, and legal communities are a strong part of our market',
      'Snowbird season (October–April) is our busiest window in the Palm Beach County market — winter dates fill 3–4 weeks out',
      'Delray Beach and Lake Worth vacation rental groups, birthday trips, and bachelorette weekends book regularly',
      'Wellington equestrian community events and Royal Palm Beach residential dinners are in our service area',
      'Premium proteins available for any Palm Beach County event — filet mignon, lobster tail, and scallops upon request',
    ],
    faqSet: [
      {
        q: 'Do you serve Palm Beach Island, Jupiter, and Boca Raton?',
        a: 'Yes — Palm Beach Island, Jupiter, Juno Beach, Palm Beach Gardens, Boca Raton, and Delray Beach are all in our service area. We cover the entire Palm Beach County corridor from Jupiter in the north to Boca Raton in the south. Most locations in this area are within our standard service zone. For properties on Palm Beach Island, vehicle access and building coordination are confirmed when you book.',
      },
      {
        q: 'Is hibachi a good fit for corporate events in West Palm Beach?',
        a: 'Absolutely — corporate events are a significant part of our West Palm Beach market. Finance firms, law offices, real estate developers, and luxury brands in the Palm Beach County corridor book us regularly for client appreciation events, team dinners, and annual celebrations. We scale from intimate 10-person executive dinners to 60-person corporate retreats. Premium proteins (filet, lobster, scallops) are available for elevated corporate occasions.',
      },
      {
        q: 'Do you serve Delray Beach and Lake Worth vacation rentals and group events?',
        a: 'Yes — Delray Beach, Lake Worth, Boynton Beach, and Lantana are all in our regular service area. Vacation rental group nights and bachelorette weekends in Delray Beach are popular bookings for us. Most properties in these communities are within our standard service zone with no travel fee.',
      },
      {
        q: 'How busy is the West Palm Beach market during snowbird season?',
        a: 'Snowbird season (October–April) is our peak demand window in Palm Beach County. Seasonal residents hosting visiting family and friends, corporate winter entertainment, and anniversary celebrations all converge in this window. Book 3–4 weeks ahead for winter weekend dates. December through February is the most-booked period — premium Saturday evenings can fill 4–5 weeks out.',
      },
      {
        q: 'Do you serve Wellington and Royal Palm Beach residential communities?',
        a: 'Yes — Wellington, Royal Palm Beach, Greenacres, and Lake Worth Corridor communities are in our service area. Wellington\'s equestrian community and suburban residential areas have spacious outdoor entertaining spaces that work well for hibachi. For gated Wellington communities, provide gate access details when booking and we\'ll coordinate ahead of time.',
      },
      {
        q: 'What does a West Palm Beach hibachi event cost and what\'s included?',
        a: 'Standard pricing starts at $60 per adult, $30 per child, $600 event minimum. This includes the certified chef, full teppan grill setup, propane, your choice of 2 proteins per person (chicken, steak, shrimp, salmon, or tofu), fried rice, grilled vegetables, salad, miso soup, yum yum sauce, ginger sauce, plates, chopsticks, full setup and cleanup. Premium upgrades (filet mignon, lobster tail, scallops) are available at additional per-person cost.',
      },
    ],
    testimonials: [
      {
        text: '"Client dinner at our Jupiter Inlet Colony property — 20 clients on the waterfront patio, premium menu. The chef was phenomenal — professional, engaging, and the food was exceptional across the board. Three clients called the next day specifically to mention the dinner. This is now our annual client appreciation event format."',
        name: 'Michael H.',
        city: 'Palm Beach Gardens, FL',
        event: 'Client Appreciation Dinner',
        initials: 'MH',
      },
      {
        text: '"Snowbird season dinner party at our Boca Raton home — 18 seasonal neighbors, backyard setup, beautiful December evening. The chef had everyone completely engaged from start to finish. Our winter community has never socialized better. We\'ve already got four more dinners planned through March."',
        name: 'Bob & Carol H.',
        city: 'Boca Raton, FL',
        event: 'Snowbird Dinner Party',
        initials: 'BH',
      },
      {
        text: '"50th birthday party in Delray Beach — 30 guests, pool deck hibachi, incredible night. The chef was energetic and entertaining the whole time. Best birthday party format I\'ve ever hosted. Every guest came up to me afterward saying it was the most fun dinner they\'d attended in years."',
        name: 'Nancy S.',
        city: 'Delray Beach, FL',
        event: 'Milestone Birthday',
        initials: 'NS',
      },
    ],
  },

  destin: {
    localHighlights: [
      'Miramar Beach vacation rentals, Emerald Grande properties, and Crystal Beach houses are our most-booked Destin setups',
      'Bachelorette weekends from Nashville, Atlanta, Birmingham, and Dallas arrive in Destin every summer weekend',
      'Family reunions filling 8–12 bedroom beach houses on the Emerald Coast are a specialty — we scale to any group size',
      'Confirm your beach rental permits outdoor open-flame cooking before booking — most Destin-area properties do',
      '30A communities (Rosemary Beach, Seaside, Alys Beach) are in our service area for premium beach house events',
      'Summer weekend dates in Destin book 3–5 weeks out — don\'t wait once your beach house is confirmed',
    ],
    faqSet: [
      {
        q: 'Do you serve Miramar Beach, Crystal Beach, and vacation rentals throughout the Destin area?',
        a: 'Yes — Miramar Beach, Crystal Beach, Holiday Isle, and vacation rental communities throughout the Destin corridor are in our regular service area. Most Destin-area properties are within our standard service zone with no travel fee. We serve everything from smaller beach cottages with covered porches to large 12-bedroom beach houses with full outdoor kitchens.',
      },
      {
        q: 'Is a private hibachi chef a good choice for a Destin bachelorette beach house?',
        a: 'It\'s one of the most popular bachelorette activities on the Emerald Coast. Groups of 12–22 women arriving for a beach house weekend in Destin consistently choose hibachi on the pool deck over any other group dinner option. The chef comes to your rental, performs the full show, and the night never has to leave the house. Saturday bachelorette dates in Destin book 3–5 weeks out during summer — don\'t wait.',
      },
      {
        q: 'Can you handle a large family reunion at a Destin beach house?',
        a: 'Absolutely — large family reunion events at Emerald Coast vacation houses are one of our most-booked event types. One chef handles 10–20 guests; for 25–50 person family groups, we bring two stations. Most large Destin-area beach houses have the outdoor space to accommodate a dual-station setup. Tell us your head count and house address and we\'ll size the event correctly.',
      },
      {
        q: 'Do you serve 30A communities like Rosemary Beach, Seaside, and Alys Beach?',
        a: 'Yes — 30A is in our service area. A travel fee may apply for properties further along the 30A corridor depending on distance from Destin. Most 30A communities from Inlet Beach through Rosemary Beach and Seaside are within a reasonable drive. Upscale beach house events in these communities are a great fit for our premium service. Contact us with your property address for exact coverage confirmation.',
      },
      {
        q: 'What time of year is best to book hibachi in Destin?',
        a: 'Summer (June–August) and spring break (March–April) are peak season on the Emerald Coast. These are our busiest windows — book 3–5 weeks ahead for summer weekends and 4–6 weeks ahead for spring break dates. July 4th and Labor Day weekend dates fill the fastest. Fall (September–October) is a beautiful time to visit Destin with more availability. Winter events in Destin are lighter but absolutely possible.',
      },
      {
        q: 'What do I need to prepare at the beach house for the hibachi chef?',
        a: 'Tables and chairs for your guests — that\'s all. The chef arrives 5–10 minutes before your scheduled start with the full propane grill, all proteins, ingredients, sauces, plates, and chopsticks. Always confirm your beach rental permits outdoor open-flame cooking before booking — most Destin-area vacation properties do. We handle everything from setup to complete cleanup.',
      },
    ],
    testimonials: [
      {
        text: '"Bachelorette weekend in a Miramar Beach house — 18 of us, pool deck hibachi, chef arrived right on time and put on an incredible show. The energy was perfect, the food was amazing, and we didn\'t have to leave the house all night. This was unanimously voted the best event of the entire trip. Planning to do this at every beach house trip going forward."',
        name: 'Ashley R.',
        city: 'Nashville, TN',
        event: 'Bachelorette Party',
        initials: 'AR',
      },
      {
        text: '"Family reunion at a 10-bedroom Destin beach house — 42 family members, two chef stations, absolute madness in the best way. Kids were screaming with delight, grandparents were laughing, everyone ate at the same time. This was the best family reunion dinner we have ever done in 20 years of summer trips. Already planned for next year."',
        name: 'The Martinez Family',
        city: 'Birmingham, AL',
        event: 'Family Reunion',
        initials: 'MF',
      },
      {
        text: '"Group vacation in Destin — 24 friends at a Crystal Beach vacation house, pool deck setup. It was the highlight of a trip that was already amazing. Chef was entertaining from start to finish, food was legitimately excellent, and nobody wanted to leave the table. We\'re coming back to Destin next summer and this is already on the itinerary."',
        name: 'Derek T.',
        city: 'Atlanta, GA',
        event: 'Group Vacation Dinner',
        initials: 'DT',
      },
    ],
  },

  'st-petersburg': {
    localHighlights: [
      'Old Northeast brick homes, Grand Central bungalows, and Kenwood Craftsman properties all have outdoor spaces that work for hibachi',
      'St. Pete Beach and Treasure Island vacation rental pool decks are our most-booked beach community setups',
      'Gulfport\'s waterfront and arts community hosts regularly feature our private chef events on beautiful outdoor porches',
      'Birthday trips, bachelorette weekends, and girls\' getaways to St. Pete consistently rank hibachi as the trip highlight',
      'Downtown St. Petersburg Airbnbs and condo buildings with rooftop access book for group nights year-round',
      'We cover the full Pinellas County peninsula — from Tarpon Springs and Dunedin south to Tierra Verde',
    ],
    faqSet: [
      {
        q: 'Do you serve St. Pete Beach, Treasure Island, and Gulfport?',
        a: 'Yes — St. Pete Beach, Treasure Island, Madeira Beach, Gulfport, and all surrounding beach communities are in our regular service area. Vacation rental pool decks on St. Pete Beach are some of our most popular setups. Gulfport waterfront properties and Old Northeast St. Petersburg residential homes also book regularly. Most Pinellas County locations are in our standard service zone with no travel fee.',
      },
      {
        q: 'Is hibachi a good choice for a bachelorette weekend at a St. Pete Beach rental?',
        a: 'It\'s one of the most popular St. Pete Beach bachelorette activities. Groups of 12–20 women at a vacation rental pool deck consistently name hibachi night as the trip\'s best event. The chef comes to your rental, performs the full show — fire tricks, flying shrimp, the works — and keeps the group completely entertained all evening without anyone having to leave the house. Saturday bachelorette dates book 3–5 weeks out.',
      },
      {
        q: 'Do you serve Old Northeast, Kenwood, and residential St. Petersburg neighborhoods?',
        a: 'Yes — Old Northeast, Kenwood, Crescent Lake, Grand Central, Historic Old Southeast, and all St. Petersburg residential neighborhoods are in our service area. Many of these historic homes have beautiful outdoor porches, side yards, or back decks that work well for hibachi setup. If your outdoor space is a bit non-traditional, describe it when requesting a quote and we\'ll confirm it works.',
      },
      {
        q: 'Can you set up at a downtown St. Petersburg Airbnb or condo building?',
        a: 'Yes — downtown St. Pete Airbnbs and condo buildings with rooftop access or outdoor terrace areas can work. We need a flat, stable surface of at least 10×10 ft, vehicle access to the building, and confirmation that outdoor open-flame cooking is permitted by the property or HOA. Describe your specific setup when requesting a quote and we\'ll advise on feasibility.',
      },
      {
        q: 'Do you serve Dunedin, Safety Harbor, and the north Pinellas communities?',
        a: 'Yes — Dunedin, Safety Harbor, Tarpon Springs, Palm Harbor, and north Pinellas County are all in our service area. Most locations in these communities are within our standard service zone. Dunedin waterfront properties and Safety Harbor residential homes book regularly for dinner parties and group events.',
      },
      {
        q: 'How far in advance should I book a St. Petersburg hibachi event?',
        a: 'For weekend events in St. Pete, book 2–3 weeks ahead. Bachelorette weekends and peak summer weekend dates book faster — 3–5 weeks ahead for those. Saturday evenings on St. Pete Beach and in downtown St. Pete fill quickly during March–April and June–August. Weekday and off-peak bookings can often be arranged with 1 week notice.',
      },
    ],
    testimonials: [
      {
        text: '"30th birthday trip to St. Pete Beach — Airbnb with a pool, hibachi on the deck, 20 friends. Best dinner I\'ve had outside of an actual restaurant. The chef\'s energy matched ours perfectly from the first flame. We stayed on that pool deck until midnight. Still getting texts weeks later saying it was the best birthday event they\'ve ever attended."',
        name: 'Rachel K.',
        city: 'Tampa, FL',
        event: 'Birthday Trip',
        initials: 'RK',
      },
      {
        text: '"Girls\' trip to St. Pete — 17 of us in a Gulfport waterfront house. Restaurant for that group sounded like a nightmare so we booked hibachi. Chef came right to us, the show was hilarious and impressive, the food was great. Everyone agreed it was the best night of the trip. We\'re doing the same trip next year and hibachi is already on the calendar."',
        name: 'Jennifer S.',
        city: 'Orlando, FL',
        event: 'Girls Trip Dinner',
        initials: 'JS',
      },
      {
        text: '"Neighborhood birthday dinner at our Old Northeast home — 24 neighbors on the back porch. Chef was extraordinary — funny, skilled, and kept everyone at the table the entire time. Our neighborhood has never been more social. Four neighbors have already reached out asking for the booking info. Doing this again in the fall."',
        name: 'Mark & Linda B.',
        city: 'St. Petersburg, FL',
        event: 'Neighborhood Birthday Dinner',
        initials: 'MB',
      },
    ],
  },

  // ── C-level tier-1 cities (include heroSubtitle) ──────────────────────────────

  'key-west': {
    heroSubtitle: 'Island Celebrations · Beach House Hibachi · Bachelorette Weekends · Serving Key West & the Florida Keys',
    localHighlights: [
      'Key West vacation houses, Old Town conch cottages with courtyards, and New Town pool homes all work for hibachi setup',
      'Bachelorette groups, girls\' trips, and birthday getaways flying into Key West book hibachi at the house every weekend',
      'The Conch Republic vibe is real — a private chef dinner at a Key West vacation home fits the spirit perfectly',
      'No restaurant can seat 18 people in Key West without a 2-hour wait — hibachi at your house solves that problem',
      'Stock Island and the Lower Keys are in our service area with advance booking — contact us with your property address',
      'Always confirm your Key West rental permits outdoor open-flame cooking before booking',
    ],
    faqSet: [
      {
        q: 'Can you set up at a Key West vacation rental or Old Town cottage with a courtyard?',
        a: 'Yes — Key West vacation homes, Old Town courtyards, and New Town pool properties are all setups we\'ve handled. We need a flat, stable outdoor surface of at least 10×10 ft and vehicle access to unload the grill. Key West properties vary widely in outdoor space — describe your specific setup when requesting a quote and we\'ll confirm feasibility. Always confirm your rental permits outdoor open-flame cooking.',
      },
      {
        q: 'Is hibachi a good activity for a Key West bachelorette weekend?',
        a: 'It\'s one of the best Key West bachelorette group options. Groups of 12–20 women at a vacation house consistently find that hibachi at the house beats trying to coordinate a restaurant dinner for the whole group on an island where everything is crowded on weekends. The chef comes to you, runs the full performance, and everyone stays at the house all night. Key West weekend dates book 3–5 weeks out in season.',
      },
      {
        q: 'Do you serve the Lower Keys and Stock Island?',
        a: 'Stock Island events are generally available. For properties in the Lower Keys (Big Pine Key, Marathon, Islamorada), a travel fee typically applies and advance booking is required. Contact us with your specific address and date and we\'ll confirm availability and any travel surcharge. Key Largo events are also possible — reach out with your details.',
      },
      {
        q: 'How many guests can you serve at a Key West vacation house?',
        a: 'One chef handles 10–20 guests comfortably. For larger Key West group trips — bachelorette groups or family reunions of 25+, we bring two chef stations. Most Key West vacation houses with pool decks have adequate outdoor space for a single-station setup. Larger properties can accommodate two. Tell us your head count and we\'ll size it correctly.',
      },
      {
        q: 'What time of year is hibachi most popular in Key West?',
        a: 'Key West is a year-round destination and hibachi works in every season. Peak demand runs November through April when winter visitors and snowbirds fill the island, and again in June–August for summer bachelorette and vacation groups. Fantasy Fest week, New Year\'s, and spring break dates fill especially fast — book 4–6 weeks ahead for those. Off-season (September–October) has more availability.',
      },
      {
        q: 'Do you set up at vacation rentals outside the island — like Stock Island or Cudjoe Key?',
        a: 'Stock Island is generally in our service area. For properties on Cudjoe Key, Summerland Key, and other lower Keys communities, contact us with your address and we\'ll advise on travel fees and availability. We try to accommodate the full Keys corridor when scheduling allows. Most requests are answered same day.',
      },
    ],
    testimonials: [
      {
        text: '"Girls\' trip to Key West — 20 of us in a New Town vacation house with a pool. Restaurant for that group on a Saturday in Key West sounded like an absolute nightmare. Hibachi at the house was the obvious answer and it was perfect. Chef came right on time, the show was incredible, the food was great. Best night of the whole trip and nobody had to leave the house."',
        name: 'Jennifer S.',
        city: 'Orlando, FL',
        event: 'Girls Trip Dinner',
        initials: 'JS',
      },
      {
        text: '"Bachelorette weekend in Key West — 15 of us at an Old Town vacation house with a courtyard. The hibachi chef set up perfectly in the courtyard and it was genuinely one of the most magical evenings I\'ve ever experienced. The setting, the fire, the food — Key West at night with a private chef is something else entirely. The bride was absolutely in tears of happiness."',
        name: 'Ashley R.',
        city: 'Nashville, TN',
        event: 'Bachelorette Party',
        initials: 'AR',
      },
      {
        text: '"Birthday trip to Key West — 14 friends, vacation rental pool deck, hibachi night. We\'d done Key West bars and restaurants before. This was so much better. The chef kept the whole group completely entertained. Food was legitimately excellent. Nobody wanted it to end. This is now the plan for every Key West trip going forward."',
        name: 'Taylor P.',
        city: 'Miami, FL',
        event: 'Birthday Getaway',
        initials: 'TP',
      },
    ],
  },

  'boca-raton': {
    heroSubtitle: 'Luxury Estates · Country Club Events · Corporate Dinners · Serving Boca Raton & Palm Beach County',
    localHighlights: [
      'Boca Raton country club communities — Woodfield, The Polo Club, Royal Palm — are among our most-booked event locations',
      'Corporate events for Boca Raton\'s financial, tech, and professional services sectors are a core part of our market',
      'Snowbird season (October–April) is our peak Boca Raton window — winter weekend dates fill 3–4 weeks out',
      'Mizner Park area condos with rooftop or terrace access and Intracoastal waterfront homes book regularly',
      'Highland Beach and Hillsboro Beach waterfront estates are in our service area for premium events',
      'Premium proteins available: filet mignon, lobster tail, Chilean sea bass, and scallops for Boca Raton\'s elevated palate',
    ],
    faqSet: [
      {
        q: 'Do you serve Woodfield Country Club, The Polo Club, and other Boca Raton gated communities?',
        a: 'Yes — Woodfield Country Club, The Polo Club, Boca Grove, Broken Sound, and all surrounding Boca Raton gated communities are in our service area. For gated community events, provide the gate access process when booking and we coordinate ahead of time. Most Boca Raton country club properties have expansive covered patios, pool decks, or outdoor dining areas that are ideal for hibachi setup.',
      },
      {
        q: 'Do you handle corporate events and executive dinners in Boca Raton?',
        a: 'Absolutely — Boca Raton is one of our strongest corporate markets in South Florida. Finance firms, tech companies, real estate developers, and professional services groups book us regularly for client appreciation dinners, executive team events, and annual celebrations. We scale from 10-person VIP client dinners to 80-person corporate retreats. Premium proteins are available for elevated corporate menus.',
      },
      {
        q: 'What premium menu options are available for a Boca Raton event?',
        a: 'All premium upgrades are available: filet mignon (+$10/person), lobster tail (+$15/person), Chilean sea bass (+$12/person), and scallops (+$5/person). Boca Raton events frequently feature a mix of premium and standard proteins. We accommodate per-guest customization — different proteins for different guests within the same event. Specify your preferences when requesting your quote.',
      },
      {
        q: 'Do you serve Highland Beach, Hillsboro Beach, and waterfront communities near Boca Raton?',
        a: 'Yes — Highland Beach, Hillsboro Beach, Deerfield Beach, and the barrier island communities near Boca are in our service area. Intracoastal and ocean-front properties in these communities make for spectacular hibachi settings. Most locations in this corridor are within our standard service zone. Contact us with your specific address for confirmation.',
      },
      {
        q: 'How busy is Boca Raton during snowbird season and what advance notice do I need?',
        a: 'Snowbird season (October–April) is our busiest Boca Raton window. Seasonal residents entertaining visiting family and friends, corporate holiday events, and country club dinner parties all concentrate in this period. For winter weekend dates, book 3–4 weeks ahead. December through February is the most-booked window — premium Saturday evenings can fill 4–5 weeks out. Summer events in Boca book 2–3 weeks ahead.',
      },
      {
        q: 'Can you set up at a Mizner Park area condo or downtown Boca property?',
        a: 'Yes — downtown Boca Raton condos and Mizner Park area properties with outdoor terrace or rooftop access can work. We need a flat, stable surface of at least 10×10 ft, vehicle access for equipment, and confirmation that outdoor open-flame cooking is permitted by the building or HOA. Describe your specific space when requesting a quote and we\'ll advise on the best setup.',
      },
    ],
    testimonials: [
      {
        text: '"Client appreciation dinner at our Woodfield Country Club home — 25 clients, covered patio setup, premium menu with filet and lobster. The chef was outstanding — professional, entertaining, and the food was exceptional. Three clients sent follow-up emails the next day specifically mentioning the dinner. This is now our annual client event format."',
        name: 'Richard F.',
        city: 'Boca Raton, FL',
        event: 'Client Appreciation Dinner',
        initials: 'RF',
      },
      {
        text: '"Snowbird season birthday party at our Boca Raton home — 30 winter neighbors, pool deck, gorgeous January evening. The chef made the whole evening feel like an event at a five-star restaurant. Our snowbird community has never been more social. Already booked again for March."',
        name: 'Bob & Carol H.',
        city: 'Boca Raton, FL',
        event: 'Birthday Dinner Party',
        initials: 'BH',
      },
      {
        text: '"Anniversary dinner at a Highland Beach waterfront home — 16 guests, Intracoastal backdrop, premium menu. Absolutely spectacular. My wife said it was the best anniversary dinner we\'ve had in 30 years of marriage. The chef\'s performance matched the setting perfectly. Worth every penny and then some."',
        name: 'William & Anne T.',
        city: 'Boca Raton, FL',
        event: 'Anniversary Dinner',
        initials: 'WT',
      },
    ],
  },

  'cape-coral': {
    heroSubtitle: 'Canal-Front Lanai Events · Snowbird Entertaining · Residential Dining · Serving Cape Coral & Lee County',
    localHighlights: [
      'Cape Coral\'s 400+ miles of canals create the most spectacular natural backdrop for outdoor hibachi dining in Florida',
      'Covered lanais and screened pool cages are the standard outdoor space in Cape Coral — they work perfectly for hibachi setup',
      'Snowbird season (October–April) is our most active Cape Coral window — winter dinner parties fill the calendar',
      'Canal-front home events in Cape Coral\'s northwest, southwest, and Yacht Club areas book consistently throughout the season',
      'Year-round outdoor entertaining is one of Cape Coral\'s great advantages — hibachi works every month',
      'Fort Myers, Bonita Springs, and Estero are all within our service area from the Cape Coral base',
    ],
    faqSet: [
      {
        q: 'Can you set up on a canal-front lanai or patio in Cape Coral?',
        a: 'Yes — canal-front lanais are among our favorite Cape Coral setups. We need a flat, stable surface of at least 10×10 ft and vehicle access to the property. Covered lanais and screened pool enclosures along the canal work perfectly — the view is spectacular and the enclosure provides good ventilation. Describe your specific outdoor space when requesting a quote and we\'ll confirm the ideal setup location.',
      },
      {
        q: 'Is private hibachi popular for snowbird season entertaining in Cape Coral?',
        a: 'It\'s one of the most popular Cape Coral snowbird activities. Seasonal residents hosting returning neighbors and visiting family throughout October–April book us regularly. A private hibachi chef on your canal-front lanai is something your guests genuinely haven\'t experienced before and it gives a dinner party a built-in focal point. October through April is our peak Cape Coral window — weekend dates fill 2–3 weeks out.',
      },
      {
        q: 'Do you serve all Cape Coral neighborhoods including the northwest and southwest areas?',
        a: 'Yes — we serve all of Cape Coral including the northwest, southwest, and Yacht Club corridor. Most Cape Coral addresses are within our standard service area with no travel fee. The city\'s size means some far-west and far-north properties may be 20–25 miles from Fort Myers, but we cover the whole city. Give us your address and we\'ll confirm coverage.',
      },
      {
        q: 'Can hibachi work inside a screened pool cage in Cape Coral?',
        a: 'Yes — screened pool enclosures are one of our most common Cape Coral setups. Screened cages provide adequate ventilation and protect guests from insects while maintaining the outdoor ambiance. We need a concrete or deck floor, at least 10×10 ft of setup space away from the pool edge, and a screen door wide enough for the grill cart. Most Cape Coral screened cages accommodate us easily.',
      },
      {
        q: 'Do you serve Fort Myers and Bonita Springs from Cape Coral?',
        a: 'Yes — Fort Myers, North Fort Myers, Bonita Springs, Estero, and surrounding Lee County communities are all in our service area. Cape Coral, Fort Myers, and Bonita Springs form a contiguous service zone. Most locations in Lee County carry no travel fee within the standard service radius.',
      },
      {
        q: 'How small can the group be for a Cape Coral hibachi event?',
        a: 'Our minimum is 10 guests (or a $600 event minimum, whichever is greater). For a smaller Cape Coral dinner party of 10–15 guests, one chef runs the full show in an intimate setting that feels personal and special. Many of our best Cape Coral events are smaller dinner parties on gorgeous canal-front lanais. The chef adapts the performance to the group size.',
      },
    ],
    testimonials: [
      {
        text: '"Snowbird season dinner party at our canal-front home in Cape Coral — 18 neighbors, covered lanai, canal view behind the chef. Absolutely magical evening. The food was great, the performance was incredible, and everyone stayed at the table for two and a half hours. Our community has been talking about it for weeks. Already planning the next one."',
        name: 'Bob & Carol H.',
        city: 'Cape Coral, FL',
        event: 'Snowbird Dinner Party',
        initials: 'BH',
      },
      {
        text: '"We hosted a birthday celebration at our Cape Coral Yacht Club area home — 24 guests, screened lanai, the canal right behind us. Chef arrived perfectly on time and set up beautifully. The fire show with the canal view behind it was something none of our guests had ever seen before. Best party we\'ve hosted in Florida."',
        name: 'Jim & Sandra M.',
        city: 'Cape Coral, FL',
        event: 'Birthday Celebration',
        initials: 'JM',
      },
      {
        text: '"Anniversary dinner for 14 guests at our southwest Cape Coral home — covered pool deck, beautiful January evening. The chef was exceptional and the food matched. Our guests from Michigan couldn\'t believe the quality of a private chef dinner in someone\'s backyard. We\'ve already got three more events booked through the season."',
        name: 'Patricia W.',
        city: 'Cape Coral, FL',
        event: 'Anniversary Dinner',
        initials: 'PW',
      },
    ],
  },

  'panama-city-beach': {
    heroSubtitle: 'Beach House Hibachi · Bachelorette Weekends · Family Reunions · Serving Panama City Beach & Gulf Coast',
    localHighlights: [
      'Panama City Beach vacation rentals — front beach condos, bay-side houses, and Pier Park area properties — are our most common setups',
      'Bachelorette weekends, spring break group trips, and family reunions fill PCB beach houses all season long',
      'Groups of 20–40 at large Gulf-front vacation rentals are our specialty — we scale with multiple chef stations',
      'Confirm your PCB rental permits outdoor open-flame cooking before booking — most vacation properties do with advance notice',
      'Summer and spring break weekends book 4–6 weeks out — don\'t wait once your beach house is confirmed',
      '30A communities (Rosemary Beach, Inlet Beach) are in our extended service area for premium events',
    ],
    faqSet: [
      {
        q: 'Do you serve beachfront condos and vacation homes throughout Panama City Beach?',
        a: 'Yes — we serve vacation rentals throughout Panama City Beach, from Gulf-front condos to bay-side houses and Pier Park area properties. Most PCB vacation properties have outdoor decks or balconies — confirm your specific setup when requesting a quote. We need a flat, stable surface of at least 10×10 ft and confirmation that the property permits outdoor open-flame cooking.',
      },
      {
        q: 'Is hibachi a good choice for a bachelorette weekend in Panama City Beach?',
        a: 'It\'s one of the most-booked bachelorette activities in PCB. Groups of 12–22 women at a beach house consistently find that hibachi at the rental is far better than any restaurant option for the group. The chef comes to you, performs the full show, and nobody has to leave the house all night. PCB bachelorette Saturday dates book 4–6 weeks out in summer — reserve early.',
      },
      {
        q: 'Can you handle large family reunion groups at a Panama City Beach vacation house?',
        a: 'Yes — family reunion groups at PCB vacation houses are one of our most-booked event types. One chef handles 10–20 guests; for 25–50 person family groups, we bring two chef stations. Large Gulf-front vacation houses typically have pool decks or outdoor areas with plenty of space for a dual-station setup. Give us your head count and we\'ll size the event correctly.',
      },
      {
        q: 'What time of year is most popular for hibachi in Panama City Beach?',
        a: 'Spring break (March–April) and summer (June–August) are the peak season in PCB — these are our most-requested windows. Spring break and July 4th dates fill 4–6 weeks out. Fall is an excellent time to visit PCB with more availability and better pricing on rentals. Winter is much lighter but events are possible. Always book ahead for any summer or spring break date.',
      },
      {
        q: 'Do you serve the 30A corridor from Panama City Beach?',
        a: 'Yes — 30A communities including Inlet Beach, Rosemary Beach, and the eastern 30A corridor are accessible from Panama City Beach. A travel fee may apply for properties further along 30A. Contact us with your specific property address and we\'ll confirm coverage and pricing. Upscale 30A beach house events are a great fit for our service.',
      },
      {
        q: 'What do guests need to provide at a Panama City Beach vacation rental?',
        a: 'Tables and chairs for your guests — that\'s the only requirement. Your chef arrives 5–10 minutes before the scheduled start time with the full teppan grill, all proteins, ingredients, sauces, plates, and chopsticks. Confirm that your vacation rental permits outdoor open-flame cooking before booking — most PCB properties do. Everything else is handled from arrival to complete cleanup.',
      },
    ],
    testimonials: [
      {
        text: '"Bachelorette weekend at a Panama City Beach house — 20 women, Gulf-view pool deck, chef arrived right on time. The fire show had everyone going crazy. Food was incredible. Nobody wanted to leave the house all night. This was hands-down the best event of the whole bachelorette trip and that\'s saying something because we did PCB right."',
        name: 'Lauren S.',
        city: 'Birmingham, AL',
        event: 'Bachelorette Party',
        initials: 'LS',
      },
      {
        text: '"Family reunion at a large PCB vacation house — 38 family members, two chef stations, absolute chaos in the absolute best way. Kids were beyond entertained, adults had a real dinner, grandparents had front-row seats. This was our best family reunion dinner in years. Already planning it for next summer."',
        name: 'The Roberts Family',
        city: 'Nashville, TN',
        event: 'Family Reunion',
        initials: 'RF',
      },
      {
        text: '"Spring break group trip to Panama City Beach — 24 of us in a big beach house, pool deck hibachi. Way more fun than any bar or restaurant we went to that week. Chef was hilarious, food was great, and the whole group was genuinely bonded after that dinner. Would absolutely do this again."',
        name: 'Derek T.',
        city: 'Tallahassee, FL',
        event: 'Group Vacation Dinner',
        initials: 'DT',
      },
    ],
  },

  '30a': {
    heroSubtitle: 'Upscale Beach House Dining · Bachelorette Weekends · Premium Events · Serving 30A, Rosemary Beach & Seaside',
    localHighlights: [
      'Rosemary Beach cottages, Alys Beach courtyard homes, and Seaside vacation houses are our most-requested 30A setups',
      'Bachelorette groups, anniversary trips, and high-end birthday getaways choose 30A hibachi as the premium group dinner',
      'WaterColor and WaterSound community vacation homes with pool decks book regularly for evening chef events',
      'Premium proteins (filet mignon, lobster tail, Chilean sea bass) are popular for the discerning 30A host',
      'Grayton Beach and Blue Mountain Beach vacation rentals are in our service area along the full 30A corridor',
      '30A summer weekends book 4–6 weeks out — reserve early once your beach house is confirmed',
    ],
    faqSet: [
      {
        q: 'Do you serve Rosemary Beach, Alys Beach, and Seaside vacation homes?',
        a: 'Yes — Rosemary Beach, Alys Beach, Seaside, WaterColor, WaterSound, Grayton Beach, Blue Mountain Beach, and the full 30A corridor are in our service area. 30A vacation home communities typically have beautiful outdoor courtyards, pool decks, and porches that work perfectly for hibachi setup. A travel fee may apply depending on distance from our base — this is always disclosed upfront.',
      },
      {
        q: 'Is private hibachi a good fit for an upscale 30A bachelorette weekend?',
        a: 'It\'s one of the most popular 30A bachelorette group activities. Groups of 12–22 women at a Rosemary Beach or Alys Beach vacation home consistently find that a private chef dinner at the house is the standout event of the weekend. The chef comes to your rental, sets up on the pool deck or outdoor courtyard, and runs a full performance all evening. 30A Saturday dates book 4–6 weeks out in summer.',
      },
      {
        q: 'What premium menu options are available for a 30A dinner event?',
        a: 'All premium upgrades are available: filet mignon (+$10/person), lobster tail (+$15/person), Chilean sea bass (+$12/person), and scallops (+$5/person). Many 30A events feature a fully elevated premium menu for the entire table — this is a great fit for the caliber of the destination. We accommodate per-guest customization. Specify your protein preferences when requesting a quote.',
      },
      {
        q: 'Do you serve WaterColor, WaterSound, and the eastern 30A communities?',
        a: 'Yes — the full 30A corridor from Inlet Beach in the east through Grayton Beach and Blue Mountain Beach in the west is in our service area. WaterColor and WaterSound community vacation homes are frequent booking locations. Travel fees may vary slightly by location along the corridor — always disclosed in your quote.',
      },
      {
        q: 'How far in advance should I book for a 30A summer event?',
        a: '30A is one of the most sought-after Gulf Coast summer destinations, and our summer calendar fills accordingly. For June–August weekend events, book 4–6 weeks ahead. July 4th and Labor Day dates fill the fastest — plan 6+ weeks ahead for those. Spring break (March–April) is also very busy. Fall and winter events on 30A have more availability and can often be arranged 2–3 weeks out.',
      },
      {
        q: 'Can you set up in a Rosemary Beach or Alys Beach courtyard?',
        a: 'Yes — the distinctive courtyard architecture of Rosemary Beach and Alys Beach is a beautiful hibachi setting. We need a flat, stable surface of at least 10×10 ft, vehicle access or access for equipment transport, and confirmation that the property permits outdoor open-flame cooking. The charming outdoor spaces in these communities create an incredibly memorable ambiance for a private chef evening.',
      },
    ],
    testimonials: [
      {
        text: '"Anniversary trip to Rosemary Beach — 14 of us at a gorgeous vacation house, chef set up in the courtyard. Premium menu with lobster and filet. The setting was already extraordinary and the hibachi made it into something truly unforgettable. Every guest said it was the best dinner of their lives. We\'re making this an annual trip tradition."',
        name: 'Catherine & James L.',
        city: 'Nashville, TN',
        event: 'Anniversary Dinner',
        initials: 'CL',
      },
      {
        text: '"Bachelorette weekend at an Alys Beach vacation home — 18 women, courtyard setup, premium proteins. The chef was spectacular — the food matched the setting and the setting was already perfect. This is 30A hibachi at its best. The bride said it was the most beautiful dinner she\'d ever had. Already recommending to everyone planning a bachelorette."',
        name: 'Ashley R.',
        city: 'Atlanta, GA',
        event: 'Bachelorette Party',
        initials: 'AR',
      },
      {
        text: '"Birthday trip to Seaside with 20 close friends — vacation house pool deck, chef came right to us. Food was genuinely exceptional, the show was incredibly entertaining, and the whole group stayed together all evening. 30A already makes everything feel special — hibachi took it to another level entirely."',
        name: 'Lauren M.',
        city: 'Birmingham, AL',
        event: 'Birthday Getaway',
        initials: 'LM',
      },
    ],
  },

  clearwater: {
    heroSubtitle: 'Beach Community Events · Bachelorette Weekends · Vacation Rentals · Serving Clearwater Beach & Pinellas Coast',
    localHighlights: [
      'Clearwater Beach vacation rentals and Gulf-front properties set the scene for the best hibachi evenings on the Pinellas coast',
      'Dunedin\'s charming residential streets and Safety Harbor waterfront homes book regularly for dinner party events',
      'Bachelorette weekends, birthday trips, and girls\' getaways to Clearwater Beach make up a large share of our market',
      'Tarpon Springs and Palm Harbor residential communities are in our service area for year-round hibachi entertaining',
      'Belleair and Indian Rocks Beach vacation rental setups are popular for snowbird season entertaining',
      'Always confirm your Clearwater Beach rental or condo allows outdoor open-flame cooking before booking',
    ],
    faqSet: [
      {
        q: 'Do you serve Clearwater Beach vacation rentals and Gulf-front properties?',
        a: 'Yes — Clearwater Beach vacation rentals, vacation condos with balcony or terrace access, and residential Gulf-front properties are in our service area. We need a flat, stable outdoor surface of at least 10×10 ft and confirmation that the property permits outdoor open-flame cooking. Many Clearwater Beach rentals with pool decks or covered outdoor areas accommodate us well.',
      },
      {
        q: 'Is hibachi popular for bachelorette weekends in Clearwater?',
        a: 'Very much so. Clearwater Beach bachelorette groups of 12–20 women consistently name hibachi at the vacation rental as the best event of the weekend. The chef comes to your rental, performs the full show on the pool deck or patio, and nobody has to leave the house. Saturday bachelorette dates on Clearwater Beach book 3–5 weeks out during peak season.',
      },
      {
        q: 'Do you serve Dunedin, Safety Harbor, and Tarpon Springs?',
        a: 'Yes — Dunedin, Safety Harbor, Tarpon Springs, Palm Harbor, and all north Pinellas communities are in our service area. Dunedin waterfront properties and Safety Harbor residential homes are great settings for hibachi dinner parties. These areas tend to have more spacious outdoor entertaining areas than beach-corridor condos, making setup comfortable for larger groups.',
      },
      {
        q: 'Can you set up at a Clearwater Beach condo or resort property?',
        a: 'Yes — condo properties on Clearwater Beach with outdoor balcony, pool deck, or terrace access can work. We need adequate flat surface space (at least 10×10 ft) and the property\'s permission for outdoor open-flame cooking. For larger resort properties, service entrance and elevator access may need to be coordinated. Describe your specific unit and outdoor space when requesting a quote.',
      },
      {
        q: 'What\'s the best time of year for hibachi events in Clearwater?',
        a: 'Clearwater Beach is popular year-round. Peak season runs March through August — book 3–4 weeks ahead for summer weekends, 4–5 weeks for spring break dates. Snowbird season (October–April) also drives strong demand in Clearwater\'s residential communities. Year-round, Saturday evenings fill fastest. Off-season (September–October, November) has more availability.',
      },
      {
        q: 'Do you serve Indian Rocks Beach, Belleair, and the south Clearwater communities?',
        a: 'Yes — Indian Rocks Beach, Indian Shores, Belleair Beach, Belleair Bluffs, and surrounding south Clearwater communities are in our service area. Most locations in these beach communities are within our standard service zone. Vacation rental pool decks in Indian Rocks Beach are popular setups for snowbird season and summer vacation groups alike.',
      },
    ],
    testimonials: [
      {
        text: '"Bachelorette weekend at a Clearwater Beach vacation rental — 16 of us, pool deck setup, chef arrived right on time. The fire show was incredible, the food was great, and we didn\'t leave the house all night. Hands down the best event of the whole weekend. Everyone is still talking about it."',
        name: 'Taylor P.',
        city: 'Tampa, FL',
        event: 'Bachelorette Party',
        initials: 'TP',
      },
      {
        text: '"Birthday dinner party at our Dunedin waterfront home — 22 friends, backyard setup, gorgeous evening on the water. The chef was absolutely phenomenal — entertaining the whole crowd while cooking perfectly. Best birthday format I\'ve ever done. Already planning the next one."',
        name: 'Mark & Linda B.',
        city: 'Clearwater, FL',
        event: 'Birthday Dinner Party',
        initials: 'MB',
      },
      {
        text: '"Girls\' trip to Clearwater Beach — 18 of us in a vacation house with a pool. Hibachi on the deck was the move. Chef came right to us, the whole group was laughing and screaming from the first flame. Food was excellent. Nobody wanted the night to end. Best beach trip I\'ve ever been on."',
        name: 'Jennifer S.',
        city: 'Orlando, FL',
        event: 'Girls Trip Dinner',
        initials: 'JS',
      },
    ],
  },

  kissimmee: {
    heroSubtitle: 'Vacation Rental Dinners · Family Reunion Groups · Disney Area Events · Serving Kissimmee & Central Florida',
    localHighlights: [
      'Champions Gate, Solterra, Reunion Resort, and Windsor Hills vacation home communities are our most-booked Kissimmee setups',
      'Family groups of 20–50 at large Kissimmee vacation houses are our specialty — we bring multiple chef stations as needed',
      'Pool decks with screen enclosures and covered lanais in Kissimmee vacation homes work perfectly for hibachi setup',
      'Kids visiting for Disney trips love hibachi — it\'s the one dinner where everyone at the table looks up from their phones',
      'Celebration and Lake Buena Vista vacation rentals and resort communities are in our regular service area',
      'Summer and holiday vacation weeks book fast — reserve 3–4 weeks ahead for peak Central Florida dates',
    ],
    faqSet: [
      {
        q: 'Do you serve vacation home communities like Champions Gate, Solterra, and Reunion Resort?',
        a: 'Yes — Champions Gate, Solterra, Reunion Resort, Windsor Hills, Emerald Island, Highlands Reserve, and all surrounding Kissimmee vacation home communities are in our service area. These are among our most active booking locations. Most properties in these gated communities have pool decks or covered lanais that work perfectly for hibachi setup. Provide gate access details when booking and we\'ll coordinate ahead of time.',
      },
      {
        q: 'How do you handle a large family reunion group of 30–50 at a Kissimmee vacation house?',
        a: 'Large family groups are what we do best in the Kissimmee market. For groups of 25–50, we bring two chef stations running in parallel. This ensures everyone is served efficiently, the entertainment runs simultaneously at both ends of the table, and the evening flows well. Most large Kissimmee vacation houses have pool deck or outdoor areas that comfortably accommodate two-station setups. Tell us your head count and we\'ll size it correctly.',
      },
      {
        q: 'Can you set up inside a screened pool enclosure at a Kissimmee vacation rental?',
        a: 'Yes — screened pool enclosures are one of the most common Kissimmee setups. The screen provides ventilation and keeps bugs out while maintaining the outdoor feel. We need a flat concrete or deck surface of at least 10×10 ft inside the enclosure, away from the pool edge. A screen door wide enough for the grill cart is necessary for access. Most Kissimmee vacation home enclosures accommodate this easily.',
      },
      {
        q: 'Is hibachi a good activity for kids and families during a Disney vacation?',
        a: 'It\'s one of the best. The onion volcano, flying shrimp, and fire tricks captivate kids ages 4–12 completely — many families report it as a bigger hit than theme park character dining. Everyone eats at the same time, no one manages a group restaurant reservation for 25 people, and grandparents get front-row seats to a genuine show. For a multi-generational Disney trip group, private hibachi solves the vacation dinner problem perfectly.',
      },
      {
        q: 'Do you serve Celebration, Lake Buena Vista, and Davenport vacation communities?',
        a: 'Yes — Celebration, Lake Buena Vista, Davenport, and Four Corners vacation communities are all in our service area. The entire Central Florida vacation corridor from Kissimmee west to Clermont and south to Haines City is covered. Most properties in these areas carry no travel fee within the standard service radius.',
      },
      {
        q: 'How far in advance should I book for a Kissimmee vacation group event?',
        a: 'Summer vacation weeks (June–August) and holiday weeks (Christmas, Thanksgiving, spring break) are peak demand in Kissimmee — book 3–4 weeks ahead for those dates. Holiday week events can fill 4–6 weeks out. Regular summer weekends book 2–3 weeks ahead. We do our best to accommodate last-minute requests on weekdays — contact us directly for same-week availability.',
      },
    ],
    testimonials: [
      {
        text: '"Family reunion at a Champions Gate vacation house — 45 people, two chef stations, absolute chaos and joy. Kids 4 to 14 were completely losing their minds over the fire tricks. Grandparents were laughing. Adults got a real meal. Three generations at one table for two hours — that never happens. This is our new annual tradition."',
        name: 'The Johnson Family',
        city: 'Cleveland, OH',
        event: 'Family Reunion',
        initials: 'JF',
      },
      {
        text: '"Disney trip with 22 family members, vacation house near Reunion Resort. We did character dining earlier in the week and honestly the hibachi chef at our pool deck was a bigger hit with the kids. Flying shrimp at age 7 is apparently life-changing. Every adult loved it too. Best vacation dinner we\'ve ever done."',
        name: 'Sandra M.',
        city: 'Chicago, IL',
        event: 'Family Vacation Dinner',
        initials: 'SM',
      },
      {
        text: '"18 people at a Solterra vacation house — multiple families, pool deck setup. Chef arrived exactly on time and immediately had the whole group captivated. The kids were better behaved at this dinner than at any restaurant we\'ve ever taken them to. Parents were thrilled. This is the model for every family vacation dinner going forward."',
        name: 'Luis & Maria G.',
        city: 'Miami, FL',
        event: 'Multi-Family Vacation Dinner',
        initials: 'LG',
      },
    ],
  },

  bradenton: {
    heroSubtitle: 'Snowbird Entertaining · Anna Maria Island Events · Lakewood Ranch Dining · Serving Bradenton & Manatee County',
    localHighlights: [
      'Anna Maria Island vacation rentals and waterfront homes are our most scenic Manatee County setup locations',
      'Lakewood Ranch communities — Del Webb, Country Club, Greenbrook — host regular snowbird dinner parties through our service',
      'Snowbird season (October–April) is our peak Bradenton window — winter weekend dates fill 2–3 weeks out',
      'Palma Sola Botanical Park area homes, Cortez fishing village waterfront, and Palmetto residential areas are in our service zone',
      'Covered lanais, screened pool cages, and waterfront patios throughout Manatee County work perfectly for hibachi',
      'Premium proteins available for Anna Maria Island and Lakewood Ranch estate events',
    ],
    faqSet: [
      {
        q: 'Do you serve Anna Maria Island vacation rentals and waterfront homes?',
        a: 'Yes — Anna Maria Island vacation rentals, Holmes Beach properties, and Bradenton Beach homes are in our service area. Island properties with pool decks or covered outdoor patios work well for hibachi setup. Vehicle access and bridge logistics are accounted for when you book. Anna Maria Island events are among our most scenic Manatee County setups — the waterfront backdrop makes for an extraordinary evening.',
      },
      {
        q: 'Is private hibachi popular for snowbird season in Bradenton and Lakewood Ranch?',
        a: 'Snowbird season (October–April) is our busiest window in the Bradenton area. Lakewood Ranch communities host recurring dinner parties for seasonal residents and visiting friends throughout the winter. A private hibachi chef on your lanai or covered patio is something your guests genuinely haven\'t experienced — and it gives the evening a built-in anchor that makes every dinner party memorable.',
      },
      {
        q: 'Do you serve Lakewood Ranch communities like Del Webb and The Country Club?',
        a: 'Yes — all Lakewood Ranch communities including Del Webb, The Country Club, Greenbrook, Central Park, and Waterside are in our service area. For gated community events, provide the gate access details when booking. Lakewood Ranch covered lanais and screened pool cages are perfect hibachi setups. We coordinate all details to ensure a seamless arrival.',
      },
      {
        q: 'Can you serve Palmetto, Ellenton, and north Manatee County communities?',
        a: 'Yes — Palmetto, Ellenton, Parrish, and north Manatee County are in our service area. These residential communities often have spacious backyards and covered patios that make excellent hibachi settings. Most locations in the Manatee County area are within our standard service zone with no travel fee.',
      },
      {
        q: 'How far in advance should I book a Bradenton or Anna Maria hibachi event?',
        a: 'For snowbird season weekend events (October–April), book 2–3 weeks ahead. December through February is the most-booked window — premium Saturday evenings can fill 3–4 weeks out. Anna Maria Island weekend dates in summer also book quickly. Weekday events in Bradenton can often be arranged with 1 week notice.',
      },
      {
        q: 'Can hibachi work on a Bradenton residential backyard or uncovered patio?',
        a: 'Yes — open backyard setups and uncovered patios work fine in Florida\'s mild climate. We need a flat, stable surface of at least 10×10 ft. Open setups are actually preferred for ventilation. For evening events in Bradenton, the outdoor temperatures are comfortable year-round. If you have a covered lanai as an alternative, that works equally well.',
      },
    ],
    testimonials: [
      {
        text: '"Snowbird season dinner party at our Lakewood Ranch home — 20 neighbors, covered lanai, beautiful January evening. The chef arrived exactly on time and had everyone completely captivated. The whole community is talking about it. We\'ve already booked again for March and have a waiting list of neighbors who want to come."',
        name: 'Patricia M.',
        city: 'Bradenton, FL',
        event: 'Snowbird Dinner Party',
        initials: 'PM',
      },
      {
        text: '"Family vacation at an Anna Maria Island beach house — 24 guests, pool deck setup, water in the background. The chef and the setting created something absolutely magical. Every plate was perfect. It was the best dinner of our Florida trip by a wide margin. We\'re renting the same house next year and this is already on the itinerary."',
        name: 'The Williams Family',
        city: 'Atlanta, GA',
        event: 'Family Vacation Dinner',
        initials: 'WF',
      },
      {
        text: '"Anniversary dinner at our Bradenton waterfront home — 16 guests, outdoor patio, gorgeous Gulf Coast evening. The chef was exceptional and the food was genuinely outstanding. My husband said it was the best dinner party we\'ve hosted in our Florida home. We\'ve already booked the next one for our anniversary next year."',
        name: 'Susan T.',
        city: 'Bradenton, FL',
        event: 'Anniversary Dinner',
        initials: 'ST',
      },
    ],
  },

  'fort-myers': {
    heroSubtitle: 'Snowbird Entertaining · Canal-Front Events · Residential Dining · Serving Fort Myers & Lee County',
    localHighlights: [
      'The McGregor corridor, Gateway communities, and Daniels Parkway neighborhoods are our most-booked Fort Myers setups',
      'Canal-front homes in Fort Myers Shores, Southeast Fort Myers, and San Carlos Park have spectacular settings for hibachi evenings',
      'Snowbird season (October–April) is peak demand in Fort Myers — winter weekend dates fill 2–3 weeks out',
      'Fort Myers Beach vacation rentals and Estero Island properties are in our service area for seasonal events',
      'Gateway and Miromar Lakes gated communities host regular dinner parties with our private chef service',
      'Cape Coral, Bonita Springs, and Estero are all within our service area — one chef network covers all of Lee County',
    ],
    faqSet: [
      {
        q: 'Do you serve the McGregor corridor, Gateway, and Daniels Parkway neighborhoods?',
        a: 'Yes — the McGregor corridor, Gateway, Daniels Parkway, Colonial Boulevard area, and all Fort Myers residential communities are in our service area. These neighborhoods have some of the most beautiful outdoor entertaining spaces in Lee County — covered lanais, screened pool cages, and waterfront patios. Most Fort Myers locations are within our standard service zone with no travel fee.',
      },
      {
        q: 'Is hibachi popular for snowbird season entertaining in Fort Myers?',
        a: 'It\'s one of our most active winter markets. Fort Myers snowbird residents hosting returning neighbors and visiting family throughout October–April book us consistently. A private hibachi chef on your covered lanai is something your guests genuinely haven\'t experienced — and it gives a dinner party a built-in entertainment element that makes every evening memorable.',
      },
      {
        q: 'Do you serve Fort Myers Beach and Estero Island vacation rentals?',
        a: 'Yes — Fort Myers Beach and Estero Island vacation rentals are in our service area. Many vacation properties on Fort Myers Beach have outdoor decks or pool areas that work for hibachi setup. Confirm your rental permits outdoor open-flame cooking before booking — most Fort Myers Beach vacation properties do with advance notice to the property.',
      },
      {
        q: 'Do you serve Miromar Lakes, Shadow Wood, and other Fort Myers gated communities?',
        a: 'Yes — Miromar Lakes, Shadow Wood, Gateway, The Brooks, Pelican Landing, and all surrounding Lee County gated communities are in our service area. For gated community events, provide gate access details when booking and we coordinate ahead of time. No delays on event day — everything is confirmed in advance.',
      },
      {
        q: 'What\'s the service area from Fort Myers? Do you serve Cape Coral and Bonita Springs?',
        a: 'Yes — Fort Myers, Cape Coral, Bonita Springs, Estero, Lehigh Acres, North Fort Myers, and all surrounding Lee County communities are covered from our Fort Myers service hub. Most Lee County locations carry no travel fee. Naples and Marco Island events are available as well with advance booking.',
      },
      {
        q: 'How small can the group be for a Fort Myers hibachi dinner party?',
        a: 'Our minimum is 10 guests (or $600 event minimum). For a Fort Myers residential dinner party of 10–14 guests, one chef runs the full performance in an intimate, personal setting. Many of our most memorable Fort Myers events are smaller winter dinner parties on beautiful covered lanais. The chef adapts the show energy to match the group.',
      },
    ],
    testimonials: [
      {
        text: '"Snowbird season dinner party at our McGregor corridor home — 18 guests, covered lanai, beautiful February evening. The chef arrived perfectly on time and had everyone entertained from the first flame. Our seasonal neighbors who\'ve lived in Fort Myers for years said they\'d never experienced anything like it. We\'ve already got three more events booked."',
        name: 'Bob & Carol H.',
        city: 'Fort Myers, FL',
        event: 'Snowbird Dinner Party',
        initials: 'BH',
      },
      {
        text: '"Birthday party at our Gateway home — 24 neighbors and friends, pool cage setup, gorgeous winter evening. Chef was absolutely incredible — entertaining the entire group while cooking every plate perfectly. Best party we\'ve hosted at our Florida home. Already have four people who want to book through us."',
        name: 'Jim & Sandra M.',
        city: 'Fort Myers, FL',
        event: 'Birthday Party',
        initials: 'JM',
      },
      {
        text: '"Family reunion at a Fort Myers Beach vacation house — 30 family members, outdoor deck setup. Chef had both the kids and the adults completely captivated. The food was excellent and the performance was genuinely fun. No restaurant would have worked for that group. This is the only way to do a family reunion dinner in Florida."',
        name: 'The Thompson Family',
        city: 'Columbus, OH',
        event: 'Family Reunion',
        initials: 'TF',
      },
    ],
  },

  pensacola: {
    heroSubtitle: 'Gulf Coast Beach House Hibachi · Bachelorette Weekends · Military Community Events · Serving Pensacola & Gulf Coast',
    localHighlights: [
      'Pensacola Beach vacation rentals, Gulf Breeze pool homes, and Perdido Key beach houses are our most-booked setups',
      'Military community events — NAS Pensacola, Corry Station, Naval Air Station Whiting Field — are a core part of our market',
      'Bachelorette weekends, birthday trips, and family reunions arriving in Pensacola make hibachi their group dinner of choice',
      'Navarre Beach and Gulf Breeze vacation rental pool decks have some of the most beautiful sunset backdrops in the South',
      'Pensacola\'s residential neighborhoods — East Hill, North Hill, East Pensacola Heights — have great outdoor entertaining spaces',
      'Summer and spring break weekends on Pensacola Beach book fast — reserve 3–4 weeks ahead for peak season',
    ],
    faqSet: [
      {
        q: 'Do you serve Pensacola Beach, Gulf Breeze, and Perdido Key vacation rentals?',
        a: 'Yes — Pensacola Beach, Gulf Breeze, Perdido Key, and Navarre Beach vacation rentals and residential homes are all in our service area. Most properties in this Gulf Coast corridor are within our standard service zone. Beach rental pool decks, covered patios, and waterfront outdoor areas all work for hibachi setup. Confirm your rental permits outdoor open-flame cooking before booking.',
      },
      {
        q: 'Is hibachi a good choice for a bachelorette weekend in Pensacola Beach?',
        a: 'It\'s one of our most popular Pensacola Beach bachelorette activities. Groups of 12–20 women at a Gulf-front vacation house consistently name hibachi night as the best event of the weekend. The chef comes to your rental, performs the full show, and nobody has to leave the house. Pensacola Beach bachelorette Saturday dates book 3–5 weeks out in summer.',
      },
      {
        q: 'Do you serve military families near NAS Pensacola and Whiting Field?',
        a: 'Yes — we serve military families throughout the Pensacola area including communities near NAS Pensacola, Corry Station, and Naval Air Station Whiting Field in Milton. Military homecomings, promotion celebrations, deployment farewell dinners, and change-of-command parties are events we understand and are proud to serve. Contact us with your event details and we\'ll make it work.',
      },
      {
        q: 'Do you serve Navarre Beach and Fort Walton Beach from Pensacola?',
        a: 'Yes — Navarre Beach and Fort Walton Beach are accessible from Pensacola. A small travel fee may apply for Navarre Beach and Fort Walton Beach events depending on distance. Navarre Beach vacation rental events and Fort Walton Beach group dinners are a natural extension of our Pensacola service area. Contact us with your specific address for coverage confirmation.',
      },
      {
        q: 'What time of year is most popular for hibachi in Pensacola?',
        a: 'Summer (June–August) and spring break (March–April) are peak season on Pensacola Beach — book 3–5 weeks ahead for summer weekends. Military ceremony seasons (change-of-command cycles, graduation periods at NAS Pensacola) also drive strong demand. Fall (September–October) is beautiful and has more availability. Winter is lighter but absolutely possible for year-round residential events.',
      },
      {
        q: 'Can you handle a large family reunion at a Pensacola Beach vacation house?',
        a: 'Yes — large family reunion groups at Pensacola Beach vacation houses are one of our most-booked event types. One chef handles 10–20 guests; for 25–50 person family groups, we bring two chef stations. Most large Pensacola Beach vacation houses have pool decks or outdoor areas with plenty of space for a dual-station setup. Give us your head count and property address and we\'ll size the event correctly.',
      },
    ],
    testimonials: [
      {
        text: '"Bachelorette weekend at a Pensacola Beach vacation house — 18 of us, pool deck, chef arrived right on time. The Gulf was right behind us and the fire show in front of us — it was genuinely the most beautiful setting I\'ve ever had a dinner in. Food was incredible. Best night of the whole trip, no question."',
        name: 'Ashley R.',
        city: 'Birmingham, AL',
        event: 'Bachelorette Party',
        initials: 'AR',
      },
      {
        text: '"Military homecoming dinner at our Pensacola home — 28 family members and close friends, backyard setup. The chef made the whole evening feel celebratory and special. After months apart, having everyone gathered around a hibachi grill was exactly the right kind of welcome home. One of the most meaningful evenings our family has had."',
        name: 'Sarah B.',
        city: 'Pensacola, FL',
        event: 'Military Homecoming',
        initials: 'SB',
      },
      {
        text: '"Family reunion at a Gulf Breeze vacation house — 36 family members, pool deck, chef set up beautifully. Kids were completely entertained, adults had a genuine dinner, and everyone stayed at the table for two hours. The Pensacola area is already beautiful for a family gathering — hibachi made the whole evening extraordinary."',
        name: 'The Roberts Family',
        city: 'Montgomery, AL',
        event: 'Family Reunion',
        initials: 'RF',
      },
    ],
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
  miami:               { src: '/pics/hibachi-miami.jpg',        alt: (city) => `Upscale private hibachi chef at a Miami, Florida waterfront property` },
  orlando:             { src: '/pics/hibachi-dallas-2.jpg',     alt: (city) => `Vacation group enjoying private hibachi at an Orlando, Florida rental home` },
  tampa:               { src: '/pics/hibachi-home-austin.jpg',  alt: (city) => `Backyard hibachi party on a Tampa, Florida pool deck` },
  jacksonville:        { src: '/pics/hibachi-texas.jpg',        alt: (city) => `Private hibachi chef event in a Jacksonville, Florida backyard` },
  'fort-lauderdale':   { src: '/pics/hibachi-pic-3.jpg',        alt: (city) => `Canal-side hibachi dinner at a Fort Lauderdale, Florida property` },
  sarasota:            { src: '/pics/hibachi-colorado.jpg',     alt: (city) => `Elegant outdoor hibachi dinner in ${city}, Florida` },
  naples:              { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Private estate hibachi catering in ${city}, Florida` },
  'west-palm-beach':   { src: '/pics/hibachi-pic-2.jpg',        alt: (city) => `Upscale hibachi dinner party at a ${city}, Florida estate` },
  destin:              { src: '/pics/hibachi-pic-32.jpg',        alt: (city) => `Beach house hibachi gathering in ${city}, Florida` },
  'st-petersburg':     { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Social hibachi night at a St. Petersburg, Florida rental property` },
  'key-west':          { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Tropical vacation rental hibachi in ${city}, Florida` },
  'boca-raton':        { src: '/pics/hibachi-dallas-2.jpg',     alt: (city) => `Luxury hibachi dinner party in ${city}, Florida` },
  'cape-coral':        { src: '/pics/hibachi-event.jpg',        alt: (city) => `Canal-front hibachi party in ${city}, Florida` },
  'panama-city-beach': { src: '/pics/private-hibachi.jpg',      alt: (city) => `Private hibachi chef at a beach vacation rental in ${city}, Florida` },
  clearwater:          { src: '/pics/hibachi-to-you.jpg',       alt: (city) => `Hibachi chef arriving for a beach community event in ${city}, Florida` },
  'fort-myers':        { src: '/pics/mobile-hibachi.jpg',       alt: (city) => `Mobile hibachi chef set up at a ${city}, Florida home` },
  pensacola:           { src: '/pics/hibachi-pic-3.jpg',        alt: (city) => `Gulf Coast backyard hibachi party near ${city}, Florida` },
  tallahassee:         { src: '/pics/hibachi-pic-4.jpg',        alt: (city) => `Backyard hibachi event in ${city}, Florida` },
  gainesville:         { src: '/pics/hibachi-austin.jpg',       alt: (city) => `Group hibachi dinner at a ${city}, Florida home` },
  'daytona-beach':     { src: '/pics/hibachi-shot-1.jpg',       alt: (city) => `Beachside hibachi group event near ${city}, Florida` },
  kissimmee:           { src: '/pics/hibachi-home-austin.jpg',  alt: (city) => `Vacation home hibachi dinner for a group in ${city}, Florida` },
  'coral-gables':      { src: '/pics/hibachi-dallas.jpg',       alt: (city) => `Upscale patio hibachi dinner in ${city}, Florida` },
  aventura:            { src: '/pics/hibachi-pic-62.jpg',       alt: (city) => `Luxury high-rise terrace hibachi in ${city}, Florida` },
  '30a':               { src: '/pics/backyard-hibachi-2.jpg',   alt: (city) => `Upscale beach house pool deck hibachi on scenic 30A, Florida` },
  bradenton:           { src: '/pics/hibachi-austin-2.jpg',     alt: (city) => `Waterfront hibachi event at a ${city}, Florida home` },
  venice:              { src: '/pics/hibachi-austin-3.jpg',     alt: (city) => `Gulf Coast hibachi dinner party in ${city}, Florida` },
  'bonita-springs':    { src: '/pics/hibachi-pic-4.jpg',        alt: (city) => `Luxury residential hibachi dinner in ${city}, Florida` },
  'marco-island':      { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Island resort private hibachi event in ${city}, Florida` },
  jupiter:             { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Waterfront hibachi catering event in ${city}, Florida` },
  'delray-beach':      { src: '/pics/hibachi-event.jpg',        alt: (city) => `Social hibachi dinner party in ${city}, Florida` },
  'st-augustine':      { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Historic city vacation rental hibachi in ${city}, Florida` },
  'ponte-vedra-beach': { src: '/pics/hibachi-austin-2.jpg',     alt: (city) => `Luxury community private hibachi event in ${city}, Florida` },
  'amelia-island':     { src: '/pics/traveling-hibachi.jpg',    alt: (city) => `Island vacation rental hibachi in ${city}, Florida` },
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
      src:     '/pics/hibachi-austin.jpg',
      alt:     (city) => `Waterfront patio hibachi dinner party in Fort Lauderdale, Florida`,
      caption: 'Canal-front patios, intracoastal views, and Las Olas dinner parties — Fort Lauderdale hibachi.',
    },
    cta: {
      src:     '/pics/hibachi-dallas-tyler.jpg',
      alt:     (city) => `Private hibachi chef performing at a Fort Lauderdale, Florida waterfront property`,
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
    testimonial: { src: '/pics/hibachi-shot-1.jpg',        alt: (city) => `Happy guests at a family vacation hibachi near ${city}, Florida`, caption: null },
    cta:         { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Hibachi catering for a vacation group in ${city}, Florida`,       caption: null },
  },
  {
    testimonial: { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Bachelorette group hibachi event near ${city}, Florida`,        caption: null },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Pool deck hibachi party near ${city}, Florida`,                   caption: null },
  },
  {
    testimonial: { src: '/pics/hibachi-home-austin.jpg',   alt: (city) => `Residential private hibachi dinner in ${city}, Florida`,          caption: null },
    cta:         { src: '/pics/traveling-hibachi.jpg',     alt: (city) => `Private hibachi chef traveling to a ${city}, Florida home`,       caption: null },
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
