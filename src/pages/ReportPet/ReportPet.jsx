import React, { useState, setState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import "./ReportPet.css"
import PetImage from "../../components/PetImage/PetImage";
import UploadImage from "../../components/UploadImage/UploadImage";
import PostForm from "../../components/PostForm/PostForm";

export default function ReportPet(props) {
  const [petState, setPetState] = useState({
    name: "",
    species: "",
    postalCode: "",
    breed: "",
    phoneNumber: "",
    location: "",
    description: "",
    status: "",
  });


  useEffect(() => {
    if (props.match.params.status === "lost" || props.match.params.status === "found") {
      setPetState({status: props.match.params.status})
    }
  }, [props.match.params.status]);


  const handleChange = (evt) => {
    setPetState({ ...petState, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <NavBar />
      <Container className="justify-content-center d-flex text-left flex-column mt-3">
        <div className="d-flex flex-row">
          <PetImage />
          <UploadImage />
          <h3>Status: {petState.status.toLocaleUpperCase()}</h3>
        </div>
        <PostForm petState={petState} handleSubmit={handleSubmit} handleChange={handleChange} />
      </Container>
    </>
  );
}
