import React, {useRef, useState} from "react";
import { Card, Form, Row } from "react-bootstrap";
import "./UploadImage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as UploadSvg} from "../../assets/Upload.svg"

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
        <div onClick={onButtonClick} className="image-upload" style={{backgroundColor: "white", borderRadius:"15px", display: "flex", justifyContent: "center", alignItems: "center",}}>
          <UploadSvg style={{height:"100%", width:"100%"}}/>
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
