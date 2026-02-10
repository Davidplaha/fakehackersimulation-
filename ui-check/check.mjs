import fs from 'node:fs';
import path from 'node:path';
import {chromium} from 'playwright';

// Resolve relative to the current working directory (repo root when invoked via `node ui-check/check.mjs`).
const outDir = path.resolve('backups', 'ui-check-latest');
fs.mkdirSync(outDir, {recursive: true});

const baseURL = process.env.BASE_URL || 'http://127.0.0.1:3001/';

const shots = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: {width: 1280, height: 720},
    deviceScaleFactor: 1,
  });

  page.on('console', (msg) => {
    const t = msg.type();
    if (t === 'error') {
      // Keep it short; full console can be very noisy.
      // This is just to catch crashes like "Cannot read properties of null".
      process.stderr.write(`[console.${t}] ${msg.text()}\n`);
    }
  });

  await page.goto(baseURL, {waitUntil: 'load'});
  await page.waitForSelector('[data-id="phone"]', {timeout: 15_000});
  await page.waitForTimeout(250);

  await page.screenshot({path: path.join(outDir, '01-home.png'), fullPage: true});

  // Enter Phone Hacking scenario selection.
  await page.click('[data-id="phone"]', {timeout: 10_000});
  await page.waitForSelector('#freeModeCard', {timeout: 10_000});
  await page.waitForTimeout(200);
  await page.screenshot({path: path.join(outDir, '02-phone-mode.png'), fullPage: true});

  // Choose Free Demo to get to phone scenario selection.
  await page.click('#freeModeCard', {timeout: 10_000});
  await page.waitForSelector('.scenario-options', {timeout: 10_000});
  await page.waitForTimeout(250);
  await page.screenshot({path: path.join(outDir, '03-phone-menu.png'), fullPage: true});

  // Select Corporate SOC.
  const corporateCard = page.locator('.scenario-options .scenario-card', {hasText: 'Corporate SOC'}).first();
  await corporateCard.click({timeout: 10_000});
  await page.waitForTimeout(1200);
  const metrics = await page.evaluate(() => {
    const stage = document.querySelector('#stageCanvas');
    const frame = document.querySelector('.mobile-frame');
    const s = stage ? stage.className : null;
    const r = frame ? frame.getBoundingClientRect() : null;
    const cs = frame ? window.getComputedStyle(frame) : null;
    return {
      stageClass: s,
      stageDisplay: stage ? window.getComputedStyle(stage).display : null,
      frameRect: r ? {x: r.x, y: r.y, w: r.width, h: r.height} : null,
      frameComputed: cs
        ? {
            width: cs.width,
            height: cs.height,
            transform: cs.transform,
            flex: cs.flex,
            flexShrink: cs.flexShrink,
            marginLeft: cs.marginLeft,
            marginRight: cs.marginRight,
          }
        : null,
    };
  });
  console.log('UI_METRICS', JSON.stringify(metrics));
  await page.screenshot({path: path.join(outDir, '04-corporate-soc.png'), fullPage: true});

  // Back to phone menu.
  await page.click('text=Exit to Home', {timeout: 10_000}).catch(() => {});
  // If exit didn't appear (depending on state), go back using reset.
  await page.waitForTimeout(800);
  await page.click('#resetStageBtn', {timeout: 10_000}).catch(() => {});
  await page.waitForTimeout(800);
  await page.click('[data-id="phone"]', {timeout: 10_000});
  await page.waitForSelector('#freeModeCard', {timeout: 10_000});
  await page.click('#freeModeCard', {timeout: 10_000});
  await page.waitForSelector('.scenario-options', {timeout: 10_000});

  // Select Basic Scan.
  const basicCard = page.locator('.scenario-options .scenario-card', {hasText: 'Basic Scan'}).first();
  await basicCard.click({timeout: 10_000});
  await page.waitForTimeout(1200);
  await page.screenshot({path: path.join(outDir, '07-basic-scan.png'), fullPage: true});

  // Back to phone menu again.
  await page.click('#resetStageBtn', {timeout: 10_000}).catch(() => {});
  await page.waitForTimeout(800);
  await page.click('[data-id="phone"]', {timeout: 10_000});
  await page.waitForSelector('#freeModeCard', {timeout: 10_000});
  await page.click('#freeModeCard', {timeout: 10_000});
  await page.waitForSelector('.scenario-options', {timeout: 10_000});

  // Select Matrix Style.
  const matrixCard = page.locator('.scenario-options .scenario-card', {hasText: 'Matrix Style'}).first();
  await matrixCard.click({timeout: 10_000});
  await page.waitForTimeout(1400);
  await page.screenshot({path: path.join(outDir, '08-matrix-style.png'), fullPage: true});

  // Back to home and open FBI Lock (hard reload to avoid UI state differences).
  await page.goto(baseURL, {waitUntil: 'networkidle'});
  await page.waitForTimeout(350);
  await page.click('[data-id="fbi"]', {timeout: 10_000});
  await page.waitForTimeout(900);
  await page.screenshot({path: path.join(outDir, '09-fbi-lock.png'), fullPage: true});

  // Back to home and open Critical Data.
  await page.goto(baseURL, {waitUntil: 'networkidle'});
  await page.waitForTimeout(350);
  const criticalCard = page.locator('[data-id="critical"]').first();
  await criticalCard.scrollIntoViewIfNeeded();
  await criticalCard.click({timeout: 10_000});
  await page.waitForTimeout(1400);
  await page.screenshot({path: path.join(outDir, '10-critical-data.png'), fullPage: true});

  // Back to home and open Global Network.
  await page.goto(baseURL, {waitUntil: 'networkidle'});
  await page.waitForTimeout(350);
  const globalnetCard = page.locator('[data-id="globalnet"]').first();
  await globalnetCard.scrollIntoViewIfNeeded();
  await globalnetCard.click({timeout: 10_000});
  await page.waitForTimeout(1400);
  await page.screenshot({path: path.join(outDir, '11-global-network.png'), fullPage: true});

  // Try to open trace visualizer (button inside the phone frame).
  const traceBtn = page.locator('.mobile-frame [data-action="trace"]').first();
  if (await traceBtn.count()) {
    await traceBtn.click();
    await page.waitForTimeout(900);
    await page.screenshot({path: path.join(outDir, '05-trace-window.png'), fullPage: true});
  }

  // Mobile-ish viewport sanity check.
  await page.setViewportSize({width: 420, height: 780});
  await page.waitForTimeout(300);
  await page.screenshot({path: path.join(outDir, '06-corporate-mobile.png'), fullPage: true});

  await browser.close();
};

await shots();
console.log(`Wrote screenshots to: ${outDir}`);
