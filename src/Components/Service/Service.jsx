import React, { useState } from 'react';
import "./Services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faCropSimple } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Services() {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    if (toggleState === index) {
      setToggleState(null);  //Close the modal if it's already open
    } else {
      setToggleState(index); // Open the modal with the given index
    }
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {/* ============================1======================= */}
        <div className="services__content">
          <div>
            <FontAwesomeIcon className="uil uil-web-grid services__icon" icon={faCropSimple} />
            <h3 className="services__title">Product <br /> Designer </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>View More
            <FontAwesomeIcon className="uil uil-arrow-right services__button-icon" icon={faArrowUpRightFromSquare} />
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <div className='services__model-close' onClick={() => toggleTab(null)}>
                <FontAwesomeIcon className="services__model-close" icon={faXmark} />
              </div>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
                Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I create your company brand.</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">Design and mocups for companies</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
        {/* ============================2======================= */}
        <div className="services__content">
          <div>
            <FontAwesomeIcon className="uil uil-web-grid services__icon" icon={faCode} />
            <h3 className="services__title">UI/UX <br /> Designer </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>View More
            <FontAwesomeIcon className="uil uil-arrow-right services__button-icon" icon={faArrowUpRightFromSquare} />
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <div className='services__model-close' onClick={() => toggleTab(null)}>
                <FontAwesomeIcon className="services__model-close" icon={faXmark} />
              </div>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
                Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I create your company brand.</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">Design and mocups for companies</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        {/* ============================3======================= */}
        <div className="services__content">
          <div>
            <FontAwesomeIcon className="uil uil-web-grid services__icon" icon={faPenToSquare} />
            <h3 className="services__title">Visual <br /> Designer </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>View More
            <FontAwesomeIcon className="uil uil-arrow-right services__button-icon" icon={faArrowUpRightFromSquare} />
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <div className='services__model-close' onClick={() => toggleTab(null)}>
                <FontAwesomeIcon className="services__model-close" icon={faXmark} />
              </div>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.
                Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I create your company brand.</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">Design and mocups for companies</p>
                </li>

                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;



  