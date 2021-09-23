import React, { useState, setState, useEffect } from "react";
import { Tabs, Tab, Nav, Button, Row, Col, Form, Container } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import "./ReportPet.css";
import FoundPostForm from "../../components/FoundPostForm/FoundPostForm";
import LostPostForm from "../../components/LostPostForm/LostPostForm";

const axios = require("axios");

export default function ReportPet(props) {
  const speciesOptions = [
    "Cat",
    "Dog",
    "Fish",
    "Reptile",
    "Bird",
    "Rabbit",
    "Guinea pig",
    "Turtle",
    "Horse",
    "Rat",
    "Others",
  ];
  const circumstanceOptions = [
    "In my possession",
    "Sighting (still roaming)",
    "Deceased",
  ];

  const [petState, setPetState] = useState({
    name: "",
    species: "Others",
    postalCode: "",
    email: props.user.email,
    phoneNumber: props.user.phoneNumber,
    location: "",
    lat: "",
    lng: "",
    description: "",
    status: props.petStatus,
    date: new Date().toLocaleDateString,
    photo: "https://i.imgur.com/e05qeJD.jpg",
    radius: [500],
    circumstance: "Sighting (still roaming)",
  });


  const [userInfo, setUserInfo] = useState({
    name: props.user.name || "",
    phoneNumber: props.user.phoneNumber || "",
    email: props.user.email,
    postalCode: props.user.postalCode || "",
  });

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      setPetState({
        ...petState,
        phoneNumber: userInfo.phoneNumber,
        email: userInfo.email,
      });
    }
    setPetState({...petState, status: props.petStatus})
    
  }, [submit, props.petStatus, props.setThankYouPost]);

  const changeStatus = (k) => {
    props.setPetStatus(k)
  }

  const handleChange = async (evt) => {
    if (evt.target.name === "imageUpload") {
      if (evt.target.files[0]) {
        handleSubmitImage(evt.target.files[0]);
      }
    } else {
      setPetState({ ...petState, [evt.target.name]: evt.target.value });
    }
  };

  const handleUserChange = (evt) => {
    setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value });
  };

  const handleSubmitImage = async (file) => {
    try {
      let formData = new FormData();
      formData.append("file", file);
      await axios.post("/api/posts/image", formData).then((res) => {
        setPetState({ ...petState, photo: res.data.link });
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {
        petState,
        userInfo,
      };

      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/posts/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({ formData }),
      });

      let serverResponse = await fetchResponse.json();

      props.setThankYouPost({id: serverResponse._id, status:serverResponse.status})
      props.history.push('/thankyouforsubmission') 
      setPetState({
        name: "",
        species: "Others",
        postalCode: "",
        email: props.user.email,
        phoneNumber: props.user.phoneNumber,
        location: "",
        lat: "",
        lng: "",
        description: "",
        status: "",
        date: new Date().toLocaleDateString,
        photo: "https://i.imgur.com/e05qeJD.jpg",
        radius: [500],
        circumstance: "Sighting (still roaming)",
      });

      setUserInfo({
        name: props.user.name || "",
        phoneNumber: props.user.phoneNumber || "",
        email: props.user.email,
        postalCode: props.user.postalCode || "",
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  function searchExecute() {
    props.history.push('/searchresults') 
  }

  return (
    <>
      <div className="report"  style={{ minHeight: "100vh" }}>
        <NavBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults} user={props.user} setUser={props.setUser} />
        <div className="post">
        <Tabs activeKey={props.petStatus}
              onSelect={changeStatus}
              className="mb-3 mt-5"> 
          
            <Tab style={{color: "black"}} eventKey="found" title="I Found A Pet">
          <div className="glassContainer">
            <Container
              style={{ zIndex: "10", paddingLeft: "15%", paddingRight: "15%" }}
              className="justify-content-center d-flex text-left flex-column mt-3"
            >
              <FoundPostForm
                submit={submit}
                setSubmit={setSubmit}
                handleUserChange={handleUserChange}
                userInfo={userInfo}
                circumstanceOptions={circumstanceOptions}
                user={props.user}
                speciesOptions={speciesOptions}
                petState={petState}
                setPetState={setPetState}
                handleSubmit={handleSubmit}
                handleChange={handleChange}

              />
            </Container>
          </div>
          </Tab>
            <Tab style={{color: "black"}} eventKey="lost"  title="I Lost My Pet">
          <div className="glassContainer">
            <Container
            style={{ zIndex: "10", paddingLeft: "15%", paddingRight: "15%" }}
            className="justify-content-center d-flex text-left flex-column mt-3"
          >
              <LostPostForm
                submit={submit}
                setSubmit={setSubmit}
                handleUserChange={handleUserChange}
                userInfo={userInfo}
                circumstanceOptions={circumstanceOptions}
                user={props.user}
                speciesOptions={speciesOptions}
                petState={petState}
                setPetState={setPetState}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
            </Container>
          </div>

          </Tab>
          </Tabs>
        </div>
      </div>
      <footer className="mb-5">
      {" "}
      </footer>
    </>
  );
}
