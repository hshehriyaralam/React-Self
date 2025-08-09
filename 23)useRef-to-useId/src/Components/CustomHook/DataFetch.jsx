import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const DataFetch = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((res) => res.json())
        .then((data) => setData(data))
    },[])
  return (
    <div>
      {
        data && data.map((item) => (
            <p key={item.id}> Title : {item.title}</p>
        ))
      }
    </div>
  )
}

export default DataFetch
