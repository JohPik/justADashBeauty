import React, { useState } from 'react';
import { productList, skinTypes, prodTypes} from '../ressources/ProductList'

import NoMatch from './NoMatch'

const Catalogue = (props) => {

  // const [prodList, setProdList] = useState(productList);
  // The STATE MOTHER FUCKER
  const [prodList] = useState(productList);

  // the page id Either a skin type or a product type ex: oily, dry, cleanser
  const pageId = props.match.params.id
  const pageType = props.match.params.type

  const singleItem = (prod) => (
    <div key={prod.id} className="product-container">
      <h3>{prod.name} {prod.subName}</h3>
      <p>{prod.description}</p>
    </div>
  )


  // Find the right product to display on the page
  const renderList = () => {
    if (pageType === "skin-type") {
      return prodList.filter( prod => prod.skinType.includes(pageId)).map(prod => singleItem(prod) )
    } else if (pageType === "product-type") {
      return prodList.filter( prod => prod.productType.includes(pageId)).map( prod => singleItem(prod) )
    }
  }

  return ( skinTypes.includes(pageId) || prodTypes.includes(pageId) ? (
    <div>
      <h1>CATALOGUE</h1>
      <h2>{pageId} product</h2>
      <div className="product-list">{renderList()}</div>
    </div>
  ) : (
    <NoMatch />
  )
  )
}

export default Catalogue
