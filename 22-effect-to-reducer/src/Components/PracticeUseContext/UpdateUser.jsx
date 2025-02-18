import React, { useContext, useState } from 'react'
import { same } from './UserConetxt'
const UpdateUser = () => {
  const Rating = useContext(same)
  const [rating , updateRating] = useState(Rating)
  return (
    <div>
      <h2>Update User Profile </h2>
      <h1>Rating {Rating}</h1>
      <h1>Rating with UsesState = {rating}</h1>
      <button className='border border-2 text-bold p-3' onClick={() => updateRating(rating + 1)}>
        Upadate Ratings 
      </button>
    </div>
  )
}

export default UpdateUser
