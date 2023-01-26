"use strict";
//Como trabajar con listas (arrays, arreglos, vectores)
let var1 = 45;
let array = [1, "Hola", false, { id: 5 }, null, undefined, var1];
console.log(array);

//Acceder a los valores de un array a traves de su posision
//array[indice]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//Metodos para introducir nuevos valores en nuestros arrays
//.push(), valores al final del array
array.push("final", "otro");
console.log(array);

//.unshift(), valores al inicio del array
array.unshift("inicio", "otro");
console.log(array);

//Metodos para eliminar valores en nuestros arrays
const array2 = [1, "Hola", false, { id: 5 }];
//.pop(), elimina el ultimo valor del array
array2.pop();
console.log(array2);

//.shift(), elimina el primer valor del array
array2.shift();
console.log(array2);

//Metodo para eliminar, modificar o añadir valores en un array
//.splice(indice, cantidad de elementos a eliminar, elementos a agregar)
const array3 = [1, 2, 3, 4, 5, 6];

//Eliminar valores .splice(indice, cantidad de elementos a eliminar)
array3.splice(2, 1);
console.log(array3);

//Añadir valores .splice(indice, 0, elementos a agregar)
array3.splice(2, 0, "nuevo");
console.log(array3);

//Modificar valores .splice(indice, cantidad de elementos a eliminar, elementos a agregar)
array3.splice(2, 1, "modificado", "otro");
console.log(array3);
