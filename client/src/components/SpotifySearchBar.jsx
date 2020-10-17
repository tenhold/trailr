import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap/Button';
import axios from 'axios';
const request = require('request');
require('dotenv').config();

const SpotifySearchBar = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (input) => (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
    console.log('searched for...', searchInput);
  };

  let SPOTIFY_URI;
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  const handleAlbumSearch = (e) => {
    e.preventDefault();
    console.log('clicked!');
    console.log('searched for', searchInput);

    let options = {
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
    console.log(options);
    // axios
    //   .post(options.url, options)
    //   .then(({ data }) => {
    //     console.log(data);
    //     console.log('flag');
    //     axios.get(options, (error, res, body) => {
    //       console.log(body);
    //       body.albums.items.forEach((album) => {
    //         console.log('album', album.uri);
    //       });
    //     });
    //   })
    //   .catch((err) => {
    //     console.log('error with axios in SSB');
    //   });

    axios.post('https://accounts.spotify.com/api/token', (error, res, body) => {
      console.log('body.....', body);
      if (!error && res.statusCode === 200) {
        // access token allows us to access Spotify API
        var token = body.access_token;
        var options = {
          url: `https://api.spotify.com/v1/search?q=taylor swift&type=album`,
          headers: {
            Authorization: 'Bearer ' + token,
          },
          json: true,
        };

        axios.get(options, (error, res, body) => {
          console.log(body);
          body.albums.items.forEach((album) => {
            console.log('album', album.uri);
          });
        });
      }
    });
  };

  const clearSearchBox = () => {
    searchInput.value = '';
  };

  return (
    <div className='md-form active-cyan active-cyan-2 mb-3'>
      <input
        class='form-control mr-sm-2'
        type='text'
        placeholder='Search'
        aria-label='Search'
        onChange={handleSearchInput()}
      />
      <button
        class='btn btn-elegant btn-rounded btn-sm my-0'
        type='submit'
        onClick={(e) => {
          handleAlbumSearch(e);
        }}
      >
        Search
      </button>
      {/* </input> */}
    </div>
  );
};

export default SpotifySearchBar;
