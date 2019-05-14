require("dotenv").config();

var keys = require("./keys.js");
// var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var operation = process.argv[2];
var userInput = process.argv.splice(3, process.argv.length).join(" ");

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
  console.log("hello concert");
}

//spotify-this-song
//node liri.js spotify-this-song '<song name here>'
function spotifyThisSong() {
  var song = userInput;
  spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
    }
    else {
      for (var i = 0; i < data.tracks.items.length; i++) {
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
