import React from 'react';



export default function SecEigh() {
  return (
   <>
   <div className='container py-3 border'>
        
   <div className='d-flex mb-4  justify-content-between align-items-center '>
            <div>
                <div className='text-capitalize fw-bold   ' >categories</div>
            </div>
            <div className='fonts'>
            <i className="me-4 fa-solid fa-angle-left" style={{color:'#E30613'}}></i>
            <i className="fa-solid fa-angle-right" style={{color:'#E30613'}}></i>
            </div>
        </div>

        <div className="progress my-3  " style={{ height:`4px` ,  width: '70%' , backgroundColor:'#D9D9D9'}} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: '50%' , backgroundColor:"#235BA9" }} />
        </div>
        

    <div className='list'>
        <ul className='list-unstyled'>
            <li className='text-capitalize fw-bold  mb-4 w-25 '  style={{color: '#E30613' ,  borderBottom:'solid 2px #E30613' }}>Grocery</li>
            <li className='text-capitalize fw-bold mb-4'>Phone</li>
            <li className='text-capitalize fw-bold mb-4'>furniture</li>
            <li className='text-capitalize fw-bold mb-4'>beauty</li>
            <li className='text-capitalize fw-bold mb-4'>clothes</li>
            <li className='text-capitalize fw-bold mb-4'>appliances</li>
            <li className='text-capitalize fw-bold mb-4'>accessories</li>
            <li className='text-capitalize fw-bold mb-4'>electronics</li>
            <li className='text-capitalize fw-bold mb-4'>books</li>
        </ul>
    </div>

     </div>
   </>
  )
}
