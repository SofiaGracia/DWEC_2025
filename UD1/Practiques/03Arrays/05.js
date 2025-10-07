//5. Genera un array de 100 números aleatoris sencers entre 0 i 9. Fes que siguen 0 totes les caselles des de la 25 fins a la 75.
// Retorna un número enter aleatori entre min (inclòs) i max (exclòs)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var arrayNum = [];
for (i = 0; i < 100; i++) {
    var numAlea = getRandomInt(0, 10);

    if (i > 24 && i < 76) {
        numAlea = 0;
    }

    arrayNum.push(numAlea);
}

console.log(arrayNum);