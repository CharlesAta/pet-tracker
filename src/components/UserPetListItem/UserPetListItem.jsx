import React, {useState} from 'react'
import "./UserPetListItem.css";
import {Container, Button, Row, Col, Badge, Modal} from 'react-bootstrap'
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBCardImage} from "mdbreact";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import DeletePost from '../DeletePost/DeletePost';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function PetListItem(props) {

    const [showModal, setShowModal] = useState(false)
    function closeModal(){
        setShowModal(false)
    }

    function showDate() {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let postingDate = new Date(props.post.createdAt) //props.post.createdAt
        let todaysDate = new Date()
        const diffDays = Math.round(Math.abs((todaysDate - postingDate) / oneDay));
        let weeks = Math.floor( diffDays / 7);
        if (weeks < 1) {
            return `${diffDays} Day(s) Ago`
        } else if (weeks >= 4) {
            return postingDate.toLocaleDateString
        } else {
            return `${weeks} Week(s) Ago`
        }
    }

    showDate()

    return (
        <>
        <MDBContainer>
            <MDBCard className="card-body w-75 mb-5 mx-auto list-item-body">
            <Row>
                <Col sm={4}>
                    <div className="posting-image">
                    <h5 className="posting-status-font"><span class={props.post.status === "lost" ? "badge badge-danger posting-status" : "badge badge-primary posting-status"}>{props.post.status.toUpperCase()}</span></h5>
                    <img className="img-fluid list-item-image" src={props.post.photo} />
                    </div>
                </Col>
                <Col className="mr-3">
                <Row className="pt-3">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <MDBCardTitle>{props.post.name}</MDBCardTitle>
                    <p className="card-location" style={{textAlign: "right"}}>{props.post.location.split(",")[0]}, {props.post.postalCode}</p>
                </div>
                </Row>
                <Row> 
                    <MDBCardText className="card-description" >
                        {props.post.description}
                    </MDBCardText>
                </Row>
                <Row >

                <div className="d-flex flex-row alignBottom" style={{justifyContent: "space-between", alignItems: "flex-end"}}>
                    <span className="search-date">{showDate()}</span>


                    <Button className="" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faTrash} /></Button>
                    
                    <Link className="detail-link" to={{pathname: '/details/' + props.post._id}}>Details</Link>
                    </div>
                </Row>
                </Col>
            </Row>
            </MDBCard>
        </MDBContainer>
        <Modal show={showModal} onHide={closeModal}>
            <DeletePost user={props.user} post={props.post} closeModal={closeModal} showModal={showModal} setShowModal={setShowModal} updateDelete={props.updateDelete} setUpdateDelete={props.setUpdateDelete} />
        </Modal>


        </>
    )
}

