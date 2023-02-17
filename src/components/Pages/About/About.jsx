import React from 'react'
import './About.css'
import { Container } from 'react-bootstrap'

function About() {
  return (
    <div className="about">
      <Container>
        <div className="about-header"></div>
        <div className="about-content">
          <h1>About Us</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vitae autem esse illo suscipit est facere voluptatum, sint perferendis dolore consectetur quae ut consequatur beatae omnis? Fugiat reprehenderit velit numquam doloribus deleniti, assumenda repudiandae tempore dolores magnam, suscipit libero mollitia odit quod commodi consectetur cum iusto voluptatem pariatur ut? Unde. lore</p>
        </div>
        <div className='about-btm'>
          <img src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          <img src="https://images.unsplash.com/photo-1555529771-4f81423a1207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
      </Container>
    </div>
  )
}

export default About