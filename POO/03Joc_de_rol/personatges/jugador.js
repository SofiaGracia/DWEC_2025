export function Jugador(args) {

    // console.log(`Sóc el constructor de Jugador però estic creant un ${this.constructor.name}`);

    this.nom = args['nom'];
    this.puntsAtac = args['puntsAtac'];
    this.puntsDefensa = args['puntsDefensa'];
    this.vides = args['vides'];
    this.equip = args['equip'];
}

// En esta versió de Javascript pre ECS6 estaria bé definir els getters i els setters així?
Jugador.prototype.getNom = function () {
    return this.nom;
}

Jugador.prototype.setNom = function (nom) {
    this.nom = nom
}

Jugador.prototype.getPuntsAtac = function () {
    return this.puntsAtac;
}

Jugador.prototype.setPuntsAtac = function (pA) {
    this.puntsAtac = pA;
}

Jugador.prototype.getPuntsDefensa = function () {
    return this.puntsDefensa;
}

Jugador.prototype.setPuntsDefensa = function (pD) {
    this.puntsDefensa = pD;
}

Jugador.prototype.getVides = function () {
    return this.vides;
}

Jugador.prototype.setVides = function (vides) {
    this.vides = vides;
}

Jugador.prototype.getEquip = function () {
    return this.equip;
}

Jugador.prototype.setEquip = function (equip) {
    this.equip = equip;
    if (equip == null) {
        equip.lleva(this);
    } else {
        equip.posa(this);
    }
}

Jugador.prototype.getString = function () {
    return `${this.nom}[${this.equip === undefined ? 'No té equip' : this.equip.getNom()}] (${this.constructor.name}, PA:${this.puntsAtac}, PD:${this.puntsDefensa}, PV:${this.vides})`;
}

//Sobreescriure el mètode toString():
Jugador.prototype.toString = function () {
    console.log(this.getString());
}

// primitive data types are compared by value.
// non-primitive data types are compared by reference.
//No fem control de jugador ni si el nom pot ser null o undefined
//Un juagador serà igual a un altre si té el mateix nom
Jugador.prototype.sonIguals = function (jugador) {
    return jugador.getNom().toLowerCase().trim() === this.getNom().toLowerCase().trim();
};

Jugador.prototype.cridarAtacar = function (jugador) {
    jugador.esColpejatAmb(this.puntsAtac);
    this.esColpejatAmb(jugador.getPuntsAtac());
}

Jugador.prototype.ataca = function (jugador) {

    //Una alternativa més moderna és definir showMissatge com una arrow function,
    //ja que les arrow functions no creen el seu propi this; hereten el this del context on s’han definit.
    const showMissatge = () => {
        console.log(`Atacant: ${this.getString()} `);
        console.log(`Atacat: ${jugador.getString()}`);
    }

    //Abans de l'atac
    console.log("ABANS DE L'ATAC");
    showMissatge();

    console.log('\nATAC:')
    this.cridarAtacar(jugador);

    //Després de l'atac
    console.log("\nDESPRÉS DE L'ATAC");
    showMissatge();
}

Jugador.prototype.esColpejatAmb = function (quantitat) {

    let missatge = `${this.nom} és colpejat amb ${quantitat} punts i es defén amb ${this.puntsDefensa}. `;
    let diferencia = this.getPuntsDefensa() - quantitat;
    this.puntsDefensa = diferencia;
    if (diferencia < 0) {
        this.puntsDefensa = 0;
        let novesVides = (this.vides + diferencia) < 0 ? 0 : this.vides + diferencia;
        missatge += `Vides: ${this.vides} ${diferencia} = ${novesVides}`;
        this.vides = novesVides;
    }
    console.log(missatge);
}