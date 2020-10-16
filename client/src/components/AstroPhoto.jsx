import React, { useState } from 'react';
import { Form } from 'bootstrap';
import axios from 'axios';
import { uploadPhoto } from '../helpers'; 



const AstroPhoto = ({ user }) => {
  const [bg, setBg] = useState(true);
  const [image, setimage] = useState(null);

  const fileSelectedHandler = e => {
    setimage(e.target.files);
  };

  const handleUpload = () => {

    // uploadPhoto(image)
    //   .then(data => {
    //     console.log(data.data);
    //     setimage(null);
    //   })
  };

  const handleChange = () => {
    setBg(!bg);
    console.log(bg)
  };
   




  return (
    <>
      <button onClick={handleChange} />
      <input type='file' onChange={fileSelectedHandler} />
      <button onClick={handleUpload}>submit</button>
      <img />
    </>
  )
  
};

// <Form>
//         <Form.Switch 
//           onChange={handleChange}
//           type='switch'
//           id={console.log(Form)}
//           label='nightmode'
//           checked={bg}
//         />
//       </Form>

export default AstroPhoto;