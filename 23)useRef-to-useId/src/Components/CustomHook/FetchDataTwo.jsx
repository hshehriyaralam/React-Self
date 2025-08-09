import React from 'react'
import CustOmHook from './CustOmHook'

const FetchDataTwo = () => {
    const [data] = CustOmHook('https://jsonplaceholder.typicode.com/posts')
  
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

export default FetchDataTwo
