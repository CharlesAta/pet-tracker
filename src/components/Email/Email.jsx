import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import "./Email.css";

export default function Email(props) {
    return (
        <div className="my-modal">
            <Modal.Header closeButton>User Information</Modal.Header>
            <Modal.Body>
            CONTACT EMAIL: <div className="contact-info">{props.petState.email} </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>props.closeModal()}>Close</Button>
            </Modal.Footer>
        </div>
    )
}
