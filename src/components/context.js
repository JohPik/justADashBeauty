import React, { Component } from 'react'
import { productList } from '../ressources/ProductList'

const ProductContext = React.createContext()

class ProductProvider extends  Component {

  state = {
    productList: [],
    cart: [],
    modalOpen: false
  }

  componentWillMount(){
    this.setProducts()
  }

  setProducts = () => {
    let tempProducts = []
    productList.forEach( item => {
      let singleItem = { ...item }
      tempProducts = [ ...tempProducts, singleItem]
    })
    this.setState({ productList: tempProducts })
  }

  addToCart = (id, qty) => {
    let tempProducts = [ ...this.state.productList ]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = qty
    product.total = product.price * qty
    this.setState({ productList: tempProducts, cart: [ ...this.state.cart, product ]})
    // console.log(this.state);
    // this.setState( () => {
    // return {  productList: tempProducts, cart: [ ...this.state.cart, product ] }
    // }, () => console.log(this.state))
  }

  openModal = () => {
  this.setState({ modalOpen: true});
  setTimeout(() => this.setState({ modalOpen: false}), 5000);
  }

  closeModal = () => this.setState({ modalOpen: false})

  getItem = (id) => {
    const product = this.state.productList.find( item => item.id === id )
    return product
  }

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

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
