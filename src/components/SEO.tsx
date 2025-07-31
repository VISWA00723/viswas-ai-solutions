import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Viswa Dev (Viswa VR) | Expert AI/ML & Full Stack Developer | Custom AI Solutions',
  description = 'Hire Viswa Dev (Viswa VR), a top-tier AI/ML and Full Stack Engineer based in Bengaluru. Specializing in custom AI solutions, deep learning, NLP, computer vision, and high-performance web applications with React and Python. Your go-to expert for generative AI, predictive analytics, and scalable cloud deployment.',
  keywords = 'Viswa Dev, Viswa VR, Viswa V R, Viswa Dev Portfolio, Viswa Dev AI, Viswa Dev ML, Hire Viswa Dev, AI Developer, ML Engineer, Full Stack Developer, Generative AI, LLM, Custom AI Solutions, Hire AI Developer, Freelance AI Engineer, AI Developer Bengaluru, Python AI Developer, React Developer, TensorFlow, PyTorch, AWS, FastAPI, NLP Expert, Computer Vision Specialist, Predictive Analytics, AI for Startups, AI Consultant, Machine Learning Services, Deep Learning Engineer, Web App Developer, Software Developer India, AI Development Freelancer, AI Consulting Services, Backend Developer, Frontend Developer, MERN Stack, Django Developer, Flask Developer, Data Science Expert, AI Engineer India, Model Deployment Expert, MLOps, AI Web Integration, AI Chatbot Developer, AI Resume Screener, OCR Specialist, API Developer, Cloud AI Solutions, AI System Design, AI Researcher, Fine-tuning LLMs, AI Solutions for Enterprises, AI MVP Builder, Scalable Web Systems',
  image = 'https://viswap.netlify.app/og-image.jpg',
  url = 'https://viswap.netlify.app',
  type = 'website',
  author = 'Viswa V R',
  canonical = 'https://viswap.netlify.app'
}) => {
  const siteName = 'Viswa Dev - Portfolio';
  const twitterHandle = '@viswa_dev';
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Viswa Dev',
          'alternateName': ['Viswa', 'Viswa V R', 'Viswa Developer', 'Viswa AI', 'Viswa ML'],
          'url': url,
          'image': image,
          'sameAs': [
            'https://github.com/VISWA00723',
            'https://www.linkedin.com/in/viswa-v-r-41871324a/',
            'https://twitter.com/viswa_dev'
          ],
          'jobTitle': 'AI/ML Developer & Full Stack Engineer',
          'worksFor': {
            '@type': 'Organization',
            'name': 'Viswa AI Solutions',
            'url': url
          },
          'alumniOf': {
            '@type': 'CollegeOrUniversity',
            'name': 'Your University Name' // TODO: Replace with your actual university
          },
          'knowsAbout': [
            'Artificial Intelligence',
            'Machine Learning',
            'Deep Learning',
            'Full Stack Development',
            'React.js',
            'Node.js',
            'Python Programming',
            'Data Science'
          ],
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Bengaluru',
            'addressCountry': 'India'
          },
          'description': description,
          'email': 'viswavr54@gmail.com',
          'telephone': '+916380985188'
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Viswa Dev Portfolio',
          'alternateName': 'Viswa Developer Portfolio',
          'url': url,
          'description': 'Official portfolio of Viswa Dev - Top AI/ML Developer and Full Stack Engineer',
          'author': {
            '@type': 'Person',
            'name': 'Viswa Dev'
          },
          'potentialAction': {
            '@type': 'SearchAction',
            'target': `${url}?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': 'Software Development',
          'provider': {
            '@type': 'Person',
            'name': 'Viswa VR'
          },
          'areaServed': {
            '@type': 'Country',
            'name': 'India'
          },
          'description': 'Custom AI/ML model development, full-stack web application engineering, and generative AI solutions.',
          'name': 'AI and Full Stack Development Services'
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
