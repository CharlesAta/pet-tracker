import React, { useState, useEffect } from "react";
import "./AuthPage.css";
import { Tabs, Tab, Nav, Button, Row, Col, Container } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";
import { ReactComponent as AuthSvg } from "../../assets/Auth.svg";

export default function AuthPage(props) {
  //   const [showLogin, setShowLogin] = useState("LOG IN")

  return (
    <div className="auth-page" id="auth" stye={{ minHeight: "100vh" }}>
      {/* <NavBar user={props.user} setUser={props.setUser}/> */}
      <h6 style={{ textAlign: "center", color: "white" }} className="pt-2">
        What is PAWAY?
      </h6>
      <NavBar />
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

{
  /* <LoginForm setShowLogin={props.setShowLogin} setUser={props.setUser}/>
   <h3 onClick={() => setShowLogin(!showLogin)}>
    {showLogin ? "SIGN UP" : "LOG IN"}
  </h3>
  {showLogin ? (
    <LoginForm setUserInState={setUserInState} />
  ) : (
    <SignUpForm setUserInState={setUserInState} />
  )}  */
}
