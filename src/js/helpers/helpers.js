import { elements, renderError } from '../views/base';

function error(err) {
  let message;
  switch (err.code) {
    case err.PERMISSION_DENIED:
      message =
        'The request for Geolocation is denied. Please reload app and be so kind to give us your location.';
      break;
    case err.POSITION_UNAVAILABLE:
      message =
        'Location information is unavailable.<br>Try reload app or check your hardware for supporting geolocation.';
      break;
    case err.TIMEOUT:
      message = 'The request to get user location timed out.<br>Try reload app.';
      break;
    case err.UNKNOWN_ERROR:
      message = 'An unknown error occurred. Try hard reset app.';
      break;
    default:
      message = 'An unknown error occurred. Try hard reset app.';
  }
  renderError(message);
}

// NEED to add proper Resolve and Reject funtions
export const getLocation = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, error);
  });
};

export const renderMap = (lat, lng, results) => {
  // reset map on new results
  document.getElementById('mapid').innerHTML =
    "<div id='map' style='width: 100%; height: 100%;'></div>";

  const map = L.map('map');

  const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osmAttribution =
    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors,' +
    ' <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
  const osmLayer = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttribution });

  function clickZoom(e) {
    map.setView(e.target.getLatLng(), 14);
  }
  map.setView(new L.LatLng(lat, lng), 14);
  map.addLayer(osmLayer);
  // map.scrollWheelZoom.disable();

  L.marker([lat, lng], { riseOnHover: true })
    .bindTooltip('User location', { sticky: true })
    .openTooltip()
    .addTo(map);

  results.forEach(el => {
    L.marker([el.venue.location.lat, el.venue.location.lng], {
      title: el.venue.name,
      riseOnHover: true
    })
      .addTo(map)
      .bindPopup(
        `<a href="venue.html?id=${el.venue.id}" title="View coffee shop details">${
          el.venue.name
        }</a>`,
        { closeButton: false }
      )
      .on('click', clickZoom);
  });
};
