import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='bg-light text-dark mt-5'>
      <div className='d-flex flex-column justify-content-center align-items-center py-3'>
            <div className='d-flex align-items-center mb-3'>
              <img src={logo} alt='e-cart logo' width='42' className='me-2' />
              <span className='fw-bold fs-4 text-dark'>e-cart</span>
            </div>
            <p className='text-secondary mb-3'>Your one-stop shop for trend-driven essentials, everyday deals, and premium products that make life easier.</p>
          </div>

      <div className='border-top border-secondary mt-4'>
        <div className='text-center p-3'>
          <p className='mb-0 text-secondary '>© 2026 e-cart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
