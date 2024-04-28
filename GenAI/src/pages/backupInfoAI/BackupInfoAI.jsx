import React from 'react'
import './InfoAI.css'
import toolImage from '../../assets/images/AiToolImage.png'; 
import returnArrow from '../../assets/images/arrowReturn.png'; 
import mockData from '../../assets/data'; 

const InfoAI = () => {
  return (
    <div className='infoai'>
      <div className="information">
        <div className="return">
          <img src={returnArrow} alt="Back arrow" />
          <h5>Return</h5>
        </div>
        <div className="logo-title">
          <h1>Name of the tool</h1>
        </div>
        <div className="pricing-licensing">
          <ul id='pricing-licensing-list'>
            <li>Free</li>
            <li>Private</li>
          </ul>
        </div>
        <div className="categories">
          <ul id='categories-list'>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
          </ul>
        </div>
        <div className="tasks">
          <ul id='tasks-list'>
            <li>Task 1</li>
            <li>Task 2</li>
          </ul>
        </div>
        <div className="description">
          <p>Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. 
            Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. 
            Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. 
            Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien. 
            Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien.</p>
        </div>
        <button id='visit-button'>Visit tool website</button>
      </div>
      <div className="image">
        <img src={toolImage} alt="Imagen de vectores formando una cara" />
      </div>
    </div>
  )
}

export default InfoAI;
