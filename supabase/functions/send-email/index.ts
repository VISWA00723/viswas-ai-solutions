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
    
    // Get EmailJS credentials from Supabase secrets
    const serviceId = Deno.env.get('EMAILJS_SERVICE_ID')
    const templateId = Deno.env.get('EMAILJS_TEMPLATE_ID')
    const userId = Deno.env.get('EMAILJS_USER_ID') || Deno.env.get('EMAILJS_PUBLIC_KEY')

    // Validate required fields
    const missingFields = []
    if (!serviceId) missingFields.push('EMAILJS_SERVICE_ID')
    if (!templateId) missingFields.push('EMAILJS_TEMPLATE_ID')
    if (!userId) missingFields.push('EMAILJS_USER_ID or EMAILJS_PUBLIC_KEY')
    
    if (missingFields.length > 0) {
      const errorMsg = `Missing required environment variables: ${missingFields.join(', ')}`
      console.error(errorMsg)
      return new Response(
        JSON.stringify({ error: errorMsg }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Prepare the email data according to EmailJS API requirements
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        to_name: 'Viswa',
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        reply_to: email
      }
    }

    console.log('Sending email with data:', {
      service_id: serviceId,
      template_id: templateId,
      user_id: '***',
      template_params: {
        ...emailData.template_params,
        message: message ? '***' : 'EMPTY'
      }
    });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'origin': 'https://viswas-ai-solutions.vercel.app'
        },
        body: JSON.stringify(emailData)
      });

      const responseText = await response.text();
      console.log('EmailJS Response:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email',
          details: error.message
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})