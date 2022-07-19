"use strict";

//casos muy especificos - break, continue
//Hay que evitar utilizar esto, y tener un buen control del codigo.
let lista = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    continue;
  }
  console.log(lista[i]);

  if (lista[i] > 5) {
    break;
  }
}

//Cual es el ambito de un bucle
//las variables declaradas dentro de un bucle solo existen dentro del bucle y no fuera de el.
console.log(i);
