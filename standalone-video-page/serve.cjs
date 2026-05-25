const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const port = Number(process.env.PORT || 4177);
const host = '127.0.0.1';
const root = __dirname;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
};

http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://${host}:${port}`);
    const relativePath = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname.slice(1));
    const filePath = path.resolve(root, relativePath);

    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      res.writeHead(200, {
        'content-type': types[path.extname(filePath)] || 'application/octet-stream',
      });
      res.end(data);
    });
  })
  .listen(port, host, () => {
    console.log(`Standalone video page running at http://${host}:${port}/`);
  });
