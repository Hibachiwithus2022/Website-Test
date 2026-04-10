'use client'

// ── Time slot config ──────────────────────────────────────────────────────────
// To add real availability in the future, replace this array with a fetch call:
// const slots = await fetch(`/api/availability?date=${date}`)
export const TIME_SLOTS = [
  { id: '12pm', label: '12:00 PM', period: 'Afternoon' },
  { id: '2pm',  label: '2:00 PM',  period: 'Afternoon' },
  { id: '4pm',  label: '4:00 PM',  period: 'Evening'   },
  { id: '6pm',  label: '6:00 PM',  period: 'Evening'   },
]

export default function BookingTimeSlots({ selected, onSelect }) {
  return (
    <div>
      <p style={{ fontSize: '0.8rem', color: 'rgba(26,18,9,0.45)', marginBottom: '1.25rem' }}>
        All times are approximate start times. Chef arrives 30 min early to set up.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {TIME_SLOTS.map(slot => {
          const isSelected = selected === slot.label

          return (
            <button
              key={slot.id}
              onClick={() => onSelect(slot.label)}
              className="flex flex-col items-center justify-center transition-all duration-150"
              style={{
                padding: '1rem',
                border: isSelected ? '2px solid #C8102E' : '1px solid rgba(26,18,9,0.14)',
                background: isSelected ? 'rgba(200,16,46,0.06)' : '#FFFFFF',
                cursor: 'pointer',
                outline: 'none',
                position: 'relative',
              }}
              onMouseEnter={e => { if (!isSelected) e.currentTarget.style.borderColor = 'rgba(200,16,46,0.4)' }}
              onMouseLeave={e => { if (!isSelected) e.currentTarget.style.borderColor = 'rgba(26,18,9,0.14)' }}
            >
              {isSelected && (
                <span style={{
                  position: 'absolute', top: 8, right: 8,
                  width: 18, height: 18, borderRadius: '50%',
                  background: '#C8102E',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="10" height="10" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
              )}
              <div style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: isSelected ? '#C8102E' : '#1A1209',
                fontFamily: 'var(--font-bebas, sans-serif)',
                letterSpacing: '0.04em',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>
                {slot.label}
              </div>
              <div style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isSelected ? 'rgba(200,16,46,0.7)' : 'rgba(26,18,9,0.35)',
              }}>
                {slot.period}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
