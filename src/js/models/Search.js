import axios from 'axios';
import { clientId, clientSecret } from '../helpers/config';

export default class Search {
  constructor(radius = 1000, openNow = 1, sortByDistance = 1) {
    this.radius = radius;
    this.openNow = openNow;
    this.sortByDistance = sortByDistance;
    this.venues = {}; // this will be populated after getResults() is finished
  }

  async getResults() {
    try {
      const response = await axios(
        `https://api.foursquare.com/v2/venues/explore?ll=${this.lat},${
          this.lng
        }&v=20190323&client_id=${clientId}&client_secret=${clientSecret}&limit=10&section=coffee&radius=${
          this.radius
        }&sortByDistance=${this.sortByDistance}&openNow=${this.openNow}`
      );
      this.venues = response.data.response.groups[0].items;
    } catch (error) {
      console.log(error);
    }
  }
}
