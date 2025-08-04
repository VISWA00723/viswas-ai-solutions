import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
}

// Get environment variables
const getEnv = (key: string): string => {
  const value = Deno.env.get(key);
  if (!value) {
    console.error(`Missing required environment variable: ${key}`);
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

serve(async (req) => {
  console.log('Edge function called with method:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log('Processing request');
    const { name, email, subject, message } = await req.json();
    
    if (!name || !email || !subject || !message) {
      throw new Error('Missing required fields: name, email, subject, message');
    }

    // Get EmailJS credentials from environment
    const serviceId = getEnv('EMAILJS_SERVICE_ID');
    const templateId = getEnv('EMAILJS_TEMPLATE_ID');
    const userId = getEnv('EMAILJS_PUBLIC_KEY');

    console.log('Environment variables loaded');
    
    // Prepare the email data according to EmailJS API requirements
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        to_name: 'Viswa',
        to_email: 'viswavr54@gmail.com',
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        reply_to: email
      }
    };

    console.log('Sending email with data:', {
      service_id: serviceId,
      template_id: templateId,
      user_id: '***',
      template_params: {
        ...emailData.template_params,
        message: message ? '***' : 'EMPTY'
      }
    });

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'origin': 'https://viswas-ai-solutions.vercel.app'
      },
      body: JSON.stringify(emailData)
    });

    const responseText = await response.text();
    console.log('EmailJS Response Status:', response.status);
    
    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.status} - ${responseText}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }),
      { 
        status: 200, 
        headers: corsHeaders 
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'Failed to process request',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: corsHeaders 
      }
    );
  }
});