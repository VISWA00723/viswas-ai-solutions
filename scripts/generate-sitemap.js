const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Define your website's base URL
const SITE_URL = 'https://viswap.netlify.app';

// Define your pages with their SEO metadata
const pages = [
  { 
    url: '/', 
    changefreq: 'daily', 
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
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

const generateSitemap = async () => {
  console.log('Generating sitemap...');
  
  try {
    // Create a stream to write to
    const sitemap = new SitemapStream({
      hostname: SITE_URL,
      lastmodDateOnly: true,
    });

    // Create a write stream
    const writeStream = fs.createWriteStream(
      path.resolve('./public/sitemap.xml')
    );

    // Pipe the sitemap to the write stream
    sitemap.pipe(writeStream);

    // Add all pages to sitemap
    pages.forEach(page => {
      sitemap.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: page.lastmod,
      });
    });

    // End the stream
    sitemap.end();

    // Wait for the sitemap to finish writing
    await streamToPromise(sitemap);
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the sitemap generator
generateSitemap();
