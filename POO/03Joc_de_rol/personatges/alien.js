import { Jugador } from "./jugador.js";

export function Alien(...args) {

    Jugador.apply(this, args);
}

Alien.prototype = Object.create(Jugador.prototype);
Alien.prototype.constructor = Alien;

Alien.prototype.ataca = function (jugador) {
    if (this.getVides() > 20) {
        this.setPuntsAtac(this.getPuntsAtac() + 3);
        this.setPuntsDefensa((this.getPuntsDefensa() - 3) > 0 ? this.getPuntsDefensa() - 3 : 0);
    }

    Jugador.prototype.ataca.call(this, jugador);
}