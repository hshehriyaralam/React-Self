import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setData([data])
        }
    getData()
    },[data])

  return (
    <div>
      <h1>Fetch Data Using UseEffect</h1>
      <ul>
        {data?.map((todo) => (
            <section key={todo.id}>
                <li>{data.length > 0 ? <h2>{todo[0].body}</h2> : <p>Loading ... !</p>}</li>
            </section>
        ))}
      </ul>
    </div>
  )
}

export default FetchDataEffect
