import React, { Component } from 'react'
import { ProductConsumer } from './context'
import { Link } from 'react-router-dom'

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          console.log(value);
          const { cart } = value
          const product = cart[cart.length - 1]
          if (cart.length > 0) {
            return (
              <div>
                <h3>Product has been added to the cart</h3>
                <p>{product.name}</p>
                <button>keep Shopping</button>
                <Link to="/cart"><button>Cart</button></Link>
              </div>
            )
          } else {

            return null
          }
        }
        }
      </ProductConsumer>
    )
  }
}
