import React, { Component } from 'react';

import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Policy from './Policy'
import Catalogue from './Catalogue'
import Cart from './Cart'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        App
      <Header/>
        <Home/>
        <About/>
        <Contact/>
        <Policy/>
        <Catalogue/>
        <Cart/>
      <Footer/>
      </div>
    )
  }
}
export default App
