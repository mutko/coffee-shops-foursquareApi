import { elements } from './base';

export const getInput = () => +elements.searchInput.value;

export const getChecked = element => {
  if (element.checked) {
    return 1;
  }
  return 0;
};

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResultsList.innerHTML = '';
};
const renderVenue = shop => {
  const markup = `
    <li class="venue">
      <a href="index-venue.html?id=${shop.venue.id}" title="More info about this movie">
          <h2>${shop.venue.name}</h2>
          <p>Udaljenost: ${shop.venue.location.distance}m</p>
          <p>Adresa: ${shop.venue.location.address}</p>
          <img src=${shop.venue.categories[0].icon.prefix}64${
    shop.venue.categories[0].icon.suffix
  } alt="Venue icon" />
      </a>
    </li>
  `;
  elements.searchResultsList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = venues => {
  venues.forEach(renderVenue);
};
