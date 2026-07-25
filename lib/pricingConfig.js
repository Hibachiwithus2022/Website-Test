// =============================================================================
// lib/pricingConfig.js — Shared pricing engine for the price estimator
// Values must stay in sync with app/menu/page.js (US) and lib/ontarioData.js (CA)
// =============================================================================

export const PRICING = {
  us: {
    label: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    symbol: '$',
    adult: 60,
    child: 30,
    minimum: 600,
    addOns: [
      { id: 'filet',        label: 'Filet Mignon upgrade', price: 5,  per: 'person' },
      { id: 'lobster',      label: 'Lobster Tail upgrade', price: 10, per: 'person' },
      { id: 'extraProtein', label: 'Extra Protein',        price: 15, per: 'order'  },
      { id: 'noodles',      label: 'Yakisoba Noodles',     price: 5,  per: 'order'  },
      { id: 'gyoza',        label: 'Gyoza (8 pc)',         price: 10, per: 'order'  },
      { id: 'edamame',      label: 'Edamame',              price: 6,  per: 'order'  },
    ],
  },
  ca: {
    label: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    symbol: 'CA$',
    adult: 78,
    child: 40,
    minimum: 780,
    addOns: [
      { id: 'filet',        label: 'Filet Mignon upgrade', price: 8,  per: 'person' },
      { id: 'lobster',      label: 'Lobster Tail upgrade', price: 15, per: 'person' },
      { id: 'extraProtein', label: 'Extra Protein',        price: 20, per: 'order'  },
      { id: 'noodles',      label: 'Yakisoba Noodles',     price: 8,  per: 'order'  },
      { id: 'gyoza',        label: 'Gyoza (8 pc)',         price: 15, per: 'order'  },
      { id: 'edamame',      label: 'Edamame',              price: 8,  per: 'order'  },
    ],
  },
}

export const COUNTRY_STORAGE_KEY = 'hibachi-country'
export const DEFAULT_COUNTRY = 'us'

export function formatMoney(amount, symbol) {
  return `${symbol}${Math.round(amount).toLocaleString()}`
}
