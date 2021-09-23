import React, { Component } from "react";
import "./FoundPostForm.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import Map from "../Map/Map";
import PlacesAutocomplete from "../PlacesAutocomplete/PlacesAutocomplete";
import Radius from "../Radius/Radius";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";
import PetImage from "../PetImage/PetImage";
import UploadImage from "../UploadImage/UploadImage";
import { Link } from "react-router-dom";

export default class FoundPostForm extends Component {
  componentDidMount() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "5%", color: "white" }}>
          I{" "}
          <span style={{ textTransform: "capitalize" }}>
            {this.props.petState.status}{" "}
          </span>
          {this.props.petState.status === "lost" ? "My" : "a"} Pet
        </h1>
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Basic Info</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Contact</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Overview</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <Form onSubmit={this.props.handleSubmit}>
              <div id="test-l-1" className="content">
                <div className="form-group">
                  <div className="d-flex flex-row">
                    <PetImage photo={this.props.petState.photo} />
                    <UploadImage handleChange={this.props.handleChange} />
                  </div>
                </div>

                <Form.Group>
                  <Form.Label>
                    <span style={{ color: "red" }}>*</span>Select Circumstance
                  </Form.Label>
                  <select
                    name="circumstance"
                    onChange={this.props.handleChange}
                    className="select form-select mt-2 mr-2"
                  >
                    <option selected>Select Circumstance</option>
                    {this.props.circumstanceOptions.map((s) => (
                      <option value={s}>{s}</option>
                    ))}
                  </select>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <span style={{ color: "red" }}>*</span>Pet Name
                      </Form.Label>
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
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        <span style={{ color: "red" }}>*</span>Species
                      </Form.Label>
                      <select
                        name="species"
                        onChange={this.props.handleChange}
                        className="select form-select mt-2 mr-2"
                      >
                        <option selected>Select Species</option>
                        {this.props.speciesOptions.map((s) => (
                          <option value={s}>{s}</option>
                        ))}
                      </select>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group style={{ position: "relative" }}>
                  <Form.Label>
                    <span style={{ color: "red" }}>*</span>Nearest Location Last
                    Seen
                  </Form.Label>
                  <PlacesAutocomplete
                    user={this.props.user}
                    setPetState={this.props.setPetState}
                    petState={this.props.petState}
                    handleChange={this.props.handleChange}
                  />
                </Form.Group>

                <Form.Group style={{ zIndex: "1 !important" }}>
                  <Form.Label className="mb-4">Search Radius</Form.Label>
                  <Radius
                    setPetState={this.props.setPetState}
                    petState={this.props.petState}
                  />
                </Form.Group>

                <div
                  className="d-flex justify-content-center mt-4"
                  style={{ zIndex: "1 !important" }}
                >
                  <Map
                    lat={this.props.petState.lat}
                    radius={this.props.petState.radius}
                    lng={this.props.petState.lng}
                    location={this.props.petState.location}
                  />
                </div>

                <Form.Group className="mt-4">
                  <Form.Label>
                    <span style={{ color: "red" }}>*</span>Date Last Seen
                  </Form.Label>
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
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    class="btn btn-primary btn-block mt-3 mb-3"
                    type="button"
                    onClick={() => this.stepper.next()}
                  >
                    Save & Continue
                  </button>
                </div>
              </div>
              <div id="test-l-2" class="content">
                <Form.Group>
                  <Form.Label>
                    <span style={{ color: "red" }}>*</span>Contact Name
                  </Form.Label>
                  <Form.Control
                    name="contact"
                    type="text"
                    placeholder="Ms. xx"
                    value={this.props.userInfo.name}
                    onChange={this.props.handleUserChange}
                    className="mt-2 mr-2"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <span style={{ color: "red" }}>*</span>Phone Number
                  </Form.Label>
                  <Form.Control
                    name="phoneNumber"
                    type="text"
                    placeholder="(XXX) XXX-XXXX"
                    value={this.props.userInfo.phoneNumber}
                    onChange={this.props.handleUserChange}
                    className="mt-2 mr-2"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    <span style={{ color: "red" }}>*</span>Email Address
                  </Form.Label>
                  <Form.Control
                    placeholder="findmypet@gmail.com"
                    value={this.props.userInfo.email}
                    className="mt-2 mr-2"
                    disabled
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    <span style={{ color: "red" }}>*</span>Postal Code
                  </Form.Label>
                  <Form.Control
                    name="postalCode"
                    type="string"
                    placeholder="XXX XXX"
                    value={this.props.userInfo.postalCode}
                    onChange={this.props.handleUserChange}
                    className="mt-2 mr-2"
                    minlength="6"
                    maxlength="6"
                    required
                  />
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "center" }} className="form-pb-5">
                  <button
                    class="btn btn-primary btn-block mt-5 mb-5"
                    type="button"
                    onClick={() => this.stepper.next()}
                  >
                    Save & Continue
                  </button>
                </div>
              </div>
              <div id="test-l-3" class="content">
                <h3 className="mt-3">Contact Summary</h3>
                <hr />

                <Form.Group>
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control
                    placeholder="Contact Name"
                    value={this.props.userInfo.name}
                    className="mt-2 mr-2"
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    placeholder="Phone Number"
                    value={this.props.userInfo.phoneNumber}
                    className="mt-2 mr-2"
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    placeholder="Email Address"
                    value={this.props.userInfo.email}
                    className="mt-2 mr-2"
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    placeholder="Postal Code"
                    value={this.props.userInfo.postalCode}
                    className="mt-2 mr-2"
                    disabled
                  />
                </Form.Group>

                <h3 className="mt-3">Pet Information</h3>
                <hr />

                <Form.Group>
                  <select
                    disabled
                    name="circumstance"
                    className="select form-select mt-2 mr-2"
                  >
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
                  <select disabled className="select form-select mt-2 mr-2">
                    <option selected>{this.props.petState.species}</option>
                  </select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Nearest Location Last Seen</Form.Label>
                  <Form.Control disabled value={this.props.petState.location} />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="mb-4">Search Radius</Form.Label>
                  <Form.Control
                    disabled
                    value={`${this.props.petState.radius} meters`}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center mt-4">
                  <Map
                    lat={this.props.petState.lat}
                    radius={this.props.petState.radius}
                    lng={this.props.petState.lng}
                    location={this.props.petState.location}
                  />
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
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={()=>this.props.setSubmit(true)}
                    className="mt-3 btn btn-primary btn-block mt-3 mb-3"
                    variant="primary"
                    type="submit"
                  >
                    Submit Post
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </>
    );
  }
}
