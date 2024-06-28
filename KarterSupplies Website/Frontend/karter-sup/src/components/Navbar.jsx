import React from 'react';
import './style.css';
import { FaBars } from 'react-icons/fa';
import ks1 from '../assets/ks1.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="Hero.jsx">
          <img className='img1' src={ks1}alt="" />
          </a>

          {/*Karter Supplies  // for Logo in css*/}
          </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-icon">
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
