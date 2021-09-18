import React, { useState, setState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import "./ReportPet.css"
import PetImage from "../../components/PetImage/PetImage";
import UploadImage from "../../components/UploadImage/UploadImage";
import PostForm from "../../components/PostForm/PostForm";

const axios = require('axios');

export default function ReportPet(props) {
  const [petState, setPetState] = useState({
    name: "",
    species: "",
    postalCode: "",
    email: "",
    breed: "",
    phoneNumber: "",
    location: "",
    description: "",
    status: "",
    photo: "https://i.imgur.com/e05qeJD.jpg",
  });

  useEffect(() => {
    if (props.match.params.status === "lost" || props.match.params.status === "found") {
      setPetState({...petState, status: props.match.params.status})
    }
  }, [props.match.params.status]);

  const handleChange = async (evt) => {
    if (evt.target.name === "imageUpload") {
      if (evt.target.files[0]) {
        handleSubmitImage(evt.target.files[0])
        }
      }
     else {
      setPetState({ ...petState, [evt.target.name]: evt.target.value });
    }
  };


  const handleSubmitImage = async(file) => {
    try {
      let formData = new FormData();
      formData.append('file', file)
      await axios.post('/api/posts/image',formData).then(res => {
        setPetState({...petState, photo: res.data.link})
        console.log(petState)  
      })
    } catch (err){
      console.log(err.message)
    }
  }


const handleSubmit = async (evt) => {
  evt.preventDefault();

  try {
    let jwt = localStorage.getItem('token')
    let fetchResponse = await fetch("/api/posts/data", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({petState}), 
      }) 
      
    let serverResponse = await fetchResponse.json()
    console.log("Success:", serverResponse) 

    setPetState({
      name: "",
      species: "",
      postalCode: "",
      email:"",
      breed: "",
      phoneNumber: "",
      location: "",
      description: "",
      status: props.match.params.status,
      photo: "https://i.imgur.com/e05qeJD.jpg",
    }) 
  } catch (err) {
    console.error("Error:", err) 
  }
};

  
  return (
    <>
      <NavBar />
      <Container className="justify-content-center d-flex text-left flex-column mt-3">
        <div className="d-flex flex-row">
          
          <PetImage photo={petState.photo}/>
          <UploadImage handleChange={handleChange}/>
          <h3 style={{zIndex: 2}}>Status: {petState.status.toLocaleUpperCase()}</h3>
        </div>
        <PostForm petState={petState} handleSubmit={handleSubmit} handleChange={handleChange} />
      </Container>
    </>
  );
}
