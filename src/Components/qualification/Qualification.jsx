import React, { useState } from 'react';
import './qualification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Qualification() {
        const [showEducation, setShowEducation] = useState(true);
        const [showExperience, setShowExperience] = useState(true);

        const toggleEducation = () => {
                setShowEducation(true);
                setShowExperience(false);
        };

        const toggleExperience = () => {
                setShowEducation(false);
                setShowExperience(true);
        };
        return (
                <section className="qualification section" id='qualification'>
                        <h2 className="section__title">Qualification</h2>
                        <span className="section__subtitle">My personal journey</span>

                        <div className="qualification__container container">
                                <div className="qualification__tabs">
                                        <div onClick={toggleEducation} className={`qualification__button ${showEducation ? 'active' : ''
                                                }`}>
                                                <FontAwesomeIcon className="qualification__button" icon={faGraduationCap} />
                                                Education
                                        </div>

                                        <div onClick={toggleExperience} className={`qualification__button ${showExperience ? 'active' : ''
                                                }`}>
                                                <FontAwesomeIcon className="qualification__button" icon={faBriefcase} />
                                                Experience
                                        </div>
                                </div>


                                {showEducation ?
                                        <div className="Education qualification__content ">
                                        <div className="qualification__data qualification-left-container">
                                                <div>
                                                        <FontAwesomeIcon className="qualification__icon" icon={faCircle} />

                                                </div>
                                                <div className="text-box">
                                                        <h3 className="qualification__title">Msc Economics</h3>
                                                        <span className="qualification__subtitle">PK- University of Lakki Marwat</span>
                                                        <div className="qualification__calendar">
                                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                                2011-2023
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="qualification__data qualification-right-container">
                                                <div>
                                                        <FontAwesomeIcon className="qualification__icon" icon={faCircle} />

                                                </div>
                                                <div className="text-box">
                                                        <h3 className="qualification__title">BSc Business Administration</h3>
                                                        <span className="qualification__subtitle">Poland-Poznan University of Economics</span>
                                                        <div className="qualification__calendar">
                                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                                2017-2020
                                                        </div>
                                                </div>

                                        </div>
                                        <div className="qualification__data qualification-left-container">
                                                <div>
                                                        <FontAwesomeIcon className="qualification__icon" icon={faCircle} />

                                                </div>
                                                <div className="text-box">
                                                        <h3 className="qualification__title">Diploma Accounting and Finance</h3>
                                                        <span className="qualification__subtitle">Pk- Lahore School of Economics</span>
                                                        <div className="qualification__calendar">
                                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                                2016-2017
                                                        </div>
                                                </div>

                                        </div>








                                      </div> :
                                        <div className="Experiance qualification__content ">
                                        <div className="qualification__data qualification-left-container">
                                                <div>
                                                        <FontAwesomeIcon className="qualification__icon" icon={faCircle} />

                                                </div>
                                                <div className="text-box">
                                                        <h3 className="qualification__title">General Manager</h3>
                                                        <span className="qualification__subtitle">Noor Muhammad Bricks Company</span>
                                                        <div className="qualification__calendar">
                                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                                2021-2023
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="qualification__data qualification-right-container">
                                                <div>
                                                        <FontAwesomeIcon className="qualification__icon" icon={faCircle} />

                                                </div>
                                                <div className="text-box">
                                                        <h3 className="qualification__title">Assistant Research Manager</h3>
                                                        <span className="qualification__subtitle">PL-AQunanet SA.</span>
                                                        <div className="qualification__calendar">
                                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                                2020-2021
                                                        </div>
                                                </div>

                                        </div>
                                        <div className="qualification__data qualification-left-container">
                                                <div>
                                                        <FontAwesomeIcon className="qualification__icon" icon={faCircle} />

                                                </div>
                                                <div className="text-box">
                                                        <h3 className="qualification__title">RyanAIr</h3>
                                                        <span className="qualification__subtitle">PL_Customer Service Agent </span>
                                                        <div className="qualification__calendar">
                                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                                2018-2020
                                                        </div>
                                                </div>

                                        </div>
                                </div>}

                            
                        </div>

                </section>
        );
}

export default Qualification;
