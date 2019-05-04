import Venue from './models/Venue';
import * as venueView from './views/venueView';
import { elements, renderLoader, clearLoader } from './views/base';
import { renderMap, getLocation } from './helpers/helpers';

import '../sass/app.scss';

// Venue controller
const controlVenue = async () => {
  const id = window.location.search.substring(4);

  // Create new venue
  const venue = new Venue(id);

  // get position coords
  const position = await getLocation();
  const myLat = position.coords.latitude;
  const myLng = position.coords.longitude;

  // Prepare UI
  renderLoader(elements.map);

  try {
    // Get venue data
    await venue.getVenue();
    console.log(venue);
    // Prepare UI
    clearLoader();

    // Render Venue
    venueView.renderVenue(venue);

    // render map
    renderMap(myLat, myLng, venue.coords);

    // Render Tips
    venueView.renderTips(venue);
  } catch (error) {
    alert('Error getting venue details');
  }
};

// get venue and render on load
controlVenue();
