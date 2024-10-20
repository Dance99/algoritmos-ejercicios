//solicita notas a el usuario//
let nota1 =parseFloat(prompt("ingresa la nota del 1er periodo"))
let nota2 =parseFloat(prompt("ingresa la nota del 2do periodo"))
let nota3 =parseFloat(prompt("ingresa la nota del 3er periodo"))

//calcular prom//
let promedio =(nota1 + nota2 + nota3)/3;

//muestra el promedio en la consola//
console.log("el promedio de las notas es:" + promedio)