import Venue from './models/Venue';
import * as venueView from './views/venueView';
import { elements, renderLoader, clearLoader } from './views/base';

import '../sass/app.scss';

const state = {};

// Venue controller
const controlVenue = async () => {
  const id = window.location.search.substring(4);
  if (id) {
    // Prepare UI
    renderLoader(elements.coffeeShop);
    // Create new venue

    // POTREBAN JE ID DA SE PROSLEDI U PRAVOM OBJEKTU
    // ALI ZA SADA JE DEFAULT DA NE BIH TROSIO
    // PREMIUM REQUEST

    state.venue = new Venue();

    try {
      // Get venue data
      await state.venue.getVenue();
      // Render Venue
      // console.log(state.venue);
      clearLoader();
      venueView.renderVenue(state.venue);

      // Get tips
      await state.venue.getTips();

      // Render Tips
      venueView.renderTips(state.venue.tips);

      // Get hours
      // DODATI KASNIJE recimo
      // state.venue.getHours()

      // Render Hours MAYBE?
    } catch (error) {
      alert('Error getting venue details');
    }
  }
};

// get venue and render on load
controlVenue();
