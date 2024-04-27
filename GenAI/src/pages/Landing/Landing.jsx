import React from 'react'
import './Landing.css'
import bgndImage from '../../assets/images/top-home-rectagnle.png'
import imagenMap from '../../assets/images/AI-Map.png'
import { Link } from 'react-router-dom'
//import PruebaItems from '../../components/PruebaItems/PruebaItems';
//import Hero from '../../components/Hero/Hero';

const Landing = () => {
  return (
    <div className='home'>
      <div className='background-landing'>
        <img id='bgndImage' src={bgndImage} alt="Imagen de background" />
        <Link to='/map'>
          <img id='imagenMap' src={imagenMap} alt="Imagen de mapa" />
        </Link>
      </div>
      <div className='landingTexts'>
        <p id='A'>A</p>
        <p id='UTOGEN'>UTO GEN</p>
        <p id='IMAP'>I MAP</p>
        <p id='IMAP'>I MAP</p>
        <p id='sub'>A new door to innovation ...</p>
      </div>
      <div className='landing-cards'>
        <div id='left-column'>
          <div id='left-column-first'></div>
          <Link to='/search'>
            <div id='left-column-second'>
              <h3>Search AI Tools</h3>
              <p>Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien.</p>
            </div>
          </Link>
          <div id='left-column-third'></div>
          <div id='left-column-fourth-back'>
            <div id='left-column-fourth'>
              <h3>What is Gen AI?</h3>
              <p>Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien.</p>
            </div>
          </div>
        </div>
        <div id="right-column">
          <div id="right-column-first">
            <div id="right-column-first-left"></div>
            <div id="right-column-first-right">
              <div id="right-column-first-right-up"></div>
              <div id="right-column-first-right-down"></div>
            </div>
          </div>
          <Link to='/about'>
            <div id="right-column-second">
              <h3>Who are we?</h3>
              <p>Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien.
                Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. 
                Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. 
                Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien.</p>
            </div>
          </Link>
          <div id="right-column-third">
            <div id="right-column-third-left-back">
              <div id="right-column-third-left"></div>
            </div>
            <div id="right-column-third-right-back">
              <div id="right-column-third-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing; 
