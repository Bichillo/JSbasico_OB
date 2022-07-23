"use strict";

//Metodos cadenas de texto (parte 3)
//https://regexr.com
//Expresiones regulares

//obtener todas las instancias de una palabra
let textolargo = `Así, los casos confirmados y notificados en Canarias desde el inicio de la alerta y hasta hoy quedan del siguiente modo:
92 casos confirmados,
62 en Gran Canaria, 28 en Tenerife y dos en Fuerteventura; un caso probable, pendiente de confirmación, notificado en Gran Canaria,
y dos casos sospechosos, pendientes de confirmación,
uno notificado en Tenerife y otro en Gran Canaria.`;

//OJO, tambien busca en palabras que contenga lo que buscas
console.log(textolargo.match(/Tenerife/g));

//Metodo especifico que nos dice si existe o no: includes()
console.log(textolargo.includes("pene"));

//Saber si un texto empieza con una palabra
console.log(textolargo.startsWith("Hola"));

//Saber si un texto termina con una palabra
console.log(textolargo.endsWith("Canaria."));
