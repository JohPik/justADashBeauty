import React, { Fragment, useState } from 'react'
import { ProductConsumer } from '../context'

import { prodNames } from '../../ressources/ProductList'

import NoMatch from './NoMatch'

const Detail = (props) => {
  // The STATE MOTHER FUCKER
  const [qty, setQty] = useState(1);

  // the id of the page contained in the url ex: goodByeSunshine
  const pageId = props.match.params.id

  const renderProduct = (value) => {
    const currentProduct = value.productList.filter( prod => prod.url.includes(pageId))
    // console.log(currentProduct);
    const { id, name, subName, skinType, productType, description, inCart, price} = currentProduct[0]

    return (
      <Fragment>

        <button onClick={ () => window.history.back() }>go back</button>

        <h2>{name} <span>{subName}</span></h2>
        <h3>{skinType}/{productType}</h3>
        <h3>${price}</h3>
        <p>{description}</p>

        <div className="button-section">
          <div className="prod-qty-section">
            { qty }
            <button onClick={() => setQty(qty + 1)}>+</button>
            <button onClick={() => setQty(qty - 1)}>-</button>
          </div>
          <button className="add-to-cart" disabled={inCart} onClick={ () => value.addToCart(id, qty) }>
            { inCart ? <p>in cart</p> : <p>Add to Cart</p> }
          </button>
        </div>

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
