import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import { Badge } from 'react-bootstrap';

function Header({insideLanding}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container className='d-flex justify-content-around'>
        <Navbar.Brand href="/" className='align-items-center d-flex'>
          <img src={logo} alt="" width={'50px'} />
          <span className='fw-bold ms-3'>e-cart</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            insideLanding && <input type="text" className='form-control w-50 ms-auto rounded' placeholder='search by product name' />

          }
          <Nav className="ms-auto">
            <Nav.Link href="/wishlist">
              <i className="fa-solid fa-heart text-danger fa-2x1"></i>
              <Badge className='fs-5 bg-light'>0</Badge>
            </Nav.Link>
            <Nav.Link href="/cart">
              <i className="fa-solid fa-cart-shopping text-success fa-2x1"></i>
              <Badge className='fs-5 bg-light'>0</Badge>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header
