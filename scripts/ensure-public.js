import { mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ensurePublicDir = async () => {
  try {
    const publicDir = resolve(__dirname, '../public');
    await mkdir(publicDir, { recursive: true });
    console.log('Public directory is ready');
  } catch (error) {
    console.error('Error ensuring public directory:', error);
    process.exit(1);
  }
};

ensurePublicDir();
