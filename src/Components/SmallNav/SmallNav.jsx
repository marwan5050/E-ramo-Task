import React from 'react';

import style from './SmallNav.module.css';
import logo1 from '../Assets/Images/Rectangle 1.png';
import { ReactComponent as Phone } from '../Assets/Icons/Vector.svg';
import {ReactComponent as Vicon} from '../Assets/Icons/Frame 4.svg';

export default function SmallNav() {
  return (
    <>
   

   <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo1} alt='logo' className='w-100'  />
    </a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">contact us
            <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className={`nav-link px-2 mx-md-2 ${style.customBorder} `} href="#"> <span><i className="px-1 fa-regular fa-envelope"></i></span>contact@bellout.com</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#"><span className={`me-3 ${style.spanIcon}`}><Phone className={`  ${style.phoneIcon}`} /></span> +0213000000</a>
        </li>
        
      </ul>

      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa-solid fa-globe"></i> English</a>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <a className="dropdown-item" href="#">Action 1</a>
            <a className="dropdown-item" href="#">Action 2</a>
          </div>
        </li>
      

      <button className='btn text-white text-capitalize ' style={{backgroundColor:`#E30613`}}> < Vicon  className='mb-1'/> become A vendor</button>
        </ul>

    </div>
  </div>
</nav>

    
    </>
  )
}
