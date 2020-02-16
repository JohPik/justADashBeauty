import React from 'react';

import SkinType from './SkinType'
import HeroSlider from './HeroSlider'
// import OurValues from './OurValues'


const Home = (props) => {

  return (
    <section className="home">
      <h1>Just A Dash Beauty</h1>
      <HeroSlider/>
      <section className="our-values">Oour Values</section>
      <SkinType/>
      <section className="insta-feed">Instagram</section>
    </section>

  )
}

export default Home
