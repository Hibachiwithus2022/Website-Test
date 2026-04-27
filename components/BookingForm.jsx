'use client'
import { useState } from 'react'
import BookingCalendar from './booking/BookingCalendar'
import BookingTimeSlots from './booking/BookingTimeSlots'

// ── Constants ─────────────────────────────────────────────────────────────────
const OCCASIONS = ['Birthday','Anniversary','Corporate Event','Bachelor/Bachelorette','Graduation','Other']

const ADULT_OPTIONS   = Array.from({length:50}, (_,i) => i+1)
const CHILD_OPTIONS   = Array.from({length:21}, (_,i) => i)

const SHORT_DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const SHORT_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const LONG_MONTHS  = ['January','February','March','April','May','June','July','August','September','October','November','December']

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatLong(iso) {
  if (!iso) return ''
  const [y,m,d] = iso.split('-').map(Number)
  const dt = new Date(y, m-1, d)
  return `${SHORT_DAYS[dt.getDay()]}, ${LONG_MONTHS[m-1]} ${d}, ${y}`
}
function formatShort(iso) {
  if (!iso) return ''
  const [y,m,d] = iso.split('-').map(Number)
  const dt = new Date(y, m-1, d)
  return `${SHORT_DAYS[dt.getDay()]}, ${SHORT_MONTHS[m-1]} ${d}`
}

// ── Step bar ──────────────────────────────────────────────────────────────────
function StepBar({ step }) {
  const steps = ['Select Time','Guest Info','Complete']
  return (
    <div style={{ background:'linear-gradient(135deg,#C8102E 0%,#E8304A 100%)', borderRadius:'16px 16px 0 0', padding:'1.25rem 2rem' }}>
      <div className="flex items-center justify-center gap-0">
        {steps.map((label, i) => {
          const num      = i + 1
          const active   = step === num
          const complete = step > num
          return (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center gap-1" style={{ minWidth: 80 }}>
                <div style={{
                  width:32, height:32, borderRadius:'50%',
                  background: complete ? 'rgba(255,255,255,0.3)' : active ? '#fff' : 'rgba(255,255,255,0.25)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:700, fontSize:'0.85rem',
                  color: active ? '#C8102E' : '#fff',
                  border: !active && !complete ? '1.5px solid rgba(255,255,255,0.5)' : 'none',
                }}>
                  {complete ? (
                    <svg width="14" height="14" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : num}
                </div>
                <span style={{ fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.04em',
                  color: active ? '#fff' : 'rgba(255,255,255,0.65)', whiteSpace:'nowrap' }}>
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div style={{ width:56, height:2, background: complete ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)', margin:'0 4px', marginBottom:18, flexShrink:0 }} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Counter ───────────────────────────────────────────────────────────────────
function GuestCounter({ label, value, options, onChange }) {
  const idx = options.indexOf(value)
  return (
    <div>
      <label style={{ display:'block', fontSize:'0.8rem', fontWeight:600, color:'rgba(26,18,9,0.55)', marginBottom:'0.5rem' }}>
        {label}
      </label>
      <div className="flex items-center gap-2">
        <button onClick={() => idx > 0 && onChange(options[idx-1])} disabled={idx === 0}
          style={{ width:36, height:36, borderRadius:8, border:'none', cursor: idx===0 ? 'not-allowed':'pointer',
            background: idx===0 ? 'rgba(200,16,46,0.25)' : '#C8102E', color:'#fff',
            display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'1.1rem', flexShrink:0 }}>
          −
        </button>
        <select value={value} onChange={e => onChange(Number(e.target.value))}
          style={{ flex:1, padding:'0.6rem 0.75rem', border:'1.5px solid rgba(26,18,9,0.15)',
            borderRadius:8, background:'#fff', color:'#1A1209', fontWeight:500,
            fontSize:'0.9rem', cursor:'pointer', appearance:'none',
            backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%231A1209' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
            backgroundRepeat:'no-repeat', backgroundPosition:'right 0.6rem center', paddingRight:'2rem' }}>
          {options.map(v => (
            <option key={v} value={v}>
              {v} {label.includes('Adult') ? (v===1?'adult':'adults') : (v===1?'child':'children')}
            </option>
          ))}
        </select>
        <button onClick={() => idx < options.length-1 && onChange(options[idx+1])} disabled={idx===options.length-1}
          style={{ width:36, height:36, borderRadius:8, border:'none', cursor:'pointer',
            background:'#C8102E', color:'#fff',
            display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'1.1rem', flexShrink:0 }}>
          +
        </button>
      </div>
    </div>
  )
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span style={{ color:'#C8102E' }}>{icon}</span>
      <span style={{ fontWeight:700, fontSize:'1.05rem', color:'#1A1209' }}>{title}</span>
    </div>
  )
}

// ── Input ─────────────────────────────────────────────────────────────────────
function Input({ label, required, ...props }) {
  return (
    <div>
      <label style={{ display:'block', fontSize:'0.8rem', fontWeight:600,
        color:'rgba(26,18,9,0.55)', marginBottom:'0.4rem' }}>
        {label}{required && <span style={{ color:'#C8102E' }}> *</span>}
      </label>
      <input {...props} required={required}
        style={{ width:'100%', padding:'0.75rem 1rem', border:'1.5px solid rgba(26,18,9,0.15)',
          borderRadius:8, background:'#fff', color:'#1A1209', fontSize:'0.92rem',
          outline:'none', boxSizing:'border-box',
          transition:'border-color 0.15s ease',
          fontFamily:'inherit',
        }}
        onFocus={e => e.target.style.borderColor='#C8102E'}
        onBlur={e => e.target.style.borderColor='rgba(26,18,9,0.15)'}
      />
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function BookingForm() {
  const [step,     setStep]    = useState(1)
  const [date,     setDate]    = useState('')
  const [time,     setTime]    = useState('')
  const [prevDate, setPrevDate] = useState('')
  const [prevTime, setPrevTime] = useState('')
  const [loading,     setLoading]     = useState(false)
  const [error,       setError]       = useState('')
  const [bookingId,   setBookingId]   = useState('')
  const [showCancel,    setShowCancel]    = useState(false)
  const [cancelled,     setCancelled]     = useState(false)
  const [cancelLoading, setCancelLoading] = useState(false)
  const [cancelError,   setCancelError]   = useState('')
  const [showEdit,      setShowEdit]      = useState(false)
  const [editForm,      setEditForm]      = useState(null)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [updateError,   setUpdateError]   = useState('')
  const [showReschedule,      setShowReschedule]      = useState(false)
  const [rescheduleDate,      setRescheduleDate]      = useState('')
  const [rescheduleTime,      setRescheduleTime]      = useState('')
  const [rescheduleLoading,   setRescheduleLoading]   = useState(false)
  const [rescheduleSuccess,   setRescheduleSuccess]   = useState(false)
  const [rescheduleError,     setRescheduleError]     = useState('')

  const [form, setForm] = useState({
    firstName:'', lastName:'', email:'', phone:'',
    streetAddress:'', city:'', state:'', zip:'',
    adults:10, children:0,
    occasion:'', customOccasion:'', specialRequests:'',
    agreed: false,
  })

  function set(key, val) { setForm(p => ({...p, [key]: val})) }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.agreed) { setError('Please agree to the Terms of Service to continue.'); return }
    setLoading(true)
    setError('')

    const payload = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      date: formatLong(date),
      time,
      guests: `${form.adults} adult${form.adults!==1?'s':''}, ${form.children} child${form.children!==1?'ren':''}`,
      address: `${form.streetAddress}, ${form.city}, ${form.state} ${form.zip}`,
      occasion: form.customOccasion || form.occasion,
      message: form.specialRequests,
      ...(prevDate && prevTime ? { prevDate: formatLong(prevDate), prevTime } : {}),
    }

    try {
      const res = await fetch('/api/booking', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload),
      })
      if (res.ok) { const json = await res.json(); setBookingId(json.bookingId || ''); setStep(3) }
      else { setError('Something went wrong. Please try again or call us directly.') }
    } catch {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  // ── Cancelled screen ────────────────────────────────────────────────────────
  if (cancelled) {
    const fullName = `${form.firstName} ${form.lastName}`.trim()
    const guestSummary = `${form.adults} adult${form.adults!==1?'s':''}, ${form.children} child${form.children!==1?'ren':''}`
    return (
      <div style={{ background:'#F5F5F7', borderRadius:16, overflow:'hidden' }}>
        <div style={{ background:'linear-gradient(135deg,#C8102E 0%,#E8304A 100%)', borderRadius:'16px 16px 0 0', padding:'1.25rem 2rem', textAlign:'center' }}>
          <span style={{ fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.75)' }}>
            Booking Cancelled
          </span>
        </div>
        <div style={{ background:'#fff', borderRadius:'0 0 16px 16px', padding:'2.5rem 1.5rem', textAlign:'center' }}>

          {/* Icon */}
          <div style={{ width:80, height:80, borderRadius:'50%', background:'rgba(200,16,46,0.08)',
            border:'2px solid rgba(200,16,46,0.2)',
            display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem' }}>
            <svg width="36" height="36" fill="none" stroke="#C8102E" strokeWidth="2.2" strokeLinecap="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>

          <h3 style={{ fontFamily:'var(--font-bebas,sans-serif)', fontSize:'2.2rem', color:'#1A1209', margin:'0 0 0.4rem', letterSpacing:'0.03em' }}>
            Appointment Cancelled
          </h3>
          <p style={{ color:'rgba(26,18,9,0.55)', fontSize:'0.95rem', lineHeight:1.7, maxWidth:'26rem', margin:'0 auto 2rem' }}>
            Your hibachi booking has been successfully cancelled.
          </p>

          {/* Booking details */}
          <div style={{ background:'#F5EFE0', borderRadius:12, padding:'1.25rem 1.5rem', marginBottom:'1.75rem', border:'1px solid #E8DFC8', textAlign:'left' }}>
            <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(26,18,9,0.4)', marginBottom:'1rem' }}>
              Cancelled Booking
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.6rem' }}>
              {[
                { label:'👤 Name',   value: fullName || '—' },
                { label:'📅 Date',   value: formatLong(date) || '—' },
                { label:'🕐 Time',   value: time || '—' },
                { label:'👥 Guests', value: guestSummary },
              ].map(({ label, value }) => (
                <div key={label} style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:'0.82rem', fontWeight:600, color:'rgba(26,18,9,0.45)' }}>{label}</span>
                  <span style={{ fontSize:'0.88rem', fontWeight:600, color:'#1A1209' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => {
            setCancelled(false); setStep(1);
            setDate(''); setTime(''); setPrevDate(''); setPrevTime('');
            setForm({ firstName:'', lastName:'', email:'', phone:'',
              streetAddress:'', city:'', state:'', zip:'',
              adults:10, children:0, occasion:'', customOccasion:'', specialRequests:'', agreed:false });
          }} style={{
            display:'block', width:'100%', textAlign:'center',
            background:'#C8102E', color:'#fff', fontWeight:700, fontSize:'0.95rem',
            padding:'0.9rem', borderRadius:10, border:'none', cursor:'pointer',
            boxShadow:'0 4px 14px rgba(200,16,46,0.3)',
          }}>
            Book Another Appointment
          </button>

        </div>
      </div>
    )
  }

  // ── Step 3: Success ─────────────────────────────────────────────────────────
  if (step === 3) {
    const refNum = bookingId
    const fullName = `${form.firstName} ${form.lastName}`.trim()
    const address = [form.streetAddress, form.city, form.state, form.zip].filter(Boolean).join(', ')
    const guestSummary = `${form.adults} adult${form.adults!==1?'s':''}, ${form.children} child${form.children!==1?'ren':''}`

    const NEXT_STEPS = [
      { n:1, label:'Select Your Menu',        desc:'Browse proteins, sides, and add-ons before the event.' },
      { n:2, label:'Confirm Details',          desc:'Your chef will contact you 24–48 hrs before to confirm everything.' },
      { n:3, label:'Chef Arrives & Prepares',  desc:'Chef arrives 30–45 min early to set up the teppan grill.' },
      { n:4, label:'Party Time',               desc:'Sit back and enjoy the live hibachi show with your guests.' },
      { n:5, label:'Payment',                  desc:'Cash or Zelle only, collected day-of before service begins.' },
    ]

    return (
      <div style={{ background:'#F5F5F7', borderRadius:16, overflow:'hidden' }}>
        <StepBar step={3} />
        <div style={{ background:'#fff', borderRadius:'0 0 16px 16px', padding:'2.5rem 1.5rem' }}>

          {/* Hero check */}
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <div style={{ width:80, height:80, borderRadius:'50%', background:'#C8102E',
              display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem',
              boxShadow:'0 8px 24px rgba(200,16,46,0.35)' }}>
              <svg width="36" height="36" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 style={{ fontFamily:'var(--font-bebas,sans-serif)', fontSize:'2.4rem', color:'#1A1209', margin:'0 0 0.4rem', letterSpacing:'0.03em' }}>
              Booking Request Sent!
            </h3>
            <p style={{ color:'rgba(26,18,9,0.55)', fontSize:'0.95rem', lineHeight:1.7, maxWidth:'26rem', margin:'0 auto' }}>
              We received your request and will confirm within <strong>1 business day</strong>. Check your email for a copy.
            </p>
          </div>

          {/* Schedule another */}
          <div style={{ textAlign:'center', marginBottom:'1rem' }}>
            <button onClick={() => { setStep(1); setDate(''); setTime('') }} style={{
              background:'none', border:'none', cursor:'pointer',
              color:'#C8102E', fontWeight:600, fontSize:'0.88rem', textDecoration:'underline', padding:0,
            }}>
              + Schedule Another Appointment
            </button>
          </div>

          {/* Summary card */}
          <div style={{ background:'#F5EFE0', borderRadius:12, padding:'1.25rem 1.5rem', marginBottom:'1.5rem', border:'1px solid #E8DFC8' }}>
            <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(26,18,9,0.4)', marginBottom:'1rem' }}>
              Booking Summary
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.85rem 1.5rem' }}>
              {[
                { label:'📅 When',   value:`${formatLong(date)} · ${time}` },
                { label:'📍 Where',  value: address || '—' },
                { label:'👤 Name',   value: fullName || '—' },
                { label:'📞 Phone',  value: form.phone || '—' },
                { label:'👥 Guests', value: guestSummary },
                { label:'🔖 Ref #',  value: refNum },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontSize:'0.72rem', fontWeight:600, color:'rgba(26,18,9,0.45)', marginBottom:'2px' }}>{label}</div>
                  <div style={{ fontSize:'0.88rem', fontWeight:600, color:'#1A1209', wordBreak:'break-word' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What's Next */}
          <div style={{ marginBottom:'1.75rem' }}>
            <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(26,18,9,0.4)', marginBottom:'1rem' }}>
              What's Next?
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.6rem' }}>
              {NEXT_STEPS.map(({ n, label, desc }) => (
                <div key={n} style={{ display:'flex', gap:'0.85rem', alignItems:'flex-start' }}>
                  <div style={{ width:28, height:28, borderRadius:'50%', background:'#C8102E', color:'#fff',
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.75rem',
                    fontWeight:700, flexShrink:0, marginTop:1 }}>
                    {n}
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:'0.9rem', color:'#1A1209' }}>{label}</div>
                    <div style={{ fontSize:'0.82rem', color:'rgba(26,18,9,0.55)', lineHeight:1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'0.6rem', marginBottom:'1rem' }}>
              <button onClick={() => { setEditForm({...form}); setUpdateSuccess(false); setUpdateError(''); setShowEdit(true) }} style={{
                padding:'0.65rem 0.5rem', borderRadius:8, border:'1.5px solid #E8DFC8',
                background:'#F5EFE0', color:'#1A1209', fontSize:'0.78rem', fontWeight:600, cursor:'pointer',
              }}>
                ✏️ Edit Info
              </button>
              <button onClick={() => { setRescheduleDate(date); setRescheduleTime(time); setRescheduleSuccess(false); setRescheduleError(''); setShowReschedule(true) }} style={{
                padding:'0.65rem 0.5rem', borderRadius:8, border:'1.5px solid #E8DFC8',
                background:'#F5EFE0', color:'#1A1209', fontSize:'0.78rem', fontWeight:600, cursor:'pointer',
              }}>
                📅 Reschedule
              </button>
              <button onClick={() => setShowCancel(true)} style={{
                padding:'0.65rem 0.5rem', borderRadius:8, border:'1.5px solid rgba(200,16,46,0.25)',
                background:'rgba(200,16,46,0.06)', color:'#C8102E', fontSize:'0.78rem', fontWeight:600, cursor:'pointer',
              }}>
                ✕ Cancel
              </button>
          </div>

          {/* Cancel confirmation modal */}
          {showCancel && (
            <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:1000,
              display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem' }}>
              <div style={{ background:'#fff', borderRadius:16, padding:'2rem', maxWidth:360, width:'100%',
                boxShadow:'0 16px 48px rgba(0,0,0,0.2)', textAlign:'center' }}>
                <div style={{ width:52, height:52, borderRadius:'50%', background:'rgba(200,16,46,0.08)',
                  border:'2px solid rgba(200,16,46,0.2)', display:'flex', alignItems:'center',
                  justifyContent:'center', margin:'0 auto 1rem' }}>
                  <svg width="22" height="22" fill="none" stroke="#C8102E" strokeWidth="2.2" strokeLinecap="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3 style={{ color:'#1A1209', fontSize:'1.1rem', fontWeight:800, margin:'0 0 0.5rem' }}>
                  Cancel This Request?
                </h3>
                <p style={{ color:'rgba(26,18,9,0.55)', fontSize:'0.88rem', lineHeight:1.6, margin:'0 0 1.5rem' }}>
                  Are you sure you want to cancel this booking request?
                </p>
                <div style={{ display:'flex', gap:'0.75rem' }}>
                  <button onClick={() => setShowCancel(false)} style={{
                    flex:1, padding:'0.75rem', borderRadius:8, border:'1.5px solid #E8DFC8',
                    background:'#F5EFE0', color:'#1A1209', fontWeight:700, fontSize:'0.88rem', cursor:'pointer',
                  }}>
                    Keep Booking
                  </button>
                  <button disabled={cancelLoading} onClick={async () => {
                    setCancelLoading(true); setCancelError('');
                    const fullName = `${form.firstName} ${form.lastName}`.trim();
                    const guestSummary = `${form.adults} adult${form.adults!==1?'s':''}, ${form.children} child${form.children!==1?'ren':''}`;
                    try {
                      const res = await fetch('/api/cancel', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          name: fullName, email: form.email, phone: form.phone,
                          date: formatLong(date), time, guests: guestSummary,
                          message: form.specialRequests || '',
                        }),
                      });
                      if (res.ok) { setShowCancel(false); setCancelled(true); }
                      else { setCancelError('Something went wrong. Please try again.'); }
                    } catch { setCancelError('Network error. Please try again.'); }
                    finally { setCancelLoading(false); }
                  }} style={{
                    flex:1, padding:'0.75rem', borderRadius:8, border:'none',
                    background: cancelLoading ? 'rgba(200,16,46,0.6)' : '#C8102E',
                    color:'#fff', fontWeight:700, fontSize:'0.88rem',
                    cursor: cancelLoading ? 'not-allowed' : 'pointer',
                  }}>
                    {cancelLoading ? 'Cancelling…' : 'Cancel Request'}
                  </button>
                </div>
                {cancelError && (
                  <p style={{ marginTop:'0.75rem', color:'#C8102E', fontSize:'0.82rem', textAlign:'center' }}>
                    {cancelError}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Edit Info modal */}
          {showEdit && editForm && (
            <div onClick={() => setShowEdit(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.45)', zIndex:1000,
              display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem' }}>
              <div onClick={e => e.stopPropagation()} style={{ background:'#fff', borderRadius:16, width:'100%', maxWidth:600,
                maxHeight:'90vh', overflowY:'auto', boxShadow:'0 16px 48px rgba(0,0,0,0.2)' }}>

                {/* Modal header */}
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'1.25rem 1.5rem', borderBottom:'1px solid rgba(26,18,9,0.1)' }}>
                  <h3 style={{ margin:0, fontSize:'1.1rem', fontWeight:800, color:'#1A1209' }}>Edit Appointment Information</h3>
                  <button onClick={() => setShowEdit(false)} style={{ background:'none', border:'none', cursor:'pointer',
                    color:'rgba(26,18,9,0.4)', fontSize:'1.2rem', lineHeight:1, padding:'0.25rem' }}>✕</button>
                </div>

                <div style={{ padding:'1.5rem', display:'flex', flexDirection:'column', gap:'1.25rem' }}>

                  {/* Contact Information */}
                  <div style={{ border:'1px solid rgba(26,18,9,0.1)', borderRadius:12, padding:'1.25rem' }}>
                    <SectionHeader icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>} title="Contact Information" />
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.85rem' }}>
                      {[
                        { label:'First Name', key:'firstName', placeholder:'Enter first name' },
                        { label:'Last Name',  key:'lastName',  placeholder:'Enter last name' },
                        { label:'Email Address', key:'email', placeholder:'example@email.com', type:'email' },
                        { label:'Phone Number',  key:'phone', placeholder:'Enter phone number', type:'tel' },
                      ].map(({ label, key, placeholder, type='text' }) => (
                        <div key={key}>
                          <label style={{ display:'block', fontSize:'0.8rem', fontWeight:600, color:'rgba(26,18,9,0.55)', marginBottom:'0.4rem' }}>{label} <span style={{color:'#C8102E'}}>*</span></label>
                          <input type={type} value={editForm[key]} placeholder={placeholder}
                            onChange={e => setEditForm(p => ({...p, [key]: e.target.value}))}
                            style={{ width:'100%', padding:'0.75rem 1rem', border:'1.5px solid rgba(26,18,9,0.15)',
                              borderRadius:8, background:'#fff', color:'#1A1209', fontSize:'0.92rem',
                              outline:'none', boxSizing:'border-box', fontFamily:'inherit' }}
                            onFocus={e => e.target.style.borderColor='#C8102E'}
                            onBlur={e => e.target.style.borderColor='rgba(26,18,9,0.15)'} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Event Address */}
                  <div style={{ border:'1px solid rgba(26,18,9,0.1)', borderRadius:12, padding:'1.25rem' }}>
                    <SectionHeader icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>} title="Event Address" />
                    <div style={{ display:'flex', flexDirection:'column', gap:'0.85rem' }}>
                      <div>
                        <label style={{ display:'block', fontSize:'0.8rem', fontWeight:600, color:'rgba(26,18,9,0.55)', marginBottom:'0.4rem' }}>Street Address <span style={{color:'#C8102E'}}>*</span></label>
                        <input value={editForm.streetAddress} placeholder="Enter street address"
                          onChange={e => setEditForm(p => ({...p, streetAddress: e.target.value}))}
                          style={{ width:'100%', padding:'0.75rem 1rem', border:'1.5px solid rgba(26,18,9,0.15)',
                            borderRadius:8, background:'#fff', color:'#1A1209', fontSize:'0.92rem',
                            outline:'none', boxSizing:'border-box', fontFamily:'inherit' }}
                          onFocus={e => e.target.style.borderColor='#C8102E'}
                          onBlur={e => e.target.style.borderColor='rgba(26,18,9,0.15)'} />
                      </div>
                      <div style={{ display:'grid', gridTemplateColumns:'1fr 0.6fr 0.8fr', gap:'0.85rem' }}>
                        {[
                          { label:'City', key:'city', placeholder:'Enter city' },
                          { label:'State', key:'state', placeholder:'e.g. CA' },
                          { label:'ZIP Code', key:'zip', placeholder:'Enter ZIP code' },
                        ].map(({ label, key, placeholder }) => (
                          <div key={key}>
                            <label style={{ display:'block', fontSize:'0.8rem', fontWeight:600, color:'rgba(26,18,9,0.55)', marginBottom:'0.4rem' }}>{label} <span style={{color:'#C8102E'}}>*</span></label>
                            <input value={editForm[key]} placeholder={placeholder}
                              onChange={e => setEditForm(p => ({...p, [key]: e.target.value}))}
                              style={{ width:'100%', padding:'0.75rem 1rem', border:'1.5px solid rgba(26,18,9,0.15)',
                                borderRadius:8, background:'#fff', color:'#1A1209', fontSize:'0.92rem',
                                outline:'none', boxSizing:'border-box', fontFamily:'inherit' }}
                              onFocus={e => e.target.style.borderColor='#C8102E'}
                              onBlur={e => e.target.style.borderColor='rgba(26,18,9,0.15)'} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Guest Information */}
                  <div style={{ border:'1px solid rgba(26,18,9,0.1)', borderRadius:12, padding:'1.25rem' }}>
                    <SectionHeader icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>} title="Guest Information" />
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                      <GuestCounter label="Number of Adults" value={editForm.adults} options={ADULT_OPTIONS} onChange={v => setEditForm(p => ({...p, adults: v}))} />
                      <GuestCounter label="Number of Children" value={editForm.children} options={CHILD_OPTIONS} onChange={v => setEditForm(p => ({...p, children: v}))} />
                    </div>
                  </div>

                  {/* Occasion */}
                  <div style={{ border:'1px solid rgba(26,18,9,0.1)', borderRadius:12, padding:'1.25rem' }}>
                    <SectionHeader icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>} title="Occasion" />
                    <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.85rem' }}>
                      {OCCASIONS.map(o => {
                        const active = editForm.occasion === o
                        return (
                          <button key={o} type="button" onClick={() => setEditForm(p => ({...p, occasion: active ? '' : o}))}
                            style={{ padding:'0.45rem 1rem', borderRadius:999,
                              border: active ? '1.5px solid #C8102E' : '1.5px solid rgba(26,18,9,0.18)',
                              background: active ? 'rgba(200,16,46,0.07)' : '#fff',
                              color: active ? '#C8102E' : '#1A1209',
                              fontWeight: active ? 600 : 400, fontSize:'0.85rem', cursor:'pointer' }}>
                            {o}
                          </button>
                        )
                      })}
                    </div>
                    <input placeholder="Or type a custom occasion..." value={editForm.customOccasion}
                      onChange={e => setEditForm(p => ({...p, customOccasion: e.target.value}))}
                      style={{ width:'100%', padding:'0.75rem 1rem', border:'1.5px solid rgba(26,18,9,0.15)',
                        borderRadius:8, background:'#fff', color:'#1A1209', fontSize:'0.92rem',
                        outline:'none', boxSizing:'border-box', fontFamily:'inherit' }}
                      onFocus={e => e.target.style.borderColor='#C8102E'}
                      onBlur={e => e.target.style.borderColor='rgba(26,18,9,0.15)'} />
                  </div>

                  {/* Special Requests */}
                  <div style={{ border:'1px solid rgba(26,18,9,0.1)', borderRadius:12, padding:'1.25rem' }}>
                    <SectionHeader icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>} title="Special Requests" />
                    <textarea placeholder="Any special requests..." rows={3} value={editForm.specialRequests}
                      onChange={e => setEditForm(p => ({...p, specialRequests: e.target.value}))}
                      style={{ width:'100%', padding:'0.75rem 1rem', border:'1.5px solid rgba(26,18,9,0.15)',
                        borderRadius:8, background:'#fff', color:'#1A1209', fontSize:'0.92rem',
                        outline:'none', resize:'vertical', minHeight:90, boxSizing:'border-box', fontFamily:'inherit' }}
                      onFocus={e => e.target.style.borderColor='#C8102E'}
                      onBlur={e => e.target.style.borderColor='rgba(26,18,9,0.15)'} />
                  </div>

                  {/* Terms */}
                  <div style={{ background:'#F5F5F7', borderRadius:12, padding:'1.25rem 1.5rem', display:'flex', alignItems:'center', gap:'0.85rem' }}>
                    <input type="checkbox" id="editTerms" checked={editForm.agreed}
                      onChange={e => setEditForm(p => ({...p, agreed: e.target.checked}))}
                      style={{ width:18, height:18, cursor:'pointer', accentColor:'#C8102E', flexShrink:0 }} />
                    <label htmlFor="editTerms" style={{ fontSize:'0.88rem', color:'rgba(26,18,9,0.7)', cursor:'pointer', lineHeight:1.5 }}>
                      I have read and agree to the{' '}
                      <span style={{ color:'#1A1209', fontWeight:600, textDecoration:'underline' }}>Terms of Service</span>
                      {' '}and{' '}
                      <span style={{ color:'#1A1209', fontWeight:600, textDecoration:'underline' }}>Privacy Policy</span>.
                    </label>
                  </div>

                  {/* Error / success */}
                  {updateError && <p style={{ color:'#C8102E', fontSize:'0.85rem', margin:0 }}>{updateError}</p>}
                  {updateSuccess && <p style={{ color:'#2a7a2a', fontSize:'0.85rem', fontWeight:600, margin:0 }}>✓ Your booking has been updated.</p>}

                  {/* Update button */}
                  <button disabled={updateLoading} onClick={async () => {
                    if (!editForm.agreed) { setUpdateError('Please agree to the Terms of Service to continue.'); return; }
                    setUpdateLoading(true); setUpdateError(''); setUpdateSuccess(false);
                    const oldName    = `${form.firstName} ${form.lastName}`.trim();
                    const newName    = `${editForm.firstName} ${editForm.lastName}`.trim();
                    const oldGuests  = `${form.adults} adult${form.adults!==1?'s':''}, ${form.children} child${form.children!==1?'ren':''}`;
                    const newGuests  = `${editForm.adults} adult${editForm.adults!==1?'s':''}, ${editForm.children} child${editForm.children!==1?'ren':''}`;
                    const oldAddress = [form.streetAddress, form.city, form.state, form.zip].filter(Boolean).join(', ');
                    const newAddress = [editForm.streetAddress, editForm.city, editForm.state, editForm.zip].filter(Boolean).join(', ');
                    try {
                      const res = await fetch('/api/update', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          bookingId,
                          email: editForm.email,
                          date: formatLong(date), time,
                          oldName, oldPhone: form.phone, oldAddress, oldGuests, oldNotes: form.specialRequests,
                          newName, newPhone: editForm.phone, newAddress, newGuests, newNotes: editForm.specialRequests,
                        }),
                      });
                      if (res.ok) { setForm({...editForm}); setUpdateSuccess(true); setTimeout(() => setShowEdit(false), 1200); }
                      else { setUpdateError('Something went wrong. Please try again.'); }
                    } catch { setUpdateError('Network error. Please try again.'); }
                    finally { setUpdateLoading(false); }
                  }} style={{
                    width:'100%', padding:'0.9rem', borderRadius:10, border:'none',
                    background: updateLoading ? 'rgba(200,16,46,0.6)' : '#C8102E',
                    color:'#fff', fontWeight:700, fontSize:'0.95rem',
                    cursor: updateLoading ? 'not-allowed' : 'pointer',
                    boxShadow:'0 4px 14px rgba(200,16,46,0.3)',
                    display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
                  }}>
                    {updateLoading ? 'Updating…' : <>Update Appointment <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></>}
                  </button>

                </div>
              </div>
            </div>
          )}

          {/* Reschedule modal */}
          {showReschedule && (
            <div onClick={() => setShowReschedule(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.45)', zIndex:1000,
              display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem' }}>
              <div onClick={e => e.stopPropagation()} style={{ background:'#fff', borderRadius:16, width:'100%', maxWidth:560,
                maxHeight:'90vh', overflowY:'auto', boxShadow:'0 16px 48px rgba(0,0,0,0.2)' }}>

                {/* Header */}
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'1.25rem 1.5rem', borderBottom:'1px solid rgba(26,18,9,0.1)' }}>
                  <h3 style={{ margin:0, fontSize:'1.1rem', fontWeight:800, color:'#1A1209' }}>Reschedule Appointment</h3>
                  <button onClick={() => setShowReschedule(false)} style={{ background:'none', border:'none', cursor:'pointer',
                    color:'rgba(26,18,9,0.4)', fontSize:'1.2rem', lineHeight:1, padding:'0.25rem' }}>✕</button>
                </div>

                <div style={{ padding:'1.5rem', display:'flex', flexDirection:'column', gap:'1rem' }}>
                  <div style={{ fontSize:'0.82rem', color:'rgba(26,18,9,0.5)', lineHeight:1.5 }}>
                    Current appointment: <strong style={{ color:'#1A1209' }}>{formatLong(date)} at {time}</strong>
                  </div>

                  <BookingCalendar selected={rescheduleDate} onSelect={d => { setRescheduleDate(d); setRescheduleTime('') }} />

                  {rescheduleDate && (
                    <BookingTimeSlots selected={rescheduleTime} onSelect={setRescheduleTime} date={rescheduleDate} />
                  )}

                  {rescheduleError && <p style={{ color:'#C8102E', fontSize:'0.85rem', margin:0 }}>{rescheduleError}</p>}
                  {rescheduleSuccess && <p style={{ color:'#2a7a2a', fontSize:'0.85rem', fontWeight:600, margin:0 }}>✓ Your appointment has been rescheduled.</p>}

                  <button disabled={rescheduleLoading || !rescheduleDate || !rescheduleTime} onClick={async () => {
                    setRescheduleLoading(true); setRescheduleError(''); setRescheduleSuccess(false);
                    const guests = `${form.adults} adult${form.adults!==1?'s':''}, ${form.children} child${form.children!==1?'ren':''}`;
                    try {
                      const res = await fetch('/api/reschedule', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          name: `${form.firstName} ${form.lastName}`.trim(),
                          email: form.email, phone: form.phone, guests,
                          oldDate: formatLong(date), oldTime: time,
                          newDate: formatLong(rescheduleDate), newTime: rescheduleTime,
                        }),
                      });
                      if (res.ok) {
                        setDate(rescheduleDate); setTime(rescheduleTime);
                        setRescheduleSuccess(true);
                        setTimeout(() => setShowReschedule(false), 1200);
                      } else { setRescheduleError('Something went wrong. Please try again.'); }
                    } catch { setRescheduleError('Network error. Please try again.'); }
                    finally { setRescheduleLoading(false); }
                  }} style={{
                    width:'100%', padding:'0.9rem', borderRadius:10, border:'none',
                    background: (rescheduleLoading || !rescheduleDate || !rescheduleTime) ? 'rgba(200,16,46,0.4)' : '#C8102E',
                    color:'#fff', fontWeight:700, fontSize:'0.95rem',
                    cursor: (rescheduleLoading || !rescheduleDate || !rescheduleTime) ? 'not-allowed' : 'pointer',
                    boxShadow:'0 4px 14px rgba(200,16,46,0.25)',
                    display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
                  }}>
                    {rescheduleLoading ? 'Updating…' : !rescheduleDate ? 'Select a date to continue' : !rescheduleTime ? 'Select a time to continue' : <>Update Time <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></>}
                  </button>

                </div>
              </div>
            </div>
          )}

          {/* CTA + contact */}
          <a href="/menu" style={{ display:'block', width:'100%', textAlign:'center',
            background:'#C8102E', color:'#fff', fontWeight:700, fontSize:'0.95rem',
            padding:'0.9rem', borderRadius:10, textDecoration:'none', marginBottom:'1rem',
            boxShadow:'0 4px 14px rgba(200,16,46,0.3)' }}>
            Select Menu &amp; View Cost →
          </a>
          <p style={{ textAlign:'center', fontSize:'0.85rem', color:'rgba(26,18,9,0.45)', margin:0 }}>
            Questions? Call{' '}
            <a href="tel:+16027672965" style={{ color:'#C8102E', fontWeight:600, textDecoration:'none' }}>
              (602) 767-2965
            </a>
          </p>

        </div>
      </div>
    )
  }

  // ── Step 2: Guest Info form ─────────────────────────────────────────────────
  if (step === 2) {
    return (
      <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,0,0,0.07)' }}>
        <StepBar step={2} />

        <div style={{ background:'#F5F5F7', padding:'1.25rem' }}>

          {/* Back + summary */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setStep(1)} style={{
              display:'flex', alignItems:'center', gap:6, background:'none', border:'none',
              cursor:'pointer', color:'rgba(26,18,9,0.5)', fontSize:'0.85rem', fontWeight:500, padding:0
            }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Back to Time Selection
            </button>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontSize:'0.65rem', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(26,18,9,0.4)', marginBottom:2 }}>Selected</div>
              <div style={{ fontWeight:700, fontSize:'0.95rem', color:'#1A1209' }}>{formatLong(date)} {time}</div>
            </div>
            <div style={{ width:120 }} />
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>

              {/* Contact Information */}
              <div style={{ background:'#fff', borderRadius:12, padding:'1.5rem' }}>
                <SectionHeader
                  icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                  title="Contact Information"
                />
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.85rem' }}>
                  <Input label="First Name" required placeholder="Enter first name"
                    value={form.firstName} onChange={e => set('firstName', e.target.value)} />
                  <Input label="Last Name" required placeholder="Enter last name"
                    value={form.lastName} onChange={e => set('lastName', e.target.value)} />
                  <Input label="Email Address" required type="email" placeholder="example@email.com"
                    value={form.email} onChange={e => set('email', e.target.value)} />
                  <Input label="Phone Number" required type="tel" placeholder="Enter phone number"
                    value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
              </div>

              {/* Event Address */}
              <div style={{ background:'#fff', borderRadius:12, padding:'1.5rem' }}>
                <SectionHeader
                  icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                  title="Event Address"
                />
                <div style={{ display:'flex', flexDirection:'column', gap:'0.85rem' }}>
                  <Input label="Street Address" required placeholder="Enter street address"
                    value={form.streetAddress} onChange={e => set('streetAddress', e.target.value)} />
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 0.6fr 0.8fr', gap:'0.85rem' }}>
                    <Input label="City" required placeholder="Enter city"
                      value={form.city} onChange={e => set('city', e.target.value)} />
                    <Input label="State" required placeholder="e.g. CA"
                      value={form.state} onChange={e => set('state', e.target.value)} />
                    <Input label="ZIP Code" required placeholder="Enter ZIP code"
                      value={form.zip} onChange={e => set('zip', e.target.value)} />
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div style={{ background:'#fff', borderRadius:12, padding:'1.5rem' }}>
                <SectionHeader
                  icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>}
                  title="Guest Information"
                />
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                  <GuestCounter label="Number of Adults" value={form.adults}
                    options={ADULT_OPTIONS} onChange={v => set('adults', v)} />
                  <GuestCounter label="Number of Children" value={form.children}
                    options={CHILD_OPTIONS} onChange={v => set('children', v)} />
                </div>
              </div>

              {/* Occasion */}
              <div style={{ background:'#fff', borderRadius:12, padding:'1.5rem' }}>
                <SectionHeader
                  icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
                  title="Occasion"
                />
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.85rem' }}>
                  {OCCASIONS.map(o => {
                    const active = form.occasion === o
                    return (
                      <button key={o} type="button" onClick={() => set('occasion', active ? '' : o)}
                        style={{ padding:'0.45rem 1rem', borderRadius:999,
                          border: active ? '1.5px solid #C8102E' : '1.5px solid rgba(26,18,9,0.18)',
                          background: active ? 'rgba(200,16,46,0.07)' : '#fff',
                          color: active ? '#C8102E' : '#1A1209',
                          fontWeight: active ? 600 : 400, fontSize:'0.85rem', cursor:'pointer',
                          transition:'all 0.15s ease',
                        }}>
                        {o}
                      </button>
                    )
                  })}
                </div>
                <input placeholder="Or type a custom occasion..."
                  value={form.customOccasion} onChange={e => set('customOccasion', e.target.value)}
                  style={{ width:'100%', padding:'0.75rem 1rem', border:'1.5px solid rgba(26,18,9,0.15)',
                    borderRadius:8, background:'#fff', color:'#1A1209', fontSize:'0.92rem',
                    outline:'none', boxSizing:'border-box', fontFamily:'inherit' }}
                  onFocus={e => e.target.style.borderColor='#C8102E'}
                  onBlur={e => e.target.style.borderColor='rgba(26,18,9,0.15)'}
                />
              </div>

              {/* Special Requests */}
              <div style={{ background:'#fff', borderRadius:12, padding:'1.5rem' }}>
                <SectionHeader
                  icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>}
                  title="Special Requests"
                />
                <textarea placeholder="Any special requests..." rows={3}
                  value={form.specialRequests} onChange={e => set('specialRequests', e.target.value)}
                  style={{ width:'100%', padding:'0.75rem 1rem', border:'1.5px solid rgba(26,18,9,0.15)',
                    borderRadius:8, background:'#fff', color:'#1A1209', fontSize:'0.92rem',
                    outline:'none', resize:'vertical', minHeight:90, boxSizing:'border-box',
                    fontFamily:'inherit' }}
                  onFocus={e => e.target.style.borderColor='#C8102E'}
                  onBlur={e => e.target.style.borderColor='rgba(26,18,9,0.15)'}
                />
              </div>

              {/* Policy notes */}
              <div style={{ background:'#fff', borderRadius:12, padding:'1.25rem 1.5rem' }}>
                {[
                  'Cash or Zelle only — No credit cards accepted',
                  'Travel fee may apply based on distance',
                  'Booking-related SMS may be sent to the phone number you provide',
                ].map((note, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.6rem',
                    fontSize:'0.85rem', color:'rgba(26,18,9,0.65)', marginBottom: i < 2 ? '0.5rem' : 0 }}>
                    <span style={{ color:'#C8102E', fontWeight:700, fontSize:'0.7rem' }}>•</span>
                    {note}
                  </div>
                ))}
              </div>

              {/* Terms */}
              <div style={{ background:'#fff', borderRadius:12, padding:'1.25rem 1.5rem', display:'flex', alignItems:'center', gap:'0.85rem' }}>
                <input type="checkbox" id="terms" checked={form.agreed}
                  onChange={e => set('agreed', e.target.checked)}
                  style={{ width:18, height:18, cursor:'pointer', accentColor:'#C8102E', flexShrink:0 }} />
                <label htmlFor="terms" style={{ fontSize:'0.88rem', color:'rgba(26,18,9,0.7)', cursor:'pointer', lineHeight:1.5 }}>
                  I have read and agree to the{' '}
                  <span style={{ color:'#1A1209', fontWeight:600, textDecoration:'underline', cursor:'pointer' }}>Terms of Service</span>
                  {' '}and{' '}
                  <span style={{ color:'#1A1209', fontWeight:600, textDecoration:'underline', cursor:'pointer' }}>Privacy Policy</span>.
                </label>
              </div>

              {/* Error */}
              {error && (
                <div style={{ padding:'0.85rem 1rem', borderRadius:8,
                  background:'rgba(200,16,46,0.06)', border:'1px solid rgba(200,16,46,0.3)',
                  color:'#C8102E', fontSize:'0.88rem', display:'flex', gap:'0.5rem', alignItems:'center' }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="flex justify-end">
                <button type="submit" disabled={loading}
                  style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem',
                    background: loading ? 'rgba(200,16,46,0.6)' : '#C8102E',
                    color:'#fff', fontWeight:700, fontSize:'1rem',
                    padding:'0.9rem 2.5rem', borderRadius:999, border:'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow:'0 4px 16px rgba(200,16,46,0.3)',
                    transition:'all 0.15s ease',
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.transform='translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform='none' }}
                >
                  {loading ? 'Submitting…' : 'Complete Booking'}
                  {!loading && (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  )}
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    )
  }

  // ── Step 1: Date + Time ─────────────────────────────────────────────────────
  return (
    <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 4px 24px rgba(0,0,0,0.07)' }}>
      <StepBar step={1} />

      <div style={{ background:'#F5F5F7', padding:'1.25rem', display:'flex', flexDirection:'column', gap:'1rem' }}>
        {/* Calendar */}
        <BookingCalendar selected={date} onSelect={d => { setDate(d); setTime('') }} />

        {/* Time slots — only show after date selected */}
        {date && (
          <BookingTimeSlots selected={time} onSelect={setTime} date={date} />
        )}

        {/* Continue */}
        <button
          onClick={() => setStep(2)}
          disabled={!date || !time}
          style={{
            width:'100%', padding:'1rem', borderRadius:10, border:'none',
            background: date && time ? '#C8102E' : 'rgba(200,16,46,0.3)',
            color:'#fff', fontWeight:700, fontSize:'1rem',
            cursor: date && time ? 'pointer' : 'not-allowed',
            display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
            boxShadow: date && time ? '0 4px 16px rgba(200,16,46,0.25)' : 'none',
            transition:'all 0.2s ease',
          }}
        >
          {!date ? 'Select a date to continue' : !time ? 'Select a time to continue' : (
            <>
              Continue — {formatShort(date)} at {time}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
