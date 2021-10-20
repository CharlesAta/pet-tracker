import React, {useEffect, useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Details.css";
import DetailsMap from '../../components/DetailsMap/DetailsMap.jsx';
import { Badge, Row, Col, Container, Button, Modal } from "react-bootstrap";
import Email from '../../components/Email/Email';
import PhoneNumber from '../../components/PhoneNumber/PhoneNumber';
import Share from '../../components/Share/Share';

export default function Details(props) {
  
  const [showModal, setShowModal] = useState(false)
  function closeModal(){
      setShowEmailModal(false)
      setShowPhoneModal(false)
      setShowShareModal(false)
  }

  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const [petState, setPetState] = useState([])

  useEffect(async() => {
      try {
        let fetchItemsResponse = await fetch(`/api/posts/${props.match.params.id}`) 
        let details = await fetchItemsResponse.json(); 
        setPetState(details)
      } catch (err) {
        console.error('ERROR:', err) 
      }
      }, [])

  function searchExecute() {
    props.history.push('/searchresults') 
  }

    return (
        <>
        <div className="details"  style={{ minHeight: "100vh" }}>
          <NavBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults}  user={props.user} setUser={props.setUser}/>
          <div className="detail-center mt-5">
          <div className="detail-container">
            <div className="pet-info-container">
            <Container>
          <Row className="pet-post-status">
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
            <Col lg={6} className="right-padding">
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
            <Row className="mt-5 map-detail">
              <DetailsMap location={petState.location} lat={petState.lat} lng={petState.lng} radius={petState.radius}/>
            </Row>
            </Col>
            <Col lg={6} className="mt-5 left-padding">
              
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
          <Row className="all-buttons">
            <Col className="detail-buttons">
            <Col >
              <Button className="btn-block mt-4 mt-sm-5 mb-4 mb-sm-5" onClick={() => setShowShareModal(true)} variant="primary">Share</Button>
            </Col>
            <Col>
              <Button className="btn-block mt-4 mt-sm-5 mb-4 mb-sm-5" onClick={() => setShowPhoneModal(true)} variant="primary">Phone</Button>
            </Col>
            </Col>
            <Col className="left-padding">
            <Button className="btn-block mt-3 mt-sm-5 mb-4 mb-sm-5" onClick={() => setShowEmailModal(true)} variant="primary">{petState.status === "lost"? "Contact Owner": "Contact Finder"}</Button>
            </Col>
          </Row>
          </Container>
          </div>
          </div>
          </div>
        </div>
        <Modal show={showShareModal} onHide={closeModal}>
            <Share petState={petState} closeModal={closeModal}/>
        </Modal>
        <Modal show={showEmailModal} onHide={closeModal}>
            <Email petState={petState} closeModal={closeModal}/>
        </Modal>
        <Modal show={showPhoneModal} onHide={closeModal}>
            <PhoneNumber petState={petState} closeModal={closeModal}/>
        </Modal>
        </>
    )
}
