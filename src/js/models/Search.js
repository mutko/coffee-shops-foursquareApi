import axios from 'axios';
import { buildMap, getLocation } from '../helpers/helpers';

export default class Search {
  constructor(radius = 1000, sortByDistance = 1, openNow = 1) {
    this.radius = radius;
    this.sortByDistance = sortByDistance;
    this.openNow = openNow;
  }

  async getResults() {
    try {
      const position = await getLocation();
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      const response = await axios(
        `https://api.foursquare.com/v2/venues/explore?ll=${this.lat},${
          this.lng
        }&v=20190323&client_id=T13MCDTYIWC2JVTEIBOTE24UDDOVFQUXIPXOXV3N2A13FRIC&client_secret=VKLJLPLDIC4GHQTAEUMLU0XUWAQOQVONCIRYWD55SVJ4NJVT&limit=10&section=coffee&radius=${
          this.radius
        }&sortByDistance=${this.sortByDistance}&openNow=${this.openNow}`
      );
      this.results = response.data.response.groups[0].items;

      // render map with new data
      buildMap(this.lat, this.lng, this.results);
    } catch (error) {
      alert(error);
    }
  }
}
