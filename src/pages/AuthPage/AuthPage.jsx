import React, {useState, useEffect} from "react";
import './AuthPage.css';
import { Tabs, Tab, Nav, Button} from 'react-bootstrap'
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";

export default function AuthPage(props) {
    // const [showLogin, setShowLogin] = useState("LOG IN")
 
    return (
        <div className="auth-page">
            <NavBar user={props.user} setUser={props.setUser}/>
            <Tabs 
                activeKey={props.showLogin}
                onSelect={(k) => props.setShowLogin(k)}
                className="mb-3 mt-5"
            >
                <Tab style={{minHeight: '83vh'}} eventKey="LOG IN" title="Log in">
                    <LoginForm  showLogin={props.showLogin} setShowLogin={props.setShowLogin} setUser={props.setUser}/>
                </Tab >
                <Tab style={{minHeight: '83vh'}}  eventKey="SIGN UP" title="Sign Up">
                    <SignUpForm setShowLogin={props.setShowLogin} setUser={props.setUser}/>
                </Tab>
            </Tabs>
        </div>
    )
}
