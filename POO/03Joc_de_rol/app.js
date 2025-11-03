import { Huma } from "./personatges/huma.js";
import { Guerrer } from "./personatges/guerrer.js";
import { Alien } from "./personatges/alien.js";
import { Equip } from "./altres/equip.js";

window.onload = function () {

    function Args(nom, puntsAtac, puntsDefensa, vides, equip) {
        this.nom = nom;
        this.puntsAtac = puntsAtac;
        this.puntsDefensa = puntsDefensa;
        this.vides = vides;
        this.equip = equip;
    }

    function provaFase4() {

        const e1 = new Equip({ nom: 'Amiguis', jugadors: [] });
        // const e2 = new Equip({ nom: 'Xuniors', jugadors: [] });

        // const a1 = new Alien(new Args('Roser', 2, 20, 30, e2));
        const h1 = new Huma(new Args('Sofia', 10, 10, 200));
        const g1 = new Guerrer({ nom: 'Teresa', puntsAtac: 3, puntsDefensa: 4, vides: 10});

        // e1.posa(h1);
        // e1.posa(g1);

        h1.setEquip(e1);
        g1.setEquip(e1);

        h1.toString();
        g1.toString();
        e1.toString();
    }
    provaFase4();
}