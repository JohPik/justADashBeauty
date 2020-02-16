import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = (props) => {
  return (
      <section className="hero-slider">
        <div className="hero-img-container">
          <div className="polaroid-container first">
            <img src= "/images/Hero-Slider_Square_GoodBye-Sunshine_Just-A-Dash-Beauty.jpg" alt="Model- About Page"/>
            <span>#Good Bye Sunshine</span>
          </div>
          <div className="polaroid-container second">
            <img src= "/images/Hero-Slider_Square_Escape-in-Bora-Bora_Just-A-Dash-Beauty.jpg" alt="Model- About Page"/>
            <span>#Escape in Bora Bora</span>
          </div>
          <div className="polaroid-container third">
            <img src= "/images/Hero-Slider_Square_No-Handyman-Needed_Just-A-Dash-Beauty.jpg" alt="Model- About Page"/>
            <span>#No Handyman Needed</span>
          </div>
        </div>
        <div className="text-container">
         <h2>Natural Cosmetic version 2.0</h2>
         <h3>Embrace the nature version of yourself</h3>
         <button><Link to="/shop/skintype=all&prodtype=all">SHOP NOW</Link></button>
        </div>
      </section>
  )
}

export default HeroSlider
