import { forEach, randomInt } from "mathjs";

var arrayRandom = [];
for (var i = 0; i < 15; i++) {
    var num = randomInt(0, 100);
    arrayRandom.push(num);
}

console.log(arrayRandom)

//Trobar el màxim
var max = arrayRandom[0];
arrayRandom.forEach((num) => max = num > max ? num : max);
console.log('Max: ',max);

//Ordenar de menor a major
var arrayOrdenat = [];
var index = 0;
var min = arrayRandom[0];

for (var j = 0; j < 15; j++) {
    for (var i = 0; i < arrayRandom.length; i++) {
        if (arrayRandom[i] < min) {
            min = arrayRandom[i];
            index = i;
        }
    }
    arrayRandom.splice(index, 1);
    arrayOrdenat.push(min);
    min = max;
}

console.log(arrayOrdenat);
