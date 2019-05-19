require("dotenv").config();
let spotifyThisSong = require("./spotifyThisSong");
let concertThis = require("./concertThis");
let movieThis = require("./movieThis");
// let spotifyThisSong = require("./spotifyThisSong");

// const keys = require("./keys.js");
// const axios = require("axios");
// const Spotify = require('node-spotify-api');
// const spotify = new Spotify(keys.spotify);
// const request = require("request");
// const moment = require('moment');
const fs = require("fs");


//do-what-it-says
//node liri.js do-what-it-says
function doWhatItSays() {
    // let operation = process.argv[2];
    // let userInput = process.argv.splice(3, process.argv.length).join(" ");
    fs.readFile("./random.txt", "utf8", function (err, data) {
        if (err) {
            throw err;
        }
        data = data.split(",");
        operation = data[0];
        userInput = data[1];

        if (operation == 'spotify-this-song') {
            spotifyThisSong();
        } else if (operation == 'concert-this') {
            concertThis();
        } else if (operation == 'movie-this') {
            movieThis();
        }

    });

}

module.exports = doWhatItSays;