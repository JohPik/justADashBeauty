import React, { Fragment, Component } from 'react'
import { ProductConsumer } from '../context'

import { prodNames } from '../../ressources/ProductList'

import NoMatch from './NoMatch'
import ModalCart from '../ModalCart'

class Detail extends Component {

  state = { qty: 1 }

  pageId = this.props.match.params.id

  checkModal = () => this.props.value.modalOpen ? this.props.value.closeModal() : null;

  componentWillUnmount(){
    this.checkModal()
  }


  render(){

    const { addToCart, modalOpen } = this.props.value

    const openModal = () => this.props.value.openModal()

    const renderProduct = () => {
      let props = this.props
      let qty = this.state.qty
      let currentProduct = props.value.productList.filter( prod => prod.url.includes(this.pageId))
      let { id, name, subName, skinType, productType, description, inCart, price} = currentProduct[0]

      return (
        <Fragment>
          <h2 className="lol">{this.modalOpen}</h2>
          <button onClick={ () => window.history.back() }>go back</button>

          <h2>{name} <span>{subName}</span></h2>
          <h3>{skinType}/{productType}</h3>
          <h3>${price}</h3>
          <p>{description}</p>

          <div className="button-section">
            { inCart ? null :
              <div className="prod-qty-section">
                { qty }
                  <button onClick={() => this.setState({ qty: qty + 1 }) }>+</button>
                <button onClick={() => this.state.qty === 1 ? null : this.setState({ qty: this.state.qty - 1 }) }>-</button>
              </div>
            }
            <button className="add-to-cart" disabled={inCart} onClick={ () => { addToCart(id, qty); openModal() } }>
              { inCart ? <p>in cart</p> : <p>Add to Cart</p> }
            </button>
          </div>
        {modalOpen ? <ModalCart /> : null}
        </Fragment>
      )
    }

    return ( (prodNames.includes(this.pageId)) ? (
          renderProduct()
      ) : (
        <NoMatch />
      )
    )
  }
}


export default React.forwardRef((props, ref) => (
  <ProductConsumer>
    {value => <Detail {...props} value={value} ref={ref} />}
  </ProductConsumer>
));
