//7. A partir d'un vector de paraules genera un string amb totes les paraules unides.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// The forEach() method is an iterative method.
// It calls a provided callbackFn function once for each element in an array in ascending-index order.
// Unlike map(), forEach() always returns undefined and is not chainable.
// The typical use case is to execute side effects at the end of a chain. 

const paraules = ['ordinador', 'cpu', 'gpu', 'caragol', 'pantalla', 'gat', 'retolador'];

var paraulesTotes = "";

// console.log(paraulesTotes.concat('',paraules[0]));

// var totes = paraules.forEach((paraula) => paraulesTotes.concat('',paraula)); //Undefined
// var totes = paraules.map((paraula) => paraulesTotes.concat('',paraula)); //Nou array
// console.log(totes);


for (i = 0; i < paraules.length; i++){
    paraulesTotes = paraulesTotes.concat('',paraules[i]);
}

console.log(paraulesTotes);

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// console.log(paraules.join());