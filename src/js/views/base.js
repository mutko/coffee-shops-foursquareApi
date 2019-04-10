const id = selector => document.getElementById(selector);

export const elements = {
  searchForm: id('btn-search'),
  searchInput: id('search-field'),
  searchSort: id('sort-by-distance'),
  searchOpen: id('open-now'),
  searchResultsList: id('results-list')
};
