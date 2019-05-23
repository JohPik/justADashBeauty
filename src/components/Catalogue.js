import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { productList, skinTypes, prodTypes, currentProductSelected } from '../ressources/ProductList'

import NoMatch from './NoMatch'

const Catalogue = (props) => {

  // const [prodList, setProdList] = useState(productList);
  // The STATE MOTHER FUCKER
  const [prodList] = useState(productList);
  const [prodSelected, setProdSelected] = useState(currentProductSelected);

  // the page id Either a skin type or a product type ex: oily, dry, cleanser
  const pageId = props.match.params.id
  const pageType = props.match.params.type

  const singleItem = ({ id, name, subName, description, img  }) => (
    <div key={id} className="product-container">
      <h3>{name}</h3>
      <h4>{subName}</h4>
      <Link to="/">
      <img src={img} alt={name} className="image-thumbnail"/>
      </Link>
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

  return ( (pageType === "skin-type" && skinTypes.includes(pageId)) || ( pageType === "product-type" && prodTypes.includes(pageId)) ? (
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
