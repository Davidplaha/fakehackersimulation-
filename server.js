const http = require('http');
const fs = require('fs');
const path = require('path');

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
  '/': {
    title: 'Hacker Prank Software | SimDeck Fake Hacking Simulation',
    description: 'SimDeck is safe hacker prank software: a fake hacking simulation UI for demos, videos, and pranks. Works in your browser. No real hacking or data access.',
    canonical: 'https://www.hackerprank.online/',
  },
  '/hacker-prank/': {
    title: 'Hacker Prank | Fake Hacking Simulator',
    description: 'Open safe hacker prank tools and fake hacking simulator screens for pranks, videos, demos, and harmless visual effects.',
    canonical: 'https://www.hackerprank.online/hacker-prank/',
  },
  '/fake-phone-hacking/': {
    title: 'Fake Phone Hacking Simulator | SimDeck',
    description: 'Launch fake phone hacking prank screens including basic scan, phone tracking, terminal, matrix, and forensic-style simulations.',
    canonical: 'https://www.hackerprank.online/fake-phone-hacking/',
  },
  '/email-hack-simulator/': {
    title: 'Fake Email Hack Simulator | Email Prank Simulator',
    description: 'Run safe email prank simulator screens with login, mailbox, recovery, and account-security theater.',
    canonical: 'https://www.hackerprank.online/email-hack-simulator/',
  },
  '/fake-virus-scanner/': {
    title: 'Fake Virus Scanner Prank | SimDeck',
    description: 'Start a fake virus scanner prank with fictional threat alerts, progress bars, and cleanup screens.',
    canonical: 'https://www.hackerprank.online/fake-virus-scanner/',
  },
  '/fake-windows-update/': {
    title: 'Fake Windows Update Prank | SimDeck',
    description: 'Open a Windows-style fake update and desktop prank simulator for harmless screen jokes and videos.',
    canonical: 'https://www.hackerprank.online/fake-windows-update/',
  },
  '/cracked-screen-prank/': {
    title: 'Cracked Screen Prank | Broken Screen Prank',
    description: 'Launch a broken screen prank with fake glass cracks and screen damage effects.',
    canonical: 'https://www.hackerprank.online/cracked-screen-prank/',
  },
  '/fake-fbi-lock-screen/': {
    title: 'Fake FBI Lock Screen Prank | SimDeck',
    description: 'Start a fictional FBI lock screen prank with countdown and warning-screen styling.',
    canonical: 'https://www.hackerprank.online/fake-fbi-lock-screen/',
  },
  '/ios-update-prank/': {
    title: 'Fake iOS Update Prank | SimDeck',
    description: 'Run a fake iOS update prank that looks like an endless mobile update screen.',
    canonical: 'https://www.hackerprank.online/ios-update-prank/',
  },
  '/android-optimizing-prank/': {
    title: 'Android Optimizing Prank | SimDeck',
    description: 'Open an Android optimizing prank with repair, cache, and system loop screens.',
    canonical: 'https://www.hackerprank.online/android-optimizing-prank/',
  },
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

function applyRouteMeta(html, pathname) {
  const meta = ROUTE_META[normalizeRoutePath(pathname)];
  if (!meta) return html;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = escapeHtml(meta.canonical);

  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<meta name="description"[\s\S]*?>/i, `<meta name="description" content="${description}">`)
    .replace(/<link rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${canonical}">`)
    .replace(/<meta property="og:title"[\s\S]*?>/i, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description"[\s\S]*?>/i, `<meta property="og:description" content="${description}">`)
    .replace(/<meta name="twitter:title"[\s\S]*?>/i, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description"[\s\S]*?>/i, `<meta name="twitter:description" content="${description}">`);
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
  let filePath = requestPath === '/' || ROUTED_PAGES.has(requestPath) ? '/index.html' : requestPath;
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
        res.writeHead(200, { 'Content-Type': contentType });
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
