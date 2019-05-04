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
    price = 'No price info';
  }

  venue.attributes.groups.forEach(el => {
    if (el.type === 'wifi') {
      venue.features.wifi = 'Yes';
    } else if (el.type === 'payments') {
      venue.features.payments = el.items[0].displayValue;
    } else if (el.type === 'reservations') {
      venue.features.reservations = el.items[0].displayValue;
    } else if (el.type === 'outdoorSeating') {
      venue.features.out = el.items[0].displayValue;
    } else if (el.type === 'smoking') {
      venue.features.smoking = 'Yes';
    }
  });

  // for (let x in venue) {
  //   if (venue[x] === undefined) {
  //     delete venue[x]; // = 'No data';
  //     // venue.website = 'No website';
  //     // venue.likes = 'Not liked before';
  //   }
  // }

  // ${venue.address === undefined && venue.phone  === undefined && venue.hours  === undefined ? `<p>There is no contact information provided</p>` : ''}

  const markup = `
    <div class="venue__bg"></div>
    <div class="container container--small venue">
      <header class="venue__header">
        <p class="venue__label">Coffee shop</p>
        <h2>${venue.name}</h2>

        ${
          venue.website
            ? `<p><a href="${venue.website}" target="_blank" title="Visit website in new tab">${
                venue.website
              }</a></p>`
            : ''
        }

      </header>
      <div class="venue__contact">

        ${
          venue.address
            ? `<p><i class="fas fa-map-marker-alt"></i> ${venue.address}, ${venue.city}</p>`
            : ''
        }
       
        ${
          venue.phone
            ? `<p><a href="tel:${
                venue.phone
              }" title="Call number"><i class="fas fa-phone-square"></i> ${venue.phone}</a></p>`
            : ''
        }
        
        ${venue.hours ? `<p><i class="fas fa-clock"></i> ${venue.hours}</p>` : ''}

      </div>
      <div class="venue__contact venue__info">
        <div class="venue__price">
          <p class="venue__label">Price:</p>
          <p>${price}</p>
        </div>
        <div class="venue__features">
          <p class="venue__label">Features:</p>

          <p>

            ${
              venue.features.wifi
                ? `<i class="fas fa-wifi" title="Free Wi-Fi"></i>`
                : `<i class="fas fa-wifi light" title="No Wi-Fi"></i>`
            }
            
            ${
              venue.features.payments && venue.features.payments.slice(0, 3) === 'Yes'
                ? `<i class="fas fa-credit-card" title="Credit card payments"></i>`
                : ''
            }

            ${
              venue.features.reservations && venue.features.reservations === 'Yes'
                ? `<i class="fas fa-book-open" title="Reservations possible"></i>`
                : ''
            }

            ${
              venue.features.out && venue.features.out === 'Yes'
                ? `<i class="fas fa-umbrella-beach" title="Outdoor seating"></i>`
                : ''
            }

            ${
              venue.features.smoking ? `<i class="fas fa-smoking" title="Smoking allowed"></i>` : ''
            }

          </p>

        </div>
        <div class="venue__rating">
          <p class="venue__label">Rating:</p>

          ${venue.rating ? `<p>${venue.rating} / 10</p>` : `<p>Not rated</p>`}
          
        </div>
        <div class="venue__likes">
          <p class="venue__label">Likes:</p>
          ${venue.likes ? `<p>${venue.likes}</p>` : `<p>Not liked</p>`}
          
        </div>
      </div>
      ${
        venue.image
          ? `<img src="${
              venue.image
            }" alt="Coffee Shop best photo" width="200" class="venue__img" />`
          : `<p><i class="fas fa-image fa-lg"></i> There is no photo for this place</p>`
      }
           
    </div>
  `;

  elements.coffeeShop.insertAdjacentHTML('beforeend', markup);
};

export const renderTips = venue => {
  const markup = `
    <div class="container container--small">
      <div class="tips">
        ${
          venue.tips.userPhotoPrefix && venue.tips.userPhotoSuffix
            ? `<img src="${venue.tips.userPhotoPrefix}120x120${
                venue.tips.userPhotoSuffix
              }" alt="User profile photo" width="120" class="tips__img" />`
            : `<i class="fas fa-user-circle fa-2x"></i>`
        }
        
        <div class="tips__body">
          <p class="tips__user">
            ${venue.tips.firstName ? `${venue.tips.firstName}` : ''}
            ${venue.tips.lastName ? `${venue.tips.lastName}` : ''}
          </p>
          <p class="tips__text">
            ${venue.tips.text ? `${venue.tips.text}` : `No tips text`}
          </p>
          <p class="tips__likes">
            ${
              venue.tips.agree || venue.tips.agree === 0
                ? `            
                <span class="tips__agree">
                  <i class="fas fa-thumbs-up"></i> 
                  ${venue.tips.agree}
                </span> `
                : ''
            }
            ${
              venue.tips.disagree || venue.tips.disagree === 0
                ? `
              <span class="tips__disagree">
                <i class="fas fa-thumbs-down"></i> 
                ${venue.tips.disagree}
              </span>`
                : ''
            }
          </p>
        </div>
      </div>
    </div>
  `;
  elements.shopTips.insertAdjacentHTML('beforeend', markup);
};
