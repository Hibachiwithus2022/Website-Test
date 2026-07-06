import { WHY_US_VARIANTS } from '../../lib/cityData'

export default function CityWhyUs({ cityName, uniqueWhyUsVariant = 0, isOntario = false }) {
  const variant = WHY_US_VARIANTS[uniqueWhyUsVariant % WHY_US_VARIANTS.length]
  const rawItems = variant.items(cityName)
  const items = isOntario
    ? rawItems.map(item => ({
        ...item,
        desc: item.desc
          .replace('$60/adult, $30/child, $600 event minimum', '$78/adult, $40/child, $780 CAD event minimum'),
      }))
    : rawItems
  const v = { headline: variant.headline, items }

  return (
    <section style={{ background: '#FFFFFF', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>{variant.pill ?? 'Why Choose Us'}</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#1A1209', lineHeight: 1.05 }}>
            {v.headline(cityName)}
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '1.25rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
          {v.items.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '1.75rem',
                background: '#FFFFFF',
                border: '1px solid rgba(26,18,9,0.09)',
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
                <div style={{ fontWeight: 700, color: '#1A1209', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.84rem', color: 'rgba(26,18,9,0.55)', lineHeight: 1.72 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
