// Exercici 02.js
window.onload = function () {

    //Em puc quedar els elements en un array
    var textos = [];

    //1. Canvia dinàmicament el text del menú principal i els menús secundaris.
    const textModificat = 'Text Modificat';
    const divMenu = document.querySelector('#menu');
    const ulMenu = divMenu.querySelector('div > ul');
    const liElements = ulMenu.getElementsByTagName('li');
    //No puc gastar un forEach pq getElementsByTagName torna un collectionHTML
    //La funció querySelectorAll() retorna un NodeList que sí que es pot recorrer amb un forEach
    for (let i = 0; i < liElements.length; i++) {
        const aTags = liElements[i].getElementsByTagName('a');
        for (let j = 0; j < aTags.length; j++) {
            aTags[j].innerText = textModificat;
            textos.push(aTags[j]);
        }
    }

    //2. Canvia el color de la lletra dels menús dinàmicament.
    for (i = 0; i < textos.length; i++) {
        textos[i].style.color = "lightblue";
    }

    //3. Esborra el contingut del <div> que té per id="content" i fes que apareguen tres paragrafs predefinits per tu.  
    const divABuscar = document.getElementById('content');
    divABuscar.innerHTML = "";

    var nouDiv = document.createElement('div');
    for (i = 0; i < 3; i++) {

        var contenido = document.createTextNode("Hola Mundo!");
        var parrafo = document.createElement('p');

        parrafo.appendChild(contenido);
        nouDiv.appendChild(parrafo);

    }

    //Estil del nou div:
    nouDiv.style.padding = "5px 10px";
    nouDiv.style.textAlign = "justify";

    divABuscar.appendChild(nouDiv);
}