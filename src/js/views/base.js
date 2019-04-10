const id = selector => document.getElementById(selector);

export const elements = {
  searchForm: id('btn-search'),
  searchInput: id('search-field'),
  searchSort: id('sort-by-distance'),
  searchOpen: id('open-now'),
  searchResults: id('results'),
  searchResultsList: id('results-list')
};

export const renderLoader = parent => {
  const loader = `
    <div id="loader" class="loader">
      <img src="img/loader.gif" alt="Fetching results, please wait" width="75" />
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = id('loader');
  if (loader) loader.parentElement.removeChild(loader);
};
