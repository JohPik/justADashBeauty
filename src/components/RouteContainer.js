import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingReturn from './pages/ShippingReturn';
import CatalogueList from './pages/productCatalogue/CatalogueList';
import Detail from './pages/productPage/Detail';
import Cart from './pages/cart/Cart';
import NoMatch from './pages/NoMatch';

const RouteContainer = () => {
  return (
    <div className='main'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/faqs' exact component={FAQs} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/privacy-policy' exact component={PrivacyPolicy} />
        <Route path='/shipping-return' exact component={ShippingReturn} />
        <Route
          path='/shop/skintype=:skinId&prodtype=:prodId'
          exact
          component={CatalogueList}
        />
        <Route path={'/shop/product-detail/:prodId'} exact component={Detail} />
        <Route path='/cart' exact component={Cart} />
        <Route path={'/'} component={NoMatch} />
      </Switch>
    </div>
  );
};

export default withRouter(RouteContainer);
