import React from 'react';
import "./footer.css";
import Instagram from "../../Images/instagram.ico";
import Github from "../../Images/github.ico";
import Linkedin from "../../Images/linkedin.ico";

function Footer() {
  return (
    <div className="footer__container footer container" id="footer">
      <h1 className="footer__title">Madood</h1>

      <ul className="footer__list">
        <li><a href="#about" className='footer__link' >About Us </a></li>
        <li><a href="#Projects" className='footer__link' >Projects </a></li>
        <li><a href="#Testimonial" className='footer__link' >Testimonial </a></li>
        <li><a href="#Contact" className='footer__link' >Contact Us </a></li>
      </ul>

      <div className="footer__social">
        <a className="footer__social-link" href="https://www.instagram.com/ruchul097/" target="_blank"  rel="noopener noreferrer">
          <img alt='Insta' rel="icon" src={Instagram} className="footer__img" />
        </a>
        <a className="footer__social-link" href="https://github.com/Madood?tab=overview&from=2023-09-01&to=2023-09-06" rel="noopener noreferrer" target="_blank">
          <img alt='Insta' rel="icon" src={Github} className="footer__img" />
        </a>
        <a className="footer__social-link" href="https://linkedin.com/in/madood-maharvi-a1a480173" rel="noopener noreferrer" target="_blank"  >
          <img alt='Insta' rel="icon" src={Linkedin} className="footer__img" />
        </a>

      </div>

      <div>
         <p  className="footer__copy ">©️Ruchul-2023. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer