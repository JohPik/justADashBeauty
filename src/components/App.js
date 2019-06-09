import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Catalogue from './pages/Catalogue'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import NoMatch from './pages/NoMatch'

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
            <Route path={"/catalogue/product-detail/:id"} exact component={Detail} />
            <Route path={"/catalogue/:type/:id"}  exact component={Catalogue} />
            <Route path="/cart" exact component={Cart} />
            {/* <Route path={["/error404", "/:id"]} component={NoMatch}/> */}
            <Route path={"/"} component={NoMatch}/>
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
