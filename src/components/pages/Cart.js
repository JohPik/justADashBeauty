import React, { Fragment } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

const Cart = () => {


  const currentCart = (cart) => {
    return (
      <div className="current-cart-container">
        <h2>Your Cart</h2>
        { cart.length < 0 ? (
          <p>Cart is empty</p>
          ) : (
            <Fragment>
            <p className="underline">Number of product in the cart is equal to: {cart.length}</p>
            <hr/>
            <section className="cart-content">
              {cart.map(product => {
                return(
                  <div key={product.id} className="cart-content-single">

                    <div className="img-container">
                      <img src={product.img} alt={product.name} className="image-thumbnail"/>
                    </div>

                    <div className="prod-info-container">
                      <h3>{product.name}</h3>
                      <h4>{product.subName}</h4>
                    </div>

                     <p>A${product.price} <span>(Unit Price)</span></p>

                      <div className="prod-qty-container">
                        <p>Quantity</p>
                        <button className="qty-slct">+</button>
                          {product.count}
                        <button className="qty-slct">-</button>
                       </div>

                    <p>Total Product Price: ${product.total}</p>

                    <span>DELETE</span>

                  </div>
                   )}
                )}
           </section>

            </Fragment>
        )}
      </div>
    )
  }

  const summary = (total) => {
    return (
      <div className="summary-container">
        <h2>Summary</h2>
        <p className="summary-subtotal">Subtotal <span>A$ {total}</span></p>
        { total < 100 ? (
          <Fragment>
            <p className="summary-shipping">ShippingCosts <span>A$ 20.00</span></p>
            <span>Spend A$ { 100 - total } more and get free shipping</span>
          </Fragment>
        ) : (
          <p className="summary-shipping">ShippingCosts <span>A$ 0.00</span></p>
        )}
        <p className="summary-total">Total <span>A$ {total}</span></p>
        <button className="paypal-button">Checkout with Paypal</button>
      </div>
    )
  }

  const help = () => {
    return (
      <div className="help-container">
        <h2>Help</h2>
        <Link to="/">Shipping and Delivery</Link>
        <Link to="/">Payment and Returns</Link>
        <Link to="/">Contact Us</Link>
      </div>
    )
  }

  const renderCart = (value) => {
     const { cart } = value
     // Array of Prices in cart
     let priceArray = cart.map( product => product.total )
     // Sum up each Price into total price
     let total = priceArray.reduce( (sum, price) => sum + price, 0)

     return (
      <Fragment>
        { currentCart(cart) }
        <div className="cart-sidebar">
          { summary(total) }
          { help() }
        </div>
      </Fragment>
     )
  }

  return(
    <section className="cart">
       <h1 className="underline">Cart</h1>

     <section className="delivery-container">
         <p>Free Delivery</p>
         Applies to any orders of A$50 or more. Returns Policy are the same. <Link to="/">View Detail</Link>
     </section>

      <section className="main-cart-container">
        <ProductConsumer>
          {(value) => {
          console.log(value)
          return renderCart(value)
          }}
        </ProductConsumer>
      </section>

    </section>
  )
}

export default Cart
