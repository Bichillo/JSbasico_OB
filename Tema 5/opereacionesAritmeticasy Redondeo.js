"use strict";

//----------------------------principales operaciones aritméticas----------------
let a = 3.5;
let b = 4.8;

//suma (+)
console.log(a + b);

//resta
console.log(a - b);

//multiplicacion
console.log(a * b);

//división
console.log(a / b);

//---------------------------Representacion de los numeros en cadenas de texto-------------------------
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//---------------------------------------Redonde de numeros decimales------------------------------
let c = 3.3;
let d = c * 3;
console.log(d);

//.toFixed(x). Limitar el numero de decimales al valor de x.
console.log(d.toFixed(2)); //hay que tener cuidado porque nos convierte a string el valor
console.log(typeof d.toFixed(2));

//.toPrecision(x). Realiza un redondeo cientifico al valor de x.
let e = 189.12345656;
let f = 32423423423;
console.log(e.toPrecision(2));
console.log(f.toPrecision(2));

console.log(typeof e.toPrecision(2));
//--------------------------tanto el .precision como el .fixed nos devuelven strings---------------------------
