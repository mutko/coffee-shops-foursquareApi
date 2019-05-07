import Venue from './models/Venue';
import * as venueView from './views/venueView';
import { elements, renderLoader, clearLoader, renderError } from './views/base';
import { renderMap, getLocation } from './helpers/helpers';

import '../sass/app.scss';

// Venue controller
const controlVenue = async () => {
  const id = window.location.search.substring(4);

  const venue = new Venue(id);

  // Prepare UI
  renderLoader(elements.map);

  try {
    // Get venue data
    await venue.getVenue();

    clearLoader();

    venueView.renderVenue(venue);

    if (typeof Storage !== 'undefined') {
      // Code for localStorage/sessionStorage.
      renderMap(localStorage.getItem('userLat'), localStorage.getItem('userLng'), venue.coords);
    } else {
      // Sorry! No Web Storage support..
      const position = await getLocation();
      const myLat = position.coords.latitude;
      const myLng = position.coords.longitude;
      renderMap(myLat, myLng, venue.coords);
    }

    venueView.renderTips(venue);
  } catch (error) {
    const message =
      'Sorry! Page you search not exist. Try with different coffee shop. If problem continues then we probably exceeded details quota for today. To see details of this place try again tomorrow!';
    const humor = 'Hot coffee will wait here for you!';
    renderError(message, humor, 'search');
  }
};

// get venue and render on load
controlVenue();
