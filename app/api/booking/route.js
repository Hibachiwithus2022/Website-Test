import nodemailer from "nodemailer";

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
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Previous Date:</strong> ${data.prevDate} at ${data.prevTime}</p>
        <p><strong>New Date:</strong> ${data.date} at ${data.time}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Event Address:</strong> ${data.address || '—'}</p>
        <p><strong>Occasion:</strong> ${data.occasion || '—'}</p>
        <p><strong>Special Requests:</strong> ${data.message || '—'}</p>
      ` : `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Event Address:</strong> ${data.address || '—'}</p>
        <p><strong>Occasion:</strong> ${data.occasion || '—'}</p>
        <p><strong>Special Requests:</strong> ${data.message || '—'}</p>
      `,
    });

    // EMAIL TO CUSTOMER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: isReschedule
        ? "📅 Your Hibachi Booking Has Been Rescheduled"
        : "🔥 Your Hibachi Booking Request Received",
      html: isReschedule ? `
        <h2>Hi ${data.name},</h2>
        <p>Your <strong>Hibachi Connect</strong> booking has been rescheduled.</p>
        <p><strong>Previous Date:</strong> ${data.prevDate} at ${data.prevTime}</p>
        <p><strong>New Date:</strong> ${data.date} at ${data.time}</p>
        <ul>
          <li><strong>Guests:</strong> ${data.guests}</li>
          <li><strong>Address:</strong> ${data.address || '—'}</li>
          ${data.occasion ? `<li><strong>Occasion:</strong> ${data.occasion}</li>` : ''}
        </ul>
        <p>We will confirm your updated booking shortly.</p>
        <p style="color:#888;font-size:13px;">Cash or Zelle only · Travel fee may apply based on distance</p>
      ` : `
        <h2>Hi ${data.name},</h2>
        <p>Thanks for booking with <strong>Hibachi Connect</strong>!</p>
        <p>Here are your event details:</p>
        <ul>
          <li><strong>Date:</strong> ${data.date}</li>
          <li><strong>Time:</strong> ${data.time}</li>
          <li><strong>Guests:</strong> ${data.guests}</li>
          <li><strong>Address:</strong> ${data.address || '—'}</li>
          ${data.occasion ? `<li><strong>Occasion:</strong> ${data.occasion}</li>` : ''}
        </ul>
        <p>We will contact you shortly to confirm your event.</p>
        <p>🔥 Get ready for an amazing hibachi experience!</p>
        <p style="color:#888;font-size:13px;">Cash or Zelle only · Travel fee may apply based on distance</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
