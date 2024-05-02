import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from '../Loading/Loading';
import "./Profile.css";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />
    }
  return (
    <div className='user'>
      <img src={user.picture} alt={user.name}></img>
      <div className="user-data">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default Profile
