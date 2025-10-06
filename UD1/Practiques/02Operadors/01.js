const prompt = require('prompt-sync')();

//1. Fes un programa que demane una número entre 0 i 50 i retorne el seu quadrat
var num1 = prompt('Numero entre 0 - 50: ');
console.log(Math.pow(Number(num1),2));
// Tbé pot ser Number(num1)**2

//2. Fes un programa que demane un número i comprove si és un número enter
var num2 = prompt('Indica un numero: ');
console.log(Number.isInteger(Number(num2)));

//3. Fes un programa que demane un número, que comprove si realment és un número i redondege a dos xifres decimals
var num3 = prompt('Indica un numero: ');
var n3 = Number(num3);
if(Number.isNaN(n3)){
    console.log('No es un numero');
} else {
    console.log(n3.toFixed(2));
}

//4. Fes un programa que demane un número enter, comprove si ho és i el convertisca en un float
var num4 = prompt('Indica un numero: ');
var n4 = Number(num4);
if(Number.isInteger(n4)){
    var numConvertit = Number.parseFloat(n4)
    console.log(numConvertit);
} else {
    console.log('No es un numero enter');
}

//5. Fes un programa que demane el radi, comprove que és un número i si ho és calcule l'àrea de la circunferència fent ús de PI
var radiInput = prompt('Indica el radi: ');
var radi = Number(radiInput);
if (Number.isNaN(radi)){
    console.log('No es un numero');
} else {
    //A = pi * (radi**2)
    var pi = Math.PI;
    var radiQ = radi ** 2;
    console.log("L'area del cercle és: ", pi*radiQ);
}

//6. Fes un programa que demane dos números, comprove quin és el major i el menor, faça la divisió i mostre el resultat total, el de la part entera i el resto.
var num6 = prompt('Indica un numero: ');
var num7 = prompt('Indica un numero: ');

var min = Math.min(num6, num7);
console.log('El minim és: ', min);
console.log('El major és: ', Math.max(num6, num7));

