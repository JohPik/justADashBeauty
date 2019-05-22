import React, { useState } from 'react';
import { productList, skinTypes, prodTypes} from '../ressources/ProductList'

import NoMatch from './NoMatch'

const Catalogue = (props) => {

  // const [prodList, setProdList] = useState(productList);
  // The STATE MOTHER FUCKER
  const [prodList] = useState(productList);

  const PageType = props.match.params.id

  const renderList = () => {
    return prodList.filter( prod => prod.skinType.includes(PageType)).map(prod => {
    return (
      <div key={prod.id} className="product-container">
        <h3>{prod.name} {prod.subName}</h3>
        <p>{prod.description}</p>
      </div>
        )
    })
  }

  return ( skinTypes.includes(PageType) || prodTypes.includes(PageType) ? (
    <div>
      <h1>CATALOGUE</h1>
      <h2>{PageType} product</h2>
      <div className="product-list">{renderList()}</div>
    </div>
  ) : (
    <NoMatch />
  )
  )
}

export default Catalogue
