import React, {Fragment} from 'react'
import "./PetListItem.css";
import {Container, Button, Row, Col, Badge} from 'react-bootstrap'
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBCardImage} from "mdbreact";

export default function PetListItem(props) {

    function showDate() {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let postingDate = new Date(props.post.createdAt) //props.post.createdAt
        let todaysDate = new Date()
        // new Date('1988-03-21')
        // const firstDate = new Date(2008, 1, 12);
        // const secondDate = new Date(2009, 1, 22);
        const diffDays = Math.round(Math.abs((todaysDate - postingDate) / oneDay));
        let weeks = Math.floor( diffDays / 7);
        if (weeks < 1) {
            return '<1 Week Ago'
        } else if (weeks >= 4 && weeks < 52) {
            let months = Math.floor(weeks / 4);
            return `${months} Month(s) Ago`
        } else if (weeks >= 52){
            let years = Math.floor(weeks / 52);
            return `${years} Year(s) Ago`
        }else {
            return `${weeks} Week(s) Ago`
        }
    }

    showDate()



    return (
        <MDBContainer>
            <MDBCard className="card-body w-100 mb-4">
            <Row>
                <Col sm={4}>
                    <img className="img-fluid" src={props.post.photo} />
                </Col>
                <Col>
                <Row style={{display: 'flex', justifyContent: "flex-end"}}>
                <p><span className="badge bg-secondary"> {showDate()}</span></p>
                </Row>
                <Row>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <MDBCardTitle>{props.post.name}</MDBCardTitle>
                    <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                        {props.post.sex} {props.post.species}
                    </MDBCardTitle>
                    <MDBCardTitle style={{textAlign: "right"}}>{props.post.location.split(",")[0]}</MDBCardTitle>
                </div>
                    <MDBCardTitle  tag="h6" sub className="mb-2 text-muted">
                        Number: {props.post._id.slice(-5).toUpperCase()}
                    </MDBCardTitle>
                    <MDBCardText>
                        {props.post.description}
                    </MDBCardText>
                        <div className="d-flex flex-row-reverse alignBottom">
                        <Button href="#">DETAIL</Button>
                        </div>
                </Row>
                </Col>
            </Row>
            </MDBCard>
        </MDBContainer>
    )
}

