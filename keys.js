console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
  key:process.env.OMDB_API_Key
};

exports.bandsInTown = {
  queryURL: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
}