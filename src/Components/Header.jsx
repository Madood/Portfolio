import React, { useState } from 'react';
import "../Styles/header.css";
import Home from "../Images/home.ico";
import Toggal from "../Images/dice-four.ico";
import User from "../Images/user.ico";
import Bulb from "../Images/light-bulb.ico";
import Contact from "../Images/contacts.ico";
import Cross from "../Images/cross.ico";
import Skills from "../Images/skills.ico";
import Service from "../Images/service.ico";


function Header() {
  // =======================Toggle Menue =========================
  const [Toggle, showMenue] = useState(false);
  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className="nav__log">Madood Maharvi</a>

        <div className={Toggle ? "nav__menue show-menue" : "nav__menue"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav_link active-link">
                <img alt="Home" className="nav__icon" rel="icon" src={Home} type="image/x-icon" /> Home 
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav_link">
                <img alt="Home" className="nav__icon" rel="icon" src={User} type="image/x-icon" />About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav_link">
                <img alt="Home" className="nav__icon" rel="icon" src={Bulb} type="image/x-icon" />Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav_link">
                <img alt="Home" className="nav__icon" rel="icon" src={Service} type="image/x-icon" />Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav_link">
                <img alt="Home" className="nav__icon" rel="icon" src={Skills} type="image/x-icon" />Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav_link">
                <img alt="Home" className="nav__icon" rel="icon" src={Contact} type="image/x-icon" />Contact
              </a>
            </li>

            <div className='nav__close' onClick={() => showMenue(!Toggle)}>  <img alt="close" className="nav__close icon" rel="icon" src={Cross} type="image/x-icon" /></div>
          </ul>
        </div>
        <div className='nav__toggle' onClick={() => showMenue(!Toggle)}>  <img alt="Toggle" className="nav__icon icon" rel="icon" src={Toggal} type="image/x-icon" /></div>
        
      </nav>
    </header>
  )
}

export default Header;



