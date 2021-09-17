import React from 'react'
import "./PostForm.css"
import { Button, Row, Col, Form } from "react-bootstrap";

export default function PostForm(props) {
    return (
        <>
          <Form onSubmit={props.handleSubmit}>
          <Row className="mt-3">
            <Col>
              <Form.Group>
                <Form.Control
                  placeholder="Pet Name"
                  type="text"
                  name="name"
                  value={props.petState.name}
                  onChange={props.handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  placeholder="Species"
                  type="text"
                  name="species"
                  value={props.petState.species}
                  onChange={props.handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  placeholder="Postal Code/City"
                  type="text"
                  name="postalCode"
                  value={props.petState.postalCode}
                  onChange={props.handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  placeholder="Contact Email"
                  type="email"
                  name="email"
                  value={props.petState.email}
                  onChange={props.handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  placeholder="Breed"
                  type="text"
                  name="breed"
                  value={props.petState.breed}
                  onChange={props.handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  placeholder="Phone Number"
                  type="text"
                  name="phoneNumber"
                  value={props.petState.phoneNumber}
                  onChange={props.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Control
              placeholder="Last known location"
              type="text"
              name="location"
              value={props.petState.location}
              onChange={props.handleChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <img src="https://pressbooks.library.yorku.ca/scalar/wp-content/uploads/sites/7/2017/11/landing-page-gif.gif" />
          </div>

          <Form.Group className="mt-3">
            <textarea
              class="form-control"
              rows="3"
              placeholder="Describe pet's characteristics or personality"
              type="text"
              name="location"
              value={props.petState.location}
              onChange={props.handleChange}
            ></textarea>
          </Form.Group>
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
