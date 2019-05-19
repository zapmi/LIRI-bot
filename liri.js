require("dotenv").config();
let movieThis = require("./movieThis");
let concertThis = require("./concertThis");
let spotifyThisSong = require("./spotifyThisSong");

// const keys = require("./keys.js");
// const axios = require("axios");
// const Spotify = require('node-spotify-api');
// const spotify = new Spotify(keys.spotify);
// const request = require("request");
// const moment = require('moment');
// const fs = require("fs");

let operation = process.argv[2];
// let userInput = process.argv.splice(3, process.argv.length).join(" ");


if (operation == 'spotify-this-song') {
  spotifyThisSong();
} else if (operation == 'concert-this') {
  concertThis();
} else if (operation == 'movie-this') {
  movieThis();
} else if (operation == 'do-what-it-says') {
  doWhatItSays();
}


