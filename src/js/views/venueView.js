import { elements } from './base';

export const renderVenue = venue => {

  let price;
  if (venue.tier) {
    switch (venue.tier) {
      case 2:
        price = `<i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign light"></i><i class="fas fa-dollar-sign light"></i>`;
        break;
      case 3:
        price = `<i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign light"></i>`;
        break;
      case 4:
        price = `<i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i>`;
        break;
      default: 
        price = `<i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign light"></i><i class="fas fa-dollar-sign light"></i><i class="fas fa-dollar-sign light"></i>`;
    }
  } else {
    price = 'No data';
  }

  for (let x in venue) {
    if (venue[x] === undefined) {
      venue[x] = 'No data';
    }
  }

  const markup = `
    <div class="venue__bg"></div>
    <div class="venue">
      <header class="venue__header">
        <p class="venue__label">Coffee shop</p>
        <h2>${venue.name}</h2>
        <p><a href="${venue.website}" target="_blank">${venue.website}</a></p>
      </header>
      <div class="venue__contact">
        <p><i class="fas fa-map-marker-alt"></i> ${venue.address}, ${venue.city}</p>
        <p><a href="tel:${venue.phone}"><i class="fas fa-phone-square"></i> ${venue.phone}</a></p>
        <p><i class="fas fa-clock"></i> ${venue.hours}</p>
      </div>
      <div class="venue__contact venue__info">
        <div class="venue__price">
          <p class="venue__label">Price:</p>
          <p>${price}</p>
        </div>
        <div class="venue__features">
          <p class="venue__label">Features:</p>
          <p><i class="fas fa-wifi" title="Wi-Fi"></i> <i class="fas fa-credit-card" title="Credit card payment"></i></p>
        </div>
        <div class="venue__rating">
          <p class="venue__label">Rating:</p>
          <p>${venue.rating} / 10</p>
        </div>
        <div class="venue__likes">
          <p class="venue__label">Likes:</p>
          <p>${venue.likes}</p>
        </div>
      </div>
      <img src="${venue.image}" alt="Coffee Shop best photo" width="200" class="venue__img" />     
    </div>
  `;

  elements.coffeeShop.insertAdjacentHTML('beforeend', markup);
};

// export const renderTips = venue => {
//   const markup = `
//     <div class="tips">
//       <h4>${venue.user}</h4>
//       <img src="${venue.userPhoto}" alt="User profile photo" width="200" />
//       <p>${venue.text}</p>
//       <img src="${venue.image}" alt="Coffee shop image made by user"  width="300" />

//     </div>
//   `;
//   elements.shopTips.insertAdjacentHTML('afterbegin', markup);
// };
