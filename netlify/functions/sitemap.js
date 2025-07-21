// Import required modules
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

// Enable detailed logging
console.log('Sitemap function initialized');

// Simple logging function
const log = (...args) => {
  console.log('[Sitemap]', ...args);
};

// Error logging function
const logError = (error, context = '') => {
  console.error(`[Sitemap Error] ${context}`, error);
};

// Main handler function
export const handler = async (event, context) => {
  log('Request received:', {
    path: event.path,
    httpMethod: event.httpMethod,
    query: event.queryStringParameters
  });
  
  try {
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

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: SITE_URL,
      lastmodDateOnly: true,
    });

    // Convert pages to sitemap format
    const links = pages.map(page => ({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: page.lastmod,
    }));

    // Generate the sitemap XML using a promise
    const sitemapXml = await streamToPromise(Readable.from(links).pipe(stream))
      .then(data => data.toString('utf-8'));

    log('Sitemap generated successfully');
    
    // Return the sitemap
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'X-Sitemap-Generated-At': new Date().toISOString()
      },
      body: sitemapXml,
    };
    
  } catch (error) {
    logError(error, 'Failed to generate sitemap');
    
    // Return a more detailed error response
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
      body: JSON.stringify({
        error: 'Failed to generate sitemap',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
        timestamp: new Date().toISOString()
      }, null, 2)
    };
  }
};
