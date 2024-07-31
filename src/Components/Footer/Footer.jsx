import React from 'react';
import logo from '../Assets/Images/Rectangle 1.png';
import applogo from '../Assets/Images/appellogo.png';
import googlelogo from '../Assets/Images/googlelogo.png';
import facebook from '../Assets/Images/facebook.png';
import instagram from '../Assets/Images/skill-icons_instagram.png';
import youtube from '../Assets/Images/youtube.png';
import twitter from '../Assets/Images/skill-icons_twitter.png';
import {ReactComponent as Copy} from '../Assets/Images/c.svg';

import {ReactComponent as Location} from '../Assets/Images/location.svg';
import { ReactComponent as Phone } from '../Assets/Images/phone.svg';

export default function Footer() {
  return (
   <>
    <div className='container my-5' style={{backgroundColor:`#232323`}}>

        <div className='row p-5'>
            <div className='col-md-3'>
                <div className='imgfooter'>
                    <img src={logo} className='w-50 ' alt='logo'/>
                </div>
                <p className='text-white my-4'>Download App</p>

                <div className='apps mt-3'>
                    <div className='mb-2'><img style={{width:`40%`}} src={applogo}  alt='logo'/></div>
                    <div><img style={{width:`40%`}} src={googlelogo}  alt='logo'/></div>
                </div>
            </div>

            <div className='col-md-3 text-white'>
                <h5 className='text-capitalize mb-5'>service us</h5>
                <ul className='list-unstyled'>
                    <li className=' text-capitalize mb-1'>About us</li>
                    <li className=' text-capitalize mb-1' >contact us</li>
                    <li className=' text-capitalize mb-1'>privacy poliacy</li>
                    <li className=' text-capitalize mb-1'>terms and conditions</li>
                    <li className=' text-uppercase mb-1'>faq</li>
                </ul>

                <div className='bt '>
                    <button className={`btn  text-white px-3  text-capitalize rounded-5 my-3` }  style={{outlineColor:'#FFC436' , borderColor:'#FFC436' }}> Become a Vendor </button>
                </div>

                <div className='socialIcons'>
                    <ul className='list-unstyled d-flex align-items-center'>
                       
                        <li className='me-2'><img src={facebook} alt='facbook' /></li>
                        <li className='me-2'><img src={instagram} alt='instagram' /></li>
                        <li className='me-2'><img src={twitter} alt='twitter' /></li>
                        <li className='me-2'><img src={youtube} alt='youtube' /></li>
                    </ul>
                </div>
            </div>


            <div className='col-md-3 text-white'>
            <h5 className='text-capitalize mb-5'>our company</h5>
                <ul className='list-unstyled'>
                    <li className=' text-capitalize mb-1'>all products</li>
                    <li className=' text-capitalize mb-1' >all orders</li>
                    <li className=' text-capitalize mb-1'>payment methods</li>
                    <li className=' text-capitalize mb-1'>terms and conditions</li>
                    <li className=' text-capitalize mb-1'>blog</li>
                </ul>
            </div>

            <div className='col-md-3 text-white '>
                <h5 className='text-capitalize mb-5'>store information</h5>
                <div className='d-flex align-items-center mb-3 '>
                    <div className='me-2 '>  <Location/> </div>
                    <div>Megashop - Demo Store
                    570 - Union Trade Center</div>
                </div>

                <div className='d-flex align-items-center  mb-3'>
                    <div className='ms-2 '>  <Phone /> </div>
                    
                    <div className='ms-1'>+0213000000</div>
                </div>

                <div className='d-flex align-items-center mb-3 '>
                    <div className='ms-3 '>  <i className="px-1 fa-regular fa-envelope"></i> </div>
                    
                    <div className='ms-2'>contact@bellout.com</div>
                </div>
               
               <p className='text-capitalize ms-4'>we are ready to help!</p>

               <div className='d-flex'>
                <input type='text' className='form-control text-capitalize' placeholder='enter your email'/>
                <button className='btn ' style={{backgroundColor:`#F40000` , color:'#fff'}}>subscribe</button>
               </div>

               
            </div>

            <div className='d-flex justify-content-center align-items-center'>
             <div className='text-white'> < Copy/> copyright 2024 Bellout | Developed by <span className=' text-capitalize' style={{color:'#F79E1B'}}>e-RAMO for degital solution</span></div>
            </div>
        </div>

         
    </div>
   </>
  )
}
