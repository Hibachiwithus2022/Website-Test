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

function customerEmailHtml({ name, bookingId, date, time, guests, address, phone, email, occasion, message, proteins, isReschedule, prevDate, prevTime }) {
  const firstName = name.split(' ')[0];
  const manageUrl = `${SITE_URL}/booking?bookingId=${bookingId}`;
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

      ${address ? section('Location', row('Address', address)) : ''}
      ${proteins ? section('Protein Selection', row('Selection', proteins)) : ''}
      ${message ? section('Notes', row('', message)) : ''}
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
      📧 <a href="mailto:info@hibachinow.com" style="color:#C8102E;text-decoration:none;">info@hibachinow.com</a>
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

    // EMAIL TO OWNER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: isReschedule
        ? `📅 Rescheduled Booking — ${data.name} (New: ${data.date} at ${data.time})`
        : `🔥 New Hibachi Booking — ${data.name} (${data.date} at ${data.time})`,
      html: isReschedule ? `
        <h2>Booking Rescheduled</h2>
        <p><strong>Booking ID:</strong> ${bookingId}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Previous Date:</strong> ${data.prevDate} at ${data.prevTime}</p>
        <p><strong>New Date:</strong> ${data.date} at ${data.time}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Event Address:</strong> ${data.address || '—'}</p>
        <p><strong>Occasion:</strong> ${data.occasion || '—'}</p>
        <p><strong>Protein Selection:</strong> ${data.proteins || '—'}</p>
        <p><strong>Special Requests:</strong> ${data.message || '—'}</p>
      ` : `
        <h2>New Booking Request</h2>
        <p><strong>Booking ID:</strong> ${bookingId}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Event Address:</strong> ${data.address || '—'}</p>
        <p><strong>Occasion:</strong> ${data.occasion || '—'}</p>
        <p><strong>Protein Selection:</strong> ${data.proteins || '—'}</p>
        <p><strong>Special Requests:</strong> ${data.message || '—'}</p>
      `,
    });

    // EMAIL TO CUSTOMER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: isReschedule
        ? "📅 Your Hibachi Booking Has Been Rescheduled"
        : "🔥 Your Hibachi Booking Request Received – " + bookingId,
      html: customerEmailHtml({
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
      }),
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
