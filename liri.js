require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var operation = process.argv[2];
var trackTitle = process.argv[3];

//spotify-this-song
// node liri.js spotify-this-song '<song name here>'
var spotify = new Spotify(keys.spotify);

if (operation == 'spotify-this-song'){
  spotify.search({ type: 'track', query: trackTitle, limit: 5 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

}