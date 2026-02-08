const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = Number.parseInt(process.env.PORT || process.argv[2] || '8000', 10);
// Bind to IPv4 loopback so `localhost` works even on systems where `::1` and `127.0.0.1`
// resolve differently (common on Windows).
const HOST = process.env.HOST || process.argv[3] || '127.0.0.1';
const MAX_PORT_BUMP = 50; // Try up to DEFAULT_PORT + MAX_PORT_BUMP
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.jfif': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(PUBLIC_DIR, filePath);

  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`404: ${filePath}`);
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        console.error(`500: ${filePath}`);
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      console.log(`200: ${filePath}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

let port = Number.isFinite(DEFAULT_PORT) ? DEFAULT_PORT : 8000;
let bumped = 0;

server.on('listening', () => {
  const addr = server.address();
  const actualPort = typeof addr === 'object' && addr ? addr.port : port;
  console.log(`Server running at http://${HOST}:${actualPort}/`);
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
