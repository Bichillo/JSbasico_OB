"use strict";

//labels (estas no son las mejores practicas para utilizar bucles, incluyendo break y continue)
//las etiquetas o labels nos permiten nombrar los bucles for o while,
//de esa maner los podemos utilizar de manera mas controlada

//ejemplo
let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleunidades: while (true) {
    console.log(`Èl numero actual es: ${decenas}${unidades}`);
    unidades++;
    if (unidades === 10) {
      unidades = 0;
      break bucleunidades;
    }
    if (decenas === 2) {
      break bucleDecenas;
    }
  }
  decenas++;
}

console.log("Ya hemos terminado");
