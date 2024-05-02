import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import "./LoginB.css";

const LoginB = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className='login-button'>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
}

export default LoginB 
