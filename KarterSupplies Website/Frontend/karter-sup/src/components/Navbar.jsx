import React, {useState} from 'react';
import './style.css';
import { FaBars } from 'react-icons/fa';
import ks1 from '../assets/ks1.png'


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
  
    const handleNavToggle = () => {
      console.log("Nav toggle clicked");
      setIsNavOpen(!isNavOpen);
      console.log("isNavOpen: ", !isNavOpen);
    };
  

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
      <div className="nav-icon" onClick={handleNavToggle}>
        <FaBars />
      </div>
      <div className={`sidebar ${isNavOpen ? 'sidebar-open' : ''}`}>
      <img className='img1' src={ks1}alt="" />
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={`overlay ${isNavOpen ? 'overlay-open' : ''}`} onClick={handleNavToggle}>
      </div>
    
    </nav>
  );
};



export default Navbar;
