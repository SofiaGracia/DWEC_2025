export function Equip(args) {
    this.nom = args.nom;
    this.jugadors = args.jugadors;
}

Equip.prototype.getNom = function () {
    return this.nom;
}

Equip.prototype.setNom = function (nom) {
    this.nom = nom;
}

Equip.prototype.getJugadors = function () {
    return this.jugadors;
}

Equip.prototype.posa = function (jugador) {

    const existeix = this.getJugadors().some((jug) => jugador.sonIguals(jug));
    if (!existeix) {
        this.jugadors.push(jugador);
        jugador.setEquip(this);
    }
}

Equip.prototype.lleva = function (jugador) {

    const existeix = this.getJugadors().some((jug) => jugador.sonIguals(jug));
    if (existeix) {
        this.jugadors.slice(jugador, 1);
        jugador.setEquip(null);
    }
}

Equip.prototype.toString = function () {
    let missatge = `Equip dels ${this.nom}:\n`;

    for (const jugador of this.getJugadors()) {
        const misJug = `\t- ${jugador.getString()}\n`;
        missatge += misJug;
    }

    console.log(missatge);
}
