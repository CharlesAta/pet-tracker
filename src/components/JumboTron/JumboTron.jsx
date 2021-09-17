import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Search from "../../components/Search/Search";

export default function JumboTron() {
  return (
    <Jumbotron>
      <Container>
        <Search />
        <Row className="d-flex justify-content-center text-center">
          <Col sm={6}>I lost my pet</Col>
          <Col sm={6}>I found a pet</Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
