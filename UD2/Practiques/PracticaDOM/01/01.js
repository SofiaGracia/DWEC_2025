//Exercici 1

window.onload = function () {

  //1. Trau un alert informant del número de enllaços que hi ha
  const enllacos = document.getElementsByTagName("a");
  window.alert(`Número de enllaços: ${enllacos.length}`);

  //2. Modifica dinàmicament la imatge del logo
  //Buscarem per alt="Your logo goes here"
  const imagesLogo = document.querySelectorAll('img[alt="Your logo goes here"]');
  imagesLogo.forEach((tag) => tag.src = "images/logo2.gif");

  //3. Modifica dinàmicament els textos del menú principal
  const textModificat = 'Text Modificat';
  const divMenu = document.querySelector('#menu');
  const ulMenu = divMenu.querySelector('div > ul');
  const liElements = ulMenu.getElementsByTagName('li');
  //No puc gastar un forEach pq getElementsByTagName torna un collectionHTML
  //La funció querySelectorAll() retorna un NodeList que sí que es pot recorrer amb un forEach
  for (let i = 0; i < liElements.length; i++) {
    const aTag = liElements[i].getElementsByTagName('a');
    const spanTags = aTag[0].getElementsByTagName('span');
    for (let j = 0; j < spanTags.length; j++) {
      spanTags[j].innerHTML = textModificat;
    }
  }

  //4. Elimina dinàmicament la part dels favorite links.
  //Primer agafem totes les etiquetes h3
  const container = document.querySelector('div.floatRight.width25.lightBlueBg.horzPad');

  const h3Elements = container.querySelectorAll('h3');
  var text = "Favorite Links";
  h3Elements.forEach(h3 => {
    const contingut = h3.innerText;
    if(contingut == text.toUpperCase()){
      const ulSubmenu = h3.nextSibling.nextSibling;
      container.removeChild(ulSubmenu);
      container.removeChild(h3);
    }
  });
}