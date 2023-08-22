import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='mainNav'>
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to="/Hakkımda">Hakkımda</NavLink>
    </nav>
  )
}

export default Navbar
