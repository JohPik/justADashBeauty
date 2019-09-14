import React, { Fragment } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

const Cart = () => {


  const currentCart = (cart, editProdQty, deleteProd ) => {
    return (
      <div className="current-cart-container">
        <h2>Your Cart</h2>
        { cart.length < 1 ? (
          <p className="empty-cart">Your Cart is empty time to do some <Link to="shop/skintype=all&prodtype=all">Shopping</Link></p>
          ) : (
          <div className="cart-content">
            {cart.map( (product, index) => {
              return(
                <div key={product.id} className="cart-content-single">

                  <div className="img-container">
                    <img src={product.img} alt={product.name} className="image-thumbnail"/>
                  </div>

                  <div className="prod-info-container">
                    <h3>{product.name}</h3>
                    <h4>{product.subName}</h4>
                      <div className="prod-qty-container">
                        <p>Quantity</p>
                        <button className="qty-slct" onClick={ () => editProdQty(index, product.id)}>+</button>
                          {product.count}
                        <button className="qty-slct">-</button>
                       </div>
                  </div>

                  <div className="align-right">
                    <p>AU$ {product.total}</p>
                    <button onClick={ () => deleteProd(index, product.id) } >DELETE</button>
                  </div>

                </div>
                 )}
              )}
         </div>
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
            <p className="summary-shipping">Shipping Costs <span>A$ 20.00</span></p>
            <span className="spend-more-shipping">Spend A$ { 100 - total } more and get free shipping</span>
          </Fragment>
        ) : (
          <p className="summary-shipping">Shipping Costs <span>A$ 0.00</span></p>
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
        <div className="help-links">
          <Link to="/">Shipping and Delivery</Link>
          <Link to="/">Payment and Returns</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </div>
    )
  }

  const renderCart = (value) => {
     const { cart, editProdQty, deleteProd } = value
     // Array of Prices in cart
     let priceArray = cart.map( product => product.total )
     // Sum up each Price into total price
     let total = priceArray.reduce( (sum, price) => sum + price, 0)

     return (
      <Fragment>
        { currentCart(cart, editProdQty, deleteProd ) }
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
          return renderCart(value)
          }}
        </ProductConsumer>
      </section>

    </section>
  )
}

export default Cart
