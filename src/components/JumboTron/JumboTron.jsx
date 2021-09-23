import React from "react";
import { Jumbotron, Row } from "react-bootstrap";
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
