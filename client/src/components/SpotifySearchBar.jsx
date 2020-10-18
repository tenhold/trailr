import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap/Button';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import qs from 'qs';
// const getAuthToken = require('../../../server/index.js');
const request = require('request');
require('dotenv').config();

const SpotifySearchBar = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);
  const [searchInput, setSearchInput] = useState(
    'The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do'
  );

  const handleSearchInput = (input) => (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
    console.log('searched for...', searchInput);
  };

  let SPOTIFY_URI = 'spotify:playlist:1kGDWSxd9wsgLSrwKZnq5Z';
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  const handleAlbumSearch = (e) => {
    e.preventDefault();
    console.log('clicked!');
    console.log('searched for', searchInput);

    axios
      .get('api/spotify', (req, res) => {
        console.log('hello axios in ssb');
        console.log('body in axios ssb', req.body);
        // var options = {
        //   url: `https://api.spotify.com/v1/search?q=${searchInput}&type=album`,
        //   headers: {
        //     Authorization: 'Bearer ' + token,
        //   },
        //   json: true,
        // };
      })
      .then((data) => {
        console.log('---->', data);
      })
      .catch((err) => {
        console.log('error in ssb', err);
      });
  };

  const clearSearchBox = () => {
    searchInput.value = '';
  };

  return (
    <div className='md-form active-cyan active-cyan-2 mb-3'>
      <input
        className='form-control mr-sm-2'
        type='text'
        placeholder='Search'
        aria-label='Search'
        onChange={handleSearchInput()}
      />
      <button
        className='btn btn-elegant btn-rounded btn-sm my-0'
        type='submit'
        onClick={(e) => {
          handleAlbumSearch(e);
        }}
      >
        Search
      </button>
      <iframe
        src={`https://open.spotify.com/embed?uri=${SPOTIFY_URI}`}
        width='300'
        height='380'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
      ></iframe>
      {/* </input> */}
    </div>
  );
};

export default SpotifySearchBar;
