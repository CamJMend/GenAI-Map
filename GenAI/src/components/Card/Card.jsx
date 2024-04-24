import React from 'react'
import './Card.css'
import image_logo from "../../assets/images/main_logo_white_X1.png"
import data from '../../assets/data.js'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='bgnd-image'>
                <img src={props.urlLogo} alt="" />
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>More information</button>
        </div>
      )
}
    
export default Card