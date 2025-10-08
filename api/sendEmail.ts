import { Resend } from 'resend'
import { contactSchema } from '../src/lib/validation/contactSchema'

const resend = new Resend(process.env.RESEND_API_KEY)

export const config = {
  runtime: 'edge',
}

export default async function handler(req: Request) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    // Parse and validate request body
    const body = await req.json()
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      return new Response(
        JSON.stringify({
          error: 'Invalid input',
          details: validationResult.error.errors,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const formData = validationResult.data

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Wright Angle Carpentry <noreply@wrightanglecarpentry.co.uk>',
      to: ['james@wrightanglecarpentry.co.uk'],
      subject: 'New enquiry from Wright Angle Carpentry website',
      replyTo: formData.email,
      text: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}

Message:
${formData.message}

---
Sent from Wright Angle Carpentry contact form
      `.trim(),
    })

    if (error) {
      console.error('Resend API error:', error)
      return new Response(
        JSON.stringify({
          error: 'Failed to send email',
          details: error.message,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        messageId: data?.id,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (err) {
    console.error('Unexpected error:', err)
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        details: err instanceof Error ? err.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

