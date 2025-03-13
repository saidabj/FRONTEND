import React from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import Logo from '../images/Logo.jpg';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm p-3">
      <Container>
     
        <Navbar.Brand href="#">
          <img 
            src={Logo} 
            alt="Logo"
            style={{ width: '50px', marginRight: '10px' }} 
          />
          <span style={{ fontWeight: 'bold' }}>
              <span style={{ color: 'orange' }}>M</span>orocco <span style={{ color: 'orange' }}>T</span>ravel
            </span>
        </Navbar.Brand>

        {/* Bouton de liste (mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Circuits</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex ms-3">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="warning" class="btn btn-md btn-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
