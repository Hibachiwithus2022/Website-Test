// Mississippi — 13 cities, 3 batches, 6 themes
// Batch 1 (profileIdx 0–4): Jackson, Madison, Biloxi, Gulfport, Hattiesburg
// Batch 2 (profileIdx 5–8): Southaven, Olive Branch, Ridgeland, Oxford
// Batch 3 (profileIdx 9–12): Brandon, Tupelo, Ocean Springs, Pearl
//
// MS_INTRO_VARIANTS indices 734–739, MS_CITY_INTROS 740–752

// ─── H1 prefixes by profileIdx ────────────────────────────────────────────────
const MS_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',    // 0: Jackson
  'Hibachi at Home in',         // 1: Madison
  'Private Hibachi Chef in',    // 2: Biloxi
  'Hibachi at Home in',         // 3: Gulfport
  'Hibachi at Home in',         // 4: Hattiesburg
  'Hibachi at Home in',         // 5: Southaven
  'Hibachi at Home in',         // 6: Olive Branch
  'Private Hibachi Chef in',    // 7: Ridgeland
  'Hibachi Catering in',        // 8: Oxford
  'Backyard Hibachi Party in',  // 9: Brandon
  'Hibachi Catering in',        // 10: Tupelo
  'Mobile Hibachi in',          // 11: Ocean Springs
  'Mobile Hibachi in',          // 12: Pearl
]

// ─── Theme hero images ────────────────────────────────────────────────────────
const MS_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0: Jackson Metro Luxury (Madison, Ridgeland)
  '/pics/hibachi-shot-2.jpg',         // T1: Jackson Metro & Corporate (Jackson, Brandon, Pearl)
  '/pics/hibachi-photo-2.jpg',        // T2: Gulf Coast Destination (Biloxi)
  '/pics/hibachi-at-home.jpg',        // T3: Gulf Coast Residential (Gulfport, Ocean Springs)
  '/pics/hero-3.jpg',                 // T4: Mississippi University Markets (Hattiesburg, Oxford)
  '/pics/hibachi-event.jpg',          // T5: North Mississippi & Memphis Suburbs (Southaven, Olive Branch, Tupelo)
]

// ─── Hero subtitles by theme ──────────────────────────────────────────────────
const MS_HERO_SUBTITLES = [
  (city) => `${city} executive hosts, Madison-Ridgeland corridor families, and milestone celebrations — your private teppanyaki chef, brought to your home`,
  (city) => `${city} professionals, growing metro families, and milestone celebrations — private hibachi at your home across Jackson metro`,
  (city) => `${city} Gulf Coast destination events, casino resort entertainment, and milestone celebrations — your private chef, at your home`,
  (city) => `Gulf Coast homeowners, ${city} families, and Keesler AFB communities — private hibachi comes to your backyard`,
  (city) => `University of Southern Mississippi and Ole Miss graduation weekends, ${city} family milestones, and academic celebrations — your private chef, at your home`,
  (city) => `${city} DeSoto County families, Memphis suburb communities, and North Mississippi milestones — private hibachi comes to you`,
]

// ─── How It Works ─────────────────────────────────────────────────────────────
const MS_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Mississippi address, event date, and approximate guest count. We respond with a personalized same-day quote — whether you\'re in Jackson, Madison, Biloxi, Hattiesburg, Oxford, or anywhere else in Mississippi.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included: fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, plates, and chopsticks.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Mississippi date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Mississippi property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Mississippi property is left exactly as it was.' },
  ],
}

// ─── Section variants (6 themes) ─────────────────────────────────────────────
const MS_SECTION_VARIANTS = [
  // T0 — Jackson Metro Luxury (Madison, Ridgeland)
  {
    heroPill:         'Madison Private Chef',
    experiencePill:   'Beyond Any Jackson Restaurant',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} patio, backyard, or outdoor living space becomes an exclusive private dining room for your family or team.` },
      { icon: '💼', title: `${city} Executive Entertaining`,        desc: `${city}'s corporate and professional community sets a high standard for private entertaining. Our certified chefs deliver the premium teppanyaki experience that matches it.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} home`,
    areasPill:          'Serving Greater Jackson',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater Jackson Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and the greater Jackson metro — Madison, Ridgeland, Brandon, Pearl, Flowood, Rankin County, and every surrounding community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Jackson Metro Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Experience ${city} Hosts Have Been Waiting For`,
    occasionSubtext:       'From executive client dinners to Ole Miss and USM graduation celebrations and milestone family events, private hibachi is Mississippi\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Jackson Metro Hosts Are Saying',
  },
  // T1 — Jackson Metro & Corporate (Jackson, Brandon, Pearl)
  {
    heroPill:         'Jackson Hibachi',
    experiencePill:   'Private Dining for the Jackson Metro',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} backyard, covered patio, or outdoor space becomes a private dining room for every guest at once.` },
      { icon: '🎓', title: 'JSU and Millsaps Graduation Events',    desc: `${city}'s university graduation calendar fills every restaurant in the metro for weeks. Private hibachi at your home solves the group dinner problem before the season even starts.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi at a ${city}, Mississippi home`,
    areasPill:          'Serving the Jackson Metro',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Jackson Metropolitan Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the broader Jackson metro — Madison, Ridgeland, Brandon, Pearl, Flowood, Byram, Clinton, and every surrounding community across central Mississippi.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Jackson Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'Corporate team dinners, JSU and Millsaps graduation parties, and milestone family celebrations — private hibachi is Jackson\'s most memorable private group dining format',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Jackson Metro Hosts Are Saying',
  },
  // T2 — Gulf Coast Destination (Biloxi)
  {
    heroPill:         'Biloxi Private Chef',
    experiencePill:   'Gulf Coast Private Dining',
    experiencePoints: (city) => [
      { icon: '🌊', title: `${city} Gulf Coast at Your Home`,       desc: `No casino resort required — your ${city} home, vacation rental, or Gulf Coast property becomes a private teppanyaki dining room for your group.` },
      { icon: '🎰', title: 'Casino Resort Alternative',             desc: `${city}'s casinos serve hundreds of guests a night. Your private hibachi chef serves only your group — with the same live-fire performance, better food quality, and none of the shared-dining noise.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-chef-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, Mississippi Gulf Coast home`,
    areasPill:          'Serving the MS Gulf Coast',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Mississippi Gulf Coast`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full Mississippi Gulf Coast — Gulfport, Ocean Springs, Pass Christian, D'Iberville, Bay St. Louis, Long Beach, Pascagoula, and every Gulf Coast community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Gulf Coast Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Gulf Coast Private Dining Format`,
    occasionSubtext:       'Bachelorette weekends, military homecoming events from Keesler AFB, anniversary dinners, and every Gulf Coast milestone — private hibachi at your home beats every casino restaurant in Biloxi',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Gulf Coast Hosts Are Saying',
  },
  // T3 — Gulf Coast Residential (Gulfport, Ocean Springs)
  {
    heroPill:         'Gulf Coast Hibachi',
    experiencePill:   'Backyard Hibachi on the Gulf Coast',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No restaurant reservation required — your ${city} backyard, covered patio, or pool deck becomes an exclusive private teppanyaki dining room.` },
      { icon: '🌊', title: 'Gulf Coast Outdoor Entertaining',       desc: `${city}'s Gulf Coast communities have the backyard and deck infrastructure for private hibachi. The chef arrives fully self-contained — no gas hookup required at any Mississippi Gulf Coast property.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-pool-party.jpg',
    experienceImageAlt: (city) => `Backyard hibachi on the Gulf Coast near ${city}, Mississippi`,
    areasPill:          'Serving the MS Gulf Coast',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Mississippi Gulf Coast`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full Mississippi Gulf Coast — Biloxi, Ocean Springs, Pass Christian, Bay St. Louis, Long Beach, D'Iberville, Pascagoula, and every surrounding community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Gulf Coast Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Hosts Have Found`,
    occasionSubtext:       'Gulf Coast graduation parties, Keesler AFB military homecoming events, family milestone dinners, and summer backyard gatherings — private hibachi at your home is Gulf Coast Mississippi\'s best group dinner format',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Gulf Coast Mississippi Hosts Are Saying',
  },
  // T4 — Mississippi University Markets (Hattiesburg, Oxford)
  {
    heroPill:         'Oxford & Hattiesburg Hibachi',
    experiencePill:   'University Town Private Dining',
    experiencePoints: (city) => [
      { icon: '🎓', title: 'Graduation Weekend Solution',            desc: `${city} restaurants book months in advance for Ole Miss and USM commencement. Private hibachi at your home means your family doesn't compete with 5,000 other graduation parties for a table.` },
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No Reservations required — your ${city} backyard, rental home, or campus-area property becomes an exclusive private teppanyaki dinner for everyone who matters.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi for a graduation party near ${city}, Mississippi`,
    areasPill:          'Serving Mississippi University Markets',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Region`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding Mississippi university corridor — Hattiesburg, Petal, Laurel, Purvis (USM corridor) and Oxford, Tupelo, Corinth, Cleveland (Ole Miss corridor).`,
      (city) => `University graduation season books quickly — contact us early. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Graduation Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Graduation Weekend Private Dining Format`,
    occasionSubtext:       'University of Southern Mississippi commencement, Ole Miss graduation weekend, and Mississippi university-town milestone events — private hibachi is the group dinner format university towns have been missing',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What University Town Hosts Are Saying',
  },
  // T5 — North Mississippi & Memphis Suburbs (Southaven, Olive Branch, Tupelo)
  {
    heroPill:         'North Mississippi Hibachi',
    experiencePill:   'Private Hibachi for North Mississippi',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No restaurant reservation required — your ${city} backyard, covered patio, or outdoor space becomes a private teppanyaki dinner for your family or team.` },
      { icon: '🏙️', title: 'Better Than Memphis Restaurant Options', desc: `${city}'s DeSoto County location gives you Memphis proximity without Memphis crowds. Private hibachi at your ${city} home beats any Beale Street restaurant for a group dinner of 15 or 20.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-dallas-home.jpg',
    experienceImageAlt: (city) => `Private hibachi at a ${city}, Mississippi home`,
    areasPill:          'Serving North Mississippi',
    areasHeadline:      (city) => `Private Hibachi in ${city} and North Mississippi`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full north Mississippi corridor — Southaven, Olive Branch, Hernando, Horn Lake, Tupelo, Corinth, and every DeSoto County and northeast Mississippi community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your North Mississippi Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'DeSoto County graduation parties, North Mississippi family milestones, Tupelo corporate team events, and Memphis-suburb celebrations — private hibachi comes to your home across all of North Mississippi',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What North Mississippi Hosts Are Saying',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
const MS_TESTIMONIALS = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'jackson': [
    {
      text:     'We hosted a corporate dinner for 20 clients at our home in Madison near Ridgeland. Jackson\'s restaurant options for that group size on a Friday night were all either fully booked or too noisy for the kind of conversation a client dinner requires. The private hibachi chef on our back patio was the answer — live performance, premium food, every guest at the same table. Every client asked who we used.',
      name:     'Robert K.',
      city:     'Jackson, MS',
      event:    'Corporate Client Dinner',
      initials: 'RK',
    },
    {
      text:     'Our daughter graduated from JSU and we had 22 family members coming in from Alabama, Louisiana, and Texas. Jackson graduation weekend means every restaurant is either booked or inadequate for a group that size. The private hibachi chef came to our home in Fondren, set up on the back patio, and performed for everyone at once. The best graduation dinner our family has ever had.',
      name:     'Angela T.',
      city:     'Jackson, MS',
      event:    'JSU Graduation Party',
      initials: 'AT',
    },
    {
      text:     'My husband\'s 50th birthday party. 18 guests at our home near Eastover. I\'d looked at every Jackson restaurant — Char, Nick\'s, Walker\'s Drive-In — none of them could handle that group with the feel I wanted for his milestone. The private hibachi chef was the answer. Two hours on the back patio, live performance, and food that matched the occasion.',
      name:     'Patricia M.',
      city:     'Jackson, MS',
      event:    '50th Birthday Celebration',
      initials: 'PM',
    },
  ],
  'madison': [
    {
      text:     'We hosted an executive dinner for ten colleagues at our Madison home near Reunion. Private hibachi was the clear choice when I looked at what Jackson-area restaurants could actually handle a group that size without splitting tables. The chef came to our house, set up on the covered patio, and the experience was genuinely superior to anything available in the metro. Everyone wants to do it again.',
      name:     'James H.',
      city:     'Madison, MS',
      event:    'Executive Home Dinner',
      initials: 'JH',
    },
    {
      text:     'Our son graduated from Madison Central High School — 25 family members from four different states. I\'d tried every option in Madison and Jackson and nothing was going to hold that group on a May Saturday the way I wanted. The private hibachi chef on our backyard deck was the best decision of graduation season. Our family is still talking about it.',
      name:     'Karen B.',
      city:     'Madison, MS',
      event:    'Madison Central Graduation Party',
      initials: 'KB',
    },
    {
      text:     'I hosted a milestone anniversary dinner at our Madison home — 20 of our closest family and friends. I wanted something that matched 25 years together, not just a restaurant table in a crowded dining room. The private hibachi chef on our patio delivered exactly that. The performance was incredible, the food was excellent, and everyone stayed for two hours.',
      name:     'Susan C.',
      city:     'Madison, MS',
      event:    '25th Anniversary Dinner',
      initials: 'SC',
    },
  ],
  'biloxi': [
    {
      text:     'We rented a vacation home on the Biloxi waterfront for a bachelorette weekend — 14 women, three nights. The casino restaurants were an option, but nothing felt right for a private party that size. The hibachi chef came to our rental, set up on the back deck, and performed for the full group. Best night of the whole weekend by far.',
      name:     'Michelle S.',
      city:     'Biloxi, MS',
      event:    'Bachelorette Weekend',
      initials: 'MS',
    },
    {
      text:     'My husband was stationed at Keesler and we hosted a homecoming celebration at our Biloxi home — 20 family members from across the country. Finding a Biloxi restaurant that could hold that group on a Saturday evening without a 6-week advance reservation was impossible. The private hibachi chef came to us, set up on the patio, and it was the best welcome-home celebration we could have given him.',
      name:     'Tanya W.',
      city:     'Biloxi, MS',
      event:    'Military Homecoming Celebration',
      initials: 'TW',
    },
    {
      text:     'Our family does an annual Gulf Coast reunion at our Biloxi home. This year we had 26 people — the most we\'ve ever had. The casino restaurant option wasn\'t going to work. The private hibachi chef came to our home, performed for the full family at once, and turned a standard dinner into the event everyone remembers. We\'ve already booked for next year.',
      name:     'David F.',
      city:     'Biloxi, MS',
      event:    'Annual Family Gulf Coast Reunion',
      initials: 'DF',
    },
  ],
  'gulfport': [
    {
      text:     'My daughter\'s graduation from the University of Southern Mississippi. 23 family members at our Gulfport home. Every restaurant between Hattiesburg and Gulfport was booked for graduation weekend. The private hibachi chef came to our home, set up in the backyard, and performed for the full family at once. Our daughter said it was the best graduation dinner she could imagine.',
      name:     'Linda R.',
      city:     'Gulfport, MS',
      event:    'USM Graduation Party',
      initials: 'LR',
    },
    {
      text:     'We hosted a neighborhood summer gathering at our Gulfport home — 20 couples from our community. The hibachi chef was a complete surprise to most of the group. Nobody had experienced private teppanyaki at a backyard gathering before. The performance, the food, and the format — it set a standard for our neighborhood events that we haven\'t been able to top since.',
      name:     'Mark A.',
      city:     'Gulfport, MS',
      event:    'Neighborhood Summer Gathering',
      initials: 'MA',
    },
    {
      text:     'My parents\' 40th anniversary. 18 family members at our Gulfport home near the beach. I wanted something that felt special — not just dinner at a Gulf Coast restaurant. The private hibachi chef on our back patio, performing for the whole family, was exactly right. My parents said it was the most memorable anniversary dinner they\'d ever had.',
      name:     'Renee T.',
      city:     'Gulfport, MS',
      event:    '40th Anniversary Celebration',
      initials: 'RT',
    },
  ],
  'hattiesburg': [
    {
      text:     'Our son graduated from USM and we had 24 family members coming in from five different states. Every Hattiesburg restaurant is fully booked by February for commencement weekend. The private hibachi chef came to our home near Oak Grove, set up in the backyard, and performed for the whole family at once. The best graduation dinner any of our family has ever attended.',
      name:     'Frank D.',
      city:     'Hattiesburg, MS',
      event:    'USM Graduation Party',
      initials: 'FD',
    },
    {
      text:     'I hosted a 45th birthday party for my wife at our Hattiesburg home — 18 guests. I\'d priced out every Hattiesburg and Gulf Coast option and nothing could hold that group with the quality I wanted for her milestone. The hibachi chef at home was the answer. Live performance on the back patio, her favorite proteins, and full cleanup. She said it was the best dinner party of her life.',
      name:     'Greg P.',
      city:     'Hattiesburg, MS',
      event:    '45th Birthday Celebration',
      initials: 'GP',
    },
    {
      text:     'Our USM staff had a departmental celebration at a colleague\'s Hattiesburg home — 16 people. We\'d done team dinners at Crescent City Grill and other local options before. The private hibachi chef at home was a completely different experience. Private space, live performance, everyone at the same table. The best departmental event we\'ve done.',
      name:     'Dr. C.',
      city:     'Hattiesburg, MS',
      event:    'USM Departmental Celebration',
      initials: 'DC',
    },
  ],
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'southaven': [
    {
      text:     'My son graduated from Southaven High School and we had 22 family members coming from Tennessee, Arkansas, and Alabama. Every Memphis restaurant in range was booked or too far for our group. The private hibachi chef came to our home in DeSoto County, set up on the covered patio, and performed the full dinner for everyone at once. Our family had never experienced anything like it — every person at the same table, the chef cooking to order right in front of them.',
      name:     'Carolyn M.',
      city:     'Southaven, MS',
      event:    'Southaven High Graduation Party',
      initials: 'CM',
    },
    {
      text:     'I organize our company\'s annual team dinner — 18 employees across the DeSoto County and Memphis metro area. I\'d run out of ideas for a venue that felt different and wasn\'t another Memphis restaurant. The private hibachi chef at a colleague\'s Southaven home was the answer. Everyone talked about it for months. We\'ve already locked in the same format for next year.',
      name:     'Kevin B.',
      city:     'Southaven, MS',
      event:    'Corporate Team Dinner',
      initials: 'KB',
    },
    {
      text:     'My wife\'s 40th birthday. 20 guests at our home in Southaven. I\'d considered driving everyone into Memphis for a restaurant, but nothing private or memorable enough for that milestone existed without a full buyout. The private hibachi chef at our backyard solved the whole problem. Two hours, live performance, premium food, and every guest at the same table. The best birthday party she\'s ever had.',
      name:     'Thomas R.',
      city:     'Southaven, MS',
      event:    '40th Birthday Celebration',
      initials: 'TR',
    },
  ],
  'olive-branch': [
    {
      text:     'Our daughter graduated from Olive Branch High School and I wanted to do something she\'d actually remember. 24 family members, a Saturday in May, and nothing open within 20 miles that could hold that group. The hibachi chef came to our home — set up in the backyard, performed for everyone, cooked every order live. Our daughter told us it was better than any restaurant we could have booked.',
      name:     'Michelle W.',
      city:     'Olive Branch, MS',
      event:    'Olive Branch High Graduation Party',
      initials: 'MW',
    },
    {
      text:     'We just moved to Olive Branch from the Memphis area and wanted to host a housewarming for about 20 new neighbors. I didn\'t know what the options were locally yet. A neighbor suggested private hibachi. The chef came to our new home, set up on the back patio, and it turned into the best neighborhood event we\'ve ever hosted. Half our block has already asked how to book the same thing.',
      name:     'Jason C.',
      city:     'Olive Branch, MS',
      event:    'Housewarming Neighborhood Gathering',
      initials: 'JC',
    },
    {
      text:     'My parents\' 35th anniversary. 16 family members at our Olive Branch home. I\'d looked at Germantown and East Memphis options and nothing fit the size or the feeling I wanted. The private hibachi chef on our backyard deck was exactly right for the occasion — live performance, my parents\' favorite proteins, full cleanup, and everyone together for the whole meal.',
      name:     'Amanda F.',
      city:     'Olive Branch, MS',
      event:    '35th Anniversary Dinner',
      initials: 'AF',
    },
  ],
  'ridgeland': [
    {
      text:     'Our firm hosted a client appreciation dinner for 14 at my home in Ridgeland near the Reservoir. I\'d considered every Jackson metro option and nothing had the right combination of quality, privacy, and format for that client group. The private hibachi chef on our back patio was the correct answer — premium performance, live cooking, every client at the same outdoor table. Two hours that every client remembered.',
      name:     'Charles E.',
      city:     'Ridgeland, MS',
      event:    'Client Appreciation Dinner',
      initials: 'CE',
    },
    {
      text:     'My daughter graduated from Northwest Rankin and we had 26 family members flying in from Texas, Georgia, and Tennessee. Nothing in the Ridgeland or Madison corridor could hold that group in a private setting on a May Saturday. The private hibachi chef came to our backyard near Lake Harbour Drive and performed for the whole family at once. The best family gathering we\'ve ever hosted.',
      name:     'Donna S.',
      city:     'Ridgeland, MS',
      event:    'Northwest Rankin Graduation Party',
      initials: 'DS',
    },
    {
      text:     'A milestone birthday for a close friend — 20 of us at a home in Ridgeland. I\'d priced out Madison and Jackson restaurant options and nothing in the format I wanted was available that weekend. The private hibachi chef turned their covered patio into the best dining experience any of us had that year. Live performance, premium proteins, and zero of the noise of a public restaurant.',
      name:     'Victoria P.',
      city:     'Ridgeland, MS',
      event:    'Milestone Birthday Party',
      initials: 'VP',
    },
  ],
  'oxford': [
    {
      text:     'Our son graduated from Ole Miss and we had 22 family members in from five states. Oxford restaurants book out a full year ahead for commencement weekend — I\'d seen it happen before. The private hibachi chef came to the house we rented near campus, set up in the backyard, and performed the full dinner for our family at once. Every family member said it was the best graduation celebration they\'d ever attended.',
      name:     'Richard K.',
      city:     'Oxford, MS',
      event:    'Ole Miss Graduation Party',
      initials: 'RK',
    },
    {
      text:     'Our Ole Miss department had an end-of-year faculty celebration — 18 people at a colleague\'s home near campus. We\'d done every Oxford restaurant option multiple times. The private hibachi chef was a completely different experience — everyone at the same table outdoors, live performance, individually cooked orders. The best departmental event in recent memory.',
      name:     'Dr. A.',
      city:     'Oxford, MS',
      event:    'Faculty End-of-Year Celebration',
      initials: 'DA',
    },
    {
      text:     'A milestone birthday for my husband — 20 of us at our Oxford home during football season. He\'d spent every Ole Miss game day in the Grove for 30 years, so I wanted something that matched the occasion. The private hibachi chef on our back patio, for a group of his closest friends and family, was exactly that. The best birthday we\'ve ever hosted.',
      name:     'Laura N.',
      city:     'Oxford, MS',
      event:    '60th Birthday Celebration',
      initials: 'LN',
    },
  ],
  // ── Batch 3 ──────────────────────────────────────────────────────────────────
  'brandon': [
    {
      text:     'My daughter graduated from Brandon High School and we had 21 family members coming from Tennessee, Texas, and Alabama. Every Jackson and Flowood restaurant with a private room was already booked for graduation weekend. The private hibachi chef came to our home in Rankin County, set up in the backyard, and performed for the whole family at once. The best outdoor event we\'ve ever hosted — our daughter said it was better than any restaurant we could have chosen.',
      name:     'Paula H.',
      city:     'Brandon, MS',
      event:    'Brandon High Graduation Party',
      initials: 'PH',
    },
    {
      text:     'We hosted a backyard birthday party for my son — 18 of his friends and family at our home near the reservoir. I\'d looked at every Rankin County and Jackson option and nothing had the energy I wanted for his milestone. The hibachi chef on our back patio was exactly right — live performance, great food, and everyone outdoors together. The best backyard event we\'ve ever thrown.',
      name:     'Mark S.',
      city:     'Brandon, MS',
      event:    'Backyard Birthday Party',
      initials: 'MS',
    },
    {
      text:     'Our company\'s team of 16 had a celebration dinner at a colleague\'s home in Brandon. I\'d spent years organizing team dinners at Jackson restaurants and none of them had the energy or the format I wanted for this occasion. The private hibachi chef at their backyard completely changed the dynamic — live cooking, everyone at the same table, no restaurant noise. The best team event we\'ve ever organized.',
      name:     'Brian C.',
      city:     'Brandon, MS',
      event:    'Corporate Team Celebration',
      initials: 'BC',
    },
  ],
  'tupelo': [
    {
      text:     'We hosted a 50th anniversary dinner for my parents at our Tupelo home — 20 family members. I\'d looked at every northeast Mississippi option and nothing was going to match what I wanted for that milestone. The private hibachi chef came to us, set up on our covered patio, and performed the full dinner for our family. My parents said it was the most memorable dinner of their lives.',
      name:     'Sheila M.',
      city:     'Tupelo, MS',
      event:    '50th Anniversary Dinner',
      initials: 'SM',
    },
    {
      text:     'Our Toyota team in Tupelo had an end-of-year celebration — 22 people at a colleague\'s home. We\'d done team dinners at Gloster 205 and other local spots before, but nothing had the format I wanted for our record year. The private hibachi chef at home was the answer. Two hours, live performance, everyone at the same table outdoors. The best team event any of us had attended.',
      name:     'Dennis K.',
      city:     'Tupelo, MS',
      event:    'Corporate Team Year-End Celebration',
      initials: 'DK',
    },
    {
      text:     'My son graduated from Tupelo High School and we had 24 family members coming in from across Mississippi and Tennessee. Tupelo restaurants for that group size on a Saturday in May were all either booked or inadequate. The private hibachi chef came to our home, performed for the whole family at once, and turned the night into an event everyone remembers. My son said it was the best graduation celebration he could have imagined.',
      name:     'Connie B.',
      city:     'Tupelo, MS',
      event:    'Tupelo High Graduation Party',
      initials: 'CB',
    },
  ],
  'ocean-springs': [
    {
      text:     'We rented a Gulf Coast vacation home in Ocean Springs for a family reunion weekend — 18 people, three nights. The Ocean Springs arts district restaurants were all too small and too loud for a group our size. The private hibachi chef came to our rental, set up on the back deck facing the water, and performed for the whole family. Everyone agreed it was the best evening of the entire weekend.',
      name:     'Terry W.',
      city:     'Ocean Springs, MS',
      event:    'Gulf Coast Family Reunion Weekend',
      initials: 'TW',
    },
    {
      text:     'Our daughter graduated from Ocean Springs High School and we wanted something different for her party — 20 guests at our home on the water. I\'d priced out Biloxi and Gulfport restaurant options and none of them had the private outdoor feel I wanted. The mobile hibachi chef came to our backyard, performed the full teppanyaki dinner for our guests, and made it the kind of event our neighborhood still talks about.',
      name:     'Nancy F.',
      city:     'Ocean Springs, MS',
      event:    'Ocean Springs High Graduation Party',
      initials: 'NF',
    },
    {
      text:     'A milestone birthday for my husband at our Ocean Springs home — 16 of his closest friends. We\'d done every Gulf Coast restaurant option multiple times. The private hibachi chef at our backyard deck was completely different — live performance over the water, individually cooked orders, everyone together for 90 minutes. The best birthday dinner we\'ve hosted on the Gulf Coast.',
      name:     'Donna L.',
      city:     'Ocean Springs, MS',
      event:    '55th Birthday Celebration',
      initials: 'DL',
    },
  ],
  'pearl': [
    {
      text:     'My daughter graduated from Pearl High School and we had 22 family members coming in from Louisiana, Texas, and Georgia. Every Jackson metro restaurant with a private room was either booked or too small. The private hibachi chef came to our Pearl home, set up in the backyard, and performed for every family member at once. Our daughter said she\'d never been to a better graduation dinner.',
      name:     'Sandra J.',
      city:     'Pearl, MS',
      event:    'Pearl High Graduation Party',
      initials: 'SJ',
    },
    {
      text:     'We hosted a neighborhood gathering at our Pearl home — 18 couples from our community. Nobody had experienced a mobile hibachi chef at a backyard party before. The live performance, the individually cooked orders, the fire tricks — it set a standard for our neighborhood events that we haven\'t been able to top. Half the neighborhood has asked us who we used.',
      name:     'Eric N.',
      city:     'Pearl, MS',
      event:    'Neighborhood Backyard Gathering',
      initials: 'EN',
    },
    {
      text:     'My parents\' 45th anniversary. 16 family members at our Pearl home near the reservoir. I\'d considered Jackson and Flowood restaurants but nothing had the private, celebratory feeling I wanted for their milestone. The mobile hibachi chef on our back patio performed for the whole family at once. My parents said it was the best anniversary dinner of their lives.',
      name:     'Tiffany R.',
      city:     'Pearl, MS',
      event:    '45th Anniversary Dinner',
      initials: 'TR',
    },
  ],
}

// ─── City experience images ────────────────────────────────────────────────────
const MS_CITY_IMAGE_MAP = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'jackson':     { src: '/pics/hibachi-photo-1.jpg',       alt: (city) => `Private hibachi chef at a Jackson, Mississippi home` },
  'madison':     { src: '/pics/hero-1.jpg',                alt: (city) => `Hibachi at home in Madison, Mississippi` },
  'biloxi':      { src: '/pics/hibachi-miami.jpg',         alt: (city) => `Private hibachi chef at a Biloxi, Mississippi Gulf Coast home` },
  'gulfport':    { src: '/pics/hibachi-dallas.jpg',        alt: (city) => `Hibachi at home in Gulfport, Mississippi` },
  'hattiesburg': { src: '/pics/mobile-hibachi.jpg',        alt: (city) => `Hibachi at home in Hattiesburg, Mississippi` },
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'southaven':   { src: '/pics/hero-2.jpg',                alt: (city) => `Hibachi at home in Southaven, Mississippi` },
  'olive-branch':{ src: '/pics/backyard-hibachi.jpg',      alt: (city) => `Hibachi at home in Olive Branch, Mississippi` },
  'ridgeland':   { src: '/pics/hibachi-colorado.jpg',      alt: (city) => `Private hibachi chef in Ridgeland, Mississippi` },
  'oxford':      { src: '/pics/hibachi-pic-3.jpg',         alt: (city) => `Private hibachi at an Oxford, Mississippi home` },
  // ── Batch 3 ──────────────────────────────────────────────────────────────────
  'brandon':       { src: '/pics/hibachi-pic-2.jpg',         alt: (city) => `Backyard hibachi party in Brandon, Mississippi` },
  'tupelo':        { src: '/pics/hibachi-pic-4.jpg',         alt: (city) => `Hibachi catering in Tupelo, Mississippi` },
  'ocean-springs': { src: '/pics/hibachi-chef-at-home.jpg',  alt: (city) => `Mobile hibachi in Ocean Springs, Mississippi` },
  'pearl':         { src: '/pics/hero-4.jpg',                alt: (city) => `Mobile hibachi in Pearl, Mississippi` },
}

// ─── Support images ────────────────────────────────────────────────────────────
const MS_SUPPORT_IMAGES = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'jackson': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Private hibachi chef at a Jackson, Mississippi corporate event`,
      caption:    'Jackson metro executive and milestone entertaining',
      trustBadge: 'Trusted by Jackson Hosts',
      intro:      (city) => `Jackson metro hosts — Eastover executives, Fondren professionals, and families across the metro — have found that private hibachi solves the group dinner problem no restaurant can. Here's what Jackson hosts have experienced:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef ready for a Jackson, Mississippi event`, caption: 'The Jackson private dining experience' },
  },
  'madison': {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Private hibachi at a Madison, Mississippi home`,
      caption:    'Madison luxury and milestone events',
      trustBadge: 'Trusted by Madison Hosts',
      intro:      (city) => `Madison's executive community — Reunion corridor professionals, Lake Caroline families, and Madison Central-area residents — has found that private hibachi is the format that matches the Madison standard for private entertaining. Here's what Madison hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Madison, Mississippi home`, caption: 'The Madison private chef experience' },
  },
  'biloxi': {
    testimonial: {
      src:        '/pics/hibachi-pool-party.jpg',
      alt:        (city) => `Private hibachi at a Biloxi, Mississippi Gulf Coast home`,
      caption:    'Biloxi Gulf Coast destination events',
      trustBadge: 'Trusted by Biloxi Hosts',
      intro:      (city) => `Biloxi Gulf Coast hosts — vacation rental groups, Keesler AFB military families, and permanent residents — have found that private hibachi delivers a premium private dining experience no casino restaurant can replicate for a group of 15 or 20. Here's what Biloxi hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Biloxi, Mississippi Gulf Coast home`, caption: 'The Biloxi Gulf Coast private dining format' },
  },
  'gulfport': {
    testimonial: {
      src:        '/pics/hibachi-virginia-beach.jpg',
      alt:        (city) => `Hibachi at home in Gulfport, Mississippi`,
      caption:    'Gulfport Gulf Coast backyard events',
      trustBadge: 'Trusted by Gulfport Hosts',
      intro:      (city) => `Gulfport families — Gulf Coast homeowners, Keesler corridor households, and growing suburban communities — have found that private hibachi at home solves the graduation-weekend restaurant problem while delivering the best group dinner format on the Mississippi Gulf Coast. Here's what Gulfport hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Gulfport, Mississippi home`, caption: 'The Gulfport Gulf Coast celebration format' },
  },
  'hattiesburg': {
    testimonial: {
      src:        '/pics/hibachi-catering-2.jpg',
      alt:        (city) => `Hibachi at home in Hattiesburg, Mississippi`,
      caption:    'Hattiesburg USM graduation and milestone events',
      trustBadge: 'Trusted by Hattiesburg Hosts',
      intro:      (city) => `Hattiesburg families — USM graduation hosts, Oak Grove suburban households, and the growing Hattiesburg professional community — have found that private hibachi solves the graduation-weekend restaurant scramble while delivering the best group dinner format in south Mississippi. Here's what Hattiesburg hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Hattiesburg, Mississippi home`, caption: 'The Hattiesburg USM graduation format' },
  },
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'southaven': {
    testimonial: {
      src:        '/pics/hibachi-raleigh.jpg',
      alt:        (city) => `Hibachi at home in Southaven, Mississippi`,
      caption:    'Southaven DeSoto County graduation and celebration events',
      trustBadge: 'Trusted by Southaven Hosts',
      intro:      (city) => `Southaven families — DeSoto County graduation hosts, Memphis-suburb professionals, and the growing north Mississippi community — have found that private hibachi brings a premium group dining experience directly to their homes, no Memphis drive required. Here's what Southaven hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Southaven, Mississippi home`, caption: 'The Southaven DeSoto County private dining format' },
  },
  'olive-branch': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Hibachi at home in Olive Branch, Mississippi`,
      caption:    'Olive Branch neighborhood and graduation events',
      trustBadge: 'Trusted by Olive Branch Hosts',
      intro:      (city) => `Olive Branch families — new DeSoto County homeowners, graduation hosts from the fastest-growing city in Mississippi, and neighborhood communities — have found that private hibachi delivers the kind of group dining experience their new backyard infrastructure was built for. Here's what Olive Branch hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at an Olive Branch, Mississippi home`, caption: 'The Olive Branch private chef experience' },
  },
  'ridgeland': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi chef in Ridgeland, Mississippi`,
      caption:    'Ridgeland executive and milestone events',
      trustBadge: 'Trusted by Ridgeland Hosts',
      intro:      (city) => `Ridgeland's executive community — Lake Harbour corridor professionals, Reservoir-area families, and corporate hosts who set the standard for private entertaining in the Jackson north metro — have found that private hibachi is the format that matches their standard. Here's what Ridgeland hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Ridgeland, Mississippi home`, caption: 'The Ridgeland executive private dining format' },
  },
  'oxford': {
    testimonial: {
      src:        '/pics/mobile-hibachi-2.jpg',
      alt:        (city) => `Private hibachi at an Oxford, Mississippi home`,
      caption:    'Oxford Ole Miss graduation and university events',
      trustBadge: 'Trusted by Oxford Hosts',
      intro:      (city) => `Oxford hosts — Ole Miss graduation families, faculty and alumni entertaining at campus-area homes, and the year-round Oxford community — have found that private hibachi is the one format that works for a graduation weekend when every restaurant in town is already booked. Here's what Oxford hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at an Oxford, Mississippi home`, caption: 'The Oxford Ole Miss graduation private dining format' },
  },
  // ── Batch 3 ──────────────────────────────────────────────────────────────────
  'brandon': {
    testimonial: {
      src:        '/pics/backyard-hibachi-2.jpg',
      alt:        (city) => `Backyard hibachi party in Brandon, Mississippi`,
      caption:    'Brandon Rankin County backyard and graduation events',
      trustBadge: 'Trusted by Brandon Hosts',
      intro:      (city) => `Brandon and Rankin County families — graduation hosts from Brandon High and surrounding schools, corporate professionals who commute to Jackson, and growing suburban households — have found that private hibachi is the perfect format for a backyard celebration. Here's what Brandon hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Brandon, Mississippi home`, caption: 'The Brandon Rankin County backyard celebration format' },
  },
  'tupelo': {
    testimonial: {
      src:        '/pics/traveling-hibachi.jpg',
      alt:        (city) => `Hibachi catering in Tupelo, Mississippi`,
      caption:    'Tupelo northeast Mississippi graduation and corporate events',
      trustBadge: 'Trusted by Tupelo Hosts',
      intro:      (city) => `Tupelo families — northeast Mississippi graduation hosts, corporate teams from the Toyota corridor and BancorpSouth community, and Tupelo's growing professional class — have found that private hibachi catering delivers a group dining experience no local restaurant can match. Here's what Tupelo hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Hibachi catering in Tupelo, Mississippi`, caption: 'The Tupelo northeast Mississippi catering format' },
  },
  'ocean-springs': {
    testimonial: {
      src:        '/pics/hibachi-dallas-home.jpg',
      alt:        (city) => `Mobile hibachi in Ocean Springs, Mississippi`,
      caption:    'Ocean Springs Gulf Coast waterfront and vacation events',
      trustBadge: 'Trusted by Ocean Springs Hosts',
      intro:      (city) => `Ocean Springs homeowners and vacation rental groups — Gulf Coast waterfront families, Biloxi-area destination event hosts, and the Ocean Springs arts community — have found that mobile hibachi brings a private dining experience that matches their waterfront setting. Here's what Ocean Springs hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Mobile hibachi chef in Ocean Springs, Mississippi`, caption: 'The Ocean Springs Gulf Coast mobile hibachi format' },
  },
  'pearl': {
    testimonial: {
      src:        '/pics/hibachi-pic-32.jpg',
      alt:        (city) => `Mobile hibachi in Pearl, Mississippi`,
      caption:    'Pearl Rankin County graduation and neighborhood events',
      trustBadge: 'Trusted by Pearl Hosts',
      intro:      (city) => `Pearl and Rankin County families — graduation hosts from Pearl High School, neighborhood communities near the reservoir, and Jackson metro suburb households — have found that mobile hibachi delivers the private group dining format their backyards were built for. Here's what Pearl hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Mobile hibachi chef in Pearl, Mississippi`, caption: 'The Pearl Rankin County mobile hibachi format' },
  },
}

// ─── Custom meta ───────────────────────────────────────────────────────────────
const MS_CUSTOM_META = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'jackson': {
    title: 'Private Hibachi Chef in Jackson, MS | Hibachi Connect',
    desc:  'Private hibachi chef in Jackson, Mississippi for corporate client dinners, JSU graduation parties, and milestone family celebrations. Your chef comes to your Jackson home.',
  },
  'madison': {
    title: 'Hibachi at Home in Madison, MS | Hibachi Connect',
    desc:  'Hibachi at home in Madison, Mississippi — the premium format for Madison Central graduation parties, executive dinners, and milestone celebrations. Your private chef arrives fully equipped.',
  },
  'biloxi': {
    title: 'Private Hibachi Chef in Biloxi, MS | Hibachi Connect',
    desc:  'Private hibachi chef in Biloxi for Gulf Coast vacation rental groups, Keesler AFB homecoming events, and milestone celebrations. We come to your Biloxi home or rental.',
  },
  'gulfport': {
    title: 'Hibachi at Home in Gulfport, MS | Hibachi Connect',
    desc:  'Hibachi at home in Gulfport, Mississippi for Gulf Coast graduation parties, family milestones, and backyard celebrations. Your private chef comes to your Gulfport home.',
  },
  'hattiesburg': {
    title: 'Hibachi at Home in Hattiesburg, MS | Hibachi Connect',
    desc:  'Hibachi at home in Hattiesburg for USM graduation weekends, Oak Grove family milestones, and south Mississippi celebrations. Your private chef arrives fully set up.',
  },
  // ── Batch 2 ──────────────────────────────────────────────────────────────────
  'southaven': {
    title: 'Hibachi at Home in Southaven, MS | Hibachi Connect',
    desc:  'Hibachi at home in Southaven, Mississippi for DeSoto County graduation parties, corporate team dinners, and family milestones. Your private chef arrives fully equipped — no Memphis drive needed.',
  },
  'olive-branch': {
    title: 'Hibachi at Home in Olive Branch, MS | Hibachi Connect',
    desc:  'Hibachi at home in Olive Branch, Mississippi for graduation parties, neighborhood gatherings, and DeSoto County family milestones. Your private chef comes to your home.',
  },
  'ridgeland': {
    title: 'Private Hibachi Chef in Ridgeland, MS | Hibachi Connect',
    desc:  'Private hibachi chef in Ridgeland, Mississippi for executive client dinners, graduation celebrations, and milestone events. Your chef arrives at your Ridgeland home fully set up.',
  },
  'oxford': {
    title: 'Hibachi Catering in Oxford, MS | Hibachi Connect',
    desc:  'Hibachi catering in Oxford, Mississippi for Ole Miss graduation weekends, faculty and alumni entertaining, and university-town milestones. Your private chef comes to your Oxford home.',
  },
  // ── Batch 3 ──────────────────────────────────────────────────────────────────
  'brandon': {
    title: 'Backyard Hibachi Party in Brandon, MS | Hibachi Connect',
    desc:  'Backyard hibachi party in Brandon, Mississippi for Rankin County graduation parties, corporate team events, and family milestones. Your private chef comes to your Brandon home.',
  },
  'tupelo': {
    title: 'Hibachi Catering in Tupelo, MS | Hibachi Connect',
    desc:  'Hibachi catering in Tupelo, Mississippi for graduation parties, corporate team events, and northeast Mississippi milestones. Your private chef arrives fully equipped at your Tupelo home.',
  },
  'ocean-springs': {
    title: 'Mobile Hibachi in Ocean Springs, MS | Hibachi Connect',
    desc:  'Mobile hibachi in Ocean Springs, Mississippi for Gulf Coast vacation rental groups, waterfront family celebrations, and graduation parties. Your chef comes to your Ocean Springs home.',
  },
  'pearl': {
    title: 'Mobile Hibachi in Pearl, MS | Hibachi Connect',
    desc:  'Mobile hibachi in Pearl, Mississippi for Rankin County graduation parties, neighborhood gatherings, and Jackson metro suburb milestones. Your private chef comes to your Pearl home.',
  },
}

// ─── MS_INTRO_VARIANTS — 6 generic entries (indices 734–739) ──────────────────
export const MS_INTRO_VARIANTS = [
  // T0 (734) — Jackson Metro Luxury
  {
    headline: () => 'Madison and Ridgeland\'s Executive Community Has Found a New Standard for Private Entertaining',
    opening:  () => 'The corporate corridor along I-55 north of Jackson — the Reunion, Lake Caroline, and Bridgewater executive communities — has always set a high standard for private entertaining. When the guest list includes professional peers, long-standing clients, and family friends of 20 years, a Madison restaurant reservation no longer meets the standard. A private chef at your own home does.',
    middle:   () => 'Private hibachi brings the full teppanyaki experience to your outdoor space — live fire, premium proteins cooked to order, and 90 minutes of shared entertainment that no Jackson metro restaurant can replicate for a private group.',
    closing:  () => 'Madison and Ridgeland hosts have found that private hibachi is the format for every occasion — from executive client dinners to Madison Central graduation celebrations that the whole family remembers.',
  },
  // T1 (735) — Jackson Metro & Corporate
  {
    headline: () => 'Jackson Metro Families and Corporate Hosts Have Found a Better Way to Celebrate',
    opening:  () => 'Jackson\'s metropolitan community faces a consistent challenge: the city\'s best restaurants fill months in advance around graduation season, and finding a format that works for 20 or 25 guests without splitting the group across multiple reservation windows is nearly impossible. Private hibachi solves both problems at once.',
    middle:   () => 'Your chef arrives at your Jackson home, your Brandon backyard, or your Pearl patio — fully self-contained, fully equipped — and performs the complete teppanyaki dinner for every guest at once. No restaurant involved. No reservation needed. No shared dining room.',
    closing:  () => 'Jackson metro hosts have discovered that private hibachi isn\'t just dinner — it\'s the evening itself. JSU and Millsaps graduation families, corporate professionals, and growing metro suburb families have all found the same answer.',
  },
  // T2 (736) — Gulf Coast Destination
  {
    headline: () => 'Biloxi\'s Gulf Coast Has Found a Private Dining Format the Casino Restaurants Can\'t Match',
    opening:  () => 'The Mississippi Gulf Coast draws a distinct celebrating crowd — bachelorette weekends at waterfront vacation rentals, Keesler AFB military homecoming events, family reunion groups from across the southeast, and anniversary milestone dinners for Gulf Coast residents who want something more intimate than a casino resort dining room. Private hibachi is exactly that format.',
    middle:   () => 'The chef arrives at your Biloxi home, vacation rental, or Gulf Coast property fully self-contained, performs the complete private teppanyaki dinner for your group, and handles full cleanup. No casino noise, no strangers at adjacent tables, no prix-fixe minimum.',
    closing:  () => 'Biloxi Gulf Coast hosts have found that private hibachi is the one format that works for every occasion — from a 14-person bachelorette dinner to a 26-person family reunion on the back deck of a waterfront rental.',
  },
  // T3 (737) — Gulf Coast Residential
  {
    headline: () => 'Gulf Coast Mississippi Homeowners Have Found the Private Dining Format Their Backyards Were Built For',
    opening:  () => 'Gulfport, Ocean Springs, Pass Christian, and the Mississippi Gulf Coast residential communities have consistently strong outdoor entertaining infrastructure: covered patios, spacious backyards, and pool deck layouts built for groups of 15 to 25. What they\'ve been missing is a private chef format that matches that infrastructure. Mobile hibachi brings the complete teppanyaki experience directly to your Gulf Coast home.',
    middle:   () => 'Graduation parties for USM and Gulf Coast high schools, milestone birthday dinners, anniversary celebrations, and military homecoming events from Keesler AFB all fit the same format at your Gulf Coast home.',
    closing:  () => 'Gulfport and Gulf Coast Mississippi hosts have found that private hibachi turns a good backyard into the best venue in the county.',
  },
  // T4 (738) — University Markets
  {
    headline: () => 'University of Southern Mississippi and Ole Miss Graduation Weekends Deserve More Than a Full Restaurant',
    opening:  () => 'Hattiesburg\'s USM commencement and Oxford\'s Ole Miss commencement share the same structural problem: the towns are too small, the restaurant capacity per graduate is too low, and every table that seats 20 people is booked by February. Families flying in from Texas, Georgia, and Tennessee for their graduate\'s big weekend have nowhere to go. Private hibachi comes to your home — before the restaurant scramble even starts.',
    middle:   () => 'The chef arrives at your Hattiesburg or Oxford home, rental property, or campus-area address with the full self-contained setup, performs the complete teppanyaki dinner for your entire family at once, and handles full cleanup.',
    closing:  () => 'USM and Ole Miss graduation hosts have found that private hibachi is the format that turns a stressful commencement weekend into the dinner your graduate remembers for 20 years.',
  },
  // T5 (739) — North Mississippi & Memphis Suburbs
  {
    headline: () => 'North Mississippi and DeSoto County Finally Have a Private Hibachi Option',
    opening:  () => 'Southaven, Olive Branch, and DeSoto County are among the fastest-growing suburban communities in the Mid-South, and the family celebrating culture here reflects Memphis proximity without Memphis prices. Graduation parties for DeSoto County high schools, corporate team dinners for the professionals who\'ve moved south of the Tennessee line, and milestone family celebrations all find the same limitation: Memphis restaurants are a 30-minute drive away, and local options don\'t serve 20 people in a private format.',
    middle:   () => 'Private hibachi solves it. The chef arrives at your Southaven, Olive Branch, or Tupelo home, sets up the full self-contained teppan grill, and performs the complete dinner for your group.',
    closing:  () => 'North Mississippi and DeSoto County hosts have found that private hibachi is worth the same call as Memphis — and saves the drive.',
  },
]

// ─── MS_CLOSING_VARIANTS — 6 generic (indices 734–739) ────────────────────────
export const MS_CLOSING_VARIANTS = [
  // T0 (734) — Jackson Metro Luxury
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Executive client dinners, Madison Central graduation parties, and milestone ${city} celebrations — your private chef arrives fully equipped`,
    urgency:      'Jackson metro graduation season and spring dates fill quickly — secure your Madison or Ridgeland event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T1 (735) — Jackson Metro & Corporate
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Corporate team dinners, JSU and Millsaps graduation parties, and ${city} metro milestones — your private chef comes to your home`,
    urgency:      'Jackson metro graduation season and spring peak dates fill early — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T2 (736) — Gulf Coast Destination
  {
    headline:     (city) => `Book Your ${city} Gulf Coast Private Hibachi Event`,
    sub:          (city) => `Bachelorette weekends, Keesler AFB homecoming events, and ${city} Gulf Coast milestone celebrations — your private chef arrives fully set up`,
    urgency:      'Biloxi Gulf Coast peak season and graduation weekend dates fill quickly — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T3 (737) — Gulf Coast Residential
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Gulf Coast graduation parties, Keesler AFB homecoming events, and ${city} backyard milestones — your private chef comes to your home`,
    urgency:      'Gulf Coast graduation season and summer peak dates book 3–5 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T4 (738) — University Markets
  {
    headline:     (city) => `Book Your ${city} Graduation Hibachi Event`,
    sub:          (city) => `USM and Ole Miss graduation weekends, university-town family milestones, and ${city} celebrations — your private chef arrives fully equipped`,
    urgency:      'USM and Ole Miss commencement weekend dates fill by January — book your event now.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T5 (739) — North Mississippi & Memphis Suburbs
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `DeSoto County graduation parties, North Mississippi family milestones, and ${city} celebrations — your private chef comes to your home`,
    urgency:      'North Mississippi graduation season and spring peak dates fill 3–5 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── MS_CITY_INTROS — city-specific (Batch 1: indices 740–744) ────────────────
export const MS_CITY_INTROS = [
  // 740 — Jackson
  {
    headline: () => 'The Private Chef Format Jackson Has Been Looking For',
    opening:  () => 'Jackson\'s professional community has always had the appetite for premium private entertaining — but the format has been limited to restaurant reservations that don\'t scale and catered events that don\'t perform. Private hibachi changes both. The chef arrives at your Eastover estate, your Fondren home, or your Ridgeland patio fully self-contained, sets up in 20 minutes, and performs the complete teppanyaki dinner for your group.',
    middle:   () => 'Corporate client dinners for the healthcare, legal, and energy professionals who define Jackson\'s economy. JSU and Millsaps graduation parties that bring 20 family members from across the southeast. Milestone birthday celebrations for the Jackson residents who want something more memorable than a Char or Parlor Market reservation. All of it fits the same format.',
    closing:  () => 'We serve Jackson, Madison, Ridgeland, Brandon, Pearl, Byram, Clinton, Flowood, and all of central Mississippi. Jackson graduation season and spring peak dates fill 4–5 weeks ahead — secure your event today.',
  },
  // 741 — Madison
  {
    headline: () => 'Madison Executive Hosts Have Set a New Standard for Private Entertaining',
    opening:  () => 'Madison\'s executive corridor — Reunion, Bridgewater, Lake Caroline, and the neighborhoods that have grown north of the Ross Barnett Reservoir — has always set a high standard. The dinner parties here bring 15 to 20 professional peers, clients, and family friends together in outdoor settings that are genuinely impressive. Private hibachi is the format that finally matches the outdoor infrastructure Madison homeowners have built.',
    middle:   () => 'Madison Central and Germantown graduation parties that bring extended families from across Mississippi and the southeast. Executive client dinners for the healthcare executives and energy professionals who live north of Jackson. Milestone anniversary celebrations for the couples who built their careers in the Madison corridor. All of it works at your Madison home.',
    closing:  () => 'We serve Madison, Ridgeland, Flowood, Flora, and the full Jackson north metro. Madison graduation season and spring executive entertaining dates book 4–6 weeks ahead — secure your event early.',
  },
  // 742 — Biloxi
  {
    headline: () => 'Biloxi\'s Gulf Coast Has Found the Private Dining Format the Casino Restaurants Can\'t Match',
    opening:  () => 'Biloxi attracts a specific kind of celebrating group: bachelorette weekends that rent waterfront vacation homes on the Sound, Keesler AFB families hosting homecoming events after a long deployment, Gulf Coast residents marking milestone anniversaries at their beachfront property, and family reunion groups that fly in from across the country for a Gulf Coast weekend. All of them share the same problem — the casino restaurants are designed for hundreds, not for a private group of 14 or 22.',
    middle:   () => 'Private hibachi comes directly to your Biloxi home or vacation rental. The chef sets up on your back deck facing the water, performs the complete teppanyaki dinner for your group, and handles full cleanup. The view is yours. The performance is for you alone.',
    closing:  () => 'We serve Biloxi, Gulfport, Ocean Springs, D\'Iberville, Bay St. Louis, Pass Christian, and the full Mississippi Gulf Coast. Biloxi peak season and Keesler homecoming windows fill quickly — secure your event today.',
  },
  // 743 — Gulfport
  {
    headline: () => 'Gulfport Gulf Coast Families Have Found Their Private Celebration Format',
    opening:  () => 'Gulfport\'s Gulf Coast community has exactly the outdoor entertaining infrastructure private hibachi requires: spacious backyards, covered patios facing the water, and pool deck layouts built for groups of 20. Graduation parties for Gulfport High and Harrison Central graduates, military homecoming events for Keesler families stationed in the metro, and anniversary milestone dinners all work better in your Gulfport backyard than in any restaurant from Bay St. Louis to Biloxi.',
    middle:   () => 'The chef arrives at your Gulfport home fully self-contained — the propane teppan grill, all proteins, rice, vegetables, sauces, plates, and every piece of equipment required for the event. No gas hookup required. No venue fee. No minimum-spend guarantee. Just the complete private hibachi dinner for your group, on your terms.',
    closing:  () => 'We serve Gulfport, Biloxi, Ocean Springs, Long Beach, Pass Christian, D\'Iberville, and the full Harrison County Gulf Coast. Gulfport graduation season and summer peak dates fill 3–5 weeks ahead — confirm your event early.',
  },
  // 744 — Hattiesburg
  {
    headline: () => 'USM Graduation Weekend in Hattiesburg Deserves More Than a Full Restaurant',
    opening:  () => 'University of Southern Mississippi commencement is one of the most concentrated restaurant-booking events in south Mississippi. Every Hattiesburg restaurant with a private room or a table for 20 fills by February for May commencement weekend. Families flying in from Texas, Alabama, and Georgia for their USM graduate\'s big weekend are left competing for two-tops. Private hibachi comes to your Hattiesburg home before the season ever starts.',
    middle:   () => 'The chef arrives at your home near Oak Grove, your Petal address, or any Hattiesburg-area property with outdoor space, sets up the full self-contained teppan grill, and performs the complete dinner for every family member at once — every order individually cooked, every guest at the same table for 90 minutes.',
    closing:  () => 'We serve Hattiesburg, Oak Grove, Petal, Laurel, Purvis, Columbia, and all of south Mississippi. USM commencement weekend dates fill by January — book your Hattiesburg graduation event now.',
  },
  // 745 — Southaven
  {
    headline: () => 'DeSoto County Families Have Found a Premium Group Dinner Format Right at Home',
    opening:  () => 'Southaven has built one of the largest suburban communities in Mississippi — new construction neighborhoods with covered patios, spacious backyards, and outdoor deck infrastructure that has been waiting for the right group dinner format. For DeSoto County high school graduation parties, corporate team dinners for professionals who work across the Tennessee line, and milestone family celebrations that would otherwise require a 30-minute drive to Memphis, private hibachi solves the entire problem.',
    middle:   () => 'The chef arrives at your Southaven home fully self-contained — the complete propane teppan grill, all proteins, rice, vegetables, sauces, and every piece of equipment required for the event. No gas hookup. No venue minimum. No shared dining room. Just the full teppanyaki performance for every guest at once.',
    closing:  () => 'We serve Southaven, Olive Branch, Horn Lake, Hernando, Walls, Nesbit, and all of DeSoto County. Southaven graduation season and spring peak dates fill 3–5 weeks ahead — confirm your event today.',
  },
  // 746 — Olive Branch
  {
    headline: () => 'Olive Branch Is Mississippi\'s Fastest-Growing City — and Its Private Hibachi Market',
    opening:  () => 'Olive Branch has added more households than any other Mississippi city in the past decade — new neighborhoods, wide-lot backyard spaces, and covered patio infrastructure that matches a Memphis suburb without Memphis prices. The families who\'ve moved here from Tennessee, Arkansas, and the deeper south bring a high standard for private entertaining and a real gap in local options. Private hibachi fills it.',
    middle:   () => 'Graduation parties for Olive Branch High School and Center Hill High School graduates that bring extended families from across four states. Housewarming events for new Olive Branch homeowners who want to establish themselves in the neighborhood. Corporate team dinners for the growing professional class that commutes north to Memphis or works at one of DeSoto County\'s distribution centers. All of it works in your Olive Branch backyard.',
    closing:  () => 'We serve Olive Branch, Southaven, Horn Lake, Hernando, Coldwater, and all of north Mississippi. Olive Branch graduation season dates fill 3–5 weeks in advance — book your event early.',
  },
  // 747 — Ridgeland
  {
    headline: () => 'Ridgeland\'s Reservoir Corridor Hosts Have Found the Private Chef Format Their Outdoor Spaces Deserve',
    opening:  () => 'Ridgeland sits in the most desirable corridor of the Jackson north metro — between the Ross Barnett Reservoir waterfront, the executive neighborhoods along Lake Harbour Drive, and the corporate healthcare and professional community that has grown north of I-220. The outdoor entertaining spaces here — reservoir-facing decks, covered pavilions, and backyard layouts built for groups of 20 — have always needed a chef format that matched them. Private hibachi is exactly that.',
    middle:   () => 'Client appreciation dinners for the healthcare executives and legal professionals who define Ridgeland\'s economy. Graduation parties for Northwest Rankin and Madison Central graduates where 20 family members fly in from across the south. Milestone anniversary celebrations at waterfront properties where a restaurant reservation would never capture the occasion. All of it works at your Ridgeland home.',
    closing:  () => 'We serve Ridgeland, Madison, Flowood, Brandon, Pearl, Rankin County, and all of the Jackson north metro. Ridgeland graduation season and spring executive entertaining dates book 4–6 weeks ahead — secure your event early.',
  },
  // 748 — Oxford
  {
    headline: () => 'Oxford\'s Ole Miss Graduation Weekend Has Always Needed This Format',
    opening:  () => 'Oxford has the most concentrated graduation-weekend restaurant problem in Mississippi — a small college town flooded with families from across the country during Ole Miss commencement, with restaurant capacity that fills before the football schedule is even released. Families who fly in from Texas, Georgia, Florida, and Tennessee for their graduate\'s biggest weekend have historically had two options: a long waitlist or a long drive to Memphis. Private hibachi at your Oxford home or rental changes both.',
    middle:   () => 'Ole Miss graduation parties that bring 20 family members to campus for the weekend. Faculty and alumni entertaining in the neighborhoods around The Square for milestone occasions. Year-round Oxford celebrations — SEC game weekends, Grove tailgate afterparties, and birthday milestones for the university-town residents who have made Oxford their long-term home.',
    closing:  () => 'We serve Oxford, Taylor, Water Valley, Pontotoc, Tupelo, and the full north Mississippi Ole Miss corridor. Ole Miss commencement weekend dates fill months ahead — book your Oxford graduation event well in advance.',
  },
  // 749 — Brandon
  {
    headline: () => 'Rankin County\'s Backyard Communities Have Found the Private Chef Format They\'ve Been Missing',
    opening:  () => 'Brandon and the Rankin County communities — the Pearl River corridor neighborhoods, the reservoir-area subdivisions, the growing suburban households between Jackson and the state line — have the outdoor entertaining infrastructure that private hibachi was designed for. Covered patios, spacious backyards, pool decks built for 20. What they\'ve been missing is a private chef format that matches. A mobile hibachi chef fills exactly that gap.',
    middle:   () => 'Brandon High School graduation parties that bring extended families from across the southeast for May weekend celebrations. Corporate team events for the professionals who commute to Jackson from Rankin County and want a group dinner format that doesn\'t require driving back into the city. Milestone birthday and anniversary celebrations for the families who have built their lives on the east side of the metro.',
    closing:  () => 'We serve Brandon, Pearl, Flowood, Richland, Pelahatchie, and all of Rankin County. Brandon graduation season and spring peak dates fill 3–5 weeks ahead — confirm your backyard event today.',
  },
  // 750 — Tupelo
  {
    headline: () => 'Northeast Mississippi Finally Has a Premium Group Dinner Format',
    opening:  () => 'Tupelo has always been the anchor of northeast Mississippi — the healthcare hub, the Toyota manufacturing corridor, the BancorpSouth professional community, and the cultural center for Lee County and the surrounding region. What it has consistently lacked is a private group dinner format that works for 20 or 25 guests who want something more memorable than a standard restaurant reservation. Private hibachi catering changes that.',
    middle:   () => 'Tupelo High School graduation parties that bring extended families from Alabama, Tennessee, and Arkansas for May weekend celebrations. Corporate team dinners for the Toyota plant team and the professional community that has grown around Tupelo\'s economic expansion. Milestone family events for the established northeast Mississippi households that have always wanted a premium private dining format close to home.',
    closing:  () => 'We serve Tupelo, Corinth, Booneville, Baldwyn, Iuka, and all of northeast Mississippi. Tupelo graduation season and spring peak dates fill quickly — book your hibachi catering event early.',
  },
  // 751 — Ocean Springs
  {
    headline: () => 'Ocean Springs Gulf Coast Has Found the Mobile Hibachi Format Its Waterfront Properties Deserve',
    opening:  () => 'Ocean Springs is the Gulf Coast\'s most livable community — arts district restaurants, waterfront homes with deck infrastructure built for entertaining, vacation rental properties that draw groups from across the southeast, and a permanent residential population that has always set a high standard for private gatherings. What Ocean Springs has needed is a mobile chef format that matches its waterfront setting. Mobile hibachi delivers exactly that.',
    middle:   () => 'Vacation rental groups that rent Ocean Springs waterfront properties for weekend destination events. Ocean Springs High School graduation parties for families who want a private outdoor celebration with a water view. Milestone anniversary dinners for the permanent Gulf Coast residents who have made Ocean Springs their long-term home. All of it fits the same mobile hibachi format at your home or rental.',
    closing:  () => 'We serve Ocean Springs, Pascagoula, Gautier, Moss Point, Biloxi, Gulfport, and the full Jackson County Gulf Coast. Gulf Coast peak season and graduation weekend dates fill quickly — secure your Ocean Springs event today.',
  },
  // 752 — Pearl
  {
    headline: () => 'Pearl\'s Rankin County Families Have Found a Mobile Private Dining Format That Comes to Them',
    opening:  () => 'Pearl sits at the crossroads of Rankin County and the Jackson metro — a growing suburban community with the outdoor entertaining spaces, the family-first celebrating culture, and the milestone-heavy calendar that private hibachi was built for. Pearl High School graduation parties, neighborhood summer gatherings, and milestone family celebrations all share the same limitation: the best group dinner format in the metro requires a drive into Jackson. Mobile hibachi comes to you instead.',
    middle:   () => 'Pearl High School graduation parties that bring extended families from across Mississippi and the southeast for weekend celebrations. Neighborhood backyard gatherings for the growing Pearl residential communities near the reservoir. Anniversary and birthday milestones for the Pearl families who have built their lives in Rankin County and want to celebrate at home.',
    closing:  () => 'We serve Pearl, Brandon, Flowood, Richland, Byram, and all of Rankin County. Pearl graduation season and spring peak dates fill 3–5 weeks ahead — confirm your mobile hibachi event today.',
  },
]

// ─── MS_CITY_CLOSINGS — city-specific (Batch 1: indices 740–744) ──────────────
export const MS_CITY_CLOSINGS = [
  // 740 — Jackson
  {
    headline:     (city) => `Book Your Jackson Private Hibachi Event`,
    sub:          (city) => `Corporate client dinners, JSU graduation parties, and Jackson metro milestones — your private chef comes to your home`,
    urgency:      'Jackson graduation season and spring peak dates fill 4–5 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 741 — Madison
  {
    headline:     (city) => `Book Your Madison Private Hibachi Event`,
    sub:          (city) => `Madison Central graduation parties, executive home dinners, and milestone Madison celebrations — your private chef arrives fully equipped`,
    urgency:      'Madison graduation season and spring executive entertaining dates book 4–6 weeks ahead — secure your event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 742 — Biloxi
  {
    headline:     (city) => `Book Your Biloxi Gulf Coast Private Hibachi Event`,
    sub:          (city) => `Bachelorette weekends, Keesler AFB homecoming events, and Gulf Coast milestone celebrations — your private chef comes to your Biloxi home or rental`,
    urgency:      'Biloxi peak season and Keesler homecoming windows fill quickly — secure your Gulf Coast event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 743 — Gulfport
  {
    headline:     (city) => `Book Your Gulfport Gulf Coast Hibachi Event`,
    sub:          (city) => `Gulf Coast graduation parties, Keesler AFB homecoming events, and Gulfport backyard milestones — your private chef arrives fully set up`,
    urgency:      'Gulfport graduation season and summer peak dates fill 3–5 weeks ahead — confirm your event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 744 — Hattiesburg
  {
    headline:     (city) => `Book Your Hattiesburg USM Graduation Hibachi Event`,
    sub:          (city) => `USM graduation weekends, Oak Grove family milestones, and south Mississippi celebrations — your private chef comes to your home`,
    urgency:      'USM commencement weekend dates fill by January — book your Hattiesburg event now.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 745 — Southaven
  {
    headline:     (city) => `Book Your Southaven Private Hibachi Event`,
    sub:          (city) => `DeSoto County graduation parties, corporate team dinners, and Southaven family milestones — your private chef comes to your home`,
    urgency:      'Southaven graduation season and spring peak dates fill 3–5 weeks ahead — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 746 — Olive Branch
  {
    headline:     (city) => `Book Your Olive Branch Private Hibachi Event`,
    sub:          (city) => `Graduation parties, neighborhood gatherings, and Olive Branch family milestones — your private chef arrives fully equipped`,
    urgency:      'Olive Branch graduation season dates fill 3–5 weeks in advance — book your event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 747 — Ridgeland
  {
    headline:     (city) => `Book Your Ridgeland Private Hibachi Event`,
    sub:          (city) => `Executive client dinners, graduation celebrations, and Ridgeland milestone events — your private chef arrives at your home fully set up`,
    urgency:      'Ridgeland graduation season and spring executive entertaining dates book 4–6 weeks ahead — secure your event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 748 — Oxford
  {
    headline:     (city) => `Book Your Oxford Ole Miss Hibachi Event`,
    sub:          (city) => `Ole Miss graduation weekends, faculty and alumni entertaining, and Oxford celebrations — your private chef comes to your home`,
    urgency:      'Ole Miss commencement weekend dates fill months ahead — book your Oxford graduation event now.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 749 — Brandon
  {
    headline:     (city) => `Book Your Brandon Backyard Hibachi Event`,
    sub:          (city) => `Rankin County graduation parties, backyard milestones, and Brandon celebrations — your private chef comes to your home`,
    urgency:      'Brandon graduation season and spring peak dates fill 3–5 weeks ahead — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 750 — Tupelo
  {
    headline:     (city) => `Book Your Tupelo Hibachi Catering Event`,
    sub:          (city) => `Northeast Mississippi graduation parties, corporate team dinners, and Tupelo milestone celebrations — your private chef arrives fully equipped`,
    urgency:      'Tupelo graduation season and spring peak dates fill quickly — book your hibachi catering event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 751 — Ocean Springs
  {
    headline:     (city) => `Book Your Ocean Springs Mobile Hibachi Event`,
    sub:          (city) => `Gulf Coast vacation rental groups, waterfront graduation parties, and Ocean Springs milestone celebrations — your chef comes to your home`,
    urgency:      'Gulf Coast peak season and graduation weekend dates fill quickly — secure your Ocean Springs event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 752 — Pearl
  {
    headline:     (city) => `Book Your Pearl Mobile Hibachi Event`,
    sub:          (city) => `Rankin County graduation parties, neighborhood backyard gatherings, and Pearl milestone celebrations — your chef comes to you`,
    urgency:      'Pearl graduation season and spring peak dates fill 3–5 weeks ahead — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── Major cities map ──────────────────────────────────────────────────────────
const MS_MAJOR_CITIES = {
  // Batch 1 (profileIdx 0–4)
  'jackson':      { v: 1, profileIdx: 0,  nearby: ['Madison', 'Ridgeland', 'Brandon', 'Pearl'] },
  'madison':      { v: 0, profileIdx: 1,  nearby: ['Jackson', 'Ridgeland', 'Flowood'] },
  'biloxi':       { v: 2, profileIdx: 2,  nearby: ['Gulfport', 'Ocean Springs', 'D\'Iberville'] },
  'gulfport':     { v: 3, profileIdx: 3,  nearby: ['Biloxi', 'Long Beach', 'Pass Christian'] },
  'hattiesburg':  { v: 4, profileIdx: 4,  nearby: ['Petal', 'Laurel', 'Oak Grove'] },
  // Batch 2
  'southaven':    { v: 5, profileIdx: 5,  nearby: ['Olive Branch', 'Horn Lake', 'Hernando'] },
  'olive-branch': { v: 5, profileIdx: 6,  nearby: ['Southaven', 'Horn Lake', 'Hernando'] },
  'ridgeland':    { v: 0, profileIdx: 7,  nearby: ['Madison', 'Jackson', 'Flowood'] },
  'oxford':       { v: 4, profileIdx: 8,  nearby: ['Tupelo', 'Water Valley', 'Pontotoc'] },
  // Batch 3
  'brandon':       { v: 1, profileIdx: 9,  nearby: ['Pearl', 'Flowood', 'Richland'] },
  'tupelo':        { v: 5, profileIdx: 10, nearby: ['Corinth', 'Booneville', 'Iuka'] },
  'ocean-springs': { v: 3, profileIdx: 11, nearby: ['Biloxi', 'Gautier', 'Pascagoula'] },
  'pearl':         { v: 1, profileIdx: 12, nearby: ['Brandon', 'Flowood', 'Richland'] },
}

// ─── Display name overrides ────────────────────────────────────────────────────
const MS_CITY_DISPLAY_NAMES = {
  'ocean-springs': 'Ocean Springs',
  'olive-branch':  'Olive Branch',
}

// ─── Blog posts ───────────────────────────────────────────────────────────────
// Slot 0 (v%3=0): Madison(v=0), Ridgeland(v=0), Gulfport(v=3→0), Ocean Springs(v=3)
// Slot 1 (v%3=1): Jackson(v=1), Brandon(v=1), Pearl(v=1), Hattiesburg(v=4→1), Oxford(v=4)
// Slot 2 (v%3=2): Biloxi(v=2), Southaven(v=5→2), Olive Branch(v=5), Tupelo(v=5)
export const MS_BLOG_POSTS = [
  // Slot 0
  [
    { slug: 'hibachi-at-home-mississippi-guide',          title: 'Hibachi at Home in Mississippi: The Complete Guide for 2025',                      date: '2025-03-10', excerpt: 'Everything Mississippi hosts need to know — from the Jackson north metro to the Gulf Coast to Oxford and the university markets.' },
    { slug: 'private-hibachi-mississippi-graduation-party', title: 'Private Hibachi for Mississippi Graduation Parties: USM, Ole Miss, JSU & More', date: '2025-04-01', excerpt: 'How to book a private hibachi chef for graduation weekend across every Mississippi university and high school market.' },
    { slug: 'hibachi-biloxi-gulf-coast-party',            title: 'Private Hibachi on the Mississippi Gulf Coast: Biloxi, Gulfport, Ocean Springs, and DeSoto County', date: '2025-04-15', excerpt: 'How Gulf Coast vacation rental groups, North Mississippi families, and Biloxi-area hosts use private hibachi.' },
  ],
  // Slot 1
  [
    { slug: 'private-hibachi-mississippi-graduation-party', title: 'Private Hibachi for Mississippi Graduation Parties: USM, Ole Miss, JSU & More', date: '2025-04-01', excerpt: 'How to book a private hibachi chef for graduation weekend across every Mississippi university and high school market.' },
    { slug: 'hibachi-at-home-mississippi-guide',          title: 'Hibachi at Home in Mississippi: The Complete Guide for 2025',                      date: '2025-03-10', excerpt: 'Everything Mississippi hosts need to know — from the Jackson north metro to the Gulf Coast to Oxford and the university markets.' },
    { slug: 'hibachi-biloxi-gulf-coast-party',            title: 'Private Hibachi on the Mississippi Gulf Coast: Biloxi, Gulfport, Ocean Springs, and DeSoto County', date: '2025-04-15', excerpt: 'How Gulf Coast vacation rental groups, North Mississippi families, and Biloxi-area hosts use private hibachi.' },
  ],
  // Slot 2
  [
    { slug: 'hibachi-biloxi-gulf-coast-party',            title: 'Private Hibachi on the Mississippi Gulf Coast: Biloxi, Gulfport, Ocean Springs, and DeSoto County', date: '2025-04-15', excerpt: 'How Gulf Coast vacation rental groups, North Mississippi families, and Biloxi-area hosts use private hibachi.' },
    { slug: 'hibachi-at-home-mississippi-guide',          title: 'Hibachi at Home in Mississippi: The Complete Guide for 2025',                      date: '2025-03-10', excerpt: 'Everything Mississippi hosts need to know — from the Jackson north metro to the Gulf Coast to Oxford and the university markets.' },
    { slug: 'private-hibachi-mississippi-graduation-party', title: 'Private Hibachi for Mississippi Graduation Parties: USM, Ole Miss, JSU & More', date: '2025-04-01', excerpt: 'How to book a private hibachi chef for graduation weekend across every Mississippi university and high school market.' },
  ],
]

// =============================================================================
// EXPORTED FUNCTIONS
// =============================================================================

export function getMsCityData(citySlug, cityName) {
  const entry = MS_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = MS_CUSTOM_META[citySlug] || null
  const displayName = MS_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:            displayName,
    stateAbbr:           'MS',
    stateName:           'Mississippi',
    stateSlug:           'mississippi',
    variant:             v % 3,
    heroImage:           MS_THEME_HEROES[v],
    heroSubtitle:        MS_HERO_SUBTITLES[v](displayName),
    heroH1Prefix:        MS_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:  740 + profileIdx,
    uniqueWhyUsVariant:  v % 3,
    uniqueClosingVariant: 740 + profileIdx,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:        MS_TESTIMONIALS[citySlug] || [],
    nearbyCities:        nearby,
    nearbyMajorCities:   ['Jackson', 'Biloxi', 'Gulfport', 'Hattiesburg', 'Southaven', 'Oxford'],
  }
}

export function getMsBlogPosts(variant, count) {
  return MS_BLOG_POSTS[variant % 3] || []
}

export function getMsHowItWorks(citySlug) {
  return MS_HOW_IT_WORKS
}

export function getMsSectionVariant(citySlug) {
  const entry = MS_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return MS_SECTION_VARIANTS[entry.v]
}

export function getMsCityImage(citySlug) {
  return MS_CITY_IMAGE_MAP[citySlug] || null
}

export function getMsSupportImages(citySlug) {
  return MS_SUPPORT_IMAGES[citySlug] || null
}
