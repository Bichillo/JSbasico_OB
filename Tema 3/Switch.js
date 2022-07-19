"use strict";
//Switch
//Nos permite en funcion de un valor poner varias condiciones

//sentencias Switch
let nota = 5;

switch (nota) {
  case 5:
    console.log("Buen trabajo, has obtenido sobresaliente");
    break;
  case 4:
    console.log("casi has aprobado");
    break;
  case 3:
    console.log("no te has esforzado lo suficiente");
    break;
  case 2:
    console.log("Esfuerzate mas");
    break;
  case 1:
    console.log("No has estudiado nada");
    break;
  default:
    console.log("Error");
    break;
}

//Es bueno por defecto siempre poner un default
