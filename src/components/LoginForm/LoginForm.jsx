import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap';

export default function LoginForm(props) {

    const [state, setState] = useState({
        email:"",
        password:"",
        error: ""
    })

    const handleChange = (evt) => {
        setState({...state, [evt.target.name]: evt.target.value, error: ''}
        )};

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
          const fetchResponse = await fetch('/api/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                email: state.email, 
                password: state.password, 
            })
          })
    
          if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
    
          let token = await fetchResponse.json()
          localStorage.setItem('token', token);  
    
          const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
          props.setUserInState(userDoc)
    
        } catch (err) {
          console.log("LoginForm error", err)
          setState({ error: 'Login Failed - Try Again' });
        }
      }
    
    return (
        <div>
            <Container className="align-items-top justify-content-center d-flex"style={{height:'100vh'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control name="email" type="email" value={state.email} onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={state.password} onChange={handleChange} required />
                    </Form.Group>
                    <Button type="submit" className="me-2 mt-3">Login</Button>
                </Form>
            </Container>
        </div>
    )
}
