import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className="header">
      <h3>Just A Dash beauty</h3>
      <ul className="header-list">
        <li className="main-list-element">
          <Link to="/">Home</Link>
        </li>
        <li className="main-list-element">
          Skin Type
          <ul>
            <li>
              <Link to="/catalogue/skin-type/oily">Oily</Link>
              <Link to="/catalogue/skin-type/dry">Dry</Link>
            </li>
          </ul>
        </li>
        <li className="main-list-element">
          <Link to="/about">About</Link>
        </li>
        <li className="main-list-element">
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
