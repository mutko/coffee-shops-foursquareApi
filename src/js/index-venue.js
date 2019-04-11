import Search from './models/Search';
import Venue from './models/Venue';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};

/*
 Venue controller
*/
const v = new Venue();
v.getVenue();
console.log(v);

console.log('IZ index-venue u single js');
