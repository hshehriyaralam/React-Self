import React, { useContext } from 'react'
import  {same}  from './UserConetxt.jsx'
const UserProfile = () => {

  const Rating = useContext(same)
  return (
    <div>
      <h1>User Profile</h1>
      <p>Bharmaster Movie Rating {Rating}</p>
    </div>
  )
}

export default UserProfile
