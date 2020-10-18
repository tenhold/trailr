// require .env package
require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
const credentials = {
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
};
const spotifyApi = new SpotifyWebApi(credentials);

module.exports = {
  getAccessToken: (req, res, next) => {
    // console.log('req, in spot', req.body, req.headers);
    spotifyApi
      .clientCredentialsGrant()
      .then((data) => {
        const access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];

        spotifyApi.setAccessToken(access_token);
        spotifyApi.setRefreshToken(refresh_token);

        console.log(
          `Ding! You have a token: ${access_token}! Expires in ${expires_in}`
        );
        return access_token;
      })
      .catch((err) => {
        console.log('Error getting tokens.', err);
      });
  },
};

// var options = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     Authorization:
//       'Basic ' +
//       new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString(
//         'base64'
//       ),
//   },
//   form: {
//     grant_type: 'client_credentials',
//   },
//   json: true,
// };

// request.post(options, (error, res, body) => {
//   // console.log('body.....', body);
//   if (!error && res.statusCode === 200) {
//     // access token allows us to access Spotify API
//     var token = body.access_token;
//     var options = {
//       url: 'https://api.spotify.com/v1/search?q=kiss the stars&type=track',
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//       json: true,
//     };
//   }
//   request.get(options, (error, res, body) => {
//     body.tracks.items.forEach((song) => {
//       //   console.log('song', song.artists);
//       song.artists.forEach((artist) => {
//         console.log(artist.name);
//         SPOTIFY_URI = artist.uri;
//       });
//       console.log(SPOTIFY_URI);
//     });
//   });
// });
