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
          <ul className="sub-list">
            <li>
              <Link to="/catalogue/skin-type/oily">Oily</Link>
            </li>
            <li>
              <Link to="/catalogue/skin-type/dry">Dry</Link>
            </li>
            <li>
              <Link to="/catalogue/skin-type/sensitive">Sensitive</Link>
            </li>
            <li>
              <Link to="/catalogue/skin-type/problematic">Problematic</Link>
            </li>
            <li>
              <Link to="/catalogue/skin-type/normal">Normal</Link>
            </li>

          </ul>
        </li>


        <li className="main-list-element">
          Product Type
          <ul className="prod-list">
            <li>
              <Link to="/catalogue/product-type/cleanser">cleanser</Link>
            </li>
            <li>
              <Link to="/catalogue/product-type/toningMist">toningMist</Link>
            </li>
            <li>
              <Link to="/catalogue/product-type/exfoliant">exfoliant</Link>
            </li>
            <li>
              <Link to="/catalogue/product-type/serum">serum</Link>
            </li>
            <li>
              <Link to="/catalogue/product-type/moisturiser">moisturiser</Link>
            </li>
            <li>
              <Link to="/catalogue/product-type/treatment">treatment</Link>
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
