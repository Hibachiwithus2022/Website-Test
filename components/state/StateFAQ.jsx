'use client'
import { useState } from 'react'

const SHARED_FAQS = [
  {
    q: 'How much does a private hibachi chef cost?',
    a: 'Our standard rate is $55 per adult and $30 per child (12 and under). The minimum event total is $550, which typically covers 8–10 guests. Premium and Elite packages are available for larger budgets or groups.',
  },
  {
    q: 'What do I need to provide for the event?',
    a: 'You provide the space, tables, and chairs for your guests. We bring everything else — the teppan grill, all ingredients, sauces, plates, chopsticks, and full setup. You provide: adequate outdoor space (at least 10×10 ft), access to the cooking area, and your guests.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking 1–2 weeks ahead for weekday events and 2–3 weeks for weekends. Peak seasons (summer, holidays, graduation month) book up fast — reserve as early as possible.',
  },
  {
    q: 'Can we customize the menu?',
    a: 'Yes — our Standard package includes 2 protein choices per person, Premium includes 3, and Elite is fully custom. Add-ons (lobster tail, filet mignon, scallops, gyoza, etc.) are available at any tier.',
  },
  {
    q: 'What if it rains or weather is bad?',
    a: 'We can adapt to covered outdoor spaces (patios, pavilions, garages) or indoor locations with proper ventilation. If weather forces cancellation, we offer full credit with no penalty for rescheduling.',
  },
]

export default function StateFAQ({ state, stateData }) {
  const allFaqs = [...(stateData.faq || []), ...SHARED_FAQS]
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section style={{ background: 'linear-gradient(180deg,#1E1410,#1A1209)', padding: '4.5rem 1.5rem' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>FAQ</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#F5EFE0', lineHeight: 1.05 }}>
            Hibachi in {state}<br />
            <span style={{ color: '#C8102E' }}>Common Questions</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {allFaqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: openIdx === i ? 'rgba(200,16,46,0.06)' : 'rgba(245,239,224,0.04)',
                border: `1px solid ${openIdx === i ? 'rgba(200,16,46,0.3)' : 'rgba(245,239,224,0.08)'}`,
                transition: 'border-color 0.2s, background 0.2s',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', gap: '1rem',
                }}
              >
                <span style={{ fontWeight: 600, color: '#F5EFE0', fontSize: '0.95rem', lineHeight: 1.5 }}>{faq.q}</span>
                <span style={{
                  color: '#C8102E', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0,
                  transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.25s ease',
                }}>+</span>
              </button>
              {openIdx === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', fontSize: '0.9rem', color: 'rgba(245,239,224,0.65)', lineHeight: 1.82 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
