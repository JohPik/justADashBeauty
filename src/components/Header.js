import React from 'react';
import { Link } from 'react-router-dom'
import { ProductConsumer } from './context'


const Header = () => {
  return(
    <ProductConsumer>
      {(value) => {
        const cartLength = value.cart.length
        return (
          <section className="header">

            <section className="shipping-banner">
                Free Shipping in Australia over $100 Orders
            </section>

             <section className="header-navigation">

                 <div className="logo-container">
                   <Link to="/">
                     <img src= "/images/Just-A-Dash-Beauty_Logo.svg" alt="Just A Dash Beauty Logo" className="logo"/>
                   </Link>
                 </div>

                 <nav className="navbar-desktop">
                      <ul className="nav-menu">
                        <li className="primary-nav-item">
                          <Link to="/shop/skintype=all&prodtype=all">SHOP</Link>
                          <div className="dropdown-content">
                            <div className="dropdown-col-1">
                              <span>Skin Type</span>
                              <Link to="/shop/skintype=oily&prodtype=all">Oily</Link>
                              <Link to="/shop/skintype=dry&prodtype=all">Dry</Link>
                              <Link to="/shop/skintype=sensitive&prodtype=all">Sensitive</Link>
                              <Link to="/shop/skintype=problematic&prodtype=all">Problematic</Link>
                              <Link to="/shop/skintype=normal&prodtype=all">Normal</Link>
                            </div>
                            <div className="dropdown-col-2">
                              <span>Product Type</span>
                              <Link to="/shop/skintype=all&prodtype=cleanser">Cleanser</Link>
                              <Link to="/shop/skintype=all&prodtype=toning mist">Toning Mist</Link>
                              <Link to="/shop/skintype=all&prodtype=exfoliant">Exfoliant</Link>
                              <Link to="/shop/skintype=all&prodtype=serum">Serum</Link>
                              <Link to="/shop/skintype=all&prodtype=moisturiser">Moisturiser</Link>
                              <Link to="/shop/skintype=all&prodtype=treatment">Treatment</Link>
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
                  </nav>

                 <div className="cart-container">
                   <Link to="/cart" className="cartLink">
                     <img src= "/images/basket.svg" alt="Cart" className="cart-icon"/>
                     { cartLength < 1 ? null : <div className="cartItems">{cartLength}</div>}
                   </Link>
                 </div>


                 <div className="button-menu-toggle">
                   <img src= "/images/hamburger.svg" alt="Menu Toggle" className="menu-toggle-icon"/>
                 </div>

                 <nav className="navbar-mobile">
                      <ul className="nav-menu">
                        <li className="primary-nav-item">
                          <Link to="/shop/skintype=all&prodtype=all">SHOP</Link>
                          <div className="dropdown-content">
                            <div className="dropdown-col-1">
                              <span>Skin Type</span>
                              <Link to="/shop/skintype=oily&prodtype=all">Oily</Link>
                              <Link to="/shop/skintype=dry&prodtype=all">Dry</Link>
                              <Link to="/shop/skintype=sensitive&prodtype=all">Sensitive</Link>
                              <Link to="/shop/skintype=problematic&prodtype=all">Problematic</Link>
                              <Link to="/shop/skintype=normal&prodtype=all">Normal</Link>
                            </div>
                            <div className="dropdown-col-2">
                              <span>Product Type</span>
                              <Link to="/shop/skintype=all&prodtype=cleanser">Cleanser</Link>
                              <Link to="/shop/skintype=all&prodtype=toning mist">Toning Mist</Link>
                              <Link to="/shop/skintype=all&prodtype=exfoliant">Exfoliant</Link>
                              <Link to="/shop/skintype=all&prodtype=serum">Serum</Link>
                              <Link to="/shop/skintype=all&prodtype=moisturiser">Moisturiser</Link>
                              <Link to="/shop/skintype=all&prodtype=treatment">Treatment</Link>
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
                  </nav>

            </section>

          </section>
        )
      }}
    </ProductConsumer>
  )
}

export default Header
