import React, {useState, useEffect} from "react";
import './AuthPage.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage() {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            <h3 onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? 'SIGN UP' : 'LOG IN'}
            </h3>
            {showLogin?
            <LoginForm/>:
            <SignUpForm/>}
        </div>
    )
}
