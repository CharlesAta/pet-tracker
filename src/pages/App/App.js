import React, { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import PetPostings from "../PetPostings/PetPostings";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import ReportPet from "../ReportPet/ReportPet";
// import Switch from "react-bootstrap/esm/Switch";

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
    <Switch>
      <Route path='/postings' render={(props) => (
            <PetPostings {...props} />
          )}/>
      <Route exact path='/' render={(props) => (
            <LandingPage {...props} />
          )}/>

      <Route path='/reportpet/:status(lost|found)' render={(props) => (
        <ReportPet {...props} user={user}/>
        )}/>
      <Route path='/account' render={(props) => (
        <AuthPage {...props} user={user}/>
        )}/>
        <Route render={()=> <Redirect to="/" />} />
      </Switch>
    </>
  );
}
