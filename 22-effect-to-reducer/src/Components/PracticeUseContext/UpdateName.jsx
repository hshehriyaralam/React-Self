import React, { useContext, useState, useSyncExternalStore } from 'react'
import { same } from './UserConetxt'
const UpdateName = () => {
    const MovieDetails = useContext(same)
    const [movieName, changeMovieName ] = useState()
    const hnadleChange = () => {
        movieName.map((movie) => movie === "BhoolBhulaiya 3" ? changeMovieName(["Parsuit Of Happiness"]) : movie)
        changeMovieName(["Persuit Of Happiness"])
    }
  return (
    <div>
      <h1>Update Movie Name</h1>
      <p>Movie Name {MovieDetails.name}</p>
      <p>Name  with useState {movieName}</p>
      {/* <button className='border border-2 p-4 ' onClick={hnadleChange} > Change Name  </button> */}
    </div>
  )
}

export default UpdateName
