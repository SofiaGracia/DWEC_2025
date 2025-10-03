const prompt = require('prompt-sync')();
var num = prompt('Numero: ');

var factorial = 1;
for (i = num; i > 1; i--){
    factorial *= i;
}

console.log('El factorial de ', num, ' és ', factorial);