"use strict";

//Buckles for: son los mas utilizados
// for (inicializacion; condicion; actualizacion) {
//esto es un bucle
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let lista = [1, 4, 6, 2, 7, 10, 12];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

//for of: es mas especifico
for (let valor of lista) {
  console.log(valor);
}

//for each: con funcion flecha, es mas eficiente que utilizar for of
lista.forEach((valor) => {
  console.log(valor);
});

//for in: se evalua cada uno de los atributos de un objeto
let persona = {
  nombre: "Alejandro",
  apellido1: "Molina",
  apellido2: "Ramos",
  edad: 36,
  isDeveloper: false,
};

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
