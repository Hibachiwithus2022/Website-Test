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
      { city: 'Dallas',       slug: 'dallas',       desc: 'DFW metroplex & surrounding suburbs' },
      { city: 'Houston',      slug: 'houston',      desc: 'Greater Houston & Harris County' },
      { city: 'Austin',       slug: 'austin',       desc: 'Austin metro & Hill Country' },
      { city: 'San Antonio',  slug: 'san-antonio',  desc: 'Alamo City & Bexar County' },
      { city: 'Fort Worth',   slug: 'fort-worth',   desc: 'Tarrant County & West DFW' },
      { city: 'Plano',        slug: 'plano',        desc: 'North Dallas corridor' },
    ],
    secondaryCities: [
      { city: 'Frisco',         slug: 'frisco' },
      { city: 'Arlington',      slug: 'arlington' },
      { city: 'McKinney',       slug: 'mckinney' },
      { city: 'Irving',         slug: 'irving' },
      { city: 'Garland',        slug: 'garland' },
      { city: 'Lubbock',        slug: 'lubbock' },
      { city: 'El Paso',        slug: 'el-paso' },
      { city: 'Corpus Christi', slug: 'corpus-christi' },
    ],
    contextualSentence: 'We serve all of Texas, including Dallas, Houston, Austin, San Antonio, Fort Worth, Plano, and hundreds of surrounding cities.',
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
      { city: 'Miami',          slug: 'miami',          desc: 'Miami-Dade metro & beaches' },
      { city: 'Orlando',        slug: 'orlando',        desc: 'Central Florida & theme park corridor' },
      { city: 'Tampa',          slug: 'tampa',          desc: 'Tampa Bay area' },
      { city: 'Jacksonville',   slug: 'jacksonville',   desc: 'Northeast Florida\'s largest city' },
      { city: 'Fort Lauderdale',slug: 'fort-lauderdale',desc: 'Broward County & Intracoastal' },
      { city: 'Boca Raton',     slug: 'boca-raton',     desc: 'Palm Beach County' },
    ],
    secondaryCities: [
      { city: 'St. Petersburg', slug: 'st-petersburg' },
      { city: 'Sarasota',       slug: 'sarasota' },
      { city: 'Naples',         slug: 'naples' },
      { city: 'Cape Coral',     slug: 'cape-coral' },
      { city: 'Tallahassee',    slug: 'tallahassee' },
      { city: 'Hialeah',        slug: 'hialeah' },
    ],
    contextualSentence: 'We serve all of Florida, including Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, Boca Raton, and coastal communities throughout the state.',
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
      { city: 'Arlington',  slug: 'arlington'  },
      { city: 'Plano',      slug: 'plano'      },
      { city: 'Frisco',     slug: 'frisco'     },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Dallas? We serve all of Texas — including Fort Worth, Plano, Frisco, Houston, Austin, and San Antonio.',
  },

  houston: {
    cityName: 'Houston',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Sugar Land', slug: 'sugar-land' },
      { city: 'Katy',       slug: 'katy'       },
      { city: 'The Woodlands', slug: 'the-woodlands' },
      { city: 'Pearland',   slug: 'pearland'   },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Houston? We serve all of Texas — including Dallas, Austin, San Antonio, Sugar Land, Katy, and The Woodlands.',
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
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Houston',     slug: 'houston'     },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Austin? We serve all of Texas — including Dallas, Houston, San Antonio, Round Rock, Cedar Park, and Georgetown.',
  },

  'san-antonio': {
    cityName: 'San Antonio',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Austin',     slug: 'austin'     },
      { city: 'New Braunfels', slug: 'new-braunfels' },
      { city: 'Schertz',    slug: 'schertz'    },
      { city: 'Boerne',     slug: 'boerne'     },
    ],
    otherStateCities: [
      { city: 'Dallas',  slug: 'dallas'  },
      { city: 'Houston', slug: 'houston' },
      { city: 'Austin',  slug: 'austin'  },
    ],
    contextualSentence: 'Not in San Antonio? We serve all of Texas — including Dallas, Houston, Austin, and surrounding Hill Country communities.',
  },

  'fort-worth': {
    cityName: 'Fort Worth',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Dallas',     slug: 'dallas'     },
      { city: 'Arlington',  slug: 'arlington'  },
      { city: 'Keller',     slug: 'keller'     },
      { city: 'Southlake',  slug: 'southlake'  },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Fort Worth? We serve all of DFW and beyond — including Dallas, Arlington, Plano, Houston, and Austin.',
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
