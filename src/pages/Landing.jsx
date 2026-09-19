import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router';
import { fetchProducts } from '../redux/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Pageination from '../components/Pageination';

function Landing() {
  const dispatch = useDispatch()
  const { loading, allproducts, error } = useSelector(state => state.product)
  console.log(loading, allproducts, error);

  const [currentPage, setCurrentPage] = useState(1)
  const cardPerPage = 6
  let endingIndex = currentPage * cardPerPage
  let startingIndex = endingIndex - cardPerPage
  if (startingIndex > allproducts?.length) {
    setCurrentPage(1)
  }
  let currentProducts = allproducts.slice(startingIndex, endingIndex)


  useEffect(() => {

    dispatch(fetchProducts())

  }, [])

  return (
    <>
      <Header insideLanding={true} />
      {
        loading ?
          <div className='text-center my-5 fs-1'>
            <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          :
          <div className='container my-3'>
            <div className='row'>
              {
                currentProducts?.length > 0 ?
                  currentProducts?.map(pro => (
                    <div className='col-lg-4 col-md-6  mt-3'>
                      <Card className='p-2 shadow rounded' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pro.thumbnail} />
                        <Card.Body>
                          <Card.Title className='text-center'>{pro.title.slice(0, 15)}</Card.Title>
                          <div className='text-center'>
                            <Link to={`/product/${pro.id}/view`} className='fw-bold text-decoration-none'>View More</Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                  :
                  <p className='text-center fw-bold'>No Produts Found!</p>
              }
            </div>
            <div className='text-center mt-3'>
              <Pageination totalProducts={allproducts?.length} productPerpage={cardPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          </div>
      }
    </>
  )
}

export default Landing
