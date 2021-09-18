import React from "react";
import "./PostForm.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import Map from "../Map/Map";

export default function PostForm(props) {
  return (
    <>
      <Form onSubmit={props.handleSubmit}>
        <Row className="mt-3">
          <Col>
            <MDBInput
              label="Pet Name"
              icon="exclamation-circle deep-orange-text pr-3"
              name="name"
              type="text"
              value={props.petState.name}
              onChange={props.handleChange}
              containerClass="d-flex flex-row-reverse"
              className="ml-0 mr-5"
              labelClass="ml-0"
              required
            />
          </Col>
          <Col>
            <MDBInput
              label="Species"
              icon="exclamation-circle deep-orange-text pr-3"
              name="species"
              type="text"
              value={props.petState.species}
              onChange={props.handleChange}
              containerClass="d-flex flex-row-reverse"
              className="ml-0 mr-5"
              labelClass="ml-0"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MDBInput
              label="Postal Code/City"
              icon="exclamation-circle deep-orange-text pr-3"
              name="postalCode"
              type="text"
              value={props.petState.postalCode}
              onChange={props.handleChange}
              containerClass="d-flex flex-row-reverse"
              className="ml-0 mr-5"
              labelClass="ml-0"
              required
            />
          </Col>
          <Col>
            <MDBInput
              label="Contact Email"
              icon="exclamation-circle deep-orange-text pr-3"
              name="email"
              type="email"
              value={props.petState.email}
              onChange={props.handleChange}
              containerClass="d-flex flex-row-reverse"
              className="ml-0 mr-5"
              labelClass="ml-0"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MDBInput
              label="Breed"
              icon="none pr-3"
              name="breed"
              type="text"
              value={props.petState.breed}
              onChange={props.handleChange}
              containerClass="d-flex flex-row-reverse"
              className="ml-0 mr-5"
              labelClass="ml-0"
            />
          </Col>
          <Col>
            <MDBInput
              label="Phone Number"
              icon="none pr-3"
              name="phoneNumber"
              type="number"
              value={props.petState.phoneNumber}
              onChange={props.handleChange}
              containerClass="d-flex flex-row-reverse"
              className="ml-0 mr-5"
              labelClass="ml-0"
            />
          </Col>
        </Row>

        <MDBInput
            label="Last known location"
            name="location"
            icon="exclamation-circle deep-orange-text pr-3"
            type="text"
            value={props.petState.location}
            onChange={props.handleChange}
            containerClass="d-flex flex-row-reverse"
            className="ml-0 mr-5"
            labelClass="ml-0"
            required
          />


          <div className="d-flex justify-content-center">
            <Map />
          </div>
          <MDBInput
            label="Describe pet's characteristics or personality"
            name="description"
            icon="exclamation-circle deep-orange-text pr-3"
            type="textarea"
            value={props.petState.description}
            onChange={props.handleChange}
            containerClass="d-flex flex-row-reverse"
            className="ml-0 mr-5"
            labelClass="ml-0"
            required
          />
          {/* <Form.Group className="mt-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Describe pet's characteristics or personality"
              type="text"
              name="location"
              value={props.petState.location}
              onChange={props.handleChange}
              containerClass="d-flex flex-row-reverse"
              className="ml-0 mr-5"
              labelClass="ml-0"         
            />
          </Form.Group>
        <MDBInput
          label="Last known location"
          icon="exclamation-circle deep-orange-text pr-1"
          name="location"
          type="text"
          value={props.petState.location}
          onChange={props.handleChange}
          containerClass="d-flex flex-row-reverse"
          className="ml-0 mr-5"
          labelClass="ml-0"
          required
        />
        <div className="d-flex justify-content-center">
          <Map />
        </div>
        <MDBInput
          label="Describe pet's characteristics or personality"
          name="description"
          type="textarea"
          value={props.petState.description}
          onChange={props.handleChange}
        /> */}
        <div className="text-right">
          <Form.Text>
            <Form.Group className="text">
              <Form.Check
                type="checkbox"
                label="Sign me up for local pet alerts"
              />
            </Form.Group>
          </Form.Text>
          <Button className="mt-3" variant="primary" type="submit">
            Create Post
          </Button>
        </div>
      </Form>
    </>
  );
}
