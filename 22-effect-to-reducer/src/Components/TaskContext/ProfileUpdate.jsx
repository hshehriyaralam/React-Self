import React, { useContext, useState } from 'react'
import { ProfileContext } from './UseraContext'

const ProfileUpdate = () => {
    const [input, setIput] = useState('')
    const {updateProile} = useContext(ProfileContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        updateProile(input)
        setIput('')
    }
  return (
    <div>
      <h1>Update Profile </h1>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Update Your Name' className='border border-2 p-3' value={input} onChange={(e) => setIput(e.target.value)} />
      <button type='submit' >Change Name</button>
      </form>
    </div>
  )
}

export default ProfileUpdate
