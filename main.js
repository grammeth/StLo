// This file initializes the Leaflet map and sets up the view and layers.

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();