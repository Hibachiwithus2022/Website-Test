// ─────────────────────────────────────────────────────────────────────────────
// Louisiana City Data — Hibachi Connect
// Original 5 cities + Batches 1-3 expansion (10 new cities = 15 total)
//
// INTRO_VARIANTS index range:
//   LA_INTRO_VARIANTS (generic): 697–699
//   LA_CITY_INTROS (city-specific): 700–714 (15 entries)
//   uniqueIntroVariant = 700 + profileIdx
// ─────────────────────────────────────────────────────────────────────────────

// ─── H1 prefix per profileIdx ─────────────────────────────────────────────────
const LA_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0: New Orleans
  'Hibachi at Home in',       // 1: Baton Rouge
  'Hibachi Catering in',      // 2: Lafayette
  'Hibachi at Home in',       // 3: Shreveport
  'Mobile Hibachi in',        // 4: Lake Charles
  'Hibachi at Home in',       // 5: Metairie
  'Backyard Hibachi in',      // 6: Kenner
  'Private Hibachi Chef in',  // 7: Mandeville
  'Hibachi at Home in',       // 8: Covington
  'Hibachi at Home in',       // 9: Bossier City
  'Private Hibachi Chef in',  // 10: Gonzales
  'Backyard Hibachi in',      // 11: Prairieville
  'Hibachi at Home in',       // 12: Youngsville
  'Hibachi Catering in',      // 13: Broussard
  'Mobile Hibachi in',        // 14: Hammond
]

// ─── Theme hero images (4 themes) ────────────────────────────────────────────
const LA_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg',  // LA0: New Orleans Destination
  '/pics/hibachi-at-home.jpg',         // LA1: South Louisiana
  '/pics/hibachi-event.jpg',           // LA2: Regional Louisiana
  '/pics/hibachi-chef-home.jpg',       // LA3: New Orleans Metro Suburbs
]

// ─── Hero subtitles ────────────────────────────────────────────────────────────
const LA_HERO_SUBTITLES = [
  (city) => `Garden District mansions, Uptown homes, and vacation rentals in ${city} — your private teppanyaki chef, brought to your property`,
  (city) => `LSU and UL graduation families, oil & gas professionals, and ${city} households — your private chef, at your home`,
  (city) => `${city} families, energy sector teams, and milestone celebrations — private hibachi at your home or outdoor venue`,
  (city) => `${city} graduation parties, family milestones, and backyard celebrations — your private hibachi chef arrives fully equipped`,
]

// ─── How It Works ──────────────────────────────────────────────────────────────
const LA_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Louisiana address, event date, and approximate guest count. We respond with a personalized same-day quote — whether you\'re in New Orleans, Baton Rouge, Lafayette, Shreveport, Lake Charles, or anywhere in between.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included: fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, plates, and chopsticks.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Louisiana date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Louisiana property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Louisiana property is left exactly as it was.' },
  ],
}

// ─── Section variants (3 themes) ─────────────────────────────────────────────
const LA_SECTION_VARIANTS = [
  // LA0 — New Orleans Destination
  {
    heroPill:         'New Orleans Private Chef',
    experiencePill:   'Beyond Bourbon Street — The Private Dining Experience',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Property Is the Venue`,     desc: `Garden District mansion, Uptown home, Airbnb rental in the Marigny — your outdoor space becomes an exclusive private dining room for your group without any reservation battle.` },
      { icon: '🎉', title: 'Built for New Orleans Vacation Groups',   desc: `Bachelorette weekends, family reunion trips, and corporate retreats deserve a dinner that goes beyond the restaurant scene. Your private chef travels to wherever your group is staying.` },
      { icon: '🥩', title: 'Full Premium Menu, Fully Self-Contained', desc: 'Chicken, steak, shrimp, salmon, or premium upgrades — filet mignon, lobster tail, Chilean sea bass. No kitchen access needed at your vacation rental or private home.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',           desc: `Chef arrives fully equipped, performs the complete teppanyaki experience, and packs out entirely. Your New Orleans property is exactly as it was when the evening began.` },
    ],
    experienceImage:    '/pics/hibachi-pool-party.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} vacation rental or home`,
    areasPill:          'Serving Greater New Orleans',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater New Orleans Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full Greater New Orleans area — the Garden District, Uptown, Mid-City, Metairie, Kenner, Slidell, Mandeville, Covington, and every surrounding Jefferson, Orleans, and St. Tammany Parish community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your New Orleans Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Dinner Nobody Forgets`,
    occasionSubtext:       'From bachelorette weekends and family reunion trips to corporate retreats and Garden District dinner parties, private hibachi is New Orleans\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What New Orleans Hosts and Vacation Groups Are Saying',
  },
  // LA1 — South Louisiana (Baton Rouge, Lafayette)
  {
    heroPill:         'South Louisiana Private Chef',
    experiencePill:   'The Celebration Format South Louisiana Has Been Waiting For',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,          desc: `Skip the reservation battle — your ${city} backyard, patio, or covered outdoor space becomes an exclusive private dining room for your family.` },
      { icon: '🎓', title: 'The Graduation Season Solution',          desc: `LSU and UL graduation season fills every Baton Rouge and Lafayette restaurant table weeks in advance. When the table isn\'t available, the chef comes to your ${city} home — no wait, no time limit.` },
      { icon: '🔥', title: 'Live Teppanyaki for Louisiana Families',  desc: 'From fire tricks to flying shrimp, 90–120 minutes of live hibachi keeps every generation at the same table — the perfect format for Louisiana\'s large, multi-generational family celebrations.' },
      { icon: '✨', title: 'Full Setup & Zero Cleanup',               desc: `Chef arrives with everything, performs the complete dinner service, and packs out completely. Your ${city} property is spotless when they leave.` },
    ],
    experienceImage:    '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Hibachi at home event in ${city}, LA`,
    areasPill:          'Serving South Louisiana',
    areasHeadline:      (city) => `Private Hibachi in ${city} and South Louisiana`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of South Louisiana — Baton Rouge, Lafayette, Gonzales, Prairieville, Zachary, Denham Springs, New Iberia, Broussard, Youngsville, and every surrounding East Baton Rouge, Lafayette, and Iberia Parish community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your South LA Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Celebration Worth Planning`,
    occasionSubtext:       'From LSU graduation weekends and oil & gas team events to Cajun family milestones and milestone birthdays, private hibachi is South Louisiana\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Hibachi in ${city}, ${abbr} — Common Questions Answered`,
    testimonialSubheading: 'What South Louisiana Hosts Are Saying',
  },
  // LA2 — Regional Louisiana (Shreveport, Lake Charles)
  {
    heroPill:         'Louisiana Private Chef',
    experiencePill:   'The Private Hibachi Experience Louisiana Needed',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,          desc: `No reservation required — your ${city} backyard, patio, or outdoor space becomes an exclusive private dining room for your family or team.` },
      { icon: '🎉', title: 'Built for Louisiana Celebrations',        desc: `Milestone birthdays, graduation parties, and corporate team events in ${city} all find a better home in your backyard than at a restaurant table.` },
      { icon: '🥩', title: 'Premium Proteins, Live Performance',      desc: 'Every guest orders individually — chicken, steak, shrimp, salmon, filet mignon, lobster tail — all cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',            desc: `Your chef arrives fully equipped, performs the entire dinner, and packs out completely. Your ${city} property is spotless when they leave.` },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi event in ${city}, LA`,
    areasPill:          'Serving Louisiana Regional Markets',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding regional communities — including Bossier City, Benton, and Northwest Louisiana from Shreveport; and Sulphur, Westlake, and Southwest Louisiana from Lake Charles. Every event is fully self-contained; we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Louisiana Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Event That Delivers`,
    occasionSubtext:       'From energy sector corporate dinners to graduation parties and family milestones, private hibachi is Louisiana\'s most memorable private dining experience in the regional markets',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Louisiana Hosts Are Saying',
  },
  // LA3 — New Orleans Metro (Metairie, Kenner, Mandeville, Covington)
  {
    heroPill:         'New Orleans Metro Private Chef',
    experiencePill:   'The New Orleans Family Celebration Format That Actually Works',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,               desc: `Skip the French Quarter reservation battle — your ${city} backyard, patio, or covered outdoor space becomes an exclusive private dining room for your whole family.` },
      { icon: '🎓', title: 'Built for New Orleans Metro Graduation Season', desc: `Tulane, Loyola, UNO, Xavier, and every Jefferson and St. Tammany Parish high school commencement create the same problem: every table in the metro is gone weeks out. A private chef comes to your ${city} home instead.` },
      { icon: '🔥', title: 'The Full Teppanyaki Experience, At Your Property', desc: `Fire tricks, flying shrimp, premium proteins cooked to order — 90–120 minutes of live hibachi that keeps every generation at the same table.` },
      { icon: '✨', title: 'Complete Setup & Zero Cleanup',                 desc: `Chef arrives fully equipped, performs the entire dinner, and packs out completely. Your ${city} home is exactly as it was.` },
    ],
    experienceImage:    '/pics/hibachi-dallas-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, LA home`,
    areasPill:          'Serving Greater New Orleans',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater New Orleans Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Greater New Orleans — Metairie, Kenner, the Northshore (Mandeville, Covington, Madisonville, Abita Springs), and every surrounding Jefferson, Orleans, and St. Tammany Parish community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Celebration Your Family Will Remember`,
    occasionSubtext:       'From graduation parties and milestone birthdays to anniversary dinners and backyard family reunions, private hibachi is the New Orleans metro\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What New Orleans Metro Hosts Are Saying',
  },
]

// ─── Testimonials ──────────────────────────────────────────────────────────────
const LA_TESTIMONIALS = {
  'new-orleans': [
    {
      text:     "We planned a bachelorette trip to New Orleans for nine people — three days, every experience the city has to offer. The private hibachi chef on the last night was unanimously the highlight of the entire trip. We ordered from our vacation rental's back courtyard, the chef was incredible, and it was a two-hour experience that none of us had expected to be that memorable.",
      name:     'Kelsey D.',
      city:     'New Orleans, LA',
      event:    'Bachelorette Dinner Party',
      initials: 'KD',
    },
    {
      text:     "Hosted a client dinner for ten people at my Garden District home and Hibachi Connect delivered exactly what I needed — professional, entertaining, flawless food quality. Three clients specifically said it was the best corporate dinner they'd attended in New Orleans, which is saying something in this city.",
      name:     'Marcus B.',
      city:     'New Orleans, LA',
      event:    'Corporate Client Dinner',
      initials: 'MB',
    },
    {
      text:     "Family reunion in New Orleans — 18 people from five states, ages 8 to 72. Every restaurant option we considered had either a time limit, a noise problem, or couldn't handle the group size. The private hibachi chef set up on the back deck of our Uptown rental and turned dinner into the best two hours of the entire reunion weekend.",
      name:     'Vanessa T.',
      city:     'New Orleans, LA',
      event:    'Family Reunion Dinner',
      initials: 'VT',
    },
  ],
  'baton-rouge': [
    {
      text:     "LSU graduation weekend in Baton Rouge is genuinely impossible for large groups. We have 22 family members — grandparents from Texas, cousins from Mississippi — and every restaurant was fully booked six weeks out. The private hibachi chef at our home was not only the practical solution, it was the best graduation dinner we've ever hosted.",
      name:     'Patricia W.',
      city:     'Baton Rouge, LA',
      event:    'LSU Graduation Celebration',
      initials: 'PW',
    },
    {
      text:     "I used Hibachi Connect for a physician group dinner at my home in the Bocage area — 14 colleagues, outdoor setting, the chef was completely professional and the quality of the food was outstanding. Every person asked for the contact information before the evening was over.",
      name:     'Dr. Andrew C.',
      city:     'Baton Rouge, LA',
      event:    'Physician Group Dinner',
      initials: 'AC',
    },
    {
      text:     "My husband's 50th birthday had 26 guests — our whole neighborhood plus family from out of town. The private hibachi chef handled everything. We spent the evening celebrating rather than managing logistics, and every guest said it was the most fun dinner party they'd attended in years.",
      name:     'Michelle N.',
      city:     'Baton Rouge, LA',
      event:    '50th Birthday Celebration',
      initials: 'MN',
    },
  ],
  'lafayette': [
    {
      text:     "Our oil and gas team of 20 had an end-of-project celebration at a colleague's home in Lafayette and the hibachi chef made the whole evening. The food was genuinely excellent — better than any of our usual corporate dinners — and the performance kept everyone entertained for two straight hours. This is our new team event format.",
      name:     'Ryan F.',
      city:     'Lafayette, LA',
      event:    'Oil & Gas Team Celebration',
      initials: 'RF',
    },
    {
      text:     "We hosted a graduation party for our daughter at our Lafayette home — 30 people, family from across Acadiana. The hibachi chef was exactly right for a large Cajun family gathering: entertaining, generous with the food, and kept the whole table together the entire evening. Will be doing this every graduation season.",
      name:     'Denise M.',
      city:     'Lafayette, LA',
      event:    'Graduation Party',
      initials: 'DM',
    },
    {
      text:     "My wife's 40th birthday dinner had 16 guests on our backyard patio. The chef was professional, the performance was genuinely impressive, and the food — especially the seafood — was excellent. Lafayette has plenty of great restaurants, but nothing compares to a private chef at your own home.",
      name:     'Christopher B.',
      city:     'Lafayette, LA',
      event:    'Birthday Dinner',
      initials: 'CB',
    },
  ],
  'shreveport': [
    {
      text:     "We hosted our son's graduation party at our home near Cross Lake — 25 guests, a mix of family, friends, and his fellow Barksdale officers. The chef was fantastic, the setup was seamless, and the performance kept everyone engaged the entire evening. The best party we've hosted in Shreveport.",
      name:     'Colonel James H.',
      city:     'Shreveport, LA',
      event:    'Graduation Celebration',
      initials: 'JH',
    },
    {
      text:     "Our regional sales team of 18 had a year-end dinner at someone's home in Shreveport and Hibachi Connect exceeded every expectation. Professional chef, excellent food, complete setup and cleanup. Three team members from out of town said it was the best corporate event they'd attended anywhere.",
      name:     'Sandra P.',
      city:     'Shreveport, LA',
      event:    'Corporate Team Dinner',
      initials: 'SP',
    },
    {
      text:     "I celebrated my mother's 70th birthday with 20 family members and the private hibachi experience was absolutely perfect. The chef was patient with the older guests, entertaining for the grandchildren, and the food was exceptional. My mother said it was the best birthday she'd ever had.",
      name:     'Donna R.',
      city:     'Shreveport, LA',
      event:    '70th Birthday Celebration',
      initials: 'DR',
    },
  ],
  'lake-charles': [
    {
      text:     "Our engineering team of 16 finished a major plant commissioning and celebrated at a colleague's home near Lake Charles. The hibachi chef was the right call — professional, entertaining, excellent food. Best team event we've organized in the refinery corridor. Already planning the next one.",
      name:     'Todd S.',
      city:     'Lake Charles, LA',
      event:    'Engineering Team Celebration',
      initials: 'TS',
    },
    {
      text:     "We were staying at a lake house near Lake Charles for a long weekend and booked a private hibachi chef for Saturday night. The whole group of 14 agreed it was the best evening of the trip. Chef was professional, set up on the deck, and the food was better than we expected. Booking again for our next trip.",
      name:     'Ashley K.',
      city:     'Lake Charles, LA',
      event:    'Lake House Weekend Dinner',
      initials: 'AK',
    },
    {
      text:     "My daughter's quinceañera celebration had 28 guests and the private hibachi chef was everything we needed. The entertainment kept everyone — from grandparents to teenagers — at the same table for two full hours. The food was outstanding and the full cleanup meant we could stay in the moment all evening.",
      name:     'Maria G.',
      city:     'Lake Charles, LA',
      event:    'Quinceañera Celebration',
      initials: 'MG',
    },
  ],
  'metairie': [
    { text: "My daughter graduated from Tulane and we had 24 family members at our Metairie home — grandparents from Shreveport, cousins from Houston, and the full New Orleans extended family. Every French Quarter restaurant was fully booked for graduation weekend. The private hibachi chef at our house was the right call from the moment it started — two hours at the same table with everyone. Best graduation dinner we've hosted.", name: 'Diane F.', city: 'Metairie, LA', event: 'Tulane Graduation Party', initials: 'DF' },
    { text: "We hosted my father's 70th birthday at our Old Metairie home — 20 people, mix of family and longtime friends. The chef was professional, the food was exceptional, and the performance kept everyone at the table from start to finish. Three of our guests said it was the best dinner party they'd attended in years.", name: 'Richard B.', city: 'Metairie, LA', event: '70th Birthday Celebration', initials: 'RB' },
    { text: "Our neighborhood block party became a private hibachi dinner when we organized a group of 26 for our Metairie street. The chef set up in the driveway, everyone circled around, and it turned into the most memorable evening our neighborhood has had. Already planning the next one.", name: 'Sandra L.', city: 'Metairie, LA', event: 'Neighborhood Celebration', initials: 'SL' },
  ],
  'kenner': [
    { text: "My son's high school graduation had 22 guests in our Kenner backyard — the whole family plus his teammates and their parents. The private hibachi chef was an absolute hit. Everyone was watching the grill, the food was outstanding, and for two hours nobody was on their phone. Best graduation party we've ever hosted.", name: 'Angela T.', city: 'Kenner, LA', event: 'High School Graduation', initials: 'AT' },
    { text: "We did a birthday party for my wife's 45th at our Kenner home — 18 of our closest friends on the back patio. The chef was entertaining and the food quality was better than any hibachi restaurant we've been to. The full cleanup at the end was the detail that really impressed everyone. Highly recommend.", name: 'Michael R.', city: 'Kenner, LA', event: 'Birthday Party', initials: 'MR' },
    { text: "Family reunion at our Kenner home — 30 people from four different states. I was worried about organizing a group that large but the private hibachi format handled everything. One chef, one grill, 30 people all at the same experience for two hours. It was exactly what the reunion needed.", name: 'Carolyn H.', city: 'Kenner, LA', event: 'Family Reunion Dinner', initials: 'CH' },
  ],
  'mandeville': [
    { text: "We hosted a graduation party for our son at our Mandeville home — he graduated from LSU and we had 26 family members come to the Northshore for the weekend. Every Baton Rouge restaurant was fully booked, so we booked the private hibachi chef at our house instead. It was significantly better than any restaurant dinner would have been. Everyone agreed we're doing this every graduation.", name: 'Jennifer S.', city: 'Mandeville, LA', event: 'LSU Graduation Celebration', initials: 'JS' },
    { text: "Hosted a corporate dinner for my financial advisory team at my Mandeville home — 12 clients and colleagues, outdoor setting overlooking our backyard. The chef was completely professional and the quality of the food was exceptional. Four clients specifically said it was the best event I've hosted in the years they've known me.", name: 'Christopher A.', city: 'Mandeville, LA', event: 'Financial Advisory Client Dinner', initials: 'CA' },
    { text: "My daughter's bachelorette party at our Mandeville home had 16 guests — her bridesmaids and closest friends. We debated between going into New Orleans for the evening or staying on the Northshore. The private hibachi chef at home was the right decision. Two hours of entertainment, excellent food, complete cleanup, and nobody had to drive into the city.", name: 'Patricia O.', city: 'Mandeville, LA', event: 'Bachelorette Party', initials: 'PO' },
  ],
  'covington': [
    { text: "My husband's retirement party had 24 guests at our Covington home — 30 years with the same company and we wanted to celebrate properly. The private hibachi chef was the perfect format. The performance kept everyone entertained, the food was excellent, and the full setup and cleanup meant I could actually enjoy my own party.", name: 'Nancy W.', city: 'Covington, LA', event: 'Retirement Celebration', initials: 'NW' },
    { text: "We hosted our daughter's sweet sixteen at our Covington home — 20 teenagers plus parents. The hibachi chef was exactly the right format for a mixed group like that. Kids were fascinated by the performance, parents had a real dinner conversation, and the food was legitimately outstanding. We've had multiple parents reach out asking for the contact.", name: 'David M.', city: 'Covington, LA', event: 'Sweet Sixteen Party', initials: 'DM' },
    { text: "Graduation weekend for our son at our Covington home — Northlake Christian graduation, 22 family members, the full extended St. Tammany family. The private hibachi chef was the solution to a problem I didn't know how to solve otherwise. Outstanding evening.", name: 'Laura K.', city: 'Covington, LA', event: 'High School Graduation', initials: 'LK' },
  ],
  'bossier-city': [
    { text: "Our Barksdale crew of 18 celebrated a deployment homecoming at a colleague's home in Bossier City. The private hibachi chef was outstanding — professional, entertaining, and the food was genuinely exceptional. For a group used to eating in the chow hall and overseas, this was a memorable evening. Already planning the next one.", name: 'Major James P.', city: 'Bossier City, LA', event: 'Military Homecoming Celebration', initials: 'JP' },
    { text: "We hosted my son's Airline High graduation party at our Bossier City home — 26 guests, mix of family and his teammates. Every Shreveport restaurant was fully booked for graduation weekend. The private hibachi chef at our home was a significantly better experience than anything we would have gotten at a restaurant.", name: 'Karen D.', city: 'Bossier City, LA', event: 'High School Graduation', initials: 'KD' },
    { text: "Corporate dinner for our regional sales team of 20 at a colleague's home in Bossier City. The chef was completely professional, the food quality was outstanding, and the teppanyaki performance was a genuine hit with the team. Two members from out of state said it was the best corporate event they'd attended in the Shreveport-Bossier market.", name: 'Robert E.', city: 'Bossier City, LA', event: 'Corporate Team Dinner', initials: 'RE' },
  ],
  'gonzales': [
    { text: "My daughter's LSU graduation party was at our Gonzales home — 28 family members from Texas, Mississippi, and Arkansas. We've been hosting graduation parties in the Ascension Parish area for years and could never find a restaurant that worked for a group this size. The private hibachi chef solved every problem. Best graduation party we've ever hosted.", name: 'Brenda C.', city: 'Gonzales, LA', event: 'LSU Graduation Celebration', initials: 'BC' },
    { text: "We hosted a birthday party for my husband at our Gonzales home — 22 guests, backyard setting, chef set up on the covered patio. The food was exceptional and the performance was exactly what we hoped for. Multiple guests asked for the contact before the evening was over.", name: 'Tiffany N.', city: 'Gonzales, LA', event: 'Birthday Celebration', initials: 'TN' },
    { text: "Our Ascension Parish neighborhood gathered 30 people for a block party hibachi evening at our Gonzales home. The chef handled the group perfectly — fire tricks kept the kids engaged, the premium proteins kept the adults happy, and the full cleanup meant the evening ended as well as it started.", name: 'Craig B.', city: 'Gonzales, LA', event: 'Neighborhood Party', initials: 'CB' },
  ],
  'prairieville': [
    { text: "Prairieville doesn't have a lot of options for large graduation parties — our daughter graduated from LSU and we had 24 guests at our home. The private hibachi chef was exactly the right solution. Chef arrived early, set up in the backyard, and the evening was everything we hoped for. The food was better than any hibachi restaurant we've been to.", name: 'Scott H.', city: 'Prairieville, LA', event: 'LSU Graduation Party', initials: 'SH' },
    { text: "My wife's 40th birthday party had 20 of our closest Ascension Parish friends in our Prairieville backyard. The chef was professional and entertaining, the food was genuinely outstanding, and the teppanyaki performance was something our guests had never seen done privately before. Perfect evening.", name: 'Jason W.', city: 'Prairieville, LA', event: '40th Birthday Party', initials: 'JW' },
    { text: "We hosted a holiday dinner for 18 neighbors at our Prairieville home in December. The private hibachi chef turned our backyard into something special — everyone stayed at the table the entire evening and the food was exceptional. We're making this our annual holiday tradition.", name: 'Michelle P.', city: 'Prairieville, LA', event: 'Holiday Neighborhood Dinner', initials: 'MP' },
  ],
  'youngsville': [
    { text: "My son graduated from UL and we had 26 guests at our Youngsville home — Acadiana family from four parishes. Finding a Lafayette restaurant that handles 26 people during UL graduation weekend is essentially impossible. The private hibachi chef at our house was an extraordinary evening and significantly better than anything we would have found at a restaurant.", name: 'Denise F.', city: 'Youngsville, LA', event: 'UL Graduation Celebration', initials: 'DF' },
    { text: "Corporate team event for our oil and gas group of 22 at my Youngsville home. The chef was completely professional, the food quality exceeded every expectation, and the performance kept every member of the team at the table for the full two hours. Best team event we've organized in the Lafayette market.", name: 'Brad T.', city: 'Youngsville, LA', event: 'Oil & Gas Team Event', initials: 'BT' },
    { text: "My daughter's quinceañera celebration at our Youngsville home had 32 guests. The private hibachi chef was the entertainment and the dinner all in one — grandparents, teenagers, and everyone in between all completely engaged for two hours. The Cajun family celebration format and hibachi turn out to be a perfect match.", name: 'Rosa M.', city: 'Youngsville, LA', event: 'Quinceañera Celebration', initials: 'RM' },
  ],
  'broussard': [
    { text: "Our refinery operations team of 24 celebrated the completion of a major turnaround at a colleague's home in Broussard. The private hibachi chef was the right format for a group like ours — everyone was in celebration mode, the performance was genuinely entertaining, and the food was excellent. Best team event we've done in the Lafayette corridor.", name: 'Mark A.', city: 'Broussard, LA', event: 'Refinery Team Celebration', initials: 'MA' },
    { text: "Graduation party for our daughter at our Broussard home — 20 guests, outdoor patio, the full Cajun family gathering. The private hibachi chef turned a standard graduation party into something our guests are still talking about. Every Acadiana family should do this for graduation season.", name: 'Patricia L.', city: 'Broussard, LA', event: 'Graduation Party', initials: 'PL' },
    { text: "My husband's 50th at our Broussard home had 18 friends and family in the backyard. The chef arrived early, set up completely, and the two-hour teppanyaki performance was the highlight of the entire evening. Multiple guests asked for the contact before they left.", name: 'Amy C.', city: 'Broussard, LA', event: '50th Birthday Celebration', initials: 'AC' },
  ],
  'hammond': [
    { text: "My daughter graduated from Southeastern Louisiana and we had 22 guests at our Hammond home — family from across Louisiana and Mississippi. SLU graduation weekend is impossible at any Hammond restaurant — fully booked for weeks. The private hibachi chef at our home was the solution we needed and the best graduation dinner we've ever hosted.", name: 'Gina T.', city: 'Hammond, LA', event: 'SLU Graduation Celebration', initials: 'GT' },
    { text: "We hosted a birthday party for my husband at our Hammond home — 18 guests, outdoor patio setup. The mobile hibachi chef traveled to us from the New Orleans area and was completely worth it. Professional, entertaining, and the food quality was outstanding. Every guest agreed it was the best dinner party we've ever hosted in Tangipahoa Parish.", name: 'Karen S.', city: 'Hammond, LA', event: 'Birthday Celebration', initials: 'KS' },
    { text: "Corporate team dinner for our regional distribution group of 16 at a manager's home in Hammond. The private hibachi format was new to most of the team and within ten minutes of the chef starting, everyone was completely engaged. Best corporate event we've organized in the Hammond corridor.", name: 'Eric B.', city: 'Hammond, LA', event: 'Corporate Team Dinner', initials: 'EB' },
  ],
}

// ─── City experience images ────────────────────────────────────────────────────
const LA_CITY_IMAGE_MAP = {
  'new-orleans':  { src: '/pics/hibachi-pool-party.jpg',    alt: (city) => `Private hibachi at a ${city} vacation rental or Garden District home` },
  'baton-rouge':  { src: '/pics/backyard-hibachi-3.jpg',    alt: (city) => `Hibachi at home in ${city}, LA` },
  'lafayette':    { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Hibachi catering event in ${city}, LA` },
  'shreveport':   { src: '/pics/private-party-chef-6.jpg',  alt: (city) => `Private hibachi chef at a ${city} home` },
  'lake-charles': { src: '/pics/hibachi-miami.jpg',         alt: (city) => `Mobile hibachi at a ${city} area home or lake house` },
  'metairie':     { src: '/pics/hibachi-dallas-home.jpg',   alt: (city) => `Private hibachi chef at a ${city}, LA home` },
  'kenner':       { src: '/pics/backyard-hibachi.jpg',      alt: (city) => `Backyard hibachi party in ${city}, LA` },
  'mandeville':   { src: '/pics/hibachi-to-you.jpg',        alt: (city) => `Private hibachi chef at a ${city} Northshore home` },
  'covington':    { src: '/pics/hibachi-austin-home-3.jpg', alt: (city) => `Hibachi at home in ${city}, LA` },
  'bossier-city': { src: '/pics/mobile-hibachi-2.jpg',      alt: (city) => `Hibachi at home in ${city}, LA` },
  'gonzales':     { src: '/pics/hibachi-pic-2.jpg',         alt: (city) => `Private hibachi chef at a ${city} home` },
  'prairieville': { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Backyard hibachi party in ${city}, LA` },
  'youngsville':  { src: '/pics/hibachi-austin-home-2.jpg', alt: (city) => `Hibachi at home in ${city}, LA` },
  'broussard':    { src: '/pics/hibachi-photo-1.jpg',       alt: (city) => `Hibachi catering event in ${city}, LA` },
  'hammond':      { src: '/pics/hibachi-to-you-2.jpg',      alt: (city) => `Mobile hibachi chef in ${city}, LA` },
}

// ─── Support images ────────────────────────────────────────────────────────────
const LA_SUPPORT_IMAGES = {
  'new-orleans': {
    testimonial: {
      src:        '/pics/hero-3.jpg',
      alt:        (city) => `Private hibachi chef at a New Orleans vacation rental or estate`,
      caption:    'New Orleans vacation groups and estate entertaining',
      trustBadge: 'The Chef Comes to Your Property',
      intro:      (city) => `New Orleans vacation groups and Garden District hosts share one challenge: the city's restaurant scene is world-famous, but nothing in it handles 16 to 25 people at a single table for a two-hour private experience. Private hibachi does. See what New Orleans hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-home.jpg',
      alt:     (city) => `Private hibachi chef ready for a New Orleans event`,
      caption: 'The New Orleans private dining upgrade',
    },
  },
  'baton-rouge': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Private hibachi dinner at a Baton Rouge, LA home`,
      caption:    'Baton Rouge graduation and professional events',
      trustBadge: 'Trusted by Baton Rouge Families',
      intro:      (city) => `Baton Rouge families — from LSU graduation hosts in the Bocage corridor to healthcare professionals in Prairieville and young families in Central — share a common experience: graduation season exhausts every restaurant option. Private hibachi at your home solves that cleanly. Here's what Baton Rouge hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef at a Baton Rouge, LA home`,
      caption: 'The Baton Rouge graduation celebration format',
    },
  },
  'lafayette': {
    testimonial: {
      src:        '/pics/hero-1.jpg',
      alt:        (city) => `Hibachi catering event in Lafayette, LA`,
      caption:    'Lafayette oil & gas and Cajun family events',
      trustBadge: 'Trusted by Lafayette Hosts',
      intro:      (city) => `Lafayette's oil and gas professional community and Acadiana's large Cajun family celebrations both find the same answer in private hibachi: a format that works for 15–30 people, keeps every generation engaged at the same table, and delivers food quality that matches any special occasion. Here's what Lafayette hosts have experienced:`,
    },
    cta: {
      src:     '/pics/hero-3.jpg',
      alt:     (city) => `Private hibachi chef at a Lafayette, LA event`,
      caption: 'The Lafayette celebration format',
    },
  },
  'shreveport': {
    testimonial: {
      src:        '/pics/mobile-hibachi.jpg',
      alt:        (city) => `Private hibachi event at a Shreveport, LA home`,
      caption:    'Shreveport and Bossier City events',
      trustBadge: 'Trusted by Shreveport Hosts',
      intro:      (city) => `Shreveport and Bossier City hosts — military families at Barksdale, corporate professionals in the Red River corridor, and North Louisiana families celebrating milestones — have found that private hibachi delivers a dining experience that no local restaurant format can match. See what Shreveport hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-at-home.jpg',
      alt:     (city) => `Private hibachi chef at a Shreveport, LA event`,
      caption: 'The Shreveport private chef format',
    },
  },
  'lake-charles': {
    testimonial: {
      src:        '/pics/hibachi-dallas.jpg',
      alt:        (city) => `Private hibachi at a Lake Charles, LA home or lake property`,
      caption:    'Lake Charles energy sector and lake house events',
      trustBadge: 'Trusted by Lake Charles Hosts',
      intro:      (city) => `Lake Charles energy sector professionals and Southwest Louisiana families have found that private hibachi is the best format for large group dining — whether it's a corporate team celebration, a lake house weekend event, or a milestone family occasion that deserves something more than a restaurant table. See what Lake Charles hosts have experienced:`,
    },
    cta: {
      src:     '/pics/hibachi-pool-party.jpg',
      alt:     (city) => `Private hibachi chef at a Lake Charles, LA property`,
      caption: 'The Lake Charles group dinner upgrade',
    },
  },
  'metairie': {
    testimonial: {
      src:        '/pics/hero-2.jpg',
      alt:        (city) => `Private hibachi at a Metairie, LA home`,
      caption:    'Metairie graduation and New Orleans metro events',
      trustBadge: 'Trusted by Metairie Families',
      intro:      (city) => `Metairie families hosting Tulane and Loyola graduation weekends, Jefferson Parish milestone celebrations, and New Orleans metro gatherings have found that private hibachi at home delivers what no restaurant in the area can — a two-hour private experience for every guest at the same table. Here's what Metairie hosts are saying:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Private hibachi chef at a Metairie, LA home`,
      caption: 'The Metairie home celebration format',
    },
  },
  'kenner': {
    testimonial: {
      src:        '/pics/hibachi-shot-2.jpg',
      alt:        (city) => `Backyard hibachi party in Kenner, LA`,
      caption:    'Kenner backyard celebrations and graduation parties',
      trustBadge: 'Trusted by Kenner Families',
      intro:      (city) => `Kenner families hosting graduation parties, backyard milestones, and Greater New Orleans celebrations have found that private hibachi is the format that works — no reservation challenges, no restaurant table limits, just a chef at your backyard for your entire group. See what Kenner hosts have experienced:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Backyard hibachi chef in Kenner, LA`,
      caption: 'The Kenner backyard celebration format',
    },
  },
  'mandeville': {
    testimonial: {
      src:        '/pics/hero-4.jpg',
      alt:        (city) => `Private hibachi chef at a Mandeville, LA Northshore home`,
      caption:    'Mandeville Northshore milestone dinners',
      trustBadge: 'Trusted by Mandeville Hosts',
      intro:      (city) => `Mandeville families on the Northshore — hosting LSU graduation weekends, St. Tammany Parish milestone celebrations, and New Orleans lakefront gatherings — have found that private hibachi at their home is the premium format that matches the setting. Here's what Mandeville hosts are saying:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Private hibachi chef at a Mandeville, LA home`,
      caption: 'The Mandeville Northshore celebration format',
    },
  },
  'covington': {
    testimonial: {
      src:        '/pics/hibachi-catering-2.jpg',
      alt:        (city) => `Hibachi at home in Covington, LA`,
      caption:    'Covington Northshore family and graduation events',
      trustBadge: 'Trusted by Covington Families',
      intro:      (city) => `Covington families on the Northshore — hosting graduation parties, family milestones, and backyard celebrations — have found that private hibachi at home solves the group dining problem that no restaurant in St. Tammany Parish can. See what Covington hosts have experienced:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Hibachi at home in Covington, LA`,
      caption: 'The Covington backyard celebration format',
    },
  },
  'bossier-city': {
    testimonial: {
      src:        '/pics/hibachi-pic-4.jpg',
      alt:        (city) => `Private hibachi event in Bossier City, LA`,
      caption:    'Bossier City military and Shreveport-Bossier metro events',
      trustBadge: 'Trusted by Bossier City Hosts',
      intro:      (city) => `Bossier City families — Barksdale military homecomings, graduation celebrations, and Shreveport-Bossier metro milestone dinners — have found that private hibachi at home delivers an experience that the local restaurant scene can't match for large groups. Here's what Bossier City hosts are saying:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Private hibachi chef in Bossier City, LA`,
      caption: 'The Bossier City private chef format',
    },
  },
  'gonzales': {
    testimonial: {
      src:        '/pics/hibachi-dallas-home.jpg',
      alt:        (city) => `Private hibachi chef at a Gonzales, LA home`,
      caption:    'Gonzales Ascension Parish and LSU graduation events',
      trustBadge: 'Trusted by Gonzales Families',
      intro:      (city) => `Gonzales families in Ascension Parish — hosting LSU graduation weekends, milestone celebrations, and Baton Rouge metro gatherings — have found that private hibachi at home is the format that handles large groups cleanly and delivers the experience the occasion deserves. See what Gonzales hosts have experienced:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Private hibachi chef at a Gonzales, LA home`,
      caption: 'The Gonzales home celebration format',
    },
  },
  'prairieville': {
    testimonial: {
      src:        '/pics/hibachi-pic-3.jpg',
      alt:        (city) => `Backyard hibachi party in Prairieville, LA`,
      caption:    'Prairieville backyard and Ascension Parish graduation events',
      trustBadge: 'Trusted by Prairieville Families',
      intro:      (city) => `Prairieville families in Ascension Parish — hosting backyard graduation parties, family milestones, and Baton Rouge corridor celebrations — have found that private hibachi at home is the group dining format that works for 15 to 30 guests without reservation pressure. Here's what Prairieville hosts are saying:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Backyard hibachi in Prairieville, LA`,
      caption: 'The Prairieville backyard celebration format',
    },
  },
  'youngsville': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Hibachi at home in Youngsville, LA`,
      caption:    'Youngsville Acadiana and UL graduation events',
      trustBadge: 'Trusted by Youngsville Families',
      intro:      (city) => `Youngsville families in the Lafayette corridor — hosting UL graduation weekends, Acadiana milestone celebrations, and backyard family gatherings — have found that private hibachi at home delivers a premium dining experience that fits the occasion perfectly. See what Youngsville hosts have experienced:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Hibachi at home in Youngsville, LA`,
      caption: 'The Youngsville home celebration format',
    },
  },
  'broussard': {
    testimonial: {
      src:        '/pics/hibachi-photo-2.jpg',
      alt:        (city) => `Hibachi catering in Broussard, LA`,
      caption:    'Broussard oil & gas and Lafayette corridor events',
      trustBadge: 'Trusted by Broussard Hosts',
      intro:      (city) => `Broussard hosts in the Lafayette corridor — oil and gas professionals hosting team events, families celebrating UL graduations, and Cajun milestone dinners — have found that private hibachi catering is the format that handles large groups and delivers the quality the occasion deserves. Here's what Broussard hosts are saying:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Hibachi catering in Broussard, LA`,
      caption: 'The Broussard catering format',
    },
  },
  'hammond': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Mobile hibachi in Hammond, LA`,
      caption:    'Hammond Southeastern Louisiana graduation events',
      trustBadge: 'Trusted by Hammond Families',
      intro:      (city) => `Hammond families — hosting Southeastern Louisiana graduation weekends, Tangipahoa Parish milestone celebrations, and I-12 corridor gatherings — have found that mobile hibachi at home is the group dining format that works when no restaurant table in Hammond can handle 20 guests at once. See what Hammond hosts have experienced:`,
    },
    cta: {
      src:     null,
      alt:     (city) => `Mobile hibachi in Hammond, LA`,
      caption: 'The Hammond home celebration format',
    },
  },
}

// ─── Custom meta overrides ─────────────────────────────────────────────────────
const LA_CUSTOM_META = {
  'new-orleans': {
    title: 'Private Hibachi Chef in New Orleans, LA | Hibachi Connect',
    desc:  'Private hibachi chef at your New Orleans vacation rental, Garden District home, or Uptown property. The premium group dining upgrade for bachelorette weekends, family reunions, and corporate retreats.',
  },
  'baton-rouge': {
    title: 'Hibachi at Home in Baton Rouge, LA | Hibachi Connect',
    desc:  'Hibachi at home in Baton Rouge for LSU graduation weekends, professional dinner parties, and family milestone celebrations. Your private chef comes directly to your home.',
  },
  'lafayette': {
    title: 'Hibachi Catering in Lafayette, LA | Hibachi Connect',
    desc:  'Hibachi catering in Lafayette for oil & gas team events, Acadiana graduation parties, and large family celebrations. A private chef arrives at your home — no restaurants required.',
  },
  'shreveport': {
    title: 'Hibachi at Home in Shreveport, LA | Hibachi Connect',
    desc:  'Hibachi at home in Shreveport for graduation celebrations, Barksdale military family events, and North Louisiana milestones. Your private chef arrives fully equipped.',
  },
  'lake-charles': {
    title: 'Mobile Hibachi in Lake Charles, LA | Hibachi Connect',
    desc:  'Mobile hibachi in Lake Charles for energy sector team events, lake house group dinners, and Southwest Louisiana family celebrations. Your private chef comes to you.',
  },
  'metairie': {
    title: 'Hibachi at Home in Metairie, LA | Hibachi Connect',
    desc:  'Hibachi at home in Metairie for Tulane and Loyola graduation weekends, Jefferson Parish family milestones, and New Orleans metro celebrations. Your private chef comes to you.',
  },
  'kenner': {
    title: 'Backyard Hibachi in Kenner, LA | Hibachi Connect',
    desc:  'Backyard hibachi in Kenner for graduation parties, family milestones, and Greater New Orleans celebrations. A private chef arrives at your Kenner home fully equipped.',
  },
  'mandeville': {
    title: 'Private Hibachi Chef in Mandeville, LA | Hibachi Connect',
    desc:  'Private hibachi chef at your Mandeville home for LSU graduation weekends, Northshore milestone dinners, and St. Tammany Parish family celebrations.',
  },
  'covington': {
    title: 'Hibachi at Home in Covington, LA | Hibachi Connect',
    desc:  'Hibachi at home in Covington, LA for graduation parties, Northshore family milestones, and backyard celebrations. Your private chef arrives fully set up.',
  },
  'bossier-city': {
    title: 'Hibachi at Home in Bossier City, LA | Hibachi Connect',
    desc:  'Hibachi at home in Bossier City for Barksdale military homecomings, graduation parties, and Shreveport-Bossier metro family events. Your private chef comes to you.',
  },
  'gonzales': {
    title: 'Private Hibachi Chef in Gonzales, LA | Hibachi Connect',
    desc:  'Private hibachi chef in Gonzales for LSU graduation weekends, Ascension Parish family milestones, and Baton Rouge metro celebrations. Chef comes to your home.',
  },
  'prairieville': {
    title: 'Backyard Hibachi in Prairieville, LA | Hibachi Connect',
    desc:  'Backyard hibachi in Prairieville for LSU graduation parties, Ascension Parish family milestones, and outdoor celebrations. Your private chef arrives fully equipped.',
  },
  'youngsville': {
    title: 'Hibachi at Home in Youngsville, LA | Hibachi Connect',
    desc:  'Hibachi at home in Youngsville for UL graduation weekends, Acadiana family milestones, and Lafayette-area celebrations. Your private chef comes directly to you.',
  },
  'broussard': {
    title: 'Hibachi Catering in Broussard, LA | Hibachi Connect',
    desc:  'Hibachi catering in Broussard for oil & gas team events, UL graduation parties, and Lafayette corridor Cajun family milestones. A private chef arrives fully set up.',
  },
  'hammond': {
    title: 'Mobile Hibachi in Hammond, LA | Hibachi Connect',
    desc:  'Mobile hibachi in Hammond for Southeastern Louisiana graduation weekends, Tangipahoa Parish family milestones, and I-12 corridor celebrations. Chef comes to you.',
  },
}

// ─── Intro / closing placeholders ─────────────────────────────────────────────
const _EMPTY_INTRO = { headline: () => '', opening: () => '', middle: () => '', closing: () => '' }
const _EMPTY_CLOSE = { headline: () => '', sub: () => '', urgency: '', btnPrimary: '', btnSecondary: '' }

// ─── LA_INTRO_VARIANTS — 3 generic (indices 697–699) ──────────────────────────
export const LA_INTRO_VARIANTS = [
  // LA0 (697) — New Orleans Destination
  {
    headline: () => 'New Orleans Is the Most Famous Food City in the Country — and Private Hibachi Is Still Something Else Entirely',
    opening:  () => 'In a city built on exceptional restaurants, a private hibachi chef delivers something the entire French Quarter can\'t: your own chef, your own group, your own outdoor space, with nobody else at the table. Vacation rental groups, Garden District hosts, and corporate retreat planners have discovered that the hibachi format creates a two-hour shared experience that every New Orleans restaurant — no matter how celebrated — simply cannot replicate.',
    middle:   () => 'The logistics alone make the case. New Orleans restaurants at peak season require weeks of advance planning for large groups, often split tables, and always have a time limit. A private chef at your Uptown home or Garden District property has none of those constraints — your group stays together, the performance continues for 90–120 minutes, and the experience becomes the evening rather than just dinner.',
    closing:  () => 'We serve New Orleans, Metairie, Kenner, the North Shore, and all of Greater New Orleans. Weekend dates and peak season book quickly — confirm your New Orleans event early.',
  },
  // LA1 (698) — South Louisiana
  {
    headline: () => 'South Louisiana Families Celebrate at Scale — and Private Hibachi Is Made for That',
    opening:  () => 'Baton Rouge and Lafayette share a celebration culture rooted in large family gatherings, university milestones, and professional community events. LSU graduation season in Baton Rouge and UL Lafayette\'s commencement week both push every nearby restaurant to capacity for weeks at a time. And Louisiana\'s multi-generational Cajun family celebrations routinely involve 20, 25, or 30 people — a size that any restaurant struggles to accommodate at a single table.',
    middle:   () => 'Private hibachi solves both problems simultaneously. Your chef comes to your South Louisiana home, sets up the complete self-contained grill on your patio or backyard, and performs 90–120 minutes of live teppanyaki for every guest at once. Grandparents and grandchildren at the same table. No time limit. No split tables. The oil and gas professional communities in both cities find the format equally useful for corporate team events that warrant quality.',
    closing:  () => 'We serve Baton Rouge, Lafayette, Gonzales, Prairieville, Broussard, Youngsville, and all of South Louisiana. Graduation season dates fill weeks in advance — confirm your May event early.',
  },
  // LA2 (699) — Regional Louisiana
  {
    headline: () => 'Shreveport and Lake Charles Have Found Their Private Hibachi Format',
    opening:  () => 'Northwest and Southwest Louisiana have the same event culture as any major Louisiana city — milestone birthdays, graduation parties, corporate team celebrations, and family reunions that deserve more than a crowded restaurant table. What these markets have historically lacked is access to a private hibachi service that comes directly to your home rather than requiring you to drive to a larger city.',
    middle:   () => 'We serve the Shreveport-Bossier City corridor and the Lake Charles energy sector market with the same fully self-contained private hibachi experience available in New Orleans and Baton Rouge. Your chef comes to your property, performs the complete teppanyaki dinner, and handles everything from setup to cleanup.',
    closing:  () => 'We serve Shreveport, Bossier City, and Northwest Louisiana; Lake Charles, Sulphur, Westlake, and Southwest Louisiana. Regional dates are available with reasonable advance notice.',
  },
]

// ─── LA_CITY_INTROS — 15 city-specific (indices 700–714) ──────────────────────
export const LA_CITY_INTROS = [
  // 700 — New Orleans
  {
    headline: () => `The City That Invented Food Culture Has Found an Experience Its Restaurants Can't Offer`,
    opening:  () => `New Orleans has more celebrated restaurants per square mile than almost anywhere in the country — Commander's Palace, Brennan's, Dooky Chase's, and hundreds of other institutions that define Louisiana's culinary reputation. And yet, when a group of 16 to 22 people gathers for a bachelorette weekend, a family reunion trip, or a corporate retreat in the city, private hibachi delivers something every single one of those restaurants cannot: one chef, one grill, the entire group at the same table for two uninterrupted hours.`,
    middle:   () => `The format works particularly well in New Orleans because of the city's vacation rental infrastructure. Garden District mansions, Uptown doubles with rear courtyards, Marigny shotguns with back patios, and Airbnb properties across every neighborhood already have outdoor space designed for entertaining. A private hibachi chef arrives with the complete self-contained setup — no kitchen access needed, no gas hookup required — and transforms any outdoor space into the evening's venue.`,
    closing:  () => `We serve New Orleans, Metairie, Kenner, the Northshore (Mandeville, Covington, Slidell), and all of Greater New Orleans. Bachelorette weekends, Jazz Fest weekends, and holiday season dates book early — confirm your New Orleans event well in advance.`,
  },
  // 701 — Baton Rouge
  {
    headline: () => `LSU Graduation Weekend Has a Reservation Problem — and a Private Chef Solution`,
    opening:  () => `Baton Rouge is home to LSU's flagship campus and the associated graduation-weekend phenomenon that every Baton Rouge resident recognizes: in the three weeks surrounding commencement, every table at every restaurant worth booking is unavailable, families from Texas, Mississippi, and across Louisiana are searching for options that can seat their full group, and the inevitable result is a celebration that doesn't feel like the moment deserves. Private hibachi at your Baton Rouge home solves the problem entirely.`,
    middle:   () => `Beyond graduation season, Baton Rouge's healthcare and professional community — Our Lady of the Lake, Baton Rouge General, and the legal and corporate corridor in the Perkins Road area — hosts regular events where quality matters and a restaurant setting doesn't fit. Physician group dinners, law firm milestones, and corporate client entertainment all work better in a Bocage or Prairieville backyard than at a restaurant that seats someone else next to your guests.`,
    closing:  () => `We serve Baton Rouge, Gonzales, Prairieville, Zachary, Denham Springs, Central, Baker, and all of East Baton Rouge and Livingston Parish. LSU graduation season — May weekends specifically — books out early. Confirm your date before the window closes.`,
  },
  // 702 — Lafayette
  {
    headline: () => `Acadiana's Oil & Gas Professionals and Cajun Families Have Found the Same Answer`,
    opening:  () => `Lafayette sits at the intersection of two completely different event markets that both need the same format. The oil and gas professional community — engineers, project managers, operations leads, and their teams — regularly hosts events where the expectation is quality and the preference is not a crowded restaurant. And the Cajun family celebration culture in Acadiana routinely involves guest lists of 25, 30, or more people gathered for graduations, quinceañeras, milestone birthdays, and reunion dinners that no restaurant handles gracefully at that scale.`,
    middle:   () => `Private hibachi solves both. The self-contained setup works equally well in a corporate professional's Youngsville backyard for a team celebration as it does in a traditional Acadiana family home for a large multi-generational gathering. The format keeps every guest at the same table for 90–120 minutes, which is the one thing every large celebration needs and most restaurants can't provide.`,
    closing:  () => `We serve Lafayette, Youngsville, Broussard, Carencro, Scott, New Iberia, Breaux Bridge, and all of Lafayette and Iberia Parish. UL graduation season and Mardi Gras season dates fill quickly — confirm your Lafayette event early.`,
  },
  // 703 — Shreveport
  {
    headline: () => `Shreveport and Bossier City's Celebration Culture Has a Private Dining Format Now`,
    opening:  () => `Shreveport and Bossier City share a combined metro with strong military, healthcare, and energy sector communities — Barksdale Air Force Base officer families, Willis-Knighton and Ochsner LSU Health professionals, and the established business community along the Red River corridor. These communities celebrate milestones the way any growing metro does: graduation parties, retirement celebrations, corporate team events, and family reunion weekends. The difference in Shreveport is that the premium private dining format hasn't historically been available here.`,
    middle:   () => `Private hibachi changes that. Your chef travels to your Shreveport or Bossier City home — Cross Lake area, the Highland neighborhood, South Shreveport, or Bossier City's Barksdale-adjacent communities — sets up completely on your patio or in your backyard, and performs the full teppanyaki dinner for your group. The experience is identical to what New Orleans and Baton Rouge hosts have been using for their events, now available in Northwest Louisiana.`,
    closing:  () => `We serve Shreveport, Bossier City, Benton, Haughton, Minden, and all of Northwest Louisiana. Summer and graduation season dates book ahead — confirm your Shreveport event early.`,
  },
  // 704 — Lake Charles
  {
    headline: () => `Lake Charles Energy Professionals and Lake House Groups Have Found Their Private Chef Format`,
    opening:  () => `Lake Charles hosts one of the densest concentrations of petrochemical and energy sector professionals in the South — LNG plant workers, refinery engineers, project managers, and operations teams who earn well and celebrate together when a project closes or a team milestone arrives. Corporate team events in Lake Charles traditionally went to a restaurant. Private hibachi changes that calculus entirely: the chef comes to your home or your colleague's backyard, and the evening becomes something worth remembering.`,
    middle:   () => `The lake house and vacation rental market along Lake Charles and the Calcasieu River adds a second booking profile. Group weekends at lake houses on the Calcasieu, girls' trips to Southwest Louisiana, and family reunion weekends all benefit from the same format: a private chef who arrives at your property with the complete self-contained setup, performs 90–120 minutes of live teppanyaki on the deck, and packs out entirely when dinner ends.`,
    closing:  () => `We serve Lake Charles, Sulphur, Westlake, Moss Bluff, DeQuincy, and all of Calcasieu Parish. Summer lake season and holiday weekend dates book ahead — confirm your Lake Charles event early.`,
  },
  // 705 — Metairie
  {
    headline: () => `Metairie Hosts the Graduation Dinners That New Orleans Restaurants Can't Seat`,
    opening:  () => `Metairie is home to Jefferson Parish's most densely concentrated family neighborhoods — Bucktown, Lakeview-adjacent corridors, Old Metairie — and when Tulane commencement, Loyola graduation, and the area's private high school ceremonies arrive in May, every restaurant within range faces the same demand surge. Tables for parties of 14 or more disappear weeks in advance. Private hibachi at home solves this: the chef arrives at your Metairie property, sets up on the back patio or in the backyard, and performs the full teppanyaki dinner for every guest at once.`,
    middle:   () => `Metairie's residential neighborhoods are purpose-built for backyard entertaining — covered patios, spacious outdoor areas, and the comfortable suburban layouts that give a hibachi chef everything needed without any modification. Groups of 12 to 30 guests all work the same way: the chef arrives before the first guest, confirms outdoor space, and performs the dinner with the complete self-contained setup. No kitchen access needed, no gas hookup required.`,
    closing:  () => `We serve Metairie, Kenner, Harahan, River Ridge, and all of Jefferson Parish. Tulane and Loyola graduation season — May weekends specifically — books out early. Confirm your Metairie event well in advance.`,
  },
  // 706 — Kenner
  {
    headline: () => `Kenner's Backyard Celebration Culture Found a Private Chef Format Worth Booking`,
    opening:  () => `Kenner sits in the heart of Greater New Orleans suburban life — a community of families, veterans, and working professionals who mark milestones with large, multi-generational gatherings that no Kenner restaurant is built to handle gracefully. Graduation parties for 20, birthday celebrations for 25, family reunion dinners for 30 — these are the events that get squeezed into restaurant spaces that weren't designed for them, or defaulted to catered buffets that feel generic for an occasion that deserves more.`,
    middle:   () => `Backyard hibachi at your Kenner home changes the format entirely. The chef arrives fully equipped, sets up on your patio, and performs 90–120 minutes of live teppanyaki for your entire group at once. Every guest at the same table, every protein order individual, every aspect of the evening managed by one chef who handles cooking, entertainment, and cleanup. For Kenner neighborhoods with covered outdoor spaces and backyard patios, the setup is immediate.`,
    closing:  () => `We serve Kenner, Metairie, Harahan, River Ridge, and all of Jefferson Parish. Graduation season and summer dates fill quickly — confirm your Kenner backyard event early.`,
  },
  // 707 — Mandeville
  {
    headline: () => `The Northshore's Private Chef Format for LSU Graduation Weekends and Milestone Dinners`,
    opening:  () => `Mandeville and the Northshore communities represent one of Louisiana's most distinctive residential markets — executive and professional families who chose St. Tammany Parish for its schools, neighborhoods, and quality of life, and who celebrate milestones in a way that reflects that. LSU graduation weekends bring extended family from across the state to Northshore homes. Corporate professionals hosting client dinners on the lake side of the causeway want an experience that matches their surroundings.`,
    middle:   () => `Private hibachi at a Mandeville home delivers exactly that. The chef arrives at your Lakeshore property, your Heritage Park home, or your Northshore estate, sets up with the complete self-contained grill, and performs the full teppanyaki dinner for your group. No restaurant reservation challenges, no split tables, no time limit — just the chef, your guests, and a private dining experience at your own address.`,
    closing:  () => `We serve Mandeville, Covington, Madisonville, Abita Springs, and all of St. Tammany Parish. LSU graduation season and holiday season dates book ahead — confirm your Mandeville event early.`,
  },
  // 708 — Covington
  {
    headline: () => `Covington Northshore Families Found a Private Chef Format for Graduation and Milestones`,
    opening:  () => `Covington is the commercial and cultural center of St. Tammany Parish — a community that combines small-town Northshore character with a professionally mobile residential base that marks its milestones deliberately. Graduation parties, retirement celebrations, large birthday dinners, and family reunion weekends all run into the same challenge in Covington: the local restaurant scene wasn't built for 18 to 25 guests at a single table for two hours.`,
    middle:   () => `Private hibachi at your Covington home fills that gap completely. The chef arrives at your Covington address, confirms outdoor setup space on your patio or in your backyard, and performs the full dinner for your entire group. Everything is self-contained — the propane grill, the prep station, plates, chopsticks, sauces, and complete cleanup. Your Covington property hosts the evening without needing any additional coordination.`,
    closing:  () => `We serve Covington, Mandeville, Madisonville, Bush, and all of St. Tammany Parish. Graduation season and fall Northshore events book ahead — confirm your Covington event today.`,
  },
  // 709 — Bossier City
  {
    headline: () => `Bossier City's Military Families and Shreveport Metro Hosts Found Their Private Chef Format`,
    opening:  () => `Bossier City's identity is anchored by Barksdale Air Force Base — one of the largest military installations in the South — and the surrounding community of active duty families, veterans, and military contractors who rotate through, settle in, and celebrate milestones the way military communities do: with full family and unit gatherings that no Bossier City restaurant can comfortably seat. Private hibachi is the format that works for military homecoming dinners, promotion ceremonies, and deployment farewell events at scale.`,
    middle:   () => `Beyond Barksdale, Bossier City's position in the Shreveport-Bossier metro gives it a strong professional and business community along the Red River and Viking Drive corridors. Corporate team events, graduation celebrations for Centenary and Louisiana Tech families, and large family milestone dinners all benefit from the same format: a chef who arrives at your Bossier City home, sets up in your backyard, and handles the full evening without any logistics from you.`,
    closing:  () => `We serve Bossier City, Shreveport, Benton, Haughton, and all of Northwest Louisiana. Military event dates and graduation season book ahead — confirm your Bossier City event today.`,
  },
  // 710 — Gonzales
  {
    headline: () => `Gonzales Families Hosting LSU Graduation Weekends Found the Private Chef Solution`,
    opening:  () => `Gonzales and Ascension Parish sit directly between Baton Rouge and New Orleans — a commuter corridor of professional families who work in one metro, live in Ascension Parish, and celebrate their milestones at home. LSU graduation in May is the most acute example: families from across the state descend on the Baton Rouge corridor, every restaurant from Gonzales to Prairieville exhausts its reservation capacity, and a party of 16 that should feel celebratory ends up feeling logistically improvised.`,
    middle:   () => `Private hibachi at a Gonzales home changes that entirely. The chef arrives at your Ascension Parish address — whether it's a new-build in Dutchtown, a home in River Crossing, or a property anywhere in the parish — and performs the full teppanyaki dinner for your group on your patio. Nothing about the experience changes relative to what New Orleans or Baton Rouge hosts use. The chef, the grill, and the experience are identical.`,
    closing:  () => `We serve Gonzales, Prairieville, Sorrento, St. Amant, and all of Ascension Parish. LSU graduation season and summer dates fill quickly — confirm your Gonzales event well in advance.`,
  },
  // 711 — Prairieville
  {
    headline: () => `Prairieville's Backyard Celebration Format for LSU Graduation and Ascension Parish Milestones`,
    opening:  () => `Prairieville is one of Ascension Parish's fastest-growing residential communities — a neighborhood of newer subdivisions, generous backyard spaces, and professional families who relocated from Baton Rouge seeking more room without sacrificing proximity to the city. These are the exact conditions that make private hibachi the natural group dining format: large backyards, covered patios, and a residential layout that handles 15 to 25 guests without any constraint.`,
    middle:   () => `The LSU graduation corridor runs directly through Prairieville. Extended family gatherings, graduation parties at newly built Ascension Parish homes, and milestone birthdays in the Veterans Memorial Boulevard corridor all benefit from the same approach: a private chef arrives before the guests, sets up the complete grill station on your patio, and performs the full dinner for the group without any logistics pressure on the host.`,
    closing:  () => `We serve Prairieville, Gonzales, Sorrento, and all of Ascension Parish. LSU graduation season books fast — confirm your Prairieville event today.`,
  },
  // 712 — Youngsville
  {
    headline: () => `Youngsville and the Lafayette Corridor Found a Private Chef Format for UL Graduation and Family Milestones`,
    opening:  () => `Youngsville has grown from a small community south of Lafayette into one of Acadiana's most desirable residential destinations — newer subdivisions with large outdoor spaces, a family-forward demographic, and a location that puts it at the center of the UL Lafayette graduation market. In May, when UL commencement brings extended families to the Lafayette corridor, Youngsville homes and backyards become the primary celebration venue for the families who live there. Private hibachi makes those celebrations seamless.`,
    middle:   () => `Beyond graduation season, Youngsville's professional and oil-and-gas adjacent community — many residents commute to Lafayette or work in the energy sector — hosts the full range of Acadiana milestones: large birthday dinners, quinceañeras, retirement parties, and multi-generational family gatherings where 20 to 35 guests all need to be at the same table. The private hibachi format handles every one of these cleanly, with a chef who arrives at your Youngsville address and manages the entire evening.`,
    closing:  () => `We serve Youngsville, Broussard, Carencro, Lafayette, and all of Lafayette Parish. UL graduation season fills quickly — confirm your Youngsville event early.`,
  },
  // 713 — Broussard
  {
    headline: () => `Broussard's Oil & Gas Community and Lafayette Corridor Hosts Found Their Catering Format`,
    opening:  () => `Broussard sits at the junction of Lafayette and New Iberia — an industrial corridor that houses some of Acadiana's most significant petrochemical and energy infrastructure alongside residential neighborhoods of energy sector professionals and Cajun families who've worked the same parishes for generations. Corporate hibachi catering in Broussard serves both communities: the professional team event that celebrates a project milestone, and the large family gathering where 25 relatives need to be at the same table.`,
    middle:   () => `Hibachi catering at your Broussard property — home, venue, or business location — is fully self-contained. The chef arrives with the propane teppan grill, the prep station, every ingredient, and the complete setup. For oil and gas team events, we accommodate large outdoor spaces, multiple stations, and groups up to 60. For family celebrations, the same chef handles 15 to 25 guests at a single station with the same quality and attention to every guest's order.`,
    closing:  () => `We serve Broussard, Lafayette, Youngsville, Carencro, and all of Lafayette and Iberia Parish. Summer and UL graduation season dates fill quickly — confirm your Broussard event today.`,
  },
  // 714 — Hammond
  {
    headline: () => `Hammond and Southeastern Louisiana Families Found a Private Chef Format for Graduation Weekend`,
    opening:  () => `Hammond is the commercial hub of Tangipahoa Parish and home to Southeastern Louisiana University — a university city positioned along I-12 that draws families from Covington, Slidell, Baton Rouge, and New Orleans for commencement weekends. The Hammond restaurant scene is sized for a college town, not for the graduation weekend demand surge that arrives every May when 500 families all need a group dinner simultaneously. Private hibachi at a Hammond home solves this without competing for the same reservation pool.`,
    middle:   () => `Beyond graduation season, Hammond's position on the I-12 corridor makes it the natural gathering point for Tangipahoa Parish family events — reunions where family members drive in from New Orleans, Baton Rouge, and Hattiesburg, and multi-generational celebrations that require more space and flexibility than a Hammond restaurant can offer. The private hibachi chef arrives at your Hammond or Tangipahoa Parish address, sets up on your outdoor space, and handles the full evening independently.`,
    closing:  () => `We serve Hammond, Ponchatoula, Amite, and all of Tangipahoa Parish. Southeastern Louisiana graduation season in May books fast — confirm your Hammond event early.`,
  },
]

// ─── LA_CLOSING_VARIANTS — 3 generic (indices 697–699) ────────────────────────
export const LA_CLOSING_VARIANTS = [
  // LA0 (697) — New Orleans
  {
    headline:     (city) => `Book Your New Orleans Private Chef Event`,
    sub:          (city) => `Garden District estate dinners, bachelorette weekends, and family reunion trips — your private hibachi chef comes to your New Orleans property`,
    urgency:      'Weekend and peak season dates fill fast — confirm your New Orleans event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // LA1 (698) — South Louisiana
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `LSU and UL graduation weekends, oil & gas team events, and South Louisiana family milestones — your private chef arrives fully equipped`,
    urgency:      'Graduation season and summer dates fill weeks in advance — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // LA2 (699) — Regional Louisiana
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Corporate team dinners, graduation celebrations, and family milestones in ${city} — your private chef comes to you`,
    urgency:      'Summer and graduation season dates fill quickly — confirm your Louisiana event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── LA_CITY_CLOSINGS — 15 city-specific (indices 700–714) ────────────────────
export const LA_CITY_CLOSINGS = [
  // 700 — New Orleans
  {
    headline:     (city) => `Book Your New Orleans Private Hibachi Experience`,
    sub:          (city) => `Vacation rentals, Garden District homes, and corporate retreats in New Orleans — your private hibachi chef arrives at your property`,
    urgency:      'Bachelorette weekends, Jazz Fest, and holiday season dates book fast — confirm your New Orleans date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 701 — Baton Rouge
  {
    headline:     (city) => `Book Your Baton Rouge Hibachi Event`,
    sub:          (city) => `LSU graduation weekends, professional dinner parties, and milestone family events — your private chef comes to you across the Baton Rouge area`,
    urgency:      'LSU graduation season books out early — confirm your Baton Rouge May date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 702 — Lafayette
  {
    headline:     (city) => `Book Your Lafayette Hibachi Event`,
    sub:          (city) => `Oil & gas team celebrations, Acadiana family milestones, and large Lafayette gatherings — your private chef arrives fully equipped`,
    urgency:      'UL graduation season and summer dates fill quickly — secure your Lafayette event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 703 — Shreveport
  {
    headline:     (city) => `Book Your Shreveport Private Hibachi Event`,
    sub:          (city) => `Barksdale military families, corporate team dinners, and North Louisiana milestone celebrations — your private chef comes to you`,
    urgency:      'Summer and graduation season dates in Shreveport book ahead — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 704 — Lake Charles
  {
    headline:     (city) => `Book Your Lake Charles Private Hibachi Event`,
    sub:          (city) => `Energy sector team events, lake house weekend dinners, and Southwest Louisiana celebrations — your private chef arrives fully set up`,
    urgency:      'Lake season and holiday weekend dates fill fast — confirm your Lake Charles event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 705 — Metairie
  {
    headline:     (city) => `Book Your Metairie Hibachi at Home Event`,
    sub:          (city) => `Tulane and Loyola graduation weekends, Jefferson Parish family milestones, and New Orleans metro celebrations — your private chef arrives fully equipped`,
    urgency:      'Graduation season and summer dates in Metairie fill fast — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 706 — Kenner
  {
    headline:     (city) => `Book Your Kenner Backyard Hibachi Event`,
    sub:          (city) => `Graduation parties, family milestones, and Greater New Orleans celebrations — your private chef arrives at your Kenner backyard`,
    urgency:      'Summer and graduation season dates fill quickly — confirm your Kenner event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 707 — Mandeville
  {
    headline:     (city) => `Book Your Mandeville Private Hibachi Event`,
    sub:          (city) => `LSU graduation weekends, Northshore milestone dinners, and St. Tammany Parish celebrations — your private chef comes to your Mandeville home`,
    urgency:      'LSU graduation season and Northshore summer dates fill early — confirm your Mandeville event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 708 — Covington
  {
    headline:     (city) => `Book Your Covington Hibachi at Home Event`,
    sub:          (city) => `Graduation parties, Northshore family milestones, and backyard celebrations — your private chef arrives at your Covington home fully set up`,
    urgency:      'Graduation season and fall Northshore events book ahead — confirm your Covington event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 709 — Bossier City
  {
    headline:     (city) => `Book Your Bossier City Hibachi at Home Event`,
    sub:          (city) => `Barksdale military homecomings, graduation celebrations, and Shreveport-Bossier metro family milestones — your private chef comes to you`,
    urgency:      'Military event dates and graduation season book ahead — confirm your Bossier City event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 710 — Gonzales
  {
    headline:     (city) => `Book Your Gonzales Private Hibachi Event`,
    sub:          (city) => `LSU graduation weekends, Ascension Parish family milestones, and Baton Rouge corridor celebrations — your private chef arrives fully equipped`,
    urgency:      'LSU graduation season fills fast in Gonzales — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 711 — Prairieville
  {
    headline:     (city) => `Book Your Prairieville Backyard Hibachi Event`,
    sub:          (city) => `LSU graduation parties, Ascension Parish family milestones, and outdoor celebrations — your private chef comes to your Prairieville backyard`,
    urgency:      'LSU graduation season books fast — confirm your Prairieville event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 712 — Youngsville
  {
    headline:     (city) => `Book Your Youngsville Hibachi at Home Event`,
    sub:          (city) => `UL graduation weekends, Acadiana family milestones, and Lafayette corridor celebrations — your private chef arrives fully set up`,
    urgency:      'UL graduation season fills quickly — confirm your Youngsville event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 713 — Broussard
  {
    headline:     (city) => `Book Your Broussard Hibachi Catering Event`,
    sub:          (city) => `Oil & gas team events, UL graduation parties, and Lafayette corridor Cajun family milestones — your private chef arrives fully set up`,
    urgency:      'Summer and graduation season dates in Broussard fill quickly — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 714 — Hammond
  {
    headline:     (city) => `Book Your Hammond Mobile Hibachi Event`,
    sub:          (city) => `Southeastern Louisiana graduation weekends, Tangipahoa Parish family milestones, and I-12 corridor celebrations — your private chef comes to you`,
    urgency:      'SLU graduation season in May books fast — confirm your Hammond event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── Major cities map ──────────────────────────────────────────────────────────
const LA_MAJOR_CITIES = {
  'new-orleans':  { v: 0, profileIdx: 0,  nearby: ['Baton Rouge'] },
  'baton-rouge':  { v: 1, profileIdx: 1,  nearby: ['New Orleans', 'Lafayette'] },
  'lafayette':    { v: 1, profileIdx: 2,  nearby: ['Baton Rouge', 'Lake Charles'] },
  'shreveport':   { v: 2, profileIdx: 3,  nearby: ['Baton Rouge'] },
  'lake-charles': { v: 2, profileIdx: 4,  nearby: ['Lafayette', 'Baton Rouge'] },
  'metairie':     { v: 3, profileIdx: 5,  nearby: ['New Orleans', 'Kenner'] },
  'kenner':       { v: 3, profileIdx: 6,  nearby: ['New Orleans', 'Metairie'] },
  'mandeville':   { v: 3, profileIdx: 7,  nearby: ['New Orleans', 'Covington'] },
  'covington':    { v: 3, profileIdx: 8,  nearby: ['New Orleans', 'Mandeville'] },
  'bossier-city': { v: 2, profileIdx: 9,  nearby: ['Shreveport'] },
  'gonzales':     { v: 1, profileIdx: 10, nearby: ['Baton Rouge', 'New Orleans'] },
  'prairieville': { v: 1, profileIdx: 11, nearby: ['Baton Rouge', 'Gonzales'] },
  'youngsville':  { v: 1, profileIdx: 12, nearby: ['Lafayette', 'Broussard'] },
  'broussard':    { v: 1, profileIdx: 13, nearby: ['Lafayette', 'Youngsville'] },
  'hammond':      { v: 1, profileIdx: 14, nearby: ['New Orleans', 'Baton Rouge'] },
}

// ─── Display name overrides ────────────────────────────────────────────────────
const LA_CITY_DISPLAY_NAMES = {
  'new-orleans':  'New Orleans',
  'baton-rouge':  'Baton Rouge',
  'lake-charles': 'Lake Charles',
  'bossier-city': 'Bossier City',
}

// ─── Blog posts (planned — built in a separate session) ───────────────────────
export const LA_BLOG_POSTS = [[], [], []]

// =============================================================================
// EXPORTED FUNCTIONS
// =============================================================================

export function getLaCityData(citySlug, cityName) {
  const entry = LA_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = LA_CUSTOM_META[citySlug] || null
  const displayName = LA_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  return {
    cityName:     displayName,
    stateAbbr:    'LA',
    stateName:    'Louisiana',
    stateSlug:    'louisiana',
    variant:      v % 3,
    heroImage:    LA_THEME_HEROES[v],
    heroSubtitle: LA_HERO_SUBTITLES[v](displayName),
    heroH1Prefix: LA_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:   700 + profileIdx,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: 700 + profileIdx,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:      LA_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['New Orleans', 'Baton Rouge', 'Lafayette', 'Shreveport', 'Lake Charles'],
  }
}

export function getLaBlogPosts(variant, count) {
  return LA_BLOG_POSTS[variant % 3] || []
}

export function getLaHowItWorks(citySlug) {
  return LA_HOW_IT_WORKS
}

export function getLaSectionVariant(citySlug) {
  const entry = LA_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return LA_SECTION_VARIANTS[entry.v]
}

export function getLaCityImage(citySlug) {
  return LA_CITY_IMAGE_MAP[citySlug] || null
}

export function getLaSupportImages(citySlug) {
  return LA_SUPPORT_IMAGES[citySlug] || null
}
