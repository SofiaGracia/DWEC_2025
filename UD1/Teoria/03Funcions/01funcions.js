// Escriure el codi d'una funció a la qual es passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. 
// Mostra per pantalla el resultat retornat per la funció.

// function mostrar_parell(n){
//     var missatge = n % 2 == 0? 'És parell':'És imparell';
//     console.log(missatge);
// }
const prompt = require('prompt-sync')();
// var num = prompt('Numero: ');
// mostrar_parell(num)

// Definir una funció que mostri informació sobre una cadena de text que se li passa com a argument.
// A partir de la cadena que se li passa, la funció determina si aquesta cadena està formada només per majúscules,
//  només per minúscules o per una barreja de totes dues.

// function mostrar_maj_min(cad) {

//     cad.trim()

//     if (cad.length == 0) {
//         console.log('Cadena buida');
//         return;
//     }

//     var len_cadena = cad.length;

//     var min = false;
//     var maj = false;

//     for (i = 0; i < len_cadena; i++) {
//         var car = cad.charAt(i);
//         var carMaj = car.toUpperCase();

//         if (car == carMaj) {
//             maj = true;
//         } else {
//             min = true;
//         }
//     }

//     var mis;
//     if (min && maj) {
//         mis = 'Conté majúscules i minúscules';
//     } else if (min) {
//         mis = 'Conté sols minúscules';
//     } else {
//         mis = 'Conté sols majúscules';
//     }

//     console.log(mis);

// }
// var cadena = prompt('Cadena: ');
// mostrar_maj_min(cadena);

// Definir una funció que determini si la cadena de text que se li passa com a paràmetre és un palíndrom,
//  és a dir, si es llegeix de la mateixa manera des de l'esquerra i des de la dreta.
//  Exemple d'palíndrom complex:"La ruta nos aporto otro paso natural".

function es_palindrom(input) {

    function recorrer_palindrom(palindrom_net) {

        //Obtenim la meitat del palíndrom
        var meitat = palindrom_net.length / 2;
        var origen = meitat - 1;
        var j = meitat;
        for (i = origen; i >= 0; i--) {
            var car1 = palindrom_net.charAt(i);
            var car2 = palindrom_net.charAt(j);
            j++;
            if (car1 != car2) {
                return false;
            }
        }
        return true;

    }

    var pal_net = input.replace(/ /g, '');
    if (pal_net.length % 2 != 0) {
        var index_lletra_mig = (pal_net.length - 1) / 2;

        //Llevar la lletra del mig
        pal_net = pal_net.replace(pal_net.charAt(index_lletra_mig), '');
    }
    var resultat = recorrer_palindrom(pal_net) ? 'És palíndrom' : 'No és palíndrom';
    console.log(resultat);
}
var input = prompt('Palíndrom: ');
es_palindrom(input.toLowerCase());
