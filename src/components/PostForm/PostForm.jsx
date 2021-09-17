import React from 'react'
import "./PostForm.css"
import { Button, Row, Col, Form } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import Map from '../Map/Map';

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
            containerClass='d-flex flex-row-reverse'
            className='ml-0 mr-5'
            labelClass='ml-0'
            required
          />
              {/* <Form.Group>
                <Form.Control
                  placeholder="Pet Name"
                  type="text"
                  name="name"
                  value={props.petState.name}
                  onChange={props.handleChange}
                  required
                />
              </Form.Group> */}
            </Col>
            <Col>
            <MDBInput
            label="Species"
            icon="exclamation-circle deep-orange-text pr-3"
            name="species"
            type="text"
            value={props.petState.species}
            onChange={props.handleChange}
            containerClass='d-flex flex-row-reverse'
            className='ml-0 mr-5'
            labelClass='ml-0'
            required
          />
              {/* <Form.Group>
                <Form.Control
                  placeholder="Species"
                  type="text"
                  name="species"
                  value={props.petState.species}
                  onChange={props.handleChange}
                  required
                />
              </Form.Group> */}
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
            containerClass='d-flex flex-row-reverse'
            className='ml-0 mr-5'
            labelClass='ml-0'
            required
          />
              {/* <Form.Group>
                <Form.Control
                  placeholder="Postal Code/City"
                  type="text"
                  name="postalCode"
                  value={props.petState.postalCode}
                  onChange={props.handleChange}
                  required
                />
              </Form.Group> */}
            </Col>
            <Col>
            <MDBInput
            label="Contact Email"
            icon="exclamation-circle deep-orange-text pr-3"
            name="email"
            type="email"
            value={props.petState.email}
            onChange={props.handleChange}
            containerClass='d-flex flex-row-reverse'
            className='ml-0 mr-5'
            labelClass='ml-0'
            required
          />
              {/* <Form.Group>
                <Form.Control
                  placeholder="Contact Email"
                  type="email"
                  name="email"
                  value={props.petState.email}
                  onChange={props.handleChange}
                  required
                />
              </Form.Group> */}
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
            containerClass='d-flex flex-row-reverse'
            className='ml-0 mr-5'
            labelClass='ml-0'
            required
          />
              {/* <Form.Group>
                <Form.Control
                  placeholder="Breed"
                  type="text"
                  name="breed"
                  value={props.petState.breed}
                  onChange={props.handleChange}
                />
              </Form.Group> */}
            </Col>
            <Col>
            <MDBInput
            label="Phone Number"
            icon="none pr-3"
            name="phoneNumber"
            type="tel"
            value={props.petState.phoneNumber}
            onChange={props.handleChange}
            containerClass='d-flex flex-row-reverse'
            className='ml-0 mr-5'
            labelClass='ml-0'
            required
          />
              {/* <Form.Group>
                <Form.Control
                  placeholder="Phone Number"
                  type="text"
                  name="phoneNumber"
                  value={props.petState.phoneNumber}
                  onChange={props.handleChange}
                />
              </Form.Group> */}
            </Col>
          </Row>
          <MDBInput
            label="Last known location"
            icon="exclamation-circle deep-orange-text pr-1"
            name="location"
            type="text"
            value={props.petState.location}
            onChange={props.handleChange}
            containerClass='d-flex flex-row-reverse'
            className='ml-0 mr-5'
            labelClass='ml-0'
            required
          />
          {/* <Form.Group>
            <Form.Control
              placeholder="Last known location"
              type="text"
              name="location"
              value={props.petState.location}
              onChange={props.handleChange}
            />
          </Form.Group> */}
          <div className="d-flex justify-content-center">
            <Map />
          </div>
          <MDBInput
            label="Describe pet's characteristics or personality"
            name="description"
            type="textarea"
            value={props.petState.description}
            onChange={props.handleChange}
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
            ></textarea>
          </Form.Group> */}
          <div className="text-right">
          <Form.Text>
            <Form.Group className="text">
              <Form.Check type="checkbox" label="Sign me up for local pet alerts" />
            </Form.Group>
          </Form.Text>
            <Button className="mt-3" variant="primary" type="submit">
              Create Post
            </Button>
          </div>
        </Form>  
        </>
    )
}
