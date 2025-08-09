import React, { useContext } from 'react'
import {same} from './UserConetxt'
const UserProvider = () => {

  const Rating = useContext(same)

  return (
    <div>
      <h1>User Provider</h1>
      <p>Bazigar Film Rating {Rating}</p>
    </div>
  )
}

export default UserProvider
