import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlists } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';





function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id,allproducts);

  const [product, setProduct] = useState({})
  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)

  useEffect(() => {

    if (localStorage.getItem('products')) {
      let allProducts = JSON.parse(localStorage.getItem('products'))
      console.log(allProducts);

      setProduct(allProducts?.find(pro => pro.id == id))


    }

  }, [])

  console.log(product);

  const handleWishlist = ()=>{

    let existingProduct = wishlist?.find(pro => pro.id == product.id)
    if(existingProduct){
      alert("Already In Wishlist❤️!")
    }
    else{
      dispatch(addToWishlists(product))
    }

  }
  const handleCart = ()=>{

    let existingProduct = cart?.find(pro => pro.id == product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("Product quantity incremented ✚ 1")
    }
    else{
      dispatch(addToCart(product))
    }

  }



  return (
    <>
      <Header />
      <Row className='d-flex align-items-center' style={{minHeight:'80vh'}}>
        <Col className='text-center'>
          <img src={product.thumbnail} alt="" />
        </Col>
        <Col className='text-center p-5'>
          <h2>{product.title} <br />
          <span>{product.brand}</span>
          </h2>
          <h1 className='text-success'>${product.price}</h1>
          <p style={{ textAlign: 'justify' }} className='my-3'>{product.description}</p>
          <div className='d-flex align-items-cneter justify-content-between mt-5'>
            <button onClick={handleWishlist} className='btn'><i className="fa-solid fa-heart-circle-plus text-danger fa-2x1 fs-1" ></i></button>
            <button onClick={handleCart} className='btn'><i className="fa-solid fa-cart-plus text-success fa-2x1 fs-1" ></i></button>
          </div>

        </Col>
      </Row>
    </>
  )
}

export default Product
