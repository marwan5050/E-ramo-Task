import React from 'react';

import style from './SecondNav.module.css';

import {ReactComponent as Barico} from '../Assets/Icons/Group.svg';
import {ReactComponent as Search} from '../Assets/Icons/search.svg';
import {ReactComponent as Navico} from '../Assets/Icons/navico.svg';
 
export default function SecondNav() {
  return (
    <>
    

<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container">
    
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0 d-flex justify-content-between align-items-center">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  text-white" style={{backgroundColor:`#E30613`}} href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  < Barico className=' me-2 mb-1'/> Browse Categorey</a>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <a className="dropdown-item" href="#">Action 1</a>
            <a className="dropdown-item" href="#">Action 2</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold mx-2 text-danger" style={{Color:`blue`}} href="#" aria-current="page">Home
            <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold mx-2  text-dark" style={{Color:`red`}} href="#">About us</a>
        </li>

        <li className="nav-item">
          <a className="nav-link fw-bold mx-2 text-dark" href="#">Blogs</a>
        </li>

        <li className="nav-item">
          <a className="nav-link fw-bold mx-2 text-dark" href="#">Contact us</a>
        </li>

        

        
      </ul>

      <form className="d-flex my-2 my-lg-0">
        
       
        <div className={` mx-4 ${style.searchContainer}`}>
          <input type="text"  placeholder="Search your product" className={`form-control rounded-5  px-4 ${style.customPlaceholder} ${style.searchInput}`} />
          <Search  className='me-md-3'/>
          
        </div>


      </form>

      <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
      <li className={`fonst `}>
        
        <span className="position-relative border-end">
          <i className="mx-3 fa-regular fa-bell" style={{ color: '#E30613' }}></i>
          <span className="position-absolute top-0 end-0 translate-middle badge  " style={{ backgroundColor:'#3771C8', fontSize:'9px'}}>
            4 <span className="visually-hidden">unread messages</span>
          </span>
        </span>

       

        <span className="position-relative border-end">
        <i className="mx-3 fa-solid fa-cart-shopping " style={{color:`#E30613`}}></i>
          <span className="position-absolute top-0 end-0 translate-middle badge  " style={{ backgroundColor:'#3771C8', fontSize:'9px'}}>
            2 <span className="visually-hidden">unread messages</span>
          </span>
        </span>





        <span className="position-relative border-end">
        <Navico  className='mx-3'/>
          <span className="position-absolute top-0 end-0 translate-middle badge  " style={{ backgroundColor:'#3771C8', fontSize:'9px'}}>
            4 <span className="visually-hidden">unread messages</span>
          </span>
        </span>

        <span className='border-end'><i className="mx-3 fa-regular fa-user" style={{color:`#E30613`}}></i></span> <span className='mx-3'>Hello, Login</span>
     </li>
      </ul>
      
    </div>
  </div>
</nav>

    
    </>
  )
}
