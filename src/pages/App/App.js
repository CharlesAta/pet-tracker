import React, { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import MainContent from "../MainContent/MainContent";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";
import JumboTron from "../../components/JumboTron/JumboTron";
import LandingPage from "../LandingPage/LandingPage";
import ReportPet from "../ReportPet/ReportPet";

export default function App() {
  const [user, setUser] = useState(null);

  const [showLogin, setShowLogin] = useState(true);

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
      setUser({ user: userDoc });
    }
  }, []);

  return (
    <>
      <Route path='/postings' render={(props) => (
            <MainContent {...props} />
          )}/>
      <Route exact path='/' render={(props) => (
            <LandingPage {...props} />
          )}/>

      <Route path='/reportpet' render={(props) => (
        <ReportPet {...props} user={user}/>
        )}/>
      <Route path='/account' render={(props) => (
        <AuthPage {...props} user={user}/>
        )}/>
      
    </>
  );
}
