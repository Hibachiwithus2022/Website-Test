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

    // EMAIL TO ADMIN
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Booking Updated – ${data.newName} – ${data.date}`,
      html: `
        <h2>Booking Updated</h2>
        <h3>Previous Details</h3>
        <p><strong>Name:</strong> ${data.oldName}</p>
        <p><strong>Phone:</strong> ${data.oldPhone}</p>
        <p><strong>Address:</strong> ${data.oldAddress}</p>
        <p><strong>Guests:</strong> ${data.oldGuests}</p>
        ${data.oldNotes ? `<p><strong>Notes:</strong> ${data.oldNotes}</p>` : ''}
        <h3>New Details</h3>
        <p><strong>Name:</strong> ${data.newName}</p>
        <p><strong>Phone:</strong> ${data.newPhone}</p>
        <p><strong>Address:</strong> ${data.newAddress}</p>
        <p><strong>Guests:</strong> ${data.newGuests}</p>
        ${data.newNotes ? `<p><strong>Notes:</strong> ${data.newNotes}</p>` : ''}
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
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
        <h3>Updated Details</h3>
        <ul>
          <li><strong>Name:</strong> ${data.newName}</li>
          <li><strong>Phone:</strong> ${data.newPhone}</li>
          <li><strong>Address:</strong> ${data.newAddress}</li>
          <li><strong>Guests:</strong> ${data.newGuests}</li>
          <li><strong>Date:</strong> ${data.date}</li>
          <li><strong>Time:</strong> ${data.time}</li>
          ${data.newNotes ? `<li><strong>Notes:</strong> ${data.newNotes}</li>` : ''}
        </ul>
        <p>If this update was not requested by you, please contact us immediately.</p>
        <p style="color:#888;font-size:13px;">Cash or Zelle only · Travel fee may apply based on distance</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
