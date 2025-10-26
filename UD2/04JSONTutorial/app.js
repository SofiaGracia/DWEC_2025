// JSON que conté informació sobre els ports de muntanya
const portsMuntanya = {
    "pirineus": [
        {
            "id": 1,
            "nom": "Col du Tourmalet",
            "altitud": 2115,
            "desnivell": 1404,
            "dificultat": "Alta",
            "url_foto": "https://exemple.com/imatges/tourmalet.png",
            "localitzacio": "França"
        },
        {
            "id": 2,
            "nom": "Port de la Bonaigua",
            "altitud": 2072,
            "desnivell": 1050,
            "dificultat": "Mitjana",
            "url_foto": "https://exemple.com/imatges/bonaigua.png",
            "localitzacio": "Espanya"
        },
        {
            "id": 3,
            "nom": "Col d'Aubisque",
            "altitud": 1709,
            "desnivell": 1200,
            "dificultat": "Alta",
            "url_foto": "https://exemple.com/imatges/aubisque.png",
            "localitzacio": "França"
        }
    ],
    "alps": [
        {
            "id": 1,
            "nom": "Col du Galibier",
            "altitud": 2642,
            "desnivell": 1240,
            "dificultat": "Alta",
            "url_foto": "https://exemple.com/imatges/galibier.png",
            "localitzacio": "França"
        },
        {
            "id": 2,
            "nom": "Passo dello Stelvio",
            "altitud": 2758,
            "desnivell": 1808,
            "dificultat": "Molt Alta",
            "url_foto": "https://exemple.com/imatges/stelvio.png",
            "localitzacio": "Itàlia"
        },
        {
            "id": 3,
            "nom": "Alpe d'Huez",
            "altitud": 1850,
            "desnivell": 1120,
            "dificultat": "Mitjana",
            "url_foto": "https://exemple.com/imatges/alpe_d_huez.png",
            "localitzacio": "França"
        }
    ],
    "pics_europa": [
        {
            "id": 1,
            "nom": "Lagos de Covadonga",
            "altitud": 1120,
            "desnivell": 920,
            "dificultat": "Alta",
            "url_foto": "https://exemple.com/imatges/covadonga.png",
            "localitzacio": "Espanya"
        },
        {
            "id": 2,
            "nom": "Puerto de San Glorio",
            "altitud": 1609,
            "desnivell": 1200,
            "dificultat": "Mitjana",
            "url_foto": "https://exemple.com/imatges/san_glorio.png",
            "localitzacio": "Espanya"
        },
        {
            "id": 3,
            "nom": "Puerto de Pandetrave",
            "altitud": 1562,
            "desnivell": 950,
            "dificultat": "Mitjana",
            "url_foto": "https://exemple.com/imatges/pandetrave.png",
            "localitzacio": "Espanya"
        }
    ]
};

// Funció per recórrer el JSON i generar el contingut HTML
function mostrarPorts() {
    const contenidor = document.getElementById("ports");

    // Recorrem cada serralada (Pirineus, Alps, Pics d'Europa)
    for (const serralada in portsMuntanya) {
        const ports = portsMuntanya[serralada];

        // Afegim el títol de la serralada
        const titolSerralada = document.createElement("h2");
        titolSerralada.textContent = serralada.charAt(0).toUpperCase() + serralada.slice(1);
        contenidor.appendChild(titolSerralada);

        // Recorrem els ports dins de cada serralada
        ports.forEach(port => {
            const divPort = document.createElement("div");
            divPort.classList.add("port");

            // Afegim la imatge del port
            const imatge = document.createElement("img");
            imatge.src = port.url_foto;
            imatge.alt = port.nom;
            divPort.appendChild(imatge);

            // Afegim el nom del port
            const titol = document.createElement("h3");
            titol.textContent = port.nom;
            divPort.appendChild(titol);

            // Afegim altres detalls del port
            const detalls = document.createElement("p");
            detalls.innerHTML = `
        <span class="title">Altitud:</span> ${port.altitud} m<br>
        <span class="title">Desnivell:</span> ${port.desnivell} m<br>
        <span class="title">Dificultat:</span> ${port.dificultat}<br>
        <span class="title">Localització:</span> ${port.localitzacio}
      `;
            divPort.appendChild(detalls);

            // Afegim el div del port al contenidor principal
            contenidor.appendChild(divPort);
        });
    }
}

// Executem la funció per mostrar els ports a la pàgina
mostrarPorts();