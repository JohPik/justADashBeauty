import React from 'react';
import { Link } from 'react-router-dom'
import { ProductConsumer } from './context'


const Header = (props) => {

  const toggleMobileMenu = () => {
    toggleSecondaryMobileMenu(true)
    const menu = document.querySelector(".navbar-mobile")
    const menuButton = document.querySelector(".button-menu-toggle")
    menu.classList.toggle("visible")
    menuButton.classList.toggle("visible")
    console.log(props);
  }

  const toggleSecondaryMobileMenu = (boolean) => {
    const secondaryMenu = document.querySelector(".secondary-mobile-items")
    if (!boolean) {
      secondaryMenu.classList.toggle("visible")
    } else {
       secondaryMenu.classList.remove("visible")
    }

  }

  return (
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
                   {/*<img src= "/images/hamburger.svg" alt="Menu Toggle" className="menu-toggle-icon" onClick={() => toggleMobileMenu()}/>*/}
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.01 16.91" alt="Menu Toggle" className="menu-toggle-icon" onClick={() => toggleMobileMenu()}>
                     <title>Menu Toggle</title>
                     <g id="Layer_2" data-name="Layer 2">
                       <g id="Layer_1-2" data-name="Layer 1">
                         <rect width="25.01" height="2.97" rx="1.46" className="top"/>
                         <rect y="6.97" width="25.01" height="2.97" rx="1.46" className="mid"/>
                         <rect y="13.94" width="25.01" height="2.97" rx="1.46" className="bot"/>
                       </g>
                     </g>
                   </svg>
                 </div>

                 <nav className="navbar-mobile">
                   <div className="main-mobile-items">
                     <ul className="nav-menu">
                       <li className="primary-nav-item">
                         <Link to="/shop/skintype=all&prodtype=all">SHOP</Link><span className="open-secondary-menu-icon" onClick={() => toggleSecondaryMobileMenu()}>></span>
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

                   <div className="secondary-mobile-items">
                     <Link to="/shop/skintype=all&prodtype=all">SHOP</Link><span className="go-back-link" onClick={() => toggleSecondaryMobileMenu()}>x</span>
                     <div className="sublist-col-1">
                       <span>Skin Type</span>
                       <Link to="/shop/skintype=oily&prodtype=all">Oily</Link>
                       <Link to="/shop/skintype=dry&prodtype=all">Dry</Link>
                       <Link to="/shop/skintype=sensitive&prodtype=all">Sensitive</Link>
                       <Link to="/shop/skintype=problematic&prodtype=all">Problematic</Link>
                       <Link to="/shop/skintype=normal&prodtype=all">Normal</Link>
                     </div>
                     <div className="sublist-col-2">
                       <span>Product Type</span>
                       <Link to="/shop/skintype=all&prodtype=cleanser">Cleanser</Link>
                       <Link to="/shop/skintype=all&prodtype=toning mist">Toning Mist</Link>
                       <Link to="/shop/skintype=all&prodtype=exfoliant">Exfoliant</Link>
                       <Link to="/shop/skintype=all&prodtype=serum">Serum</Link>
                       <Link to="/shop/skintype=all&prodtype=moisturiser">Moisturiser</Link>
                       <Link to="/shop/skintype=all&prodtype=treatment">Treatment</Link>
                     </div>
                   </div>

                  </nav>

            </section>

          </section>
        )
      }}
    </ProductConsumer>
  )
}

export default Header
