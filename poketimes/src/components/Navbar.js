import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// 使用Link tag就可以跳到其他頁面,而且不用reload

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke Time</a>
        <ul className='right'>
          {/* <li><a href="/">Home</a></li> 同下,但不會reload */}
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}


export default Navbar