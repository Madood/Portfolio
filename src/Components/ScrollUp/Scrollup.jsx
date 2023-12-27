import React, { useState, useEffect } from 'react';
import './Scrollup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'

function Scrollup() {

        const [isVisible, setIsVisible] = useState(false);

        const handleScroll = () => {
                if (window.scrollY > window.innerHeight * 0.5) {
                        setIsVisible(true);
                } else {
                        setIsVisible(false);
                }
        };

        useEffect(() => {
                window.addEventListener('scroll', handleScroll);
                return () => {
                        window.removeEventListener('scroll', handleScroll);
                };
        }, []);

        const scrollToTop = () => {
                window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                });
        };

        return (
                <div>
                        {isVisible && (
                                <a href="#Home" className="scrollup" onClick={scrollToTop}>
                                        <FontAwesomeIcon className="scrollup__icon" icon={faCircleUp} />
                                </a>
                        )}
                </div>
        )
}

export default Scrollup