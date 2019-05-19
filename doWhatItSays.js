require("dotenv").config();
let spotifyThisSong = require("./spotifyThisSong");
let concertThis = require("./concertThis");
let movieThis = require("./movieThis");
const fs = require("fs");


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

        if (operation == 'spotify-this-song') {
            spotifyThisSong(userInput);
        } else if (operation == 'concert-this') {
            concertThis(userInput);
        } else if (operation == 'movie-this') {
            movieThis(userInput);
        }

    });

}

module.exports = doWhatItSays;