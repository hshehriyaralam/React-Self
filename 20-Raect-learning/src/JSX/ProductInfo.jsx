import React from 'react'

function ProductInfo() {
    const Product = {
        name : "Face Wash",
        price : 2400,
        availability : "In stock"
    }
  return (
    <div className='text-center'>
      <p>Product Name : {Product.name}</p>
      <p>Product Price : {Product.price}</p>
      <p>Product availability : {Product.availability}</p>
    </div>
  )
}

export default ProductInfo
