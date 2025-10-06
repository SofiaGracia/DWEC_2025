//4. Genera un array de 25 números aleatoris sencers entre 0 i 100. Cap número es pot repetir. Mostra el resultat per consola.
// Retorna un número enter aleatori entre min (inclòs) i max (exclòs)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var arrayAleatori = [];
var quatitatNum = 25;

while (arrayAleatori.length < quatitatNum) {

    var numAleatori = getRandomInt(0, 101);
    var existeix = false;

    for (i = 0; i < arrayAleatori.length; i++) {
        if (arrayAleatori[i] == numAleatori) {
            existeix = true;
            break;
        }
    }

    if (!existeix) {
        arrayAleatori.push(numAleatori);
    }
}

console.log(arrayAleatori);