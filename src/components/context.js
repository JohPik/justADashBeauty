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
    console.log("cookieCart", cookieCart);
    if (cookieCart) {
      this.setState({ cartCookieList: cookieCart })
    }
  }


/***!!! Modal Management !!!***/
  openModal = () => {
  this.setState({ modalOpen: true});
  setTimeout(() => this.setState({ modalOpen: false}), 5000);
  }

  closeModal = () => this.setState({ modalOpen: false})

/***!!! Rendering !!!***/
  render(){
    return (
      <ProductContext.Provider value={{
          ...this.state,
          addToCart: this.addToCart,
          getItem: this.getItem,
          openModal: this.openModal,
          closeModal: this.closeModal
          }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductProvider = withCookies(ProdProvider)

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
