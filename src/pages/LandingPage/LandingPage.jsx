import React, { useState, useEffect } from "react";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import JumboTron from "../../components/JumboTron/JumboTron";
import "./LandingPage.css";

export default function LandingPage(props) {

  const [latestPost, setLatestPost] = useState({
    status: "",
    species: "",
    date: "",
    location: ""
  })

  useEffect(async() => {

     try {
       let fetchItemsResponse = await fetch(`/api/posts/latest`) 
       let latestPost = await fetchItemsResponse.json(); 
       setLatestPost(latestPost[0])
     } catch (err) {
       console.error('ERROR:', err) 
     }
    //  backgroundImage = 
    }, [setLatestPost])
  
  

  return (
    <div
      className="landing"
      id="home"
      style={
        props.user
          ? { minHeight: "100vh", maxWidth: "100%"}
          : { minHeight: "96vh", maxWidth: "100%"}
      }
    >
      <NavBar user={props.user} setUser={props.setUser} />
      {props.user ? 
      <div className="d-flex margin-top">
        <Link to="/reportpet" onClick={()=> props.setPetStatus("lost")} >
      <div className="glass-container d-flex justify-content-center align-items-center container-text">
        I Lost My Pet
      </div>
      </Link>
      <Link to="/reportpet" onClick={()=> props.setPetStatus("found")}>
      <div className="glass-container d-flex justify-content-center align-items-center container-text" >
        I Found A Pet
      </div>
      </Link>
  </div>
        :
      <div className="d-flex margin-top">
          <div className="glass-container d-flex justify-content-center align-items-center container-text" onClick={() => {
                    window.location.replace("/#auth");
                  }}>
            I Lost My Pet
          </div>
          <div className="glass-container d-flex justify-content-center align-items-center container-text" onClick={() => {
                    window.location.replace("/#auth");
                  }}>
            I Found A Pet
          </div>
      </div>
      }
      <Row className="landing-footer">
        <div className="glass-container align-bottom-left latest-post pl-3" style={latestPost.status === "lost" ? {backgroundColor: "rgba(121, 0, 0, 0.3)"} : {backgroundColor: "rgba(0, 32, 121, 0.3)"} }>
          {latestPost ?
          <>
          <div><strong>{latestPost.status.toUpperCase()} {latestPost.species.toUpperCase()}</strong> </div> 
          <div>{new Date(latestPost.date).toLocaleDateString()}</div>
          <div>{latestPost.location}</div>
          </>
          :
          <p>No New Posts</p>
          }
        </div>
        <div className="glass-container align-bottom-right d-flex">
          Share to
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </Row>
    </div>
  );
}

