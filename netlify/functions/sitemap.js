import { SitemapStream } from 'sitemap';
import { Readable } from 'stream';

export const handler = async (event, context) => {
  // Define your website's base URL
  const SITE_URL = 'https://viswap.netlify.app';

  // Define your pages with their SEO metadata
  const pages = [
    { 
      url: '/', 
      changefreq: 'daily', 
      priority: 1.0,
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: '/#about', 
      changefreq: 'weekly', 
      priority: 0.8,
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: '/#skills', 
      changefreq: 'weekly', 
      priority: 0.7,
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: '/#experience', 
      changefreq: 'weekly', 
      priority: 0.7,
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: '/#projects', 
      changefreq: 'weekly', 
      priority: 0.8,
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: '/#education', 
      changefreq: 'monthly', 
      priority: 0.6,
      lastmod: new Date().toISOString().split('T')[0]
    },
    { 
      url: '/#contact', 
      changefreq: 'monthly', 
      priority: 0.5,
      lastmod: new Date().toISOString().split('T')[0]
    },
  ];

  try {
    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: SITE_URL,
      lastmodDateOnly: true,
    });

    // Create a readable stream from your pages
    const links = pages.map(page => ({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: page.lastmod,
    }));

    // Return a promise that resolves with the sitemap
    const sitemap = await new Promise((resolve, reject) => {
      const chunks = [];
      
      stream
        .on('data', chunk => chunks.push(chunk))
        .on('error', reject)
        .on('end', () => {
          try {
            resolve(Buffer.concat(chunks).toString('utf-8'));
          } catch (e) {
            reject(e);
          }
        });

      // Write each link to the sitemap
      links.forEach(link => stream.write(link));
      stream.end();
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
      body: sitemap,
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return {
      statusCode: 500,
      body: 'Error generating sitemap',
    };
  }
};
