import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ThumbnailProd extends Component {
  render() {
    const { id, name, subName, url, thumbImg, inCart } = this.props.prod;
    return (
      <div key={id} className='product-container'>
        {inCart ? <div className='already-in-cart'>Already in Cart</div> : null}
        <Link to={{ pathname: `/shop/product-detail/${url}` }}>
          <div className='img-container'>
            <img src={thumbImg} alt={name} className='image-thumbnail' />
          </div>
        </Link>

        <Link
          to={{
            pathname: `/shop/product-detail/${url}`,
          }}
        >
          <h3>{name}</h3>
        </Link>
        <h4>{subName}</h4>
      </div>
    );
  }
}

export default ThumbnailProd;
