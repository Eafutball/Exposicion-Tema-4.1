// Inicializar el mapa
const map = L.map('map').setView([51.505, -0.09], 13); // Latitud, Longitud y Nivel de Zoom

// Agregar una capa de mapa (aquí usamos OpenStreetMap como ejemplo)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Función para obtener y mostrar la ubicación actual del usuario
function showUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            // Centrar el mapa en la ubicación actual
            map.setView([latitude, longitude], 13);

            // Agregar un marcador en la ubicación actual
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('Estás aquí.')
                .openPopup();

            // Opcional: Agregar un círculo para representar un área alrededor de la ubicación actual
            L.circle([latitude, longitude], {
                color: 'blue',
                fillColor: '#00f',
                fillOpacity: 0.3,
                radius: 500
            }).addTo(map);
        }, error => {
            // Manejo de errores de geolocalización
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error('El usuario denegó la solicitud de geolocalización.');
                    alert('Permiso de geolocalización denegado.');
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error('La información de la ubicación no está disponible.');
                    alert('La información de la ubicación no está disponible.');
                    break;
                case error.TIMEOUT:
                    console.error('La solicitud de geolocalización ha expirado.');
                    alert('La solicitud de geolocalización ha expirado.');
                    break;
                case error.UNKNOWN_ERROR:
                    console.error('Se produjo un error desconocido.');
                    alert('Se produjo un error desconocido.');
                    break;
            }
        });
    } else {
        console.error('La geolocalización no es soportada por tu navegador.');
        alert('La geolocalización no es soportada por tu navegador.');
    }
}

// Llamar a la función para mostrar la ubicación actual
showUserLocation();

// Agregar varios marcadores
const locations = [
    { lat: 51.5, lng: -0.09, popup: 'Marker 1' },
    { lat: 51.51, lng: -0.1, popup: 'Marker 2' },
    { lat: 51.49, lng: -0.08, popup: 'Marker 3' }
];

locations.forEach(loc => {
    L.marker([loc.lat, loc.lng]).addTo(map)
        .bindPopup(loc.popup)
        .on('error', (e) => {
            console.error('Error al agregar el marcador:', e);
        });
});

// Agregar un círculo
L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)
  .on('error', (e) => {
      console.error('Error al agregar el círculo:', e);
  });

// Agregar un polígono
const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

polygon.bindPopup('Un polígono.')
       .on('error', (e) => {
           console.error('Error al agregar el polígono:', e);
       });

