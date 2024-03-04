
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("hola");
    response.end(); 
});



//Una función que recibe un arreglo de números y devuelve el promedio
function calcularPromedio(arreglo) {
    const suma = arreglo.reduce((a, b) => a + b, 0);
    return suma / arreglo.length;
  }

const lista = [1,2,5,8];
console.log(calcularPromedio(lista));

//una función que reciba un string y escriba el string en un archivo de texto. Apoyate del módulo fs
const filesystem = require('fs');

function escribirArchivo(string) {
filesystem.writeFileSync('ArchivoOutput.txt', string);
}

escribirArchivo("Hola Mundo");

//un problema con solución en node. (Lector de archivos)
function leerArchivo(nombreArchivo) {
    const archivo = filesystem.readFileSync(nombreArchivo, 'utf-8');
    console.log(archivo);
}

leerArchivo('texto.txt');

server.listen(3000);

