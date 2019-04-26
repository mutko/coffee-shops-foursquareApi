import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
import { buildMap, getLocation } from './helpers/helpers';

import '../sass/app.scss';

// Search controller
const controlSearch = async (radius, open, sort) => {
  // new search object with coords
  const search = new Search(radius, open, sort);

  // get position coords
  const position = await getLocation();
  search.lat = position.coords.latitude;
  search.lng = position.coords.longitude;

  // prepare UI
  //searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.searchResults);

  try {
    // search for venues
    await search.getResults();

    // render results
    clearLoader();
    
    searchView.renderResults(search.venues);

    // render map with new data
    buildMap(search.lat, search.lng, search.venues);

    // just for testing DELETE this for production
    console.log(search);
  } catch (error) {
    // NEED TO DISPLAY SOMETHING MEANINGFULL
    // NOT ALERT
    alert('Not good!');
    clearLoader();
  }
};
elements.searchForm.addEventListener('click', e => {
  e.preventDefault();

  const radius = searchView.getInput();
  const sort = +elements.searchSort.value;
  const open = searchView.getChecked(elements.searchOpen);

  // radius required  maybe I should change this
  controlSearch(radius, open, sort);
});

// get results and render them on load
controlSearch();
