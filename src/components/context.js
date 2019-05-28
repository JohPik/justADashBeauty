import React, { Component } from 'react'
import { productList, skinTypes, prodTypes, prodNames } from '../ressources/ProductList'

const ProductContext = React.createContext()

class ProductProvider extends  Component {

  state = {
    productList: productList,
    skinTypes: skinTypes,
    prodTypes: prodTypes,
    prodNames: prodNames
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
