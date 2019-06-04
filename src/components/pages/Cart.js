import React, { Fragment } from 'react'
import { ProductConsumer } from '../context'

const Cart = () => {

  const renderProduct = (value) => {

     const { cart } = value



     // Funtion in charge of counting Total
     const CountTotal = () => {
       // Array of Prices in cart
       const priceArray = cart.map( product => product.total )
       // Sum up each Price into total price
       const total = priceArray.reduce( (sum, price) => sum + price, 0)
       return total
     }



     if (cart.length > 0) {
       return (
         <Fragment>
         <h2>Number of product in the cart is equal to: {cart.length}</h2>
         <ul>
           {cart.map(product => {
             return(
               <li key={product.id}>
                 <h4>{product.name}</h4>
                 <p>Quantity: {product.count}</p>
                 <p>Product Price per unit: ${product.price}</p>
                 <p>Total Product Price: ${product.total}</p>
               </li>
                )}
             )}
         </ul>
         <h5>Total Order Price: {CountTotal()}</h5>
         </Fragment>
       )
     } else {
      return ( <p>Cart is empty</p> )
     }
    //  return cart.length > 0 ?
    // (<p>Number of product in the cart is equal to: {cart.length}</p>
    // ) : ( <p>Cart is empty</p>)
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
