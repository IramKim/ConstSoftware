const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('../lab1bulma.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Hubo un error al leer el archivo');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});