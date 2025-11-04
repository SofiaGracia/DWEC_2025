window.onload = function () {

    // config map
    let config = {
        minZoom: 7,
        maxZoom: 18,
    };
    // magnification with which the map will start
    const zoom = 15;
    // coordinates
    const lat = 39.203730036261575;
    const lng = -0.3098216444630166;

    // calling map
    const map = L.map("map", config).setView([lat, lng], zoom);

    // Used to load and display tile layers on the map
    // Most tile servers require attribution, which you can set under `Layer`
    var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);// Afegim com a base layer
    // Also note that when using multiple base layers, only one of them should be added to the map at instantiation


    var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
    });

    // Tres farmacies en Sueca
    var f1 = L.marker([39.20343429702482, -0.30675579163439387]).bindPopup('Farmacia Rogi Llopis');
    var f2 = L.marker([39.20184634106436, -0.3102171311007655]).bindPopup('Farmacia Alejandra Piera Ventura');
    var f3 = L.marker([39.200242969022895, -0.3116565025924832]).bindPopup('Farmacia Ferrando');

    // Tres supermercats en Sueca
    var s1 = L.marker([39.204218636752785, -0.3164298553760007]).bindPopup('Mercadona');
    var s2 = L.marker([39.20012506020163, -0.30985732755035994]).bindPopup('Ca Senseloni');
    var s3 = L.marker([39.20191858982726, -0.30785324547194876]).bindPopup('Consum');

    // Now you have a cities layer that combines your city markers into one layer you can add or remove from the map at once.
    var farmacies = L.layerGroup([f1, f2, f3]).addTo(map);
    var supermercats = L.layerGroup([s1, s2, s3]).addTo(map);

    var baseMaps = {
        "OpenStreetMap": osm,
        "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
    };

    var overlayMaps = {
        "Farmacies": farmacies,
        "Supermercats": supermercats
    }

    // Note that we added osm and cities layers to the map but didn’t add osmHOT.
    //  The layers control is smart enough to detect what layers we’ve already added and
    //  have corresponding checkboxes and radioboxes set.
    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

    // Finally, you can add or remove base layers or overlays dynamically:
    var p1 = L.marker([39.20620164412539, -0.30974637652791037]).bindPopup("Parc de l'Estació");
    var p2 = L.marker([39.204830765814535, -0.3142694624827464]).bindPopup("Jardins del Sequial");

    var parcs = L.layerGroup([p1, p2]);
    var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
    });

    layerControl.addBaseLayer(openTopoMap, "openTopoMap");
    layerControl.addOverlay(parcs, "Parcs")
}