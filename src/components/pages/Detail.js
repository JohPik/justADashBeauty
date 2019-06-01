import React, { Fragment } from 'react'
import { ProductConsumer } from '../context'

import { prodNames } from '../../ressources/ProductList'

import NoMatch from './NoMatch'

const Detail = (props) => {
  // the id of the page contained in the url ex: goodByeSunshine
  const pageId = props.match.params.id

  const renderProduct = (value) => {
    const currentProduct = value.productList.filter( prod => prod.url.includes(pageId))
    // console.log(currentProduct);
    const { id, name, subName, skinType, productType, description, inCart} = currentProduct[0]
    return (
      <Fragment>
        <button onClick={ () => window.history.back() }>go back</button>
        <h2>{name} <span>{subName}</span></h2>
        <h3>{skinType}/{productType}</h3>
        <p>{description}</p>
          <button disabled={inCart} onClick={ () => value.addToCart(id) }>
            { inCart ? <p>in cart</p> : <p>Add to Cart</p>}
          </button>
      </Fragment>
    )
  }

  return ( (prodNames.includes(pageId)) ? (
        <ProductConsumer>
          {(value) => {
          return renderProduct(value)
          }}
        </ProductConsumer>

  ) : (
    <NoMatch />
  )
    )
}

export default Detail
