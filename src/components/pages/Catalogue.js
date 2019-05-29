import React from 'react'
import { Link } from 'react-router-dom'

import { ProductConsumer } from '../context'
import { skinTypes, prodTypes } from '../../ressources/ProductList'

import NoMatch from './NoMatch'

const Catalogue = (props) => {

  // the page id Either a skin type or a product type ex: oily, dry, cleanser
  const pageId = props.match.params.id
  const pageType = props.match.params.type

  const singleItem = (prod) => (
    <div key={prod.id} className="product-container">
      <h3>{prod.name}</h3>
      <h4>{prod.subName}</h4>
      <Link to={`/catalogue/product-detail/${prod.url}`}>
      <img src={prod.img} alt={prod.name} className="image-thumbnail"/>
      </Link>
    </div>
  )

  const renderList = (value) => {
    if (pageType === "skin-type") {
      return value.productList.filter( prod => prod.skinType.includes(pageId)).map(prod => singleItem(prod) )
    } else if (pageType === "product-type") {
      return value.productList.filter( prod => prod.productType.includes(pageId)).map( prod => singleItem(prod) )
    }
  }


  return ( (pageType === "skin-type" && skinTypes.includes(pageId)) || ( pageType === "product-type" && prodTypes.includes(pageId)) ? (
    <div>
      <h1>CATALOGUE</h1>
      <h2>{pageId} product</h2>
      <ProductConsumer>
        { (value) => renderList(value) }
      </ProductConsumer>
    </div>
    ):(
    <NoMatch />
    )
  )
}

export default Catalogue
