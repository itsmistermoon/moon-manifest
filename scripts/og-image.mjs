// Genera public/og-image.png y public/en/og-image.png desde /og y /en/og.
// Uso: npm run og  (levanta `astro dev` y captura cada tarjeta con puppeteer).
import { dev } from 'astro';
import puppeteer from 'puppeteer';

const targets = [
  { path: '/og', out: 'public/og-image.png' },
  { path: '/en/og', out: 'public/en/og-image.png' },
];

const server = await dev({ logLevel: 'error', server: { port: 4398 }, devToolbar: { enabled: false } });
const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  for (const { path, out } of targets) {
    await page.goto(`http://localhost:4398${path}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: out });
    console.log(`✓ ${out}`);
  }
} finally {
  await browser.close();
  await server.stop();
}
