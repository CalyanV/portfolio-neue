const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Listen to console messages
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

  // Listen to page errors
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  // Navigate to page
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Wait 3 seconds to see animations
  await page.waitForTimeout(3000);

  // Take screenshot
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });

  console.log('Screenshot saved as debug-screenshot.png');

  await browser.close();
})();
