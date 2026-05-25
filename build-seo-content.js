// Bakes unique per-route SEO content (intro + sections + FAQs + FAQ schema)
// into each static route index.html so production (static hosting) serves
// distinct, crawlable bodies — not near-duplicates of index.html.
//
// Idempotent: re-running replaces the existing block instead of stacking.
// Usage: node build-seo-content.js
const fs = require('fs');
const path = require('path');
const { routes } = require('./seo-pages.config');

const PUBLIC_DIR = __dirname;
const START = '<!-- route-seo:start -->';
const END = '<!-- route-seo:end -->';

function esc(v) {
  return String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]));
}

function buildBlock(route) {
  const sections = (route.sections || [])
    .map(([h, p]) => `<section class="route-sec"><h2>${esc(h)}</h2><p>${esc(p)}</p></section>`)
    .join('');
  const faqItems = (route.faqs || [])
    .map(([q, a]) => `<div class="route-faq"><h3>${esc(q)}</h3><p>${esc(a)}</p></div>`)
    .join('');
  // Note: FAQ *schema* is intentionally omitted — the base page @graph already
  // carries a FAQPage. We add only the visible, crawlable FAQ text here.
  const inner = `<section class="route-seo" aria-label="About this prank simulator"><div class="route-seo-inner">`
    + (route.intro ? `<p class="route-intro">${esc(route.intro)}</p>` : '')
    + sections
    + (faqItems ? `<section class="route-faqs"><h2>Frequently asked questions</h2>${faqItems}</section>` : '')
    + `</div></section>`;
  return `${START}${inner}${END}`;
}

function fileFor(routePath) {
  if (routePath === '/') return path.join(PUBLIC_DIR, 'index.html');
  const dir = routePath.replace(/^\/|\/$/g, '');
  return path.join(PUBLIC_DIR, dir, 'index.html');
}

let updated = 0;
let missing = 0;
for (const route of routes) {
  const file = fileFor(route.path);
  if (!fs.existsSync(file)) { console.warn('SKIP (no file):', route.path); missing += 1; continue; }
  let html = fs.readFileSync(file, 'utf-8');
  const block = buildBlock(route);
  // remove any previous block, then inject fresh before </body>
  html = html.replace(new RegExp(`${START}[\\s\\S]*?${END}`), '');
  if (!html.includes('</body>')) { console.warn('SKIP (no </body>):', route.path); continue; }
  html = html.replace('</body>', `${block}\n</body>`);
  fs.writeFileSync(file, html, 'utf-8');
  console.log('updated:', route.path, '->', path.relative(PUBLIC_DIR, file));
  updated += 1;
}
console.log(`\nDone. ${updated} files updated, ${missing} missing.`);
