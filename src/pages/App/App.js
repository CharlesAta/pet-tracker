import React, {useState, useEffect} from "react";
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ReportPet from '../ReportPet/ReportPet';
import MainContent from "../MainContent/MainContent";

export default function App() {

  const [user, setUser] = useState(null)

  const setUserInState = (incomingUserData) => {
    setUser(incomingUserData)
  } 

  return (
    <main className="App">
      <MainContent />
      {user ? 
        <ReportPet />:
        <AuthPage setUserInState={setUserInState}/>
      }
  </main>
  )
}

