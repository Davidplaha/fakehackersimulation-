const http = require('http');
const fs = require('fs');
const path = require('path');
const seoConfig = require('./seo-pages.config');
const { routes } = seoConfig;

const USER_SPECIFIED_PORT = Boolean(process.env.PORT || process.argv[2]);
const DEFAULT_PORT = Number.parseInt(process.env.PORT || process.argv[2] || '8000', 10);
// Bind to IPv4 loopback so `localhost` works even on systems where `::1` and `127.0.0.1`
// resolve differently (common on Windows).
const HOST = process.env.HOST || process.argv[3] || '127.0.0.1';
// If the user explicitly asked for a port, do not auto-bump; it causes confusion when the browser still points to the original port.
const MAX_PORT_BUMP = USER_SPECIFIED_PORT ? 0 : 50; // Try up to DEFAULT_PORT + MAX_PORT_BUMP
const PUBLIC_DIR = __dirname;
const ROUTED_PAGES = new Set([
  '/hacker-prank',
  '/hacker-prank/',
  '/fake-phone-hacking',
  '/fake-phone-hacking/',
  '/email-hack-simulator',
  '/email-hack-simulator/',
  '/fake-virus-scanner',
  '/fake-virus-scanner/',
  '/fake-windows-update',
  '/fake-windows-update/',
  '/windows-os-simulator',
  '/windows-os-simulator/',
  '/cracked-screen-prank',
  '/cracked-screen-prank/',
  '/fake-fbi-lock-screen',
  '/fake-fbi-lock-screen/',
  '/ios-update-prank',
  '/ios-update-prank/',
  '/android-optimizing-prank',
  '/android-optimizing-prank/',
]);

const ROUTE_META = {
  ...Object.fromEntries(routes.map((route) => [route.path, {
    title: route.title,
    description: route.description,
    canonical: `https://www.hackerprank.online${route.path === '/' ? '/' : route.path}`,
    h1: route.h1 || route.label || route.title,
    intro: route.intro || '',
    sections: route.sections || [],
    faqs: route.faqs || [],
  }])),
};

function normalizeRoutePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[char]);
}

// Static internal-links nav so crawlers can traverse every prank page (and to
// pass link equity between routes). Rendered on every route.
function renderRouteLinks(currentPath) {
  const links = routes
    .filter((r) => normalizeRoutePath(r.path) !== currentPath)
    .map((r) => `<li><a href="${escapeHtml(r.path)}">${escapeHtml(r.label || r.title)}</a></li>`)
    .join('');
  const trust = (seoConfig.trustLinks || [])
    .map(([label, href]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`)
    .join('');
  return `<nav class="route-links" aria-label="Prank simulator pages">
      <h2>Explore more prank simulators</h2>
      <ul class="route-links-list">${links}</ul>
      ${trust ? `<ul class="route-links-trust">${trust}</ul>` : ''}
    </nav>`;
}

// Unique, crawlable body content per route (intro + sections + FAQs + links).
// This is what makes each route distinct rather than a duplicate of index.html.
function renderRouteContent(meta, currentPath) {
  if (!meta) return '';
  const sections = (meta.sections || [])
    .map(([h, p]) => `<section class="route-sec"><h2>${escapeHtml(h)}</h2><p>${escapeHtml(p)}</p></section>`)
    .join('');
  const faqItems = (meta.faqs || [])
    .map(([q, a]) => `<div class="route-faq"><h3>${escapeHtml(q)}</h3><p>${escapeHtml(a)}</p></div>`)
    .join('');
  // FAQ schema omitted on purpose (base @graph already includes FAQPage).
  return `<section class="route-seo" aria-label="About this prank simulator">
      <div class="route-seo-inner">
        ${meta.intro ? `<p class="route-intro">${escapeHtml(meta.intro)}</p>` : ''}
        ${sections}
        ${faqItems ? `<section class="route-faqs"><h2>Frequently asked questions</h2>${faqItems}</section>` : ''}
        ${renderRouteLinks(currentPath)}
      </div>
    </section>`;
}

function applyRouteMeta(html, pathname) {
  const routePath = normalizeRoutePath(pathname);
  const meta = ROUTE_META[routePath];
  if (!meta) return html;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = escapeHtml(meta.canonical);
  const h1 = escapeHtml(meta.h1);

  let out = html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description"[\s\S]*?>/i, `<meta name="description" content="${description}">`)
    .replace(/<link rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${canonical}">`)
    .replace(/<meta property="og:title"[\s\S]*?>/i, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description"[\s\S]*?>/i, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:url"[\s\S]*?>/i, `<meta property="og:url" content="${canonical}">`)
    .replace(/<meta name="twitter:title"[\s\S]*?>/i, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description"[\s\S]*?>/i, `<meta name="twitter:description" content="${description}">`)
    // Per-route H1 so each page leads with its own target keyword.
    .replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/i, `<h1>${h1}</h1>`);

  // Inject unique crawlable content before </body> (idempotent: skip if the
  // static file was already pre-built with the block by build-seo-content.js).
  if (!out.includes('class="route-seo"') && out.includes('</body>')) {
    const block = renderRouteContent(meta, routePath);
    out = out.replace('</body>', `${block}\n</body>`);
  }
  return out;
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.jfif': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  // Minimal local API routing for Coinbase endpoints (mirrors Vercel serverless functions).
  // This enables Coinbase checkout/status in localhost without needing Vercel dev.
  if (req.url && req.url.startsWith('/api/coinbase/')) {
    const route = req.url.split('?')[0];
    try {
      if (route === '/api/coinbase/create-charge') {
        return require('./api/coinbase/create-charge.js')(req, res);
      }
      if (route === '/api/coinbase/ping') {
        return require('./api/coinbase/ping.js')(req, res);
      }
      if (route === '/api/coinbase/status') {
        return require('./api/coinbase/status.js')(req, res);
      }
      if (route === '/api/coinbase/webhook') {
        return require('./api/coinbase/webhook.js')(req, res);
      }
      res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
      res.end(JSON.stringify({error: 'Not found'}));
      return;
    } catch (e) {
      res.writeHead(500, {'Content-Type': 'application/json; charset=utf-8'});
      res.end(JSON.stringify({error: 'API error', message: String(e && e.message ? e.message : e)}));
      return;
    }
  }

  const requestPath = req.url ? req.url.split('?')[0] : '/';
  const legacyRedirects = {
    '/fake-hacker-prank-software': '/hacker-prank/',
    '/fake-hacker-prank-software/': '/hacker-prank/',
    '/blog/fake-hacker-prank-software': '/hacker-prank/',
    '/blog/fake-hacker-prank-software/': '/hacker-prank/',
  };
  if (legacyRedirects[requestPath]) {
    res.writeHead(308, { Location: legacyRedirects[requestPath] });
    res.end();
    return;
  }
  if (ROUTED_PAGES.has(requestPath) && requestPath !== '/' && !requestPath.endsWith('/')) {
    res.writeHead(308, { Location: `${requestPath}/` });
    res.end();
    return;
  }
  let filePath = requestPath === '/' ? '/index.html' : requestPath;
  if (ROUTED_PAGES.has(requestPath)) {
    const routeDir = normalizeRoutePath(requestPath).replace(/^\/|\/$/g, '');
    const routeIndex = path.join(PUBLIC_DIR, routeDir, 'index.html');
    filePath = fs.existsSync(routeIndex) ? path.join(routeDir, 'index.html') : '/index.html';
  } else if (requestPath.endsWith('/')) {
    const routeDir = requestPath.replace(/^\/|\/$/g, '');
    const routeIndex = path.join(PUBLIC_DIR, routeDir, 'index.html');
    if (routeDir && fs.existsSync(routeIndex)) filePath = path.join(routeDir, 'index.html');
  }
  filePath = path.join(PUBLIC_DIR, filePath);

  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  // Support byte-range requests (required for reliable <video> playback).
  fs.stat(filePath, (statErr, stats) => {
    if (statErr) {
      if (statErr.code === 'ENOENT') {
        console.error(`404: ${filePath}`);
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        console.error(`500: ${filePath}`);
        res.writeHead(500);
        res.end(`Server Error: ${statErr.code}`);
      }
      return;
    }

    const range = req.headers.range;
    if (range && (extname === '.mp4' || extname === '.webm')) {
      const size = stats.size;
      const match = /^bytes=(\d+)-(\d*)$/i.exec(range);
      if (!match) {
        res.writeHead(416, {
          'Content-Range': `bytes */${size}`,
        });
        res.end();
        return;
      }

      const start = Number.parseInt(match[1], 10);
      const end = match[2] ? Number.parseInt(match[2], 10) : Math.min(size - 1, start + 1024 * 1024 - 1);
      if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || start >= size) {
        res.writeHead(416, {
          'Content-Range': `bytes */${size}`,
        });
        res.end();
        return;
      }

      console.log(`206: ${filePath} (${start}-${end}/${size})`);
      res.writeHead(206, {
        'Content-Type': contentType,
        'Content-Length': end - start + 1,
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Accept-Ranges': 'bytes',
      });

      fs.createReadStream(filePath, {start, end}).pipe(res);
      return;
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        console.error(`500: ${filePath}`);
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      } else {
        if (extname === '.html') {
          content = Buffer.from(applyRouteMeta(content.toString('utf-8'), requestPath), 'utf-8');
        }
        console.log(`200: ${filePath}`);
        res.writeHead(200, {
          'Content-Type': `${contentType}${contentType.startsWith('text/') ? '; charset=utf-8' : ''}`,
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'SAMEORIGIN',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        });
        res.end(content, 'utf-8');
      }
    });
  });
});

let port = Number.isFinite(DEFAULT_PORT) ? DEFAULT_PORT : 8000;
let bumped = 0;

server.on('listening', () => {
  const addr = server.address();
  const actualPort = typeof addr === 'object' && addr ? addr.port : port;
  console.log(`Server running at http://${HOST}:${actualPort}/ (serving ${PUBLIC_DIR})`);
});

server.on('error', (err) => {
  if (err && err.code === 'EADDRINUSE' && bumped < MAX_PORT_BUMP) {
    const prev = port;
    port += 1;
    bumped += 1;
    console.warn(`Port ${prev} in use, trying ${port}...`);
    setTimeout(() => server.listen(port, HOST), 100);
    return;
  }

  console.error('Failed to start server:', err);
  process.exit(1);
});

server.listen(port, HOST);
