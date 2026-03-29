'use client'
import { useState } from 'react'

export default function CityFAQ({ cityName, stateName, stateAbbr, faqSet = [], supplementalFaqs = [] }) {
  const [openIdx, setOpenIdx] = useState(null)
  // City-specific FAQs first, then supplemental pool (de-duped by question)
  const cityQs = faqSet.map(f => f.q.toLowerCase())
  const uniqueSupplemental = supplementalFaqs.filter(f => !cityQs.includes(f.q.toLowerCase()))
  const allFaqs = [...faqSet, ...uniqueSupplemental]

  return (
    <section style={{ background: 'linear-gradient(180deg,#1E1410,#1A1209)', padding: '5rem 1.5rem' }}>
      <div className="max-w-3xl mx-auto">

        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>FAQ</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#F5EFE0', lineHeight: 1.05 }}>
            Frequently Asked Questions<br />
            <span style={{ color: '#C8102E' }}>Hibachi at Home in {cityName}, {stateAbbr}</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {allFaqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: openIdx === i ? 'rgba(200,16,46,0.06)' : 'rgba(245,239,224,0.04)',
                border: `1px solid ${openIdx === i ? 'rgba(200,16,46,0.28)' : 'rgba(245,239,224,0.08)'}`,
                overflow: 'hidden',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.2rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', gap: '1rem',
                }}
                aria-expanded={openIdx === i}
              >
                <span style={{ fontWeight: 600, color: '#F5EFE0', fontSize: '0.95rem', lineHeight: 1.5 }}>{faq.q}</span>
                <span style={{
                  color: '#C8102E', fontSize: '1.5rem', lineHeight: 1, flexShrink: 0, userSelect: 'none',
                  transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.22s ease',
                }}>+</span>
              </button>
              {openIdx === i && (
                <div style={{ padding: '0 1.5rem 1.4rem', fontSize: '0.9rem', color: 'rgba(245,239,224,0.62)', lineHeight: 1.85 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema note */}
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.82rem', color: 'rgba(245,239,224,0.3)' }}>
          Have more questions? Call or text us at{' '}
          <a href="tel:+16027672965" style={{ color: '#C8102E', textDecoration: 'none' }}>(602) 767-2965</a>
        </p>

      </div>
    </section>
  )
}
