import React, { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import ReportPet from "../ReportPet/ReportPet";
import MainContent from "../MainContent/MainContent";
import { Route } from 'react-router-dom';
import Testimonial from "../../components/Testimonial/Testimonial";
import { Navbar, Container, Nav, Jumbotron, Row, Col } from "react-bootstrap";
import Search from "../../components/Search/Search";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";


export default function App() {
  const [user, setUser] = useState(null);

  const [showLogin, setShowLogin] = useState(true)

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData);
  };

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      setUser({ user: userDoc })
    }
  }, [])

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">PAWAY</Navbar.Brand>
          <Nav className="ml-auto bar">
            <Nav.Link href="#home">I Lost My Pet</Nav.Link>
            <Nav.Link href="#features">I Found A Pet</Nav.Link>
            <Nav.Link href="#pricing">Search</Nav.Link>
            <Nav.Link href="#pricing">Sign In/Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Jumbotron>
        <Container>
          <Search />
          <Row className="d-flex">
            <Col sm={6}>I lost my pet</Col>
            <Col sm={6}>I found a pet</Col>
          </Row>
        </Container>
      </Jumbotron>
      <main className="App">
        <MainContent />
      <Container>
        <Row>
          <Col sm={6}>SIGN IN TO GET ALERT</Col>
            <Col sm={6}>

            <h3 onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? 'SIGN UP' : 'LOG IN'}
            </h3>
            {showLogin?
            <LoginForm setUserInState={setUserInState}/>:
            <SignUpForm setUserInState={setUserInState}/>}

        </Col>
              {/* <AuthPage setUserInState={setUserInState} /></Col> */}
        </Row>
        {/* {user ? <ReportPet /> : <AuthPage setUserInState={setUserInState} />} */}
      </Container>

        <Container className="Testimonials">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </Container>
      </main>
    </>
  );
}
