//Funcions
/** 
 * Desactivar la pantalla d'inici i mostrar la pantalla de productes
*/
function loadProductScreen() {
    const startScreen = document.querySelector('#start-screen');
    const productScreen = document.querySelector('#product-screen');

    startScreen.classList.remove('active');
    productScreen.classList.add('active');
}

// Retorna un número enter aleatori entre min (inclòs) i max (exclòs)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Obtindre la ruta a una imatge segons l'event que s'haja seleccionat
 * @param {*} e 
 * @returns 
 */
function getProductSite(e) {

    var imageSite = './images/';
    var targetSite = '';

    //Segons el id del botó traurem la ruta de la foto d'un directori
    switch (e.currentTarget.id) {
        case 'addgreen':
            targetSite = 'green/';
            break;
        case 'addpro':
            targetSite = 'pro/';
            break;
        case 'addsauce':
            targetSite = 'sauce/';
            break;
    }
    targetSite += getRandomInt(1, 4) + '.jpg';
    imageSite += targetSite;

    return imageSite;
}

/**
 * Eliminar la imatge
 * @param {*} e 
 */
function removeImage() {
    this.parentNode.removeChild(this);
}

/**
 * Crear el tag img i afegir-lo al div amb id 'products'
 * @param {*} e 
 */
function addProductToScreen(e) {

    //Div en el que s'inclouran les imatges
    const divProduct = document.querySelector('#products');

    //Creem l'element img
    const imgEl = document.createElement('img');

    //Li posarem la classe css amanida
    imgEl.classList.add('product-item');

    //Obtenim la ruta a la imatge i la definim en l'atribut src
    imgEl.src = getProductSite(e);

    imgEl.addEventListener('dblclick', removeImage);

    divProduct.appendChild(imgEl);

}

/**
 * Netejar la pantalla de elements de l'amanida
 */
function clearScreen() {

    //Div en el que s'inclouen les imatges
    const divProduct = document.querySelector('#products');
    divProduct.innerHTML = "";
}

//1. Que primer carregue tot
window.onload = function () {

    const startButton = document.querySelector('#startbtn');
    startButton.addEventListener('click', loadProductScreen);

    const greenButton = document.querySelector('#addgreen');
    const proButton = document.querySelector('#addpro');
    const sauceButton = document.querySelector('#addsauce');

    greenButton.addEventListener('click', addProductToScreen);
    proButton.addEventListener('click', addProductToScreen);
    sauceButton.addEventListener('click', addProductToScreen);

    const resetButton = document.querySelector('#resetbtn');
    resetButton.addEventListener('click', clearScreen);

}