import axios from 'axios';
import { clientId, clientSecret } from '../helpers/config';

export default class Venue {
  // NIJE POTREBAN DEFAULT URL U PRAVOM REQUST
  // OVO JE PRIVREMENO
  constructor(id = '4c893ec5105237044947c7f1') {
    this.id = id;
    this.coords = []; // for lat and lng in buildMap()
    this.tips = {};
  }

  // PRIVREMENO DA NE BIH SLAO PREMIUM REQUEST
  // https://api.myjson.com/bins/1h2v10

  // PRAVI URL
  // `https://api.foursquare.com/v2/venues/${this.id}?&v=20190323&client_id=${clientId}&client_secret=${clientSecret}`

  async getVenue() {
    try {
      const result = await axios('https://api.myjson.com/bins/1h2v10');
      // eslint-disable-next-line prefer-destructuring
      const venue = result.data.response.venue;
      this.coords[0] = result.data.response;
      this.address = venue && venue.location && venue.location.address;
      this.city = venue && venue.location && venue.location.city;
      this.color = venue && venue.ratingColor;
      this.hours = venue && venue.hours && venue.hours.status;
      this.likes = venue && venue.likes && venue.likes.count;
      this.name = venue && venue.name;
      this.phone = venue && venue.contact && venue.contact.formattedPhone;
      this.currency = venue && venue.price && venue.price.currency;
      this.message = venue && venue.price && venue.price.message;
      this.tier = venue && venue.price && venue.price.tier;
      this.rating = venue && venue.rating;
      this.website = venue && venue.url;
      this.image =
        venue &&
        venue.bestPhoto &&
        venue.bestPhoto.prefix &&
        venue.bestPhoto.width &&
        venue.bestPhoto.height &&
        venue.bestPhoto.suffix &&
        `${venue.bestPhoto.prefix}${venue.bestPhoto.width}x${venue.bestPhoto.height}${
          venue.bestPhoto.suffix
        }`;
      // render map with new data
      // buildMap(lat, lng);
    } catch (error) {
      alert('Error in getting coffee shop DETAILS');
    }
  }

  async getTips() {
    try {
      const result = await axios('https://api.myjson.com/bins/92xf8');
      const tips = result.data.response.tips.items[0];
      this.tips.text = tips.text;
      this.tips.image = tips.photourl;
      this.tips.agree = tips.agreeCount;
      this.tips.disagree = tips.disagreeCount;
      this.tips.user = `${tips.user.firstName} ${tips.user.lastName}`;
      this.tips.userPhoto = `${tips.user.photo.prefix}240${tips.user.photo.suffix}`;
    } catch (error) {
      alert('Error in getting coffee shop TIPS');
    }
  }
}
