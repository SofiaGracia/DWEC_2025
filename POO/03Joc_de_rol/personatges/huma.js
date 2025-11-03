import { Jugador } from "./jugador.js";

export function Huma(...args) {
    args[0].vides = args[0].vides > 100 ? 100 : args[0].vides;
    Jugador.apply(this, args);
}

Huma.prototype = Object.create(Jugador.prototype);
Huma.prototype.constructor = Huma;

