const map = L.map('map').setView([51.505, -0.09], 10);

const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(map);

navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  console.log(latitude);
  console.log(longitude);
});