'use client'
import { useState } from 'react'

const SHARED_FAQS = [
  {
    q: 'How much does a private hibachi chef cost?',
    a: 'Our rate is $60 per adult and $30 per child (ages 4–12). Children 3 and under eat free. The event minimum is $600. Travel fees may apply based on distance.',
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
    a: 'Yes — every event includes 2 protein choices per person. Add-ons like lobster tail, filet mignon, noodles, gyoza, and edamame are available at an additional cost.',
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
    <section style={{ background: 'linear-gradient(180deg,#F8F5F2,#FFFFFF)', padding: '4.5rem 1.5rem' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>FAQ</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#1A1209', lineHeight: 1.05 }}>
            Hibachi in {state}<br />
            <span style={{ color: '#C8102E' }}>Common Questions</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {allFaqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: openIdx === i ? 'rgba(200,16,46,0.06)' : '#FFFFFF',
                border: `1px solid ${openIdx === i ? 'rgba(200,16,46,0.3)' : 'rgba(26,18,9,0.09)'}`,
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
                <span style={{ fontWeight: 600, color: '#1A1209', fontSize: '0.95rem', lineHeight: 1.5 }}>{faq.q}</span>
                <span style={{
                  color: '#C8102E', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0,
                  transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.25s ease',
                }}>+</span>
              </button>
              {openIdx === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', fontSize: '0.9rem', color: 'rgba(26,18,9,0.65)', lineHeight: 1.82 }}>
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
