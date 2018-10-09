// read and set any variables with the dotenv package
require("dotenv").config();
//Node Module imports needed to run the various functions
var keys = require("./keys");
var request = require("request");
var Spotify = require('node-spotify-api');
var bandsInTown = require("mhs-bandsintown");
let moment = require("moment");
var fs = require("fs"); //reads and writes files

// code to access keys information 
var spotify = new Spotify(keys.spotify);
// var omdb = new Omdb(keys.omdb);
//var bandsInTown = new BandsInTown(keys.bandsInTown);


// Possible commands for this liri app

//figure out why my node_modules file showed up in my git hub even though I used the .env file to ignore it

//Spotify 

//    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//    if (err) {
//      return console.log('Error occurred: ' + err);
//     }
 
//     console.log(data.tracks.items[0].album.artists[0]); 
//  }); 



