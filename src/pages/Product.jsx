import React from 'react'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/logo.png'


function Product() {
  return (
    <>
      <Header />
      <Row className='d-flex align-items-center'>
        <Col className='text-center'>
          <img src={logo} alt=""/>
        </Col>
        <Col className='text-center p-5'>
          <h2>e-cart product <br />
            <span> Products of e-cart</span>
          </h2>
          <h1 className='text-success'>$30</h1>
          <p style={{ textAlign:'justify'}} className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt est quas, qui eligendi, error voluptates alias dicta debitis molestias praesentium culpa quam quibusdam totam vero! Odit, provident! Omnis, soluta maiores!</p>
          <div className='d-flex align-items-cneter justify-content-between mt-5'>
            <button className='btn'><i className="fa-solid fa-heart-circle-plus text-danger fa-2x1 fs-1" ></i></button>
            <button className='btn'><i className="fa-solid fa-cart-plus text-success fa-2x1 fs-1" ></i></button>
          </div>

        </Col>
      </Row>
    </>
  )
}

export default Product
