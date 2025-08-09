import React, { useContext } from 'react'
import { ProfileContext } from './UseraContext'


const ProfileRender = () => {
    const {profile} = useContext(ProfileContext)
  return (
    <div>
        <h1>Name : {profile.name}</h1>
     
    </div>
  )
}

export default ProfileRender
