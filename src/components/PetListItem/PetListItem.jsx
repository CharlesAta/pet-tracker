import React, {Fragment} from 'react'
import "./PetListItem.css";
import {Container, Button, Row, Col, Badge} from 'react-bootstrap'
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBCardImage} from "mdbreact";
import { Link } from "react-router-dom";
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';


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
                    <Link className="detail-link" to={{pathname: '/details/' + props.post._id}}>Details</Link>
                    </div>
                </Row>
                </Col>
            </Row>
            </MDBCard>
        </MDBContainer>

        </>
    )
}

