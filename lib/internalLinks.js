// ─── Internal Linking Data ────────────────────────────────────────────────────
// Source of truth for state → featured cities, city → nearby/related links,
// and contextual SEO sentences used across state and city pages.

// ── State-level data ──────────────────────────────────────────────────────────
export const STATE_LINK_DATA = {

  texas: {
    stateName: 'Texas',
    stateAbbr: 'TX',
    stateSlug: 'texas',
    featuredCities: [
      { city: 'Houston',       slug: 'houston',       desc: 'Greater Houston & Harris County' },
      { city: 'Dallas',        slug: 'dallas',        desc: 'DFW metroplex & surrounding suburbs' },
      { city: 'Austin',        slug: 'austin',        desc: 'Austin metro & Hill Country' },
      { city: 'San Antonio',   slug: 'san-antonio',   desc: 'Alamo City & Bexar County' },
      { city: 'Fort Worth',    slug: 'fort-worth',    desc: 'Tarrant County & West DFW' },
      { city: 'Katy',          slug: 'katy',          desc: 'West Houston & Fort Bend suburbs' },
      { city: 'Sugar Land',    slug: 'sugar-land',    desc: 'Southwest Houston & Fort Bend County' },
      { city: 'The Woodlands', slug: 'the-woodlands', desc: 'North Houston master-planned community' },
      { city: 'Frisco',        slug: 'frisco',        desc: 'North DFW growth corridor' },
    ],
    secondaryCities: [
      { city: 'Plano',          slug: 'plano' },
      { city: 'Arlington',      slug: 'arlington' },
      { city: 'McKinney',       slug: 'mckinney' },
      { city: 'Pearland',       slug: 'pearland' },
      { city: 'League City',    slug: 'league-city' },
      { city: 'New Braunfels',  slug: 'new-braunfels' },
      { city: 'Georgetown',     slug: 'georgetown' },
      { city: 'Corpus Christi', slug: 'corpus-christi' },
    ],
    contextualSentence: 'We serve all of Texas — Houston, Dallas, Austin, San Antonio, Fort Worth, Katy, Sugar Land, The Woodlands, Frisco, and hundreds of cities statewide.',
  },

  arizona: {
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    stateSlug: 'arizona',
    featuredCities: [
      { city: 'Phoenix',    slug: 'phoenix',    desc: 'Greater Phoenix metro area' },
      { city: 'Scottsdale', slug: 'scottsdale', desc: 'Old Town & North Scottsdale' },
      { city: 'Tucson',     slug: 'tucson',     desc: 'Southern Arizona & University area' },
      { city: 'Mesa',       slug: 'mesa',       desc: 'East Valley communities' },
      { city: 'Chandler',   slug: 'chandler',   desc: 'South East Valley' },
      { city: 'Tempe',      slug: 'tempe',      desc: 'Central Valley & ASU corridor' },
    ],
    secondaryCities: [
      { city: 'Gilbert',    slug: 'gilbert' },
      { city: 'Glendale',   slug: 'glendale' },
      { city: 'Peoria',     slug: 'peoria' },
      { city: 'Surprise',   slug: 'surprise' },
      { city: 'Goodyear',   slug: 'goodyear' },
      { city: 'Flagstaff',  slug: 'flagstaff' },
    ],
    contextualSentence: 'We serve all of Arizona, including Phoenix, Scottsdale, Tucson, Mesa, Chandler, Tempe, and all surrounding Valley communities.',
  },

  florida: {
    stateName: 'Florida',
    stateAbbr: 'FL',
    stateSlug: 'florida',
    featuredCities: [
      { city: 'Miami',           slug: 'miami',           desc: 'Miami-Dade metro & Brickell waterfront' },
      { city: 'Orlando',         slug: 'orlando',         desc: 'Central Florida vacation home corridor' },
      { city: 'Tampa',           slug: 'tampa',           desc: 'Tampa Bay & bachelorette weekends' },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale', desc: 'Canal-front patios & Broward County' },
      { city: 'Sarasota',        slug: 'sarasota',        desc: 'Gulf Coast luxury & snowbird season' },
      { city: 'Destin',          slug: 'destin',          desc: 'Emerald Coast beach houses & vacation rentals' },
    ],
    secondaryCities: [
      { city: 'St. Petersburg',  slug: 'st-petersburg' },
      { city: 'Naples',          slug: 'naples' },
      { city: 'West Palm Beach', slug: 'west-palm-beach' },
      { city: 'Jacksonville',    slug: 'jacksonville' },
      { city: 'Boca Raton',      slug: 'boca-raton' },
      { city: 'Cape Coral',      slug: 'cape-coral' },
      { city: 'Key West',        slug: 'key-west' },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    contextualSentence: 'We serve all of Florida — vacation rentals, beach houses, and waterfront homes across Miami, Orlando, Tampa, Fort Lauderdale, Sarasota, Destin, and every Florida market.',
  },

  georgia: {
    stateName: 'Georgia',
    stateAbbr: 'GA',
    stateSlug: 'georgia',
    featuredCities: [
      { city: 'Atlanta',      slug: 'atlanta',      desc: 'Metro Atlanta & Buckhead' },
      { city: 'Savannah',     slug: 'savannah',     desc: 'Coastal Georgia & Historic District' },
      { city: 'Augusta',      slug: 'augusta',      desc: 'CSRA & Central Savannah River Area' },
      { city: 'Sandy Springs', slug: 'sandy-springs', desc: 'North Atlanta suburbs' },
      { city: 'Roswell',      slug: 'roswell',      desc: 'North Fulton County' },
      { city: 'Athens',       slug: 'athens',       desc: 'UGA corridor & Northeast Georgia' },
    ],
    secondaryCities: [
      { city: 'Columbus',     slug: 'columbus' },
      { city: 'Macon',        slug: 'macon' },
    ],
    contextualSentence: 'We serve all of Georgia, including Atlanta, Savannah, Augusta, Sandy Springs, Roswell, and surrounding metro communities.',
  },

  'north-carolina': {
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    stateSlug: 'north-carolina',
    featuredCities: [
      { city: 'Charlotte',      slug: 'charlotte',      desc: 'Queen City & South Charlotte' },
      { city: 'Raleigh',        slug: 'raleigh',        desc: 'Triangle area & Research Triangle' },
      { city: 'Durham',         slug: 'durham',         desc: 'Bull City & Duke University area' },
      { city: 'Greensboro',     slug: 'greensboro',     desc: 'Piedmont Triad' },
      { city: 'Cary',           slug: 'cary',           desc: 'Research Triangle suburbs' },
      { city: 'Wilmington',     slug: 'wilmington',     desc: 'Cape Fear Coast' },
    ],
    secondaryCities: [
      { city: 'Winston-Salem',  slug: 'winston-salem' },
      { city: 'Fayetteville',   slug: 'fayetteville' },
      { city: 'Asheville',      slug: 'asheville' },
    ],
    contextualSentence: 'We serve all of North Carolina, including Charlotte, Raleigh, Durham, Greensboro, Cary, Wilmington, and Research Triangle communities.',
  },

  colorado: {
    stateName: 'Colorado',
    stateAbbr: 'CO',
    stateSlug: 'colorado',
    featuredCities: [
      { city: 'Denver',           slug: 'denver',           desc: 'Mile High City & metro area' },
      { city: 'Colorado Springs', slug: 'colorado-springs', desc: 'Pikes Peak region' },
      { city: 'Boulder',          slug: 'boulder',          desc: 'Front Range & CU corridor' },
      { city: 'Aurora',           slug: 'aurora',           desc: 'East Denver metro' },
      { city: 'Fort Collins',     slug: 'fort-collins',     desc: 'Northern Colorado & CSU area' },
      { city: 'Lakewood',         slug: 'lakewood',         desc: 'Jefferson County suburbs' },
    ],
    secondaryCities: [
      { city: 'Thornton',     slug: 'thornton' },
      { city: 'Arvada',       slug: 'arvada' },
      { city: 'Westminster',  slug: 'westminster' },
    ],
    contextualSentence: 'We serve all of Colorado, including Denver, Colorado Springs, Boulder, Aurora, Fort Collins, and Front Range communities.',
  },

  tennessee: {
    stateName: 'Tennessee',
    stateAbbr: 'TN',
    stateSlug: 'tennessee',
    featuredCities: [
      { city: 'Nashville',     slug: 'nashville',     desc: 'Music City & Davidson County' },
      { city: 'Memphis',       slug: 'memphis',       desc: 'Bluff City & Shelby County' },
      { city: 'Franklin',      slug: 'franklin',      desc: 'Williamson County suburbs' },
      { city: 'Knoxville',     slug: 'knoxville',     desc: 'East Tennessee & UT corridor' },
      { city: 'Murfreesboro',  slug: 'murfreesboro',  desc: 'Rutherford County' },
      { city: 'Chattanooga',   slug: 'chattanooga',   desc: 'Scenic City & Hamilton County' },
    ],
    secondaryCities: [
      { city: 'Clarksville',   slug: 'clarksville' },
      { city: 'Jackson',       slug: 'jackson' },
    ],
    contextualSentence: 'We serve all of Tennessee, including Nashville, Memphis, Franklin, Knoxville, Murfreesboro, Chattanooga, and surrounding communities.',
  },

  nevada: {
    stateName: 'Nevada',
    stateAbbr: 'NV',
    stateSlug: 'nevada',
    featuredCities: [
      { city: 'Las Vegas',      slug: 'las-vegas',      desc: 'The Strip, Summerlin & Henderson' },
      { city: 'Henderson',      slug: 'henderson',      desc: 'Southern Nevada suburbs' },
      { city: 'Reno',           slug: 'reno',           desc: 'Biggest Little City & Washoe County' },
      { city: 'North Las Vegas', slug: 'north-las-vegas', desc: 'North Clark County' },
      { city: 'Sparks',         slug: 'sparks',         desc: 'Truckee Meadows' },
      { city: 'Carson City',    slug: 'carson-city',    desc: 'State capital & Carson Valley' },
    ],
    secondaryCities: [],
    contextualSentence: 'We serve all of Nevada, including Las Vegas, Henderson, Reno, North Las Vegas, Sparks, and surrounding communities.',
  },
}

// ── City-level linking data ───────────────────────────────────────────────────
export const CITY_LINK_DATA = {

  // ── Texas ──────────────────────────────────────────────────────────────────
  dallas: {
    cityName: 'Dallas',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Fort Worth', slug: 'fort-worth' },
      { city: 'Plano',      slug: 'plano'      },
      { city: 'Frisco',     slug: 'frisco'     },
      { city: 'Arlington',  slug: 'arlington'  },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in Dallas? We serve all of Texas — Fort Worth, Plano, Frisco, Arlington, Houston, Katy, Sugar Land, Austin, and San Antonio.',
  },

  houston: {
    cityName: 'Houston',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Katy',          slug: 'katy'          },
      { city: 'Sugar Land',    slug: 'sugar-land'    },
      { city: 'The Woodlands', slug: 'the-woodlands' },
      { city: 'Pearland',      slug: 'pearland'      },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Houston? We also serve Katy, Sugar Land, The Woodlands, Pearland, Dallas, Fort Worth, Austin, and San Antonio — all of Greater Texas.',
  },

  austin: {
    cityName: 'Austin',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Round Rock',  slug: 'round-rock'  },
      { city: 'Cedar Park',  slug: 'cedar-park'  },
      { city: 'Georgetown',  slug: 'georgetown'  },
      { city: 'San Marcos',  slug: 'san-marcos'  },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Katy',        slug: 'katy'        },
    ],
    contextualSentence: 'Not in Austin? We serve Houston, Dallas, San Antonio, Fort Worth, Katy, Sugar Land, The Woodlands, Round Rock, Cedar Park, and Georgetown.',
  },

  'san-antonio': {
    cityName: 'San Antonio',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Austin',        slug: 'austin'        },
      { city: 'New Braunfels', slug: 'new-braunfels' },
      { city: 'Schertz',       slug: 'schertz'       },
      { city: 'Boerne',        slug: 'boerne'        },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in San Antonio? We serve Austin, Houston, Dallas, Fort Worth, Katy, Sugar Land, The Woodlands, and all surrounding Hill Country and Texas metro communities.',
  },

  'fort-worth': {
    cityName: 'Fort Worth',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Dallas',     slug: 'dallas'     },
      { city: 'Arlington',  slug: 'arlington'  },
      { city: 'Southlake',  slug: 'southlake'  },
      { city: 'Keller',     slug: 'keller'     },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in Fort Worth? We serve Dallas, Arlington, Plano, Frisco, Houston, Katy, Sugar Land, The Woodlands, Austin, and San Antonio.',
  },

  katy: {
    cityName: 'Katy',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',       slug: 'houston'       },
      { city: 'Sugar Land',    slug: 'sugar-land'    },
      { city: 'The Woodlands', slug: 'the-woodlands' },
      { city: 'Cypress',       slug: 'cypress'       },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Katy? We serve all Greater Houston — Sugar Land, The Woodlands, Pearland, Cypress, and central Houston, plus Dallas, Fort Worth, Austin, and San Antonio.',
  },

  'sugar-land': {
    cityName: 'Sugar Land',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Pearland',    slug: 'pearland'    },
      { city: 'Missouri City', slug: 'missouri-city' },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Sugar Land? We serve all of Fort Bend County and Greater Houston — Katy, Pearland, Missouri City, The Woodlands, central Houston, Dallas, Austin, and San Antonio.',
  },

  'the-woodlands': {
    cityName: 'The Woodlands',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',  slug: 'houston'  },
      { city: 'Spring',   slug: 'spring'   },
      { city: 'Conroe',   slug: 'conroe'   },
      { city: 'Humble',   slug: 'humble'   },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in The Woodlands? We cover all North Houston — Spring, Conroe, Humble, Kingwood, and central Houston, plus Katy, Sugar Land, Dallas, Fort Worth, and Austin.',
  },

  // ── Arizona ────────────────────────────────────────────────────────────────
  phoenix: {
    cityName: 'Phoenix',
    stateSlug: 'arizona',
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Scottsdale', slug: 'scottsdale' },
      { city: 'Mesa',       slug: 'mesa'       },
      { city: 'Chandler',   slug: 'chandler'   },
      { city: 'Tempe',      slug: 'tempe'      },
    ],
    otherStateCities: [
      { city: 'Tucson',  slug: 'tucson'  },
      { city: 'Gilbert', slug: 'gilbert' },
    ],
    contextualSentence: 'Not in Phoenix? We serve all of Arizona — including Scottsdale, Mesa, Chandler, Tempe, and Tucson.',
  },

  // ── Florida ────────────────────────────────────────────────────────────────
  miami: {
    cityName: 'Miami',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Boca Raton',      slug: 'boca-raton'      },
      { city: 'Hialeah',         slug: 'hialeah'         },
      { city: 'Coral Gables',    slug: 'coral-gables'    },
    ],
    otherStateCities: [
      { city: 'Orlando',     slug: 'orlando'     },
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Miami? We serve all of Florida — including Fort Lauderdale, Boca Raton, Orlando, Tampa, and Jacksonville.',
  },

  orlando: {
    cityName: 'Orlando',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Kissimmee',   slug: 'kissimmee'   },
      { city: 'Sanford',     slug: 'sanford'     },
      { city: 'Lakeland',    slug: 'lakeland'    },
      { city: 'Winter Park',  slug: 'winter-park' },
    ],
    otherStateCities: [
      { city: 'Miami',       slug: 'miami'       },
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Orlando? We serve all of Florida — including Miami, Tampa, Jacksonville, Kissimmee, and Lakeland.',
  },

  tampa: {
    cityName: 'Tampa',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'St. Petersburg', slug: 'st-petersburg' },
      { city: 'Clearwater',     slug: 'clearwater'    },
      { city: 'Brandon',        slug: 'brandon'       },
      { city: 'Wesley Chapel',  slug: 'wesley-chapel' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Orlando',         slug: 'orlando'         },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Sarasota',        slug: 'sarasota'        },
    ],
    contextualSentence: 'Not in Tampa? We serve all of Florida — St. Petersburg, Clearwater, Sarasota, Orlando, Miami, and Fort Lauderdale.',
  },

  jacksonville: {
    cityName: 'Jacksonville',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Ponte Vedra Beach', slug: 'ponte-vedra-beach' },
      { city: 'Atlantic Beach',    slug: 'atlantic-beach'    },
      { city: 'St. Augustine',     slug: 'st-augustine'      },
      { city: 'Palm Coast',        slug: 'palm-coast'        },
    ],
    otherStateCities: [
      { city: 'Miami',     slug: 'miami'     },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Sarasota',  slug: 'sarasota'  },
    ],
    contextualSentence: 'Not in Jacksonville? We serve all of Florida — St. Augustine, Ponte Vedra Beach, Orlando, Miami, Tampa, and Sarasota.',
  },

  'fort-lauderdale': {
    cityName: 'Fort Lauderdale',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Miami',         slug: 'miami'         },
      { city: 'Boca Raton',    slug: 'boca-raton'    },
      { city: 'Hollywood',     slug: 'hollywood'     },
      { city: 'Pompano Beach', slug: 'pompano-beach' },
    ],
    otherStateCities: [
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Naples',    slug: 'naples'    },
    ],
    contextualSentence: 'Not in Fort Lauderdale? We serve all of Florida — Miami, Boca Raton, Hollywood, Orlando, Tampa, and Naples.',
  },

  sarasota: {
    cityName: 'Sarasota',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Bradenton',    slug: 'bradenton'    },
      { city: 'Venice',       slug: 'venice'       },
      { city: 'Siesta Key',   slug: 'siesta-key'   },
      { city: 'Longboat Key', slug: 'longboat-key' },
    ],
    otherStateCities: [
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Naples',      slug: 'naples'      },
      { city: 'Fort Myers',  slug: 'fort-myers'  },
      { city: 'Cape Coral',  slug: 'cape-coral'  },
    ],
    contextualSentence: 'Not in Sarasota? We serve all of Florida\'s Gulf Coast — Bradenton, Venice, Naples, Fort Myers, Tampa, and Cape Coral.',
  },

  naples: {
    cityName: 'Naples',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Marco Island',   slug: 'marco-island'   },
      { city: 'Fort Myers',     slug: 'fort-myers'     },
      { city: 'Cape Coral',     slug: 'cape-coral'     },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in Naples? We serve all of Southwest Florida — Bonita Springs, Marco Island, Fort Myers, Cape Coral, Sarasota, and Tampa.',
  },

  'west-palm-beach': {
    cityName: 'West Palm Beach',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Boca Raton',     slug: 'boca-raton'     },
      { city: 'Delray Beach',   slug: 'delray-beach'   },
      { city: 'Jupiter',        slug: 'jupiter'        },
      { city: 'Palm Beach Gardens', slug: 'palm-beach-gardens' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Orlando',         slug: 'orlando'         },
    ],
    contextualSentence: 'Not in West Palm Beach? We serve all of Palm Beach County and South Florida — Boca Raton, Delray Beach, Jupiter, Miami, and Fort Lauderdale.',
  },

  destin: {
    cityName: 'Destin',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Miramar Beach',    slug: 'miramar-beach'    },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: '30A',              slug: '30a'              },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    otherStateCities: [
      { city: 'Pensacola',     slug: 'pensacola'     },
      { city: 'Jacksonville',  slug: 'jacksonville'  },
      { city: 'Tampa',         slug: 'tampa'         },
      { city: 'Orlando',       slug: 'orlando'       },
    ],
    contextualSentence: 'Not in Destin? We serve the entire Emerald Coast — 30A, Fort Walton Beach, Miramar Beach, Panama City Beach, and all Florida Panhandle vacation communities.',
  },

  'st-petersburg': {
    cityName: 'St. Petersburg',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Tampa',         slug: 'tampa'         },
      { city: 'Clearwater',    slug: 'clearwater'    },
      { city: 'Gulfport',      slug: 'gulfport'      },
      { city: 'St. Pete Beach', slug: 'st-pete-beach' },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in St. Petersburg? We serve all of Tampa Bay — Clearwater, Gulfport, Sarasota, Tampa, Orlando, and Miami.',
  },

  clearwater: {
    cityName: 'Clearwater',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'St. Petersburg', slug: 'st-petersburg' },
      { city: 'Tampa',          slug: 'tampa'          },
      { city: 'Dunedin',        slug: 'dunedin'        },
      { city: 'Tarpon Springs', slug: 'tarpon-springs' },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in Clearwater? We serve all of Pinellas County — St. Petersburg, Dunedin, Tarpon Springs, Sarasota, Tampa, and Orlando.',
  },

  kissimmee: {
    cityName: 'Kissimmee',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Orlando',        slug: 'orlando'        },
      { city: 'Celebration',    slug: 'celebration'    },
      { city: 'Lake Buena Vista', slug: 'lake-buena-vista' },
      { city: 'Davenport',      slug: 'davenport'      },
    ],
    otherStateCities: [
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Miami',       slug: 'miami'       },
      { city: 'Sarasota',    slug: 'sarasota'    },
    ],
    contextualSentence: 'Not in Kissimmee? We serve the full Central Florida vacation corridor — Orlando, Celebration, Davenport, Clermont, and Winter Garden.',
  },

  'key-west': {
    cityName: 'Key West',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Marathon',    slug: 'marathon'    },
      { city: 'Islamorada',  slug: 'islamorada'  },
      { city: 'Key Largo',   slug: 'key-largo'   },
      { city: 'Big Pine Key', slug: 'big-pine-key' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Naples',          slug: 'naples'          },
    ],
    contextualSentence: 'Not in Key West? We serve all of Florida — Miami, Fort Lauderdale, Naples, Sarasota, Tampa, and Orlando.',
  },

  'boca-raton': {
    cityName: 'Boca Raton',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Delray Beach',   slug: 'delray-beach'   },
      { city: 'Deerfield Beach', slug: 'deerfield-beach' },
      { city: 'Boynton Beach',  slug: 'boynton-beach'  },
      { city: 'Highland Beach', slug: 'highland-beach'  },
    ],
    otherStateCities: [
      { city: 'West Palm Beach', slug: 'west-palm-beach' },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Miami',           slug: 'miami'           },
    ],
    contextualSentence: 'Not in Boca Raton? We serve all of Palm Beach County — West Palm Beach, Delray Beach, Deerfield Beach, Fort Lauderdale, and Miami.',
  },

  'cape-coral': {
    cityName: 'Cape Coral',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Fort Myers',     slug: 'fort-myers'    },
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Sanibel',        slug: 'sanibel'        },
      { city: 'North Fort Myers', slug: 'north-fort-myers' },
    ],
    otherStateCities: [
      { city: 'Sarasota', slug: 'sarasota' },
      { city: 'Tampa',    slug: 'tampa'    },
      { city: 'Naples',   slug: 'naples'   },
    ],
    contextualSentence: 'Not in Cape Coral? We serve all of Southwest Florida — Fort Myers, Bonita Springs, Naples, Sarasota, and Tampa.',
  },

  'panama-city-beach': {
    cityName: 'Panama City Beach',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: '30A',               slug: '30a'               },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: 'Mexico Beach',      slug: 'mexico-beach'      },
    ],
    otherStateCities: [
      { city: 'Pensacola',    slug: 'pensacola'    },
      { city: 'Tallahassee',  slug: 'tallahassee'  },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Panama City Beach? We serve the full Emerald Coast — Destin, 30A, Fort Walton Beach, Pensacola, and all Panhandle vacation communities.',
  },

  '30a': {
    cityName: '30A',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: 'Miramar Beach',     slug: 'miramar-beach'     },
      { city: 'Santa Rosa Beach',  slug: 'santa-rosa-beach'  },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
    ],
    otherStateCities: [
      { city: 'Pensacola',         slug: 'pensacola'         },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
      { city: 'Jacksonville',      slug: 'jacksonville'      },
    ],
    contextualSentence: 'Not on 30A? We serve the full Emerald Coast — Destin, Miramar Beach, Fort Walton Beach, and Panama City Beach.',
  },

  pensacola: {
    cityName: 'Pensacola',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Gulf Breeze',   slug: 'gulf-breeze'   },
      { city: 'Navarre',       slug: 'navarre'        },
      { city: 'Navarre Beach', slug: 'navarre-beach'  },
      { city: 'Perdido Key',   slug: 'perdido-key'    },
    ],
    otherStateCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    contextualSentence: 'Not in Pensacola? We serve the full Emerald Coast — Destin, Fort Walton Beach, Navarre Beach, 30A, and Panama City Beach.',
  },

  bradenton: {
    cityName: 'Bradenton',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Sarasota',        slug: 'sarasota'        },
      { city: 'Anna Maria Island', slug: 'anna-maria-island' },
      { city: 'Palmetto',        slug: 'palmetto'        },
      { city: 'Lakewood Ranch',  slug: 'lakewood-ranch'  },
    ],
    otherStateCities: [
      { city: 'Tampa',      slug: 'tampa'     },
      { city: 'Naples',     slug: 'naples'    },
      { city: 'Fort Myers', slug: 'fort-myers' },
    ],
    contextualSentence: 'Not in Bradenton? We serve all of the Gulf Coast — Sarasota, Anna Maria Island, Tampa, Naples, and Fort Myers.',
  },

  'fort-myers': {
    cityName: 'Fort Myers',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Cape Coral',     slug: 'cape-coral'    },
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Estero',         slug: 'estero'         },
      { city: 'Sanibel',        slug: 'sanibel'        },
    ],
    otherStateCities: [
      { city: 'Naples',   slug: 'naples'   },
      { city: 'Sarasota', slug: 'sarasota' },
      { city: 'Tampa',    slug: 'tampa'    },
    ],
    contextualSentence: 'Not in Fort Myers? We serve all of Southwest Florida — Cape Coral, Bonita Springs, Naples, Sarasota, and Tampa.',
  },

  // ── Georgia ────────────────────────────────────────────────────────────────
  atlanta: {
    cityName: 'Atlanta',
    stateSlug: 'georgia',
    stateName: 'Georgia',
    stateAbbr: 'GA',
    nearbyMajorCities: [
      { city: 'Sandy Springs', slug: 'sandy-springs' },
      { city: 'Roswell',       slug: 'roswell'       },
      { city: 'Marietta',      slug: 'marietta'      },
      { city: 'Alpharetta',    slug: 'alpharetta'    },
    ],
    otherStateCities: [
      { city: 'Savannah', slug: 'savannah' },
      { city: 'Augusta',  slug: 'augusta'  },
    ],
    contextualSentence: 'Not in Atlanta? We serve all of Georgia — including Sandy Springs, Roswell, Savannah, Augusta, and surrounding metro communities.',
  },

  // ── North Carolina ─────────────────────────────────────────────────────────
  charlotte: {
    cityName: 'Charlotte',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Raleigh',     slug: 'raleigh'     },
      { city: 'Durham',      slug: 'durham'       },
      { city: 'Concord',     slug: 'concord'     },
      { city: 'Gastonia',    slug: 'gastonia'    },
    ],
    otherStateCities: [
      { city: 'Greensboro', slug: 'greensboro' },
      { city: 'Cary',       slug: 'cary'       },
      { city: 'Wilmington', slug: 'wilmington' },
    ],
    contextualSentence: 'Not in Charlotte? We serve all of North Carolina — including Raleigh, Durham, Greensboro, Cary, and Wilmington.',
  },

  // ── Colorado ───────────────────────────────────────────────────────────────
  denver: {
    cityName: 'Denver',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Aurora',     slug: 'aurora'     },
      { city: 'Lakewood',   slug: 'lakewood'   },
      { city: 'Thornton',   slug: 'thornton'   },
      { city: 'Arvada',     slug: 'arvada'     },
    ],
    otherStateCities: [
      { city: 'Colorado Springs', slug: 'colorado-springs' },
      { city: 'Boulder',          slug: 'boulder'          },
      { city: 'Fort Collins',     slug: 'fort-collins'     },
    ],
    contextualSentence: 'Not in Denver? We serve all of Colorado — including Colorado Springs, Boulder, Fort Collins, Aurora, and Front Range communities.',
  },

  // ── Tennessee ──────────────────────────────────────────────────────────────
  nashville: {
    cityName: 'Nashville',
    stateSlug: 'tennessee',
    stateName: 'Tennessee',
    stateAbbr: 'TN',
    nearbyMajorCities: [
      { city: 'Franklin',     slug: 'franklin'     },
      { city: 'Murfreesboro', slug: 'murfreesboro' },
      { city: 'Brentwood',    slug: 'brentwood'    },
      { city: 'Hendersonville', slug: 'hendersonville' },
    ],
    otherStateCities: [
      { city: 'Memphis',      slug: 'memphis'      },
      { city: 'Knoxville',    slug: 'knoxville'    },
      { city: 'Chattanooga',  slug: 'chattanooga'  },
    ],
    contextualSentence: 'Not in Nashville? We serve all of Tennessee — including Franklin, Memphis, Knoxville, Chattanooga, and surrounding Middle Tennessee.',
  },

  // ── Nevada ─────────────────────────────────────────────────────────────────
  'las-vegas': {
    cityName: 'Las Vegas',
    stateSlug: 'nevada',
    stateName: 'Nevada',
    stateAbbr: 'NV',
    nearbyMajorCities: [
      { city: 'Henderson',      slug: 'henderson'      },
      { city: 'North Las Vegas', slug: 'north-las-vegas' },
      { city: 'Summerlin',      slug: 'summerlin'      },
      { city: 'Boulder City',   slug: 'boulder-city'   },
    ],
    otherStateCities: [
      { city: 'Reno',        slug: 'reno'        },
      { city: 'Sparks',      slug: 'sparks'      },
      { city: 'Carson City', slug: 'carson-city' },
    ],
    contextualSentence: 'Not in Las Vegas? We serve all of Nevada — including Henderson, Reno, North Las Vegas, Sparks, and Carson City.',
  },
}

// ── Helper functions ──────────────────────────────────────────────────────────

/** Returns state linking data, or a minimal fallback for states not yet in the map. */
export function getStateLinkData(stateSlug) {
  return STATE_LINK_DATA[stateSlug] || null
}

/** Returns city linking data, or null if the city isn't mapped yet. */
export function getCityLinkData(citySlug) {
  return CITY_LINK_DATA[citySlug] || null
}

/** Returns featured cities for a state (top 6), used in StateFeaturedCities. */
export function getFeaturedCities(stateSlug) {
  return STATE_LINK_DATA[stateSlug]?.featuredCities || []
}

/** Returns secondary cities for a state, used in expanded city grids. */
export function getSecondaryCities(stateSlug) {
  return STATE_LINK_DATA[stateSlug]?.secondaryCities || []
}

/** Returns all major cities in a state except the current one — for ExploreStateSection. */
export function getOtherMajorCities(stateSlug, excludeCitySlug) {
  const featured = STATE_LINK_DATA[stateSlug]?.featuredCities || []
  return featured.filter(c => c.slug !== excludeCitySlug).slice(0, 5)
}
