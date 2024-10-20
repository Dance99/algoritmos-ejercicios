//funcion para calcular el area//
let base = parseFloat(prompt("ingresa la base del triangulo"))
let altura =parseFloat(prompt("ingresa la altura del triangulo"))

//calcular area
let area = (base * altura) /2;

//Mostrar el resultado mostrando concatenacion de strings//
document.write("el area del triangulo es " + area)