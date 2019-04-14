import { elements } from './base';

export const renderVenue = venue => {
  for (let x in venue) {
    if (venue[x] === undefined) {
      venue[x] = 'No info';
    }
  }
  const markup = `
    <div class="venue">
      <h3>${venue.name}</h3>
      <p>${venue.phone}</p>
      <p>${venue.hours}</p>
      <p>Likes: Over ${venue.likes}</p>
      <p>Price:
        <p>Category ${venue.tier}</p>
        <p>Description ${venue.message}</p>
        <p>Currency ${venue.currency}</p>
      </p>
      <p>Rating on foursquare: ${venue.rating}</p>
      <p>${venue.address}, ${venue.city}</p>
      <img src="${venue.image}" alt="Coffee Shop best photo" width="200" />
      <p>${venue.website}</p>
    </div>
  `;

  elements.coffeeShop.insertAdjacentHTML('afterbegin', markup);
};

export const renderTips = venue => {
  const markup = `
    <div class="tips">
      <h4>${venue.user}</h4>
      <img src="${venue.userPhoto}" alt="User profile photo" width="200" />
      <p>${venue.text}</p>
      <img src="${venue.image}" alt="Coffee shop image made by user"  width="300" />

    </div>
  `;
  elements.shopTips.insertAdjacentHTML('afterbegin', markup);
};
