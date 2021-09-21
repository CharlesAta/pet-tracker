import React, {useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import { Navbar, Container, Nav} from "react-bootstrap";
import "./NavBar.css"
import LogOut from '../LogOut/LogOut';
import Search from '../Search/Search';

export default function NavBar(props) {

    return (
      <Navbar collapseOnSelect expand="lg" className="pt-3" variant="light">
        <Container>
        <Search />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          {props.user ? 
            <Navbar.Brand className="navbar-center" as={NavLink} to="/postings"><b>PAWAY</b></Navbar.Brand>
            :
            <Navbar.Brand className="navbar-center" as={NavLink} to="/"><b>PAWAY</b></Navbar.Brand>
            }
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
            <Nav.Link as={NavLink} to="/account">Sign Up/Log In</Nav.Link>
            </>
          }
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
