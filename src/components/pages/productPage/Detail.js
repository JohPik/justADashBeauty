import React, { Fragment, Component } from 'react'
import { ProductConsumer } from '../../context'

import { prodNames } from '../../../ressources/ProductList'

import NoMatch from '../NoMatch'
import Recommendation from './Recommendation'
import ExtraContent from './ExtraContent'
import ModalCart from './ModalCart'
import BreadCrumb from '../../BreadCrumb'


class Detail extends Component {

  state = { qty: 1, pageId: ""}


  checkModal = () => this.props.value.modalAddedToCart ? this.props.value.closeModalAddedToCart() : null;

  componentWillMount(){
    this.setState({ pageId: this.props.match.params.prodId })
  }

  componentDidUpdate(){
    let { prodId } = this.props.match.params
    let { pageId } = this.state
    if (prodId === pageId) {
      return
    } else {
      this.setState({ pageId: this.props.match.params.prodId })
    }
  }

  componentWillUnmount(){
    this.checkModal()
  }

  render(){
    const { addToCart, modalAddedToCart } = this.props.value

    const openModalAddedToCart = () => this.props.value.openModalAddedToCart()

    const renderProduct = () => {
      let props = this.props
      let qty = this.state.qty
      let currentProduct = props.value.productList.filter( prod => prod.url.includes(this.state.pageId))
      let { id, name, subName, skinType, productType, description, inCart, price, img, size, loveList, ingredients, directions, color, url } = currentProduct[0]

      return (
        <Fragment>
          {modalAddedToCart ? <ModalCart /> : null}
          <BreadCrumb match={props.match} prodName={name}/>

          <section className="single-product-page">

              <div className="img-container">
                <img src={img} alt={name} className="image-thumbnail"/>
              </div>

              <div className="text-box">
                <h1 style={{ color: color }}>#{name}</h1>
                <div className="prod-page-types">
                  <h2>{subName}</h2>
                  <div className="prod-page-skins">
                    <span className="bold">{productType}</span> for <span className="bold">{skinType.join(' / ')}</span> skin
                  </div>
                  <span className="prod-page-size">{size}</span>
                </div>
                  <span className="prod-page-price">${price}</span>
                  <div className="button-section">
                    { inCart ? null :
                      <div className="prod-qty-section">
                        Qty:
                        <button className="qty-slct" disabled={ qty < 2 } onClick={ () => this.setState({ qty: this.state.qty - 1 }) }>-</button>
                          { qty }
                        <button className="qty-slct" onClick={() => this.setState({ qty: qty + 1 }) }>+</button>
                      </div>
                    }
                    <button className={`add-to-cart ${url}`} disabled={inCart} onClick={ () => { addToCart(id, qty); openModalAddedToCart() } }>
                      { inCart ? <Fragment>in Cart</Fragment> : <Fragment>Add to Cart</Fragment> }
                    </button>
                  </div>
                  <ExtraContent description={description} loveList={loveList} ingredients={ingredients} directions={directions}/>
              </div>
            </section>
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
