"use strict";

//Métodos mas utilizados con cadenas de caracteres:
//Obtener la longitud de un string:

let string = "Hola soy un string";
console.log(string.length);

//Obtener partes de cadenas de caracteres:
//slice(), substring(), substr(este ya no se usa)

let sliceString = string.slice(5, 10);
console.log(sliceString);

let sub_string = string.substring(5, 10);
console.log(sub_string);

//Reemplazar parte del contenido de una cadena de texto:
let cadena = "Hola mi nombre es Alejandro";

//Al utilizar strings solo reemplaza la primera instancia:
console.log(cadena.replace("Alejandro", "Goku"));

//Al utilizar la expresion regular /g (global), reemplaza todas las instancias:

let textolargo = `Así, los casos confirmados y notificados en Canarias desde el inicio de la alerta y hasta hoy quedan del siguiente modo:
92 casos confirmados,
62 en Gran Canaria, 28 en Tenerife y dos en Fuerteventura; un caso probable, pendiente de confirmación, notificado en Gran Canaria,
y dos casos sospechosos, pendientes de confirmación,
 uno notificado en Tenerife y otro en Gran Canaria.`;

console.log(textolargo.replace(/confirmados/g, "RETRASADOS"));
