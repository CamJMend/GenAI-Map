import React from 'react'
import './Landing.css'
import bgndImage from '../../assets/images/top-home-rectagnle.png'
import imagenMap from '../../assets/images/AI-Map.png'
//import PruebaItems from '../../components/PruebaItems/PruebaItems';
//import Hero from '../../components/Hero/Hero';

const Landing = () => {
  return (
    <div className='home'>
      <div className='background-landing'>
        <img id='bgndImage' src={bgndImage} alt="Imagen de background" />
        <img id='imagenMap' src={imagenMap} alt="Imagen de mapa" />
      </div>
      <div className='landingTexts'>
        <p id='A'>A</p>
        <p id='UTOGEN'>UTO GEN</p>
        <p id='IMAP'>I MAP</p>
        <p id='IMAP'>I MAP</p>
        <p id='sub'>A new door to innovation ...</p>
      </div>
    </div>
  )
}

export default Landing; 
