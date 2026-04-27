import nodemailer from "nodemailer";

function row(label, oldVal, newVal) {
  const changed = oldVal !== newVal;
  return changed
    ? `<p><strong>${label}:</strong> <span style="color:#888;text-decoration:line-through">${oldVal}</span> → <span style="color:#C8102E;font-weight:700">${newVal}</span></p>`
    : `<p><strong>${label}:</strong> ${newVal}</p>`;
}

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const changesHtml = `
      ${row('Name',    data.oldName,    data.newName)}
      ${row('Phone',   data.oldPhone,   data.newPhone)}
      ${row('Address', data.oldAddress, data.newAddress)}
      ${row('Guests',  data.oldGuests,  data.newGuests)}
      ${(data.oldNotes || data.newNotes) ? row('Notes', data.oldNotes || '—', data.newNotes || '—') : ''}
    `;

    // EMAIL TO ADMIN
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Booking Updated – ${data.newName} – ${data.date}`,
      html: `
        <h2>Booking Updated</h2>
        <p><strong>Date:</strong> ${data.date} at ${data.time}</p>
        <h3>Changes (old → new)</h3>
        ${changesHtml}
      `,
    });

    // EMAIL TO CUSTOMER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Your Hibachi Booking Has Been Updated",
      html: `
        <h2>Hi ${data.newName},</h2>
        <p>Your <strong>Hibachi Connect</strong> booking details have been updated.</p>
        <p><strong>Date:</strong> ${data.date} at ${data.time}</p>
        <h3>Changes (old → new)</h3>
        ${changesHtml}
        <p>If this change was not requested by you, please contact us immediately.</p>
        <p style="color:#888;font-size:13px;">Cash or Zelle only · Travel fee may apply based on distance</p>
      `,
    });

    // UPDATE GOOGLE SHEETS
    if (process.env.SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'update',
            bookingId: data.bookingId,
            name: data.newName,
            email: data.email,
            phone: data.newPhone,
            date: data.date,
            time: data.time,
            guests: data.newGuests,
            message: data.newNotes || '',
          }),
        });
      } catch (err) { console.error('[Sheets] Update error:', err); }
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
