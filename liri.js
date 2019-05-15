require("dotenv").config();

const keys = require("./keys.js");
// var axios = require("axios");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const request = require("request");
const moment = require('moment');

let operation = process.argv[2];
let userInput = process.argv.splice(3, process.argv.length).join(" ");

if (operation == 'spotify-this-song') {
  spotifyThisSong();
} else if (operation == 'concert-this') {
  concertThis();
} else if (operation == 'movie-this') {
  movieThis();
} else if (operation == 'do-what-it-says') {
  doWhatItSays();
}

//concert-this
//node liri.js concert-this <artist/band name here>
function concertThis() {
  let artist = userInput;
  let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  request(queryURL, function (error, response, body) {
    var result = JSON.parse(body)[0];
    // console.log(result);
    console.log("Venue: " + result.venue.name);
    console.log("Venue Location: " + result.venue.city + ", " + result.venue.country);
    // console.log("Date of Event: " + moment(result.datetime).format("MMM Do YY"));
    console.log("Event date: " + moment(result.datetime).format("MMM Do YYYY"));
    // console.log(releaseDate);
  });
}

// console.log(bandsApi);

//spotify-this-song
//node liri.js spotify-this-song '<song name here>'
function spotifyThisSong() {
  let song = userInput;
  spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
    if (song == "a") {
      console.log("NOT A SONG")

      // console.log(data.tracks.items)
    }
    else if (err) {
      console.log('Error occurred: ' + err);
    }

    else {
      for (let i = 0; i < data.tracks.items.length; i++) {
        console.log('Artist: ' + data.tracks.items[i].artists[0].name);
        console.log('Song name: ' + data.tracks.items[i].name);
        console.log('Preview: ' + data.tracks.items[i].preview_url);
        console.log('Album: ' + data.tracks.items[i].album.name);


      }

    }

  });
}

//movie-this
//node liri.js movie-this '<movie name here>'
function movieThis() {
  console.log("hello movie");
}

//do-what-it-says
//node liri.js do-what-it-says
function doWhatItSays() {
  console.log("hello mom");
}








module.exports = spotifyThisSong;
/********************************************************************************* */
