import axios from 'axios';
import { clientId, clientSecret } from '../helpers/config';

export default class Venue {
  // NIJE POTREBAN DEFAULT URL U PRAVOM REQUST
  // OVO JE PRIVREMENO
  constructor(id = '4c893ec5105237044947c7f1') {
    this.id = id;
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
      this.name = result.data.response.venue.name;
      this.address = result.data.response.venue.location.address;
      this.city = result.data.response.venue.location.city;
      this.phone = result.data.response.venue.contact.formattedPhone;
      this.website = result.data.response.venue.url;
      this.image = `${result.data.response.venue.bestPhoto.prefix}${
        result.data.response.venue.bestPhoto.width
      }x${result.data.response.venue.bestPhoto.height}${
        result.data.response.venue.bestPhoto.suffix
      }`;
    } catch (error) {
      alert('Something is wrong!');
    }
  }
}
