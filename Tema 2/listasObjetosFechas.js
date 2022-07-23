"use strict";

// Listas y array:
//Una lista es un conjunto de variables puestas en orden.
const lista = [1, "hola", true, null, undefined];
const lista2 = new Array(1, "hola", true, null, undefined);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//destructuring:
let listas = { lista, lista2 };
console.log(listas);

// objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "Samsung",
  esBlanco: false,
  contactos: ["Alejandro", "Goku", "Mika"],
  tarjeta: {
    marca: "sandisk",
    almacenamiento: 128,
  },
};
//Podemos añadir nuevos valores:
movil.tarjeta.año = 2019;

//Tambien podemos editar:
movil.marca = "Xiaomi";
console.log(movil.marca);

console.log(movil.tarjeta.marca);
console.log(movil.tarjeta);

//Fechas
//Librerias de apoyo: Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("junio 10 1986");
console.log(fecha_cadena);

const fecha_valores = new Date(1986, 5, 10); //con los valores cuenta desde 0.
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; // +1 por que empieza a contar desde 0.
const año = ahora.getFullYear();

console.log(dia, mes, año);
