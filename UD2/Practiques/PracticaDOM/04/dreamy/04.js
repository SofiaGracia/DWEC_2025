// Exercici 04.js
window.onload = function () {

    //3. Esborra el contingut del <div> que té per id="content" i fes que aparega una imatge aleatòria cada vegada que carregues la pàgina.
    const parentDiv = document.getElementById('content');
    parentDiv.innerHTML = "";

    const urlImage = "https://picsum.photos/200";

    const imgTag = document.createElement('img');
    imgTag.src = urlImage;

    parentDiv.appendChild(imgTag);
}