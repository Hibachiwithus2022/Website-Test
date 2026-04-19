'use client'
import { useState } from 'react'

const RATE_ADULT = 60
const RATE_CHILD = 30
const MINIMUM    = 600

const ADD_ONS = [
  { id: 'filet',   label: 'Filet Mignon upgrade',  price: 5,  per: 'person' },
  { id: 'lobster', label: 'Lobster Tail upgrade',   price: 10, per: 'person' },
  { id: 'noodles', label: 'Yakisoba Noodles',       price: 5,  per: 'order'  },
  { id: 'gyoza',   label: 'Gyoza (8 pc)',            price: 10, per: 'order'  },
  { id: 'edamame', label: 'Edamame',                 price: 6,  per: 'order'  },
]

function Counter({ label, sub, value, min, max, onChange }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <div>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1A1209' }}>{label}</div>
        <div style={{ fontSize: '0.78rem', color: 'rgba(26,18,9,0.45)', marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={{
            width: 36, height: 36, borderRadius: 8, border: 'none',
            background: value <= min ? 'rgba(200,16,46,0.2)' : '#C8102E',
            color: '#fff', fontWeight: 700, fontSize: '1.2rem',
            cursor: value <= min ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >−</button>
        <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#1A1209', minWidth: 28, textAlign: 'center' }}>
          {value}
        </span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={{
            width: 36, height: 36, borderRadius: 8, border: 'none',
            background: value >= max ? 'rgba(200,16,46,0.2)' : '#C8102E',
            color: '#fff', fontWeight: 700, fontSize: '1.2rem',
            cursor: value >= max ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >+</button>
      </div>
    </div>
  )
}

export default function EstimationTool() {
  const [adults,   setAdults]   = useState(5)
  const [children, setChildren] = useState(0)
  const [addOns,   setAddOns]   = useState({})   // { id: quantity }

  function toggleAddOn(id) {
    setAddOns(prev => ({ ...prev, [id]: prev[id] ? 0 : 1 }))
  }
  function setAddOnQty(id, qty) {
    setAddOns(prev => ({ ...prev, [id]: Math.max(0, qty) }))
  }

  const totalPeople   = adults + children
  const baseAdults    = adults * RATE_ADULT
  const baseChildren  = children * RATE_CHILD
  const baseTotal     = baseAdults + baseChildren

  const addOnTotal = ADD_ONS.reduce((sum, a) => {
    const qty = addOns[a.id] || 0
    if (!qty) return sum
    return sum + (a.per === 'person' ? a.price * totalPeople * qty : a.price * qty)
  }, 0)

  const subtotal  = baseTotal + addOnTotal
  const final     = Math.max(subtotal, MINIMUM)
  const atMinimum = subtotal < MINIMUM

  return (
    <div style={{ maxWidth: 680, margin: '0 auto' }}>

      {/* Guest counters */}
      <div style={{ background: 'rgba(200,16,46,0.04)', border: '1px solid rgba(200,16,46,0.12)', borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)', marginBottom: '1rem' }}>
          Guest Count
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Counter
            label="Adults"
            sub={`$${RATE_ADULT} per person`}
            value={adults} min={1} max={100}
            onChange={setAdults}
          />
          <Counter
            label="Children"
            sub={`$${RATE_CHILD} per child · Ages 4–12`}
            value={children} min={0} max={50}
            onChange={setChildren}
          />
        </div>
      </div>

      {/* Add-ons */}
      <div style={{ background: '#fff', border: '1px solid rgba(26,18,9,0.09)', borderRadius: 16, padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)', marginBottom: '1rem' }}>
          Optional Add-Ons
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {ADD_ONS.map(a => {
            const qty     = addOns[a.id] || 0
            const active  = qty > 0
            const perNote = a.per === 'person' ? `$${a.price} × ${totalPeople} guests` : `$${a.price} per order`
            return (
              <div key={a.id} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
                padding: '0.85rem 1rem', borderRadius: 10,
                border: active ? '1.5px solid #C8102E' : '1.5px solid rgba(26,18,9,0.1)',
                background: active ? 'rgba(200,16,46,0.04)' : '#FAFAFA',
                transition: 'all 0.15s ease',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                  <input type="checkbox" checked={active} onChange={() => toggleAddOn(a.id)}
                    style={{ width: 17, height: 17, accentColor: '#C8102E', cursor: 'pointer', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1A1209' }}>{a.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.45)', marginTop: 1 }}>{perNote}</div>
                  </div>
                </div>
                {active && a.per === 'order' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button onClick={() => setAddOnQty(a.id, qty - 1)}
                      style={{ width: 28, height: 28, borderRadius: 6, border: 'none', background: '#C8102E', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>
                      −
                    </button>
                    <span style={{ fontWeight: 700, color: '#1A1209', minWidth: 20, textAlign: 'center' }}>{qty}</span>
                    <button onClick={() => setAddOnQty(a.id, qty + 1)}
                      style={{ width: 28, height: 28, borderRadius: 6, border: 'none', background: '#C8102E', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>
                      +
                    </button>
                  </div>
                )}
                <div style={{ fontWeight: 700, color: active ? '#C8102E' : 'rgba(26,18,9,0.35)', fontSize: '0.9rem', flexShrink: 0 }}>
                  {active
                    ? `+$${a.per === 'person' ? a.price * totalPeople * qty : a.price * qty}`
                    : `+$${a.price}`}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary card */}
      <div style={{
        background: '#1A1209', borderRadius: 16, padding: '2rem',
        boxShadow: '0 8px 40px rgba(26,18,9,0.18)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, #C8102E, #D4A843)' }} />

        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.45)', marginBottom: '1.25rem' }}>
          Estimated Total
        </div>

        {/* Line items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'rgba(245,239,224,0.65)' }}>
            <span>{adults} adult{adults !== 1 ? 's' : ''} × ${RATE_ADULT}</span>
            <span>${baseAdults.toLocaleString()}</span>
          </div>
          {children > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'rgba(245,239,224,0.65)' }}>
              <span>{children} child{children !== 1 ? 'ren' : ''} × ${RATE_CHILD}</span>
              <span>${baseChildren.toLocaleString()}</span>
            </div>
          )}
          {ADD_ONS.filter(a => (addOns[a.id] || 0) > 0).map(a => {
            const qty  = addOns[a.id]
            const cost = a.per === 'person' ? a.price * totalPeople * qty : a.price * qty
            return (
              <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'rgba(245,239,224,0.65)' }}>
                <span>{a.label}{qty > 1 ? ` × ${qty}` : ''}</span>
                <span>+${cost.toLocaleString()}</span>
              </div>
            )
          })}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(245,239,224,0.1)', marginBottom: '1.25rem' }} />

        {/* Total */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '3.5rem', color: '#F5EFE0', lineHeight: 1, letterSpacing: '0.02em' }}>
              ${final.toLocaleString()}
            </div>
            {atMinimum && (
              <div style={{ fontSize: '0.75rem', color: 'rgba(212,168,67,0.85)', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#D4A843' }}>★</span>
                $600 minimum applies
              </div>
            )}
            <div style={{ fontSize: '0.75rem', color: 'rgba(245,239,224,0.35)', marginTop: '0.25rem' }}>
              Gratuity & travel fees not included
            </div>
          </div>
          <a href="/booking" className="btn-primary" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
            Book This Event
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Disclaimers */}
      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {[
          'This is an estimate only — final price confirmed at booking.',
          'Children ages 4–12 qualify for the $30 child rate. Under 4 is free.',
          'Travel fees vary by distance and will be quoted separately.',
        ].map((note, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.78rem', color: 'rgba(26,18,9,0.45)' }}>
            <span style={{ color: '#C8102E', flexShrink: 0 }}>•</span>
            {note}
          </div>
        ))}
      </div>
    </div>
  )
}
