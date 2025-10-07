//8. Ordena alfabèticament un vector de noms.

var nomsPrimer = ['Ana','anabel','teresa','Tomàs','Roser','Jose','Felicidad','Pep'];
console.log(nomsPrimer.sort());


//*************************** */

// O bé, segons: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const noms = ['Ana','anabel','teresa','Tomàs','Roser','Jose','Felicidad','Pep'];

//Creem un array temporal que té objectes amb posició y valor d'ordenament
const mapped = noms.map(function (el, i) {
    return {'index': i, 'value':el.toLowerCase()};
});

//Ara ordenem este array mapejat, no podem fer-ho amb sort pq té objectes així que tenim 
//que gastar una funció de comparació:
mapped.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;//Els dos són iguals
});

//Ara creem una variable result amb l'array noms segons els indexs ordenats de mapped
const result = mapped.map(function (el) {
    return noms[el.index];
});

console.log(result);