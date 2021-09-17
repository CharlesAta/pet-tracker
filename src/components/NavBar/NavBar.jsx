import React from 'react'
import {Route, Link, NavLink} from 'react-router-dom';
import { Navbar, Container, Nav} from "react-bootstrap";
import ReportPet from "../../pages/ReportPet/ReportPet"
import "./NavBar.css"

export default function NavBar() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="link1">PAWAY</Navbar.Brand>
          <Nav className="ml-auto bar">
            <Nav.Link as={NavLink} to="/reportpet">I Lost My Pet</Nav.Link>
            <Nav.Link href="link1">I Found A Pet</Nav.Link>
            <Nav.Link href="link1">Search</Nav.Link>
            <Nav.Link href="link1">Sign In/Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
