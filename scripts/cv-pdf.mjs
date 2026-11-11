// Genera public/cv.pdf y public/en/cv.pdf desde src/content/cv.ts.
// Uso: npm run cv  (levanta `astro dev`, imprime /cv/print y /en/cv/print con puppeteer).
import { dev } from 'astro';
import puppeteer from 'puppeteer';

const targets = [
  { path: '/cv/print', out: 'public/cv.pdf' },
  { path: '/en/cv/print', out: 'public/en/cv.pdf' },
];

const server = await dev({ logLevel: 'error', server: { port: 4399 } });
const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  for (const { path, out } of targets) {
    await page.goto(`http://localhost:4399${path}`, { waitUntil: 'networkidle0' });
    await page.pdf({ path: out, format: 'A4', printBackground: true });
    console.log(`✓ ${out}`);
  }
} finally {
  await browser.close();
  await server.stop();
}
