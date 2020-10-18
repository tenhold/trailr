// require('dotenv').config();
// import React, { useState } from 'react';
// import axios from 'axios';
// const SpotifyWebApi = require('spotify-web-api-node');
// const { getAccessToken } = require('../../../server/api/spotify_api.js');

// const {
//   SPOTIFY_CLIENT_ID,
//   SPOTIFY_CLIENT_SECRET,
//   SPOTIFY_ACCESS_TOKEN,
// } = process.env;

// const spotifyApi = new SpotifyWebApi();

// const SpotifySearchBar = () => {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);
//   const [searchInput, setSearchInput] = useState(
//     'The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do'
//   );

//   const handleSearchInput = (input) => (e) => {
//     console.log(e.target.value);
//     setSearchInput(e.target.value);
//     console.log('searched for...', searchInput);
//   };

//   let SPOTIFY_URI = 'spotify:playlist:1kGDWSxd9wsgLSrwKZnq5Z';

//   const handleAlbumSearch = (e) => {
//     e.preventDefault();
//     console.log('clicked!');
//     console.log('searched for', searchInput);
//   };

//   const clearSearchBox = () => {
//     searchInput.value = '';
//   };

//   return (
//     <div className='md-form active-cyan active-cyan-2 mb-3'>
//       <center>
//         <br></br>
//         <h3>Trail Mix</h3>
//         <iframe
//           src={`https://open.spotify.com/embed?uri=${SPOTIFY_URI}`}
//           width='300'
//           height='380'
//           frameBorder='0'
//           allowtransparency='true'
//           allow='encrypted-media'
//         ></iframe>
//       </center>
//     </div>
//   );
// };

// export default SpotifySearchBar;
