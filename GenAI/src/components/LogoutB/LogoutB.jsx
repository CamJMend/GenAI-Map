import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import "./LogoutB.css";

const LogoutB = () => {
    const { logout } = useAuth0()
  return (
    <div className='logout-button'>
        <button onClick={() => logout({ returnTo:window.location.origin})}>Log Out</button>
    </div>
  )
}

export default LogoutB
