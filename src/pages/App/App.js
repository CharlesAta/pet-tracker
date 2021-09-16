import React, {useState, useEffect} from "react";
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ReportPet from '../ReportPet/ReportPet';
import MainContent from "../MainContent/MainContent";
import {Route} from 'react-router-dom';

export default function App() {

  const [user, setUser] = useState(null)

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData)
  } 

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      setUser({user: userDoc})      
    }
  }, [])

  return (
    <main className="App">
      <Route path='/postings' render={(props) => (
        <MainContent {...props}/>
      )}/>
      {user ? 
        <Route path='/report' render={(props) => (
          <ReportPet {...props}/> 
          )}/>
          :
        <AuthPage setUserInState={setUserInState}/>
      }
  </main>
  )
}

