// Una expresión de clase es otra manera de definir una clase.
// Las expresiones de clase pueden ser nombradas o anónimas.
// El nombre dado a la expresión de clase nombrada es local dentro del cuerpo de la misma.

let Rectangulo = class {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

console.log(Rectangulo.name);

let Rectangulo2 = class {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
}

console.log(Rectangulo2.name);