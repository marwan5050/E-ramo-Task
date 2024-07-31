import React from 'react'
import style from './SecEle.module.css'

import pro20 from '../Assets/Images/pro20.png';


export default function SecEle() {
  return (
   <>
    <div className={`container my-5 p-5 ${style.parent}`}>
        <div className='row'>
            <div className='col-md-8 '>
             
                <div className='p-5'>
                    <h6 className=' text-capitalize text-white'>Enjoy</h6>
                    <h2 className='fw-bolder'   style={{color:`#FFC436`}}>ProductName</h2>  
                    <p className=' text-white ' style={{width:`60%`}}>A wonderful and unique collection
                        of home and office furniture pieces
                        with distinct details and customized
                        only for your aspirations and ideas
                        </p>  

                        <h6 > <span className="badge p-2 my-2 text text-capitalize" style={{backgroundColor:`#FFC436` , color:`#232323` , fontSize:`20px` , lineHeight:`16px` ,fontWeight: `600`}} >15% off</span></h6>
                       

                        

                        <div className='bt '>
                            <button className={`btn  text-white px-3  text-capitalize rounded-5 my-3` }  style={{outlineColor:'#FFC436' , borderColor:'#FFC436' }}> Add to cart <span className=''><i className="ms-1 fa-solid fa-arrow-right-long"></i></span></button>
                        </div>
                </div>
                    
            </div>
            <div className='col-md-4'>
                <div className='contImage'>
                    <img src={pro20} className='w-100' alt='prodImage'/>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
