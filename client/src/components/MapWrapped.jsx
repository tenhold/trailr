import React, { Component, useEffect, useState } from 'react';
import isEmpty from 'lodash.isempty';
import Marker from './Marker.jsx';
import GoogleMap from './GoogleMap.jsx';
import SearchBox from './SearchBox.jsx';
import { Link } from 'react-router-dom';
import * as trailData from '../data/trail-data.json';

class MapWithASearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      places: [],
      selectedTrail: null,
      selectedTrailIndex: null,
      userLocation: {
        lat: 30.33735,
        lng: -90.03733,
      },
    };
  }

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
  };

  addPlace = (place) => {
    this.setState({ places: place });
  };

  render() {
    const { places, mapApiLoaded, mapInstance, mapApi } = this.state;
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      this.setState({ userLocation: { lat: latitude, lng: longitude } });
    });
    return (
      <>
        {mapApiLoaded && (
          <SearchBox
            map={mapInstance}
            mapApi={mapApi}
            addplace={this.addPlace}
          />
        )}
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{
            lat: 30.33735,
            lng: -90.03733,
          }}
          center={this.state.userLocation}
          bootstrapURLKeys={{
            key: process.env.GOOGLE_MAPS_API_KEY,
            libraries: ['places', 'geometry'],
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
          {!isEmpty(places) &&
            places.map((place) => (
              <Marker
                key={place.id}
                text={place.name}
                lat={place.geometry.location.lat()}
                lng={place.geometry.location.lng()}
              />
            ))}
        </GoogleMap>
      </>
    );
  }
}

export default MapWithASearchBox;

// export default MapWithASearchBox;
// // process.env.GOOGLE_MAPS_API_KEY

// import React, { useState, useEffect, useRef, Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import SearchBox from './SearchBox.jsx';
// import Marker from './Marker.jsx';
// import * as trailData from '../data/trail-data.json';

// function MapWithASearchBox() {
//   const [selectedTrail, setSelectedTrail] = useState(null);
//   const [selectedTrailIndex, setSelectedTrailIndex] = useState(null);
//   const [userLocation, setUserLocation] = useState({
//     lat: 30.33735,
//     lng: -90.03733,
//   });
//   const [markers, setMarkers] = useState(trailData.data);
//   const [bounds, setBounds] = useState(null);
//   // const [zoom, setZoom] = useState(10);
//   // const [center, setCenter] = useState({});

//   const onMarkerClustererClick = () => (markerClusterer) => {
//     markerClusterer.getMarkers();
//   };

//   useEffect(() => {
//     const listener = (e) => {
//       if (e.key === 'Escape') {
//         setSelectedTrail(null);
//       }
//     };
//     window.addEventListener('keydown', listener);
//     navigator.geolocation.getCurrentPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       setUserLocation({ lat: latitude, lng: longitude });
//     });
//     return () => {
//       window.removeEventListener('keydown', listener);
//     };
//   }, []);

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
//         defaultZoom={10}
//         center={userLocation}
//         yesIWantToUseGoogleMapApiInternals
//       >
//         {/* <SearchBox
//           // ref={onSearchBoxMounted}
//           // onPlacesChanged={onPlacesChanged}
//           bounds={bounds}
//           // controlPosition={google.maps.ControlPosition.TOP_LEFT}
//         >
//           <input
//             type="text"
//             placeholder="Search"
//             style={{
//               boxSizing: 'border-box',
//               border: '1px solid transparent',
//               width: '240px',
//               height: '40px',
//               marginTop: '10px',
//               padding: '0 12px',
//               borderRadius: '3px',
//               boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
//               fontSize: '15px',
//               outline: 'none',
//               textOverflow: 'ellipses',
//             }}
//           />
//         </SearchBox> */}
//         {/* <MarkerClusterer
//           onClick={onMarkerClustererClick}
//           averageCenter
//           enableRetinaIcons
//           gridSize={60}
//         > */}
//         {markers.map((item, i) => (
//           <Marker
//             color={i === selectedTrailIndex ? 'green' : 'blue'}
//             clickHandler={() => {
//               setSelectedTrail(item);
//               setSelectedTrailIndex(i);
//             }}
//             key={item.id}
//             lng={item.lon}
//             lat={item.lat}
//           />
//         ))}
//         {/* {selectedTrail && (
//           <InfoWindow
//             onCloseClick={() => {
//               setSelectedTrail(null);
//             }}
//             position={{
//               lat: +selectedTrail.lat,
//               lng: +selectedTrail.lon,
//             }}
//           >
//             <div>
//               <Link to={`/trail/${selectedTrail.id}`} activeclassname="active">
//                 <h2>{selectedTrail.name}</h2>
//               </Link>
//               <p>{selectedTrail.length} miles</p>
//               <p>{selectedTrail.description}</p>
//             </div>
//           </InfoWindow>
//         )} */}
//         {/* </MarkerClusterer> */}
//       </GoogleMapReact>
//     </div>
//   );
// }

// export default MapWithASearchBox;
// // process.env.GOOGLE_MAPS_API_KEY
