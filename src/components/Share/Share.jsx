import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import "./Share.css";
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";


export default function Share(props) {
    return (
        <div className="my-modal">
        <Modal.Header closeButton>Share This Post on: </Modal.Header>
        <Modal.Body >
        <div className="share-button">
        <FacebookShareButton 
                url={window.location.href}
                quote={"Paway - Reuniting pets with owners"}
                hashtag="#Paway">
                <i className="fab fa-facebook-f"></i>
          </FacebookShareButton>

          <WhatsappShareButton 
                url={window.location.href}
                quote={"Paway - Reuniting pets with owners"}
                hashtag="#Paway">
                <i className="fab fa-whatsapp"></i>
          </WhatsappShareButton>
         

          <TwitterShareButton 
                url={window.location.href}
                quote={"Paway - Reuniting pets with owners"}
                hashtag="#Paway">
                <i className="fab fa-twitter"></i>
          </TwitterShareButton>
        </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>props.closeModal()}>Close</Button>
        </Modal.Footer>
        </div>
    )
}
