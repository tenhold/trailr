import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap/Button';
import axios from 'axios';
const request = require('request');

const SpotifySearchBar = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (input) => (e) => {
    setSearchInput({ [input]: event.target.value });
    // console.log('searched for...', searchInput);
    console.log(event.target.value);
  };

  const handleAlbumSearch = (e) => {
    e.preventDefault();
    console.log('clicked!');
    console.log('searched for', searchInput);

    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
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

    request.post(options, function (error, res, body) {
      if (!error && res.statusCode === 200) {
        // access token allows us to access Spotify API
        console.log(req.body);
        var token = body.access_token;
        var options = {
          url:
            'https://api.spotify.com/v1/search/?q=house of seven swords&type=track',
          headers: {
            Authorization: 'Bearer ' + token,
          },
          json: true,
        };
        request.get(options, function (error, res, body) {
          console.log(body);
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
        onChange={handleSearchInput(searchInput)}
      />
      <button
        class='btn btn-elegant btn-rounded btn-sm my-0'
        type='submit'
        onClick={handleAlbumSearch}
      >
        Search
      </button>
      {/* </input> */}
    </div>
  );
};

export default SpotifySearchBar;
