import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Use Resend's default domain until vsumup.com is verified
// After domain verification, change to: "vsumup Contact <noreply@vsumup.com>"
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "vsumup Contact <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_EMAIL || "support@vsumup.com";

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  area: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, organization, area, message } = body;

    // Validate required fields
    if (!name || !email || !organization || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Inquiry: ${area}`,
      text: `
New contact form submission from vsumup.com

Name: ${name}
Email: ${email}
Organization: ${organization}
Project Area: ${area}

Message:
${message}
      `.trim(),
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
    New Contact Form Submission
  </h2>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr>
      <td style="padding: 8px 0; color: #64748b; width: 120px;">Name:</td>
      <td style="padding: 8px 0; font-weight: bold;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b;">Email:</td>
      <td style="padding: 8px 0;">
        <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b;">Organization:</td>
      <td style="padding: 8px 0; font-weight: bold;">${organization}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b;">Project Area:</td>
      <td style="padding: 8px 0;">${area}</td>
    </tr>
  </table>

  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
    <h3 style="margin: 0 0 10px 0; color: #334155;">Message:</h3>
    <p style="margin: 0; white-space: pre-wrap; color: #475569;">${message}</p>
  </div>

  <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
    This email was sent from the contact form at vsumup.com
  </p>
</div>
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
