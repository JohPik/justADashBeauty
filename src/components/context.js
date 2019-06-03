import React, { Component } from 'react'
import { productList } from '../ressources/ProductList'

const ProductContext = React.createContext()

class ProductProvider extends  Component {

  state = {
    productList: [],
    cart: []
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


  handleDetail = () => {
    console.log("hello from detail");
  }

  addToCart = (id, qty) => {
    let tempProducts = [ ...this.state.productList ]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = qty
    product.total = product.price * qty
    this.setState({ productList: tempProducts, cart: [ ...this.state.cart, product ]})
    console.log(this.state);
    // this.setState( () => {
    // return {  productList: tempProducts, cart: [ ...this.state.cart, product ] }
    // }, () => console.log(this.state))
  }

  getItem = (id) => {
    const product = this.state.productList.find( item => item.id === id )
    return product
  }

  render(){
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          getItem: this.getItem
          }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
