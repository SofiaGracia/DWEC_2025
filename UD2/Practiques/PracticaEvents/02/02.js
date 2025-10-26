const capitals = ['Armenia', 'Austria', 'Azerbaijan', 'Belgium', 'Estonia', 'France', 'Germany', 'Hungary', 'Iceland', 'India', 'Italy', 'Latvia', 'Luxemburgo', 'Netherlands', 'Poland', 'Russia', 'Switzerland'];

// Retorna un número enter aleatori entre min (inclòs) i max (exclòs)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function showCapital(e) {

    const cela = e.currentTarget;
    const imatge = cela.querySelector('img');
    const capital = capitals[parseInt(imatge.id)];
    alert(capital);
}

function getBanderesRandom(quantitatBanderes) {

    var numBanderes = [];

    while (numBanderes.length < quantitatBanderes) {
        const numRandom = getRandomInt(0, 17);

        if (!numBanderes.includes(numRandom)) {
            numBanderes.push(numRandom);
        }
    }

    return numBanderes;

}

function getBandera(numBandera) {

    //Controlar que si és menor de 10 afegir-li un 0 davant
    var iniRoute = './Images/';

    if (numBandera < 10) {
        iniRoute = iniRoute + '0';
    }

    return iniRoute + numBandera + '.jpg';
}

function createTable(e) {

    const numFilCol = e.currentTarget.innerText;

    //Primer llevem la pantalla inicial
    const iniScreen = document.querySelector('#start-screen');
    iniScreen.classList.remove('active');

    //I mostrem la pantalla de la taula
    const tableScreen = document.querySelector('#table-screen');
    tableScreen.classList.add('active');

    //Obtenim les banderes a posar
    const arrayBanderes = getBanderesRandom(numFilCol * numFilCol);

    //1. Necessitem un element table
    const taula = document.createElement('table');

    //2. Primer els row i després les columnes
    for (r = 0; r < numFilCol; r++) {

        const fila = document.createElement('tr');

        for (d = 0; d < numFilCol; d++) {

            const col = document.createElement('td');
            //col.innerText = 'Random';

            //Ara em d'afegir la bandera
            const bandera = document.createElement('img');

            //Obtenim un numero de l'array de banderes:
            var numB = arrayBanderes[0];
            bandera.id = numB;

            //Llevem el numero en la primera posició
            arrayBanderes.splice(0, 1);
            bandera.src = getBandera(numB);

            //Afegim la img al col
            col.appendChild(bandera);

            //Ací tindrem que dir lo de que amb el hover canvie de color
            col.addEventListener('mouseover', (event) => {
                event.currentTarget.style.backgroundColor = 'blue';
            });
            col.addEventListener('mouseout', (event) => {
                event.currentTarget.style.backgroundColor = '#f9eadc';
            });
            col.addEventListener('click', showCapital);

            fila.appendChild(col);
        }

        taula.appendChild(fila);
    }

    //3. Afegim la taula en el div que li correspon
    const tableDiv = document.querySelector('#table');
    tableDiv.appendChild(taula);
}

function createButtons(array_nivells) {

    //Obtenim on volem posar els botons:
    const divBotons = document.querySelector('#start-screen');

    //Creem els botons
    array_nivells.forEach(nivell => {

        //Creem l'element botó
        const boto = document.createElement('button');
        boto.innerText = nivell;
        boto.classList.add('boto');
        boto.addEventListener('click', createTable);

        //Afegim el botó
        divBotons.appendChild(boto);
    });
}


window.onload = function () {

    const nivells = [1, 2, 3, 4];

    //Primer que tot creem els botons
    createButtons(nivells);
}