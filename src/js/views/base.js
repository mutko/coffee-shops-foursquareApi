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
  map: id('mapid'),
  clL: id('cl-l'),
  clR: id('cl-r'),
  clC: id('cl-c'),
  blL: id('bl-l'),
  blR: id('bl-r')
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
  humor = 'And hurry up, coffee is getting cold!',
  btn = 'index',
  parent = elements.errorWrapper
) => {
  const displayError = `
    <div class="error">
      <div class="container container--small">
        <p>Oops! Error!</p>
        <p>${text}</p>
        <p>${humor}</p>
        <a href="${btn}.html" title="Back on ${btn} page" class="btn">Back on ${btn}</a>
      </div>
    </div>
  `;
  parent.innerHTML = displayError;
};

export const toggleClass = (el, klas) => {
  el[0].classList.toggle(klas[0]);
  el[1].classList.toggle(klas[1]);
  el[2].classList.toggle(klas[2]);
  el[3].classList.toggle(klas[3]);
  el[4].classList.toggle(klas[4]);
};
