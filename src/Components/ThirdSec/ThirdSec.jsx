import React from 'react';

import style from '../ThirdSec/ThirdSec.module.css';
import image1 from '../Assets/Images/img_56 1.png';
import image2 from '../Assets/Images/img_57 1.png';
import ForthSec from '../ForthSec/ForthSec';


export default function ThirdSec() {



  return (
    <div className='container my-5' >
        <div className='row'>
            <div className='left col-9'>
                <div className={` row p-5 ${style.leftC}`}>
                    <div className='col-9 text-center'> 

                        <h6>Enjoy</h6>
                        <h2 className='fw-bolder'   style={{color:`#E30613`}}>ProductName</h2>  
                        <p className=' text-center mx-auto' style={{width:`60%`}}>A wonderful and unique collection
                            of home and office furniture pieces
                            with distinct details and customized
                            only for your aspirations and ideas
                            </p>  
                            <div className=' discount d-flex justify-content-center '>
                                <div className='text-danger me-3'>50,00 Egp</div>
                                <div className='text-decoration-line-through'>53,00 Egp</div>
                            </div>

                            <div className='bt d-flex justify-content-center'>
                                <button className={`btn text-white  text-capitalize rounded my-3`} style={{backgroundColor:`#E30613`}}> Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                            </div>
                    </div>

                    <div className='col-3'>
                      <img className='w-100' src={image1} alt='product' />    
                     </div>
                </div>
            </div>
            <div className='right col-2'>
            
            <h5 className='fw-bolder'   style={{color:`#E30613` , fontSize:`24px` , lineHeight:`68px` ,fontWeight: `700`}}>ProductName</h5>  
            <p className=' text-center mx-auto' style={{width:`60%` , fontSize:`14px` , lineHeight:`24px` , fontWeight: `500`}}>A wonderful and unique 
                    of home and office furniture 
                    with distinct details and
                </p>  
                <h6 className='text-center'> <span className="badge  text text-capitalize" style={{backgroundColor:`#FFC436` , color:`#232323` , fontSize:`12px` , lineHeight:`16px` ,fontWeight: `600`}} >15% off</span></h6>
                <div className='proImg mx-auto' style={{width:`114px` , height:`197px`}}>
                    <img className='w-100' src={image2} alt='imageProd' />
                </div>

                <div className='bt d-flex justify-content-center'>
                    <button className={`btn btn-outline-danger   text-capitalize rounded my-3`} > Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                </div>
            </div>
        </div>


        <ForthSec/>
    </div>
  )
}
