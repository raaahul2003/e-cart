import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/slice/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  return (
    <>
      <Header />
      <div className='container my-5'>
        {cart?.length > 0 ? (
          <>
            <h1 className='text-center'>Cart Summary</h1>
            <div className='row'>
              <div className='col-lg-8'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((pro, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{pro.title}</td>
                        <td><img src={pro.thumbnail} alt={pro.title} width={'40px'} /></td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <button className='btn'>-</button>
                            <input
                              type='text'
                              style={{ width: '20px', border: 'none' }}
                              className='border-none'
                              value={pro?.quantity}
                              readOnly
                            />
                            <button className='btn'>+</button>
                          </div>
                        </td>
                        <td>{pro.price}</td>
                        <td>
                          <button onClick={() => dispatch(removeFromCart(pro?.id))} className='btn'><i className='fa-solid fa-trash text-danger fa-2x1'></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className='mt-5'>
                  <button className='btn btn-info rounded'>Shop More</button>
                  <button className='btn btn-info rounded'>Cart Reset</button>
                </div>
              </div>

              <div className='col-lg-4'>
                <div className='shadow rounded p-5'>

                  <h3 className='text-warning'>Total Products: <span className='text-danger'>0</span></h3>
                  <h3 className='text-warning'>Total Price: <span className='text-danger'>0</span></h3>
                </div>

              </div>
            </div>
          </>
        ) : (
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold'>Empty Cart</h1>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
