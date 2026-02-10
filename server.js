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

  let filePath = req.url === '/' ? '/index.html' : req.url;
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
