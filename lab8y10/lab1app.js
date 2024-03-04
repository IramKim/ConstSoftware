const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
  fs.readFile('../lab1bulma.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Hubo un error al leer el archivo');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}
else if (req.url === "/juego") {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Juego</h1>');
    }
else {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('No se encuentra la pagina');
  }
});


server.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});