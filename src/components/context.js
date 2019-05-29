import React, { Component } from 'react'
import { productList } from '../ressources/ProductList'

const ProductContext = React.createContext()

class ProductProvider extends  Component {

  state = {
    productList: []
  }

  componentDidMount(){
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

  render(){
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail
          }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
