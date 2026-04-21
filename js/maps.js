var map = L.map('map').setView([48.78860952,2.36372527], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([48.78860952,2.36372527]).addTo(map);
marker.bindPopup("<b>Efrei</b><br>").openPopup();