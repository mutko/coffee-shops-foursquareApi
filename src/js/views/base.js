const id = selector => document.getElementById(selector);

export const elements = {
  searchForm: id('btn-search'),
  searchRadius: id('radius'),
  searchSort: id('sort-by-distance'),
  searchOpen: id('open-now'),
  wrapper: id('wrapper'),
  errorWrapper: id('error-wrapper'),
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

export const renderError = (
  text = 'Please check internet connection or again try later.',
  parent = elements.errorWrapper
) => {
  const displayError = `
    <div class="error">
      <div class="container container--small">
        <p>Oops! Error!</p>
        <p>${text}</p>
        <p>And hurry up, coffee is getting cold!</p>
      </div>
    </div>
  `;
  // parent.insertAdjacentHTML('beforebegin', displayError);
  parent.innerHTML = displayError;
};
