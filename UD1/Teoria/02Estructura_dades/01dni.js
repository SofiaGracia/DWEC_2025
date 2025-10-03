var div = 23;
var maxNum = 99999999;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const prompt = require('prompt-sync')();
var numDni = prompt('Numero del dni: ');

if (numDni < 0 || numDni > maxNum) {
    console.log('Error en el numero posat');
} else {
    var lletra = prompt('Lletra del dni (Majúscula): ');

    var resto = numDni % div;

    var lletraTrobada = letras[resto];

    var missatge = lletraTrobada == lletra ? 'Lletra correcta' : 'Lletra incorrecta';
    console.log(missatge);
}

