
//fs es el módulo que contiene las funciones para manipular archivos

const filesystem = require('fs');

//Se escribe el segundo parámetro dentro del primer parámetro. Si el archivo no existe, se crea.
filesystem.writeFileSync('hola.txt', 'Hola Mundo');


//arreglo de numeros

const arreglo = [1000,300,3000,200,100,50];
//se recorre el arreglo y se imprime cada elemento con un delay de acuerdo a su valor en milisegundos
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}


//Node es asíncrono, por lo que el siguiente console.log se ejecutará antes de que se termine de imprimir el arreglo
console.log('En donde se ejecuta esta línea?');


//Se importa el módulo http
const http = require('http');

    const server = http.createServer((req, res) => {
    console.log(request.url); //Se imprime la url que se está solicitando
    response.setHeader('Content-Type', 'text/html'); //Se establece el tipo de contenido	
    response.write("hola");
    response.end(); //Se termina la respuesta
});



http.listen(3000); //Se pone a escuchar el servidor en el puerto 3000