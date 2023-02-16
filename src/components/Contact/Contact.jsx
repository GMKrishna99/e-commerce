import React from 'react'
import { Container } from 'react-bootstrap'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-section'>
      <Container>
        <div className='contact-header'>
          <h1>Contact Us</h1>
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' />
          </div>
          <div className="contact-form">
            <label htmlFor="">Email address</label>
            <input type="email" placeholder='Enter Email address' />
          </div>
          <div className="contact-form">
            <label htmlFor="">Phone Number</label>
            <input type="number" placeholder='Enter Phone Number' />
          </div>
          <div className="contact-form">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter Message here..'></textarea>
          </div>
          <div className="contact-form">
            <button>Submit</button>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact