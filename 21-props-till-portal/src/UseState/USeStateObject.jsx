import React, { useState } from 'react'

function USeStateObject() {
  const [movie, setMovies] = useState({
    name : "Avangers",
    Rating : 7,
    Release : 2013
  })

  const changeRaating = () => {
    setMovies({...movie, Rating : Math.floor(Math.random() * 20) + 1})
  }
  return (
    <div className='text-center text-2xl mt-8'>
      <p>{movie.name}</p>
      <p>{movie.Rating}</p>
      <p>{movie.Release}</p>
      <button className='p-4 border border-brown-400 mt-4' onClick={changeRaating}>Change Rating</button>
    
    </div>
  )
}

export default USeStateObject
