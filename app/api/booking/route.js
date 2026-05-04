import nodemailer from "nodemailer";

const SITE_URL = 'https://website-test-theta-lac.vercel.app';
const LOGO_URL = `${SITE_URL}/brand/logo.png`;

function gcalLink(title, date, time, description, location) {
  try {
    const months = {January:0,February:1,March:2,April:3,May:4,June:5,July:6,August:7,September:8,October:9,November:10,December:11};
    const dp = date.replace(/^[A-Za-z]+,\s*/, '').trim().split(' ');
    const month = months[dp[0]], day = parseInt(dp[1]), year = parseInt(dp[2]);
    const tp = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    let hour = parseInt(tp[1]); const min = parseInt(tp[2]);
    if (tp[3].toUpperCase() === 'PM' && hour !== 12) hour += 12;
    if (tp[3].toUpperCase() === 'AM' && hour === 12) hour = 0;
    const pad = n => String(n).padStart(2,'0');
    const fmt = (y,m,d,h,mn) => `${y}${pad(m+1)}${pad(d)}T${pad(h)}${pad(mn)}00`;
    const start = fmt(year,month,day,hour,min);
    const endHour = hour + 1; const endMin = min + 30;
    const end = fmt(year,month,day,endHour > 23 ? 23 : endHour, endMin >= 60 ? endMin-60 : endMin);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location||'')}`;
  } catch { return 'https://calendar.google.com'; }
}

function customerEmailHtml({ name, bookingId, date, time, guests, address, phone, email, occasion, message, proteins, isReschedule, prevDate, prevTime, manageUrl }) {
  const firstName = name.split(' ')[0];
  const calUrl = gcalLink(
    `Hibachi at Home – ${name}`,
    date, time,
    `Booking ID: ${bookingId}\nGuests: ${guests}${message ? '\nNotes: '+message : ''}`,
    address || ''
  );

  const btn = (label, url, bg) =>
    `<a href="${url}" style="display:inline-block;padding:10px 20px;background:${bg};color:#fff;text-decoration:none;border-radius:6px;font-weight:700;font-size:14px;margin:4px;">${label}</a>`;

  const row = (label, value) => value ? `
    <tr>
      <td style="padding:6px 0;color:#888;font-size:13px;white-space:nowrap;vertical-align:top;width:140px;">${label}</td>
      <td style="padding:6px 0;color:#1A1209;font-size:14px;font-weight:600;">${value}</td>
    </tr>` : '';

  const section = (title, rows) => `
    <p style="margin:20px 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#C8102E;">${title}</p>
    <table style="width:100%;border-collapse:collapse;">${rows}</table>`;

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F5F7;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F7;padding:32px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#C8102E,#E8304A);padding:28px;text-align:center;">
    <img src="${LOGO_URL}" alt="Hibachi Connect" height="48" style="max-height:48px;object-fit:contain;" onerror="this.style.display='none'">
    <p style="color:rgba(255,255,255,0.9);margin:10px 0 0;font-size:13px;letter-spacing:0.05em;">Private Hibachi Experience</p>
  </td></tr>

  <!-- Body -->
  <tr><td style="padding:28px 32px;">

    <h2 style="margin:0 0 8px;color:#1A1209;font-size:22px;">Hi ${firstName},</h2>
    <p style="color:#555;line-height:1.7;margin:0 0 20px;font-size:15px;">
      ${isReschedule
        ? `Your Hibachi Connect booking has been <strong>rescheduled</strong>. Here are your updated event details.`
        : `Thank you for booking your hibachi experience with <strong>Hibachi Connect</strong>!<br><br>
           We've received your request and your event has been added to our system. One of our booking specialists will reach out shortly to confirm all details and ensure everything is perfectly arranged for your event.`
      }
    </p>

    <!-- Booking Details Card -->
    <div style="background:#F5EFE0;border-radius:10px;padding:20px 24px;border:1px solid #E8DFC8;margin-bottom:24px;">
      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(26,18,9,0.4);">Booking Details</p>
      <p style="margin:0 0 16px;font-size:18px;font-weight:800;color:#C8102E;letter-spacing:0.05em;">${bookingId}</p>
      <hr style="border:none;border-top:1px solid #E8DFC8;margin:0 0 16px;">

      ${isReschedule ? section('Previous Booking',
        row('Date', prevDate) + row('Time', prevTime)
      ) : ''}

      ${section('Customer',
        row('Name', name) + row('Phone', phone) + row('Email', email)
      )}

      ${section('Event',
        row('Date', date) + row('Time', time) +
        row('Guests', guests) + (occasion ? row('Occasion', occasion) : '')
      )}

      ${address ? section('Location', row('Address', `<a href="https://maps.google.com/?q=${encodeURIComponent(address)}" style="color:#1a73e8;text-decoration:underline;">${address}</a>`)) : ''}
      ${proteins ? section('Protein Selection', row('Selection', proteins)) : ''}
      ${message ? section('Notes', row('', message)) : ''}

      <div style="margin-top:16px;padding-top:14px;border-top:1px solid #E8DFC8;display:flex;align-items:center;gap:8px;">
        <span style="color:#C8102E;font-weight:700;font-size:15px;flex-shrink:0;">✓</span>
        <span style="font-size:12px;color:rgba(26,18,9,0.55);line-height:1.5;">
          Agreed to <a href="${SITE_URL}/terms" style="color:#1A1209;font-weight:600;text-decoration:underline;">Terms of Service</a> and <a href="${SITE_URL}/terms" style="color:#1A1209;font-weight:600;text-decoration:underline;">Privacy Policy</a>
        </span>
      </div>
    </div>

    <!-- Action Buttons -->
    <p style="font-size:13px;color:#888;margin:0 0 10px;">Manage your booking:</p>
    <div style="text-align:center;margin-bottom:24px;">
      ${btn('✏️ Edit Booking', manageUrl, '#1A1209')}
      ${btn('📅 Reschedule', manageUrl, '#555')}
      ${btn('✕ Cancel', manageUrl, '#C8102E')}
    </div>

    <!-- Google Calendar -->
    <div style="text-align:center;margin-bottom:28px;">
      <a href="${calUrl}" style="display:inline-block;padding:11px 24px;background:#4285F4;color:#fff;text-decoration:none;border-radius:6px;font-weight:700;font-size:14px;">
        📆 Add to Google Calendar
      </a>
    </div>

    <p style="color:#555;line-height:1.7;font-size:14px;margin:0;">
      If you have any questions, feel free to contact us anytime.<br><br>
      Best regards,<br><strong>Hibachi Connect</strong>
    </p>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#F5F5F7;padding:20px 32px;border-top:1px solid #eee;text-align:center;">
    <p style="margin:0 0 6px;font-size:13px;color:#888;">Need help? Reply to this email or contact us anytime.</p>
    <p style="margin:0;font-size:13px;color:#888;">
      📧 <a href="mailto:info@hibachiconnect.com" style="color:#C8102E;text-decoration:none;">info@hibachiconnect.com</a>
      &nbsp;·&nbsp;
      📞 <a href="tel:+16027672965" style="color:#C8102E;text-decoration:none;">(602) 767-2965</a>
    </p>
    <p style="margin:10px 0 0;font-size:11px;color:#bbb;">Cash or Zelle only · Travel fee may apply based on distance</p>
  </td></tr>

</table>
</td></tr>
</table>
</body></html>`;
}

function ownerEmailHtml({ bookingId, isReschedule, firstName, lastName, email, phone,
  streetAddress, city, state, zip, date, time, adults, children,
  occasion, proteins, message, customerHtml }) {

  const field = (label, value) => `
    <div style="margin-bottom:12px;">
      <div style="font-size:11px;font-weight:700;color:rgba(26,18,9,0.45);letter-spacing:0.06em;text-transform:uppercase;margin-bottom:4px;">${label}</div>
      <div style="padding:10px 14px;background:#fff;border:1.5px solid #E0D8C8;border-radius:8px;font-size:14px;color:#1A1209;font-weight:500;">${value || '—'}</div>
    </div>`;

  const twoCol = (a, b) => `
    <div style="display:flex;gap:12px;margin-bottom:0;">
      <div style="flex:1;">${a}</div>
      <div style="flex:1;">${b}</div>
    </div>`;

  const section = (title, content) => `
    <div style="margin-bottom:20px;">
      <div style="font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#C8102E;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid #E8DFC8;">${title}</div>
      ${content}
    </div>`;

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F5F7;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F7;padding:32px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:600px;">

  <!-- Customer email on top -->
  <tr><td>
    ${customerHtml}
  </td></tr>

  <tr><td style="height:24px;"></td></tr>

  <!-- Divider label -->
  <tr><td style="text-align:center;padding:0 0 16px;">
    <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(26,18,9,0.35);background:#F5F5F7;padding:0 12px;">Admin — Raw form data submitted by customer</span>
  </td></tr>

  <!-- Admin banner -->
  <tr><td style="background:#FEF9E7;border:1px solid #F5D97A;border-radius:10px;padding:16px 20px;margin-bottom:16px;display:block;">
    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#92660A;">📋 ${isReschedule ? 'Booking rescheduled by a client' : 'Scheduled by a client'}</p>
    <p style="margin:0;font-size:13px;color:#92660A;font-style:italic;">This section is only visible to you. It shows exactly what the customer entered on the website.</p>
  </td></tr>

  <tr><td style="height:12px;"></td></tr>

  <!-- Raw form data -->
  <tr><td style="background:#fff;border-radius:12px;padding:24px;border:1px solid #E8DFC8;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(26,18,9,0.4);">Booking Reference</p>
    <p style="margin:0 0 20px;font-size:20px;font-weight:800;color:#C8102E;">${bookingId}</p>

    ${section('Contact Information',
      twoCol(field('First Name', firstName), field('Last Name', lastName)) +
      twoCol(field('Email Address', `<a href="mailto:${email}" style="color:#1a73e8;text-decoration:none;">${email}</a>`), field('Phone Number', `<a href="tel:${phone}" style="color:#1a73e8;text-decoration:none;">${phone}</a>`))
    )}

    ${section('Event Address',
      field('Street Address', streetAddress) +
      twoCol(field('City', city), twoCol(field('State', state), field('ZIP Code', zip)))
    )}

    ${section('Event Details',
      twoCol(field('Date', date), field('Time', time)) +
      twoCol(field('Adults', adults ? `${adults} adult${adults!=1?'s':''}` : '—'), field('Children', children !== undefined ? `${children} child${children!=1?'ren':''}` : '—'))
    )}

    ${occasion ? section('Occasion', field('', occasion)) : ''}
    ${proteins ? section('Protein Selection', field('', proteins)) : ''}
    ${message ? section('Special Requests / Notes', field('', message)) : ''}

    <div style="padding:12px 14px;background:#F5EFE0;border-radius:8px;border:1px solid #E8DFC8;font-size:12px;color:rgba(26,18,9,0.55);">
      ✓ Customer agreed to <strong>Terms of Service</strong> and <strong>Privacy Policy</strong> at time of booking.
    </div>
  </td></tr>

</table>
</td></tr>
</table>
</body></html>`;
}

export async function POST(req) {
  try {
    const data = await req.json();
    const bookingId = 'HIB-' + Date.now().toString(36).toUpperCase().slice(-6);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const isReschedule = !!(data.prevDate && data.prevTime);

    const manageParams = new URLSearchParams({
      bid: bookingId,
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      dateIso: data.dateIso || '',
      time: data.time || '',
      adults: String(data.adults ?? ''),
      children: String(data.children ?? ''),
      street: data.streetAddress || '',
      city: data.city || '',
      state: data.state || '',
      zip: data.zip || '',
      occasion: data.occasion || '',
      notes: data.message || '',
    }).toString();
    const manageUrl = `${SITE_URL}/booking?${manageParams}`;

    const customerHtml = customerEmailHtml({
      name: data.name,
      bookingId,
      date: data.date,
      time: data.time,
      guests: data.guests,
      address: data.address || '',
      phone: data.phone,
      email: data.email,
      occasion: data.occasion || '',
      message: data.message || '',
      proteins: data.proteins || '',
      isReschedule,
      prevDate: data.prevDate || '',
      prevTime: data.prevTime || '',
      manageUrl,
    });

    const nameParts = (data.name || '').trim().split(' ');

    // EMAIL TO OWNER (admin view with raw form data + customer email below)
    await transporter.sendMail({
      from: 'Hibachi Connect <info@hibachiconnect.com>',
      to: 'info@hibachiconnect.com',
      replyTo: data.email,
      subject: isReschedule
        ? `📅 Rescheduled | ${data.name} | ${data.date} at ${data.time}`
        : `🔥 New Booking | ${data.name} | ${data.date} at ${data.time}`,
      html: ownerEmailHtml({
        bookingId,
        isReschedule,
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' '),
        email: data.email,
        phone: data.phone,
        streetAddress: data.streetAddress || '',
        city: data.city || '',
        state: data.state || '',
        zip: data.zip || '',
        date: data.date,
        time: data.time,
        adults: data.adults,
        children: data.children,
        occasion: data.occasion || '',
        proteins: data.proteins || '',
        message: data.message || '',
        customerHtml,
      }),
    });

    // EMAIL TO CUSTOMER (clean branded email only)
    await transporter.sendMail({
      from: 'Hibachi Connect <info@hibachiconnect.com>',
      to: data.email,
      subject: isReschedule
        ? `📅 Rescheduled | ${data.name} | ${data.date} at ${data.time}`
        : `🔥 Booking Request Received | ${data.name} | ${data.date} at ${data.time}`,
      html: customerHtml,
    });

    // LOG TO GOOGLE SHEETS
    if (process.env.SHEETS_WEBHOOK_URL) {
      try {
        const sheetsRes = await fetch(process.env.SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'create', bookingId, name: data.name, email: data.email, phone: data.phone, date: data.date, time: data.time, guests: data.guests, message: data.message || '', address: data.address || '' }),
        });
        console.log('[Sheets] Response:', await sheetsRes.text());
      } catch (err) {
        console.error('[Sheets] Error:', err);
      }
    }

    return Response.json({ success: true, bookingId });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
