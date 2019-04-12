import axios from 'axios';

// This'll be needed in real request
// import { clientId, clientSecret } from '../helpers/config';

export default class Venue {
  // NIJE POTREBAN DEFAULT URL U PRAVOM REQUST
  // OVO JE PRIVREMENO
  constructor(id = '4c893ec5105237044947c7f1') {
    this.id = id;
    this.tips = {};
  }

  // PRIVREMENO DA NE BIH SLAO PREMIUM REQUEST
  // https://api.myjson.com/bins/1h2v10

  // PRAVI URL
  // `https://api.foursquare.com/v2/venues/${
  //  this.id
  // }?&v=20190323&client_id=${clientId}&client_secret=${clientSecret}`

  async getVenue() {
    try {
      const result = await axios(`https://api.myjson.com/bins/1h2v10`);
      // eslint-disable-next-line prefer-destructuring
      const venue = result.data.response.venue;
      this.name = venue.name;
      this.address = venue.location.address;
      this.city = venue.location.city;
      this.phone = venue.contact.formattedPhone;
      this.hours = venue.hours.status;
      this.price = {
        currency: venue.price.currency,
        message: venue.price.message,
        tier: venue.price.tier
      };
      this.rating = venue.rating;
      this.color = venue.ratingColor;
      this.likes = venue.likes.count;
      this.website = venue.url;
      this.image = `${venue.bestPhoto.prefix}${venue.bestPhoto.width}x${venue.bestPhoto.height}${
        venue.bestPhoto.suffix
      }`;
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
