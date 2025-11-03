import { Huma } from "./huma.js";

export function Guerrer(...args) {

    Huma.apply(this, args);
}

Guerrer.prototype = Object.create(Huma.prototype);
Guerrer.prototype.constructor = Guerrer;

Guerrer.prototype.esColpejatAmb = function (quantitat) {

    let diferencia = this.getPuntsDefensa() - quantitat;

    if (diferencia < -5) {
        //Sí que crides al mètode superior
        Huma.prototype.esColpejatAmb.call(this, quantitat);
    } else {
        //Hem de llevar-li els punts de defensa
        console.log(`${this.nom} és colpejat amb ${quantitat} punts i es defén amb ${this.puntsDefensa} `);
        this.setPuntsDefensa(diferencia < 0 ? 0 : diferencia);
    }

}