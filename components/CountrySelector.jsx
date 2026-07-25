'use client'
import { useCountry } from './CountryContext'
import { PRICING } from '../lib/pricingConfig'

const OPTIONS = [
  { id: 'us', flag: '🇺🇸' },
  { id: 'ca', flag: '🇨🇦' },
]

export default function CountrySelector() {
  const { country, setCountry } = useCountry()

  return (
    <div className="country-selector" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
      <style>{`
        .country-selector .toggle-btn:not(.active):hover {
          background: rgba(245,239,224,0.08);
          border-color: rgba(245,239,224,0.4);
          color: rgba(245,239,224,0.9);
          transform: translateY(-1px);
        }
        .country-selector .toggle-btn:active { transform: translateY(0); }
        .country-selector .toggle-btn:focus-visible {
          outline: 2px solid #D4A843;
          outline-offset: 2px;
        }
      `}</style>
      <div style={{ display: 'inline-flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {OPTIONS.map(opt => {
          const active = country === opt.id
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setCountry(opt.id)}
              aria-pressed={active}
              className={`toggle-btn${active ? ' active' : ''}`}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.55rem',
                padding: 'clamp(0.55rem, 1.5vw, 0.7rem) clamp(1.1rem, 3vw, 1.5rem)',
                borderRadius: 10,
                border: active ? '1.5px solid #C8102E' : '1.5px solid rgba(245,239,224,0.22)',
                background: active ? '#C8102E' : 'transparent',
                color: active ? '#F5EFE0' : 'rgba(245,239,224,0.7)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.02em',
                cursor: 'pointer',
                transition: 'background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease',
                boxShadow: active ? '0 4px 16px rgba(200,16,46,0.35)' : 'none',
              }}
            >
              <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>{opt.flag}</span>
              {PRICING[opt.id].label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
