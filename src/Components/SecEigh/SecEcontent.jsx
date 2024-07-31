import React from 'react';
import image2 from '../Assets/Images/Rectangle 4.png';
import SecEigh from './SecEigh';
import {ReactComponent as Navico} from '../Assets/Icons/navico.svg';

import pro11 from '../Assets/Images/img_62 1.png';
import pro12 from '../Assets/Images/img_60 1.png';
import pro13 from '../Assets/Images/img_59 1.png';
import pro14 from '../Assets/Images/img_56 1.png';
import pro15 from '../Assets/Images/img_57 1.png';
import pro16 from '../Assets/Images/pro16.png';
import pro17 from '../Assets/Images/pro7.png';
import pro18 from '../Assets/Images/pro8.png';

export default function SecEcontent() {
  return (
    <div className='container'>
    <div className='row'>
        
        <div className='col-3'>
        <SecEigh />
        </div>

        <div className='col-9'>
            <div className='headSec d-flex justify-content-between align-items-center  ' style={{borderBottom:'solid 1px #E30613' }}>
                <div>
                    <h3 className='text-capitalize' style={{color:'#E30613' ,fontWeight: `700` , fontSize:`20px` , lineHeight:'20px'}}>grocery</h3>
                </div>

            <div>
            <span style={{ color: `#E30613`, fontWeight: `600`, fontSize: `14px`, lineHeight: `16px`,  }}> (322) </span>
                
            </div>
            </div>

             <div className='row mt-1 gy-4'>
                <div className='col-3 '>
                    <div className="card">
                    <div className='imgCon  position-relative'>
                        <div className='position-absolute top-0 end-0 '>
                                    < div className="badge text-center text-capitalize" style={{fontSize:'10px' , lineHeight:`20px` , fontWeight:`600` , backgroundColor:`#1450A3`}}>best seller</div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <img src={pro11} className="card-img-top w-50" alt="proimag" />
                                    </div>
                        </div>
                    
                        <div className="card-body">
                            <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>
                            
                            <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                            <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                            

                            <div className='stars my-1'>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                            </div>

                            

                        </div>
                            
                        <div className=' discount d-flex my-2  align-items-center'>
                                <div className=' me-3 fw-bold' style={{color:`#E30613` , fontSize:'20px'}}>500 Egp</div>
                                <div className='text-decoration-line-through fw-bold' style={{color:`#232323` , fontSize:'16px'}}>800 Egp</div>
                        </div>  

                        <div className='fonts mt-4 d-flex justify-content-around'>
                            <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                            <Navico />
                            <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                            
                        </div>
                    </div>   
                </div>

                    <div className='col-3'>
                    <div className="card" >
                        <div className='imgCon  position-relative'>
                            <div className='position-absolute top-0 end-0 '>
                                        < div className="badge text-center text-capitalize " style={{fontSize:'12px' , lineHeight:`20px` , fontWeight:`600` , backgroundColor:`#3E9237`}}>new</div>
                                        </div>
                            <div className='w-100 mx-auto mb-2 d-flex justify-content-center'>
                            <img src={pro12} className="card-img-top  w-50" alt="proimag" />
                            </div>
                            </div>
                    
                            <div className="card-body">
                            <h5 className="card-title " style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>
                            
                            <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                                <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                                

                                <div className='stars'>
                                    <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                    <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                    <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                    <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                    <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                                </div>

                                

                            </div>
                            
                            <div className=' discount d-flex my-2 '>
                                    <div className=' me-3' style={{color:`#E30613` , fontSize:'20px'}}>500 Egp</div>
                                    <div className='text-decoration-line-through fw-bold' style={{color:`#232323` , fontSize:`16px`}}>800 Egp</div>
                            </div>  

                            <div className='fonts mt-4 d-flex justify-content-around'>
                                <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                                <Navico />
                                <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                            </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                    <div className="card" >
                        <div className='imgCon position-relative'>
                            <div className='position-absolute top-0 end-0 '>
                                < div className="badge text-center text-dark text-uppercase" style={{fontSize:'10px' , lineHeight:`20px` , fontWeight:`600` , backgroundColor:`#FFC436`}}>15% off</div>
                            </div>
                                <div className='d-flex justify-content-center mb-2'>
                                    <img src={pro13} className="card-img-top w-50" alt="proimag" />
                                </div>
                            </div>
                    
                            <div className="card-body">
                            <h5 className="card-title " style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>
                            
                            <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                                <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                                

                                <div className='stars'>
                                    <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                    <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                    <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                    <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                    <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                                </div>

                                

                            </div>
                            
                            <div className=' discount d-flex my-2 '>
                                    <div className=' me-3 fw-bold' style={{color:`#E30613 ` , fontSize:`20px`}}>500 Egp</div>
                                    <div className='text-decoration-line-through fw-bold' style={{color:`#232323` , fontSize:`16px`}}>800 Egp</div>
                            </div>  

                            <div className='fonts mt-4 d-flex justify-content-around'>
                                <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                                <Navico />
                                <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                            </div>
                                
                            </div>
                    </div>   
                    </div>

                <div className='col-3'>
                <div className="card">
                    <div className='imgCon position-relative'>
                        <div className='position-absolute top-0 end-0 '>
                            < div className="badge text-center text-white text-uppercase" style={{fontSize:'10px' , lineHeight:`20px` , fontWeight:`600` , backgroundColor:`#E30613`}}>top rating</div>
                        </div>
                            <div className='d-flex justify-content-center mb-1'>
                                <img src={pro14} className="card-img-top " style={{width:'40%'}} alt="proimag" />
                            </div>
                        </div>
                    
                        <div className="card-body">
                            <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>
                            
                            <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                            <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                            

                            <div className='stars'>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                            </div>

                            

                        </div>
                            
                        <div className=' discount d-flex my-2 '>
                                <div className=' fw-bold me-3' style={{color:`#E30613` , fontSize:'20px'}}>500 Egp</div>
                                <div className='v text-decoration-line-through' style={{color:`#232323` , fontSize:'16px'}}>800 Egp</div>
                        </div>  

                        <div className='fonts mt-4 d-flex justify-content-around'>
                            <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                            <Navico />
                            <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                            
                        </div>
                    </div>   
                </div>

                <div className='col-3'>
                <div className="card " >
                    
                        <div className='d-flex justify-content-center'>
                        <img src={pro15} className="card-img-top w-25 mx-auto" alt="proimag" />
                        </div>
                    
                        <div className="card-body">
                            <h5 className="card-title my-3" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>
                            
                            <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                            <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                            

                            <div className='stars'>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                            </div>

                            

                        </div>
                            
                        <div className=' discount d-flex my-2 '>
                                <div className='fw-bold me-3' style={{color:`#E30613` , fontSize:'20px'}}>500 Egp</div>
                                <div className='fw-bold text-decoration-line-through' style={{color:`#232323` , fontSize:'16px'}}>800 Egp</div>
                        </div>  

                        <div className='fonts mt-4 d-flex justify-content-around'>
                            <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                            <Navico />
                            <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                            
                        </div>
                    </div>   
                </div>

                <div className='col-3'>
                <div className="card " >
                    
                        <div className='d-flex justify-content-center py-1'>
                        <img src={pro16} className="card-img-top w-50 mx-auto" alt="proimag" />
                        </div>
                    
                        <div className="card-body">
                            <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>
                            
                            <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                            <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                            

                            <div className='stars'>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                            </div>

                            

                        </div>
                            
                        <div className=' discount d-flex my-2 '>
                                <div className='fw-bold me-3' style={{color:`#E30613` , fontSize:'20px'}}>500 Egp</div>
                                <div className='fw-bold text-decoration-line-through' style={{color:`#232323` , fontSize:'16px'}}>800 Egp</div>
                        </div>  

                        <div className='fonts mt-4 d-flex justify-content-around'>
                            <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                            <Navico />
                            <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                            
                        </div>
                    </div>   
                </div>

                <div className='col-3'>
                <div className="card " >
                    
                        <div className='d-flex justify-content-center py-1'>
                        <img src={pro17} className="card-img-top w-50 mx-auto" alt="proimag" />
                        </div>
                    
                        <div className="card-body">
                            <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>
                            
                            <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                            <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                            

                            <div className='stars'>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                            </div>

                            

                        </div>
                            
                        <div className=' discount d-flex my-2 '>
                                <div className='fw-bold me-3' style={{color:`#E30613` , fontSize:'20px'}}>500 Egp</div>
                                <div className='fw-bold text-decoration-line-through' style={{color:`#232323` , fontSize:'16px'}}>800 Egp</div>
                        </div>  

                        <div className='fonts mt-4 d-flex justify-content-around'>
                            <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                            <Navico />
                            <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                            
                        </div>
                    </div>   
                </div>

                <div className='col-3'>
                <div className="card " >
                    
                        <div className='d-flex justify-content-center'>
                        <img src={pro18} className="card-img-top w-50 mx-auto" alt="proimag" />
                        </div>
                    
                        <div className="card-body">
                            <h5 className="card-title" style={{fontWeight:`600`, fontSize:`18px` , lineHeight:`20px` }}>product Name</h5>
                            
                            <div className='card-text my-2 d-flex justify-content-between align-items-center'>
                            <span style={{ color: `#1450A3`, fontWeight: `600`, fontSize: `12px`, lineHeight: `16px` }}> (322) </span>
                            

                            <div className='stars'>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#FFC436` }}></i>
                                <i className="fa-regular fa-star" style={{ color: `#CFCFCF` }}></i>
                            </div>

                            

                        </div>
                            
                        <div className=' discount d-flex my-2 '>
                                <div className='fw-bold me-3' style={{color:`#E30613` , fontSize:'20px'}}>500 Egp</div>
                                <div className='fw-bold text-decoration-line-through' style={{color:`#232323` , fontSize:'16px'}}>800 Egp</div>
                        </div>  

                        <div className='fonts mt-4 d-flex justify-content-around'>
                            <i className="fa-solid fa-cart-shopping" style={{color:`#E30613`}}></i>
                            <Navico />
                            <i className="fa-regular fa-heart" style={{color:`#919191`}}></i>
                        </div>
                            
                        </div>
                    </div>   
                </div>

            </div> 

            
        </div>
    </div>
</div>
  )
}
