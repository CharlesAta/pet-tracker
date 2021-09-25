import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
import LogOut from "../LogOut/LogOut";
import Search from "../Search/Search";
import {scroller} from 'react-scroll';
import Scroll from "react-scroll";
import { Link } from 'react-scroll'
const ScrollLink = Scroll.Link;

export default function NavBar(props) {

  let history = useHistory();

  function goHome() {
    history.push('/')
  }

  function goAuth() {
    history.push('/')
    scroller.scrollTo('auth')
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="pt-3" variant="dark">
      <Container>
        <Search searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} searchExecute={props.searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults}  />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link
            className="navbar-center"
            onClick={() => {
              goHome()
            }}
          >
            <b>PAWAY</b>
          </Nav.Link>
          <Nav className="ml-auto bar">
            <Nav.Link as={NavLink} to="/postings">
              Search
            </Nav.Link>
            {props.user ? (
              <>
              <Nav.Link as={NavLink} to="/reportpet">
              Report
            </Nav.Link>
                <Nav.Link as={NavLink} to="/profile">
                  {props.user.name ? `Hi, ${props.user.name.split(" ")[0]}!` : "Hi, User!"}
                </Nav.Link>

            <LogOut user={props.user} setUser={props.setUser} />
              </>
            ) : (
              <>
          <Nav.Link onClick={goAuth}>
            Report
          </Nav.Link>
          <Nav.Link onClick={goAuth}>
            Sign Up/Log In
          </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
