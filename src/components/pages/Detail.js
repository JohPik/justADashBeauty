import React, { Fragment, Component } from 'react'
import { ProductConsumer } from '../context'

import { prodNames } from '../../ressources/ProductList'

import NoMatch from './NoMatch'
import Recommendation from './Recommendation'
import ModalCart from '../ModalCart'
import BreadCrumb from '../BreadCrumb'


class Detail extends Component {

  state = { qty: 1, location: "hello", pageId: ""}


  checkModal = () => this.props.value.modalOpen ? this.props.value.closeModal() : null;

  componentWillMount(){
    this.setState({ pageId: this.props.match.params.prodId })
  }

  componentDidUpdate(){
    let { prodId } = this.props.match.params
    let { pageId } = this.state
    if (prodId === pageId) {
      console.log("no Commenet")
    } else {
      this.setState({ pageId: this.props.match.params.prodId })
    }
  }

  componentWillUnmount(){
    this.checkModal()
  }

  render(){
    console.log("I just rendered Again");
    const { addToCart, modalOpen } = this.props.value

    const openModal = () => this.props.value.openModal()

    const renderProduct = () => {
      let props = this.props
      let qty = this.state.qty
      let currentProduct = props.value.productList.filter( prod => prod.url.includes(this.state.pageId))
      let { id, name, subName, skinType, productType, description, inCart, price, img } = currentProduct[0]

      console.log(this.state.pageId);
      console.log("currentProduct", currentProduct[0]);

      return (
        <Fragment>
          <BreadCrumb match={props.match} location={props.location} prodName={name}/>
          <h2>{name} <span>{subName}</span></h2>
          <h4 className="prod-page-skin-type">Skin Type: {skinType.join(', ')}</h4>
          <h4 className="prod-page-prod-type">Prod Type: {productType}</h4>
          <h4 className="prod-page-price">${price}</h4>
          <img src={img} alt={name} className="image-thumbnail"/>
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
        <hr />
        <Recommendation currentProduct={currentProduct[0]} />
        </Fragment>
      )
    }

    return ( (prodNames.includes(this.state.pageId)) ? (
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
