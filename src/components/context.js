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

  /***!!! Cart Management in Catalogue !!!***/
  addToCart = (id, qty) => {
    let tempProducts = [ ...this.state.productList ]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = qty
    product.total = product.price * qty
    //ORIGINAL DONT DELETE
    // this.setState({ productList: tempProducts, cart: [ ...this.state.cart, product ], cartCookieList: [ ...this.state.cartCookieList, id ] })
    // this.editCartCookie(id)

    this.setState( () => {
    return {  productList: tempProducts, cart: [ ...this.state.cart, product ], cartCookieList: [ ...this.state.cartCookieList, {id: id, qty: qty} ] }
    }, () => this.editCartCookie())

    // this.setState( () => {
    // return {  productList: tempProducts, cart: [ ...this.state.cart, product ] }
    // }, () => this.editCartCookie())
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
  editCartCookie = () => {
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

  /***!!! Edit Items in Cart Element !!!***/
  incrementProdInCart = (index, id) => {
    //Increment prod qty in Cart
    let cart = this.state.cart
    let productCart = cart[index]
    productCart.count++
    productCart.total = productCart.price * productCart.count
    cart.splice(index, 1, productCart)

    //Increment prod qty in Prod List
    let productList = this.state.productList
    const prodIndex = productList.indexOf(this.getItem(id))
    productList.splice(prodIndex, 1, productCart)
    //updateCookieList
    const cartCookieList = [ ...this.state.cartCookieList ]
    cartCookieList[index].qty++

    this.setState( () => {
    return {  cart, productList, cartCookieList }
    }, () => this.editCartCookie())
  }

  /***!!! Edit Items in Cart Element !!!***/
  decrementProdInCart = (index, id) => {
    //Increment prod qty in Cart
    let cart = this.state.cart
    let productCart = cart[index]
    productCart.count--
    productCart.total = productCart.price * productCart.count
    cart.splice(index, 1, productCart)

    //Increment prod qty in Prod List
    let productList = this.state.productList
    const prodIndex = productList.indexOf(this.getItem(id))
    productList.splice(prodIndex, 1, productCart)
    //updateCookieList
    const cartCookieList = [ ...this.state.cartCookieList ]
    cartCookieList[index].qty--

    this.setState( () => {
    return {  cart, productList, cartCookieList }
    }, () => this.editCartCookie())
  }


  // Delete Product from Cart, from cookies and restore default setting to productList
  deleteProdInCart = (index, id) => {
    //delete prod from cart
    let cart = this.state.cart
    cart.splice(index, 1)

    //restore product to default in product List
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
    return {  productList: tempProducts, cart, cartCookieList: cookieList }
    }, () => this.editCartCookie())

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
    return (
      <ProductContext.Provider value={{
          ...this.state,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementProdInCart: this.incrementProdInCart,
          decrementProdInCart: this.decrementProdInCart,
          deleteProdInCart: this.deleteProdInCart
          }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductProvider = withCookies(ProdProvider)

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
