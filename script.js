//Solicitar base y exponente//
let base =parseFloat(prompt("ingresa la base:"));
let exponente =parseFloat(prompt("ingresa el exponente:"));

//calcular el resultado de la potenciacion//
let resultado =Math.pow(base, exponente);

//mostrar el resultao con concatenacion de strings//
document.write("el resultado obtenido es " + resultado);