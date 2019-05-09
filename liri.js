require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

//spotify-this-song
// node liri.js spotify-this-song '<song name here>'
// var spotify = new Spotify(keys.spotify);
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });
  var trackTitle = process.argv[2];

spotify.search({ type: 'track', query: trackTitle }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data); 
});