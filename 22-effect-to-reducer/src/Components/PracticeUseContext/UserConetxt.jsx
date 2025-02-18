import React, { createContext, useContext } from 'react'
// import UserProvider from './UserProvider'
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'
import UpdateName from './UpdateName'

export const same = createContext()

const UserConetxt = () => {


  // const Rating = 56
  const  MovieDetails = {
    name : "Bhoola"
  }
  return (
    <>
    <div>
      <h2>User Context</h2>
      <same.Provider value={MovieDetails}  >
        {/* <UserProfile /> */}
        {/* <UpdateUser /> */}
        <UpdateName />
      </same.Provider>
    </div>
    </>
  )
}

export default UserConetxt
