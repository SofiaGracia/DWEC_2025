//10. Enunciat: "Genera una matriu on cada fila serà el nom d'un producte i el seu preu en euros. Posa el preu
//entre 0 i 100€. Aplica les funcions necessàries per a, a partir d'aquesta matriu, obtindre altra 
//matriu amb aquells productes que el seu preu siga major de 75€ i s'haja aplicat una rebaixa del   
//10%."

// Retorna un número enter aleatori entre min (inclòs) i max (exclòs)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//1. Genere la matriu
const nomProductes = ['caminadora','escaner','bossa','vestit','sabates','patinet','mancuernes'];
// const original = [];

// for (let fila = 0; fila < nomProductes.length; fila++){
//     original[fila] = [];
//     original[fila][0] = nomProductes[fila];
//     original[fila][1] = getRandomInt(0,101);
// }

//Haguera pogut fer també:
const original = nomProductes.map((nom) => [nom, getRandomInt(0,101)]);
console.log('ORIGINAL:')
console.log(original);
console.log();

//2. Ara fem la matriu amb preus rebaixats al 10%
const rebaixat = original.map(function (fila) {
    var rebaixa = getRandomInt(0,2);
    return rebaixa == 1 ? [fila[0], fila[1] - (fila[1] * 0.1)]: [fila[0], fila[1]];
});

console.log('REBAIXAT:');
console.log(rebaixat);
console.log();
//Aquells productes que el seu preu siga major de 75€
// const preuMajor75 = original.map(function (fila) {
//     if (fila[1] > 75){
//         return [fila[0], fila[1]]
//     }
// }); //Em dona undefined

// const preuMajor75 = original.filter((fila) => fila[1] > 75);//Pero no sé com fer lo de la rebaixa del 10% si no tenim els preus originals
// console.log(preuMajor75);

//3. Ara apliquem el filtre
const matriuRequisits = rebaixat.filter(function (el, i){
    var preuOriginal = original[i][1];

    var preuAComparar = preuOriginal - (preuOriginal *0.1);
    return el[1] > 75 && el[1] == preuAComparar;
});

console.log('FINAL:');
console.log(matriuRequisits);
console.log();