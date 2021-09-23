import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
import LogOut from "../LogOut/LogOut";
import Search from "../Search/Search";

export default function NavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="pt-3" variant="dark">
      <Container>
        <Search searchExecute={props.searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults}  />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link
            className="navbar-center"
            onClick={() => {
              window.location.replace("/#home");
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
                  {props.user ? `Hi, ${props.user.name.split(" ")[0]}!` : "Hi, User!"}
                </Nav.Link>

            <LogOut user={props.user} setUser={props.setUser} />
              </>
            ) : (
              <>
              <Nav.Link onClick={() => {
                    window.location.replace("/#auth");
                  }}>
              Report
            </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    window.location.replace("/#auth");
                  }}
                >
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
