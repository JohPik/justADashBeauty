import React from 'react';

import SkinType from './SkinType'

const Home = (props) => {

  return (
    <section className="home">
      <h1>Just A Dash Beauty</h1>
      <section className="hero-slider">
        <div className="img-container">
         <img src= "/images/Model-shoot-1.jpg" alt="Model- About Page"/>
        </div>
        <div className="text-container">
         <h2>Natural Cosmetic version 2.0</h2>
         <h3>Embrace the nature version of yourself</h3>
         <button>SHOP NOW</button>
        </div>
      </section>
      <section className="our-values">Oour Values</section>
      <SkinType/>
      <section className="insta-feed">Instagram</section>
    </section>

  )
}

export default Home
