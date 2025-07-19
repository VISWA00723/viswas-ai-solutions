import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { SitemapStream } from 'sitemap';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

const generateSitemap = async () => {
  console.log('Generating sitemap...');
  
  try {
    // Create a stream to write to
    const sitemap = new SitemapStream({
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

    // Generate the sitemap XML
    let sitemapXml = '';
    for (const link of links) {
      sitemap.write(link);
    }
    sitemap.end();

    // Collect all data from the stream
    for await (const chunk of sitemap) {
      sitemapXml += chunk.toString('utf-8');
    }
    
    // Ensure the public directory exists
    const publicDir = resolve(__dirname, '../public');
    await writeFile(
      resolve(publicDir, 'sitemap.xml'),
      sitemapXml,
      'utf-8'
    );
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the sitemap generator
generateSitemap();
