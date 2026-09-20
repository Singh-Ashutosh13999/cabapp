import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, service, message } = await request.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // Email to the website/admin
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.BOOKING_EMAIL || "support@cabconnect.in", // Use booking email or a fallback
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service of Interest:</strong> ${service || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Optional: Email to the user confirming receipt
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: `Thank you for contacting CabConnect`,
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thank you for reaching out to us. We have received your message regarding "${service || 'our services'}" and one of our representatives will get back to you shortly.</p>
        <br/>
        <p>Best Regards,</p>
        <p>CabConnect Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Contact email sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send contact email.",
      },
      { status: 500 }
    );
  }
}
