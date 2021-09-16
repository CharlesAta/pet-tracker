import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function SignUpForm() {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        postalCode: "",
        error: "",
    });

    const handleChange = (evt) => {
        setState({ ...state, [evt.target.name]: evt.target.value, error: "" });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const fetchResponse = await fetch("/api/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: state.name,
                    email: state.email,
                    password: state.password,
                    phoneNumber: state.phoneNumber,
                    postalCode: state.postalCode,
                }),
            });

            if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

            let token = await fetchResponse.json();
            localStorage.setItem("token", token);

            const userDoc = JSON.parse(atob(token.split(".")[1])).user;
            this.props.setUserInState(userDoc);
        } catch (err) {
            console.log("SignupForm error", err);
            setState({ error: "Sign Up Failed - Try Again" });
        }
    };

    return (
        <div>
            <Container className="align-items-top justify-content-center d-flex">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name="email"
                            type="email"
                            value={state.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name="password"
                            type="password"
                            value={state.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name="password2"
                            type="password"
                            placeholder="Password Confirmation"
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name="phoneNumber"
                            type="tel"
                            value={state.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name="postalCode"
                            type="text"
                            value={state.postalCode}
                            onChange={handleChange}
                            placeholder="Postal Code"
                            required
                        />
                    </Form.Group>
                    <Button type="submit" className="me-2 mt-3">
                        Sign Up
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
