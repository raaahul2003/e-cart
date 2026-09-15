import './App.css'
import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Pnf from './pages/Pnf'


function App() {

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id/view' element={<Product />} />
        <Route path='/pnf' element={<Pnf />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
