// import Search from './models/Search';
// import Venue from './models/Venue';
// import * as searchView from './views/searchView';
// import { elements, renderLoader, clearLoader } from './views/base';

// const state = {};

/*
 Venue controller
*/
// const v = new Venue();
// v.getVenue();
// console.log(v);

const id = s => document.getElementById(s);

const titlePlace = id('title-placeholder');
const bodyPlace = id('body-placeholder');

fetch('https://api.myjson.com/bins/1h2v10')
  .then(response => response.json())
  .then(response => {
    console.log(response);
    const venue = response.response.venue;

    let fillTitle = '';
    let fillBody = '';

    fillTitle += `
                <div class="venue-title">
                    <h1>${venue.name}</h1>
                    <p>${venue.location.address}, ${venue.location.city}</p>
                </div>
            `;

    fillBody += `
                <div class="venue-body">
                    <div class="contact">
                        <p>${venue.contact.formattedPhone}</p>
                        <a href=${venue.url} target="_blank" title="Visit website">Website</a>
                    </div>
                </div>
            `;

    titlePlace.innerHTML = fillTitle;
    bodyPlace.innerHTML = fillBody;
  });
