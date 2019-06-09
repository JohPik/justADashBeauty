import React, { Component } from 'react'
import { ProductConsumer } from './context'
import { Link } from 'react-router-dom'

export default class Modal extends Component {

render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value
          const product = cart[cart.length - 1]

          return (
            <div className="modal">
              <h3>Product has been added to the cart</h3>
              <p>{product.name}</p>
              <button onClick={()=> value.closeModal()}>
                keep Shopping
              </button>

              <button onClick={()=> value.closeModal()}>
                <Link to="/cart">
                Cart
                </Link>
              </button>
            </div>
          )
        }
      }
      </ProductConsumer>
    )
  }
}
