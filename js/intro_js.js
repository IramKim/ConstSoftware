

console.log("hola mundo"); //imprime
console.info("Clash of Clans"); //info
console.warn("Cuidado con el ataque"); //warning
console.error("Error 404"); //error
console.assert(42 == 42); //condicion verdadera
console.assert(42 == "42"); //condicion verdadera tambien 
console.assert(42 == 43); //condicion falsa 
console.assert(42 === "42"); //condicion falsa con tres = (compara tipo de dato y valor)

//variables,constantes
//declarar variable de manera antigua
var luchadores = 20;
//declarar variable de manera moderna (mas segura)
let arqueras = 20;

//declarar constante (para q el usuario no cambie los valores)
const gigantes = 5;

//alert,prompt,confirm

alert("Ataque enemigo");
const nombre = prompt("¿Cual es tu nombre?");
console.log("Hola " + nombre);

const hambre = confirm("Tienes hambre?");
if (hambre) {
    console.log("Vamos a comer");
} else {
    console.log("No puedes jugar con el estomago vacio");
}

//funciones tradicionales
function atacar() {
    console.log("Atacar a los goblins");
}

atacar(); //llamada a la funcion


//funciones modernas (utilizando un apuntador con let y guardar la función en una variable)

//en el parentesis se pueden poner parametros
let accion = () => {
    console.log("Atacar a los peces");
}  

accion(); //llamada a la funcion

let accion_2 = (construccion) => {
    console.log("Construir " + construccion);
}

accion_2("muros"); //llamada a la funcion

//arreglos

const arreglo = ["Elemento"];
const arreglo2= new Array();

arreglo.push("Elemento 2");

const elemento = 8;
arreglo.push(elemento);

arreglo[10] = "Elemento 10";

//arreglos asociativos

arreglo["dos"] = 2;

console.log(arreglo);

//recorrido tradicional del arreglo

for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

//recorrido alternativo del arreglo
for(let valor of arreglo){ //of es para recorrer el valor
    console.log(valor);
}

for (let indice in arreglo){ //in es para recorrer el indice
    console.log(indice);
}

//Objetos

const objeto = {atributo1: "valor1", atributo2: "valor2"};
objeto.atributo3 = 3;
console.log(objeto);

//modificar html
document.write("xd");
