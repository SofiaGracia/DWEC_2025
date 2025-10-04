// Crea un programa que simule un camp de mines en una quadrícula de 5x5.
// Hi ha 10 bombes amagades a coordenades aleatòries.
// L'usuari ha d'introduir les coordenades X i Y, i el programa indicarà si hi ha una bomba o no en aquesta posició.
// El joc continuarà fins que es descobrisquen totes les bombes o l'usuari decideixi parar.

// Retorna un número enter aleatori entre min (inclòs) i max (exclòs)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const prompt = require('prompt-sync')();

//Primer que tot cree el camp de mines
var files = 5;
var columnes = 5;
var taulerVisible = [];
const segur = 's';
const bomba = 'B';
const marcat = 'x';
var quantitatBombes = 10;

function mostrarTaulerVisible() {
    // console.log(' 1|2|3|4|5|');
    // for (var i = 0; i < columnes; i++) {

    //     console.log(i + 1);
    //     taulerVisible[i] = [];
    //     for (var j = 0; j < files; j++) {

    //         console.log(taulerVisible[i][j]);
    //     }
    // }
}

//Inicialitzem el tauler visible
for (var i = 0; i < columnes; i++) {
    taulerVisible[i] = [];
    for (var j = 0; j < files; j++) {
        taulerVisible[i][j] = segur;
    }
}

console.log(taulerVisible);

//Necessite dos matrius
var taulerInvisible = [];
for (var i = 1; i <= columnes; i++) {
    taulerInvisible[i] = [];
    for (var j = 1; j <= files; j++) {
        taulerInvisible[i][j] = segur;
    }
}

//Ara he de posar les bombes
var contBombes = 0;
while (contBombes < quantitatBombes) {

    //Un num aleatori
    var coorCol = getRandomInt(1, 5);
    //Un num aleatori
    var coorFil = getRandomInt(1, 5);

    if (taulerInvisible[coorCol][coorFil] == segur) {
        taulerInvisible[coorCol][coorFil] = bomba;
        contBombes++;
    }
}

//El joc continuarà fins que es descobrisquen totes les bombes o l'usuari decideixi parar.
var seguir_jugant = true;
while (quantitatBombes > 0 && seguir_jugant) {

    var resposta = prompt('Seguir jugant? (s/S/n/N): ');
    if (resposta == 'n' || resposta == 'N'){
        seguir_jugant = false;
    }

    var resCol = parseInt(prompt('Coordenada Y: '));
    var resFil = parseInt(prompt('Coordenada X: '));

    console.log('');
    console.log(typeof (resCol), typeof (resFil));
    console.log('El que hi ha: ', taulerInvisible[resCol][resFil]);
    console.log('');

    var missatge = "";
    if (taulerInvisible[resCol][resFil] == bomba) {
        quantitatBombes--;
        missatge = 'Has marcat una bomba';
        console.log(missatge);
        taulerVisible[resCol - 1][resFil - 1] = bomba;

    } else {

        missatge = 'No hi ha bomba';
        console.log(missatge);
        taulerVisible[resCol - 1][resFil - 1] = marcat;
    }
    console.log(taulerVisible);
}