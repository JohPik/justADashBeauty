import React, { Component } from 'react'

export default class ModalImg extends Component {

render() {
    return (
      <section className="prod-image-modal">
      <div className="close-tag-container">
        <span className="close" onClick={()=> this.props.toggle()}>x</span>
      </div>
        <div className="modal-img-container">
          <img src={this.props.img} alt={this.props.name} className="image-full"/>
        </div>
      </section>
    )
  }
}
