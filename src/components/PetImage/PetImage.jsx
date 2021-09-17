import React from 'react'
import { Card } from "react-bootstrap";
import "./PetImage.css";

export default function PetImage() {
    return (
        <>
            <Card style={{ width: "18rem" }} className="PetImage">
            <Card.Img
              variant="top"
              src="https://millenroadanimalhospital.com/wp-content/uploads/2019/03/Dogs.jpg"
            />
          </Card>
        </>
    )
}
