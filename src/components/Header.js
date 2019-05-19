import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className="header">
      <h3>Just A Dash beauty</h3>
      <ul className="header-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalogue">Catalogue</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
