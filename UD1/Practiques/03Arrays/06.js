//6. Genera un vector amb noms d'animals. Demana per pantalla a l'usuari que introduisca un nom i determina si existeix al vector o no amb includes().
var animals = ['gos', 'gat', 'periquito', 'cranc', 'caragol'];

const prompt = require('prompt-sync')();

var nomInput = prompt("Indica un nom d'animal: ");

console.log('Existeix al vector: ', animals.includes(nomInput));