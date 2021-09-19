import React from 'react'
import { NavLink} from 'react-router-dom';
import { Navbar, Container, Nav} from "react-bootstrap";
import "./NavBar.css"

export default function NavBar() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/">PAWAY</Navbar.Brand>
          <Nav className="ml-auto bar">
            <Nav.Link as={NavLink} to="/reportpet/lost">I Lost My Pet</Nav.Link>
            <Nav.Link as={NavLink} to="/reportpet/found">I Found A Pet</Nav.Link>
            <Nav.Link as={NavLink} to="/postings">Search</Nav.Link>
            <Nav.Link as={NavLink} to="/account">Sign In/Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
