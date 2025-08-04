import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('Edge function called with method:', req.method)
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request')
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Processing POST request')
    const { name, email, subject, message } = await req.json()
    console.log('Request data:', { name, email, subject })

    // Get EmailJS credentials from Supabase secrets
    const serviceId = Deno.env.get('EMAILJS_SERVICE_ID')
    const templateId = Deno.env.get('EMAILJS_TEMPLATE_ID')
    const publicKey = Deno.env.get('EMAILJS_PUBLIC_KEY')

    console.log('Checking credentials:', { 
      hasServiceId: !!serviceId, 
      hasTemplateId: !!templateId, 
      hasPublicKey: !!publicKey 
    })

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing credentials')
      return new Response(
        JSON.stringify({ error: 'EmailJS credentials not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_email: 'viswavr54@gmail.com'
    }

    // Send email using EmailJS API with proper headers
    const emailjsUrl = `https://api.emailjs.com/api/v1.0/email/send`;
    
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
      accessToken: publicKey // Some versions of EmailJS require this
    };

    const response = await fetch(emailjsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'origin': 'http://localhost', // Required for EmailJS to accept the request
        'User-Agent': 'supabase-edge-function/1.0' // Some API providers require a user agent
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorText = await response.text()
      console.error('EmailJS Error:', errorText)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})