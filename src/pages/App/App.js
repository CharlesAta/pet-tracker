import React, { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import PetPostings from "../PetPostings/PetPostings";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import ReportPet from "../ReportPet/ReportPet";
import { Navbar } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import Profile from "../Profile/Profile";
import LogOut from "../../components/LogOut/LogOut";
import Details from "../Details/Details";

export default function App() {
  const [user, setUser] = useState(null);

  const [searchState, setSearchState] = useState({
    species: "",
    name: "",
    status: "",
  });

  const [petStatus, setPetStatus] = useState("lost")

  const [showLogin, setShowLogin] = useState("LOG IN");

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
      setUser(userDoc);
      // console.log("App.js user", user);
      // console.log("App.js userDoc", userDoc);
    }
  }, []);

  return (
    <>
      {user ? (
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                user={user}
                setUser={setUser}
                petStatus={petStatus} 
                setPetStatus={setPetStatus}
              />
            )}
          />
          <Route
            path="/postings"
            render={(props) => (
              <PetPostings {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/reportpet"
            render={(props) => (
              <ReportPet petStatus={petStatus} setPetStatus={setPetStatus} {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/profile"
            render={(props) => (
              <Profile {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/details/:id"
            render={(props) => (
              <Details {...props} user={user} setUser={setUser}/>
            )}
          />
          <Route
            path="/logout"
            render={(props) => (
              <LogOut {...props} user={user} setUser={setUser} />
            )}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      ) : (
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <LandingPage
                  {...props}
                  showLogin={showLogin}
                  setShowLogin={setShowLogin}
                  user={user}
                  setUser={setUser}
                />
                <AuthPage
                  {...props}
                  user={user}
                  setUser={setUser}
                  setShowLogin={setShowLogin}
                  showLogin={showLogin}
                />
              </>
            )}
          />
          <Route
            path="/postings"
            render={(props) => (
              <PetPostings {...props} user={user} setUser={setUser} />
            )}
          />
          {/* <Route path='/account' render={(props) => (
        <AuthPage {...props} user={user} setUser={setUser} setShowLogin={setShowLogin} showLogin={showLogin} />
      )}/>      */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      )}
    </>
  );
}
