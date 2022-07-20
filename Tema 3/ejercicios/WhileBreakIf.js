"use strict";

let numero = 1;
let num = 1;

while ((numero = numero * num)) {
  num++;
  console.log(numero);
  break;
}
if (num > 10) {
  console.log(num);
}
