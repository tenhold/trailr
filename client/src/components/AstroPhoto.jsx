import React, { useState, useEffect } from 'react';
import {Button, Carousel, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { results } from '../data/images.json';


const AstroPhoto = ({ user }) => {
  const [images, setImages] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=astrophotography`)
      .then(res => {
        const { results } = res.data;
        setImages(results);
      })
      .catch(err => console.error(err));
  }, []);
   
  const toggleImages = () => setToggle(!toggle);

  return (
    <Container fluid>
      <Row style={{paddingBottom: '40px'}}>
        <Button onClick={toggleImages} variant="dark">
          {toggle ? 'Get Inspired!' : 'Go Back'}</Button>
      </Row>
      {toggle ? null
        :
        <Row>
          <Col md={{ offset: 3 }}>
            <Carousel style={{paddingBottom: '20px', width: '700px'}} >
              {images.map(({ id, alt_description, urls: { regular } }) => (
                <Carousel.Item key={id}>
                  <img
                    className="d-block w-100"
                    style={{width: '500px', height: '400px'}}
                    src={regular}
                    alt="astro images"
                  />
                  <Carousel.Caption>
                    <h3>{alt_description}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      }
    </Container>
  );
  
};

export default AstroPhoto;