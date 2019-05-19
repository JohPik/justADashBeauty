import React, { Component } from 'react';
import { Router, Route , Switch} from 'react-router-dom'

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
          <Header/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/policy" exact component={Policy} />
            <Route path="/catalogue" exact component={Catalogue} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
          <Footer/>
      </div>
    )
  }
}
export default App


// <Contact/>
// <Policy/>
// <Catalogue/>
// <Cart/>
