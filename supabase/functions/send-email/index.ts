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
    
    // Main recipient (your email)
    const adminEmail = 'viswavr54@gmail.com';
    const visitorEmail = email;
    const adminName = 'Viswa';
    
    // 1. Send email to admin (you)
    const adminEmailData = {
      service_id: serviceId,
      template_id: templateId, // Use your main template ID
      user_id: userId,
      template_params: {
        to_name: adminName,
        to_email: adminEmail,
        from_name: name,
        from_email: visitorEmail,
        subject: `New Contact: ${subject}`,
        message: message,
        reply_to: visitorEmail,
        email: visitorEmail,
        name: name
      }
    };
    
    console.log('Sending emails to:', { adminEmail, visitorEmail });

    console.log('Sending admin email with data:', {
      service_id: serviceId,
      template_id: templateId,
      user_id: '***',
      template_params: {
        ...adminEmailData.template_params,
        message: message ? '***' : 'EMPTY'
      }
    });

    // Send email to admin
    const adminResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'origin': 'https://viswas-ai-solutions.vercel.app'
      },
      body: JSON.stringify(adminEmailData)
    });

    const adminResponseText = await adminResponse.text();
    console.log('Admin Email Response Status:', adminResponse.status);
    
    if (!adminResponse.ok) {
      throw new Error(`Admin email failed: ${adminResponse.status} - ${adminResponseText}`);
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