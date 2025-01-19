import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function LaernComponents({text}) {
  return (
    <>
    <div className='border-solid border-2 border-green-500'>
      <p className='text-center  text-2xl text-textSecondary py-3  font-fontFamily '>{text}</p>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
    </>
  )
}

export default LaernComponents;
