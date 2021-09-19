import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./LoginForm.css";
import { MDBInput } from "mdbreact";

export default function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.value, error: "" });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      });

      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      props.setUserInState(userDoc);
    } catch (err) {
      console.log("LoginForm error", err);
      setState({ error: "Login Failed - Try Again" });
    }
  };

  return (
    <div>
      <Container className="justify-content-center d-flex text-left">
        <Form onSubmit={handleSubmit}>
          <MDBInput
            label="Email"
            icon="envelope"
            name="email"
            type="text"
            value={state.email}
            onChange={handleChange}
            required
          />
          <MDBInput
            label="Password"
            icon="key"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
          <Form.Text>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form.Text>
          <Button className="LoginButton" variant="primary" type="submit">
            Log In
          </Button>
          <Container className="justify-content-start d-flex flex-column text">
            <Form.Text>Forgot password?</Form.Text>
            <Form.Text>Don't have account yet?</Form.Text>
          </Container>
        </Form>
      </Container>
    </div>
  );
}
