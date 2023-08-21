import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to="/About">Hakkımda</NavLink>
    </nav>
  )
}

export default Navbar
