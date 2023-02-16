import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id='nav-bar'>
      <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" id='clr'>About</Nav.Link>
            <Nav.Link href="#pricing" id='clr'>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" id='clr'>Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" id='clr'>
              LogIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;