import React, {useRef, useState} from "react";
import { Card, Form, Row } from "react-bootstrap";
import "./UploadImage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'


export default function UploadImage(props) {
  
  const inputFile = useRef(null)
  const onButtonClick = () => {
   inputFile.current.click();
  };

  return (
    <>
      <Card
        style={{ width: "8rem" }}
        className="d-flex justify-content-end border-0 card-image"
      >
        <div onClick={onButtonClick} className="image-upload" style={{backgroundColor: "#55A7AE", borderRadius:"50%", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.5)"}}>
          <FontAwesomeIcon size="lg" style={{height:"50", width:"50"}} color="white" icon={faCamera}/>
        </div>

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
