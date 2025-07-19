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
  title = 'Viswa - AI/ML Developer & Full Stack Engineer | Viswa Portfolio',
  description = 'Viswa V R - Leading AI/ML Developer, Full Stack Engineer, and Data Scientist. Expert in machine learning, deep learning, React, Node.js, Python, and cutting-edge web technologies. Discover Viswa\'s innovative projects and professional expertise.',
  keywords = 'Viswa, Viswa V R, Viswa Developer, Viswa AI, Viswa ML, Viswa Portfolio, Viswa Projects, AI Developer Viswa, ML Engineer Viswa, Full Stack Developer Viswa, Machine Learning Expert Viswa, Deep Learning Specialist Viswa, React Developer Viswa, Node.js Expert Viswa, Python Developer Viswa, Data Scientist Viswa, Software Engineer Viswa, Web Developer Viswa, Tech Expert Viswa, Viswa Tech, Viswa Solutions, Viswa AI Solutions',
  image = 'https://viswap.netlify.app/og-image.jpg',
  url = 'https://viswap.netlify.app',
  type = 'website',
  author = 'Viswa V R',
  canonical = 'https://viswap.netlify.app'
}) => {
  const siteName = 'Viswa - Portfolio';
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
          'name': 'Viswa',
          'url': url,
          'sameAs': [
            'https://github.com/viswa',
            'https://linkedin.com/in/viswa',
            'https://twitter.com/viswa_dev'
          ],
          'jobTitle': 'Full Stack Developer',
          'worksFor': {
            '@type': 'Organization',
            'name': 'Viswa Dev'
          },
          'description': description
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
