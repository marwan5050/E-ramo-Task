import React from 'react'

import image3 from '../Assets/Images/img_62 1.png';
import image6 from '../Assets/Images/img_59 1.png';
import image4 from '../Assets/Images/img_61 1.png';
import image5 from '../Assets/Images/img_60 1.png';


export default function LeftContent() {
  return (
    <>
    <div className='container py-3 border'>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h3 className='text-capitalize' style={{fontSize:'18px' , fontWeight:'600'}}>latest items</h3>
            </div>
            <div className='fonts'>
            <i className="me-4 fa-solid fa-angle-left"></i>
            <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>

        <div className="progress my-2  mx-auto" style={{ height:`4px` ,  width: '70%'}} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: '50%' }} />
        </div>


        <div className='item my-5'>
        <div className='d-flex jsutify-content-between align-items-center' >
                    <div className='imgPro'>
                        <img className='w-100' src={image3} alt='imgpro' />
                       
                    </div>
                        <div className='proContent '>
                            <p className='my-2 ms-4  '  style={{ lineHeight:`24px` ,  fontWeight:`500`}}>A wonderful and of home and office</p>
                            
                            <div className=' discount d-flex justify-content-center '>
                                <div className='text-danger me-3'>500 Egp</div>
                                <div className='text-decoration-line-through'>800 Egp</div>
                            </div>
                            
                    </div>

                </div>
        </div>

        <div className='item my-5'>
        <div className='d-flex jsutify-content-between' >
                    <div className='imgPro'>
                        <img className='w-100' src={image6} alt='imgpro' />
                       
                    </div>
                        <div className='proContent'>
                            <p className='my-2 ms-4'  style={{lineHeight:`24px` , fontWeight:`500`}}>A wonderful and of home and office</p>
                            
                            <div className=' discount d-flex justify-content-center '>
                                <div className='text-danger me-3'>500 Egp</div>
                                <div className='text-decoration-line-through'>800 Egp</div>
                            </div>
                            
                    </div>

                </div>
        </div>


        <div className='item my-5'>
        <div className='d-flex jsutify-content-between' >
                    <div className='imgPro'>
                        <img className='w-100' src={image4} alt='imgpro' />
                       
                    </div>
                        <div className='proContent'>
                            <p className='my-2 ms-4'  style={{lineHeight:`24px` , fontWeight:`500`}}>A wonderful and of home and office</p>
                            
                            <div className=' discount d-flex justify-content-center '>
                                <div className='text-danger me-3'>500 Egp</div>
                                <div className='text-decoration-line-through'>800 Egp</div>
                            </div>
                            
                    </div>

                </div>
        </div>

        
        <div className='item my-5'>
        <div className='d-flex jsutify-content-between' >
                    <div className='imgPro'>
                        <img className='w-100' src={image5} alt='imgpro' />
                       
                    </div>
                        <div className='proContent'>
                            <p className='my-2 ms-4'  style={{lineHeight:`24px` , fontWeight:`500`}}>A wonderful and of home and office</p>
                            
                            <div className=' discount d-flex justify-content-center '>
                                <div className='text-danger me-3'>500 Egp</div>
                                <div className='text-decoration-line-through'>800 Egp</div>
                            </div>
                            
                    </div>

                </div>
        </div>

     </div>
    
    </>
  )
}
