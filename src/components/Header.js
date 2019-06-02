import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className="header">
      <h3>Just A Dash beauty</h3>

        <div className="navbar">
          <Link to="/">Home</Link>

          <div className="dropdown">
            <button className="dropbtn">Skin Type</button>
              <div className="dropdown-content">
                <Link to="/catalogue/skin-type/oily">Oily</Link>
                <Link to="/catalogue/skin-type/dry">Dry</Link>
                <Link to="/catalogue/skin-type/sensitive">Sensitive</Link>
                <Link to="/catalogue/skin-type/problematic">Problematic</Link>
                <Link to="/catalogue/skin-type/normal">Normal</Link>
              </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Product Type</button>
              <div className="dropdown-content">
                <Link to="/catalogue/product-type/cleanser">cleanser</Link>
                <Link to="/catalogue/product-type/toningMist">toningMist</Link>
                <Link to="/catalogue/product-type/exfoliant">exfoliant</Link>
                <Link to="/catalogue/product-type/serum">serum</Link>
                <Link to="/catalogue/product-type/moisturiser">moisturiser</Link>
                <Link to="/catalogue/product-type/treatment">treatment</Link>
              </div>
          </div>

          <Link to="/about">About</Link>
          <Link to="/contact">contact</Link>
          <Link to="/cart">cart</Link>
          </div>

    </div>
  )
}

export default Header
