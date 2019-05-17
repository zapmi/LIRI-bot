require("dotenv").config();

const keys = require("./keys.js");
const axios = require("axios");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const request = require("request");
const moment = require('moment');
const fs = require("fs");

let operation = process.argv[2];
let userInput = process.argv.splice(3, process.argv.length).join(" ");
// let name;

if (operation == 'spotify-this-song') {
  spotifyThisSong();
} else if (operation == 'concert-this') {
  concertThis();
} else if (operation == 'movie-this') {
  movieThis();
} else if (operation == 'do-what-it-says') {
  doWhatItSays();
}

function concertThis() {
  let artist = userInput;
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response) {
    // console.log(response.data);
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    console.log("Venue: " + response.data[0].venue.name);
    console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
    console.log("Event date: " + moment(response.data[0].datetime).format("MMM Do YYYY"));
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    // }
  })
}

//spotify-this-song
//node liri.js spotify-this-song '<song name here>'
function spotifyThisSong() {
  let song = userInput;
  if (song === "") {
    song = "The Sign Ace of Base";

    // console.log(data.tracks.items)
  }
  spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {

    if (err) {
      console.log('Error occurred: ' + err);
    }

    else {
      for (let i = 0; i < data.tracks.items.length; i++) {
        console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
        console.log('Artist: ' + data.tracks.items[i].artists[0].name);
        console.log('Song name: ' + data.tracks.items[i].name);
        console.log('Preview: ' + data.tracks.items[i].preview_url);
        console.log('Album: ' + data.tracks.items[i].album.name);
        console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");


      }

    }

  });
}

function movieThis() {
  let movie = userInput;
  // let song = userInput;
  if (movie === "") {
    movie = "Mr. Nobody";
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
    console.log("It's on Netflix!");
    // console.log(data.tracks.items)
  }
  axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(function (response) {
    // for (var i=0; i < response.data.length; i++){
    // console.log(response.data);
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
    console.log("Country Produced in: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    // }

  });
}


//do-what-it-says
//node liri.js do-what-it-says
function doWhatItSays() {
  fs.readFile("./random.txt", "utf8", function (err, data) {
    if (err) {
      throw err;
    }
    data = data.split(",");
    operation = data[0];
    userInput = data[1];
    // console.log(data[0] + " " + data[1]);
    // spotifyThisSong();
    // movieThis();
    if (operation == 'spotify-this-song') {
      return spotifyThisSong();
    } else if (operation == 'concert-this') {
      return concertThis();
    } else if (operation == 'movie-this') {
      return movieThis();
    }

  });

}


// module.exports = spotifyThisSong;
/********************************************************************************* */
