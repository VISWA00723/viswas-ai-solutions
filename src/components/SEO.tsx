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
  title = 'Viswa Dev - Top AI/ML Developer & Full Stack Engineer | Viswa V R Portfolio',
  description = 'Viswa Dev (Viswa V R) - Leading AI/ML Developer, Full Stack Engineer, and Data Scientist from Bengaluru. Expert in machine learning, deep learning, React, Node.js, Python, AI solutions. Top-rated developer for hire. Viswa Dev delivers cutting-edge technology solutions.',
  keywords = 'Viswa Dev, Viswa, Viswa V R, Viswa Developer, Viswa AI, Viswa ML, Viswa Portfolio, Viswa Projects, Viswa Dev Portfolio, AI Developer Viswa, ML Engineer Viswa, Full Stack Developer Viswa, Machine Learning Expert Viswa, Deep Learning Specialist Viswa, React Developer Viswa, Node.js Expert Viswa, Python Developer Viswa, Data Scientist Viswa, Software Engineer Viswa, Web Developer Viswa, Tech Expert Viswa, Viswa Tech, Viswa Solutions, Viswa AI Solutions, Bengaluru AI Developer, Bengaluru ML Engineer, Hire Viswa Dev, Viswa Developer for Hire, Top AI Developer India',
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
    </Helmet>
  );
};

export default SEO;
