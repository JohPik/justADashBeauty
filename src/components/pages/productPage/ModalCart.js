import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          const prod = cart[cart.length - 1];

          return (
            <div className='modal'>
              <div className='modal-container'>
                <h3>Your product as been added to the Cart</h3>

                <div className='modal-prod-info'>
                  <img
                    src={prod.img}
                    alt={`${prod.name} in cart`}
                    className='modal-img'
                  />
                  <p className='modal-name'>#{prod.name}</p>
                  <p className='modal-price'>$30</p>
                </div>

                <div className='modal-button-section'>
                  <button
                    className='keep-shopping'
                    onClick={() => value.closeModalAddedToCart()}
                  >
                    Keep Shopping
                  </button>

                  <button
                    className='go-to-cart'
                    onClick={() => value.closeModalAddedToCart()}
                  >
                    <Link to='/cart'>Go to Cart</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
