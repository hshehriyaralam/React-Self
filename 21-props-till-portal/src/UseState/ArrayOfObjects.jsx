import React, { useState } from 'react'
function ArrayOfObjects() {
    const [movie, setMovies] = useState([
        {id: 1 , name : "Superman", Release  :2001 },
        {id: 2 , name : "Hakeem Luqman", Release  :2091 },
        {id: 3 , name : "Spider Man", Release  :2045 },
        {id: 4 , name : "Javed Afridi", Release  :2014 },
        {id: 5 , name : "Shahrukh", Release  :2009 }
    ])

    const changeName = () => {
        setMovies(movie.map( m => m.id === 3 ? {...movie, name : "Kirish", Release : 2019} : m))
    }
  return (
    <div className='text-2xl text-left m-5'>
      {movie?.map((m) => (
        <ul key={Math.random ()}  >
            <li>{m.name}</li>
            <li>{m.Release}</li>
        </ul>
      ))}
      <button className='p-3 border-2  mt-3' onClick={changeName} > Change name</button>
    </div>
  )
}

export default ArrayOfObjects
