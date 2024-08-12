function initMap() {
    // Crear un mapa vacío con una vista centrada en el mundo
    const map = new google.maps.Map(document.getElementById("map2"), {
        zoom: 15,
        center: { lat: -34.397, lng: 150.644 },
    });

    // Intenta obtener la ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var data1 = 9.993241136060128;
                var data2 = -84.20251844948919;
                const pos = {

                    lat: data1,
                    lng: data2,


                };

                // Mueve el mapa a la ubicación del usuario
                map.setCenter(pos);

                // Añade un marcador en la ubicación del usuario
                new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: "Tu ubicación actual",
                });
            },
            () => {
                handleLocationError(true, map.getCenter());
            }
        );
    } else {
        // El navegador no soporta geolocalización
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    new google.maps.InfoWindow({
        content: browserHasGeolocation
            ? "Error: El servicio de geolocalización falló."
            : "Error: Tu navegador no soporta la geolocalización.",
        position: pos,
    }).open(map);
}
