import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'

import { productList } from '../../ressources/ProductList'

class Recommendation extends PureComponent {

  shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a.slice(0, 3)
  }

  render(){
    const { currentProduct } = this.props

    // productList without currentProduct
    let filteredProdList = productList.filter( prod => (prod.id !== currentProduct.id) )

    return (
      <div className="recommendation">
        <h2>you might also like</h2>
          <div className="recommendation-container">
            { this.shuffle(filteredProdList).map(
              prod => {
                return (
                  <div key={prod.id} className="product-container">
                    <Link to={`/catalogue/product-detail/${prod.url}`}>
                      <div className="img-container">
                        <img src={prod.img} alt={prod.name} className="image-thumbnail"/>
                      </div>
                    </Link>

                    <Link to={`/catalogue/product-detail/${prod.url}`}>
                    <h3>#{prod.name}</h3>
                    </Link>
                    <h4>{prod.subName}</h4>
                  </div>
                )
              }
            )}
          </div>
      </div>
    )
  }
}

export default Recommendation
