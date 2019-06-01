import React, { Component } from 'react'
import { productList } from '../ressources/ProductList'

const ProductContext = React.createContext()

class ProductProvider extends  Component {

  state = {
    productList: []
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

  addToCart = (id) => {
    console.log(`added to the cart - Product ID: ${id}`);
  }

  getItem = (id) => {
    const product = this.state.productList.find( item => item.id === id )
    console.log(product);
    // return product
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
