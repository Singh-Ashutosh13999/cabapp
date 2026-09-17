import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      pickup,
      dropoff,
      date,
      time,
      route,
      price,
    } = await request.json();

    if (!name || !email || !pickup || !dropoff || !date || !time) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // Email to the customer
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: `Cab Booking Confirmation - ${route}`,
      html: `
        <h2>Cab Booking Confirmation</h2>
        <p>Hello ${name},</p>
        <p>Your cab booking request has been received.</p>

        <p><strong>Route:</strong> ${route}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Drop-off:</strong> ${dropoff}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Fare:</strong> ₹${price}</p>

        <p>Thank you for booking with us.</p>
      `,
    });

    // Email to the website/admin
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.BOOKING_EMAIL!,
      subject: `New Cab Booking - ${route}`,
      html: `
        <h2>New Cab Booking</h2>

        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Customer Email:</strong> ${email}</p>

        <p><strong>Route:</strong> ${route}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Drop-off:</strong> ${dropoff}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Fare:</strong> ₹${price}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Booking confirmation emails sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send booking confirmation email.",
      },
      { status: 500 }
    );
  }
}