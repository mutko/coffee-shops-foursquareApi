import { elements } from './base';

export const getInput = () => +elements.searchRadius.value;

export const getChecked = element => {
  if (element.checked) {
    return 1;
  }
  return 0;
};

// export const clearInput = () => {
//  elements.searchRadius.value = '';
// };

export const clearResults = () => {
  elements.searchResultsList.innerHTML = '';
};
const renderVenue = shop => {
  const address = (shop.venue.location.address) ? shop.venue.location.address : 'No address provided';
  const markup = `
    <li class="results__item">
      <a href="venue.html?id=${shop.venue.id}" title="More info about this movie">
          <h3>${shop.venue.name}</h3>
          <span>${shop.venue.location.distance} m</span>
          <p>${address}</p>
      </a>
    </li>
  `;
  elements.searchResultsList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = venues => {
  venues.forEach(renderVenue);
};
