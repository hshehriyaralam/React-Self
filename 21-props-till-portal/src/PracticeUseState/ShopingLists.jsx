import React, { useState } from 'react'
import { IoIosTennisball } from 'react-icons/io'

function ShopingLists() {
  const [item, setItem] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleSubmitt = (e) => {
    e.preventDefault()
    const newItem = {
      name,
      quantity : parseInt(quantity)
    }

    setItem((prevIem) => [...prevIem, newItem])
    setName('')
    setQuantity('')
  }
  return (
    <div>
      <h1 className='text-3xl text-bold text-center my-10'>Shoping lists</h1>
      <form onSubmit={handleSubmitt} className='text-center'>
        <input type="text" 
        placeholder='Enter Product Name...'
        className='border'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input type="number" 
        placeholder='Enter Product Number...'
        className='border'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <button type='submit' className='border p-2' >Submit</button>
      </form>
      <ul>
        {item?.map((itme, index) => (
          <li key={index}>Product Name : {item.name} - Product Quantity {item.quantity}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShopingLists;
