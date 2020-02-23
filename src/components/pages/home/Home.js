import React from 'react';

import SkinType from './SkinType'
import HeroSlider from './HeroSlider'
import OurValues from './OurValues'
import Instagram from './Instagram'


const Home = (props) => {

  return (
    <section className="home">
      <h1>Just A Dash Beauty</h1>
      <HeroSlider/>
      <OurValues/>
      <SkinType/>
      <Instagram />
    </section>

  )
}

export default Home
