import React from 'react';


import image2 from '../Assets/Images/Rectangle 4.png';
import image3 from '../Assets/Images/Group 20.png';
import image4 from '../Assets/Images/Rectangle 12.png';
import image5 from '../Assets/Images/Rectangle 11.png';
import {ReactComponent as Navico} from '../Assets/Icons/navico.svg';

export default function FifthSec() {
  return (
    <>

<div className='container mb-5'>

    <div className='headSec d-flex justify-content-between align-items-center  '>
        <div>
            <h3 style={{fontWeight: `700` , fontSize:`20px` , lineHeight:'20px'}}>best seller products</h3>
        </div>

        <div>
            <ul className='d-flex list-unstyled ' >
                <li className='me-2 text-capitalize border-bottom' style={{color:`#E30613` , borderBottomColor:`#E30613`}}>phones</li>
                <li className='me-2 text-capitalize'>grocery</li>
                <li className='me-2 text-capitalize'>baby care</li>
                <li className='me-2 text-capitalize'> skin care</li>
                <li className='me-2 text-capitalize'>electronics</li>
            </ul>
        </div>
    </div>


    <div className='row'>
        <div className='col-3'>
            <div className="card " style={{width: '18rem'}}>
                <img src={image2} className="card-img-top" alt="proimag" />
                <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>


                        <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                            <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                            <div className="progress flex-shrink-1" style={{ height:`4px` ,  width: '40%', margin: '0 10px' }} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar" style={{ width: '40%' }} />
                            </div>

                            <div className='stars'>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                            </div>
                        </div>
                        <div className=' discount d-flex my-2 '>
                            <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                            <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
                        </div>  


                        <div className='fonts my-2 d-flex justify-content-between'>
                        <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                        <Navico/>
                        
                        <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                    
                    
                </div>
            </div>
         </div>

         <div className='col-3'>
            <div className="card " style={{width: '18rem'}}>
                <div className='imgCon position-relative'>
                   <div className='position-absolute top-0 end-0 '>
                              < div className="badge text-center  p-2" style={{fontSize:'12px' , lineHeight:`16px` , fontWeight:`600` , backgroundColor:`#3E9237`}}>New</div>
                            </div>
                <img src={image3} className="card-img-top" alt="proimag" />
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>


                        <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                        <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                        <div className="progress flex-shrink-1" style={{ height:`4px` ,  width: '40%', margin: '0 10px' }} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: '40%' }} />
                        </div>
                        <div className='stars'>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                        </div>
                        </div>
                        <div className=' discount d-flex my-2 '>
                            <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                            <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
                        </div>  


                        <div className='fonts my-2 d-flex justify-content-between'>
                        <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                        <Navico/>
                        <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                    
                    
                </div>
    </div>
         </div>


         <div className='col-3'>
            <div className="card " style={{width: '18rem'}}>
                <img src={image4} className="card-img-top" alt="proimag" />
                <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>


                        <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                        <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                        <div className="progress flex-shrink-1" style={{ height:`4px` ,  width: '40%', margin: '0 10px' }} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: '40%' }} />
                        </div>
                        <div className='stars'>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                        </div>
                        </div>
                        <div className=' discount d-flex my-2 '>
                            <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                            <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
                        </div>  


                        <div className='fonts my-2 d-flex justify-content-between'>
                        <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                        <Navico/>
                        <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                    
                    
                </div>
    </div>
         </div>


         <div className='col-3'>
            <div className="card " style={{width: '18rem'}}>
                <img src={image5} className="card-img-top" alt="proimag" />
                <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>


                        <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                        <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                        <div className="progress flex-shrink-1" style={{ height:`4px` ,  width: '40%', margin: '0 10px' }} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: '40%' }} />
                        </div>
                        <div className='stars'>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                            <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                        </div>
                        </div>
                        <div className=' discount d-flex my-2 '>
                            <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                            <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
                        </div>  


                        <div className='fonts my-2 d-flex justify-content-between'>
                        <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                        <Navico/>
                        <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                    
                    
                </div>
    </div>
         </div>
    </div>
</div>



   

    </>
  )
}
