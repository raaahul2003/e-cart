import React from 'react'
import Header from '../components/Header'
import logo from '../assets/logo.png'


function Cart() {
  return (
    <>
      <Header />
      <div className='container my-5'>
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
                <tr>
                  <td>1</td>
                  <td>e-cart product</td>
                  <td><img src={logo} alt="" width={'40px'}/></td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <button className='btn'>-</button>
                      <input type="text" style={{width:'10px',border: 'none'}} className='border-none' value={1}/>
                      <button className='btn'>+</button>
                    </div>
                  </td>
                  <td>price</td>
                  <td>
                  <button className='btn'><i className="fa-solid fa-trash text-danger fa-2x1" ></i></button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
          <div className='col-lg-4'>

          </div>

        </div>

      </div>
    </>
  )
}

export default Cart
