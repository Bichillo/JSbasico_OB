"use strict";
//variable que contenga tu altura en centímetros (entero)
let alturaCmt = 168;

//variable que contenga tu altura en metros (número de coma flotante)
let alturaMt = 1.68;

//variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 62.2;

//variable que contenga tu altura en metros redondeada hacia arriba
let alturaMtRedondeada = Math.ceil(alturaMt);
console.log(alturaMtRedondeada);

//variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoKgRedondeado = Math.floor(pesoKg);
console.log(pesoKgRedondeado);

//variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max = Number.MAX_VALUE;
let max2 = Number.MAX_VALUE + 1;
console.log(max === max2);
