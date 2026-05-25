// Generates sitemap.xml from the canonical list of indexable pages, with a
// real <lastmod> (from each file's modified date). Excludes noindexed/utility
// pages. Run after content changes: node build-sitemap.js
const fs = require('fs');
const path = require('path');

const SITE = 'https://www.hackerprank.online';
const PUBLIC_DIR = __dirname;

// [urlPath, fileRelativePath, priority]. Only genuinely indexable pages.
const PAGES = [
  ['/', 'index.html', '1.0'],
  ['/hacker-prank/', 'hacker-prank/index.html', '0.9'],
  ['/fake-phone-hacking/', 'fake-phone-hacking/index.html', '0.9'],
  ['/email-hack-simulator/', 'email-hack-simulator/index.html', '0.9'],
  ['/fake-virus-scanner/', 'fake-virus-scanner/index.html', '0.9'],
  ['/fake-windows-update/', 'fake-windows-update/index.html', '0.9'],
  ['/windows-os-simulator/', 'windows-os-simulator/index.html', '0.9'],
  ['/cracked-screen-prank/', 'cracked-screen-prank/index.html', '0.9'],
  ['/fake-fbi-lock-screen/', 'fake-fbi-lock-screen/index.html', '0.9'],
  ['/ios-update-prank/', 'ios-update-prank/index.html', '0.9'],
  ['/android-optimizing-prank/', 'android-optimizing-prank/index.html', '0.9'],
  ['/xp-simulator/', 'xp-simulator/index.html', '0.7'],
  ['/about/', 'about/index.html', '0.5'],
  ['/contact/', 'contact/index.html', '0.5'],
  ['/safety/', 'safety/index.html', '0.5'],
  ['/privacy/', 'privacy/index.html', '0.4'],
  ['/terms/', 'terms/index.html', '0.4'],
];
// Intentionally excluded (noindex / utility): /standalone-video-page/

const iso = (d) => d.toISOString().slice(0, 10);
let count = 0;
const urls = PAGES.map(([url, file, priority]) => {
  const abs = path.join(PUBLIC_DIR, file);
  let lastmod = iso(new Date());
  if (fs.existsSync(abs)) { lastmod = iso(fs.statSync(abs).mtime); count += 1; }
  else { console.warn('WARN missing file (still listed):', file); }
  return `  <url>\n    <loc>${SITE}${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf-8');
console.log(`sitemap.xml written: ${PAGES.length} URLs (${count} files found).`);
