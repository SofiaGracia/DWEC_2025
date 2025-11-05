const portsMuntanya = [{
    "nom": "Ports dels Pirineus",
    "ports": [
        {
            "nom": "Tourmalet",
            "altitud": 2115,
            "longitud": 17,
            "pendent": 7.3,
            "desnivell": 1268,
            "coeficient": 315,
        },
        {
            "nom": "Coll de la Gallina",
            "altitud": 1910,
            "longitud": 11.76,
            "pendent": 8.36,
            "desnivell": 982,
            "coeficient": 263,
        }
    ]
}, {
    "nom": "Ports als Pics d'Europa",
    "ports": [
        {
            "nom": "Lagos de Covadonga",
            "altitud": 1124,
            "longitud": 13.9,
            "pendent": 6.92,
            "desnivell": 962,
            "coeficient": 268,
        },
        {
            "nom": "L'Angliriu",
            "altitud": 1572,
            "longitud": 12.4,
            "pendent": 10.21,
            "desnivell": 1266,
            "coeficient": 514,
        }
    ]
}
]

window.onload = function () {

    function MostarPorts(lloc) {
        console.log(lloc.nom);
    }

    //Mostrar el port seleccionat
    function gestionarMostrarPorts() {
        const opcioSeleccionada = document.querySelector('#seleccion').value;

        if (opcioSeleccionada != 0) {

            //Netejem el div on va el contingut dels ports
            const divPorts = document.querySelector('#ports');
            divPorts.innerHTML = '';

            if (opcioSeleccionada == 3) {
                MostarPorts(portsMuntanya[0]);
                MostarPorts(portsMuntanya[1]);
            } else {
                MostarPorts(portsMuntanya[opcioSeleccionada - 1]);
            }
        }
    }

    // Div principal
    const divPrincipal = document.querySelector('#contingut');

    let divsPerCrear = ['ports', 'buttons'];
    let divsCreats = divsPerCrear.map((tipus) => {
        const div = document.createElement('div');
        div.id = tipus;
        divPrincipal.appendChild(div);
        return div;
        //Afegir també el mateix estil
    });

    //Creem un div que contindrà el select
    const divSelect = document.createElement('div');
    divSelect.id = 'selectDiv';
    divsCreats[1].appendChild(divSelect);
    divSelect.addEventListener('click', gestionarMostrarPorts);

    // Creem i afegim al div el select, el botó de contacte i el de inici
    let elemConfig = [['select', 'seleccion', 'Seleccion', divSelect], ['button', 'contacteBtn', 'Contacte', divsCreats[1]], ['button', 'iniciBtn', 'Tornar estat inicial', divsCreats[1]]]
    let elements = elemConfig.map((valor) => {
        const element = document.createElement(valor[0]);
        element.id = valor[1];
        element.innerText = valor[2];
        valor[3].appendChild(element);
        return element;
    });

    // Creem les opcions per al select
    let opcions = ['---Selecciona una opció---', portsMuntanya[0].nom, portsMuntanya[1].nom, 'Tots els ports'];
    opcions.forEach((op, i) => {
        const opcio = document.createElement('option');
        opcio.value = i;
        opcio.innerText = op;
        elements[0].appendChild(opcio);
    });
}