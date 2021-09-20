import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Search.css";

export default function Search() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Row className="align-items-center">
            <Form.Group className="search" as={Col}>
              <Form.Control
                type="text"
                name="search"
                placeholder="Search..."
                // style={{width:350}}
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Button type="submit">Search!</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}
