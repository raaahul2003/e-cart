import React from 'react'

function Pageination({totalProducts, productPerpage, currentPage, setCurrentPage}) {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalProducts / productPerpage); i++) {
        pages.push(i)        
    }
    console.log(pages);
    
    return (
        <div>
            <button className='btn btn-light rounded mx-2 border border-dark px-4 py-2' onClick={()=> setCurrentPage(currentPage-1)} disabled={currentPage==1}>
                <i className="fa-solid fa-backward" ></i>
            </button>
            {
                pages?.map(page => (
                    // <button onClick={()=>setCurrentPage(page)} className='btn btn-light rounded mx-2 border border-dark px-4 py-2'>{page}</button>
                     <button
                        key={page}
                        onClick={()=>setCurrentPage(page)}
                        className={`btn rounded mx-2 border px-4 py-2 ${page === currentPage ? 'btn-dark border-primary text-white' : 'btn-light border-dark'}`}
                    >
                        {page}
                    </button>
                ))
            }
            
            <button className='btn btn-light rounded mx-2 border border-dark px-4 py-2' onClick={()=> setCurrentPage(currentPage+1)} disabled={currentPage==pages?.length}>
                <i className="fa-solid fa-forward" ></i>
            </button>
        </div>
    )
}

export default Pageination
