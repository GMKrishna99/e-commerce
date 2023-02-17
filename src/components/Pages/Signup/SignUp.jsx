import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Signup.css'

function Signup() {
  return (
    <Container>
      <div className='signup-header'>
        <h1>
          Sign up
        </h1>
      </div>

      <div className="signup-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" id='inp'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" id='inp'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" id='inp'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id='inp' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id='inp'/>
          </Form.Group>

          <Button variant="primary" type="submit" id='btn-s'>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Signup