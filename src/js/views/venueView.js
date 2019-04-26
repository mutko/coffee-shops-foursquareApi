import { elements } from './base';

export const renderVenue = venue => {
  for (let x in venue) {
    if (venue[x] === undefined) {
      venue[x] = 'No info';
    }
  }
  const markup = `
    <div class="venue">
      <header class="venue__header">
        <p>Coffee shop</p>
        <h2>${venue.name}</h2>
      </header>
      <div class="venue__contact">
        <p><i class="fas fa-map-marker-alt"></i> ${venue.address}, ${venue.city}</p>
        <p><a href="tel:${venue.phone}"><i class="fas fa-phone-square"></i> ${venue.phone}</a></p>
        <p><i class="fas fa-clock"></i> ${venue.hours}</p>
      </div>
      <div class="venue__hours">
        
      </div>
      <div class="venue__price">
        <p>Price:
          <p>Category ${venue.tier}</p>
          <p>Description ${venue.message}</p>
          <p>Currency ${venue.currency}</p>
        </p>
      </div>
      <div class="venue__fs">
        <p>Rating on foursquare: ${venue.rating}</p>
        <p>Likes: Over ${venue.likes}</p>
      </div>
      <img src="${venue.image}" alt="Coffee Shop best photo" width="200" />
      <p>${venue.website}</p>
    </div>
  `;

  elements.coffeeShop.insertAdjacentHTML('beforeend', markup);
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
