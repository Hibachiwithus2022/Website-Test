'use client'
import { useState } from 'react'
import BookingCalendar from './booking/BookingCalendar'
import BookingTimeSlots from './booking/BookingTimeSlots'

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDate(iso) {
  if (!iso) return ''
  const [year, month, day] = iso.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

// ── Step indicator ────────────────────────────────────────────────────────────
function StepIndicator({ step }) {
  const steps = ['Date', 'Time', 'Details']
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((label, i) => {
        const num      = i + 1
        const active   = step === num
        const complete = step > num
        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className="flex items-center justify-center transition-all duration-300"
                style={{
                  width: 36, height: 36,
                  borderRadius: '50%',
                  background: complete ? '#C8102E' : active ? '#C8102E' : 'transparent',
                  border: complete || active ? '2px solid #C8102E' : '2px solid rgba(26,18,9,0.18)',
                  color: complete || active ? '#FFFFFF' : 'rgba(26,18,9,0.4)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                }}
              >
                {complete ? (
                  <svg width="14" height="14" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : num}
              </div>
              <span style={{
                fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active || complete ? '#C8102E' : 'rgba(26,18,9,0.35)',
              }}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                width: 48, height: 2,
                margin: '0 8px',
                marginBottom: 20,
                background: complete ? '#C8102E' : 'rgba(26,18,9,0.1)',
                transition: 'background 0.3s ease',
              }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── Summary bar ───────────────────────────────────────────────────────────────
function SummaryBar({ date, time }) {
  if (!date && !time) return null
  return (
    <div className="flex items-center gap-3 flex-wrap mb-6" style={{
      padding: '0.75rem 1rem',
      background: 'rgba(200,16,46,0.05)',
      border: '1px solid rgba(200,16,46,0.18)',
    }}>
      {date && (
        <div className="flex items-center gap-2">
          <svg width="14" height="14" fill="none" stroke="#C8102E" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1A1209' }}>{formatDate(date)}</span>
        </div>
      )}
      {date && time && <span style={{ color: 'rgba(26,18,9,0.25)', fontSize: '0.8rem' }}>·</span>}
      {time && (
        <div className="flex items-center gap-2">
          <svg width="14" height="14" fill="none" stroke="#C8102E" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1A1209' }}>{time}</span>
        </div>
      )}
    </div>
  )
}

// ── Input component ───────────────────────────────────────────────────────────
function Field({ label, required, children }) {
  return (
    <div>
      <label style={{
        display: 'block', fontSize: '0.72rem', fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'rgba(26,18,9,0.5)', marginBottom: '0.4rem',
      }}>
        {label}{required && <span style={{ color: '#C8102E', marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls = "w-full p-3 border border-[rgba(26,18,9,0.18)] bg-white text-[#1A1209] text-[0.95rem] outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[rgba(200,16,46,0.1)] transition-all duration-150"

// ── Main component ────────────────────────────────────────────────────────────
export default function BookingForm() {
  const [step, setStep]       = useState(1)
  const [date, setDate]       = useState('')
  const [time, setTime]       = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]     = useState('')

  const [form, setForm] = useState({
    name: '', email: '', phone: '', guests: '', message: '',
  })

  function handleFormChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date: formatDate(date), time }),
      })

      if (res.ok) {
        setSuccess(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  // ── Success screen ──────────────────────────────────────────────────────────
  if (success) {
    return (
      <div className="text-center py-10 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-5" style={{
          background: 'rgba(200,16,46,0.08)', border: '2px solid rgba(200,16,46,0.25)',
        }}>
          <svg width="28" height="28" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="font-display" style={{ fontSize: '2rem', color: '#1A1209', marginBottom: '0.5rem' }}>
          Request Received!
        </h3>
        <p style={{ color: 'rgba(26,18,9,0.55)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
          We'll confirm your <strong>{formatDate(date)}</strong> at <strong>{time}</strong> booking within 1 business day. Check your email for confirmation.
        </p>
        <a href="tel:+16027672965" style={{ fontSize: '0.85rem', color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>
          Questions? Call (602) 767-2965
        </a>
      </div>
    )
  }

  // ── Step 1: Calendar ────────────────────────────────────────────────────────
  if (step === 1) {
    return (
      <div>
        <StepIndicator step={1} />
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1209', marginBottom: '1.5rem' }}>
          Select a Date
        </h3>
        <BookingCalendar selected={date} onSelect={d => { setDate(d); setTime('') }} />
        <div className="mt-6">
          <button
            onClick={() => setStep(2)}
            disabled={!date}
            className="btn-primary w-full justify-center"
            style={{
              width: '100%', justifyContent: 'center',
              opacity: date ? 1 : 0.4,
              cursor: date ? 'pointer' : 'not-allowed',
            }}
          >
            {date ? `Continue — ${formatDate(date)}` : 'Select a date to continue'}
            {date && (
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    )
  }

  // ── Step 2: Time slots ──────────────────────────────────────────────────────
  if (step === 2) {
    return (
      <div>
        <StepIndicator step={2} />
        <SummaryBar date={date} />
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1209', marginBottom: '1.25rem' }}>
          Select a Time
        </h3>
        <BookingTimeSlots selected={time} onSelect={setTime} />
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setStep(1)}
            className="btn-ghost flex-1 justify-center"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            disabled={!time}
            className="btn-primary"
            style={{
              flex: 2, justifyContent: 'center',
              opacity: time ? 1 : 0.4,
              cursor: time ? 'pointer' : 'not-allowed',
            }}
          >
            Continue
            {time && (
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    )
  }

  // ── Step 3: Form ────────────────────────────────────────────────────────────
  return (
    <div>
      <StepIndicator step={3} />
      <SummaryBar date={date} time={time} />

      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1209', marginBottom: '1.5rem' }}>
        Your Details
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Full Name" required>
            <input name="name" value={form.name} onChange={handleFormChange}
              placeholder="Jane Smith" required className={inputCls} />
          </Field>
          <Field label="Email" required>
            <input name="email" type="email" value={form.email} onChange={handleFormChange}
              placeholder="jane@example.com" required className={inputCls} />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Phone" required>
            <input name="phone" type="tel" value={form.phone} onChange={handleFormChange}
              placeholder="(555) 000-0000" required className={inputCls} />
          </Field>
          <Field label="Number of Guests" required>
            <select name="guests" value={form.guests} onChange={handleFormChange} required
              className={inputCls} style={{ cursor: 'pointer', appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%231A1209' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem',
              }}>
              <option value="" disabled>Select count</option>
              <option>1–5 guests</option>
              <option>6–10 guests</option>
              <option>11–15 guests</option>
              <option>16–20 guests</option>
              <option>21–30 guests</option>
              <option>31–50 guests</option>
              <option>50+ guests</option>
            </select>
          </Field>
        </div>

        <Field label="Event Details">
          <textarea name="message" value={form.message} onChange={handleFormChange}
            placeholder="Location, occasion, special requests..." rows={3}
            className={inputCls} style={{ resize: 'vertical', minHeight: 90 }} />
        </Field>

        {error && (
          <div className="flex items-center gap-2" style={{
            padding: '0.75rem 1rem', background: 'rgba(200,16,46,0.06)',
            border: '1px solid rgba(200,16,46,0.3)',
          }}>
            <svg width="16" height="16" fill="none" stroke="#C8102E" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span style={{ fontSize: '0.85rem', color: '#C8102E' }}>{error}</span>
          </div>
        )}

        <div className="flex gap-3">
          <button type="button" onClick={() => setStep(2)} className="btn-ghost"
            style={{ flex: 1, justifyContent: 'center' }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Back
          </button>
          <button type="submit" disabled={loading} className="btn-primary"
            style={{ flex: 2, justifyContent: 'center', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? (
              <>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  style={{ animation: 'booking-spin 0.9s linear infinite' }}>
                  <path d="M12 2a10 10 0 0 1 10 10"/>
                </svg>
                Submitting…
              </>
            ) : (
              <>
                Confirm Booking
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </>
            )}
          </button>
        </div>

        <p className="text-center" style={{ fontSize: '0.72rem', color: 'rgba(26,18,9,0.38)', margin: 0 }}>
          No payment required · We confirm within 1 business day
        </p>
      </form>

      <style>{`@keyframes booking-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
