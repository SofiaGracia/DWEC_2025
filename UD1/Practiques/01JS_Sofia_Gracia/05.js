//Fes un programa que mostre un menú amb 5 opcions:

// Sumar
// Restar
// Multiplicar
// Dividir
// Eixir
// Quan es trie una operació (sumar, restar, multiplicar o dividir),
// el programa ha de demanar dos números i mostrar el resultat de l'operació.
// Si es tria l'opció Eixir, el programa es tancarà
const prompt = require('prompt-sync')();


function arreplega_args() {
    var num1 = prompt('Primer numero: ');
    var num2 = prompt('Segon numero: ');
    return [parseInt(num1), parseInt(num2)];
}

while (opcio != 5) {

    
    var menu = '1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir\n5.Eixir\nTria una opció:';
    var opcio = prompt(menu);

    switch (opcio) {
        case '1':
            var res = arreplega_args();
            console.log('Suma: ', res[0] + res[1]);
            break;
        case '2':
            var res = arreplega_args();
            console.log('Resta: ', res[0] - res[1]);
            break;
        case '3':
            var res = arreplega_args();
            console.log('Multiplicació: ', res[0] * res[1]);
            break;
        case '4':
            var res = arreplega_args();
            console.log('Divisió: ', res[0] / res[1]);
            break;
        case '5':
            console.log('Eixir');
            break;
        default:
            console.log("No s'inclou l'opció " + opcio + '.');
    }
}
