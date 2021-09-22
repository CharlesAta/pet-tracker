import React, {useState} from 'react'
import { Button, Row, Col, Container, Modal } from "react-bootstrap";
import "./UserInfo.css"
import UpdateInformation from '../UpdateInformation/UpdateInformation';
export default function UserInfo(props) {

    const [showModal, setShowModal] = useState(false)
    function closeModal(){
        setShowModal(false)
    }
    

    return (
        <div className="center-account">
        <div className="user-container mt-5 mb-5">
        <Row className="user-row">
            <Col xs={2} className="account">Account</Col>
            <Col xs={10}>{" "}</Col>
        </Row>
        <Row className="user-row">
            <Col xs={8} className="account-input" >{props.user.name ? `${props.user.name}` : "No Name Provided"}</Col>
            <Col xs={3}><Button className="btn-block" onClick={() => setShowModal(true)}>Update</Button></Col>
        </Row>
        <Row className="user-row">
        <Col xs={4} className="account-input account-two-inputs">{props.user.phoneNumber ? `${props.user.phoneNumber}` : "No Phone Number Provided"}</Col>
        <Col xs={4} className="account-input account-two-inputs">{props.user.postalCode ? `${props.user.postalCode}` : "No Postal Code Provided"}</Col>
        </Row>
        <Row className="user-row">
            <Col xs={8} className="account-input mb-4">{props.user.email ? `${props.user.email}` : "No Email Provided"}</Col>
            <Col xs={5}>{" "}</Col>
        </Row>
        </div>

        <Modal show={showModal} onHide={closeModal}>
            <UpdateInformation user={props.user} closeModal={closeModal} showModal={showModal} setShowModal={setShowModal}  />
        </Modal>

        </div>
    )
}
