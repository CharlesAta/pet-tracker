import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Search.css";
import { MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  function handleSubmit(e) {
    console.log("search")
    e.preventDefault();
  }

  return (
      <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="search">
              <Form.Control
                type="text"
                name="search"
                placeholder= "Search..."
                id="search"
                required
              />
            </Form.Group>
        </Form>
      </div> 
  );
}




