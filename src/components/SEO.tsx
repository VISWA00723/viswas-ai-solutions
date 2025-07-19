import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEO = ({
  title = 'Viswa - Full Stack Developer & Designer',
  description = 'Professional portfolio of Viswa, showcasing skills, projects, and experience in full-stack development and design.',
  keywords = [
    'Viswa',
    'Viswa Dev',
    'Viswa P',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Portfolio',
    'Web Design',
    'UI/UX Designer',
    'MERN Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Node.js Developer'
  ],
  ogImage = 'https://viswap.netlify.app/og-image.jpg',
  url = 'https://viswap.netlify.app',
  type = 'website',
  author = 'Viswa',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = ['web development', 'programming', 'design']
}: SEOProps) => {
  const siteName = 'Viswa - Portfolio';
  const twitterHandle = '@viswa_dev';
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
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
