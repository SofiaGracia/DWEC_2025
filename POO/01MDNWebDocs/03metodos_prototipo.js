// Métodos prototipo

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    //Getter
    get area() {
        return this.calcArea();
    }

    //Caculate and return area
    calcArea() {
        return this.alto * this.ancho;
    }
}

const cuadrado = new Rectangulo(2,6);

console.log(`Area del cuadrado => ${cuadrado.area}`);