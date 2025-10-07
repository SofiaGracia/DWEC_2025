//9. Fes un vector de noms. Amb filter() torna un vector que tinga aquells noms amb 6 o més lletres.
var noms = ['Ana','anabel','teresa','Tomàs','Roser','Jose','Felicidad','Pep'];

const nomsLlargs = noms.filter((nom) => nom.length >= 6);
console.log(nomsLlargs);