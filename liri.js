require("dotenv").config();
let movieThis = require("./movieThis");
let concertThis = require("./concertThis");
let spotifyThisSong = require("./spotifyThisSong");
let doWhatItSays = require("./doWhatItSays");

let operation = process.argv[2];
let userInput = process.argv.splice(3, process.argv.length).join(" ");


if (operation == 'spotify-this-song') {
  spotifyThisSong(userInput);
} else if (operation == 'concert-this') {
  concertThis(userInput);
} else if (operation == 'movie-this') {
  movieThis(userInput);
} else if (operation == 'do-what-it-says') {
  doWhatItSays();
}


