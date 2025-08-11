import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const geminiApiKey = Deno.env.get('GEMINI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const portfolioContext = `
You are a helpful AI assistant for Viswa V R's portfolio website. Here's detailed information about Viswa:

PROFESSIONAL PROFILE:
- Name: Viswa V R
- Title: AI/ML Developer & Full-Stack Developer
- Location: India
- Experience: 2+ years in AI/ML and web development

SKILLS & EXPERTISE:
- Programming Languages: Python, JavaScript, TypeScript, Java, C++
- AI/ML: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing
- Frameworks: React, Node.js, Express.js, Django, Flask, TensorFlow, PyTorch
- Databases: MongoDB, PostgreSQL, MySQL, Firebase
- Cloud & DevOps: AWS, Google Cloud, Docker, Kubernetes
- Tools: Git, Linux, Jupyter, VS Code

EDUCATION:
- Currently pursuing Bachelor's degree in Computer Science
- Strong background in mathematics and statistics
- Continuous learner with various online certifications in AI/ML

PROJECT EXPERIENCE:
- Developed multiple AI/ML projects including computer vision applications
- Built full-stack web applications with modern frameworks
- Experience with data preprocessing, model training, and deployment
- Created chatbots and conversational AI systems
- Portfolio includes projects in image recognition, NLP, and predictive analytics

INTERESTS:
- Passionate about cutting-edge AI technologies
- Interested in the intersection of AI and web development
- Enjoys working on challenging problems that require creative solutions
- Active in the tech community and open-source contributions

CONTACT INFORMATION:
- Available for collaboration on AI/ML projects
- Open to full-time opportunities and freelance work
- Portfolio website: https://viswap.netlify.app

When users ask about Viswa, provide detailed and accurate information based on this context. Be enthusiastic about his skills and experience. If asked about specific projects or technical details not mentioned here, acknowledge that you'd need more specific information and suggest they contact Viswa directly.
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    console.log('Received chat request:', { message, historyLength: conversationHistory.length });

    if (!geminiApiKey) {
      console.error('GEMINI_API_KEY not found');
      return new Response(JSON.stringify({ error: 'Gemini API key not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Prepare the conversation for Gemini
    const messages = [
      {
        role: 'user',
        parts: [{ text: portfolioContext }]
      },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
      {
        role: 'user',
        parts: [{ text: message }]
      }
    ];

    console.log('Sending request to Gemini API');

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      throw new Error(`Gemini API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('Gemini API response received');

    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';

    return new Response(JSON.stringify({ response: generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-gemini function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});