import React, { useState } from "react";
// import AuthPage from "../AuthPage/AuthPage";
// import MainContent from "../MainContent/MainContent";
// import { Route, Switch, Link, Redirect } from "react-router-dom";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";
import JumboTron from "../../components/JumboTron/JumboTron";
import "./LandingPage.css"

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);
  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData);
  };

  return (
    <div>
      <NavBar />
      <JumboTron />
      <Container>
        <Row>
          <Col sm={6}>SIGN IN TO GET ALERT</Col>
          <Col className="mt-3"sm={6}>
          <LoginForm setUserInState={setUserInState} />
            {/* <h3 onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? "SIGN UP" : "LOG IN"}
            </h3>
            {showLogin ? (
              <LoginForm setUserInState={setUserInState} />
            ) : (
              <SignUpForm setUserInState={setUserInState} />
            )} */}
          </Col>
        </Row>
        {/* {user ? <ReportPet /> : <AuthPage setUserInState={setUserInState} />} */}
      </Container>
      
      <Container className="Testimonials">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Container>
    </div>
  );
}
