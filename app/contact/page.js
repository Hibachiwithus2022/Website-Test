'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main style={{ background: '#F5EFE0', minHeight: '100vh' }}>

        {/* Header */}
        <section style={{ background: '#1A1209', padding: '80px 24px 60px', textAlign: 'center' }}>
          <p style={{ color: '#D4A843', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Get In Touch
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 16px' }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Questions about booking? We respond within 1 business day.
          </p>
        </section>

        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 24px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '40px' }}>

            {/* Phone */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(26,18,9,0.06)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
                </svg>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Phone</div>
                <a href="tel:+16027672965" style={{ color: '#1A1209', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>(602) 767-2965</a>
                <p style={{ color: '#888', fontSize: '13px', margin: '4px 0 0' }}>Mon–Sun, 9am–9pm</p>
              </div>
            </div>

            {/* Email */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(26,18,9,0.06)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#D4A843', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" fill="none" stroke="#1A1209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Email</div>
                <a href="mailto:info@hibachiconnect.com" style={{ color: '#1A1209', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>info@hibachiconnect.com</a>
                <p style={{ color: '#888', fontSize: '13px', margin: '4px 0 0' }}>We reply within 1 business day</p>
              </div>
            </div>

            {/* Book Now */}
            <div style={{ background: '#1A1209', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(26,18,9,0.15)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212,168,67,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Ready to Book?</div>
                <a href="/booking" style={{ color: '#D4A843', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>Reserve Your Date →</a>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', margin: '4px 0 0' }}>$60/adult · $600 minimum</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 2px 12px rgba(26,18,9,0.07)' }}>
            <h2 style={{ color: '#1A1209', fontSize: '20px', fontWeight: 800, margin: '0 0 24px' }}>Send us a message</h2>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>✓</div>
                <h3 style={{ color: '#1A1209', fontWeight: 800, margin: '0 0 8px' }}>Message sent!</h3>
                <p style={{ color: '#888', fontSize: '15px' }}>We'll get back to you within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Your Name', key: 'name', type: 'text', placeholder: 'John Smith' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@example.com' },
                  { label: 'Phone (optional)', key: 'phone', type: 'tel', placeholder: '(555) 000-0000' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ display: 'block', color: '#1A1209', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>{label}</label>
                    <input
                      type={type}
                      required={key !== 'phone'}
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #E8DFC8', borderRadius: '8px', fontSize: '15px', color: '#1A1209', background: '#FDFAF4', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', color: '#1A1209', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your event — date, guest count, location..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #E8DFC8', borderRadius: '8px', fontSize: '15px', color: '#1A1209', background: '#FDFAF4', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{ background: '#C8102E', color: '#fff', border: 'none', borderRadius: '8px', padding: '13px 28px', fontSize: '15px', fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'error' && <p style={{ color: '#C8102E', fontSize: '14px', margin: 0 }}>Something went wrong. Please call us directly.</p>}
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
