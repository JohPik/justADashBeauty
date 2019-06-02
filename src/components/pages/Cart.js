import React, { Fragment } from 'react'
import { ProductConsumer } from '../context'

const Cart = () => {

  const renderProduct = (value) => {
    return(
      <p>Number of product in the cart is equal to: {value.cart.length}</p>
    )
  }

  return(
    <Fragment>
      <h2>CART</h2>
      <ProductConsumer>
        {(value) => {
        return renderProduct(value)
        }}
      </ProductConsumer>
    </Fragment>
  )
}

export default Cart
