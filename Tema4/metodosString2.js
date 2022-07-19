"use strict";

//Métodos de cadenas de texto (Parte 2)

let input = "GEMINIS";
let db = "geminis";

console.log(input === db);

//Para que las dos sean iguales podemos utilizar toLowerCase() - toUpperCase()

console.log(input.toLowerCase());
console.log(input.toLowerCase() === db);

console.log(db.toUpperCase() === input);

let texto1 = "Hola soy el texto 1";
let texto2 = `Hola soy el texto 2`;

//concatenaciones:
let misTextos = texto1 + " " + texto2;
console.log(misTextos);

console.log(`${texto1} ${texto2}`);

//Eliminar espacios al principio al final: trim()
let espacios = "  soy un string con espacios al principio y al final.     ";
console.log(espacios.length);
console.log(espacios.trim().length);

//Obtener la letra que hay en cierta posicion:
let letra = "Hola soy otra frase de prueba";
console.log(letra.charAt(5));
//otra forma:
console.log(letra[5]);

//Obtener una palabra dentro de una cadena: indexof()
let palabra =
  "Hola soy Alejandro y tengo dos perros. El nombre de los perros es Goku y Mika";
console.log(palabra.indexOf("perros"));
console.log(palabra.charAt(31));
//para conseguir la ultima palabra que buscamos si se repite: .lastIndexOf()
console.log(palabra.lastIndexOf("perros"));
