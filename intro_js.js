

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