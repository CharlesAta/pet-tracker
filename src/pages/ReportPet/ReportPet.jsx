import React, { useState, setState } from "react";
import { Card, Container, Button, Row, Col, Form } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import "./ReportPet.css"

export default function ReportPet() {
  const [petState, setPetState] = useState({
    name: "",
    species: "",
    postalCode: "",
    breed: "",
    phoneNumber: "",
    location: "",
    description: "",
  });

  const handleChange = (evt) => {
    setState({ ...petState, [evt.target.name]: evt.target.value, error: "" });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <NavBar />
      {/* <Row className="d-flex flex-row justify-content-start ImagesPlaceholder">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://millenroadanimalhospital.com/wp-content/uploads/2019/03/Dogs.jpg"
            />
          </Card>
        </div>
        <div>
        <Card style={{ width: "8rem" }}>
          <Card.Img
            variant="top"
            src="https://storage.needpix.com/rsynced_images/instagram-3814061_1280.png"
          />
        </Card>
        </div>
        </Row> */}

      <Container className="justify-content-center d-flex text-left flex-column mt-3">
      {/* <Row className="d-flex flex-row justify-content-start ImagesPlaceholder">
        <div> */}
        <div className="d-flex flex-row">
          <Card style={{ width: "18rem" }} className="PetImage">
            <Card.Img
              variant="top"
              src="https://millenroadanimalhospital.com/wp-content/uploads/2019/03/Dogs.jpg"
            />
          </Card>
        {/* </div>
        <div> */}
        <Card style={{ width: "8rem" }} className="d-flex justify-content-end border-0">
          <Card.Img
            variant="top"
            src="https://storage.needpix.com/rsynced_images/instagram-3814061_1280.png"
          />
        </Card>
        </div>
        {/* </div>
        </Row> */}
        <Form onSubmit={handleSubmit}>
          <Row className="mt-3">
            <Col>
              <Form.Group>
                <Form.Control
                  placeholder="Pet Name"
                  type="text"
                  name="name"
                  value={petState.name}
                  onChange={handleChange}
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
                  value={petState.species}
                  onChange={handleChange}
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
                  value={petState.postalCode}
                  onChange={handleChange}
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
                  value={petState.email}
                  onChange={handleChange}
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
                  value={petState.breed}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  placeholder="Phone Number"
                  type="text"
                  name="phoneNumber"
                  value={petState.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Control
              placeholder="Last known location"
              type="text"
              name="location"
              value={petState.location}
              onChange={handleChange}
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
              value={petState.location}
              onChange={handleChange}
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
      </Container>
    </>
  );
}
