//2. Repeteix l'exercici anterior però has de crear la matriu a partir de tres files i afegir-les una a una fent ús del mètode push().
var files = 3;
var columnes = 5;

var matriu = [];

for (i = 1; i <= files; i++) {

    var f = 'f'.concat(i);

    var fila = [];

    for (j = 1; j <= columnes; j++) {
        var c = 'c'.concat(j);

        fila[j] = f.concat(c);
    }

    matriu.push(fila);
}

//Recorrer la matriu:
matriu.forEach((fila) => {
    fila.forEach((columna) => process.stdout.write(columna)); //https://stackoverflow.com/questions/6157497/printing-to-console-without-a-trailing-newline
    console.log('\n');
});