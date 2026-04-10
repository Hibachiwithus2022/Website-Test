'use client'
import { useState } from 'react'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

export default function BookingCalendar({ selected, onSelect }) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [viewYear, setViewYear]   = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  // Can't go before current month
  const atMinMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth()

  // Build calendar grid
  const firstDay  = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  function isPast(day) {
    const date = new Date(viewYear, viewMonth, day)
    return date < today
  }

  function isSelected(day) {
    if (!selected || !day) return false
    const s = new Date(selected)
    return s.getFullYear() === viewYear && s.getMonth() === viewMonth && s.getDate() === day
  }

  function isToday(day) {
    return today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === day
  }

  function handleSelect(day) {
    if (!day || isPast(day)) return
    // Build local date string YYYY-MM-DD without timezone shift
    const mm = String(viewMonth + 1).padStart(2, '0')
    const dd = String(day).padStart(2, '0')
    onSelect(`${viewYear}-${mm}-${dd}`)
  }

  return (
    <div>
      {/* Month nav */}
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={prevMonth}
          disabled={atMinMonth}
          className="w-9 h-9 flex items-center justify-center border transition-colors duration-150"
          style={{
            borderColor: atMinMonth ? 'rgba(26,18,9,0.08)' : 'rgba(26,18,9,0.18)',
            color: atMinMonth ? 'rgba(26,18,9,0.2)' : '#1A1209',
            cursor: atMinMonth ? 'not-allowed' : 'pointer',
            background: 'transparent',
          }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <div className="font-display text-center" style={{ fontSize: '1.25rem', color: '#1A1209', letterSpacing: '0.04em' }}>
          {MONTHS[viewMonth]} {viewYear}
        </div>

        <button
          onClick={nextMonth}
          className="w-9 h-9 flex items-center justify-center border transition-colors duration-150"
          style={{ borderColor: 'rgba(26,18,9,0.18)', color: '#1A1209', cursor: 'pointer', background: 'transparent' }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.35)', padding: '0 0 0.5rem' }}>
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          const past     = day ? isPast(day) : false
          const sel      = isSelected(day)
          const tod      = isToday(day)

          return (
            <button
              key={i}
              onClick={() => handleSelect(day)}
              disabled={!day || past}
              className="relative flex items-center justify-center transition-all duration-150"
              style={{
                height: 40,
                borderRadius: 0,
                fontSize: '0.88rem',
                fontWeight: sel ? 700 : 500,
                cursor: !day || past ? 'not-allowed' : 'pointer',
                background: sel ? '#C8102E' : 'transparent',
                color: sel ? '#FFFFFF' : past || !day ? 'rgba(26,18,9,0.2)' : '#1A1209',
                border: tod && !sel ? '1px solid #C8102E' : '1px solid transparent',
                outline: 'none',
              }}
              onMouseEnter={e => { if (!sel && day && !past) e.currentTarget.style.background = 'rgba(200,16,46,0.08)' }}
              onMouseLeave={e => { if (!sel) e.currentTarget.style.background = 'transparent' }}
            >
              {day || ''}
              {tod && !sel && (
                <span style={{
                  position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
                  width: 4, height: 4, borderRadius: '50%', background: '#C8102E',
                }} />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
