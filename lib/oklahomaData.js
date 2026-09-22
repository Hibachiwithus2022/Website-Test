// ─────────────────────────────────────────────────────────────────────────────
// Oklahoma City Data — Hibachi Connect
// Batch 1 (profileIdx 0–4): Oklahoma City, Edmond, Tulsa, Norman, Broken Arrow
// Batch 2 (profileIdx 5–8): Yukon, Moore, Owasso, Bixby
// Batch 3 (profileIdx 9–12): Jenks, Midwest City, Stillwater, Lawton
//
// INTRO_VARIANTS index range:
//   OK_INTRO_VARIANTS (generic): 715–720
//   OK_CITY_INTROS (city-specific): 721–733
//   uniqueIntroVariant = 721 + profileIdx
// ─────────────────────────────────────────────────────────────────────────────

// ─── H1 prefix per profileIdx ─────────────────────────────────────────────────
const OK_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',    // 0: Oklahoma City
  'Hibachi at Home in',         // 1: Edmond
  'Private Hibachi Chef in',    // 2: Tulsa
  'Hibachi at Home in',         // 3: Norman
  'Hibachi at Home in',         // 4: Broken Arrow
  'Hibachi at Home in',         // 5: Yukon
  'Hibachi at Home in',         // 6: Moore
  'Private Hibachi Chef in',    // 7: Owasso
  'Backyard Hibachi Party in',  // 8: Bixby
  'Mobile Hibachi in',          // 9: Jenks
  'Hibachi Catering in',        // 10: Midwest City
  'Hibachi Catering in',        // 11: Stillwater
  'Mobile Hibachi in',          // 12: Lawton
]

// ─── Theme hero images ─────────────────────────────────────────────────────────
const OK_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0: OKC Luxury Suburbs (Edmond)
  '/pics/hibachi-shot-2.jpg',         // T1: OKC Metro & Corporate (OKC, Yukon, Moore, Midwest City)
  '/pics/hibachi-photo-2.jpg',        // T2: Tulsa Urban & Energy (Tulsa, Bixby)
  '/pics/hibachi-at-home.jpg',        // T3: Tulsa Growth Corridor (Broken Arrow, Owasso, Jenks)
  '/pics/hero-3.jpg',                 // T4: Oklahoma University Markets (Norman, Stillwater)
  '/pics/hibachi-event.jpg',          // T5: Military & Regional (Lawton)
]

// ─── Hero subtitles ────────────────────────────────────────────────────────────
const OK_HERO_SUBTITLES = [
  (city) => `Oil & gas executives, corporate professionals, and ${city} families — your private teppanyaki chef, brought to your home`,
  (city) => `${city} professionals, families, and milestone celebrations — private hibachi at your home across the Oklahoma City metro`,
  (city) => `Tulsa energy sector executives, arts-corridor families, and ${city} milestones — your private chef, at your home`,
  (city) => `Growing ${city} families and corporate teams across the Tulsa metro — private hibachi comes to your backyard`,
  (city) => `University of Oklahoma and Oklahoma State graduation weekends, family milestones, and ${city} celebrations — your private chef, at your home`,
  (city) => `Fort Sill military families, ${city} homecoming events, and Southwest Oklahoma milestones — private hibachi comes to you`,
]

// ─── How It Works ──────────────────────────────────────────────────────────────
const OK_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Oklahoma address, event date, and approximate guest count. We respond with a personalized same-day quote — whether you\'re in Oklahoma City, Tulsa, Norman, Edmond, or anywhere else in Oklahoma.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included: fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, plates, and chopsticks.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Oklahoma date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Oklahoma property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Oklahoma property is left exactly as it was.' },
  ],
}

// ─── Section variants (6 themes) ─────────────────────────────────────────────
const OK_SECTION_VARIANTS = [
  // T0 — OKC Luxury Suburbs (Edmond)
  {
    heroPill:         'Edmond Private Chef',
    experiencePill:   'Beyond Any Oklahoma City Restaurant',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,         desc: `No reservation required — your ${city} patio, backyard, or outdoor living space becomes an exclusive private dining room for your family or team.` },
      { icon: '💼', title: 'Oil & Gas Executive Entertaining',       desc: `${city}'s energy corridor and corporate community demand quality private entertaining. Our certified chefs deliver the premium teppanyaki experience that matches the Oklahoma City metro standard.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',      desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',           desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} home`,
    areasPill:          'Serving the OKC Metro',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater Oklahoma City Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the greater Oklahoma City metro — Oklahoma City, Edmond, Yukon, Moore, Midwest City, Norman, and every surrounding community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your OKC Metro Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Experience ${city} Hosts Have Been Waiting For`,
    occasionSubtext:       'From oil & gas corporate dinners to University of Oklahoma graduation celebrations and milestone family events, private hibachi is Oklahoma\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Oklahoma City Metro Hosts Are Saying',
  },
  // T1 — OKC Metro & Corporate (OKC, Yukon, Moore, Midwest City)
  {
    heroPill:         'Oklahoma City Hibachi',
    experiencePill:   'The Experience No OKC Restaurant Can Match',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,         desc: `Skip the reservation wait — your ${city} backyard, deck, or covered patio becomes an exclusive private dining room for your family or group.` },
      { icon: '🎓', title: 'Graduation Season Solved',               desc: `OU and Oklahoma City-area high school graduations fill every metro restaurant weeks in advance. The chef comes to your ${city} home — no wait, no time limit, no strangers at your table.` },
      { icon: '🔥', title: 'Live Teppanyaki for the Whole Family',   desc: 'From fire tricks to flying shrimp, 90–120 minutes of live hibachi keeps every generation at the same table — kids and grandparents equally entertained.' },
      { icon: '✨', title: 'Full Setup & Zero Cleanup',              desc: `Your chef arrives fully equipped, performs the complete dinner service, and packs out completely. You host an ${city} event without touching a single plate.` },
    ],
    experienceImage:    '/pics/hibachi-austin-home.jpg',
    experienceImageAlt: (city) => `Hibachi at home in ${city}, Oklahoma`,
    areasPill:          'Serving Oklahoma City',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater OKC Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full Oklahoma City metro — Edmond, Yukon, Moore, Midwest City, Norman, Mustang, Choctaw, and every surrounding community. Whether you're in the Nichols Hills corridor, the south OKC suburbs, or anywhere in between, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Oklahoma City Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Chef Format Oklahoma City Families Choose`,
    occasionSubtext:       'From Tinker AFB homecoming celebrations and OU graduation parties to Bricktown-adjacent corporate dinners and backyard milestone events across the metro',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Oklahoma City Hosts Are Saying',
  },
  // T2 — Tulsa Urban & Energy (Tulsa, Bixby)
  {
    heroPill:         'Tulsa Private Chef',
    experiencePill:   'The Experience Tulsa\'s Best Restaurants Can\'t Provide',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,         desc: `Your ${city} Midtown bungalow, Brookside Tudor, or South Tulsa estate becomes a private teppanyaki venue — no reservation, no strangers, no time limit.` },
      { icon: '⚡', title: 'Energy Sector Corporate Entertaining',    desc: `Tulsa's energy industry runs on relationships. Corporate team dinners, client entertainment, and executive celebration events at your ${city} home deliver a quality that Utica Square restaurants can't match for your group.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',      desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',           desc: `Your chef arrives with the full self-contained propane grill, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef setup in ${city}, Oklahoma`,
    areasPill:          'Serving Tulsa',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater Tulsa Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of greater Tulsa — Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Sapulpa, Claremore, Glenpool, and every surrounding community across Tulsa County and the metro.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Tulsa Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Experience ${city} Has Been Missing`,
    occasionSubtext:       'From Tulsa energy sector corporate dinners and Philbrook Museum-corridor milestone events to TU graduation parties and South Tulsa family milestones',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Tulsa Hosts Are Saying',
  },
  // T3 — Tulsa Growth Corridor (Broken Arrow, Owasso, Jenks)
  {
    heroPill:         'Tulsa Metro Hibachi',
    experiencePill:   'The Backyard Celebration Tulsa Suburbs Were Built For',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,         desc: `${city}'s newer construction and large lots give you the outdoor setup that makes private hibachi exactly right. Your backyard or covered patio becomes the evening's venue.` },
      { icon: '🎓', title: 'Graduation Season Without the Wait',     desc: `Rose District graduations, Union and Broken Arrow school commencements, and Owasso High School's packed celebration season — the chef comes to your ${city} home instead of competing for a restaurant table.` },
      { icon: '🔥', title: 'Live Teppanyaki for Every Generation',   desc: 'Fire tricks, the onion volcano, flying shrimp — 90–120 minutes of live hibachi that keeps kids, teenagers, and grandparents equally engaged at the same table.' },
      { icon: '✨', title: 'Full Setup & Zero Cleanup',              desc: `Your chef arrives with every piece of equipment, performs the complete dinner, and packs out completely. Your ${city} backyard is exactly as you left it.` },
    ],
    experienceImage:    '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Backyard hibachi party in ${city}, Oklahoma`,
    areasPill:          'Serving Greater Tulsa',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Tulsa Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Tulsa growth corridor — Broken Arrow, Owasso, Jenks, Glenpool, Catoosa, Claremore, Collinsville, and every surrounding community north, east, and south of Tulsa.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Tulsa Metro Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `How ${city} Families Are Celebrating`,
    occasionSubtext:       'From Broken Arrow High School graduation parties and Owasso corporate team events to Jenks riverfront celebrations and family milestone dinners across the Tulsa growth corridor',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Tulsa Metro Hosts Are Saying',
  },
  // T4 — Oklahoma University Markets (Norman, Stillwater)
  {
    heroPill:         'Norman & Stillwater Hibachi',
    experiencePill:   'The Graduation Celebration No Restaurant Can Handle',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,         desc: `Skip the restaurant battle — your ${city} backyard, deck, or covered patio becomes an exclusive private dining room for your graduate's family and friends.` },
      { icon: '🎓', title: 'Graduation Season Without the Scramble', desc: `OU and OSU commencement weekends fill every ${city} restaurant table for weeks in advance. The chef comes to your home — no wait, no time limit, no competing groups at adjacent tables.` },
      { icon: '🔥', title: 'Live Teppanyaki for the Whole Group',    desc: 'From fire tricks to flying shrimp, 90–120 minutes of live hibachi keeps every generation at the same table — grandparents from out of state, college roommates, and kids all part of one celebration.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',           desc: `Your chef arrives fully equipped, performs the complete dinner service, and packs out completely. You host a ${city} graduation event without touching a single plate.` },
    ],
    experienceImage:    '/pics/hibachi-raleigh.jpg',
    experienceImageAlt: (city) => `Private hibachi at a ${city} graduation party`,
    areasPill:          'Serving Oklahoma University Cities',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding communities — Norman, Moore, Midwest City, and the full OU-area corridor; Stillwater, Perkins, Cushing, Guthrie, and the OSU-area corridor. If you're celebrating a graduation or milestone in either Oklahoma university market, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your University Market Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Graduation Celebration ${city} Families Deserve`,
    occasionSubtext:       'University of Oklahoma and Oklahoma State commencement weekends, Norman and Stillwater family milestone dinners, and Big 12 game-week entertaining at your home',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Oklahoma University Market Hosts Are Saying',
  },
  // T5 — Military & Regional Oklahoma (Lawton)
  {
    heroPill:         'Southwest Oklahoma Hibachi',
    experiencePill:   'Private Hibachi That Comes to You Across Oklahoma',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,         desc: `Your ${city} backyard, covered patio, or outdoor space becomes a private teppanyaki venue — no restaurant required, no drive required.` },
      { icon: '🎖️', title: 'Military Homecoming & Celebration Events', desc: `Fort Sill homecomings, promotion dinners, and military family celebrations across the ${city} area — private hibachi is the format that handles any size group, any outdoor space.` },
      { icon: '🔥', title: 'Live Teppanyaki for Every Occasion',     desc: 'From fire tricks to flying shrimp, 90–120 minutes of live hibachi works for milestone birthdays, graduation parties, family reunions, and corporate team events.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',           desc: `Your chef brings every piece of equipment, performs the complete teppanyaki dinner, and leaves your ${city} property exactly as it was.` },
    ],
    experienceImage:    '/pics/mobile-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, Oklahoma event`,
    areasPill:          'Serving Southwest Oklahoma',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Southwest Oklahoma`,
    areasIntro: [
      (city, state) => `We serve ${city} and southwest Oklahoma — Lawton, Fort Sill, Chickasha, Duncan, Altus, and the broader Comanche County area. Every event is fully self-contained — no gas hookup, no kitchen access, just your outdoor space and our chef.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Southwest Oklahoma Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Private Hibachi for ${city} and Fort Sill Families`,
    occasionSubtext:       'Military homecoming celebrations, Fort Sill promotion dinners, CAMERON University graduation parties, and regional Oklahoma milestone events',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Southwest Oklahoma Hosts Are Saying',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
const OK_TESTIMONIALS = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'oklahoma-city': [
    {
      text:     'We hosted a corporate dinner for 20 clients and colleagues at our Nichols Hills home. Every other option in Oklahoma City was either a restaurant table that seats 8 or a rented venue that takes the intimacy out of the evening. The private hibachi chef was exactly right — live performance, premium food, and everyone stayed at the same table for two hours. Every single person asked who we used.',
      name:     'Scott M.',
      city:     'Oklahoma City, OK',
      event:    'Corporate Client Dinner',
      initials: 'SM',
    },
    {
      text:     'Our daughter graduated from Casady School and we had 24 family members coming from four different states. Finding a dinner option that kept everyone together was the real challenge — OKC restaurants weren\'t going to cut it for that group. The private hibachi chef came to our home, performed for everyone at once, and turned graduation dinner into the best part of the weekend.',
      name:     'Jennifer T.',
      city:     'Oklahoma City, OK',
      event:    'High School Graduation Party',
      initials: 'JT',
    },
    {
      text:     'My husband\'s 50th birthday. 18 guests at our Edgemere Park home. I had tried every OKC restaurant and nothing could hold our group the way I wanted. The hibachi chef was a complete surprise to him — set up on the back patio, performed the full dinner, and kept the energy going for two hours. The best party we\'ve hosted in 20 years of living here.',
      name:     'Patricia L.',
      city:     'Oklahoma City, OK',
      event:    '50th Birthday Celebration',
      initials: 'PL',
    },
  ],
  'edmond': [
    {
      text:     'We hosted an executive dinner for eight colleagues at our home near Coffee Creek. Private hibachi was something several of us had done at restaurants in Dallas and Houston, but having the chef come to the house was a different experience entirely. The intimacy, the quality, the performance — nothing in Edmond or Oklahoma City competes with it for this kind of event.',
      name:     'David R.',
      city:     'Edmond, OK',
      event:    'Executive Home Dinner',
      initials: 'DR',
    },
    {
      text:     'Our son graduated from Heritage Hall and we had 26 family members in from Texas, Kansas, and Colorado. We\'d planned to fight for a reservation somewhere in OKC until a neighbor suggested the private hibachi chef. Best decision of the season. The chef set up in our backyard, performed for the full group, and our graduation dinner became the thing everyone still talks about.',
      name:     'Karen B.',
      city:     'Edmond, OK',
      event:    'Heritage Hall Graduation Party',
      initials: 'KB',
    },
    {
      text:     'I hosted a milestone birthday party for my wife at our Edmond home — 22 of her closest friends and family. I had priced out Cattlemen\'s, Republic, and every upscale OKC option and none of them worked for that group. The private hibachi chef was the answer. Complete setup on our back patio, full performance, and cleanup. Her friends haven\'t stopped talking about it.',
      name:     'Michael C.',
      city:     'Edmond, OK',
      event:    'Milestone Birthday Celebration',
      initials: 'MC',
    },
  ],
  'tulsa': [
    {
      text:     'Our energy company hosted a team celebration for 18 people at my home in Midtown Tulsa. I had done corporate dinners at Mahogany Prime, Smoke on Cherry Street, and Elgin Park — all excellent. But the private hibachi chef at home was a different category. The live performance, the individual orders at the grill, and the fact that no one had to drive — it was the best team event we\'ve done.',
      name:     'James K.',
      city:     'Tulsa, OK',
      event:    'Energy Company Team Celebration',
      initials: 'JK',
    },
    {
      text:     'We hosted a University of Tulsa graduation dinner for our daughter — 20 guests at our South Tulsa home near Utica Square. Every Tulsa restaurant I called was either fully booked or couldn\'t handle the full group on the right night. The private hibachi chef came to our home, set up on the back patio, and performed the full dinner for everyone at once. Our daughter said it was the best celebration she\'s ever had.',
      name:     'Susan H.',
      city:     'Tulsa, OK',
      event:    'University of Tulsa Graduation Party',
      initials: 'SH',
    },
    {
      text:     'My parents\' 40th anniversary. 16 family members at our home near Brookside. I wanted something that felt genuinely special — not just dinner at a restaurant. The private hibachi chef on our back patio, with everyone watching the live performance, was the right call. My parents said it was the best anniversary dinner they\'d ever had.',
      name:     'Amanda F.',
      city:     'Tulsa, OK',
      event:    '40th Anniversary Celebration',
      initials: 'AF',
    },
  ],
  'norman': [
    {
      text:     'Our daughter graduated from OU and we had 22 family members coming from across Oklahoma, Texas, and Missouri. Norman restaurant reservations for graduation weekend are essentially impossible by February. The private hibachi chef came to our home on Campus Corner Road, set up in the backyard, and performed for the whole family at once. Best graduation dinner we\'ve ever had as a family.',
      name:     'Robert W.',
      city:     'Norman, OK',
      event:    'OU Graduation Party',
      initials: 'RW',
    },
    {
      text:     'I hosted a 45th birthday party for my husband at our Norman home — 18 guests. I\'d looked at everything in Norman and OKC and nothing could handle that group with the quality I wanted for his milestone. The hibachi chef came to our house, set up on the covered patio, and the performance was something none of our guests had seen before. Everyone agreed it was the best dinner party we\'ve hosted.',
      name:     'Lisa G.',
      city:     'Norman, OK',
      event:    '45th Birthday Celebration',
      initials: 'LG',
    },
    {
      text:     'Our OU football staff had a team dinner at a colleague\'s Norman home — 20 people. We\'d been to hibachi restaurants as a group before, but the private chef format at home was a different experience. No noise, no strangers at adjacent tables, every order exactly right. A colleague said it best: this is the format for a group that actually wants to talk to each other.',
      name:     'Coach D.',
      city:     'Norman, OK',
      event:    'Team Dinner',
      initials: 'CD',
    },
  ],
  'broken-arrow': [
    {
      text:     'We had 24 family members for our son\'s Broken Arrow High School graduation — relatives from Texas, Kansas, and Colorado. Every Tulsa-metro restaurant I called had either a months-long wait for that size group or couldn\'t do a Saturday in May. The private hibachi chef came to our home in the Rose District area, set up in our backyard, and performed for the entire group at once. It was the graduation dinner we\'d always wanted to give him.',
      name:     'Michelle P.',
      city:     'Broken Arrow, OK',
      event:    'BA High School Graduation Party',
      initials: 'MP',
    },
    {
      text:     'Our company had a team celebration for 16 people at my home near the Broken Arrow Expressway. I\'d priced out every Tulsa and Broken Arrow restaurant option. Nothing could handle the group while keeping the event feeling private. The hibachi chef at the house was the answer — live performance on the back patio, everyone at the same table, full cleanup. Best work event we\'ve done.',
      name:     'Tom S.',
      city:     'Broken Arrow, OK',
      event:    'Corporate Team Celebration',
      initials: 'TS',
    },
    {
      text:     'I surprised my parents with a 35th anniversary dinner at our Broken Arrow home. 14 people — siblings, their kids, our closest family friends. My parents had no idea what was coming when the chef arrived and set up the grill on the patio. The look on their faces during the performance made the whole event. Every dollar was worth it.',
      name:     'Rachel N.',
      city:     'Broken Arrow, OK',
      event:    '35th Anniversary Surprise Dinner',
      initials: 'RN',
    },
  ],
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'yukon': [
    {
      text:     'We had 22 family members for our daughter\'s graduation from Yukon High School. I\'d called every OKC and Yukon restaurant option and nothing could hold that size group on a May Saturday without splitting tables or fighting a crowd. The private hibachi chef came to our home off Chisholm Trail Parkway, set up in the backyard, and performed for everyone at once. Our family said it was the best graduation celebration we\'ve ever had.',
      name:     'Sandra K.',
      city:     'Yukon, OK',
      event:    'High School Graduation Party',
      initials: 'SK',
    },
    {
      text:     'My husband\'s 50th birthday. 19 guests at our Yukon home. I wanted something truly memorable and nothing in Yukon or the west OKC metro was going to be memorable — it was going to be a restaurant with a loud dining room and a prix fixe menu. The private hibachi chef on our patio was everything I wanted. Live performance, his favorite proteins, and our whole group together for two hours.',
      name:     'Lisa M.',
      city:     'Yukon, OK',
      event:    '50th Birthday Celebration',
      initials: 'LM',
    },
    {
      text:     'We hosted a neighborhood gathering for 16 families at our Yukon home — 20 adults and a handful of kids. The hibachi chef kept everyone\'s attention through the whole performance, the kids were completely captivated by the fire tricks, and the food was genuinely excellent. We\'ve already booked again for next summer.',
      name:     'Chris B.',
      city:     'Yukon, OK',
      event:    'Neighborhood Summer Gathering',
      initials: 'CB',
    },
  ],
  'moore': [
    {
      text:     'Our son graduated from Moore High School and we had 26 people coming from across Oklahoma and Texas. I knew immediately that no Moore or south OKC restaurant was going to handle that group on a Friday night in May. The private hibachi chef came to our home, set up on the back patio, and performed the complete dinner for everyone at once. It was exactly what graduation night should feel like.',
      name:     'Deborah W.',
      city:     'Moore, OK',
      event:    'Moore High School Graduation Party',
      initials: 'DW',
    },
    {
      text:     'I hosted a 40th birthday dinner for my wife at our Moore home — 18 guests. I\'d priced out every restaurant option between Norman and OKC. Nothing felt right for 18 people. The hibachi chef at the house was a completely different experience — private, live performance on our patio, every order exactly right. My wife said it was the best dinner party we\'ve thrown.',
      name:     'Kevin R.',
      city:     'Moore, OK',
      event:    '40th Birthday Celebration',
      initials: 'KR',
    },
    {
      text:     'My parents\' 30th anniversary. 14 family members at our Moore home. We wanted something different from the usual restaurant anniversary dinner, and the private hibachi format was the answer. The chef arrived, set up completely, performed for the family, and cleaned up after. My parents were thrilled. We\'re already planning the 35th.',
      name:     'Angela T.',
      city:     'Moore, OK',
      event:    '30th Anniversary Family Dinner',
      initials: 'AT',
    },
  ],
  'owasso': [
    {
      text:     'We hosted our son\'s Owasso High School graduation dinner for 24 family members at our home. I\'d tried every Tulsa-north-metro restaurant and nothing could hold that group on a Saturday in May. The private hibachi chef came to our Owasso home, set up on the covered back patio, and performed for the full family at once. Relatives from out of state said it was the best dinner they\'d ever attended.',
      name:     'Donna L.',
      city:     'Owasso, OK',
      event:    'Owasso High School Graduation Party',
      initials: 'DL',
    },
    {
      text:     'Our company had a team celebration for 18 people at a colleague\'s Owasso home. We\'d done team dinners at Tulsa restaurants before, but the private hibachi at home format was a completely different level of experience. Live performance, everyone at the same table, and nobody had to drive to south Tulsa. The team is still talking about it.',
      name:     'Brian H.',
      city:     'Owasso, OK',
      event:    'Corporate Team Celebration',
      initials: 'BH',
    },
    {
      text:     'I surprised my wife with a 45th birthday dinner at our Owasso home — 16 of her closest friends and family. She had no idea what was coming when the chef set up on our back deck. The performance was incredible, the food was excellent, and every single guest said it was the best dinner party they\'d been to. Owasso is the perfect suburb for this kind of event.',
      name:     'Mark C.',
      city:     'Owasso, OK',
      event:    '45th Birthday Surprise Dinner',
      initials: 'MC',
    },
  ],
  'bixby': [
    {
      text:     'We hosted our daughter\'s Bixby High School graduation dinner at our home — 22 family members at once. Bixby\'s outdoor entertaining setup is exactly what you want for private hibachi: large covered patio, plenty of space for the full group, and a backyard that just works for this kind of event. The chef performed for everyone at once. Our family said it was the best graduation celebration we\'d ever done.',
      name:     'Patricia S.',
      city:     'Bixby, OK',
      event:    'Bixby High School Graduation Party',
      initials: 'PS',
    },
    {
      text:     'We\'ve been hosting backyard events at our Bixby home for years — pool parties, family gatherings, milestone dinners. The private hibachi chef was the first time an event genuinely surprised our guests. Nobody expected a full live teppanyaki performance on the pool deck. The food, the show, and the format — it was the best backyard evening we\'ve ever hosted.',
      name:     'Steven A.',
      city:     'Bixby, OK',
      event:    'Backyard Milestone Dinner',
      initials: 'SA',
    },
    {
      text:     'My parents\' 40th anniversary at our Bixby home. 18 people — the entire family. I wanted something that matched the milestone, not just a restaurant table. The private hibachi chef on our pool deck was the answer. Live performance, four proteins, and every order exactly right. My parents said it was the most memorable dinner of their married life.',
      name:     'Jennifer N.',
      city:     'Bixby, OK',
      event:    '40th Anniversary Celebration',
      initials: 'JN',
    },
  ],
}

// ─── City experience images (overrides theme default in CityExperience section) ─
const OK_CITY_IMAGE_MAP = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'oklahoma-city': { src: '/pics/hibachi-photo-1.jpg',          alt: (city) => `Private hibachi chef at an Oklahoma City home` },
  'edmond':        { src: '/pics/hero-1.jpg',                   alt: (city) => `Hibachi at home in Edmond, Oklahoma` },
  'tulsa':         { src: '/pics/hibachi-miami.jpg',            alt: (city) => `Private hibachi chef at a Tulsa home` },
  'norman':        { src: '/pics/hibachi-dallas.jpg',           alt: (city) => `Hibachi at home in Norman, Oklahoma` },
  'broken-arrow':  { src: '/pics/mobile-hibachi.jpg',           alt: (city) => `Backyard hibachi party in Broken Arrow, Oklahoma` },
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'yukon':         { src: '/pics/hero-2.jpg',                   alt: (city) => `Hibachi at home in Yukon, Oklahoma` },
  'moore':         { src: '/pics/backyard-hibachi.jpg',         alt: (city) => `Hibachi at home in Moore, Oklahoma` },
  'owasso':        { src: '/pics/hibachi-colorado.jpg',         alt: (city) => `Private hibachi chef at an Owasso, Oklahoma home` },
  'bixby':         { src: '/pics/hibachi-pic-2.jpg',            alt: (city) => `Backyard hibachi party in Bixby, Oklahoma` },
}

// ─── Support images (testimonial section + CTA section) ───────────────────────
const OK_SUPPORT_IMAGES = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'oklahoma-city': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Private hibachi chef at an Oklahoma City corporate event`,
      caption:    'Oklahoma City executive and milestone entertaining',
      trustBadge: 'Trusted by OKC Hosts',
      intro:      (city) => `Oklahoma City hosts — Nichols Hills executives, Heritage Hills professionals, and families across the metro — have found that private hibachi solves the group dinner problem no restaurant can. Here's what Oklahoma City hosts have experienced:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef ready for an Oklahoma City event`, caption: 'The Oklahoma City private dining experience' },
  },
  'edmond': {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Private hibachi at an Edmond, Oklahoma home`,
      caption:    'Edmond luxury and milestone events',
      trustBadge: 'Trusted by Edmond Hosts',
      intro:      (city) => `Edmond's executive community — Coffee Creek professionals, Summit at Rose Creek families, and Heritage Hall-area residents — has found that private hibachi is the format that matches the Edmond standard for private entertaining. Here's what Edmond hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef setup at an Edmond, Oklahoma home`, caption: 'The Edmond private chef experience' },
  },
  'tulsa': {
    testimonial: {
      src:        '/pics/hibachi-colorado.jpg',
      alt:        (city) => `Private hibachi dinner at a Tulsa home near Brookside or Utica Square`,
      caption:    'Tulsa energy sector and milestone entertaining',
      trustBadge: 'Trusted by Tulsa Hosts',
      intro:      (city) => `Tulsa's energy industry, arts corridor, and South Tulsa residential community have all found the same thing: private hibachi at your home delivers a quality and experience that no Cherry Street or Utica Square restaurant can replicate for a group of 15 or 20. Here's what Tulsa hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Tulsa, Oklahoma home`, caption: 'The Tulsa private dining experience' },
  },
  'norman': {
    testimonial: {
      src:        '/pics/hibachi-virginia-beach.jpg',
      alt:        (city) => `Private hibachi at a Norman, Oklahoma home for a graduation party`,
      caption:    'Norman OU graduation and milestone events',
      trustBadge: 'Trusted by Norman Hosts',
      intro:      (city) => `Norman families — OU graduation hosts, Campus Corner-area residents, and south Norman suburban households — have found that private hibachi solves the graduation-weekend restaurant problem while delivering the best group dinner format in the OU corridor. Here's what Norman hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Norman, Oklahoma home`, caption: 'The Norman graduation celebration format' },
  },
  'broken-arrow': {
    testimonial: {
      src:        '/pics/hibachi-pool-party.jpg',
      alt:        (city) => `Backyard hibachi party in Broken Arrow, Oklahoma`,
      caption:    'Broken Arrow graduation and family events',
      trustBadge: 'Trusted by Broken Arrow Hosts',
      intro:      (city) => `Broken Arrow families — Rose District homeowners, BA school-district graduation hosts, and the growing South Tulsa suburban community — have found that private hibachi at home is the one format that handles 20 or 25 guests without a restaurant wait or a split table. Here's what Broken Arrow hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Broken Arrow, Oklahoma home`, caption: 'The Broken Arrow backyard celebration format' },
  },
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'yukon': {
    testimonial: {
      src:        '/pics/hibachi-catering-2.jpg',
      alt:        (city) => `Hibachi at home celebration in Yukon, Oklahoma`,
      caption:    'Yukon OKC metro family events',
      trustBadge: 'Trusted by Yukon Hosts',
      intro:      (city) => `Yukon families — Chisholm Trail Parkway corridor households and OKC west-side communities — have found that private hibachi solves the graduation-weekend restaurant problem while delivering the best group dinner format in the OKC metro. Here's what Yukon hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Yukon, Oklahoma home`, caption: 'The Yukon family celebration format' },
  },
  'moore': {
    testimonial: {
      src:        '/pics/hibachi-austin-home.jpg',
      alt:        (city) => `Hibachi at home party in Moore, Oklahoma`,
      caption:    'Moore OKC south-metro family events',
      trustBadge: 'Trusted by Moore Hosts',
      intro:      (city) => `Moore families — south OKC metro households, Warren Theatre-area neighborhoods, and growing Moore suburban communities — have found that private hibachi is the one format that keeps 20 or 25 guests at the same table without the graduation-weekend restaurant scramble. Here's what Moore hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Moore, Oklahoma home`, caption: 'The Moore backyard celebration format' },
  },
  'owasso': {
    testimonial: {
      src:        '/pics/hibachi-to-you.jpg',
      alt:        (city) => `Private hibachi chef at an Owasso, Oklahoma home`,
      caption:    'Owasso north Tulsa metro events',
      trustBadge: 'Trusted by Owasso Hosts',
      intro:      (city) => `Owasso families — the fastest-growing north Tulsa suburb — host graduation parties, milestone birthdays, and corporate team events at homes with exactly the outdoor infrastructure that makes private hibachi seamless. Here's what Owasso hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at an Owasso, Oklahoma home`, caption: 'The Owasso private chef format' },
  },
  'bixby': {
    testimonial: {
      src:        '/pics/hero-4.jpg',
      alt:        (city) => `Backyard hibachi party in Bixby, Oklahoma`,
      caption:    'Bixby south Tulsa backyard events',
      trustBadge: 'Trusted by Bixby Hosts',
      intro:      (city) => `Bixby families — South Tulsa's established and fast-growing suburban community — have outdoor entertaining infrastructure that's genuinely excellent: large lots, covered patios, and pool decks built for gatherings of 15 to 25. Here's what Bixby hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Backyard hibachi chef at a Bixby, Oklahoma home`, caption: 'The Bixby backyard celebration format' },
  },
}

// ─── Custom meta (title + description overrides) ──────────────────────────────
const OK_CUSTOM_META = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'oklahoma-city': {
    title: 'Private Hibachi Chef in Oklahoma City, OK | Hibachi Connect',
    desc:  'Private hibachi chef in Oklahoma City for Nichols Hills corporate dinners, OU-area graduation parties, and OKC family milestones. Your chef comes to your home across the metro.',
  },
  'edmond': {
    title: 'Hibachi at Home in Edmond, OK | Hibachi Connect',
    desc:  'Hibachi at home in Edmond — the premium format for Heritage Hall graduation parties, Coffee Creek executive dinners, and milestone celebrations. Your private chef arrives fully equipped.',
  },
  'tulsa': {
    title: 'Private Hibachi Chef in Tulsa, OK | Hibachi Connect',
    desc:  'Private hibachi chef in Tulsa for energy sector corporate dinners, University of Tulsa graduation parties, and South Tulsa milestone events. We come to your home across greater Tulsa.',
  },
  'norman': {
    title: 'Hibachi at Home in Norman, OK | Hibachi Connect',
    desc:  'Hibachi at home in Norman for University of Oklahoma graduation weekends and OU-corridor family milestones. Your private chef comes to your Norman home — serving the full OU area.',
  },
  'broken-arrow': {
    title: 'Hibachi at Home in Broken Arrow, OK | Hibachi Connect',
    desc:  'Hibachi at home in Broken Arrow for BA High School graduation parties, Rose District family milestones, and Tulsa-metro celebrations. Your private chef arrives fully equipped.',
  },
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'yukon': {
    title: 'Hibachi at Home in Yukon, OK | Hibachi Connect',
    desc:  'Hibachi at home in Yukon, OK — for OKC west-metro graduation parties, family milestones, and suburban celebrations. Your private chef arrives fully set up.',
  },
  'moore': {
    title: 'Hibachi at Home in Moore, OK | Hibachi Connect',
    desc:  'Hibachi at home in Moore, OK for graduation parties, milestone birthdays, and south OKC metro family events. Your private hibachi chef comes to your Moore home.',
  },
  'owasso': {
    title: 'Private Hibachi Chef in Owasso, OK | Hibachi Connect',
    desc:  'Private hibachi chef in Owasso for north Tulsa metro graduation parties, corporate team events, and milestone family celebrations. We come to your Owasso home.',
  },
  'bixby': {
    title: 'Backyard Hibachi Party in Bixby, OK | Hibachi Connect',
    desc:  'Backyard hibachi in Bixby, OK — the ideal format for South Tulsa graduation parties, milestone celebrations, and large family gatherings on your backyard deck.',
  },
}

// ─── OK_INTRO_VARIANTS — 6 generic entries (indices 715–720) ──────────────────
export const OK_INTRO_VARIANTS = [
  // T0 (715) — OKC Luxury / Edmond
  {
    headline: () => 'Edmond and Oklahoma City\'s Executive Community Has Found a New Standard for Private Entertaining',
    opening:  () => 'The oil and gas corridor, the healthcare executive community, and the professional households that define Edmond\'s demographic have changed what private entertaining looks like north of Oklahoma City. When the guest list includes colleagues, clients, and professional peers, a restaurant reservation doesn\'t match the occasion — a private chef at your own home does.',
    middle:   () => 'Private hibachi brings the full teppanyaki experience to your outdoor space — live fire, premium proteins cooked to order, and 90 minutes of shared entertainment that no restaurant table can replicate.',
    closing:  () => 'Edmond and Oklahoma City hosts have found that private hibachi is the format for every occasion — from executive client dinners to landmark graduation celebrations that the whole family remembers.',
  },
  // T1 (716) — OKC Metro & Corporate
  {
    headline: () => 'Oklahoma City Families and Corporate Hosts Have Found a Better Way to Celebrate',
    opening:  () => 'Oklahoma City\'s professional community and growing metro suburbs share a consistent challenge: the city\'s best tables are booked for months around graduation season, and finding a format that works for 20 or 30 guests without splitting the group across multiple reservation windows is nearly impossible.',
    middle:   () => 'Private hibachi solves both. Your chef arrives at your OKC home, your Nichols Hills backyard, or your south metro patio — fully self-contained, fully equipped — and performs the complete teppanyaki experience for every guest at once.',
    closing:  () => 'Oklahoma City hosts have discovered that private hibachi isn\'t just dinner — it\'s the evening itself. Sooner fans, energy sector professionals, and growing suburban families have all found the same answer.',
  },
  // T2 (717) — Tulsa Urban & Energy
  {
    headline: () => 'Tulsa\'s Energy Sector and Arts Community Have Found Their Private Chef Format',
    opening:  () => 'Tulsa\'s professional community — energy executives, Philbrook patrons, and the South Tulsa residential households that define the city\'s quality-of-life standard — has found that private hibachi fills a gap that the city\'s excellent restaurant scene cannot. For groups of 15 or 20 guests, the teppanyaki-at-home format is in a different category.',
    middle:   () => 'The chef travels to your Midtown bungalow, your Brookside home, or your South Tulsa estate — fully self-contained, no gas hookup required — and performs the complete private teppanyaki experience for your group while you stay at the property.',
    closing:  () => 'Tulsa energy executives, arts-corridor families, and university-area professionals have all found the same thing: private hibachi is the format that keeps every guest at the same table for the entire evening.',
  },
  // T3 (718) — Tulsa Growth Corridor
  {
    headline: () => 'The Tulsa Suburbs Have Outgrown Restaurant Tables — Private Hibachi Is the Answer',
    opening:  () => 'Broken Arrow, Owasso, and Jenks have grown fast enough that the old approach to celebrating no longer works. Graduation weekend fills every Tulsa-metro restaurant table for weeks in advance. Backyard parties for 25 people need a format that keeps everyone at the same table — not a reservation split across two rooms.',
    middle:   () => 'Private hibachi solves both problems at once. The chef comes to your home, sets up completely, and performs 90–120 minutes of live teppanyaki for your entire group — graduation families, milestone birthday gatherings, and large extended-family celebrations included.',
    closing:  () => 'Broken Arrow, Owasso, and Jenks hosts have all found the same answer: when the celebration matters, private hibachi is how the Tulsa growth corridor entertains.',
  },
  // T4 (719) — Oklahoma University Markets
  {
    headline: () => 'University of Oklahoma and Oklahoma State Graduation Weekends Deserve More Than a Restaurant Wait',
    opening:  () => 'Graduation weekend in Norman and Stillwater is one of the most anticipated — and most logistically challenging — events in Oklahoma. Families travel from across the state and from Texas, Kansas, and Missouri to celebrate their graduates. And when the ceremony ends, every table at every restaurant in both university cities is already spoken for.',
    middle:   () => 'Private hibachi turns your Norman backyard, your Stillwater patio, or your home anywhere in the OU and OSU corridors into the evening\'s venue. The chef arrives before guests do, sets up completely, and performs the full teppanyaki dinner service for everyone at once.',
    closing:  () => 'OU and OSU graduation families have found that private hibachi is the one format that handles every out-of-town relative, every roommate, and every family member who made the trip — all at the same table for 90 minutes.',
  },
  // T5 (720) — Military & Regional
  {
    headline: () => 'Southwest Oklahoma Finally Has a Private Hibachi Option',
    opening:  () => 'Lawton and the Fort Sill community have the same celebration culture as any Oklahoma city — homecoming parties, promotion dinners, graduation events, milestone birthdays, and team celebrations. What this region has historically lacked is a private hibachi chef who comes to your home rather than requiring a long drive to Oklahoma City or Tulsa.',
    middle:   () => 'We serve southwest Oklahoma with the same fully self-contained private hibachi experience available across the state — your chef comes to you, performs the complete teppanyaki dinner, and handles setup and cleanup from start to finish.',
    closing:  () => 'Fort Sill families and Lawton hosts no longer have to settle for the limited local restaurant option for milestone celebrations. Private hibachi comes to you.',
  },
]

// ─── OK_CITY_INTROS — city-specific entries (Batch 1: indices 721–725) ─────────
export const OK_CITY_INTROS = [
  // 721 — Oklahoma City
  {
    headline: () => 'The Private Chef Format Oklahoma City Has Been Looking For',
    opening:  () => 'Oklahoma City is not like most mid-sized American cities. The energy sector has created a professional class that has experienced high-quality private entertaining in Dallas, Houston, and Denver — and expects the same quality at home. When you\'re hosting colleagues, clients, or a graduate\'s extended family at your Nichols Hills or Edgemere Park home, a restaurant reservation for 20 people isn\'t the right call. A private chef who arrives at your address, sets up completely, and performs an exclusive teppanyaki dinner for your specific guests is.',
    middle:   () => 'Beyond the corporate entertaining angle, Oklahoma City families have built a lifestyle that expects quality — and private hibachi delivers it. Casady School and Bishop McGuinness graduation parties for students who grew up in homes where the standard matters, milestone birthdays for executives who\'ve entertained across the country, and welcoming dinners for relocated energy professionals joining the OKC community all become genuinely memorable when the chef comes to you.',
    closing:  () => 'Hibachi Connect serves Oklahoma City, Edmond, Yukon, Moore, Midwest City, Norman, and the entire OKC metro. Most dates are available with a few days\' notice — graduation season and peak spring weekends should be confirmed 4–6 weeks ahead.',
  },
  // 722 — Edmond
  {
    headline: () => 'Edmond Executive Hosts Choose Private Hibachi for Every Celebration That Matters',
    opening:  () => 'Edmond\'s executive and professional community has created a residential culture where large-format celebrations are the norm — graduation parties for extended families, milestone birthday dinners for 25 or 30 guests, corporate team events that bring colleagues and clients to someone\'s home for an evening. The challenge is always finding a format that matches the scale and the standard of the occasion. Private hibachi solves both.',
    middle:   () => 'The chef arrives at your Edmond property — whether that\'s a Coffee Creek estate, a Summit at Rose Creek home, or a backyard near the Kickingbird corridor — sets up the self-contained teppan grill wherever your outdoor space works best, and performs 90–120 minutes of live teppanyaki for every guest at once. Fire tricks, flying shrimp, premium proteins cooked to order. No split tables, no restaurant noise, no time limit.',
    closing:  () => 'We serve Edmond, Oklahoma City, Yukon, Moore, Guthrie, and the full OKC north metro corridor. Heritage Hall and other Edmond-area graduation season books early — confirm your spring date before the peak weekend fills.',
  },
  // 723 — Tulsa
  {
    headline: () => 'Tulsa\'s Energy Executive Community Has Set a New Standard for Private Entertaining',
    opening:  () => 'Tulsa\'s oil and gas executive community entertains at a level that reflects the industry\'s professional culture — supplier relationships, team celebrations, and client dinners where the quality of the evening reflects directly on the host. The city\'s restaurant scene is genuinely excellent: Mahogany, Smoke on Cherry Street, Elgin Park. But for a group of 18 or 20 guests, none of those tables deliver the private, exclusive format that a home teppanyaki dinner does.',
    middle:   () => 'Private hibachi at your Tulsa home — your Midtown bungalow on Utica, your South Tulsa estate near the Philbrook, your Brookside property with the covered patio — keeps every guest at the same experience. The chef sets up completely, performs for the full group, and leaves without a trace. Your Tulsa property is exactly as it was. Your guests remember the evening.',
    closing:  () => 'We serve Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, and all of greater Tulsa. University of Tulsa graduation season and Tulsa summer peak weekends book 4–6 weeks ahead — confirm your date early.',
  },
  // 724 — Norman
  {
    headline: () => 'University of Oklahoma Graduation Weekend Deserves More Than a Norman Restaurant Wait',
    opening:  () => 'Graduation weekend in Norman is one of the most anticipated — and most restaurant-impossible — events in Oklahoma. Families travel from Tulsa, Oklahoma City, Texas, Kansas, and Missouri to watch their OU graduates walk across the stage. And when the ceremony ends, every Norman restaurant table is already spoken for. The families who planned ahead — not with a reservation that seats eight, but with a private chef who comes to the house — have the graduation dinner that the occasion deserves.',
    middle:   () => 'Private hibachi turns your Norman backyard, your Campus Corner-area covered patio, or your south Norman home into the evening\'s venue. The chef arrives before guests do, sets up completely, and performs the full teppanyaki dinner service for everyone at once — your OU graduate, their roommates and friends, the grandparents who flew in from out of state, and both sets of parents all at the same table for 90–120 minutes.',
    closing:  () => 'We serve Norman, Moore, Midwest City, Blanchard, and the full OU corridor. OU commencement weekend — the single most competitive May booking window in the state — fills quickly. Confirm your Norman graduation date 5–7 weeks before commencement.',
  },
  // 725 — Broken Arrow
  {
    headline: () => 'Broken Arrow Families Celebrate Big — Private Hibachi Is Built for That',
    opening:  () => 'Broken Arrow has become one of Oklahoma\'s fastest-growing cities, and the family culture here reflects that growth: large graduation parties, multi-generational backyard celebrations, and milestone events that bring 20 or 30 people to someone\'s home. The restaurant option has a ceiling for a group that size. Split tables, a pre-set menu, and a room full of strangers on the other side of the divider don\'t match the occasion. Your backyard does.',
    middle:   () => 'Private hibachi scales exactly to Broken Arrow celebrations. The chef arrives with the full self-contained setup, positions the teppan grill in your outdoor space, and cooks for every guest individually — proteins chosen per person, cooked live at the grill. Broken Arrow High School graduation parties, Rose District anniversary dinners, corporate team events for the Tulsa-metro professional community, and multi-family summer gatherings all work in the same format because the experience adapts to the group.',
    closing:  () => 'We serve Broken Arrow, Tulsa, Owasso, Jenks, Catoosa, and the full Tulsa growth corridor. Broken Arrow High School graduation season and summer peak weekends book quickly — secure your date early.',
  },
  // 726 — Yukon
  {
    headline: () => 'Yukon Families Have Found Their Private Celebration Format',
    opening:  () => 'Yukon is one of the fastest-growing communities in the OKC metro, and the family culture here matches that growth — graduation parties for large extended families, milestone birthdays with 20 or 25 guests, and backyard celebrations that deserve something more memorable than a restaurant reservation. Yukon\'s newer construction and generous lot sizes give you the outdoor infrastructure that makes private hibachi straightforward.',
    middle:   () => 'The chef arrives at your Yukon home with the full self-contained propane teppan grill, sets up in your backyard or on your covered patio, and performs 90–120 minutes of live teppanyaki for every guest at once. Mustang and Yukon school district graduations, milestone birthdays for the families that have moved to the Chisholm Trail Parkway corridor, and summer backyard celebrations all fit the same format.',
    closing:  () => 'We serve Yukon, Oklahoma City, Mustang, Tuttle, El Reno, and the full OKC west metro. OKC metro graduation season and summer peak weekends book 4–6 weeks ahead — confirm your Yukon date early.',
  },
  // 727 — Moore
  {
    headline: () => 'Moore Families Celebrate Big — Private Hibachi Comes to Your Home',
    opening:  () => 'Moore\'s south OKC metro location and strong family culture create the same dynamic found across the growing Oklahoma City suburbs: graduation parties with 20 or 25 guests, milestone birthday celebrations that bring extended family from across the state, and backyard events that deserve more than a restaurant table. The private hibachi format solves all of it — the chef comes to your Moore home, not the other way around.',
    middle:   () => 'Moore High School and Westmoore High School graduation season is one of the most concentrated graduation event windows in the south metro. The chef arrives at your Moore backyard, sets up completely, and performs the full teppanyaki dinner for your graduate\'s entire family at once — grandparents from out of state, college friends, siblings, and both sets of parents all at the same table for 90 minutes.',
    closing:  () => 'We serve Moore, Oklahoma City, Norman, Midwest City, and the full south OKC metro. Moore graduation season and spring peak dates fill 4–6 weeks ahead — secure your event today.',
  },
  // 728 — Owasso
  {
    headline: () => 'Owasso Is Growing Fast — Private Hibachi Is Growing With It',
    opening:  () => 'Owasso has added thousands of households over the past decade, and the family celebrating culture here is exactly what makes private hibachi the right format. Graduation parties for Owasso High School seniors, milestone birthday celebrations for the professionals who\'ve moved to the Tulsa north suburbs, and summer backyard gatherings that bring extended family from across Oklahoma — all of it works better at your Owasso home than at a restaurant 20 minutes away.',
    middle:   () => 'The chef arrives at your Owasso address with the full self-contained setup, positions the teppan grill on your backyard deck or covered patio, and performs the complete private hibachi dinner for your group. Owasso\'s newer construction consistently offers better outdoor entertaining infrastructure than older Tulsa neighborhoods — large covered patios, generous backyards, and layouts that make the setup clean and the dinner seamless.',
    closing:  () => 'We serve Owasso, Tulsa, Claremore, Collinsville, and the full north Tulsa growth corridor. Owasso graduation season and summer peak weekends book 4–6 weeks ahead — confirm your event early.',
  },
  // 729 — Bixby
  {
    headline: () => 'Bixby Backyard Celebrations Deserve a Private Chef',
    opening:  () => 'Bixby has earned a reputation as South Tulsa\'s most desirable suburban community, and the outdoor entertaining infrastructure here reflects that standard — large lots, covered pool decks, and backyard setups built for gatherings that matter. Bixby graduation parties, milestone anniversary dinners, and large family gatherings bring 20 or 25 guests to properties that are genuinely well-suited for private hibachi.',
    middle:   () => 'The backyard hibachi format is perfectly matched to Bixby\'s outdoor-entertaining culture. The chef sets up the teppan grill on your pool deck or backyard patio, performs the complete dinner service for your group, and handles all cleanup. Your Bixby property is exactly as it was before the event. Your guests are talking about it for months.',
    closing:  () => 'We serve Bixby, Tulsa, Jenks, Glenpool, and South Tulsa. Bixby graduation season and summer backyard dates book 4–6 weeks ahead — secure your event today.',
  },
]

// ─── OK_CLOSING_VARIANTS — 6 generic (indices 715–720) ────────────────────────
export const OK_CLOSING_VARIANTS = [
  // T0 (715) — OKC Luxury / Edmond
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Oil & gas executive dinners, Heritage Hall graduation parties, and landmark ${city} family milestones — your private hibachi chef arrives fully equipped`,
    urgency:      'Graduation season and OKC corporate event season books out early — confirm your Edmond date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T1 (716) — OKC Metro & Corporate
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Corporate client dinners, OU graduation celebrations, and Oklahoma City family milestones — your private chef comes to you across the OKC metro`,
    urgency:      'Oklahoma City graduation season and summer dates fill quickly — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T2 (717) — Tulsa Urban & Energy
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Energy sector corporate dinners, TU graduation parties, and Tulsa milestone events — your private hibachi chef arrives fully equipped`,
    urgency:      'Tulsa graduation season and summer dates fill early — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T3 (718) — Tulsa Growth Corridor
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Broken Arrow graduation parties, Owasso and Jenks backyard milestones, and Tulsa-metro family events — your private chef arrives fully set up`,
    urgency:      'Tulsa metro graduation season and summer backyard dates book early — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T4 (719) — Oklahoma University Markets
  {
    headline:     (city) => `Book Your ${city} Graduation Event`,
    sub:          (city) => `University of Oklahoma and Oklahoma State graduation weekends, family milestones, and ${city} home events — your private chef comes to you`,
    urgency:      'OU and OSU graduation season fills fast — book your May date now.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T5 (720) — Military & Regional
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Fort Sill military homecomings, promotion dinners, and ${city} family milestones — your private hibachi chef comes to Southwest Oklahoma`,
    urgency:      'Military homecoming and graduation season dates fill ahead — confirm your Lawton event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── OK_CITY_CLOSINGS — city-specific (Batch 1: indices 721–725) ──────────────
export const OK_CITY_CLOSINGS = [
  // 721 — Oklahoma City
  {
    headline:     (city) => `Book Your Oklahoma City Private Hibachi Event`,
    sub:          (city) => `Corporate client dinners, Casady and Bishop Mac graduation parties, and landmark OKC family milestones — your private chef comes to your Oklahoma City home`,
    urgency:      'OKC graduation season and spring peak dates fill quickly — secure your Oklahoma City event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 722 — Edmond
  {
    headline:     (city) => `Book Your Edmond Private Hibachi Event`,
    sub:          (city) => `Heritage Hall graduation parties, Coffee Creek executive dinners, and milestone Edmond celebrations — your private chef arrives fully equipped`,
    urgency:      'Edmond graduation season and spring dates fill early — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 723 — Tulsa
  {
    headline:     (city) => `Book Your Tulsa Private Hibachi Event`,
    sub:          (city) => `Energy sector corporate dinners, University of Tulsa graduation celebrations, and South Tulsa estate milestones — your private chef comes to your Tulsa home`,
    urgency:      'TU graduation season and Tulsa summer peak dates fill quickly — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 724 — Norman
  {
    headline:     (city) => `Book Your Norman Graduation Event`,
    sub:          (city) => `University of Oklahoma graduation weekends, Norman family milestones, and OU-area home events — your private hibachi chef comes to you`,
    urgency:      'OU commencement weekend fills 5–7 weeks in advance — book your Norman May date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 725 — Broken Arrow
  {
    headline:     (city) => `Book Your Broken Arrow Private Hibachi Event`,
    sub:          (city) => `BA High School graduation parties, Rose District family milestones, and Tulsa-metro backyard celebrations — your private chef arrives fully set up`,
    urgency:      'Broken Arrow graduation season and summer backyard dates book early — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 726 — Yukon
  {
    headline:     (city) => `Book Your Yukon Hibachi at Home Event`,
    sub:          (city) => `Yukon High School graduation parties, Chisholm Trail Parkway family milestones, and west OKC metro backyard celebrations — your private chef comes to your home`,
    urgency:      'Yukon graduation season and summer peak dates fill 4–6 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 727 — Moore
  {
    headline:     (city) => `Book Your Moore Hibachi at Home Event`,
    sub:          (city) => `Moore and Westmoore High School graduation parties, south OKC metro family milestones, and backyard celebrations — your private chef arrives fully equipped`,
    urgency:      'Moore graduation season and spring peak dates fill early — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 728 — Owasso
  {
    headline:     (city) => `Book Your Owasso Private Hibachi Event`,
    sub:          (city) => `Owasso High School graduation parties, north Tulsa growth corridor milestones, and backyard celebrations — your private chef comes to your Owasso home`,
    urgency:      'Owasso graduation season and summer peak dates book 4–6 weeks ahead — confirm your event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 729 — Bixby
  {
    headline:     (city) => `Book Your Bixby Backyard Hibachi Event`,
    sub:          (city) => `Bixby High School graduation parties, South Tulsa backyard milestones, and pool deck celebrations — your private chef arrives fully set up`,
    urgency:      'Bixby graduation season and summer backyard dates book 4–6 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── Major cities map ──────────────────────────────────────────────────────────
const OK_MAJOR_CITIES = {
  // Batch 1 (profileIdx 0–4)
  'oklahoma-city': { v: 1, profileIdx: 0,  nearby: ['Edmond', 'Yukon', 'Moore', 'Midwest City', 'Norman'] },
  'edmond':        { v: 0, profileIdx: 1,  nearby: ['Oklahoma City', 'Yukon', 'Guthrie'] },
  'tulsa':         { v: 2, profileIdx: 2,  nearby: ['Broken Arrow', 'Owasso', 'Bixby', 'Jenks'] },
  'norman':        { v: 4, profileIdx: 3,  nearby: ['Oklahoma City', 'Moore', 'Midwest City'] },
  'broken-arrow':  { v: 3, profileIdx: 4,  nearby: ['Tulsa', 'Owasso', 'Bixby', 'Jenks'] },
  // Batch 2 (profileIdx 5–8)
  'yukon':         { v: 1, profileIdx: 5,  nearby: ['Oklahoma City', 'Edmond', 'Mustang'] },
  'moore':         { v: 1, profileIdx: 6,  nearby: ['Oklahoma City', 'Norman', 'Midwest City'] },
  'owasso':        { v: 3, profileIdx: 7,  nearby: ['Tulsa', 'Broken Arrow', 'Claremore'] },
  'bixby':         { v: 2, profileIdx: 8,  nearby: ['Tulsa', 'Broken Arrow', 'Jenks'] },
}

// ─── Display name overrides for multi-word slugs ──────────────────────────────
const OK_CITY_DISPLAY_NAMES = {
  'oklahoma-city': 'Oklahoma City',
  'broken-arrow':  'Broken Arrow',
  'midwest-city':  'Midwest City',
}

// ─── Blog posts (3 planned — built after audit) ───────────────────────────────
export const OK_BLOG_POSTS = [
  // Slot 0 — v%3=0: Edmond, Bixby, Stillwater
  [],
  // Slot 1 — v%3=1: Oklahoma City, Yukon, Moore, Midwest City, Lawton
  [],
  // Slot 2 — v%3=2: Tulsa, Norman, Broken Arrow, Owasso, Jenks
  [],
]

// =============================================================================
// EXPORTED FUNCTIONS
// =============================================================================

export function getOkCityData(citySlug, cityName) {
  const entry = OK_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = OK_CUSTOM_META[citySlug] || null
  const displayName = OK_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  return {
    cityName:     displayName,
    stateAbbr:    'OK',
    stateName:    'Oklahoma',
    stateSlug:    'oklahoma',
    variant:      v % 3,
    heroImage:    OK_THEME_HEROES[v],
    heroSubtitle: OK_HERO_SUBTITLES[v](displayName),
    heroH1Prefix: OK_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:   721 + profileIdx,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: 721 + profileIdx,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:      OK_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['Oklahoma City', 'Tulsa', 'Norman', 'Edmond', 'Broken Arrow', 'Lawton'],
  }
}

export function getOkBlogPosts(variant, count) {
  return OK_BLOG_POSTS[variant % 3] || []
}

export function getOkHowItWorks(citySlug) {
  return OK_HOW_IT_WORKS
}

export function getOkSectionVariant(citySlug) {
  const entry = OK_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return OK_SECTION_VARIANTS[entry.v]
}

export function getOkCityImage(citySlug) {
  return OK_CITY_IMAGE_MAP[citySlug] || null
}

export function getOkSupportImages(citySlug) {
  return OK_SUPPORT_IMAGES[citySlug] || null
}

// ─── OK_INTRO_VARIANTS and OK_CITY_INTROS are already exported above ─────────
// ─── OK_CLOSING_VARIANTS and OK_CITY_CLOSINGS are already exported above ─────
