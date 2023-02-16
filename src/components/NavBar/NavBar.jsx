import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id='nav-bar'>
      <Container>
        <Navbar.Brand href="#home" id='logo'>Click To Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" id='clr'>Home</Link> &nbsp;
            <Link to="/about" id='clr'>About</Link> &nbsp;
            <Link to="/contact" id='clr'>Contact</Link> &nbsp;
          </Nav>
          <Nav>
            <Link to="/signup" id='clr'>SignUp</Link>&nbsp;
            <Link to="/signin" id='clr'>SignIn</Link>&nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;