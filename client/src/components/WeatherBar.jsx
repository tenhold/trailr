import React, {useState, useEffect} from 'react';
import {CardDeck, Card} from 'react-bootstrap'


const WeatherBar = (user) => {
  const [userLocation, setUserLocation] = useState({
    lat: 30.0766974,
    lng: -89.8788793,
  })
  
  return <div>
    <h1>Weather Widget Here</h1>
    <CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeBck>
  </div>;
};
export default WeatherBar;
