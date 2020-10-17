import React, { useState, useEffect, useReducer } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import axios from 'axios';
import { ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { results } from '../data/images.json';




const AstroPhoto = ({ user }) => {
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);

  const fileSelectedHandler = e => {
    setImage(e.target.files);
  };

  useEffect(() => {
    
  }, []);

   
  const getImage = () => {
    // setShow(true);
    // const { urls } = results[0];
    // setImage(results[0].urls.small);
    // setImages(results[1].urls.small);
    // console.log(results);
    // axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=astrophotography`)
    axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=astrophotography`)
      .then(res => {
        const { results } = res.data;
        setImages(results);
        setToggle(false);
        console.log(images)
      })
      .catch(err => console.error(err));
  };

  const newImage = () => {
    toggle ? setImage(results[1].urls.small) : setImage(results[0].urls.small);
    setToggle(!toggle);
  };

  const hide = () => setShow(false);

  return (
    <div style={{padding: '40px'}}>
      {toggle ? 
        <Button onClick={getImage} centered={'true'} variant="dark">Get Inspired!</Button>
        :
  

        <Carousel >
          {images.map(({ id, alt_description, urls: { regular } }) => {
            return (
              <Carousel.Item key={id}>
                <img
                  className="d-block w-100"
                  src={regular}
                  alt="astro images"
                />
                <Carousel.Caption>
                  <h3>{alt_description}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      }
    </div>
  );
  
};



export default AstroPhoto;
 

      // <Modal show={show} onHide={hide} dialogClassName="modal-90w" >
      //     <ModalHeader>

      //     </ModalHeader>
      //     <ModalBody>
      //       {/* <a onClick={newImage}><img src={image} width={'350px'} /></a> */}
      //     </ModalBody>
      // </Modal>

