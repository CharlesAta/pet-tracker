import React, {useEffect, useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Details.css";
import DetailsMap from '../../components/DetailsMap/DetailsMap.jsx';
import { Badge, Row, Col, Container, Button, Modal } from "react-bootstrap";
import Email from '../../components/Email/Email';
import PhoneNumber from '../../components/PhoneNumber/PhoneNumber';

export default function Details(props) {
  
  const [showModal, setShowModal] = useState(false)
  function closeModal(){
      setShowEmailModal(false)
      setShowPhoneModal(false)
  }

  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);


  const [petState, setPetState] = useState([])

  useEffect(async() => {
      try {
        let fetchItemsResponse = await fetch(`/api/posts/${props.match.params.id}`) 
        let details = await fetchItemsResponse.json(); 
        setPetState(details)
        console.log("pet:", petState)
      } catch (err) {
        console.error('ERROR:', err) 
      }
      }, [])

    return (
        <>
        <div className="details"  style={{ minHeight: "100vh" }}>
          <NavBar user={props.user} setUser={props.setUser}/>
          <div class="detail-center mt-5">
          <div class="detail-container">
            <div style={{paddingLeft: "15%", paddingRight: "15%"}}>
            <Container>
          <Row>
            <Col>
            <div className={petState.status === "lost"? "detail-badge-lost mt-5 detail-page":"detail-badge-found mt-5 detail-page"}><p>{petState.status === "lost" ? "lost" : petState.circumstance}</p></div>
            </Col>
            <Col>
            <div className="mt-5 post-id">
            <b>Post ID: {petState._id}</b>
            </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col><img src={petState.photo} className="details-image"/></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col xs={6} className="right-padding">
            <Row>
              <Col> 
              <div className="detailLabels">
              Name
              </div>
              <div className="detailInputs">
                <p>{petState.name}</p>
              </div>
              </Col>
              <Col>
              <div className="detailLabels">
              Species
              </div>
              <div className="detailInputs">
                <p>{petState.species}</p>
              </div>
              </Col>
            </Row>
            <Row >
              <Col>
              <div className="detailLabels">
              Date Last Seen
              </div>
              <div className="detailInputs">
                <p>{new Date(petState.date).toLocaleDateString()}</p>
              </div>
              </Col>
              <Col>
              <div className="detailLabels">
              Location Last Seen
              </div>
              <div className="detailInputs">
                <p>{petState.postalCode}</p>
              </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <DetailsMap location={petState.location} lat={petState.lat} lng={petState.lng} radius={petState.radius}/>
            </Row>
            </Col>
            <Col xs={6} className="mt-5 left-padding">
              
              {petState.description ? 
              <>
              <div className="detailDescription-content">
                {petState.description}
                </div>
                </>
                 :
                 <>
                 <div className="detailDescription-no-content">
                   No Description Provided
                   </div>
                   </>
                   } 
              
            </Col>
          </Row>
          <Row>
            <Col className="detailButtons">
            <Col >
              <Button className="btn-block mt-5 mb-5" variant="primary">Share</Button>
            </Col>
            <Col>
              <Button className="btn-block mt-5 mb-5" onClick={() => setShowPhoneModal(true)} variant="primary">View Phone</Button>
            </Col>
            </Col>
            <Col className="left-padding">
            <Button className="btn-block mt-5 mb-5" onClick={() => setShowEmailModal(true)} variant="primary">{petState.status === "lost"? "Contact Owner": "Contact Finder"}</Button>
            </Col>
          </Row>
          </Container>
          </div>
          </div>
          </div>
        </div>
        <Modal show={showEmailModal} onHide={closeModal}>
            <Email petState={petState} closeModal={closeModal}/>
        </Modal>
        <Modal show={showPhoneModal} onHide={closeModal}>
            <PhoneNumber petState={petState} closeModal={closeModal}/>
        </Modal>
        </>
    )
}
