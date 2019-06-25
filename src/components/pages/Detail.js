import React, { Fragment, Component } from 'react'
import { ProductConsumer } from '../context'

import { prodNames } from '../../ressources/ProductList'

import { Link } from 'react-router-dom'

import NoMatch from './NoMatch'
import ModalCart from '../ModalCart'
import BreadCrumb from '../BreadCrumb'

class Detail extends Component {

  state = { qty: 1 }

  pageId = this.props.match.params.prodId

  checkModal = () => this.props.value.modalOpen ? this.props.value.closeModal() : null;

  componentWillUnmount(){
    this.checkModal()
  }

  shuffle = (a) => {
    for (let i = a.length - 15; i > 0; i--) {
        const j = Math.floor(Math.random() * (3));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  render(){

    const { addToCart, modalOpen } = this.props.value

    const openModal = () => this.props.value.openModal()

    const renderProduct = () => {
      let props = this.props
      let qty = this.state.qty
      let currentProduct = props.value.productList.filter( prod => prod.url.includes(this.pageId))
      let { id, name, subName, skinType, productType, description, inCart, price, img } = currentProduct[0]
      console.log("Product props", this.props)
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
        <div className="more-products">
          <h3>you might also like</h3>
            { this.shuffle(props.value.productList).map(
              prod => {
                return (
                  <div key={prod.id} className="product-container">
                    <h3>{prod.name}</h3>
                    <h4>{prod.subName}</h4>
                    <Link to={`/catalogue/product-detail/${prod.url}`}>
                    <img src={prod.img} alt={prod.name} className="image-thumbnail"/>
                    </Link>
                  </div>
                )
              }
            )}
        </div>
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
