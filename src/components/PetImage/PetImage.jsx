import React from "react";
import { Card, Form, Row } from "react-bootstrap";
import "./PetImage.css";

export default function PetImage(props) {

  return (
    <>
      <Card style={{ width: "18rem", height: "18rem" }} className="PetImage">
        <Card.Img
          variant="top"
          src={props.photo}
          style={{ width: "18rem", height: "18rem", objectFit:"contain"}}
        />
      </Card>

    </>
  );
}
