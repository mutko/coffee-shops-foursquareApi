function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
}

// NEED to add proper Resolve and Reject funtions
export const getLocation = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, error);
  });
};

export const buildMap = (lat, lng, results) => {
  // reset map on new results
  document.getElementById('mapid').innerHTML =
    "<div id='map' style='width: 100%; height: 100%;'></div>";

  const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttribution =
      'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
      ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    osmLayer = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttribution });

  let map = new L.Map('map');
  map.setView(new L.LatLng(lat, lng), 14);
  map.addLayer(osmLayer);
  map.scrollWheelZoom.disable();
  let marker = L.marker([lat, lng]).addTo(map);
  for (let i = 0; i < results.length; i += 1) {
    marker = new L.marker([results[i].venue.location.lat, results[i].venue.location.lng]).addTo(
      map
    );
  }
};
