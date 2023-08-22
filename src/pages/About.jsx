import React from 'react'
import Navbar from '../components/Navbar'
import { Link, Outlet } from 'react-router-dom'
import InfoButton from '../components/InfoButon'
import BenButton from '../components/BenButton'

function About() {
  return (
    <div className='aboutPage'>
      <Navbar></Navbar>
      <nav>
        <Link to='BenKimim'><BenButton></BenButton></Link>
        <Link to='Herbalife'><InfoButton></InfoButton></Link>     
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default About
