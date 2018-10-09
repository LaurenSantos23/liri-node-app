// read and set any variables with the dotenv package
require("dotenv").config();
//Node Module imports needed to run the various functions
var keys = require("./keys");
var request = require("request");
var Spotify = require('node-spotify-api');
var bandsInTown = require("mhs-bandsintown");
var moment = require("moment");
var fs = require("fs"); //reads and writes files



// code to access keys information 
var spotify = new Spotify(keys.spotify);
var omdbUrl = 'http://www.omdbapi.com/?apikey=trilogy&t=';
var bandsUrlBase = 'https://rest.bandsintown.com/artists/';
var bandsUrlEnd = '/events?app_id=codingbootcamp';










