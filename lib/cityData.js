// ─── Hero image pool ─────────────────────────────────────────────────────────
// 4 real brand photos — rotated by variant so every city gets a different image
export const HERO_IMAGES = [
  '/pics/hero-1.jpg',  // Backyard Hibachi
  '/pics/hero-2.jpg',  // Hibachi at Home Dallas
  '/pics/hero-3.jpg',  // Hibachi at Home Raleigh
  '/pics/hero-4.jpg',  // Hibachi at Home Texas
]

import {
  TEXAS_INTRO_VARIANTS,
  TEXAS_CLOSING_VARIANTS,
  TEXAS_CITY_INTROS,
  TEXAS_CITY_CLOSINGS,
} from './texasData'
import {
  FLORIDA_INTRO_VARIANTS,
  FLORIDA_CLOSING_VARIANTS,
  FLORIDA_CITY_INTROS,
  FLORIDA_CITY_CLOSINGS,
} from './floridaData'
import {
  NC_INTRO_VARIANTS,
  NC_CLOSING_VARIANTS,
  NC_CITY_INTROS,
  NC_CITY_CLOSINGS,
} from './ncData'

// ─── City-specific data for each city page ──────────────────────────────────
// Add a new entry per city. The `variant` field (0–4) rotates intro
// headings, FAQ wording, CTA phrasing, why-us bullets, and hero image automatically.

export const CITY_DATA = {

  // ── TEXAS ──────────────────────────────────────────────────────────────────
  dallas: {
    cityName:    'Dallas',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     0,
    heroImage:   '/pics/hero-2.jpg',
    heroSubtitle: 'Upscale Private Dining · Corporate Events · Bachelorette Weekends · Serving DFW',
    nearbyCities: [
      'Plano','Frisco','McKinney','Allen','Garland','Irving','Carrollton',
      'Richardson','Mesquite','Grand Prairie','Lewisville','Flower Mound',
      'Denton','Grapevine','Southlake','Coppell','Rockwall',
    ],
    nearbyMajorCities: ['Fort Worth','Arlington','Houston','Austin'],
    localHighlights: [
      'Backyard hibachi for DFW\'s legendary outdoor entertaining culture',
      'Perfect for Uptown and Knox-Henderson dinner parties',
      'Ideal for Deep Ellum birthday celebrations and rooftop events',
      'Dallas corporate event teams love the chef showmanship',
      'Great for Plano and Frisco family gatherings',
    ],
    featuredOccasions: [
      'Birthday Parties','Bachelorette Parties','Anniversary Dinners',
      'Corporate Events','Graduation Parties','Family Reunions',
      'Date Nights','Holiday Gatherings','Neighborhood Cookouts','Bachelor Parties',
    ],
    faqSet: [
      {
        q: 'Do you travel to my neighborhood in Dallas?',
        a: 'Yes — we serve all Dallas neighborhoods including Uptown, Oak Cliff, Lake Highlands, Preston Hollow, Bishop Arts, East Dallas, North Dallas, and beyond. Frisco, Plano, and McKinney are also covered at no extra travel fee in most cases.',
      },
      {
        q: 'Can hibachi be set up indoors in a Dallas home?',
        a: 'Absolutely. We can set up indoors in a large kitchen, open living area, garage, or covered patio — anywhere with at least 10×10 ft of clearance and adequate ventilation. Outdoor patios and backyards are most common in Dallas.',
      },
      {
        q: 'How much outdoor or indoor space does the hibachi setup require?',
        a: 'A minimum 10×10 ft flat area for the grill and chef. Guests sit or stand around the grill, so plan for approximately 2 ft per person around the cooking station.',
      },
      {
        q: 'What do I need to provide for the event?',
        a: 'Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all ingredients, sauces, plates, chopsticks, and serving utensils.',
      },
      {
        q: 'How far in advance should I book in Dallas?',
        a: 'Weekend evenings in Dallas typically book 2–3 weeks out. For Saturday nights in summer, 4+ weeks is safest. Weekday events can often be arranged with 5–7 days notice.',
      },
      {
        q: 'Do you cook at Airbnbs or vacation rentals in Dallas?',
        a: 'Yes — many of our Dallas events take place at short-term rentals. Just confirm the property allows outdoor cooking or open-flame cooking before booking.',
      },
    ],
    testimonials: [
      {
        text: '"Booked for my wife\'s 40th in our Preston Hollow backyard — 28 guests, full outdoor setup. The chef had everyone circled around that grill for two hours straight. Best dinner party we\'ve hosted in Dallas. Already have round two on the calendar."',
        name: 'Marcus T.',
        city: 'Preston Hollow, Dallas TX',
        event: 'Birthday Party',
        initials: 'MT',
      },
      {
        text: '"Our company retreat in Las Colinas needed something memorable — 40 people, outdoor patio at the venue. The Hibachi Connect chef was the whole show. People were still texting me about it the week after. Nothing we\'ve done beats this for DFW corporate events."',
        name: 'Jennifer L.',
        city: 'Irving / Las Colinas, TX',
        event: 'Corporate Retreat',
        initials: 'JL',
      },
      {
        text: '"Graduation party for our son in Frisco — 45 guests, huge backyard, chef came with everything. Fire tricks, flying shrimp, everyone crowded around. Our neighbors kept asking who we hired. Already booked again for a bachelorette."',
        name: 'David & Rita O.',
        city: 'Frisco, TX',
        event: 'Graduation Party',
        initials: 'DO',
      },
    ],
    uniqueIntroVariant: 11,
    uniqueWhyUsVariant: 0,
    uniqueClosingVariant: 11,
  },

  houston: {
    cityName:    'Houston',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     1,
    heroImage:   '/pics/hero-2.jpg',
    heroSubtitle: 'Quinceañeras · Graduation Parties · Poolside Events · Serving Greater Houston',
    nearbyCities: [
      'Katy','Sugar Land','The Woodlands','Pearland','Friendswood',
      'League City','Clear Lake','Cypress','Humble','Spring',
      'Missouri City','Stafford','Pasadena','Baytown','Conroe',
    ],
    nearbyMajorCities: ['Dallas','Austin','San Antonio','Fort Worth'],
    localHighlights: [
      'Quinceañeras and large family celebrations in Katy, Sugar Land, and Pearland — groups of 20–60 are our sweet spot',
      'Graduation season (May–June) is our busiest window — book 3–4 weeks ahead for weekend dates',
      'River Oaks, Memorial, and Bellaire backyard dinner parties for 15–40 guests',
      'Energy Corridor and Galleria-area corporate team events — multi-station setups for 40–100 employees',
      'Texans and Longhorns game-night watch parties — a hibachi show beats a catering truck every time',
      'Galveston, League City, and Clear Lake beach-house and waterfront weekend events',
    ],
    featuredOccasions: [
      'Quinceañeras','Graduation Parties','Birthday Parties',
      'Family Reunions','Corporate Team Events','Bachelorette Parties',
      'Football Watch Parties','Anniversary Dinners','Holiday Gatherings','Neighborhood Block Parties',
    ],
    faqSet: [
      {
        q: 'Do you do quinceañeras and large family celebrations in the Houston area?',
        a: 'Absolutely — quinceañeras, family reunions, and multi-generational birthday parties are some of our most-booked events across Greater Houston. Our chefs are experienced with groups of 30–60+ guests, and we run two chef stations simultaneously for larger head counts. We regularly serve families in Katy, Sugar Land, Pearland, Pasadena, and throughout the metro.',
      },
      {
        q: 'How do you handle Houston\'s summer heat for outdoor events?',
        a: 'We\'ve been cooking through Houston summers for years. For May through September events, we strongly recommend scheduling after 6 PM when the heat breaks and the evening stays comfortable. Covered patios, pergola setups, and large open-air spaces with ceiling fans all work great. Pool deck setups are common — just let us know your outdoor layout and we\'ll advise on the best configuration.',
      },
      {
        q: 'Can your chef handle a Houston party of 40, 50, or 60 guests?',
        a: 'Yes — for groups over 25, we bring a second chef station. For 40–60 guests, two stations run in parallel and the meal typically wraps in under two hours. We\'ve handled 80–120+ guest corporate events in The Woodlands, Katy, and the Energy Corridor. Just give us your head count when you request a quote and we\'ll size the setup correctly.',
      },
      {
        q: 'Which Houston neighborhoods and suburbs do you serve?',
        a: 'We cover all of Greater Houston: Katy, Sugar Land, The Woodlands, Pearland, Friendswood, League City, Clear Lake, Pasadena, Baytown, Cypress, Humble, Spring, Missouri City, Stafford, Conroe, Bellaire, Memorial, River Oaks, Midtown, Heights, and Montrose. Most locations within 35 miles of central Houston have no travel fee.',
      },
      {
        q: 'Can you set up at a ranch, large outdoor property, or venue outside Houston city limits?',
        a: 'Yes — ranch properties, rural land, and large private venues outside the city are no problem. We need a flat, stable surface for the grill (at least 10×10 ft) and vehicle access to the setup area. For locations more than 35 miles from central Houston a travel fee may apply. Describe your venue when requesting a quote and we\'ll confirm coverage and any fees upfront.',
      },
    ],
    testimonials: [
      {
        text: '"We threw my daughter\'s quinceañera after-party in Sugar Land — 55 guests, two chef stations, and the chef had every single person cheering. Cousins flew in from out of state and said it was the best party they\'d been to in years. We\'re already planning a repeat for her brother\'s graduation."',
        name: 'Maria G.',
        city: 'Sugar Land, TX',
        event: 'Quinceañera Party',
        initials: 'MG',
      },
      {
        text: '"Booked for our Energy Corridor office cookout — 70 employees, outdoor setup, two chefs running back to back. Nobody left the grill the whole night. We ditched our boring BBQ caterer and this is the only way we do company events now."',
        name: 'James T.',
        city: 'Houston, TX',
        event: 'Corporate Event',
        initials: 'JT',
      },
      {
        text: '"Graduation party for my son in Pearland — 45 guests, backyard setup, chef had the fire going and kids completely losing it over the tricks. Grandparents had front-row seats and loved every second. Showed up on time, set up in 20 minutes, left the yard spotless."',
        name: 'Denise & Kevin W.',
        city: 'Pearland, TX',
        event: 'Graduation Party',
        initials: 'DW',
      },
    ],
    uniqueIntroVariant: 10,
    uniqueWhyUsVariant: 1,
    uniqueClosingVariant: 10,
  },

  austin: {
    cityName:    'Austin',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     2,
    heroImage:   '/pics/hero-3.jpg',
    heroSubtitle: 'Airbnb Parties · Bachelorette Weekends · Tech Offsites · Serving Austin & Hill Country',
    nearbyCities: [
      'Round Rock','Cedar Park','Georgetown','Pflugerville','Kyle',
      'Buda','San Marcos','Lakeway','Bee Cave','Bastrop','Leander',
    ],
    nearbyMajorCities: ['San Antonio','Houston','Dallas','Waco'],
    localHighlights: [
      'Perfect for East Austin house parties and rooftop events',
      'South Congress and Bouldin Creek neighborhood dinners',
      'Tech company team events in the Domain and North Austin',
      'Lake Travis and Lake Austin waterfront celebrations',
      'South by Southwest season pre-parties and gatherings',
    ],
    featuredOccasions: [
      'Backyard Dinner Parties','Tech Team Events','Birthday Celebrations',
      'Bachelorette Parties','Anniversary Dinners','Graduation Parties',
      'Holiday Cookouts','Date Nights','Neighborhood Gatherings','Corporate Lunches',
    ],
    faqSet: [
      {
        q: 'Do you serve East Austin, North Austin, and the suburbs?',
        a: 'Yes — we cover all of Austin including East Austin, South Austin, North Austin, the Domain area, plus Round Rock, Cedar Park, Georgetown, Pflugerville, and surrounding suburbs.',
      },
      {
        q: 'Can you set up at an Airbnb or vacation rental in the Austin area?',
        a: 'Yes — Austin has a vibrant short-term rental scene and we frequently cook at Airbnbs and VRBOs. Confirm with your host that open-flame cooking is allowed outdoors.',
      },
      {
        q: 'Can the chef cook at a Lake Travis or Lake LBJ vacation property?',
        a: 'Absolutely — lakehouse and waterfront hibachi events are some of our most spectacular. Book 3–4 weeks ahead for weekend lake property events.',
      },
      {
        q: 'What proteins are available for Austin events?',
        a: 'Our standard proteins include chicken, steak, shrimp, and tofu. Premium add-ons include lobster tail, filet mignon, scallops, and salmon. We also love sourcing local Texas proteins when requested.',
      },
      {
        q: 'Do you serve smaller towns around Austin like Bastrop or Wimberley?',
        a: 'Yes — we travel throughout the Austin metro and surrounding Hill Country communities. Travel fees may apply for locations more than 30 miles from central Austin.',
      },
    ],
    testimonials: [
      {
        text: '"East Austin birthday dinner for 22 people. Chef was an absolute showman — fire tricks, shrimp toss, the whole deal. Perfectly Austin vibe. Would 100% book again."',
        name: 'Tyler B.',
        city: 'Austin, TX',
        event: 'Birthday Party',
        initials: 'TB',
      },
      {
        text: '"Tech company team dinner in the Domain. 35 people, everyone raving about it. Way more memorable than a restaurant reservation. Seamless setup and cleanup."',
        name: 'Priya N.',
        city: 'Austin, TX',
        event: 'Team Event',
        initials: 'PN',
      },
      {
        text: '"Lake Travis bachelorette weekend — hibachi night was THE highlight. The chef made the whole experience so fun and personal. Cannot recommend enough."',
        name: 'Ashley C.',
        city: 'Austin, TX',
        event: 'Bachelorette Party',
        initials: 'AC',
      },
    ],
    uniqueIntroVariant: 12,
    uniqueWhyUsVariant: 2,
    uniqueClosingVariant: 12,
  },

  katy: {
    cityName:    'Katy',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     3,
    heroImage:   '/pics/hero-1.jpg',
    heroSubtitle: 'Hibachi at Home · Katy, TX · Quinceañeras, Graduations & Family Celebrations',
    nearbyCities: [
      'Houston','Sugar Land','Cypress','Richmond','Fulshear',
      'Missouri City','Pearland','The Woodlands','Rosenberg','Stafford',
    ],
    nearbyMajorCities: ['Houston','Dallas','Austin','San Antonio'],
    localHighlights: [
      'Quinceañeras and large multi-family celebrations — groups of 25–60 in West Houston suburbs',
      'Katy ISD graduation season is one of our busiest windows — book 3–4 weeks ahead',
      'Cross Creek Ranch, Cinco Ranch, and LaCenterra backyard and community events',
      'Family reunions with kids, grandparents, and multi-generational guest lists',
      'Easy access to Richmond, Fulshear, and surrounding Fort Bend County communities',
      'Corporate team events for energy sector and west-side Houston office parks',
    ],
    featuredOccasions: [
      'Quinceañeras','Graduation Parties','Birthday Parties',
      'Family Reunions','Corporate Events','Bachelorette Parties',
      'Anniversary Dinners','Neighborhood Block Parties','Holiday Gatherings','Gender Reveals & Baby Showers',
    ],
    faqSet: [
      {
        q: 'Do you serve all of Katy and the surrounding Fort Bend County area?',
        a: 'Yes — we cover all of Katy including Cinco Ranch, Cross Creek Ranch, LaCenterra, Firethorne, and the surrounding communities of Fulshear, Richmond, Rosenberg, and Missouri City. Most Katy locations are within our standard service zone with no added travel fee.',
      },
      {
        q: 'Can you handle a large Katy quinceañera or graduation party with 40–60 guests?',
        a: 'Absolutely — quinceañeras, graduation parties, and large family celebrations are our most common Katy bookings. For groups over 25, we bring two chef stations running in parallel. Groups of 40–60 guests typically wrap dinner in under two hours with dual stations.',
      },
      {
        q: 'How far in advance should I book for a weekend event in Katy?',
        a: 'For Friday and Saturday events, we recommend booking 2–3 weeks out. During Katy ISD graduation season (May–June) and major holidays, 4–5 weeks is safest. Weekday events can often be arranged with 5–7 days notice.',
      },
      {
        q: 'What do guests need to provide for a Katy backyard hibachi?',
        a: 'Just tables and chairs for your guests. We bring the teppan grill, propane, all proteins, vegetables, rice, noodles, sauces, plates, and utensils — and we handle all setup and cleanup after the meal.',
      },
      {
        q: 'Can you cook at a Katy community clubhouse, HOA pavilion, or private venue?',
        a: 'Yes — community clubhouses, HOA common areas, and private event spaces in Katy are fine as long as open-flame cooking is permitted. Check with your HOA or venue management and let us know the space dimensions when booking.',
      },
    ],
    testimonials: [
      {
        text: '"Threw my daughter\'s quinceañera reception in our Cinco Ranch backyard — 52 guests and two chef stations going at once. The whole crowd was glued to the grill the entire time. Food was incredible, fire tricks had everyone cheering. Best party decision we ever made."',
        name: 'Rosa M.',
        city: 'Katy, TX',
        event: 'Quinceañera Party',
        initials: 'RM',
      },
      {
        text: '"Katy graduation party for my son — 38 guests, outdoor backyard, chef had the onion volcano going and kids were completely losing their minds. Setup was fast, the yard was spotless when they left. Already thinking about booking again for Christmas."',
        name: 'Patricia & Carlos H.',
        city: 'Katy, TX',
        event: 'Graduation Party',
        initials: 'PH',
      },
      {
        text: '"Used Hibachi Connect for our team offsite at a Cross Creek Ranch property — 30 employees, evening outdoor setup. Way more memorable than any restaurant we\'ve tried. Every single person said it was the highlight of the year."',
        name: 'Kevin S.',
        city: 'Katy, TX',
        event: 'Corporate Team Event',
        initials: 'KS',
      },
    ],
    uniqueIntroVariant: 15,
    uniqueWhyUsVariant: 3,
    uniqueClosingVariant: 15,
  },

  'sugar-land': {
    cityName:    'Sugar Land',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     2,
    heroImage:   '/pics/hero-3.jpg',
    heroSubtitle: 'Private Hibachi Chef · Sugar Land, TX · Cultural Celebrations & Family Gatherings',
    nearbyCities: [
      'Houston','Katy','Pearland','Missouri City','Stafford',
      'Richmond','Rosenberg','Fulshear','Fresno','Sienna',
    ],
    nearbyMajorCities: ['Houston','Katy','Dallas','Austin'],
    localHighlights: [
      'Sugar Land\'s diverse communities — Indian, Chinese, Vietnamese, and Latino families — love the interactive hibachi experience',
      'First Colony, Riverstone, and Telfair neighborhood dinner parties for 15–40 guests',
      'Quinceañeras, Diwali celebrations, Lunar New Year gatherings, and cultural milestone events',
      'Sugar Land Town Square and Constellation Field area corporate and team events',
      'Easy coverage of Missouri City, Stafford, Fresno, and all Fort Bend County suburbs',
      'Graduation season events for Fort Bend ISD students and families',
    ],
    featuredOccasions: [
      'Quinceañeras','Birthday Milestones','Graduation Parties',
      'Family Reunions','Cultural Celebrations','Corporate Lunches',
      'Bachelorette Weekends','Anniversary Dinners','Holiday Gatherings','Multi-Generational Gatherings',
    ],
    faqSet: [
      {
        q: 'Do you serve Sugar Land and all of Fort Bend County?',
        a: 'Yes — we cover all of Sugar Land including First Colony, Riverstone, Telfair, New Territory, and Sugar Creek, plus Missouri City, Stafford, Fresno, Sienna Plantation, Richmond, and Rosenberg. Most Fort Bend County locations fall within our standard service area.',
      },
      {
        q: 'Can you accommodate a large multi-cultural family celebration in Sugar Land?',
        a: 'Absolutely — Sugar Land\'s diverse communities are some of our most enthusiastic hosts. Whether it\'s a quinceañera, a milestone birthday for an extended family, a Diwali gathering, or a Lunar New Year celebration, our chefs are experienced with large guest lists and multi-generational crowds. We can customize the menu and bring two chef stations for groups over 25.',
      },
      {
        q: 'What menu options do you offer for dietary restrictions common in Sugar Land?',
        a: 'We accommodate most dietary preferences including halal-style preparations, vegetarian and vegan menus (tofu, extra vegetables, mushrooms), shellfish-free setups, and gluten-aware options. Let us know your guests\' needs when booking and we\'ll customize the menu accordingly.',
      },
      {
        q: 'How much space is needed for a hibachi setup in a Sugar Land home?',
        a: 'A flat, stable area of at least 10×10 ft for the grill and chef, with 2–3 ft of clearance around it for guests. Most Sugar Land backyards, covered patios, and large garages work perfectly. We\'ll confirm your space fits during the booking conversation.',
      },
      {
        q: 'How far in advance should I book a Sugar Land event?',
        a: 'For weekend events, 2–3 weeks ahead is recommended. For graduation parties and quinceañeras during the May–June peak season, book 4–5 weeks out. Weekday and evening mid-week events can often be arranged with 5–7 days notice.',
      },
    ],
    testimonials: [
      {
        text: '"We hosted a milestone birthday dinner for my mom in our First Colony backyard — 40 guests, very multi-cultural crowd. The chef was warm, funny, and adapted perfectly to everyone. Food was outstanding. Multiple guests asked for the booking info before the night was over."',
        name: 'Ananya P.',
        city: 'Sugar Land, TX',
        event: 'Birthday Celebration',
        initials: 'AP',
      },
      {
        text: '"Quinceañera after-dinner reception in Riverstone — 48 guests, two stations, chef had the whole family cheering. My daughter said it was the highlight of her entire quinceañera weekend. Absolutely magical."',
        name: 'Elena V.',
        city: 'Sugar Land, TX',
        event: 'Quinceañera Party',
        initials: 'EV',
      },
      {
        text: '"Fort Bend ISD graduation party — 35 guests in our Telfair backyard. Chef showed up on time, set up fast, and had an incredible energy all night. Kids loved the fire tricks, grandparents loved the food. Zero mess left behind."',
        name: 'Michael & Diane C.',
        city: 'Sugar Land, TX',
        event: 'Graduation Party',
        initials: 'MC',
      },
    ],
    uniqueIntroVariant: 16,
    uniqueWhyUsVariant: 2,
    uniqueClosingVariant: 16,
  },

  'the-woodlands': {
    cityName:    'The Woodlands',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     0,
    heroImage:   '/pics/hero-4.jpg',
    heroSubtitle: 'Hibachi at Home · The Woodlands, TX · Backyard Dining & Corporate Events',
    nearbyCities: [
      'Spring','Conroe','Humble','Tomball','Kingwood',
      'Cypress','Houston','Porter','New Caney','Magnolia',
    ],
    nearbyMajorCities: ['Houston','Katy','Sugar Land','Dallas'],
    localHighlights: [
      'The Woodlands\' large custom backyards and wooded properties are ideal for elevated outdoor dining experiences',
      'Corporate team events for ExxonMobil, Hewlett Packard, and North Houston energy corridor companies',
      'Hughes Landing, Town Green Park, and Creekside Park neighborhood dinner parties',
      'Lakeside and waterfront properties along Lake Woodlands for special occasion dinners',
      'Spring, Tomball, and Conroe coverage — we serve all of North Harris and Montgomery County',
      'Upscale bachelorette weekends, anniversary dinners, and milestone birthday celebrations',
    ],
    featuredOccasions: [
      'Birthday Milestones','Corporate Retreats','Anniversary Dinners',
      'Bachelorette Weekends','Graduation Celebrations','Family Reunions',
      'Client Appreciation Dinners','Holiday Office Parties','Backyard Dinner Parties','Date Nights',
    ],
    faqSet: [
      {
        q: 'Do you serve The Woodlands and surrounding Montgomery County communities?',
        a: 'Yes — we cover all of The Woodlands villages including Creekside Park, Hughes Landing, Town Green, Sterling Ridge, and Cochran\'s Crossing, plus Spring, Tomball, Conroe, Humble, Kingwood, and Magnolia. Most locations are within our standard service area with no travel fee.',
      },
      {
        q: 'Can you set up a hibachi event on a large wooded or lakeside property in The Woodlands?',
        a: 'Absolutely — The Woodlands\' larger residential properties, covered patios, and lakeside spaces are some of our favorite event settings. We need a flat, stable surface for the grill (at least 10×10 ft) and vehicle access to the setup area. Tell us about your property when booking and we\'ll advise on the best configuration.',
      },
      {
        q: 'Do you handle corporate events for The Woodlands\' major employers?',
        a: 'Yes — corporate team events are a significant part of our North Houston business. We\'ve handled client appreciation dinners, team offsites, and company celebrations for energy sector, tech, and healthcare companies in The Woodlands corridor. For groups over 25, we bring two chef stations. For 50+, we scale accordingly.',
      },
      {
        q: 'What is the lead time for a weekend event in The Woodlands?',
        a: 'For Friday and Saturday evenings, booking 2–3 weeks ahead is recommended. For corporate events, milestone celebrations, or peak season (May–June, November–December), 4–5 weeks is safest. Weekday events can often be arranged with 5–7 days notice.',
      },
      {
        q: 'Can you set up at a country club, HOA clubhouse, or private event space in The Woodlands area?',
        a: 'Yes — we regularly work with private venues, country club outdoor spaces, and HOA community areas in The Woodlands. Confirm that open-flame cooking is permitted at your venue and let us know the space layout. We\'ll handle everything else.',
      },
    ],
    testimonials: [
      {
        text: '"Anniversary dinner at our Creekside Park home — 20 guests, outdoor patio setup, absolutely beautiful evening. The chef was polished, professional, and put on a real show. My husband said it was the best dinner party we\'ve ever hosted. Already planning our next one."',
        name: 'Laura & Stephen B.',
        city: 'The Woodlands, TX',
        event: 'Anniversary Dinner',
        initials: 'LB',
      },
      {
        text: '"Client appreciation dinner for 30 people at our Sterling Ridge property. Chef arrived on time, setup was flawless, and every client was raving about it. This is now our go-to corporate entertainment. Significantly better than any restaurant we\'ve tried."',
        name: 'Robert A.',
        city: 'The Woodlands, TX',
        event: 'Client Appreciation Dinner',
        initials: 'RA',
      },
      {
        text: '"Bachelorette weekend in The Woodlands — hibachi night was an absolute hit. The chef had so much energy and kept everyone laughing the whole time. Shrimp toss, fire tricks, the whole experience. Best night of the entire weekend."',
        name: 'Megan T.',
        city: 'The Woodlands, TX',
        event: 'Bachelorette Party',
        initials: 'MT',
      },
    ],
    uniqueIntroVariant: 17,
    uniqueWhyUsVariant: 0,
    uniqueClosingVariant: 17,
  },

  'san-antonio': {
    cityName:    'San Antonio',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     1,
    heroImage:   '/pics/hero-4.jpg',
    heroSubtitle: 'Quinceañeras · Family Reunions · Cultural Celebrations · Serving Greater San Antonio',
    nearbyCities: [
      'New Braunfels','Boerne','Schertz','Universal City','Converse',
      'Helotes','Leon Valley','Alamo Heights','Stone Oak','Kyle',
    ],
    nearbyMajorCities: ['Houston','Austin','Dallas','Fort Worth'],
    localHighlights: [
      'Quinceañeras and large family celebrations across the San Antonio metro and into the Hill Country',
      'Stone Oak, Alamo Heights, Helotes, and Boerne backyard dinner parties for 15–50 guests',
      'Multi-generational family reunions — three generations, one grill, one unforgettable evening',
      'Cultural milestone events: quinceañeras, baptisms, communions, and heritage celebrations',
      'Military homecomings and JBSA community events — we serve the full San Antonio military community',
      'New Braunfels and Hill Country vacation property events — we travel beyond city limits',
    ],
    featuredOccasions: [
      'Quinceañeras','Family Reunions','Birthday Parties',
      'Holiday Gatherings','Graduation Parties','Bachelorette Parties',
      'Anniversary Dinners','Military Homecomings','Neighborhood Block Parties','Corporate Events',
    ],
    faqSet: [
      {
        q: 'Do you serve all of San Antonio and surrounding communities?',
        a: 'Yes — we cover all of San Antonio including Stone Oak, Alamo Heights, Helotes, Leon Valley, Castle Hills, Schertz, Universal City, Converse, and far west and south San Antonio. We also travel to New Braunfels, Boerne, and Hill Country communities. Most locations within 35 miles of central San Antonio have no travel fee.',
      },
      {
        q: 'Can you handle a large quinceañera or family reunion in San Antonio?',
        a: 'Absolutely — quinceañeras and large family celebrations are our most-requested events in the San Antonio area. For groups over 25, we bring two chef stations. For 50–80 guest quinceañeras and reunions, we scale accordingly. Our chefs are experienced with multi-generational guest lists and the kind of large-format celebrations that San Antonio families are known for.',
      },
      {
        q: 'How does San Antonio\'s weather affect outdoor hibachi events?',
        a: 'San Antonio\'s mild fall and spring make those ideal outdoor hibachi windows — October through April is excellent weather for evening events. Summer events (June–August) are best scheduled after 6 PM to avoid peak heat. We operate year-round and have covered-patio and indoor-adjacent setups for hot weather and occasional winter evenings.',
      },
      {
        q: 'Can you accommodate cultural dietary needs for San Antonio events?',
        a: 'Yes — we work with a wide range of dietary preferences including vegetarian and vegan plates (tofu, extra vegetables, mushrooms), shellfish-free menus, halal-style preparations where possible, and gluten-aware setups. Let us know your guests\' needs at booking and we\'ll customize the menu accordingly.',
      },
      {
        q: 'Can you travel to New Braunfels, Boerne, or Hill Country vacation properties?',
        a: 'Yes — we regularly travel to New Braunfels, Boerne, Canyon Lake, and Hill Country vacation rentals and ranch properties. For locations more than 35 miles from central San Antonio, a travel fee may apply and will be disclosed in your quote. Just describe your venue when requesting a quote and we\'ll confirm coverage and any fees upfront.',
      },
    ],
    testimonials: [
      {
        text: '"My daughter\'s quinceañera reception in Stone Oak — 55 guests, two chef stations, and the whole family was gathered around that grill cheering the entire time. Grandparents sat front-row and said it was the most fun they\'d had at a family event in years. Already planning to book for her brother\'s graduation."',
        name: 'Isabel R.',
        city: 'San Antonio, TX',
        event: 'Quinceañera Party',
        initials: 'IR',
      },
      {
        text: '"Family reunion for 60+ people in our Helotes backyard — three generations, cousins in from out of state. Chef had every single one of them around the grill from the first flame. Kids were going wild over the fire tricks, the adults couldn\'t stop eating. One of the best events our family has ever done."',
        name: 'The Garza Family',
        city: 'Helotes, TX',
        event: 'Family Reunion',
        initials: 'GF',
      },
      {
        text: '"Military homecoming celebration for my son — 30 family members, backyard setup. Chef made it feel like a real celebration, not just a dinner. The whole evening was exactly what we wanted for his return. Showed up on time, cooked an incredible meal, left the yard spotless."',
        name: 'Donna & Robert M.',
        city: 'San Antonio, TX',
        event: 'Military Homecoming',
        initials: 'DM',
      },
    ],
    uniqueIntroVariant: 13,
    uniqueWhyUsVariant: 1,
    uniqueClosingVariant: 13,
  },

  'fort-worth': {
    cityName:    'Fort Worth',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     0,
    heroImage:   '/pics/hero-1.jpg',
    heroSubtitle: 'Backyard Hibachi · Fort Worth, TX · Authentic Texas Entertaining',
    nearbyCities: [
      'Arlington','Southlake','Keller','Colleyville','Grapevine',
      'Burleson','Mansfield','Aledo','Benbrook','Crowley',
    ],
    nearbyMajorCities: ['Dallas','Houston','Austin','Waco'],
    localHighlights: [
      'Southlake, Colleyville, and Keller backyard dinner parties for 15–40 guests',
      'Alliance corridor and North Fort Worth corporate team events and company cookouts',
      'Genuine Texas backyard entertaining — an upgrade on the usual BBQ catering setup',
      'Ranch and rural property events outside the city — we travel with the full grill and setup',
      'Football season game-day parties for Cowboys and TCU Horned Frogs watch events',
      'Arlington, Burleson, and west DFW coverage — we serve the full western Metroplex',
    ],
    featuredOccasions: [
      'Backyard BBQ Alternatives','Birthday Parties','Football Watch Parties',
      'Corporate Events','Graduation Parties','Family Reunions',
      'Anniversary Dinners','Bachelorette Parties','Ranch & Property Events','Neighborhood Cookouts',
    ],
    faqSet: [
      {
        q: 'Do you serve all of Fort Worth and the western DFW area?',
        a: 'Yes — we cover all of Fort Worth and the surrounding communities including Southlake, Colleyville, Keller, Grapevine, Arlington, Burleson, Mansfield, Crowley, Aledo, Benbrook, and the Alliance corridor. Most locations within 35 miles of central Fort Worth have no travel fee.',
      },
      {
        q: 'Can you set up at a ranch or rural property near Fort Worth?',
        a: 'Absolutely — ranch properties, rural land, and large private venues outside the city are no problem. We need a flat, stable surface for the grill (at least 10×10 ft) and vehicle access to the setup area. For locations more than 35 miles from central Fort Worth, a travel fee may apply and will be disclosed in your quote.',
      },
      {
        q: 'Is private hibachi a better option than BBQ catering for a Fort Worth event?',
        a: 'Per-head cost is comparable to quality BBQ catering — around $60/adult — but hibachi includes a live chef performance at no extra charge. A BBQ caterer drops off food; we stay, cook in front of your guests, entertain throughout the meal, and handle complete cleanup. Most Fort Worth hosts who try hibachi say they\'ll never go back to the catering truck format.',
      },
      {
        q: 'What\'s the booking lead time for a Fort Worth weekend event?',
        a: 'For Friday and Saturday evenings, booking 2–3 weeks ahead is recommended. For football season weekends, holiday parties, and graduation events, 3–4 weeks is safer. Weekday events can usually be arranged with 5–7 days notice.',
      },
      {
        q: 'Can you handle a large corporate event or company cookout in the Fort Worth area?',
        a: 'Yes — corporate team events, client appreciation dinners, and company cookouts are a major part of our Fort Worth business. For groups over 25, we bring two chef stations. For 50–100+ employee events in the Alliance corridor or corporate parks, we configure multi-station setups and provide a full timeline in your quote.',
      },
    ],
    testimonials: [
      {
        text: '"Backyard birthday party in Southlake — 35 guests, outdoor setup, chef had everyone gathered around the grill within two minutes of lighting it. Fire tricks, shrimp tosses, the works. Nobody went back inside the entire evening. Best party I\'ve thrown in years."',
        name: 'Craig & Melissa T.',
        city: 'Southlake, TX',
        event: 'Birthday Party',
        initials: 'CT',
      },
      {
        text: '"Annual company cookout in the Alliance area — 55 employees, two chef stations. The whole team said it was the best work event we\'d done since the company started. We\'ve done BBQ every year before this. Never doing BBQ again."',
        name: 'Nathan W.',
        city: 'Fort Worth, TX',
        event: 'Corporate Cookout',
        initials: 'NW',
      },
      {
        text: '"Cowboys watch-party birthday for my husband in Keller — 28 people, hibachi during pre-game, game during dinner. Chef had everyone in the best mood going into kickoff. Food was incredible. Already booked for next season."',
        name: 'Sandra & Joel K.',
        city: 'Keller, TX',
        event: 'Birthday Watch Party',
        initials: 'SK',
      },
    ],
    uniqueIntroVariant: 14,
    uniqueWhyUsVariant: 0,
    uniqueClosingVariant: 14,
  },

  // Template for adding new cities:
  // [city-slug]: {
  //   cityName: '',
  //   stateName: '',
  //   stateAbbr: '',
  //   stateSlug: '',
  //   variant: 0 | 1 | 2,
  //   heroImage: '/brand/hero-bg.jpg',
  //   nearbyCities: [],
  //   nearbyMajorCities: [],
  //   localHighlights: [],
  //   featuredOccasions: [],
  //   faqSet: [],
  //   testimonials: [],
  //   uniqueIntroVariant: 0 | 1 | 2,
  //   uniqueWhyUsVariant: 0 | 1 | 2,
  //   uniqueClosingVariant: 0 | 1 | 2,
  // },
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT ROTATION ENGINE
// Each table has 5 entries. City variant (0–4) selects the row, giving every
// city a genuinely distinct voice. Add more entries to scale further.
// ─────────────────────────────────────────────────────────────────────────────

// ── 5 Hero subtitles ─────────────────────────────────────────────────────────
export const HERO_SUBTITLES = [
  (city, state) => `Private Chef • Backyard Parties • ${city} Hibachi Experience`,
  (city, state) => `Live Teppanyaki • Any Occasion • Delivered to Your ${city} Home`,
  (city, state) => `Mobile Hibachi Chef • Fire Cooking • Serving All of ${state}`,
  (city, state) => `${city}'s Favorite Private Chef Experience • From $60/Adult`,
  (city, state) => `Book a Teppanyaki Chef in ${city} • Full Setup & Cleanup Included`,
]

// ── Intro variants — global 0–4 + Texas-specific 5–9 ────────────────────────
// 0 = Entertainment-first  1 = Convenience-first  2 = Craft/food-first
// 3 = Social/memory-first  4 = Value-first
// 5–9 = Texas variants (imported from texasData.js — see TEXAS_INTRO_VARIANTS)
// Texas city pages receive uniqueIntroVariant of 5+v, selecting entries 5–9.
const GLOBAL_INTRO_VARIANTS = [
  // ── 0: Entertainment-first ─────────────────────────────────────────────────
  {
    angle:    'entertainment',
    headline: (city) => `The Show Comes to You in ${city}`,
    opening:  (city, state) =>
      `Hibachi dining has always been as much about the performance as the food — and Hibachi Connect brings that whole experience directly to your ${city} backyard. A certified teppanyaki chef arrives at your home with a full propane grill, fresh ingredients, and the kind of fire-trick showmanship that turns an ordinary dinner into the event your guests talk about for years.`,
    middle:   (city, state) =>
      `From the first flying shrimp to the flaming onion volcano, every minute of the cook is pure entertainment. Your chef engages the whole crowd — kids, grandparents, first-timers, hibachi veterans — and personally prepares every plate on the spot. No shared platters. No cold food. Every bite cooked to order, right in front of you.`,
    closing:  (city, state) =>
      `We've built the service around one idea: the hibachi experience should be even better at home than at the restaurant. No waiting for a table, no crowded dining room, no rushed turns. Just your people, your space, and a chef who owns the room. That's hibachi at home in ${city} — and it starts at $60 per adult.`,
  },
  // ── 1: Convenience-first ───────────────────────────────────────────────────
  {
    angle:    'convenience',
    headline: (city) => `Forget the Restaurant. We Come to You, ${city}.`,
    opening:  (city, state) =>
      `Planning a dinner event in ${city} doesn't have to mean hunting for a table big enough for your whole group, splitting the party into separate cars, or spending the evening managing food orders across the room. With Hibachi Connect, you pick the date — we handle everything else. A certified teppanyaki chef shows up to your ${city} home or backyard with a full propane grill, fresh ingredients, and complete setup, arriving 5–10 minutes before the scheduled start time.`,
    middle:   (city, state) =>
      `Once the grill heats up, your job is done. The chef works the crowd from first flame to final plate — individual proteins cooked to order, layered fried rice, grilled vegetables, fire tricks, flying shrimp, the whole show — while keeping a genuine conversation going with everyone around the station. Kids get the front-row excitement. Grandparents get a seat and a performance they won't stop talking about. By the time the last plate goes out, the crowd has connected in a way no restaurant seating arrangement can manufacture.`,
    closing:  (city, state) =>
      `We've run hundreds of events across ${state} — quinceañeras, multi-generational family reunions, graduation parties, corporate team dinners, big backyard birthdays, and ordinary Saturdays that became the night your guests still bring up months later. If you can gather 10 people in ${city}, we can make it the evening nobody forgets. Pricing starts at $60 per adult, $600 event minimum. Setup and cleanup fully included.`,
  },
  // ── 2: Craft/food-first ────────────────────────────────────────────────────
  {
    angle:    'craft',
    headline: (city) => `Real Teppanyaki Craft, Right in Your ${city} Backyard`,
    opening:  (city, state) =>
      `There's a reason teppanyaki has endured for decades as one of the most celebrated cooking styles in the world: it rewards craft. The sear of a steak at the perfect temperature. Fried rice built in layers, grain by grain. Shrimp that hits the hot steel at exactly the right moment. Hibachi Connect's certified chefs bring that technical precision to your ${city} home — with none of the restaurant markup.`,
    middle:   (city, state) =>
      `Every event menu is sourced fresh: hand-selected proteins, seasonal vegetables, and house-made sauces prepared in advance. Your chef arrives with everything prepped for execution — which means from the moment the grill heats up, every second is dedicated to cooking and performance. No shortcuts. No pre-cooked staging. Everything your guests eat is made fresh on the teppan, in front of them.`,
    closing:  (city, state) =>
      `We serve ${city} and surrounding areas with the same standards we'd hold any professional kitchen to — because that's what your guests deserve. Every guest picks 2 proteins at $60 per adult, with premium upgrades like filet mignon and lobster tail available for any event.`,
  },
  // ── 3: Social/memory-first ────────────────────────────────────────────────
  {
    angle:    'social',
    headline: (city) => `The Night Your ${city} Guests Will Still Be Talking About`,
    opening:  (city, state) =>
      `Some dinners are forgettable. This one won't be. When you book a private hibachi chef in ${city}, you're not just feeding people — you're giving them a shared experience. The kind where everyone is facing the same direction, watching the same show, laughing at the same fire tricks, and reacting to the same perfectly timed shrimp toss. That energy is contagious, and it makes for a completely different kind of gathering.`,
    middle:   (city, state) =>
      `Hibachi Connect has hosted everything from 10-person anniversary dinners to 120-person corporate parties across ${state}. What we hear most from hosts afterward isn't about the food (though the food is excellent). It's that the chef made strangers feel like old friends by the time dessert came around. The teppanyaki grill creates a social center — a reason for everyone to look up from their phones and just be present.`,
    closing:  (city, state) =>
      `Whether you're celebrating something huge or just making an ordinary weekend extraordinary, private hibachi in ${city} is the kind of thing people request at the next event. Book a certified chef through Hibachi Connect. Starting at $60 per adult, $600 minimum. Setup and cleanup fully included.`,
  },
  // ── 4: Value-first ────────────────────────────────────────────────────────
  {
    angle:    'value',
    headline: (city) => `More Than a Restaurant Night — and for Less Than You'd Expect`,
    opening:  (city, state) =>
      `A hibachi restaurant in ${city} for a group of 20 guests? You're looking at two-hour waits, split-table seating, fixed menus, and a bill north of $1,500 before tip. Private hibachi at home through Hibachi Connect serves those same 20 guests for $60 per adult — everyone at the same table, with a dedicated chef, customized proteins, and a show built around your crowd.`,
    middle:   (city, state) =>
      `What's included in that price would surprise most people. Your chef arrives 5–10 minutes before start time to set up the teppan grill at your ${city} home. They bring all ingredients: fresh proteins, vegetables, rice, and house-made sauces. They cook every plate to order. They entertain throughout. And when the last course is done, they break down and clean up completely. Zero additional labor cost. Zero tip anxiety. Zero logistics on your end.`,
    closing:  (city, state) =>
      `The $600 event minimum covers 8–10 guests at the standard rate. For larger groups, add-on proteins (lobster tail, filet, scallops) and premium packages are available. Travel fees may apply outside ${city}'s metro area. Get a free, no-obligation quote today — most ${city} bookings are confirmed within a few hours.`,
  },
]

// Combined array:
// 0–4   global
// 5–9   Texas generic
// 10–17 Texas city-specific (Houston=10, Dallas=11, Austin=12, SanAntonio=13, FortWorth=14, Katy=15, SugarLand=16, Woodlands=17)
// 18–22 Florida generic
// 23–32 Florida city-specific (Miami=23, Orlando=24, Tampa=25, Jacksonville=26, FortLauderdale=27, Sarasota=28, Naples=29, WestPalm=30, Destin=31, StPete=32)
// Components use `INTRO_VARIANTS[uniqueIntroVariant % INTRO_VARIANTS.length]`
// 0–4: Global · 5–9: Texas generic · 10–17: Texas city · 18–22: Florida generic · 23–32: Florida city · 33–37: NC generic · 38–47: NC city
export const INTRO_VARIANTS = [...GLOBAL_INTRO_VARIANTS, ...TEXAS_INTRO_VARIANTS, ...TEXAS_CITY_INTROS, ...FLORIDA_INTRO_VARIANTS, ...FLORIDA_CITY_INTROS, ...NC_INTRO_VARIANTS, ...NC_CITY_INTROS]

// ── 5 Why-Us variants ────────────────────────────────────────────────────────
export const WHY_US_VARIANTS = [
  // 0: Performance-led
  {
    pill: 'Why Choose Us',
    headline: (city) => `Why ${city} Keeps Booking Hibachi Connect`,
    items: (city) => [
      { icon: '🔥', title: 'Live Fire Performance',         desc: 'Volcano tricks, mid-air flips, and fire shows — your chef entertains the entire crowd while cooking every plate to order.' },
      { icon: '🍱', title: 'Fresh, Made-to-Order Meals',   desc: 'No pre-staged food. Every protein, every bowl of fried rice, every vegetable is cooked fresh on the teppan in front of your guests.' },
      { icon: '✅', title: 'We Handle Everything',          desc: 'Arrives 5–10 minutes before start, full service throughout, complete cleanup at the end. Your only job is enjoying the night.' },
      { icon: '📍', title: `Serving All of ${city}`,       desc: 'Backyard, covered patio, garage, rooftop, or rented venue — we bring the grill to wherever you are.' },
      { icon: '👥', title: 'Scales to Any Group',          desc: 'Ten guests at a dinner party or 200 at a corporate event — we scale the chef stations to fit your headcount.' },
      { icon: '💯', title: 'Perfect Satisfaction Record',  desc: 'Every event backed by our 100% satisfaction commitment. We don\'t leave until the host is happy.' },
    ],
  },
  // 1: Ease-led
  {
    pill: 'The Difference',
    headline: (city) => `The Easiest Event You'll Ever Host in ${city}`,
    items: (city) => [
      { icon: '👨‍🍳', title: 'Certified Teppanyaki Chefs',  desc: 'Every chef trains in authentic Japanese hibachi technique — knife skills, fire performance, timing, and crowd engagement.' },
      { icon: '🏡', title: 'Fully Mobile Setup',           desc: 'Backyard, patio, driveway, or indoors with ventilation — we adapt to your space and make it work.' },
      { icon: '📋', title: 'No Surprise Pricing',          desc: '$60/adult, $30/child, $600 event minimum. Your quote is locked before the event. No hidden charges, ever.' },
      { icon: '🧹', title: 'Arrive Clean, Leave Clean',   desc: 'We set up early and clean up completely. Many hosts say it\'s the easiest party they\'ve thrown in years.' },
      { icon: '🎯', title: 'Fast, Responsive Booking',     desc: `Submit a request and get a quote within hours. Most ${city} events are confirmed the same day.` },
      { icon: '🍤', title: 'Menu Built Around You',        desc: 'Choose proteins, add premium upgrades, mix and match per guest preference. We customize, you enjoy.' },
    ],
  },
  // 2: Differentiation-led
  {
    pill: 'What Sets Us Apart',
    headline: (city) => `What Separates Our ${city} Hibachi Service`,
    items: (city) => [
      { icon: '🎭', title: 'Dinner + Entertainment in One', desc: 'No restaurant can give your guests a front-row seat to their own meal being cooked live. We can.' },
      { icon: '🥩', title: 'Premium Protein Options',       desc: 'Chicken, steak, shrimp, salmon, scallops, filet mignon, lobster tail — build a custom menu for any occasion.' },
      { icon: '📞', title: 'Same-Day Response',             desc: 'We pick up, respond, and quote fast. No waiting days for a callback on your event inquiry.' },
      { icon: '🌆', title: `All ${city} Areas Covered`,    desc: `From the city center to the outer suburbs — if you're within range of ${city}, we come to you.` },
      { icon: '🚀', title: 'Zero-Effort for Hosts',        desc: 'We set up, cook, serve, and disappear. Guests think you planned something extraordinary. You barely lifted a finger.' },
      { icon: '⭐', title: 'Rated 5 Stars Nationwide',     desc: 'Perfect ratings across 200+ events. The experience speaks for itself — and so do our reviews.' },
    ],
  },
  // 3: Trust-led
  {
    pill: 'Why Families Trust Us',
    headline: (city) => `Why ${city} Families Trust Hibachi Connect`,
    items: (city) => [
      { icon: '🔐', title: 'Fully Insured Service',         desc: 'Every Hibachi Connect event is fully covered. You can host confidently knowing the professionals have it handled.' },
      { icon: '📅', title: 'Reliable, On-Time Chefs',       desc: 'We arrive 5–10 minutes before your scheduled start — every time. Your guests are never left waiting for the food to start.' },
      { icon: '🌟', title: '5.0 Star Rating',               desc: 'Every event is reviewed. Every chef is accountable. We maintain a perfect record because anything less isn\'t acceptable.' },
      { icon: '💬', title: 'Real Communication',            desc: 'You talk to a real person when you book, not a chatbot. We answer questions before, during, and after your event.' },
      { icon: '🔄', title: 'Repeat Hosts Love Us',          desc: 'Over 40% of our events are from returning hosts or referrals. That\'s the best review we could ask for.' },
      { icon: '🤝', title: 'Satisfaction Guaranteed',       desc: 'If something isn\'t right on the night, we make it right. No arguments, no excuses.' },
    ],
  },
  // 4: Local pride-led
  {
    pill: 'Our Track Record',
    headline: (city) => `Built for ${city}'s Backyard Culture`,
    items: (city) => [
      { icon: '🏆', title: `${city}'s Top-Rated Choice`,   desc: `Hundreds of ${city}-area families have hosted their most memorable dinners with Hibachi Connect. We're not new to this.` },
      { icon: '🎉', title: 'Every Occasion Covered',        desc: 'Birthdays, bachelorette parties, graduations, corporate events, holidays, date nights — we\'ve done it all in this area.' },
      { icon: '🔥', title: 'Fire Tricks Included',          desc: 'The onion volcano, flaming shrimp toss, and chef juggling aren\'t extras — they\'re part of every single event.' },
      { icon: '🍽️', title: 'Restaurant Quality at Home',   desc: 'Premium teppanyaki-grade ingredients, freshly cooked to order. Better than most restaurants, without leaving your yard.' },
      { icon: '📦', title: 'Everything Provided',           desc: 'Grill, propane, ingredients, sauces, plates, chopsticks. You bring chairs. We bring everything else.' },
      { icon: '🌿', title: 'Indoor or Outdoor',             desc: 'No backyard? No problem. Covered patios, garages, and ventilated indoor spaces work just as well.' },
    ],
  },
]

// ── Closing CTA variants — global 0–4 + Texas 5–9 ───────────────────────────
const GLOBAL_CLOSING_VARIANTS = [
  {
    headline: (city) => `Ready to Book Hibachi at Home in ${city}?`,
    sub:      (city) => `Weekend dates in ${city} fill up fast — especially for birthdays and summer evenings. Lock in your date before it's gone.`,
    urgency:  'Weekend slots fill 2–3 weeks out. Reserve yours today.',
    btnPrimary: 'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },
  {
    headline: (city) => `Plan Your ${city} Hibachi Party Today`,
    sub:      (city) => `Tell us your date, guest count, and location — we'll build a custom quote for your ${city} event within hours.`,
    urgency:  'Limited weekend availability. Don\'t wait to reserve.',
    btnPrimary: 'Request a Quote',
    btnSecondary: 'See How It Works',
  },
  {
    headline: (city) => `Your ${city} Guests Are Going to Love This`,
    sub:      (city) => `Fire tricks, fresh food, zero cleanup — hibachi at home in ${city} is the event upgrade your crowd has been waiting for.`,
    urgency:  'Weekend slots book 3+ weeks ahead during peak season.',
    btnPrimary: 'Book Now',
    btnSecondary: 'Call Us Instead',
  },
  {
    headline: (city) => `The Best Event You'll Host in ${city} This Year`,
    sub:      (city) => `Don't overthink it. Pick a date, get a quote, and let a certified hibachi chef handle the rest. It's that simple.`,
    urgency:  'Most quotes confirmed same day. Get yours now.',
    btnPrimary: 'Get a Free Quote',
    btnSecondary: 'See Pricing',
  },
  {
    headline: (city) => `Bring the Fire to Your ${city} Backyard`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins. Full setup and cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  'Availability fills fast on weekend evenings — act early.',
    btnPrimary: 'Check Availability',
    btnSecondary: 'Learn More',
  },
]

// Global 0–4 · Texas generic 5–9 · Texas city 10–17 · Florida generic 18–22 · Florida city 23–32 · NC generic 33–37 · NC city 38–47
export const CLOSING_VARIANTS = [...GLOBAL_CLOSING_VARIANTS, ...TEXAS_CLOSING_VARIANTS, ...TEXAS_CITY_CLOSINGS, ...FLORIDA_CLOSING_VARIANTS, ...FLORIDA_CITY_CLOSINGS, ...NC_CLOSING_VARIANTS, ...NC_CITY_CLOSINGS]

// ── Shared FAQ pool — 15 questions, city pages draw from this + city-specific ─
// Each FAQ has a `pool` tag so pages can filter by topic for variety
export const SHARED_FAQ_POOL = [
  {
    pool: 'space',
    q: 'Can hibachi be set up indoors?',
    a: 'Yes — we can set up in any large indoor space with proper ventilation: an open garage, spacious living/dining area, or covered patio. Most of our events are outdoors, but we adapt to your situation. Minimum 10×10 ft clearance required and ventilation is essential for safety.',
  },
  {
    pool: 'space',
    q: 'How much space does the hibachi setup need?',
    a: 'Plan for a minimum 10×10 ft flat area for the grill and chef. Guests typically stand or sit in a horseshoe around the station. For groups of 20+, we recommend 2 ft of perimeter space per person around the cooking area.',
  },
  {
    pool: 'guests',
    q: 'Are kids welcome at hibachi events?',
    a: 'Absolutely — kids are usually the most enthusiastic guests at hibachi events. Children ages 4–12 are $30 each. Ages 3 and under eat free. The fire tricks and shrimp tosses are crowd favorites for younger guests. Just let your chef know the age range so they can adjust the show accordingly.',
  },
  {
    pool: 'logistics',
    q: 'Do you provide tables, chairs, or utensils?',
    a: 'We provide plates, chopsticks, and serving utensils for your guests. Tables and chairs are your responsibility. We bring all cooking equipment, the propane grill, and every ingredient and condiment needed for the meal.',
  },
  {
    pool: 'logistics',
    q: 'What happens if weather forces a cancellation?',
    a: 'We offer a full credit — no penalty — for weather-related cancellations made more than 24 hours before the event start. For outdoor-only spaces, we recommend having a covered backup plan during rainy seasons. We\'ll always work with you to reschedule.',
  },
  {
    pool: 'menu',
    q: 'Can we customize the menu or add premium proteins?',
    a: 'Yes — every menu is fully customizable. Standard includes 2 protein choices per person; Premium includes 3. Premium add-ons are available at any tier: lobster tail (+$15), filet mignon (+$10), scallops (+$5), gyoza (+$10), and more. Just let us know at booking.',
  },
  {
    pool: 'menu',
    q: 'Do you accommodate dietary restrictions or allergies?',
    a: 'We do our best to accommodate dietary needs. Please let us know in advance about any serious allergies. We can prepare vegetarian and gluten-free protein options (tofu, vegetables) and keep allergens separated during cooking.',
  },
  {
    pool: 'logistics',
    q: 'How far in advance should I book?',
    a: 'We recommend 1–2 weeks for weekday events and 2–3 weeks for weekend evenings. Summer, graduation season, and holidays book up quickly — reserve 4+ weeks out during peak periods. Weekday availability is generally easier to arrange on shorter notice.',
  },
  {
    pool: 'logistics',
    q: 'Do you cook at Airbnbs, vacation rentals, or event venues?',
    a: 'Yes — many of our events are at short-term rentals, rented halls, and private event spaces. Always confirm with the property host or venue manager that outdoor cooking and open-flame cooking is permitted before booking. We can advise on space requirements.',
  },
  {
    pool: 'logistics',
    q: 'What time does the chef arrive?',
    a: 'Chefs typically arrive 5–10 minutes before your scheduled event start time. The grill is ready, the station is arranged, and the cooking and show begin at your scheduled time. Cleanup happens immediately after the last course is served.',
  },
  {
    pool: 'pricing',
    q: 'Are there any hidden fees I should know about?',
    a: 'No hidden fees. Your price is $60/adult, $30/child (ages 4–12), $600 event minimum. Children 3 and under eat free. Travel fees may apply for locations more than 30 miles from our nearest chef base. All fees are disclosed and agreed upon before you book — nothing surprises you at the event.',
  },
  {
    pool: 'pricing',
    q: 'What\'s included in the event minimum?',
    a: 'The $600 event minimum covers 8–10 guests at the standard rate and includes the chef, grill, propane, all ingredients, sauces, plates, chopsticks, full setup, and complete cleanup. You simply provide the space and seating.',
  },
  {
    pool: 'experience',
    q: 'What fire tricks and entertainment can we expect?',
    a: 'Every Hibachi Connect chef is trained in classic teppanyaki showmanship: the flaming onion volcano, the flying shrimp toss, knife juggling, and heart/egg-and-butter fried rice. The exact routine varies by chef, but the entertainment is always a highlight.',
  },
  {
    pool: 'experience',
    q: 'How long does a hibachi event typically last?',
    a: 'Most events run 1.5 to 2 hours for a single session of 10–20 guests. Larger groups with multiple chef stations may run slightly longer. Your chef will pace the meal to match your event timeline — just let us know if you have specific timing needs.',
  },
  {
    pool: 'logistics',
    q: 'What if I need to cancel or reschedule my event?',
    a: 'Cancellations made 72+ hours before the event receive a full credit toward a future booking. Cancellations within 72 hours may be subject to a partial fee. We always work with hosts to find a new date rather than enforce penalties where possible.',
  },
]

// ── Related blog post data ───────────────────────────────────────────────────
// Pages pull from this list — tag-filtered by city variant for variety
export const BLOG_POSTS = [
  {
    slug:     'how-much-does-private-hibachi-cost',
    title:    'How Much Does a Private Hibachi Chef Cost?',
    excerpt:  'A complete breakdown of hibachi at home pricing — per-person rates, event minimums, add-ons, and what actually affects your final quote.',
    tag:      'Pricing',
    readTime: '5 min read',
    pool:     [0, 1, 2, 3, 4],
  },
  {
    slug:     'hibachi-at-home-vs-restaurant',
    title:    'Hibachi at Home vs. Hibachi Restaurant: Which Is Worth It?',
    excerpt:  'We break down the real cost, experience quality, and convenience differences between booking a private chef and going to a hibachi restaurant.',
    tag:      'Comparison',
    readTime: '6 min read',
    pool:     [0, 2, 4],
  },
  {
    slug:     'how-to-plan-a-backyard-hibachi-party',
    title:    'How to Plan a Backyard Hibachi Party (Complete Checklist)',
    excerpt:  'Everything you need to prepare before your private hibachi chef arrives — space setup, guest seating, timing, and the questions to ask your chef.',
    tag:      'Planning',
    readTime: '7 min read',
    pool:     [0, 1, 2, 3, 4],
  },
  {
    slug:     'hibachi-birthday-party-ideas',
    title:    '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',
    excerpt:  'From themed menus to chef performances, here\'s how to make a backyard hibachi birthday party truly unforgettable for any age group.',
    tag:      'Occasions',
    readTime: '5 min read',
    pool:     [0, 3],
  },
  {
    slug:     'hibachi-catering-corporate-events',
    title:    'Why Hibachi Catering Is the Best Choice for Corporate Events',
    excerpt:  'Team dinners, client entertainment, and office parties all benefit from the live-cooking energy of a private hibachi chef. Here\'s why.',
    tag:      'Corporate',
    readTime: '4 min read',
    pool:     [1, 2, 4],
  },
  {
    slug:     'what-to-expect-hibachi-chef-home',
    title:    'What to Expect When You Book a Private Hibachi Chef at Home',
    excerpt:  'A first-timer\'s guide: what happens from booking to cleanup, what the chef brings, what you need to provide, and what guests can look forward to.',
    tag:      'Guide',
    readTime: '6 min read',
    pool:     [0, 1, 3],
  },
  {
    slug:     'hibachi-bachelorette-party',
    title:    'Private Hibachi for Bachelorette Parties: The Ultimate Guide',
    excerpt:  'Why a private hibachi chef is the best pre-party activity for any bachelorette weekend — entertainment, custom drinks pairing, and zero logistics.',
    tag:      'Occasions',
    readTime: '5 min read',
    pool:     [0, 3, 4],
  },
  {
    slug:     'hibachi-menu-proteins-guide',
    title:    'The Complete Hibachi Menu Guide: Proteins, Sauces & Add-Ons',
    excerpt:  'Everything you can order at a private hibachi event — standard proteins, premium upgrades, appetizers, sauces, and how to build the perfect menu.',
    tag:      'Menu',
    readTime: '4 min read',
    pool:     [2, 4],
  },
]

// Get blog posts for a city based on its variant pool
export function getBlogPostsForCity(variant = 0, count = 3) {
  const v = variant % 5
  return BLOG_POSTS.filter(p => p.pool.includes(v)).slice(0, count)
}

// ── Pull N FAQs from the shared pool (excluding topics already in city faqSet) ─
export function getSupplementalFAQs(cityFaqSet = [], count = 4) {
  const usedQuestions = new Set(cityFaqSet.map(f => f.q.toLowerCase()))
  return SHARED_FAQ_POOL
    .filter(f => !usedQuestions.has(f.q.toLowerCase()))
    .slice(0, count)
}

// Helper: get city data by slug
export function getCityData(citySlug) {
  return CITY_DATA[citySlug] || null
}

// Helper: get all registered city slugs for generateStaticParams
export function getAllCitySlugs() {
  return Object.keys(CITY_DATA).map(slug => slug)
}

// ── SEO metadata generator — 5 title + 5 description patterns ───────────────
// Variant is derived from uniqueIntroVariant (0–4) so each city gets a
// distinct title structure that avoids duplicate-title penalties at scale.
const TITLE_TEMPLATES = [
  // 0 — location + brand (most direct)
  (city, state) => `Hibachi at Home in ${city}, ${state} | Hibachi Connect`,
  // 1 — service + city (chef-focused)
  (city, state) => `Private Hibachi Chef in ${city}, ${state} | Hibachi Connect`,
  // 2 — city-first (local SEO emphasis)
  (city, state) => `${city} Hibachi at Home — Private Chef from $60 | Hibachi Connect`,
  // 3 — action-oriented
  (city, state) => `Book a Hibachi Chef in ${city}, ${state} | Hibachi Connect`,
  // 4 — experience-forward
  (city, state) => `${city} Private Hibachi Experience — Backyard Teppanyaki | Hibachi Connect`,
]

const DESC_TEMPLATES = [
  // 0 — service + price + CTA
  (city, state) => `Book a private hibachi chef in ${city}, ${state}. Live teppanyaki at your home from $60/adult. Full setup & cleanup included. Get a free quote from Hibachi Connect today.`,
  // 1 — what's included + conversion
  (city, state) => `Hibachi at home in ${city}, ${state} — our chefs bring the grill, ingredients, and live-fire entertainment to your backyard. From $60/adult, $600 minimum. Get a free quote now.`,
  // 2 — city + comparison angle
  (city, state) => `Skip the restaurant. Hibachi Connect sends a certified teppanyaki chef to your ${city} home — everything provided, full cleanup included. Starting at $60/person in ${state}.`,
  // 3 — social proof + local
  (city, state) => `Rated 5 stars across 200+ events. Private hibachi chef in ${city}, ${state} — live cooking, fire tricks, and fresh teppanyaki at your home. From $60/adult with $600 minimum.`,
  // 4 — occasion + urgency
  (city, state) => `Planning a party in ${city}? A private hibachi chef brings the grill, food, and entertainment to your ${state} home. $60/adult · $600 min · Setup + cleanup included.`,
]

// 5 OG description variants (separate rotation for richer social previews)
const OG_DESC_TEMPLATES = [
  (city, state) => `A certified hibachi chef comes to your ${city} home with a full teppan grill, fresh ingredients, and live fire cooking. Starting at $60/adult. Book Hibachi Connect today.`,
  (city, state) => `Private teppanyaki at your ${city}, ${state} home — fire tricks, flying shrimp, and freshly cooked meals from $60/adult. Full setup & cleanup. Book Hibachi Connect.`,
  (city, state) => `Hibachi Connect brings restaurant-quality teppanyaki to your ${city} backyard. Certified chefs, premium ingredients, $60/adult. Get a free quote in minutes.`,
  (city, state) => `Your next ${city} party just got upgraded. A private hibachi chef handles everything — grill, food, entertainment, cleanup. From $60/adult. Book with Hibachi Connect.`,
  (city, state) => `Live hibachi cooking at your ${city} home. Our chefs perform, cook, and clean up — all for $60/adult with a $600 event minimum. Serving all ${state} areas.`,
]

export function generateCityMeta(cityData) {
  const { cityName, stateName, stateAbbr, stateSlug, uniqueIntroVariant = 0 } = cityData
  const v    = uniqueIntroVariant % 5
  const slug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return {
    title:       TITLE_TEMPLATES[v](cityName, stateName),
    description: DESC_TEMPLATES[v](cityName, stateName),
    keywords: [
      `hibachi ${cityName}`,
      `private hibachi chef ${cityName}`,
      `hibachi at home ${cityName}`,
      `hibachi at home ${cityName} ${stateAbbr}`,
      `hibachi catering ${cityName}`,
      `backyard hibachi ${cityName}`,
      `teppanyaki ${cityName}`,
      `teppanyaki chef ${cityName} ${stateName}`,
      `private chef ${cityName} hibachi`,
      `hibachi party ${cityName} ${stateAbbr}`,
    ].join(', '),
    canonical: `https://hibachiconnect.com/locations/${stateSlug}/${slug}`,
    og: {
      title:       `Hibachi at Home in ${cityName}, ${stateName} | Hibachi Connect`,
      description: OG_DESC_TEMPLATES[v](cityName, stateName),
      image:       cityData.heroImage
        ? `https://hibachiconnect.com${cityData.heroImage}`
        : 'https://hibachiconnect.com/pics/hero-1.jpg',
    },
    twitter: {
      title:       `Private Hibachi Chef in ${cityName}, ${stateAbbr} | Hibachi Connect`,
      description: `Book a certified hibachi chef in ${cityName}. $60/adult · full setup & cleanup · free quote. Hibachi Connect serves all ${stateName}.`,
      image:       cityData.heroImage
        ? `https://hibachiconnect.com${cityData.heroImage}`
        : 'https://hibachiconnect.com/pics/hero-1.jpg',
    },
  }
}

// ── JSON-LD Schema generators ────────────────────────────────────────────────
export function generateLocalBusinessSchema(cityData) {
  const { cityName, stateName, stateSlug } = cityData
  const slug    = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const pageUrl = `https://hibachiconnect.com/locations/${stateSlug}/${slug}`

  return {
    '@context': 'https://schema.org',
    '@type':    ['ProfessionalService', 'FoodEstablishment'],
    name:       'Hibachi Connect',
    url:        pageUrl,
    telephone:  '+12015653878',
    email:      'info@hibachiconnect.com',
    image:      'https://hibachiconnect.com/brand/logo.png',
    logo:       'https://hibachiconnect.com/brand/logo.png',
    description:`Private hibachi chef service in ${cityName}, ${stateName}. We bring a live teppanyaki grill, fresh ingredients, and full entertainment to your home or event venue. Starting at $60/adult.`,
    areaServed: {
      '@type': 'City',
      name:    cityName,
      containedInPlace: { '@type': 'State', name: stateName },
    },
    address: {
      '@type':           'PostalAddress',
      addressLocality:   cityName,
      addressRegion:     stateName,
      addressCountry:    'US',
    },
    priceRange:    '$$',
    servesCuisine: ['Japanese', 'Hibachi', 'Teppanyaki'],
    currenciesAccepted: 'USD',
    paymentAccepted:    'Cash, Credit Card, Venmo, Zelle',
    offers: [
      {
        '@type':       'Offer',
        name:          'Private Hibachi Chef — Adult Rate',
        price:         '60',
        priceCurrency: 'USD',
        description:   'Per adult — choose your proteins, fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, full setup and cleanup included. $600 event minimum.',
        availability:  'https://schema.org/InStock',
      },
      {
        '@type':       'Offer',
        name:          'Private Hibachi Chef — Child Rate',
        price:         '30',
        priceCurrency: 'USD',
        description:   'Per child ages 4–12. Children 3 and under eat free.',
        availability:  'https://schema.org/InStock',
      },
    ],
    aggregateRating: {
      '@type':       'AggregateRating',
      ratingValue:   '5.0',
      reviewCount:   '200',
      bestRating:    '5',
      worstRating:   '1',
    },
    sameAs: [
      'https://www.instagram.com/hibachiconnect',
      'https://www.facebook.com/hibachiconnect',
    ],
  }
}

export function generateFAQSchema(faqSet) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqSet.map(faq => ({
      '@type': 'Question',
      name:    faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export function generateBreadcrumbSchema(cityName, stateName, stateSlug) {
  const citySlug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://hibachiconnect.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://hibachiconnect.com/locations' },
      { '@type': 'ListItem', position: 3, name: stateName,   item: `https://hibachiconnect.com/locations/${stateSlug}` },
      { '@type': 'ListItem', position: 4, name: cityName,    item: `https://hibachiconnect.com/locations/${stateSlug}/${citySlug}` },
    ],
  }
}
