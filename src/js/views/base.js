const id = selector => document.getElementById(selector);

export const elements = {
  searchForm: id('btn-search'),
  searchRadius: id('radius'),
  searchSort: id('sort-by-distance'),
  searchOpen: id('open-now'),
  wrapper: id('wrapper'),
  searchResults: id('results'),
  searchResultsList: id('results-list'),
  coffeeShop: id('venue'),
  shopTips: id('venue-tips'),
  map: id('mapid')
};

export const renderLoader = parent => {
  const loader = `
    <div id="loader" class="loader">
      <img src="img/loader.gif" alt="Fetching results, please wait" width="125" />
    </div>
  `;
  parent.insertAdjacentHTML('beforebegin', loader);
};

export const clearLoader = () => {
  const loader = id('loader');
  if (loader) loader.parentElement.removeChild(loader);
};