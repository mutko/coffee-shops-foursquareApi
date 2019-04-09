import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/** global state of app

  * Search object
  * Curret venue object
  * Liked venue
*/
const state = {};

const controlSearch = async radius => {
  // new search object and add to state
  state.search = new Search(radius);

  // prepare UI
  searchView.clearInput();
  searchView.clearResults();

  // search for recipes
  await state.search.getResults();

  // render results
  searchView.renderResults(state.search.results);
};

elements.searchForm.addEventListener('click', e => {
  e.preventDefault();
  const radius = searchView.getInput();
  if (radius) {
    controlSearch(radius);
  }
});
controlSearch();
