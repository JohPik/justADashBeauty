import React from 'react';
import { Route , Switch, withRouter} from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import CatalogueList from './pages/CatalogueList'
import Catalogue from './pages/Catalogue'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import NoMatch from './pages/NoMatch'

const RouteContainer = () => {

  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/policy" exact component={Policy} />
        <Route path="/shop/skintype=:skinId&prodtype=:prodId" exact component={CatalogueList} />
        <Route path={"/catalogue/product-detail/:prodId"} exact component={Detail} />
        <Route path={"/catalogue/:type/:id"}  exact component={Catalogue} />
        <Route path="/cart" exact component={Cart} />
        <Route path={"/"} component={NoMatch}/>
      </Switch>
    </div>
  )
}

export default withRouter(RouteContainer)


// const RouteContainer = ({ location }) => {
//
//   return (
//     <TransitionGroup>
//       <CSSTransition
//         key={location.key}
//         timeout={500}
//         classNames="fade"
//       >
//       <Switch location= {location}>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" exact component={About} />
//         <Route path="/contact" exact component={Contact} />
//         <Route path="/policy" exact component={Policy} />
//         <Route path={"/catalogue/product-detail/:id"} exact component={Detail} />
//         <Route path={"/catalogue/:type/:id"}  exact component={Catalogue} />
//         <Route path="/cart" exact component={Cart} />
//         <Route path={"/"} component={NoMatch}/>
//       </Switch>
//     </CSSTransition>
//     </TransitionGroup>
//   )
//
// }
//
// export default withRouter(RouteContainer)
