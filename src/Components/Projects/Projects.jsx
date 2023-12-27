import React from 'react';
import "./Project.css";
import Nobel from "../../Images/Nobel.jpg";
import Tinder from "../../Images/Tinder.png";
import Weather from "../../Images/Weather-1.png";
import Coffee from "../../Images/Coffee.png";
import In from "../../Images/in.png";
import Uber from "../../Images/uber.png";


function projects() {

  return (
    <section className="services section" id="Projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My previous projects</span>

      <div className="services__container container grid">
{/* /* ============================3=================== */}
        <div className="project__content">
          <a href="https://linkedin-2bf4e.web.app" target="_blank" rel="noopener noreferrer">
            <img src={In} className='project__img' alt="in" />
          </a>
        </div>
        {/* ============================1======================= */}
        <div className="project__content">
          <a href="https://nobellaurates.firebaseapp.com" target="_blank" rel="noopener noreferrer">
            <div>
              <img src={Nobel} className='project__img' alt='Nobel' />
            </div>
          </a>
        </div>
        
        {/* /* ============================2===================  */}
        <div className="project__content">
          <a href="https://tinder-clone-aa405.firebaseapp.com" target="_blank" rel="noopener noreferrer">
            <div>
              <img src={Tinder} className='project__img' alt='Tinder' />
            </div>
          </a>
        </div>

        {/* /* ============================3=================== */}
        <div className="project__content">
          <div >
            <img src={Weather} className='project__img-2' alt='weather' />
          </div>

         
        </div>
         {/* /* ============================3=================== */}
        <div className="project__content">
          <a href="https://restaurant-9f4c0.web.app/" target="_blank" rel="noopener noreferrer">
            <div>
              <img src={Coffee} className='project__img-2' alt="Apple" />
            </div>
          </a>
        </div>
       
       {/* /* ============================3=================== */}
        <div className="project__content">
          <a href="https://games-cab14.firebaseapp.com" target="_blank" rel="noopener noreferrer">
            <div>
              <img src={Uber} className='project__img-2' alt="Uber" />
            </div>
          </a>
        </div>
      

      </div>



    </section>








  )
}

export default projects;

