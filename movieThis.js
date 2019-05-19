require("dotenv").config();

const keys = require("./keys.js");
const axios = require("axios");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const request = require("request");
const moment = require('moment');
const fs = require("fs");

function movieThis() {
    let operation = process.argv[2];
    let userInput = process.argv.splice(3, process.argv.length).join(" ");

    let movie = userInput;
    if (movie === "") {
        movie = "Mr. Nobody";
        console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
        console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }
    axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(function (response) {
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
    });
}

module.exports = movieThis;