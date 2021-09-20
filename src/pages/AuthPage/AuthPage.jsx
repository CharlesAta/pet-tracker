import React, {useState, useEffect} from "react";
import './AuthPage.css';
import { Tabs, Tab, Nav, Button} from 'react-bootstrap'
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";

export default function AuthPage(props) {
    const [showLogin, setShowLogin] = useState("LOG IN")
 
    return (
        <div>
            <NavBar />
            <Tabs
                activeKey={showLogin}
                onSelect={(k) => setShowLogin(k)}
                className="mb-3"
            >
                <Tab eventKey="LOG IN" title="Log in">
                    <LoginForm setUserInState={props.setUserInState} setShowLogin={setShowLogin}/>
                </Tab>
                <Tab eventKey="SIGN UP" title="Sign Up">
                    <SignUpForm setUserInState={props.setUserInState}/>
                </Tab>
            </Tabs>
        </div>
    )
}
