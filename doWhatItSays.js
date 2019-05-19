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
            return spotifyThisSong();
        } else if (operation == 'concert-this') {
            return concertThis();
        } else if (operation == 'movie-this') {
            return movieThis();
        }

    });

}

module.exports = doWhatItSays;