//Exercici 05.js
window.onload = function () {
    //Fes que aparega una taula amb el nom de 5 paissos i la seua capital. Els valors estaran guardats en un o vàrios vectors.
    const paisos = ['Alemanya', 'Espanya', 'Italia', 'Romania', 'Irlanda'];
    const capitals = ['Berlin', 'Madrid', 'Roma', 'Bucarest', 'Dublin'];

    const matriu = [];
    matriu[0] = paisos;
    matriu[1] = capitals;

    // const parentTable = document.createElement('table');
    var table = '<table>';
    table += '<th>Paisos</th><th>Capitals</th>'

    for (i = 0; i < paisos.length; i++) {
        // const linia = document.createElement('tr');
        var linia = '<tr>';

        for (j = 0; j < 2; j++) {
            // const casella = document.createElement('th');
            // const contingut = document.createTextNode(matriu[j][i]);

            // casella.appendChild(contingut);
            // linia.appendChild(casella);
            let casella = '<td>' + matriu[j][i] + '</td>'

            linia += casella;
        }

        // parentTable.appendChild(linia);

        linia += '</tr>';
        table += linia;
    }

    table += '</table>';

    // document.body.appendChild(parentTable);

    const divContent = document.getElementById('content');
    // divContent.appendChild(parentTable);
    divContent.innerHTML = table;
}