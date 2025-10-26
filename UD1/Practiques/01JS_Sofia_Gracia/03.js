// Fes un programa que demane l'alçada (en metres) i el pes (en kg) d'una persona,
// i calcule el seu IMC (Índex de Massa Corporal) amb la fórmula

const prompt = require('prompt-sync')();

var metres = prompt('Indica els metres: ');
var pes = prompt('Indica el pes: ');

var imc = pes / (metres*metres);

if (imc < 18.5){
    console.log('Pes insuficient');
} else if (imc < 24.9) {
    console.log('Pes normal');
} else if (imc < 29.9) {
    console.log('Sobrepes');
} else {
    console.log('Obesitat');
}