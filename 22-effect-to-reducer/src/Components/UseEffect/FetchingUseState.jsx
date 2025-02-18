import React, { useEffect, useState } from 'react'

const FetchingUseState = () => {
    const [data, setData ] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            if(data && data.length ) setData(data)

        }
        getData()
    }
)
  return (
    <div>
      <h1>Fetch Data using Use State</h1>
      <ul>
        {data?.map((todo, ) => (
            <section key={todo.id}>

                <li className='text-blak text-bold' > Tittle :{todo.title}</li>
                <li className='text-blue-900 text-normal' >Body ---{todo.body}</li>
            </section>
        ))}
      </ul>
    </div>
  )
}

export default FetchingUseState
