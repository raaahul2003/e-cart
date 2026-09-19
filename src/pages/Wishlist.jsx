import React, { useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux';


function Wishlist() {
  const wishlist = useSelector(state => state.wishlist)
  console.log(wishlist);



  return (
    <>
      <Header />

      <div className='container my-3'>
        <div className='row'>
          {
            wishlist?.length>0? 
            wishlist?.map(pro=> (
            <div className='col-lg-3 mt-3'>
              <Card className='p-2 shadow rounded' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pro.thumbnail} />
                <Card.Body>
                  <Card.Title className='text-center'>{pro.title.slice('1','15')}</Card.Title>
                  <Card.Title className='text-center text-success'>${pro.price}</Card.Title>
                  <div className='d-flex align-items-cneter justify-content-between mt-5'>
                    <button className='btn'><i className="fa-solid fa-heart-circle-minus text-danger fa-2x1 fs-3"></i></button>
                    <button className='btn'><i className="fa-solid fa-cart-plus text-success fa-2x1 fs-3" ></i></button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            )):
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <img src="/src/assets/Empty_Wishlist.png" alt="" />
              <h1 className='fw-bold'>Empty Wishlist</h1>

            </div>
            
          }

        </div>
      </div>
    </>
  )
}

export default Wishlist
