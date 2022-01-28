import React, { Component } from 'react';

export default class ModalImg extends Component {
  render() {
    return (
      <section className='prod-image-modal'>
        <div
          className='close-tag-container'
          onClick={() => this.props.toggle()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 25.01 16.91'
            alt='Close Modal'
            className='close-tag-icon'
          >
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <rect width='25.01' height='2.97' rx='1.46' className='top' />
                <rect
                  y='13.94'
                  width='25.01'
                  height='2.97'
                  rx='1.46'
                  className='bot'
                />
              </g>
            </g>
          </svg>
        </div>

        <div className='modal-img-container'>
          <img
            src={this.props.img}
            alt={this.props.name}
            className='image-full'
          />
        </div>
      </section>
    );
  }
}
