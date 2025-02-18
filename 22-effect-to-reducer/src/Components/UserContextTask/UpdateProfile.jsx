import React, { useState } from 'react'
import {UserContext} from "./UserContext"
import { useContext } from 'react'
const UpdateProfile = () => {
    const {updateUser} = useContext(UserContext)
    const [newName, setNewName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser(newName)
        setNewName("")
    }
  return (
    <div>
      <h3>Update Profile</h3>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Change Your Name'
        className='border border-2 p-2' 
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        />
        <button type='submit' >
            Change
        </button>
      </form>
    </div>
  )
}
export default UpdateProfile

