import React, { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import ReportPet from "../ReportPet/ReportPet";
import MainContent from "../MainContent/MainContent";
import { Route } from 'react-router-dom';
import Testimonial from "../../components/Testimonial/Testimonial";
import { Navbar, Container, Nav, Jumbotron } from "react-bootstrap";
import Search from "../../components/Search/Search";

export default function App() {
  const [user, setUser] = useState(null);

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
        </Container>
      </Jumbotron>
      <main className="App">
        <MainContent />
        {user ? <ReportPet /> : <AuthPage setUserInState={setUserInState} />}
        <Container className="Testimonials">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </Container>
      </main>
    </>
  );
}
