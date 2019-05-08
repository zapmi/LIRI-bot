require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//spotify-this-song

node liri.js spotify-this-song '<song name here>'