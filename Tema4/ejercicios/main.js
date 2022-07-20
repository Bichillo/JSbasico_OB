"use strict";

//Una cadena de texto con tu Nombre
let nombre = "mi nombre es Alejandro";

//cadena de texto con tu Apellido
let apellido = "mis apellidos son Molina Ramos";

//cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `Hola ${nombre} y ${apellido}`;
console.log(estudiante);

//cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMin = estudiante.toLowerCase();
console.log(estudianteMin);

//variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numletras = estudiante.length;
console.log(numletras);

//variable que contenga la primera letra del Nombre
let primeraletra = nombre.indexOf("Alejandro");
console.log(primeraletra);
let primLetraNom = nombre[13];
console.log(primLetraNom);

//variable que contenga la última letra del Apellido
let ultimaLetra = apellido.length - 1;
console.log(ultimaLetra);
let ultLetraApe = apellido[29];
console.log(ultLetraApe);

//cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacios = estudiante.trim();
console.log(sinEspacios);

// variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let booleana = estudiante.includes(nombre);
console.log(booleana);
