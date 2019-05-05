import { elements, toggleClass } from './views/base';

import '../sass/app.scss';

const elForAnimate = [elements.clL, elements.clR, elements.clC, elements.blL, elements.blR];
const listOfClass = ['tr100', 'tr-80', 'tr-100', 'tr-120', 'tr-50'];

window.addEventListener('load', toggleClass(elForAnimate, listOfClass));

window.onscroll = () => {
  if (window.scrollY === 0) {
    toggleClass(elForAnimate, listOfClass);
  } else if (window.scrollY === 200) {
    toggleClass(elForAnimate, listOfClass);
  }
};
