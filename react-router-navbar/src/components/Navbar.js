import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import {ImCross} from "react-icons/im";
import "./navbar.css";

const Navbar = () => {

  const [mobile, setMobile] = useState(false);

  return (
    <nav className='navbar'>
      
        <h3 className='logo'>Logo</h3>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setMobile(false)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className='mobile-menu-icon' onClick={()=>setMobile(!mobile)}>
          {mobile ? <ImCross/> : <FaBars/>  }</button>
    
    </nav>
  )
}

export default Navbar;
