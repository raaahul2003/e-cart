import React, { useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlists } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';


function Wishlist() {
  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log(wishlist);

  
 const handleCart = (product)=>{

    let existingProduct = cart.find(pro => pro.id == product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("Product quantity incremented ✚ 1");
      dispatch(removeFromWishlists(product.id))
    }
    else{
      dispatch(addToCart(product))
      dispatch(removeFromWishlists(product.id))

    }

  }


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
                    <button onClick={()=>dispatch(removeFromWishlists(pro?.id))} className='btn'><i className="fa-solid fa-heart-circle-minus text-danger fa-2x1 fs-3"></i></button>
                    <button onClick={()=>handleCart(pro)} className='btn'><i className="fa-solid fa-cart-plus text-success fa-2x1 fs-3" ></i></button>
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
