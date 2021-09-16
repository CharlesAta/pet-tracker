import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap';

export default function SignUpForm() {

    const [state, setState] =  useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        postalCode: "",
        error:"",
    })

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
        const fetchResponse = await fetch('/api/users/signup', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
              name: state.name,
              email: state.email, 
              password: state.password, 
              phoneNumber: state.phoneNumber, 
              postalCode:state.postalCode
            })
        })
        console.log(fetchResponse)
        if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
    
        let token = await fetchResponse.json()
        localStorage.setItem("token", token);
    
        const userDoc = JSON.parse(atob(token.split('.')[1])).user;
        this.props.setUserInState(userDoc)
        
        } catch (err) {
          console.log("SignupForm error", err)
          setState({ error: 'Sign Up Failed - Try Again' });
        }
      }
    
    return (
        <div>
            <Container className="align-items-top justify-content-center d-flex"style={{height:'100vh'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control name="password2" type="password" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name="phoneNumber" type="tel" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control name="postalCode"  type="text" required />
                    </Form.Group>
                    <Button type="submit" className="me-2 mt-3">Sign Up</Button>
                </Form>
            </Container>
        </div>
    )
}
