# coffee-shops-foursquareApi
## List of coffee shops based on geolocation, using foursquare API

List of closest coffee shops around, within distance of 1km, nice and responsive

### Functionality

After user accepts to share his location he should see the listing that from Foursquare API. Listing should be nice looking and sorted by distance. If the user didn't allow usage of geolocation, he should see an error that it is necessary to allow it to use the app. If Coffe Shop is closed should be removed from the list.

The list should display 10 coffee shops with following data:
  * Place Name
  * Place Address
  * Distance
 
 Also, Coffee Shop details page should be created with:
  * Place Name, Address, Contact information
  * Place image(s)
  * Tips for the place
  
### Technical Stack
  - Needs to be **responsive**
  - **CSS3** transitions and effects would be nice
  - Usage of **geolocation API**, to detect user location
  - **Vanilla JavaScript prefered**
  - If there is an error user sshould know about it nicely
  - Usage of **build tools**
    - Webpack, Babel, EsLint with Airbnb style, Sass
  
 ### Bonus 
  - Display Coffee Shops on map
