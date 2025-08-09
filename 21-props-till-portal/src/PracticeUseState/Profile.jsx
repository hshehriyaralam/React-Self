import React, { useState } from 'react'

function Profile() {

const [profile, setProfile] = useState({
  name : "",
  age : "",
})

const handleChange = (e) => {
  const {name, value} = e.target

  setProfile((prevProfile) => ({
    ...prevProfile,
    [name] : value,
  }))

}
  return (
    <div className=' flex flex-col items-center mt-10'>
      <div>
        <form >
        <label htmlFor="">
          Name :
        </label>
        <input type="text" 
        name='name'
        className='border p-1'
        value={profile.name}
        onChange={handleChange}  
        placeholder='Enter Your Name' />
          <br />
          <label htmlFor="">Age :</label>
          <input
          name='age'
          type="number" 
          placeholder='Enter your Age' 
          className='border p-1'
          onChange={handleChange}  
          value={profile.age}
          />
          <br />
          {/* <button type='submit' className='border text-center ' >Submit</button> */}
          </form>
      </div>
      <div className='mt-10'>
        <h2 className='text-3xl'>Profile</h2>
        <p>Name : {profile.name}</p>
        <p>Age : {profile.age}</p>
      </div>
    </div>
  )
}

export default Profile
