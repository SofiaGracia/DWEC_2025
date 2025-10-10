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

function inicialitzarTauler(tauler) {
    for (var i = 0; i < columnes; i++) {
        tauler[i] = [];
        for (var j = 0; j < files; j++) {
            tauler[i][j] = segur;
        }
    }
}

//Inicialitzem el tauler visible
inicialitzarTauler(taulerVisible);
console.log(taulerVisible);

//Necessite dos matrius
var taulerInvisible = [];
inicialitzarTauler(taulerInvisible);


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
while (quantitatBombes > 0) {

    var resposta = prompt('Parar el joc? (s/S/n/N): ');
    if (resposta == 's' || resposta == 'S') {
        break;
    }

    var resCol = parseInt(prompt('Coordenada Y: '));
    var resFil = parseInt(prompt('Coordenada X: '));

    // console.log('');
    // console.log(typeof (resCol), typeof (resFil));
    // console.log('El que hi ha: ', taulerInvisible[resCol][resFil]);
    // console.log('');

    var missatge = "";
    if (taulerInvisible[resCol - 1][resFil - 1] == bomba) {

        //Comprovar que no s'haja marcat una bomba que ja s'ha descobert
        if (taulerVisible[resCol - 1][resFil - 1] == bomba) {
            console.log('Ja has marcat esta bomba');
        } else {
            quantitatBombes--;
            missatge = 'Has marcat una bomba';
            console.log(missatge);
            taulerVisible[resCol - 1][resFil - 1] = bomba;
        }

    } else {

        missatge = 'No hi ha bomba';
        console.log(missatge);
        taulerVisible[resCol - 1][resFil - 1] = marcat;
    }
    console.log(taulerVisible);
}

if (quantitatBombes == 0){
    console.log('***Has trobat les bombes***');
}