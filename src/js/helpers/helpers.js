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
  renderError(message, elements.errorWrapper);
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

  const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osmAttribution =
    'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
    ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
  const osmLayer = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttribution });

  let map = L.map('map', { scrollWheelZoom: false });
  map.setView(new L.LatLng(lat, lng), 15);
  map.addLayer(osmLayer);
  // map.scrollWheelZoom.disable();
  // const myIcon = L.icon({
  //   iconUrl: '../img/me.png',
  //   iconSize: [60, 60]
  // });
  L.marker([lat, lng]).addTo(map);

  const addMarker = (latt, lngt, name, id) => {
    const coords = [latt, lngt];
    L.popup({
      closeButton: false,
      autoClose: false,
      closeOnEscapeKey: false,
      closeOnClick: false,
      keepInView: true,
      className: 'marker'
    })
      .setLatLng(coords)
      .setContent(
        `<a href="venue.html?id=${id}" title="View details of this coffee shop">${name}</a>`
      )
      .addTo(map)
      .getPopup();
  };

  results.forEach(el => {
    // L.marker([el.venue.location.lat, el.venue.location.lng]).addTo(map);
    addMarker(el.venue.location.lat, el.venue.location.lng, el.venue.name, el.venue.id);
    // L.popup()
    //   .setLatLng([x.venue.location.lat, x.venue.location.lng])
    //   .setContent('I am a standalone popup.')
    //   .addTo(map);
  });

  function bringToFront() {
    this.style.zIndex += '1';
  }
  Array.from(document.querySelectorAll('.marker')).forEach(el => {
    el.addEventListener('click', bringToFront);
  });
};
