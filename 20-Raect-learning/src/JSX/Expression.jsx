import React from 'react'
import Greeting from './Greeting';
import ProductInfo from './ProductInfo';

function Expression({text}) {

    const myName = "Shahmeer"
    const multiply = (a, b) => a * b;
    const specialClass = "simple-class"
  return (
    <div className='border-solid border-2 border-green-500 text-center'>
    <p className='text-center  text-2xl text-textSecondary py-3  font-fontFamily '>{text}</p>
    <p className='text-2xl text-center '>2 + 2 = {2 + 2}</p>
    <p className='text-2xl text-center '>2 * 6 = {multiply(2,6)} </p>
    <p >My name is {myName}</p> 
    <p className={specialClass}  > This is a class name </p>
    <Greeting />
    <ProductInfo />
    </div>
    
  )
}

export default Expression;
