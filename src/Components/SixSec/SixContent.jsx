import React from 'react'
import LeftContent from './LeftContent'
import image2 from '../Assets/Images/Rectangle 4.png';
import image3 from '../Assets/Images/Group 22.png';
import pro3 from '../Assets/Images/pro3.png';
import pro4 from '../Assets/Images/pro 4.png';
import pro5 from '../Assets/Images/img_57 1.png';
import pro6 from '../Assets/Images/pro6.png';
import pro7 from '../Assets/Images/pro7.png';
import pro8 from '../Assets/Images/pro8.png';
import {ReactComponent as Navico} from '../Assets/Icons/navico.svg';

export default function SixContent() {
  return (
<>
    
    <div className='container'>
            <div className='row'>
                
                <div className='col-3'>
                <LeftContent />
                </div>

                        <div className='col-9'>
                            <div className='headSec d-flex justify-content-between align-items-center  '>
                                <div>
                                    <h3 style={{fontWeight: `700` , fontSize:`20px` , lineHeight:'20px'}}>best seller products</h3>
                                </div>

                            <div>
                                <ul className='d-flex list-unstyled ' >
                                    <li className='me-2 text-capitalize border-bottom' style={{color:`#E30613` , borderBottomColor:`#E30613`}}>all products</li>
                                    <li className='me-2 text-capitalize'>best seller</li>
                                    <li className='me-2 text-capitalize'>new arrivals</li>
                                    <li className='me-2 text-capitalize'> top rating</li>
                                    <li className='me-2 text-capitalize'>electronics</li>
                                </ul>
                            </div>
                           </div>

                            <div className='row gy-4'>
                                <div className='col-3 '>
                                    <div className="card">
                                    <div className='imgCon  position-relative'>
                                        <div className='position-absolute top-0 end-0 '>
                                                    < div className="badge text-center text-capitalize" style={{fontSize:'10px' , lineHeight:`20px` , fontWeight:`600` , backgroundColor:`#1450A3`}}>best seller</div>
                                                    </div>
                                                    <div className='d-flex justify-content-center'>
                                                        <img src={image2} className="card-img-top w-50" alt="proimag" />
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
                                           
                                        <div className=' discount d-flex my-2 '>
                                                <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                                                <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
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
                                            <div className='w-100 mx-auto mb-3 d-flex justify-content-center'>
                                            <img src={image3} className="card-img-top  w-50" alt="proimag" />
                                            </div>
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
                                                    <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                                                    <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
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
                                                <div className='d-flex justify-content-center mb-3'>
                                                    <img src={pro3} className="card-img-top w-50" alt="proimag" />
                                                </div>
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
                                                    <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                                                    <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
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
                                            <div className='d-flex justify-content-center mb-3'>
                                                <img src={pro4} className="card-img-top w-50" alt="proimag" />
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
                                                <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                                                <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
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
                                        <img src={pro5} className="card-img-top w-25 mx-auto" alt="proimag" />
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
                                                <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                                                <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
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
                                        <img src={pro6} className="card-img-top w-50 mx-auto" alt="proimag" />
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
                                                <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                                                <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
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
                                        <img src={pro7} className="card-img-top w-50 mx-auto" alt="proimag" />
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
                                                <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                                                <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
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
                                        <img src={pro8} className="card-img-top w-50 mx-auto" alt="proimag" />
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
                                                <div className=' me-3' style={{color:`#E30613`}}>500 Egp</div>
                                                <div className='text-decoration-line-through' style={{color:`#232323`}}>800 Egp</div>
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
    </>

    
  )
}
