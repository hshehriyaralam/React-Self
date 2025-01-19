import React from 'react'
import UserLists from '../UserLists/UserLists';
import ProductLists from '../ProductLists/ProductLists';

function Lists({text}) {
    const numberofArray = [1,2,3,4,5,6,7,8,9,10];
     const ProductInfo = [
       {
         name : "Face Wash",
         price : 2400,
         availability : "In stock"
        },
        {
          name : "Face Wash",
          price : 2400,
          availability : "In stock"
         },
         {
          name : "Face Wash",
          price : 2400,
          availability : "In stock"
         },
         {
          name : "Face Wash",
          price : 2400,
          availability : "In stock"
         },
         {
          name : "Face Wash",
          price : 2400,
          availability : "In stock"
         },
         {
          name : "Face Wash",
          price : 2400,
          availability : "In stock"
         },
      ]

  return (
   <div className='border-solid border-2 border-green-500 text-center'>
      <p className='text-center  text-2xl text-textSecondary py-3  font-fontFamily '>{text}</p>
        {ProductInfo.map(({name, price, availability}) => (
          <ul key={Math.random()}>
            <li>{name}</li>
            <li>{price}</li>
            <li>{availability}</li>
          </ul>
        ) )}
        <UserLists />
        <ProductLists />
    </div>
  )
}

export default Lists
