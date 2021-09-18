import React, {useRef, useState} from "react";
import { Card, Form, Row } from "react-bootstrap";
import "./UploadImage.css";

export default function UploadImage(props) {
  
  const inputFile = useRef(null)
  const onButtonClick = () => {
   inputFile.current.click();
  };

  // const [photo, setPhoto] = useState(null)

  // const handleChange = (evt) => {
  //   if (evt.target.files.length) {
  //     setPhoto({ photo: URL.createObjectURL(evt.target.files[0])});
  //   }
  // };

  return (
    <>
      <Card
        style={{ width: "8rem" }}
        className="d-flex justify-content-end border-0"
      >
        <Card.Img
          variant="top"
          src="https://storage.needpix.com/rsynced_images/instagram-3814061_1280.png"
          onClick={onButtonClick}/>
        
      </Card>
      <Form.Group as={Row}>
        <Form.File
        ref={inputFile} 
        type="file"
        name="imageUpload"
        onChange={props.handleChange}  
        style={{display:"none"}} 
        img src="https://storage.needpix.com/rsynced_images/instagram-3814061_1280.png"/>
      </Form.Group>
    </>
  );
}
