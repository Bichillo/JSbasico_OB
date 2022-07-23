"use strcit";
//Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3); //esto se llama casting, rara vez se utiliza

console.log(a);
console.log(b);
console.log(a + b);
console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

//-------------------------------------------------Nan - Infinity-------------------------------------------------
let n = Number("Hola");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor2 = null;
console.log(numerador / divisor2);

//Como vonvertir los string a valores numericos con Number(), parseInt() y parseFloat()
//          *Number*
let numero = "5";
let num2 = 2;
console.log(numero + num2); // aqui no esta haciendo la suma, solo concatenando
console.log(Number(numero) + num2); //aqui esta haciendo la suma, esta pasando el parametro string a number.

//         *parseInt*   (convierte una string a un numero entero, obviando los decimales).
let numero2 = "5.5";
console.log(parseInt(numero2));

//         *parseFloat* (convierte una string a un numero decimal, incluyendo los decimales).
console.log(parseFloat(numero2));

//Numeros hexadecimales (base 16)
//convertimos un numero hexadecimal a un numero
let hex = "0x3a5b7";
console.log(parseInt(hex));

//Obtner los valores maximo y minimo en JS
//.Epsilon - Valor muy pequeño para que sean iguales
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision); //Para saber el valor muy pequeño para que sean iguales, se usa .EPSILON
console.log(min_valor_JS); //Para saber el valor minimo de JS, se puede usar la funcion Number.MIN_VALUE
console.log(max_valor_JS); //Para obntener el valor maximo de un numero en JS, se utiliza Number.MAX_VALUE
