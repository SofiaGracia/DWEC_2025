// Programa un joc breu per a aprendre les capitals de 15 paissos europeus.
//  Has d'introduir el nom del país i el programa et respondrà la capital. 
// El programa acabarà d'executar-se quan introduisques la cadena eixir.

const prompt = require('prompt-sync')();
var pais = prompt('País: ');

switch (pais) {
    case 'Andorra':
        console.log('La capital és Andorra La Vella');
        break;
    case 'Espanya':
        console.log('La capital és Madrid');
        break;
    case 'Italia':
        console.log('La capital és Roma');
        break;
    case 'França':
        console.log('La capital és Paris');
        break;
    case 'Alemania':
        console.log('La capital és Berlin');
        break;
    case 'Portugal':
        console.log('La capital és Lisboa');
        break;
    case 'Anglaterra':
        console.log('La capital és Londres');
        break;
    case 'Rumania':
        console.log('La capital és Bucarest');
        break;
    case 'Bulgaria':
        console.log('La capital és Sofia');
        break;
    case 'Grecia':
        console.log('La capital és Atenes');
        break;
    case 'Dinamarca':
        console.log('La capital és Copenhage');
        break;
    case 'Suissa':
        console.log('La capital és Berna');
        break;
    case 'Suecia':
        console.log('La capital és Estocolmo');
        break;
    case 'Noruega':
        console.log('La capital és Oslo');
        break;
    case 'Belgica':
        console.log('La capital és Brusseles');
        break;
    case 'eixir':
        console.log('Eixir');
        break;
    default:
        console.log('El joc no inclou ' + pais + '.');
}
