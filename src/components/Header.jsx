import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { Badge } from 'react-bootstrap';
import { searchProduct } from '../redux/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';



function Header({ insideLanding }) {
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist)
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container className='d-flex justify-content-around align-items-center'>
        <Link to={"/"} className='align-items-center d-flex text-decoration-none'>
          <img src={logo} alt="" width={'50px'} />
          <span className='fw-bold fs-4 text-dark'>e-cart</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            insideLanding && <input type="text" className='form-control w-50 ms-auto rounded' placeholder='search by product name' onChange={(e)=>dispatch(searchProduct(e.target.value))}/>

          }
          <Nav className="ms-auto gap-4">
            <Link to={"/wishlist"}>
              <i className="fa-solid fa-heart text-danger fa-2x1 fs-3"></i>
              <Badge className='fs-5 bg-light'>{wishlist?.length}</Badge>
            </Link>
            <Link  to={"/cart"}>
              <i className="fa-solid fa-cart-shopping text-success  fs-3"></i>
              <Badge className='fs-5 bg-light'>0</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header
