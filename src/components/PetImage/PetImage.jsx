import React from "react";
import { Card} from "react-bootstrap";
import "./PetImage.css";

export default function PetImage(props) {
  return (
    <>
      <Card
        className="PetImage"
      >
        <Card.Img
          variant="top"
          src={props.photo}
        />
      </Card>
    </>
  );
}
