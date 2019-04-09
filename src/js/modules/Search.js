export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const result = await axios(
        'https://api.foursquare.com/v2/venues/explore?ll=44.80272,20.4085905&v=20190123&client_id=T13MCDTYIWC2JVTEIBOTE24UDDOVFQUXIPXOXV3N2A13FRIC&client_secret=VKLJLPLDIC4GHQTAEUMLU0XUWAQOQVONCIRYWD55SVJ4NJVT&limit=10&section=coffee&radius=1000&sortByDistance=1'
      );
  
      console.log(result.data.response.groups[0].items);
    } catch (error) {
      alert(error);
    }
  }
}

import axios from 'axios';



getResults();