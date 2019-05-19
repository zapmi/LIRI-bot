require("dotenv").config();

// const keys = require("./keys.js");
const axios = require("axios");
// const Spotify = require('node-spotify-api');
// const spotify = new Spotify(keys.spotify);
// const request = require("request");
const moment = require('moment');
// const fs = require("fs");



function concertThis() {
    let userInput = process.argv.splice(3, process.argv.length).join(" ");
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