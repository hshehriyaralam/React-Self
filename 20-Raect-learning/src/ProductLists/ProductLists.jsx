import React from 'react'

function ProductLists() {
    const ProductLists = [
        {
            id : 1,
            name : "face Wash",
            price : 190
        },
        {
            id : 2,
            name : "Shirt",
            price : 540
        },
        {
            id : 3,
            name : "Watch",
            price : 290
        },
        {
            id : 4,
            name : "shoes",
            price : 790
        },
        {
            id : 5,
            name : "Jacket",
            price : 800
        },
    ]
  return (
    <div>
      {ProductLists.map(({id,name,price}) => (
        <ul key={id}>
            <li>{id} {name} {price}</li>
        </ul>
      ))}
    </div>
  )
}

export default ProductLists;
