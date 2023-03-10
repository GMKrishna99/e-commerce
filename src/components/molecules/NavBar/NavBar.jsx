import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link } from 'react-router-dom';
import clicktocartlogo from '../../../../src/assets/logo.png'
import { Badge } from 'react-bootstrap';

function NavBar({cartList}) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id='nav-bar'>
      <Container>
        <Navbar.Brand href="/" id='logo'>
          <img src={clicktocartlogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" id='clr'>Home</Link> &nbsp;
            <Link to="/about" id='clr'>About</Link> &nbsp;
            <Link to="/contact" id='clr'>Contact</Link> &nbsp;
          </Nav>
          <Nav>
            <Link to="/signup" id='clr'>SignUp</Link>&nbsp;
            <Link to="/signin" id='clr'>Login</Link>&nbsp;
            <Link to="/cart" id='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <Badge id='badge' >
              
              {cartList.length}
            </Badge>
            </Link>&nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;