import React, { Component } from 'react'

import { Link } from 'react-router-dom'


class ThumbnailProd extends Component {

  render(){
    const { id, name, subName, url, img } = this.props.prod
    return (
      <div key={id} className="product-container">
        <h3>{name}</h3>
        <h4>{subName}</h4>
        <Link to={{
            pathname: `/catalogue/product-detail/${url}`
          }}>
        <img src={img} alt={name} className="image-thumbnail"/>
        </Link>
      </div>
    )
  }
}


export default ThumbnailProd
