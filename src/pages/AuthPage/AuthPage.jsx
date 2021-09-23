import React, { useState, useEffect } from "react";
import "./AuthPage.css";
import { Tabs, Tab, Nav, Button, Row, Col, Container } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";
import { ReactComponent as AuthSvg } from "../../assets/Auth.svg";

export default function AuthPage(props) {

  function searchExecute() {
    props.history.push('/searchresults') 
  }

  return (
    <div className="auth-page" id="auth" >
      <h6 style={{ textAlign: "center", color: "white" }} className="pt-2">
        <span  onClick={() => {
                    window.location.replace("/#auth");
                  }}>
          What is PAWAY?
          </span>
      </h6>
      <NavBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults} />
      <Container stye={{ minHeight: "100vh" }}>
        <Row className="margin-container">
          <Col className="auth-pic">
            <AuthSvg className="img-fluid" />
            <p
              style={{ color: "white", fontSize: "1.4rem", fontWeight: "600" }}
            >
              Paway aims to reunite owners and their family member as fast as
              possible, with the help of your community.
            </p>
            {props.showLogin === "LOG IN" ? (
              <p style={{ color: "white", fontSize: "1rem" }}>
                Sign in to track your post and edit your posts with all your
                information saved.
              </p>
            ) : (
              <p style={{ color: "white", fontSize: "1rem" }}>
                Sign up now to start the process, so we can let everyone know
                what to look for, and also keep you informed on the lastest
                update regarding your post!
              </p>
            )}
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.showLogin === "LOG IN" ? (
              <LoginForm
                showLogin={props.showLogin}
                setShowLogin={props.setShowLogin}
                setUser={props.setUser}
              />
            ) : (
              <SignUpForm
                setShowLogin={props.setShowLogin}
                setUser={props.setUser}
              />
            )}
          </Col>
        </Row>
      </Container>


    </div>
  );
}
