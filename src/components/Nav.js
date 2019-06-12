import React from 'react'
import { BrowserRouter as Link, NavLink, Router } from 'react-router-dom'
import '../App.css'

class Nav extends React.Component {
  render(){
    return (
      <nav>
        <React.Fragment>
          <NavLink className='navlink' to='/'>Home</NavLink>
          <NavLink className='navlink' to='/about'>About</NavLink>
          <NavLink className='navlink' to='/projects'>Projects</NavLink>
          <NavLink className='navlink' to='/contact'>Contact</NavLink>
        </React.Fragment>
      </nav>
    )
  }
}

export default Nav
