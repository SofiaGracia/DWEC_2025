// Fes un programa que vaja demanant números a l'usuari.
// El programa sumarà aquests números fins que la suma arribe o supere els 1000.
// Quan això passe, el programa mostrarà la suma final i es tancarà.

const prompt = require('prompt-sync')();
var suma = 0;

while (suma < 1000){
    var quantitat = prompt('Indica una quantitat: ');
    suma += parseInt(quantitat);
}

console.log('La suma final és ', suma);