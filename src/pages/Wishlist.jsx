import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import logo from '../assets/logo.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Wishlist() {
  return (
    <>
      <Header />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-3'>
            <Card className='p-2 shadow rounded' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className='text-center'>E-cart product
                  <br />
                  Products of e-cart
                </Card.Title>
                <div className='d-flex align-items-cneter justify-content-between mt-5'>
                  <button className='btn'><i className="fa-solid fa-heart-circle-minus text-danger fa-2x1 fs-3"></i></button>
                  <button className='btn'><i className="fa-solid fa-cart-plus text-success fa-2x1 fs-3" ></i></button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
