import Venue from './models/Venue';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};

// Venue controller
const controlVenue = async () => {
  const id = window.location.search.substring(4);
  if (id) {
    // Prepare UI

    // Create new venue

    // POTREBAN JE ID DA SE PROSLEDI U PRAVOM OBJEKTU
    // ALI ZA SADA JE DEFAULT DA NE BIH TROSIO
    // PREMIUM REQUEST

    state.venue = new Venue();

    try {
      // Get venue data
      await state.venue.getVenue();

      // Get tips
      // DODATI KASNIJE recimo
      // state.venue.getTips()

      // Get hours
      // DODATI KASNIJE recimo
      // state.venue.getHours()

      // Render venue
      console.log(state.venue);
    } catch (error) {
      alert('Error getting venue details');
    }
  }
};

// get venue and render on load
controlVenue();
