import React from 'react'
import { Card } from "react-bootstrap";
import "./UploadImage.css";

export default function UploadImage() {
    return (
        <>
        <Card style={{ width: "8rem" }} className="d-flex justify-content-end border-0">
          <Card.Img
            variant="top"
            src="https://storage.needpix.com/rsynced_images/instagram-3814061_1280.png"
          />
        </Card>  
        </>
    )
}
