import { WHY_US_VARIANTS } from '../../lib/cityData'

export default function CityWhyUs({ cityName, uniqueWhyUsVariant = 0 }) {
  const variant = WHY_US_VARIANTS[uniqueWhyUsVariant % WHY_US_VARIANTS.length]
  const v = { headline: variant.headline, items: variant.items(cityName) }

  return (
    <section style={{ background: 'linear-gradient(180deg,#1E1410,#1A1209)', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>Why Choose Us</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#F5EFE0', lineHeight: 1.05 }}>
            {v.headline(cityName)}
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '1.25rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
          {v.items.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '1.75rem',
                background: 'rgba(245,239,224,0.04)',
                border: '1px solid rgba(245,239,224,0.07)',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
              }}
            >
              <div style={{
                width: 46, height: 46, flexShrink: 0,
                background: 'rgba(200,16,46,0.1)', border: '1px solid rgba(200,16,46,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem',
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#F5EFE0', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.84rem', color: 'rgba(245,239,224,0.55)', lineHeight: 1.72 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
