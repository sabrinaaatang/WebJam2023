// require("dotenv").config();

// const mapsKey = process.env.GOOGLE_MAPS_API_KEY;
let map;

function initMap() {
  const options = {
    center: { lat: 33.6424, lng: 117.8417 },
    zoom: 14,
  };

  map = new Map(document.getElementById("map"), options);
}
initMap();

// // Apartment Data
// const apartmentData = [
//   {
//     lat: 33.6424,
//     lng: 117.8417,
//     name: "Park West Apartments",
//     address: "3883 Parkview Ln, Irvine, CA 92612",
//     phone: "(949) 509-1919",
//     website: "https://www.parkwestapts.com/",
//   },
// ];

// addMarkers(apartmentData);

// // Markers for Apartments
// function addMarkers(apartments) {}

// // Listener for links to apartment companies

// // List of apartments
