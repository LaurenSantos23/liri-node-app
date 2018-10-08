// requiring the dotenv npm (my )
require("dotenv").config();
// Grab data from key.js
var keys = require("./keys");
// requiring request npm
var request = require("request");
//requiring spotify npm
var Spotify = require('node-spotify-api'); //saying could not find a declaration file but my spotify works when i do node liri.js
// requiring omdb 
var omdb = require("omdb");
// requring bands in town
var bandsInTown = require("bandsInTown")

// code to access keys information 
//made constructiors for my api calls
var spotify = new Spotify(keys.spotify);
var omdb = new Omdb(keys.omdb);
var bandsInTown = new BandsInTown(keys.bandsInTown);

//figure out why my node_modules file showed up in my git hub even though I used the .env file to ignore it

// Liri uses command line prompts (CLI) to take in parameters (song, bands or movies) and gives back data from our api requests and npm packages

//make it so liri.js can take in one of the following commands 

// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

//Spotify 




 

























 //  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//    if (err) {
//     return console.log('Error occurred: ' + err);
//    }
 
//     console.log(data.tracks.items[0].album.artists[0]); 
//  }); 

//  process.argv[2] (example to (can help to grab spotify songs) store to var and console log to see it work)
