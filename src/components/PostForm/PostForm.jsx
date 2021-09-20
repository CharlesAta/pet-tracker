import React from "react";
import "./PostForm.css";
import { Button, Row, Col, Form } from "react-bootstrap";
import { MDBInput} from "mdbreact";
import Map from "../Map/Map";
import PlacesAutocomplete from "../PlacesAutocomplete/PlacesAutocomplete";
import Radius from "../Radius/Radius";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default function PostForm(props) {
  console.log(props.speciesOptions)
  return (
    <>
      <Form onSubmit={props.handleSubmit}>
        <Row className="mt-3">
          <Col>
          <Form.Group style={{display: "flex", alignItems: "center"}}>
            <Form.Control
              placeholder="Pet Name"
              name="name"
              type="text"
              value={props.petState.name}
              onChange={props.handleChange}
              className="mt-2 mr-2"
              required
            />
            <FontAwesomeIcon size="lg" color="red" icon={faExclamationCircle} />
            </Form.Group>
          </Col>
          <Col>

            <Form.Group style={{display: "flex", alignItems: "center"}}>
              <select name="species" 
              onChange={props.handleChange} 
              className="select form-select mt-2 mr-2">
              <option selected>Select Species</option>
              {props.speciesOptions.map((s) => 
                <option  value={s}>{s}</option>
               )}
            </select>
            <FontAwesomeIcon size="lg" color="red" icon={faExclamationCircle} />
            </Form.Group>

          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Group style={{display: "flex", alignItems: "center"}}>
            <Form.Control
              placeholder="Postal Code/City"
              name="postalCode"
              type="text"
              value={props.petState.postalCode}
              onChange={props.handleChange}
              className="mt-2 mr-2"
              required
            />
            <FontAwesomeIcon size="lg" color="red" icon={faExclamationCircle} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group style={{display: "flex", alignItems: "center"}}>
              <Form.Control 
              type="email" 
              name="email"
              placeholder="Email Address"
              value={props.petState.email}
              onChange={props.handleChange}
              className="mt-2 mr-2"
              required/>
              <FontAwesomeIcon size="lg" color="red" icon={faExclamationCircle} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Group style={{display: "flex", alignItems: "center"}}>
              <Form.Control 
              name="breed"
              type="text"
              placeholder="Breed"
              value={props.petState.breed}
              onChange={props.handleChange} 
              className="mt-2 mr-2"
              />
              <FontAwesomeIcon size="lg" className="fa-blank" icon={faExclamationCircle} />
          </Form.Group>  
            
          </Col>
          <Col>
          <Form.Group style={{display: "flex", alignItems: "center"}}>
            <Form.Control
              placeholder="Phone Number"
              name="phoneNumber"
              type="tel"
              value={props.petState.phoneNumber}
              onChange={props.handleChange}
              className="mt-2 mr-2"
            />
            <FontAwesomeIcon size="lg" className="fa-blank" icon={faExclamationCircle} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
        <PlacesAutocomplete setPetState={props.setPetState} petState={props.petState} handleChange={props.handleChange} />
        </Col>
          <Col>
          <Radius setPetState={props.setPetState} petState={props.petState}/>
          </Col>
          <Col>
        <select name="sex" onChange={props.handleChange} className="mt-3 select form-select form-control-sm">
          <option selected>Pet's Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>
          </Col>
          </Row>
          <Row>
          <div className="d-flex justify-content-center">
            <Map lat={props.petState.lat} radius={props.petState.radius} lng={props.petState.lng} location={props.petState.location}/>
          </div>
          </Row>
          <Form.Group>
          <Form.Control
            placeholder="Describe pet's characteristics or personality"
            name="description"
            as="textarea"
            value={props.petState.description}
            onChange={props.handleChange}
            className="mt-2 mr-2"
            row={3}
          />
          </Form.Group>
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
