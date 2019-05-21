import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Policy from './Policy'
import Catalogue from './Catalogue'
import Cart from './Cart'
import NoMatch from './NoMatch'
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
            {/*<Route path="/catalogue/:type/:id"  component={Catalogue} /> */}
            {/*<Route path={["/catalogue/skin-type/dry", "/catalogue/skin-type/oily"]}  component={Catalogue} />*/}
            <Route path={"/catalogue/skin-type/:id"}  component={Catalogue} />
            <Route path="/cart" exact component={Cart} />
            <Route component={NoMatch}/>
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
