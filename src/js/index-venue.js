import Venue from './models/Venue';
import * as venueView from './views/venueView';
import { elements, renderLoader, clearLoader } from './views/base';

import '../sass/app.scss';

// Venue controller
const controlVenue = async () => {
  const id = window.location.search.substring(4);
  // Prepare UI
  renderLoader(elements.coffeeShop);
  // Create new venue

  // POTREBAN JE ID DA SE PROSLEDI U PRAVOM OBJEKTU
  // ALI ZA SADA JE DEFAULT DA NE BIH TROSIO
  // PREMIUM REQUEST

  const venueDetails = new Venue();

  try {
    // Get venue data
    await venueDetails.getVenue();
    console.log(venueDetails);
    // Render Venue
    // console.log(venue);
    clearLoader();
    venueView.renderVenue(venueDetails);

    // Get tips
    //    await venue.getTips();

    // Render Tips
    //  venueView.renderTips(venue.tips);

    // Get hours
    // DODATI KASNIJE recimo
    // venue.getHours()

    // Render Hours MAYBE?
  } catch (error) {
    alert('Error getting venue details');
  }
};

// get venue and render on load
controlVenue();
