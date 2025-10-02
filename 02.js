import { forEach, randomInt } from "mathjs";

var array = [];
for (var i = 0; i < 15; i++){
    var num = randomInt(0,100);
    console.log(num);
    array.push(num);
}

var max = array[0];
var min = array[0];

array.forEach((num) => {
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
});

console.log('Minim: ', min);
console.log('Maxim: ', max);