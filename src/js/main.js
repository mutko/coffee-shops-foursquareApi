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
  // searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.wrapper);

  try {
    // search for venues
    await search.getResults();

    clearLoader();
    // render results
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
elements.searchForm.addEventListener('click', async e => {
  elements.searchForm.disabled = true;

  e.preventDefault();

  const radius = searchView.getInput();
  const sort = +elements.searchSort.value;
  const open = searchView.getChecked(elements.searchOpen);

  // radius required  maybe I should change this
  await controlSearch(radius, open, sort);

  elements.searchForm.disabled = false;
});

// get results and render them on load
controlSearch();
