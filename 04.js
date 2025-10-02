import { forEach, randomInt } from "mathjs";

/**
 * 
 */
var max = -1;
var index = 0;

var arrayOrdenat = [];
var array = [];
for (var i = 0; i < 15; i++) {
    var num = randomInt(0, 100);
    // console.log(num);
    array.push(num);
}

console.log(array)

for (var j = 0; j < 15; j++) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    array.splice(index, 1);
    arrayOrdenat.push(max);
    max = -1
}

console.log(arrayOrdenat);


