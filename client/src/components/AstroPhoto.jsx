import React, { useState, useEffect, useReducer } from 'react';
import { Modal, Button, Container, Row } from 'react-bootstrap';
import axios from 'axios';
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

  }, [toggle]);

   
  const getImage = () => {
    setShow(true);
    axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=astrophotography`)
    // axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=astrophotography`)
      .then(res => {
        setImage(res.data);
        setToggle(false);
        console.log(image)
      })
      .catch(err => console.error(err));
  };

  const newImage = () => {
    // toggle ? setImage(results[3].urls.raw) : setImage(results[0].urls.raw);
    setToggle(!toggle);
  };

  const hide = () => setShow(false);

  return (
    <Container>
      <Row>
        <Button onClick={getImage} variant="dark">Get Inspired!</Button>
      </Row>
      <Row>
        {toggle ? 
        <Modal show={show} onHide={hide} centered='true' size='lg' style={{backgroundColor: '#121212'}}>
            <Modal.Header closeButton>
                Hello world
            </Modal.Header>
            <Modal.Body 
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <a onClick={getImage}><img src={`${image}&h=400&w=600`} /></a>
            </Modal.Body>
        </Modal>
        : null}
      </Row>
    </Container>
  );
  
};
// const AstroPhoto = ({ user }) => {
//   const [image, setImage] = useState('');
//   const [images, setImages] = useState([]);
//   const [show, setShow] = useState(false);
//   const [toggle, setToggle] = useState(true);

//   const fileSelectedHandler = e => {
//     setImage(e.target.files);
//   };

//   useEffect(() => {
    
//   }, []);

   
//   const getImage = () => {
//     setShow(true);
//     const { urls } = results[0];
//     setImage(results[0].urls.regular);
//     setImages(results[1].urls.regular);
//     console.log(results);
//     // axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=astrophotography`)
//     // axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=astrophotography`)
//     //   .then(res => {
//     //     const { results } = res.data;
//     //     setImages(results);
//     //     setToggle(false);
//     //     console.log(images)
//     //   })
//     //   .catch(err => console.error(err));
//   };

//   const newImage = () => {
//     // toggle ? setImage(results[3].urls.raw) : setImage(results[0].urls.raw);
//     setToggle(!toggle);
//   };

//   const hide = () => setShow(false);

//   return (
//     <Container>
//       <Row>
//         <Button onClick={getImage} variant="dark">Get Inspired!</Button>
//       </Row>
//       <Row>
//         <Modal show={show} onHide={hide} centered='true' size='lg' style={{backgroundColor: '#121212'}}>
//             <Modal.Header closeButton>
//                 Hello world
//             </Modal.Header>
//             <Modal.Body 
//               style={{
//                 marginLeft: 'auto',
//                 marginRight: 'auto',
//               }}>
//               <a onClick={newImage}><img src={`${image}&h=400&w=600`} /></a>
//             </Modal.Body>
//         </Modal>
//       </Row>
//     </Container>
//   );
  
// };



export default AstroPhoto;
 


// {toggle ? 
//   <Button onClick={getImage} centered={'true'} variant="dark">Get Inspired!</Button>
//   // :
    //   <Carousel >
    //   {images.map(({ id, alt_description, urls: { regular } }) => {
    //     return (
    //       <Carousel.Item key={id}>
    //         <img
    //           className="d-block w-100"
    //           src={regular}
    //           alt="astro images"
    //         />
    //         <Carousel.Caption>
    //           <h3>{alt_description}</h3>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     )
    //   })}
    // </Carousel>
//    }
