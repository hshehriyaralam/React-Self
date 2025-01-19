import React from 'react'

function Header() {
  return (
    <header>
        <h1 className='text-2xl text-center p-3 bg-secondary text-textSecondary'>Welcom to our website</h1>
        <nav className='flex gap-8 justify-center my-2 text-textSecondary'>
            <a href="Home" >Home</a>
            <a href="Home">about</a>
            <a href="Home">Contact</a>
        </nav>
    </header>
  )
}

export default Header;
