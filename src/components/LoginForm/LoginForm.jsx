import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';

export default function LoginForm() {
    function handleSubmit(e){
        e.preventDefault()
    }
    
    return (
        <div>
            <Container className="align-items-top justify-content-center d-flex"style={{height:'100vh'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>
                    <Button type="submit" className="me-2 mt-3">Login</Button>
                </Form>
            </Container>
        </div>
    )
}
