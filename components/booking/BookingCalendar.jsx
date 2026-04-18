'use client'
import { useState } from 'react'

const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const SHORT_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export default function BookingCalendar({ selected, onSelect }) {
  const today = new Date()
  today.setHours(0,0,0,0)

  const [viewYear,  setViewYear]  = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y-1) }
    else setViewMonth(m => m-1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y+1) }
    else setViewMonth(m => m+1)
  }

  const atMin = viewYear === today.getFullYear() && viewMonth === today.getMonth()

  const firstDay    = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth+1, 0).getDate()
  const prevDays    = new Date(viewYear, viewMonth, 0).getDate()

  // Build full 6-row grid (42 cells)
  const cells = []
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: prevDays - i, current: false })
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, current: true })
  while (cells.length < 42) cells.push({ day: cells.length - firstDay - daysInMonth + 1, current: false })

  function isPast(day, current) {
    if (!current) return true
    const d = new Date(viewYear, viewMonth, day)
    return d < today
  }

  function isSelected(day, current) {
    if (!selected || !current) return false
    const [y,m,d] = selected.split('-').map(Number)
    return y === viewYear && m-1 === viewMonth && d === day
  }

  function isToday(day, current) {
    if (!current) return false
    return today.getFullYear()===viewYear && today.getMonth()===viewMonth && today.getDate()===day
  }

  function handleSelect(day, current) {
    if (!current || isPast(day, current)) return
    const mm = String(viewMonth+1).padStart(2,'0')
    const dd = String(day).padStart(2,'0')
    onSelect(`${viewYear}-${mm}-${dd}`)
  }

  return (
    <div style={{ background:'#fff', borderRadius:16, padding:'1.5rem', boxShadow:'0 2px 12px rgba(0,0,0,0.06)' }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <svg width="20" height="20" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span style={{ fontWeight:700, fontSize:'1.05rem', color:'#1A1209' }}>Select Date</span>
      </div>

      {/* Month nav */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} disabled={atMin}
          style={{ width:32, height:32, border:'none', background:'transparent', cursor: atMin ? 'not-allowed' : 'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', borderRadius:8,
            color: atMin ? 'rgba(26,18,9,0.2)' : '#1A1209' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span style={{ fontWeight:700, fontSize:'1.05rem', color:'#1A1209' }}>
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button onClick={nextMonth}
          style={{ width:32, height:32, border:'none', background:'transparent', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', borderRadius:8, color:'#1A1209' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', marginBottom:'0.5rem' }}>
        {DAYS.map(d => (
          <div key={d} style={{ textAlign:'center', fontSize:'0.72rem', fontWeight:600,
            color:'rgba(26,18,9,0.4)', paddingBottom:'0.4rem', letterSpacing:'0.04em' }}>
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:'3px' }}>
        {cells.map((cell, i) => {
          const past = isPast(cell.day, cell.current)
          const sel  = isSelected(cell.day, cell.current)
          const tod  = isToday(cell.day, cell.current)
          const dim  = !cell.current

          return (
            <button key={i} onClick={() => handleSelect(cell.day, cell.current)}
              disabled={past || dim}
              style={{
                height:44, borderRadius:8, border:'none',
                fontSize:'0.88rem', fontWeight: sel ? 700 : 500,
                cursor: past || dim ? 'default' : 'pointer',
                outline: tod && !sel ? '2px solid #C8102E' : 'none',
                outlineOffset: -2,
                background: sel ? '#C8102E' : past || dim ? '#F2F2F2' : '#fff',
                color: sel ? '#fff' : past || dim ? 'rgba(26,18,9,0.3)' : '#1A1209',
                transition: 'background 0.15s ease',
                position:'relative',
              }}
              onMouseEnter={e => { if (!sel && !past && !dim) e.currentTarget.style.background = 'rgba(200,16,46,0.09)' }}
              onMouseLeave={e => { if (!sel && !past && !dim) e.currentTarget.style.background = '#fff' }}
            >
              {cell.day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
