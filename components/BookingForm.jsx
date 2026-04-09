'use client'
import { useState } from 'react'

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: '#FFFFFF',
  border: '1px solid rgba(26,18,9,0.18)',
  color: '#1A1209',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-dm-sans, sans-serif)',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(26,18,9,0.5)',
  marginBottom: '0.5rem',
}

function Field({ label, required, children }) {
  return (
    <div>
      <label style={labelStyle}>
        {label}{required && <span style={{ color: '#C8102E', marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', guests: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const [focusedField, setFocusedField] = useState(null)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function getFocusStyle(name) {
    return focusedField === name
      ? { ...inputStyle, borderColor: '#C8102E', boxShadow: '0 0 0 3px rgba(200,16,46,0.1)' }
      : inputStyle
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 72, height: 72, background: 'rgba(200,16,46,0.08)',
          border: '2px solid rgba(200,16,46,0.25)', marginBottom: '1.5rem',
        }}>
          <svg width="32" height="32" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="font-display" style={{ fontSize: '2rem', color: '#1A1209', marginBottom: '0.75rem' }}>
          Request Received!
        </h3>
        <p style={{ color: 'rgba(26,18,9,0.6)', maxWidth: '30rem', margin: '0 auto 1.5rem', lineHeight: 1.72 }}>
          We'll be in touch within 1 business day to confirm your event. Check your email for a confirmation.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'rgba(26,18,9,0.45)' }}>
          Questions? Call <a href="tel:+16027672965" style={{ color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>(602) 767-2965</a>
        </p>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Row: Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="sm:grid-cols-2 grid-cols-1">
        <Field label="Full Name" required>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            placeholder="Jane Smith"
            required
            style={getFocusStyle('name')}
          />
        </Field>
        <Field label="Email Address" required>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            placeholder="jane@example.com"
            required
            style={getFocusStyle('email')}
          />
        </Field>
      </div>

      {/* Row: Phone + Event Date */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        <Field label="Phone Number" required>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            placeholder="(555) 000-0000"
            required
            style={getFocusStyle('phone')}
          />
        </Field>
        <Field label="Event Date" required>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            onFocus={() => setFocusedField('date')}
            onBlur={() => setFocusedField(null)}
            required
            min={new Date().toISOString().split('T')[0]}
            style={getFocusStyle('date')}
          />
        </Field>
      </div>

      {/* Number of Guests */}
      <Field label="Number of Guests" required>
        <select
          name="guests"
          value={form.guests}
          onChange={handleChange}
          onFocus={() => setFocusedField('guests')}
          onBlur={() => setFocusedField(null)}
          required
          style={{
            ...getFocusStyle('guests'),
            cursor: 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%231A1209' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            paddingRight: '2.75rem',
          }}
        >
          <option value="" disabled>Select guest count</option>
          <option value="1–5">1–5 guests</option>
          <option value="6–10">6–10 guests</option>
          <option value="11–15">11–15 guests</option>
          <option value="16–20">16–20 guests</option>
          <option value="21–30">21–30 guests</option>
          <option value="31–50">31–50 guests</option>
          <option value="50+">50+ guests</option>
        </select>
      </Field>

      {/* Message */}
      <Field label="Additional Details">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          placeholder="Tell us about your event — location, occasion, any special requests..."
          rows={4}
          style={{ ...getFocusStyle('message'), resize: 'vertical', minHeight: 110 }}
        />
      </Field>

      {/* Error message */}
      {status === 'error' && (
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '0.65rem',
          padding: '0.9rem 1rem',
          background: 'rgba(200,16,46,0.06)',
          border: '1px solid rgba(200,16,46,0.3)',
        }}>
          <svg width="18" height="18" fill="none" stroke="#C8102E" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span style={{ fontSize: '0.88rem', color: '#C8102E' }}>{errorMsg}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{
          justifyContent: 'center',
          opacity: status === 'loading' ? 0.7 : 1,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          width: '100%',
          transform: 'none',
        }}
      >
        {status === 'loading' ? (
          <>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              style={{ animation: 'spin 0.9s linear infinite' }}>
              <path d="M12 2a10 10 0 0 1 10 10"/>
            </svg>
            Submitting…
          </>
        ) : (
          <>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Request Your Date
          </>
        )}
      </button>

      <p style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.4)', textAlign: 'center', margin: 0 }}>
        We respond within 1 business day · No payment required to request
      </p>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 640px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  )
}
