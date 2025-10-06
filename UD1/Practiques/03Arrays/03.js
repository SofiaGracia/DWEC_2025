//3. Genera un array de 100 números aleatoris sencers entre 0 i 9. Conta el número de vegades que apareix cadascun dels dígits i mostra-ho per consola.
// Retorna un número enter aleatori entre min (inclòs) i max (exclòs)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var arrayAleatori = [];
for (i = 0; i < 100; i++) {
    arrayAleatori[i] = getRandomInt(0, 10);
}

for (i = 0; i < 10; i++){
    var cont = 0;
    for(j = 0; j < arrayAleatori.length; j++){
        if (i == arrayAleatori[j]){
            cont++;
        }
    }
    console.log('El numero ', i, ' apareix ', cont, ' voltes');
}