// Fes un programa que genere 6 números aleatoris (sense repetir) entre 1 i 49,
// simulant una aposta de la primitiva.
// A continuació, l'usuari haurà d'introduir 6 números i el programa indicarà quants encerts ha tingut respecte als números generats aleatòriament.

// Retorna un número enter aleatori entre min (inclòs) i max (exclòs)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const prompt = require('prompt-sync')();

var num_a_generar = 6;
var cont = 0;
var numeros = [];

//Generem els numeros aleatoris
while (cont < num_a_generar) {

    //Generem un num aleatori
    var num_alea = getRandomInt(1, 50);

    var ja_existeix = false;
    numeros.forEach((num) => {
        if (num == num_alea) {
            ja_existeix = true;
            return;
        }
    });

    if (!ja_existeix) {
        numeros.push(num_alea);
        cont++;
    }

}

console.log(numeros);

function checkNumberNotAllowed(nums) {
    var num_incorrectes = false;
    for (i = 0; i < nums.length; i++) {
        nums[i] = parseInt(nums[i].trim());
        if (isNaN(nums[i]) || nums[i] < 1 || nums[i] > 49) {
            console.log("els números no son vàlids");
            num_incorrectes = true;
            break;
        }
    }
    return num_incorrectes;
}

var num_input = []

do {

    //Demanem els numeros
    var input = prompt('Introdueix 6 numeros (num, num, ...): ');
    num_input = input.split(',');
    if (num_input.length != 6) {
        console.log("No s'han introduit 6 numeros");
    }

} while (num_input.length != 6 || checkNumberNotAllowed(num_input));

var encertats = [];

for (i = 0; i < num_input.length; i++) {

    var actual = num_input[i];
    var llevar_numero = null;

    for (j = 0; j < numeros.length; j++) {

        if (actual == numeros[j]) {
            // console.log(actual == numeros[j]);
            encertats.push(actual);
            llevar_numero = j;//Obtenim l'index per llevar-lo dels numeros ja que ja s'ha acertat
            break;
        }
    }
    if (llevar_numero != null) {
        numeros.splice(llevar_numero, 1);
    }
}

console.log('Has encertat els seguents números: ', encertats);
