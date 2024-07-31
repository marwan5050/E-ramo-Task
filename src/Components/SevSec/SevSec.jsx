import React from 'react';

import style from '../ThirdSec/ThirdSec.module.css';


import imgageLed from '../Assets/Images/led1.png';
import imgled2 from '../Assets/Images/led2.png';
import imgled3 from '../Assets/Images/led3.png';
import imageshoe from '../Assets/Images/shoe.png';

export default function SevSec() {
  return (
   <>
     <div className='container my-5' >
        <div className='row'>
            <div className='left col-9'>
                <div className={` row p-5 ${style.leftC}`}>

                <div className='col-3'>
                      <img className='w-100' src={imgageLed} alt='product' /> 
                      <div className='d-flex  align-items-center'>
                        <img src={imgled2} className='w-50' alt='imgpro' />
                        <img src={imgled3} className='w-25' alt='imgpro' />
                        <img src={imgled3} className='w-25' alt='imgpro' />
                        <img src={imgled3} className='w-25' alt='imgpro' />
                      </div>   
                     </div>

                    <div className='col-9 text-center'> 

                        
                        <h2 className='fw-bolder'   style={{color:`#E30613`}}>ProductName</h2>  
                        <div className='card-text my-2 d-flex justify-content-center align-items-center'>
                            <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px`  }}> (322) </span>
                            <div className="progress mx-4" style={{ height:`4px` ,  width: '20%' , backgroundColor:`#C8C2C2` }} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar" style={{ width: '40%' , backgroundColor:`#235BA9` }} />
                            </div>

                            <div className='stars'>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                            </div>
                        </div>
                        <p className=' text-center mx-auto' style={{width:`60%`}}>A wonderful and unique collection
                            of home and office furniture pieces
                            with distinct details and customized
                            only for your aspirations and ideas
                            </p>  
                            <div className=' discount d-flex justify-content-center align-items-center'>
                                <div className='fw-bold me-3 ' style={{color:`#E30613` , fontSize:`33px` , fontWeight:700}}>50,00 Egp</div>
                                <div className='text-decoration-line-through' style={{ fontSize:`22px` , fontWeight:700}}>53,00 Egp</div>
                            </div>

                            <div className='bt d-flex justify-content-center'>
                                <button className={`btn text-white  text-capitalize rounded-5 my-3`} style={{backgroundColor:`#E30613`}}> Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                            </div>
                    </div>

                  
                </div>
            </div>

            <div className='right col-3 position-relative'>
            <div className='imgCon '>
                <div className='position-absolute top-0 end-0 '>
                    < div className="badge text-center text-white text-capitalize" style={{fontSize:'10px' , lineHeight:`20px` , fontWeight:`600` , backgroundColor:`#3E9237`}}>new</div>
                     </div>
                </div>
            
            <p className=' text-center mt-4 mx-auto' style={{width:`60%` , fontSize:`14px` , lineHeight:`24px` , fontWeight: `500`}}>A wonderful and unique 
                    of home and office furniture 
                    with distinct details and
                </p>  
                <h6 className='text-center'> <span className="badge  text text-capitalize" style={{backgroundColor:`#FFC436` , color:`#232323` , fontSize:`12px` , lineHeight:`16px` ,fontWeight: `600`}} >15% off</span></h6>
                <div className='proImg mx-auto' style={{width:`114px`  }}>
                    <img className='w-100' src={imageshoe} alt='imageProd' />
                </div>

                <div className='bt d-flex justify-content-center'>
                    <button className={`btn btn-outline-danger   text-capitalize rounded my-3`} > Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                </div>
            </div>
        </div>


        
    </div>
   </>
  )
}
