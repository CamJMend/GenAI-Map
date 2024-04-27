import React, { useState } from 'react'
import './NavbarWhite.css'
import { Link } from 'react-router-dom'
import image_logo from "../../assets/images/main_logo_black.png"


const NavbarWhite = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <div className='navbar-image'>
            <img src={image_logo} alt="Logo de Wizeline positivo" />
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link> {menu === 'home'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("map")}}><Link style={{ textDecoration: 'none' }} to='/map'>Map</Link>{menu === 'map'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("search")}}><Link style={{ textDecoration: 'none' }} to='/search'>Search</Link> {menu === 'search'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none' }} to='/about'>About</Link> {menu === 'about'?<hr/>:<></>}</li>
        </ul>
    </div>
  )
}

export default NavbarWhite