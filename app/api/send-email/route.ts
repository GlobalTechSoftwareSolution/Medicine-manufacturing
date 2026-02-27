import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Temporary hardcoded API key for testing
const apiKey = 're_6ATmnCFo_5BRPPYw1RAQwTPj4fv6AyHEt';
const resend = new Resend(apiKey);

export async function POST(request: NextRequest) {
  try {
    // Check if API key is available
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    let name, email, phone, company, message, resumeFile;

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      name = formData.get('name') as string;
      email = formData.get('email') as string;
      phone = formData.get('phone') as string;
      company = formData.get('company') as string;
      message = formData.get('message') as string;
      resumeFile = formData.get('resume') as File | null;
    } else {
      const body = await request.json();
      name = body.name;
      email = body.email;
      phone = body.phone;
      company = body.company;
      message = body.message;
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Prepare attachments if resume exists
    const attachments = [];
    if (resumeFile && resumeFile instanceof File) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">${resumeFile ? 'New Job Application' : 'New Contact Form Submission'}</h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>${resumeFile ? 'Department/Location' : 'Company'}:</strong> ${company || 'Not provided'}</p>
          ${resumeFile ? `<p><strong>Resume:</strong> Attached (${resumeFile.name})</p>` : ''}
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #374151;">Message:</h3>
          <p style="background-color: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            This message was sent from the ${resumeFile ? 'Careers' : 'Contact'} form on your website.
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'info@nrmedicare.com',
      to: 'info@nrmedicare.com',
      subject: resumeFile ? `New Job Application from ${name}` : `New Contact Form Submission from ${name}`,
      html: htmlContent,
      replyTo: email,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend API error:', error);
      let errorMessage = 'Failed to send email';

      if (error.statusCode === 422) {
        errorMessage = 'Invalid email format. Please check your email address.';
      } else if (error.statusCode === 401) {
        errorMessage = 'Email service authentication error.';
      } else if (error.statusCode === 429) {
        errorMessage = 'Too many requests. Please try again later.';
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
