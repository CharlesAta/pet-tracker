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
          <Form.Row>
            <Form.Group className="search" size="sm" as={Col}>
              <Form.Control
                type="text"
                name="search"
                placeholder="Search..."
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
