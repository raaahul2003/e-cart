import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import logo from '../assets/logo.png'
import { Link } from 'react-router';


function Landing() {
  return (
    <>
      <Header insideLanding={true} />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-3'>
            <Card className='p-2 shadow rounded' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className='text-center'>e-cart product
                  <br />
                  Products of e-cart
                </Card.Title>
                <div className='text-center'>
                  <Link to={'/product/1/view'} className='fw-bold text-decoration-none'>View More</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
