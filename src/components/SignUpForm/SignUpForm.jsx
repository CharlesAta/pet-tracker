import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { MDBInput} from "mdbreact";
import "./SignUpForm.css";

export default function SignUpForm(props) {
    const [signUpState, setSignUpState] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        postalCode: "",
        error: "",
        passwordConfirm: ""
    });

    // useEffect(() => {
        
    //     return () => {
            
    //     }
    // }, [input])

    const handleChange = (evt) => {
        setSignUpState({ ...signUpState, [evt.target.name]: evt.target.value, error: "" });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (signUpState.password !== signUpState.passwordConfirm ){
            console.log("signupState.password",signUpState.password)
            console.log("passwordState", signUpState.passwordConfirm )
            alert("Passwords don't match")
        } else {
            try {
                console.log(signUpState)
                const fetchResponse = await fetch("/api/users/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: signUpState.name,
                        email: signUpState.email,
                        password: signUpState.password,
                        phoneNumber: signUpState.phoneNumber,
                        postalCode: signUpState.postalCode,
                    }),
                });
    
                if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");
    
                let token = await fetchResponse.json();
                localStorage.setItem("token", token);
    
                const userDoc = JSON.parse(atob(token.split(".")[1])).user;
                props.setUser(userDoc);
                setSignUpState({
                    name: "",
                    email: "",
                    password: "",
                    phoneNumber: "",
                    postalCode: "",
                    error: "",
                    passwordConfirm: "",
                })
                
            } catch (err) {
                console.log("SignupForm error", err.message);
                setSignUpState({ error: "Sign Up Failed - Try Again" });
            }
        }
    };

    return (
        <div>
            <Container className="align-items-top justify-content-center d-flex">
                <Form onSubmit={handleSubmit}>
                    <MDBInput
                        label="Name"
                        name="name"
                        icon="user-alt"
                        value={signUpState.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Name"
                        required
                    />
                    <MDBInput
                        label="Email"
                        icon="envelope"
                        name="email"
                        type="text"
                        value={signUpState.email}
                        onChange={handleChange}
                        required
                    />
                    <MDBInput
                        label="Password"
                        icon="key"
                        name="password"
                        type="password"
                        value={signUpState.password}
                        onChange={handleChange}
                        required
                    />
                     <MDBInput
                        label="Password Confirmation"
                        icon="key"
                        name="passwordConfirm"
                        type="password"
                        value={signUpState.passwordConfirm}
                        onChange={handleChange}
                        required
                    />
                    <MDBInput
                        label="Phone Number"
                        icon="phone"
                        name="phoneNumber"
                        type="tel"
                        value={signUpState.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    <MDBInput
                        label="Postal Code"
                        icon="map-marker-alt"
                        name="postalCode"
                        type="text"
                        value={signUpState.postalCode}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" className="SignUpButton me-2 mt-3">
                        Sign Up
                    </Button>
                </Form>
            </Container>
            <p className="error-message mt-3">&nbsp; {signUpState.error}</p>
        </div>
    );
}
