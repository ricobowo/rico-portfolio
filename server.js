// Server statis sederhana menggunakan modul bawaan Node.js
// Tidak memerlukan npm install — langsung bisa dijalankan
const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname; // Folder tempat server.js berada

// Peta ekstensi file ke MIME type (agar browser tahu cara menampilkan file)
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.pdf':  'application/pdf',
  '.woff2':'font/woff2',
};

http.createServer(function (req, res) {
  // Bersihkan URL dari query string, decode %20 dll.
  var urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Jika root (/), serve index.html
  if (urlPath === '/') urlPath = '/index.html';

  var filePath = path.join(ROOT, urlPath);
  var ext      = path.extname(filePath).toLowerCase();
  var mimeType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, function (err, data) {
    if (err) {
      // File tidak ditemukan — kembalikan 404
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + urlPath);
    } else {
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    }
  });

}).listen(PORT, '127.0.0.1', function () {
  console.log('Portfolio dev server running at http://localhost:' + PORT);
});
