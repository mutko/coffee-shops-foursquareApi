import axios from 'axios';

function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
}
function getLocation() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, error);
  });
}

export default class Search {
  constructor(radius = 1000) {
    this.radius = radius;
  }

  async getResults() {
    try {
      const position = await getLocation();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const response = await axios(
        `https://api.foursquare.com/v2/venues/explore?ll=${lat},${lng}&v=20190323&client_id=T13MCDTYIWC2JVTEIBOTE24UDDOVFQUXIPXOXV3N2A13FRIC&client_secret=VKLJLPLDIC4GHQTAEUMLU0XUWAQOQVONCIRYWD55SVJ4NJVT&limit=10&section=coffee&radius=${
          this.radius
        }&sortByDistance=1&openNow=1`
      );
      this.results = response.data.response.groups[0].items;
    } catch (error) {
      alert(error);
    }
  }
}
