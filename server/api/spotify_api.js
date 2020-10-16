// require .env package
require('dotenv').config();

//////////////
// Kris add //
/////////////
let request = require('request');
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
var SPOTIFY_URI;

var options = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization:
      'Basic ' +
      new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString(
        'base64'
      ),
  },
  form: {
    grant_type: 'client_credentials',
  },
  json: true,
};

request.post(options, (error, res, body) => {
  // console.log('body.....', body);
  if (!error && res.statusCode === 200) {
    // access token allows us to access Spotify API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/search?q=kiss the stars&type=track',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      json: true,
    };
  }
  request.get(options, (error, res, body) => {
    body.tracks.items.forEach((song) => {
      //   console.log('song', song.artists);
      song.artists.forEach((artist) => {
        console.log(artist.name);
        SPOTIFY_URI = artist.uri;
      });
      console.log(SPOTIFY_URI);
    });
  });
});
