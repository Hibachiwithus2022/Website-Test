'use client'
import { useCountry } from './CountryContext'
import { formatMoney } from '../lib/pricingConfig'

export default function RateBand() {
  const { country, pricing } = useCountry()

  const rates = [
    { label: 'Per Adult', value: formatMoney(pricing.adult, pricing.symbol),   sub: '13 & older' },
    { label: 'Per Child', value: formatMoney(pricing.child, pricing.symbol),   sub: 'Ages 4–12'  },
    { label: 'Minimum',   value: formatMoney(pricing.minimum, pricing.symbol), sub: 'All events'  },
  ]

  return (
    <section style={{ background: '#C8102E', padding: '2rem 1.5rem' }}>
      <div className="max-w-3xl mx-auto">
        <div key={country} className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', textAlign: 'center' }}>
          {rates.map((r, i) => (
            <div key={i}>
              <div className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#F5EFE0', lineHeight: 1 }}>{r.value}</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.65)', marginTop: '0.25rem' }}>{r.label}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(245,239,224,0.45)', marginTop: '0.15rem' }}>{r.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
