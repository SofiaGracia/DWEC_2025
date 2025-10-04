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

while (cont < num_a_generar){

    //Generem un num aleatori
    var num_alea = getRandomInt(1, 9);

    var ja_existeix = false;
    numeros.forEach((num) => {
        if (num == num_alea){
            ja_existeix = true;
            return;
        }
    });

    if (!ja_existeix){
        numeros.push(num_alea);
        cont++;
    }

}

console.log(numeros);

var input = prompt('Introdueix 6 numeros (num, num, ...): ');
var num_input = input.split(',');

if (num_input.length != 6){
    console.log("No s'han introduit 6 numeros");
}else{

    for(i = 0; i < num_input.length; i++){
        num_input[i] = parseInt(num_input[i].trim());
        if(isNaN(num_input[i])){
            console.log("No s'han introduit 6 numeros");
            break;
        }
    }
}

var encertats = [];

for (i = 0; i < num_input.length; i++){

    var actual = num_input[i];
    console.log(actual);
    var llevar_numero = null;

    for (j = 0; j < numeros.length; j++){

        console.log('Numero amb que es compara: ', numeros[j]);

        if(actual == numeros[j]){
            console.log(actual == numeros[j]);
            encertats.push(actual);
            llevar_numero = j;
            break;
        }
    }
    if (llevar_numero != null){
        numeros.splice(llevar_numero, 1);
    }
}

console.log('Has encertat els seguents números: ', encertats);