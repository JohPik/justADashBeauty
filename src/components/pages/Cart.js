import React, { Fragment } from 'react'
import { ProductConsumer } from '../context'

const Cart = () => {

  const renderProduct = (value) => {
     const { cart } = value
     return cart.length > 0 ?
    (<p>Number of product in the cart is equal to: {cart.length}</p>
    ) : ( <p>Cart is empty</p>)

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
