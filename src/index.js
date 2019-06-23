import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import { ProductProvider } from './components/context'
import App from './components/App';



ReactDOM.render(
  <CookiesProvider>
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </CookiesProvider>, document.getElementById('root'));
