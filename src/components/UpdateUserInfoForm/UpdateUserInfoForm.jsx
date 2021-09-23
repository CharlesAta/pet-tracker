import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';

export default function UpdateUserInfoForm(props) {
    return (
        <>
            <Form>
                <Form.Group>
                <Form.Label>Contact Name</Form.Label>
                <Form.Control
                    placeholder="Contact Name"
                    name="name"
                    value={props.userInfo.name}
                    className="mt-2 mr-2"
                    onChange={props.handleChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={props.userInfo.phoneNumber}
                    onChange={props.handleChange}
                    className="mt-2 mr-2"
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    placeholder="Email Address"
                    name="email"
                    value={props.userInfo.email}
                    className="mt-2 mr-2"
                    onChange={props.handleChange}
                    required
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                    placeholder="Postal Code"
                    name="postalCode"
                    value={props.userInfo.postalCode}
                    className="mt-2 mr-2"
                    onChange={props.handleChange}
                    minLength="6"
                    maxLength="6"
                />
                </Form.Group>

            </Form>
        </>
    )
}
