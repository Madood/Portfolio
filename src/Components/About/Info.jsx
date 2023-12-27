import React from 'react'

function Info() {
  return (
          <div className="about__info grid">
                  <div className="about__box">
                          <i class='bx bxs-award'></i>
                          <h3 className="about__title">
                                  Experience
                          </h3>
                          <span className="about__subtitle">3 Years Working</span>
                  </div>
                  <div className="about__box">
                          <i class='bx bx-briefcase-alt'></i>
                          <h3 className="about__title">
                                  Completed 
                          </h3>
                          <span className="about__subtitle">15 + Projects</span>
                  </div>
                  <div className="about__box">
                          <i class='bx bx-headphone'></i>
                          <h3 className="about__title">
                                  Support
                          </h3>
                          <span className="about__subtitle">Online 24/7</span>
                  </div>
   </div>
  )
}

export default Info