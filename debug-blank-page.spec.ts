import { test, expect } from '@playwright/test';

test('Debug blank page issue', async ({ page }) => {
  // Enable console logging
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error));

  // Navigate to the page
  await page.goto('http://localhost:3000');

  // Wait a bit for any animations/renders
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({ path: 'blank-page-debug.png', fullPage: true });

  // Check what's in the DOM
  const html = await page.content();
  console.log('\n=== PAGE HTML (first 2000 chars) ===');
  console.log(html.substring(0, 2000));

  // Check if main element exists
  const mainExists = await page.locator('main').count();
  console.log('\n=== MAIN ELEMENT COUNT:', mainExists);

  // Check if hero section exists
  const heroExists = await page.locator('#hero').count();
  console.log('=== HERO SECTION COUNT:', heroExists);

  // Check if Particles canvas exists
  const canvasExists = await page.locator('canvas').count();
  console.log('=== CANVAS COUNT:', canvasExists);

  // Check computed styles of main
  if (mainExists > 0) {
    const mainDisplay = await page.locator('main').evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity,
        height: styles.height,
        width: styles.width,
        position: styles.position,
      };
    });
    console.log('\n=== MAIN ELEMENT STYLES ===');
    console.log(JSON.stringify(mainDisplay, null, 2));
  }

  // Check if there are any visible text nodes
  const visibleText = await page.evaluate(() => {
    return document.body.innerText;
  });
  console.log('\n=== VISIBLE TEXT (first 500 chars) ===');
  console.log(visibleText.substring(0, 500));

  // Check for React errors
  const reactErrors = await page.evaluate(() => {
    return (window as any).__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ ? 'React error overlay present' : 'No React errors detected';
  });
  console.log('\n=== REACT STATUS:', reactErrors);
});
