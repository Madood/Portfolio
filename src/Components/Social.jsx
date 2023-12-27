import React from 'react';
import "../Styles/Home.css";
import Instagram from "../Images/instagram.ico";
import Github from "../Images/github.ico";
import Linkedin from "../Images/linkedin.ico";

import "../Styles/header.css";


function Social() {
        return (
                <div className='home__social'>
                        <a className="home__social-icon" href="https://www.instagram.com/ruchul097/" target="_blank" rel="noreferrer">
                                <img alt='Insta' src={Instagram} className="home__icon" />
                        </a>
                        <a className="home__social-icon" href="https://github.com/Madood?tab=overview&from=2023-09-01&to=2023-09-06" rel="noreferrer" target="_blank">
                                <img alt='Insta' src={Github} className="home__icon" />
                        </a>
                        <a className="home__social-icon" href="https://linkedin.com/in/madood-maharvi-a1a480173" rel="noreferrer" target="_blank">
                                <img alt='Insta' src={Linkedin} className="home__icon" />
                        </a>
                </div>
        );
}

export default Social;
