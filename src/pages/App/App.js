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
import ThankYouPage from "../ThankYouPage/ThankYouPage";
import SearchResults from "../SearchResults/SearchResults";

export default function App() {
  const [user, setUser] = useState(null);

  const [profile, setProfile] = useState(true)

  const [thankYouPost, setThankYouPost] = useState({
    id: "",
    status: ""
  })

  const [petStatus, setPetStatus] = useState("lost")

  const [showLogin, setShowLogin] = useState("LOG IN");
  
  const [updatedAccount, setUpdatedAccount] = useState(false)

  const [searchResults, setSearchResults] = useState([])

  
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
      setUser(userDoc);
    }
  }, [thankYouPost, searchResults]);

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
                searchResults={searchResults} 
                setSearchResults={setSearchResults}
              />
            )}
          />
          <Route
            path="/postings"
            render={(props) => (
              <PetPostings searchResults={searchResults} setSearchResults={setSearchResults} {...props} setProfile={setProfile} user={user} setUser={setUser} profile={profile} />
            )}
          />
          <Route
            path="/reportpet"
            render={(props) => (
              <ReportPet searchResults={searchResults} setSearchResults={setSearchResults} thankYouPost={thankYouPost} setThankYouPost={setThankYouPost} petStatus={petStatus} setPetStatus={setPetStatus} {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/profile"
            render={(props) => (
              <Profile searchResults={searchResults} setSearchResults={setSearchResults} {...props} updatedAccount={updatedAccount} setUpdatedAccount={setUpdatedAccount} user={user} setUser={setUser} profile={profile} setProfile={setProfile}/>
            )}
          />
          <Route
            path="/logout"
            render={(props) => (
              <LogOut  {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/details/:id"
            render={(props) => (
              <Details searchResults={searchResults} setSearchResults={setSearchResults} {...props} user={user} setUser={setUser}/>
            )}
          />

          <Route
            path="/thankyouforsubmission"
            render={(props) => (
              <ThankYouPage searchResults={searchResults} setSearchResults={setSearchResults} {...props} thankYouPost={thankYouPost} user={user} setUser={setUser}/>
            )}
          />
           <Route
            path="/searchresults"
            render={(props) => (
              <SearchResults {...props} searchResults={searchResults} setSearchResults={setSearchResults} user={user} setUser={setUser}/>
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
                  searchResults={searchResults} 
                setSearchResults={setSearchResults}
                />
                <AuthPage
                  {...props}
                  user={user}
                  setUser={setUser}
                  setShowLogin={setShowLogin}
                  showLogin={showLogin}
                  searchResults={searchResults} 
                  setSearchResults={setSearchResults}
                />
              </>
            )}
          />
          <Route
            path="/postings"
            render={(props) => (
              <PetPostings searchResults={searchResults} setSearchResults={setSearchResults} {...props} user={user} setUser={setUser} profile={profile} setProfile={setProfile}/>
            )}
          />
          <Route
            path="/searchresults"
            render={(props) => (
              <SearchResults {...props} searchResults={searchResults} setSearchResults={setSearchResults} user={user} setUser={setUser}/>
            )}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      )}
    </>
  );
}
