//1. Crea una matriu de 3 files i 5 columnes. 
// El contingut de les cel·les ha de ser un indicador de la fila i la columna de manera que la primera fila quede f1c1, f1c2, f1c3...
//Recorre tota la matriu empalmant dos forEach() i mostra el resultat en consola.
var files = 3;
var columnes = 5;

var matriu = [];

for (i = 1; i <= files; i++) {

    var f = 'f'.concat(i);

    matriu[i] = [];

    for (j = 1; j <= columnes; j++) {
        var c = 'c'.concat(j);

        matriu[i][j] = f.concat(c);
    }
}

matriu.forEach((fila) => {
    fila.forEach((columna) => console.log(columna));
});