require("dotenv").config();

const axios = require("axios");
const moment = require('moment');

function concertThis(userInput) {
    let artist = userInput;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
        console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
        console.log("Venue: " + response.data[0].venue.name);
        console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
        console.log("Event date: " + moment(response.data[0].datetime).format("MMM Do YYYY"));
        console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    })
}

module.exports = concertThis;