require("dotenv").config();


const keys = require("./keys.js");
// const axios = require("axios");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

function spotifyThisSong(userInput) {
    let song = userInput;
    if (song === "") {
        song = "The Sign Ace of Base";
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

module.exports = spotifyThisSong;