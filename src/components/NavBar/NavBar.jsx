import React, {useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import { Navbar, Container, Nav} from "react-bootstrap";
import "./NavBar.css"
import LogOut from '../LogOut/LogOut';

export default function NavBar(props) {

    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          {props.user ? 
          <Navbar.Brand as={NavLink} to="/postings">PAWAY</Navbar.Brand>
          :
          <Navbar.Brand as={NavLink} to="/">PAWAY</Navbar.Brand>
          }
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto bar">
            <Nav.Link as={NavLink} to="/reportpet/lost">I Lost My Pet</Nav.Link>
            <Nav.Link as={NavLink} to="/reportpet/found">I Found A Pet</Nav.Link>
            <Nav.Link as={NavLink} to="/postings">Search</Nav.Link>
            {props.user?
            <>
            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
            <LogOut user={props.user} setUser={props.setUser}/>
            </>
            :
            <>
            <Nav.Link as={NavLink} to="/account">Report</Nav.Link>
            <Nav.Link as={NavLink} to="/account">Sign Up/Log In</Nav.Link>
            </>
          }
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
