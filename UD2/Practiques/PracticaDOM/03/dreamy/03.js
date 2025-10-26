// Exercici 03.js
window.onload = function () {
    // Canvia dinàmicament el text del menú principal i els menús secundaris.
    var textosMenu = [];
    var textosSideBar = [];

    //1. Canvia dinàmicament el text del menú principal i els menús secundaris.

    const divMenu = document.querySelector('#menu');
    const ulMenu = divMenu.querySelector('div > ul');
    const liElements = ulMenu.querySelectorAll('li');

    const divSideBar = document.querySelector('#sidebar');
    const ulSideBar = divSideBar.querySelector('div > ul');
    const liSideBar = ulSideBar.querySelectorAll('li');

    //No puc gastar un forEach pq getElementsByTagName torna un collectionHTML
    //La funció querySelectorAll() retorna un NodeList que sí que es pot recorrer amb un forEach

    function modificarText(elements, nouArray) {

        const textModificat = 'Text Modificat';

        elements.forEach(li => {
            const aTags = li.querySelectorAll('a');
            aTags.forEach(a => {
                a.innerHTML = textModificat;
                nouArray.push(a);
            });
        });
    }

    modificarText(liElements, textosMenu);
    modificarText(liSideBar, textosSideBar);

    // 2. Canvia el color de la lletra dels menús dinàmicament fent ús d'un canvi de classe.
    // Puc definir un estil en l'arxiu styles.css o puc definir puc crear una classe css en este mateix arxiu
    const style = document.createElement('style');
    style.textContent = `#wrapper li.canvi a {color:red}`;
    document.head.appendChild(style);

    liElements.forEach(li => {
        li.classList.add('canvi');
    });

    liSideBar.forEach(li => {
        li.classList.add('canvi');
    });

    //3. Esborra el contingut del <div> que té per id="content" i fes que apareguen tres paragrafs predefinits per tu.
    const divAd = document.getElementById('ad-top');
    const divEntry = document.querySelector('.entry');
    divAd.parentNode.removeChild(divAd);
    divEntry.parentNode.removeChild(divEntry);

    const parentDiv = document.getElementById('content');
    for (i = 0; i < 3; i++){
        const contingut = document.createTextNode("Hola Mundo!");
        const par = document.createElement('p');

        par.appendChild(contingut);
        parentDiv.appendChild(par);
    }

}