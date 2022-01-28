import React from 'react';

import SkinType from './SkinType';
import HeroSlider from './HeroSlider';
import OurValues from './OurValues';
import Instagram from './Instagram';
import { CSSTransition } from 'react-transition-group';

const Home = (props) => {
  return (
    <section className='home'>
      <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
        <div className='animation-wrapper'>
          <h1>Just A Dash Beauty</h1>
          <HeroSlider />
          <OurValues />
          <SkinType />
          <Instagram />
        </div>
      </CSSTransition>
    </section>
  );
};

export default Home;
