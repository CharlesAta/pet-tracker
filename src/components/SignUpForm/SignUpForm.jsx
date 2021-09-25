import React, { useState } from "react";
import { Container, Form, Button, FormControl } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import "./SignUpForm.css";

export default function SignUpForm(props) {
  const [signUpState, setSignUpState] = useState({
    email: "",
    password: "",
    error: "",
    passwordConfirm: "",
  });

  const handleChange = (evt) => {
    setSignUpState({
      ...signUpState,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (signUpState.password !== signUpState.passwordConfirm) {
      alert("Passwords don't match");
    } else {
      try {
        const fetchResponse = await fetch("/api/users/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: signUpState.email,
            password: signUpState.password,
          }),
        });

        if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

        let token = await fetchResponse.json();
        localStorage.setItem("token", token);

        const userDoc = JSON.parse(atob(token.split(".")[1])).user;
        props.setUser(userDoc);
        setSignUpState({
          email: "",
          password: "",
          passwordConfirm: "",
          error: "",
        });
      } catch (err) {
        console.log("SignupForm error", err.message);
        setSignUpState({ error: "Sign Up Failed - Try Again" });
      }
    }
  };

  return (
    <div>
      <div className="glass-signup-container">
        <span className="sign-up pt-4">Sign Up</span>
        <Container className="align-items-top justify-content-center d-flex">
          <Form onSubmit={handleSubmit}>
            <Form.Text style={{ textAlign: "center" }}>
              Already a member?
              <span className="link" style={{color: "red"}} onClick={() => props.setShowLogin("LOG IN")}>
                &nbsp;Log In
              </span>
            </Form.Text>
            <MDBInput
              label="Email"
              name="email"
              type="text"
              value={signUpState.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: "white" }}
            />
            <MDBInput
              label="Password"
              name="password"
              type="password"
              value={signUpState.password}
              onChange={handleChange}
              required
            />
            <MDBInput
              label="Password Confirmation"
              name="passwordConfirm"
              type="password"
              value={signUpState.passwordConfirm}
              onChange={handleChange}
              required
            />
            <div style={{ fontSize: "10px" }}>
              <Form.Group>
                <Form.Check
                  type="radio"
                  className="terms-of-service"
                  label={<>Creating an account means you are okay with our <span style={{color: "red"}}>Terms of Service</span>, <span style={{color: "red"}}>Privacy Policy</span> and our default <span style={{color: "red"}}>Notification Settings</span></>}
                />
              </Form.Group>
            </div>
            <Button type="submit" className="SignUpButton me-2 mt-2">
              Sign Up
            </Button>
          </Form>
        </Container>
        <div><p className="error-message mt-3">&nbsp; {signUpState.error}</p></div>
      </div>
    </div>
  );
}
