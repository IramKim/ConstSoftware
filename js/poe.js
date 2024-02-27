const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

let contador_corazones = 0;

const añadir_corazon = (event) => { // Añade 'event' como argumento
    if (contador_corazones < 20) {
        const span_corazon = event.target.nextElementSibling.querySelector('span');
        span_corazon.innerHTML += ' ❤️';
        contador_corazones++;
    } else {
        alert('LLegaste al limite maximo de corazones!');
    }
}

const botones_corazon = document.querySelectorAll(".boton_corazon");
botones_corazon.forEach(boton => {
    boton.addEventListener("click", añadir_corazon);
});


//Lab 4

const num_1 = () => {
    let num = parseInt(prompt("Dame un número al azar"));
    let tabla = document.createElement("tabla");
    for (let i = 1; i <= num; i++) {
        let fila = document.createElement("tr");
        let celda = document.createElement("td");
        celda.textContent = i;
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
    let contenedor = document.getElementById("Tabla1");
    contenedor.appendChild(tabla);
}

document.getElementById('Problema1').addEventListener('click', num_1);

const num_2 = () => {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let TiempoInicio = Date.now();
    let mensaje = parseInt(prompt("Dame la suma entre " + num1 + " y " + num2));
    let TiempoFinal = Date.now();
    let tiempoTotal = (TiempoFinal - TiempoInicio) / 1000;
    if (mensaje == num1 + num2) {
        alert("Correcto. Te tomo " + tiempoTotal + " segundos!");
    } else {
        alert("Incorrecto");
    }
}

document.getElementById('Problema2').addEventListener('click', num_2);


const transformarArreglo = () => {
    let arreglo = document.getElementById('Problema3');
    let arregloTexto = arreglo.value.split(",");
    let arregloInt = arregloTexto.map(num => parseInt(num));
    num_3(arregloInt);
}

const num_3 = (arreglo) => {
    let countNeg = arreglo.filter(num => num < 0).length;
    let countZero = arreglo.filter(num => num == 0).length;
    let countPos = arreglo.filter(num => num > 0).length;
    let resultado = "Números negativos: " +  countNeg + " Ceros: " + countZero + " Números positivos: " + countPos;

    let espacioResultado = document.getElementById("resultado");
    
    espacioResultado.textContent = resultado;
}

let arreglo3 = [[4,5,9],[8,3,4]];


const num_4 = (matriz) => {
    let promediosArray = [];

    for(let fila of matriz) {
        let suma = fila.reduce((a, b) => a + b, 0);
        let promedio = suma / fila.length;
        promediosArray.push(promedio);
    }

    return promediosArray;
}

let espacioResultado3 = document.getElementById("resultado2");

espacioResultado3.textContent = num_4(arreglo3);



const transformarArreglo2 = () => {
    let numerosArreglo = document.getElementById('Problema4');
    let numerosTexto = numerosArreglo.value.split("");
    let numerosInt = numerosTexto.map(num => parseInt(num));
    num_5(numerosInt);
}

const num_5 = (numeros) => {
    resultado = numeros.reverse();
    let espacioResultado4 = document.getElementById("resultado3");
    espacioResultado4.textContent = resultado;
}

//servidor

app.listen(3000);