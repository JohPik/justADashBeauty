import React, { Component } from 'react'

import { Link } from 'react-router-dom'


class ThumbnailProd extends Component {

  render(){
    const { id, name, subName, url, img, inCart } = this.props.prod
    return (
      <div key={id} className="product-container">
        <Link to={{ pathname:`/shop/product-detail/${url}` }}>
          <div className="img-container">
            <img src={img} alt={name} className="image-thumbnail"/>
          </div>
        </Link>

        <Link to={{
            pathname: `/shop/product-detail/${url}`
          }}>
        <h3>{name}</h3>
        </Link>
        <h4>{subName}</h4>
        { inCart ? <span>Alredy in cart</span> : null }
      </div>
    )
  }
}


export default ThumbnailProd
