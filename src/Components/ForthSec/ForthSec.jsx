import React from 'react';

import image3 from '../Assets/Images/img_62 1.png';
import image4 from '../Assets/Images/img_61 1.png';
import image5 from '../Assets/Images/img_60 1.png';
import image6 from '../Assets/Images/img_59 1.png';
 
export default function ForthSec() {
  return (
    <>
    <div className='container my-5' >
        <div className='row'>
            
            <div className='col-3'>

                <div className='d-flex jsutify-content-between' >
                    <div className='imgPro'>
                        <img className='w-100' src={image3} alt='imgpro' />
                       
                    </div>
                    <div className='proContent'>
                        <p className='text-center'>A wonderful andof home and office</p>
                        <h6 className='text-center'> <span className="badge  text text-capitalize" style={{backgroundColor:`#FFC436` , color:`#232323` , fontSize:`12px` , lineHeight:`16px` ,fontWeight: `600`}} >15% off</span></h6>
                        <div className='bt d-flex justify-content-center '>
                        <button className={`btn btn-outline-danger   text-capitalize rounded   my-3`} > Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                    </div>
                    </div>

                </div>
                
                
            </div>





            <div className='col-3'>
            <div className='d-flex jsutify-content-between' >
                    <div className='imgPro'>
                        <img className='w-100' src={image4} alt='imgpro' />
                       
                    </div>
                    <div className='proContent'>
                        <p className='text-center'>A wonderful andof home and office</p>
                        <h6 className='text-center'> <span className="badge  text text-capitalize" style={{backgroundColor:`#FFC436` , color:`#232323` , fontSize:`12px` , lineHeight:`16px` ,fontWeight: `600`}} >15% off</span></h6>
                        <div className='bt d-flex justify-content-center '>
                        <button className={`btn btn-outline-danger   text-capitalize rounded   my-3`} > Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                    </div>
                    </div>

                </div>
            </div>
            <div className='col-3'>
            <div className='d-flex jsutify-content-between' >
                    <div className='imgPro'>
                        <img className='w-100' src={image5} alt='imgpro' />
                       
                    </div>
                    <div className='proContent'>
                        <p className='text-center'>A wonderful andof home and office</p>
                        <h6 className='text-center'> <span className="badge  text text-capitalize" style={{backgroundColor:`#FFC436` , color:`#232323` , fontSize:`12px` , lineHeight:`16px` ,fontWeight: `600`}} >15% off</span></h6>
                        <div className='bt d-flex justify-content-center '>
                        <button className={`btn btn-outline-danger   text-capitalize rounded   my-3`} > Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                    </div>
                    </div>

                </div>
            </div>
            <div className='col-3'>
            <div className='d-flex jsutify-content-between' >
                    <div className='imgPro'>
                        <img className='w-100' src={image6} alt='imgpro' />
                       
                    </div>
                    <div className='proContent'>
                        <p className='text-center'>A wonderful andof home and office</p>
                        <h6 className='text-center'> <span className="badge  text text-capitalize" style={{backgroundColor:`#FFC436` , color:`#232323` , fontSize:`12px` , lineHeight:`16px` ,fontWeight: `600`}} >15% off</span></h6>
                        <div className='bt d-flex justify-content-center '>
                        <button className={`btn btn-outline-danger   text-capitalize rounded   my-3`} > Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}
