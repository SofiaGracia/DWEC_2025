const prompt = require('prompt-sync')();
var arg = prompt('Nota: ');

var missatge = "";

if (arg < 0 || arg > 10) {
    missatge = "Error";
} else if (arg < 5){
    missatge = "Insuficent";
} else if (arg < 7) {
    missatge = "Bé";
} else if (arg < 9){
    missatge = "Notable";
} else {
    missatge = "Excel·lent";
}

console.log(missatge);