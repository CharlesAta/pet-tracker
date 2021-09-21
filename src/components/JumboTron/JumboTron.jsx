import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Search from "../../components/Search/Search";
import "./JumboTron.css";

export default function JumboTron() {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-around"}}>
    <Jumbotron className="margin-top">
      <Row className="d-flex justify-content-center text-center">
        I Lost My Pet
      </Row>
    </Jumbotron>
    <Jumbotron className="margin-top">
      <Row className="d-flex justify-content-center text-center">
        I found A Pet
        </Row>
    </Jumbotron>
    </div>
    </>
  );
}
