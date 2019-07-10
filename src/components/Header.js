import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <nav>

      <section>
          <div className="shipping-banner">
          Free Shipping in Australia over $100 Orders
        </div>
      </section>

       <section>
         <div className="header-navigation">
           <div className="logo-container">
             <Link to="/">
               <img src= "/images/Just-A-Dash-Beauty_Logo.svg" alt="Just A Dash Beauty Logo" className="logo"/>
             </Link>
           </div>

           <div className="navbar">
                <ul className="nav-menu">
                  <li className="primary-nav-item">
                    <Link to="/404">SHOP</Link>
                    <div className="dropdown-content">
                      <div className="dropdown-col-1">
                        <span>Skin Type</span>
                        <Link to="/catalogue/skin-type/oily">Oily</Link>
                        <Link to="/catalogue/skin-type/dry">Dry</Link>
                        <Link to="/catalogue/skin-type/sensitive">Sensitive</Link>
                        <Link to="/catalogue/skin-type/problematic">Problematic</Link>
                        <Link to="/catalogue/skin-type/normal">Normal</Link>
                      </div>
                      <div className="dropdown-col-2">
                        <span>Product Type</span>
                        <Link to="/catalogue/product-type/cleanser">Cleanser</Link>
                        <Link to="/catalogue/product-type/toningMist">Toning Mist</Link>
                        <Link to="/catalogue/product-type/exfoliant">Exfoliant</Link>
                        <Link to="/catalogue/product-type/serum">Serum</Link>
                        <Link to="/catalogue/product-type/moisturiser">Moisturiser</Link>
                        <Link to="/catalogue/product-type/treatment">Treatment</Link>
                      </div>
                    </div>

                  </li>
                  <li className="primary-nav-item">
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li className="primary-nav-item">
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li className="primary-nav-item">
                    <Link to="/contact">CONTACTS</Link>
                  </li>
                </ul>
                </div>
           </div>

           <div className="cart-container">
             <Link to="/cart">
               <img src= "/images/basket.svg" alt="Cart" className="cart-icon"/>
             </Link>
           </div>

      </section>

    </nav>
  )
}

export default Header
