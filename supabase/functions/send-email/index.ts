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

    // Prepare template parameters according to EmailJS expected format
    const templateParams = {
      to_email: 'viswavr54@gmail.com', // Recipient email (must match your EmailJS template)
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      reply_to: email, // Optional but recommended for reply-to header
      to_name: 'Viswa' // Optional: Name of the recipient
    }

    try {
      console.log('Sending email with data:', {
        serviceId,
        templateId,
        publicKey: publicKey ? '***' : 'MISSING',
        templateParams: {
          ...templateParams,
          message: templateParams.message ? '***' : 'EMPTY'
        }
      });

      const emailjsUrl = 'https://api.emailjs.com/api/v1.0/email/send';
      
      const emailData = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
        accessToken: publicKey,
        // Ensure the recipient is properly set
        to_email: 'viswavr54@gmail.com'
      };
      
      // Log the final payload being sent to EmailJS
      console.log('Sending email with payload:', {
        ...emailData,
        user_id: '***',
        accessToken: '***',
        template_params: {
          ...templateParams,
          message: templateParams.message ? '***' : 'EMPTY'
        }
      });

      console.log('Sending request to EmailJS...');
      const response = await fetch(emailjsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'origin': 'https://viswas-ai-solutions.vercel.app',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        body: JSON.stringify(emailData),
      });

      const responseText = await response.text();
      console.log('EmailJS Response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: responseText
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
      }

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email',
          details: error.message,
          type: error.name
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
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