import axios from 'axios';
import { clientId, clientSecret } from '../helpers/config';

export default class Venue {
  // No need for default id
  constructor(id = '4c893ec5105237044947c7f1') {
    this.id = id;
    this.coords = []; // for lat and lng in buildMap()
    this.tips = {};
    this.features = {};
  }

  // For testing
  // 'https://api.myjson.com/bins/1h2v10'

  // Real URL
  // `https://api.foursquare.com/v2/venues/${this.id}?&v=20190323&client_id=${clientId}&client_secret=${clientSecret}`

  async getVenue() {
    try {
      const result = await axios(
        `https://api.foursquare.com/v2/venues/${
          this.id
        }?&v=20190323&client_id=${clientId}&client_secret=${clientSecret}`
      );
      // eslint-disable-next-line prefer-destructuring
      const venue = result.data.response.venue;
      this.coords[0] = result.data.response;
      this.attributes = venue && venue.attributes;
      this.address = venue && venue.location && venue.location.address;
      this.city = venue && venue.location && venue.location.city;
      this.hours = venue && venue.hours && venue.hours.status;
      this.likes = venue && venue.likes && venue.likes.count;
      this.name = venue && venue.name;
      this.phone = venue && venue.contact && venue.contact.formattedPhone;
      this.message = venue && venue.price && venue.price.message;
      this.tier = venue && venue.price && venue.price.tier;
      this.rating = venue && venue.rating;
      this.website = venue && venue.url;
      this.tips.text =
        venue &&
        venue.tips &&
        venue.tips.groups[0] &&
        venue.tips.groups[0].items[0] &&
        venue.tips.groups[0].items[0].text;
      this.tips.firstName =
        venue &&
        venue.tips &&
        venue.tips.groups[0] &&
        venue.tips.groups[0].items[0] &&
        venue.tips.groups[0].items[0].user &&
        venue.tips.groups[0].items[0].user.firstName;
      this.tips.lastName =
        venue &&
        venue.tips &&
        venue.tips.groups[0] &&
        venue.tips.groups[0].items[0] &&
        venue.tips.groups[0].items[0].user &&
        venue.tips.groups[0].items[0].user.lastName;
      this.tips.userPhotoPrefix =
        venue &&
        venue.tips &&
        venue.tips.groups[0] &&
        venue.tips.groups[0].items[0] &&
        venue.tips.groups[0].items[0].user &&
        venue.tips.groups[0].items[0].user.photo &&
        venue.tips.groups[0].items[0].user.photo.prefix;
      this.tips.userPhotoSuffix =
        venue &&
        venue.tips &&
        venue.tips.groups[0] &&
        venue.tips.groups[0].items[0] &&
        venue.tips.groups[0].items[0].user &&
        venue.tips.groups[0].items[0].user.photo &&
        venue.tips.groups[0].items[0].user.photo.suffix;
      this.tips.agree =
        venue &&
        venue.tips &&
        venue.tips.groups[0] &&
        venue.tips.groups[0].items[0] &&
        venue.tips.groups[0].items[0].agreeCount;
      this.tips.disagree =
        venue &&
        venue.tips &&
        venue.tips.groups[0] &&
        venue.tips.groups[0].items[0] &&
        venue.tips.groups[0].items[0].disagreeCount;
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
    } catch (error) {}
  }
}
