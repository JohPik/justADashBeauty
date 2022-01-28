import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const NoMatch = () => {
  return (
    <section className='404-page'>
      <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
        <div>
          <h1 className='underline'>Error 404</h1>
          <p>Ooops Wrong page!</p>
          <button className='smart'>
            <Link to='/'>RETURN TO THE HOME PAGE</Link>
          </button>
        </div>
      </CSSTransition>
    </section>
  );
};

export default NoMatch;
