import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

import '../sass/app.scss';

/** global state of app
 * Search object
 * Curret venue object
 * Liked venue or something
 */

const state = {};

// Search controller
const controlSearch = async (radius, sort, open) => {
  // new search object and add to state
  state.search = new Search(radius, sort, open);

  // prepare UI
  searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.searchResults);

  try {
    // search for venues
    await state.search.getResults();
    // const lat = state.search.lat;
    // const lng = state.search.lng;

    // console.log(lat);
    // console.log(lng);
    // render results
    clearLoader();
    searchView.renderResults(state.search.results);

    // just for testing DELETE this for production
    console.log(state);
  } catch (error) {
    alert('Not good!');
    clearLoader();
  }
};
elements.searchForm.addEventListener('click', e => {
  e.preventDefault();

  const radius = searchView.getInput();
  const sort = searchView.getChecked(elements.searchSort);
  const open = searchView.getChecked(elements.searchOpen);

  // radius required  maybe I should change this
  if (radius) {
    controlSearch(radius, sort, open);
  }
});

// get results and render them on load
controlSearch();
