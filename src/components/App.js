import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';

import Header from './Header';
import RouteContainer from './RouteContainer';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'>
        <Fragment>
          <Header />
          <RouteContainer />
          <ScrollToTop />
          <Footer />
        </Fragment>
      </CSSTransition>
    );
  }
}
export default App;
