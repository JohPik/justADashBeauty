import React, { Component } from 'react'
import { productList } from '../ressources/ProductList'
import { withCookies } from 'react-cookie'

const ProductContext = React.createContext()

class ProdProvider extends  Component {

  state = {
    productList: [],
    cart: [],
    cartCookieList: [],
    modalOpen: false
  }

  componentWillMount(){
    this.setProducts()
  }

  componentDidMount(){
    this.checkCookies()
  }

  setProducts = () => {
    let tempProducts = []
    productList.forEach( item => {
      let singleItem = { ...item }
      tempProducts = [ ...tempProducts, singleItem]
    })
    this.setState({ productList: tempProducts })
  }

  /***!!! Cart Management !!!***/
  addToCart = (id, qty) => {
    let tempProducts = [ ...this.state.productList ]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = qty
    product.total = product.price * qty
    //ORIGINAL DONT DELETE
    // this.setState({ productList: tempProducts, cart: [ ...this.state.cart, product ], cartCookieList: [ ...this.state.cartCookieList, id ] })
    // this.addToCookies(id)

    this.setState( () => {
    return {  productList: tempProducts, cart: [ ...this.state.cart, product ], cartCookieList: [ ...this.state.cartCookieList, {id: id, qty: qty} ] }
    }, () => this.addToCookies())

    // this.setState( () => {
    // return {  productList: tempProducts, cart: [ ...this.state.cart, product ] }
    // }, () => this.addToCookies())
    // console.log(this.state);
    // this.setState( () => {
    // return {  productList: tempProducts, cart: [ ...this.state.cart, product ] }
    // }, () => console.log(this.state))
  }

  getItem = (id) => {
    const product = this.state.productList.find( item => item.id === id )
    return product
  }

  /***!!! Cookies Management !!!***/
  addToCookies = () => {
    const { cookies } = this.props
    cookies.set('cart', this.state.cartCookieList, { path: '/' } )
  }

  checkCookies = () => {
    const cookieCart  = this.props.allCookies.cart
    // console.log("cookieCart", cookieCart);
    const cart = []

    if (cookieCart) {
      this.setState({ cartCookieList: cookieCart })
      cookieCart.map( el => {
      return cart.push(this.restoreCart(el.id, el.qty))
      })
    }
    this.setState({ cart })
  }

  restoreCart = (id, qty) => {
    let tempProducts = [ ...this.state.productList ]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = qty
    product.total = product.price * qty
    return product
  }


/* cart Management For Cart Section */

  // Need to edit this Part
  editProdQty = (index, id) => {
    console.log("the Index : ", index)
    console.log("the id : ", id)
    // let curentCart
  }

  // Delete Product from Cart, from cookies and restore default setting to productList
  deleteProd = (index, id) => {

    //delete prod from cart
    let newCart = this.state.cart
    newCart.splice(index, 1)

    //making sure prod in prod list is not in cart either
    let tempProducts = [ ...this.state.productList ]
    const prodIndex = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[prodIndex]
    product.inCart = false
    product.count = 0
    product.total = product.price

    //clear product item in cookie list
    let cookieList = this.state.cartCookieList
    cookieList.splice(index, 1)

    this.setState( () => {
    return {  productList: tempProducts, cart: newCart, cartCookieList: cookieList }
    }, () => this.addToCookies())

  }

/***!!! Modal Management !!!***/
  openModal = () => {
  const cartContainer = document.querySelector(".cart-container")
  this.setState({ modalOpen: true});
  setTimeout(() => this.setState({ modalOpen: false}), 5000);
  cartContainer.classList.add('just-added')
  setTimeout(() => cartContainer.classList.remove('just-added'), 1000);
  }

  closeModal = () => this.setState({ modalOpen: false})

/***!!! Rendering !!!***/
  render(){
    console.log("State Please", this.state);
    return (
      <ProductContext.Provider value={{
          ...this.state,
          addToCart: this.addToCart,
          getItem: this.getItem,
          openModal: this.openModal,
          closeModal: this.closeModal,
          editProdQty: this.editProdQty,
          deleteProd: this.deleteProd
          }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductProvider = withCookies(ProdProvider)

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
