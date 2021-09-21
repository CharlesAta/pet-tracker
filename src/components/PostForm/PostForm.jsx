import React, {Component} from "react";
import "./PostForm.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { MDBInput} from "mdbreact";
import Map from "../Map/Map";
import PlacesAutocomplete from "../PlacesAutocomplete/PlacesAutocomplete";
import Radius from "../Radius/Radius";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
import PetImage from "../PetImage/PetImage";
import UploadImage from "../UploadImage/UploadImage"

export default class PostForm extends Component {
  
  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }
render () {

  return (
    <>
    <h1 style={{textAlign: "center", marginTop: "5%"}}>I {this.props.petState.status} {this.props.petState.status === "lost" ? "my" : "a"}  pet</h1>
        <div id="stepper1" class="bs-stepper">
          <div class="bs-stepper-header">
            <div class="step" data-target="#test-l-1">
              <button class="step-trigger">
                <span class="bs-stepper-circle">1</span>
                <span class="bs-stepper-label">Basic Info</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-2">
              <button class="step-trigger">
                <span class="bs-stepper-circle">2</span>
                <span class="bs-stepper-label">Contact</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-3">
              <button class="step-trigger">
                <span class="bs-stepper-circle">3</span>
                <span class="bs-stepper-label">Overview</span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <Form onSubmit={this.props.handleSubmit}>       
              <div id="test-l-1" class="content">
                <div class="form-group">
                <div className="d-flex flex-row">
                  <PetImage photo={this.props.petState.photo}/>
                  <UploadImage handleChange={this.props.handleChange}/>
                </div>
              </div>

        <Form.Group>
        <select name="circumstance" 
            onChange={this.props.handleChange} 
            className="select form-select mt-2 mr-2">
            <option selected>Select Circumstance</option>
              {this.props.circumstanceOptions.map((s) => 
              <option  value={s}>{s}</option>
            )}
          </select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Pet Name</Form.Label>
          <Form.Control
            placeholder="Enter Pet Name"
            name="name"
            type="text"
            value={this.props.petState.name}
            onChange={this.props.handleChange}
            className="mt-2 mr-2"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Species</Form.Label>
          <select name="species" 
          onChange={this.props.handleChange} 
          className="select form-select mt-2 mr-2">
          <option selected>Select Species</option>
            {this.props.speciesOptions.map((s) => 
            <option  value={s}>{s}</option>
          )}
          </select>
        </Form.Group>

        <Form.Group style={{position:"relative"}}>
          <Form.Label>Nearest Location Last Seen</Form.Label>
          <PlacesAutocomplete user={this.props.user} setPetState={this.props.setPetState} petState={this.props.petState} handleChange={this.props.handleChange} />
        </Form.Group>

        <Form.Group style={{zIndex:"1 !important"}}>
          <Form.Label className="mb-4">Search Radius</Form.Label>
          <Radius setPetState={this.props.setPetState} petState={this.props.petState}/>
        </Form.Group>

        <div className="d-flex justify-content-center mt-4" style={{zIndex:"1 !important"}} >
          <Map lat={this.props.petState.lat} radius={this.props.petState.radius} lng={this.props.petState.lng} location={this.props.petState.location}/>
        </div>

        <Form.Group className="mt-4">
          <Form.Label>Date Last Seen</Form.Label>
          <Form.Control
            placeholder="Date last seen"
            name="date"
            type="date"
            value={this.props.petState.date}
            onChange={this.props.handleChange}
            className="mt-2 mr-2"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Pet Description (Optional)</Form.Label>
          <Form.Control
            placeholder="e.g. Hair length, Color, Collar description, Behaviour"
            name="description"
            as="textarea"
            value={this.props.petState.description}
            onChange={this.props.handleChange}
            className="mt-2 mr-2"
            row={3}
          />
        </Form.Group>
        <div style={{display: "flex", justifyContent: "center"}}>
        <button class="btn btn-primary" type="button" onClick={() => this.stepper.next()}>Save & Continue</button>
          </div>
          </div>
          <div id="test-l-2" class="content">

        <Form.Group>
          <Form.Label>Contact Name</Form.Label>
            <Form.Control 
            name="contact"
            type="text"
            placeholder="Contact Name"
            value={this.props.user.name}
            onChange={this.props.handleChange} 
            className="mt-2 mr-2"
            disabled
            />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
            <Form.Control 
            name="phoneNumber"
            type="text"
            placeholder="Contact Name"
            value={this.props.user.phoneNumber}
            onChange={this.props.handleChange} 
            className="mt-2 mr-2"
            disabled
            />
        </Form.Group>  

        <Form.Group>
          <Form.Label>Email Address</Form.Label>
            <Form.Control 
            name="email"
            type="email"
            placeholder="Email Address"
            value={this.props.user.email}
            onChange={this.props.handleChange} 
            className="mt-2 mr-2"
            disabled
            />
        </Form.Group>
            <div style={{display: "flex", justifyContent: "center"}}>
          <button class="btn btn-primary" type="button" onClick={() => this.stepper.next()}>Save & Continue</button>
            </div>
            </div>
            <div id="test-l-3" class="content">
                
            <h3 className="mt-3">Contact Summary</h3>
            <hr />
              
        <Form.Group>
          <Form.Label>Contact Name</Form.Label>
          <Form.Control 
          placeholder="Contact Name"
          value={this.props.user.name}
          className="mt-2 mr-2"
          disabled
          />
        </Form.Group>  
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
          placeholder="Contact Name"
          value={this.props.user.phoneNumber}
          className="mt-2 mr-2"
          disabled
          />
        </Form.Group>  
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
          placeholder="Email Address"
          value={this.props.user.email}
          className="mt-2 mr-2"
          disabled
          />
        </Form.Group>

          <h3 className="mt-3">Pet Information</h3>
          <hr/>

        <Form.Group>
        <select disabled name="circumstance" 
            className="select form-select mt-2 mr-2">
            <option selected>{this.props.petState.circumstance}</option>
          </select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Pet Name</Form.Label>
          <Form.Control
            disabled
            placeholder="Enter Pet Name"
            value={this.props.petState.name}
            className="mt-2 mr-2"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Species</Form.Label>
          <select disabled 
          className="select form-select mt-2 mr-2">
            <option selected>{this.props.petState.species}</option>
          </select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Nearest Location Last Seen</Form.Label>
          <Form.Control
          disabled
          value={this.props.petState.location}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="mb-4">Search Radius</Form.Label>
          <Form.Control
          disabled
          value={`${this.props.petState.radius} meters`} 
          />
        </Form.Group>

        {/* <div className="d-flex justify-content-center mt-4">
        <Form.Control
          disabled
          value={`${this.props.petState.radius} meters`} 
          />
        </div> */}

        <div className="d-flex justify-content-center mt-4">
          <Map lat={this.props.petState.lat} radius={this.props.petState.radius} lng={this.props.petState.lng} location={this.props.petState.location}/>
        </div>

        <Form.Group className="mt-4">
          <Form.Label>Date Last Seen</Form.Label>
          <Form.Control
            disabled
            value={this.props.petState.date}
            className="mt-2 mr-2"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Pet Description (Optional)</Form.Label>
          <Form.Control
            as="textarea"
            value={this.props.petState.description}
            className="mt-2 mr-2"
            row={3}
            disabled
          />
        </Form.Group>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button className="mt-3" variant="primary" type="submit">
              Submit Post
          </Button>
        </div>
        </div>
      </Form>
    </div>
  </div>

        {/* <Row>
          <Col>
          <Form.Group style={{display: "flex", alignItems: "center"}}>
              <select name="sex" onChange={this.props.handleChange} className="mt-2 mr-2 select form-select">
              <option selected>Pet's Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unknown">Unknown</option>
            </select>
            </Form.Group>
          </Col>
          <Col>
          <Form.Group style={{display: "flex", alignItems: "center"}}>
              <Form.Control 
              name="breed"
              type="text"
              placeholder="Breed"
              value={this.props.petState.breed}
              onChange={this.props.handleChange} 
              className="mt-2 mr-2"
              />
              <FontAwesomeIcon size="lg" className="fa-blank" icon={faExclamationCircle} />
          </Form.Group>              
          </Col>
        </Row>  */}


    </>
  );
}
}
