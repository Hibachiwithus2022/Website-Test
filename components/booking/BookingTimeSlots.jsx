'use client'

export const TIME_SLOTS = [
  '11:00 AM','12:00 PM','1:00 PM','2:00 PM',
  '3:00 PM','4:00 PM','5:00 PM','6:00 PM',
  '7:00 PM','8:00 PM','9:00 PM','10:00 PM',
]

const SHORT_DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const SHORT_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function formatShortDate(iso) {
  if (!iso) return ''
  const [y,m,d] = iso.split('-').map(Number)
  const date = new Date(y, m-1, d)
  return `${SHORT_DAYS[date.getDay()]}, ${SHORT_MONTHS[m-1]} ${d}`
}

export default function BookingTimeSlots({ selected, onSelect, date }) {
  return (
    <div style={{ background:'#fff', borderRadius:16, padding:'1.5rem', boxShadow:'0 2px 12px rgba(0,0,0,0.06)' }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <svg width="20" height="20" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        <span style={{ fontWeight:700, fontSize:'1.05rem', color:'#1A1209' }}>
          Select time{date ? ` for ${formatShortDate(date)}` : ''}
        </span>
      </div>

      {/* Slot grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem' }}
        className="sm:grid-cols-6-slots">
        {TIME_SLOTS.map(slot => {
          const active = selected === slot
          return (
            <button key={slot} onClick={() => onSelect(slot)}
              style={{
                padding:'0.9rem 0.5rem',
                borderRadius:10,
                border: active ? '2px solid #C8102E' : '1.5px solid rgba(26,18,9,0.12)',
                background: active ? 'rgba(200,16,46,0.07)' : '#fff',
                color: active ? '#C8102E' : '#1A1209',
                fontWeight: active ? 700 : 500,
                fontSize:'0.88rem',
                cursor:'pointer',
                transition:'all 0.15s ease',
                whiteSpace:'nowrap',
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor='rgba(200,16,46,0.4)'; e.currentTarget.style.background='rgba(200,16,46,0.04)' }}}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor='rgba(26,18,9,0.12)'; e.currentTarget.style.background='#fff' }}}
            >
              {slot}
            </button>
          )
        })}
      </div>

      <style>{`
        @media (min-width: 640px) {
          .sm\\:grid-cols-6-slots { grid-template-columns: repeat(6, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
