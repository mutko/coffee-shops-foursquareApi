import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/** global state of app

  * Search object
  * Curret venue object
  * Liked venue or something
*/

const state = {};

const controlSearch = async (radius, sort, open) => {
  // new search object and add to state
  state.search = new Search(radius, sort, open);

  // prepare UI
  searchView.clearInput();
  searchView.clearResults();

  // search for venues
  await state.search.getResults();

  // render results
  searchView.renderResults(state.search.results);

  // just for testing DELETE for production
  console.log(state);
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
controlSearch();
