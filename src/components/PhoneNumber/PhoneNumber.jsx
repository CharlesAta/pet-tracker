import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';


export default function PhoneNumber(props) {
    return (
        <div>
            <Modal.Header closeButton>User Information</Modal.Header>
            <Modal.Body>
            CONTACT PHONE NUMBER: <div className="contact-info">{props.petState.phoneNumber}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>props.closeModal()}>Close</Button>
            </Modal.Footer>
        </div>
    )
}
