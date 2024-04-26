import React from 'react';
import './About.css'; // Asegúrate de tener un archivo About.css en la misma carpeta que About.js
import aboutImage from '../../assets/images/About-image.png'; 
import aboutArrow from '../../assets/images/Arrow-about.png'; 

function About() {
    return (
        <div className="about-container">
            <img src={aboutArrow} alt="Arrow beside title" />
            <h1>About</h1>
            <div className="about-section-up">
                <h2>Title of section</h2>
                <p>Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien.</p>
            </div>
            <div className="about-section-down">
                <div className='about-inside-section'>
                    <h2>Title of section</h2>
                    <p>Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. Text non temper quam, et lacinia sapien. Mauris accumsan eros 
                        eget libero posuere vulputate.Mauris accumsan eras sapien. Text non temper quam, et lacinia sapien. </p>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="Network graphic" />
                </div>
            </div>
        </div>
    );
}

export default About;
