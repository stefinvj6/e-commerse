import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <Link to={'/'} style={{textDecoration:'none',color:'#fff'}}>
      <h1>CLASSY CHOICE</h1>
      </Link>
      <div className="nav">
        <Link to={'./logout'} >
      <button  className='nav-logout'>Log Out</button>
      </Link>
      </div>
    </header>
  )
}

export default Header