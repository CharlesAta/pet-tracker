import React, { useState, useEffect } from "react";
// import AuthPage from "../AuthPage/AuthPage";
// import MainContent from "../MainContent/MainContent";
// import { Route, Switch, Link, Redirect } from "react-router-dom";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import JumboTron from "../../components/JumboTron/JumboTron";
import "./LandingPage.css";


export default function LandingPage(props) {
  // const [showLogin, setShowLogin] = useState(true);
  console.log("showLogin - landing page", props.showLogin);

  const [latestPost, setLatestPost] = useState({})

 useEffect(async() => {
     try {
       let fetchItemsResponse = await fetch(`/api/posts/latest`) 
       let latestPost = await fetchItemsResponse.json(); 
       setLatestPost(latestPost)
       
     } catch (err) {
       console.error('ERROR:', err) 
     }
    }, [])
  

  return (
    <div
      className="landing"
      id="home"
      style={
        props.user
          ? { minHeight: "100vh", maxWidth: "100%" }
          : { minHeight: "96vh", maxWidth: "100%" }
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
        <div className="glass-container align-bottom-left d-flex">
          Latest Information
          {latestPost.name}
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

{
  /* <Row>
<Col sm={6}>SIGN IN TO GET ALERT</Col>
<Col className="mt-3"sm={6}>
<LoginForm setShowLogin={props.setShowLogin} setUser={props.setUser}/>
   <h3 onClick={() => setShowLogin(!showLogin)}>
    {showLogin ? "SIGN UP" : "LOG IN"}
  </h3>
  {showLogin ? (
    <LoginForm setUserInState={setUserInState} />
  ) : (
    <SignUpForm setUserInState={setUserInState} />
  )} 
</Col>
</Row> 
{user ? <ReportPet /> : <AuthPage setUserInState={setUserInState} />} 


      <Container className="Testimonials">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Container> */
}
