//  Los métodos estáticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase.
//  Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distancia(puntoA, puntoB) {
        let dx = puntoA.x - puntoB.x;
        let dy = puntoA.y - puntoB.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log(Punto.distancia(p1,p2));