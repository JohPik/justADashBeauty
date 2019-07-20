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
      return
    } else {
      this.setState({ pageId: this.props.match.params.prodId })
    }
  }

  componentWillUnmount(){
    this.checkModal()
  }

  render(){
    const { addToCart, modalOpen } = this.props.value

    const openModal = () => this.props.value.openModal()

    const renderProduct = () => {
      let props = this.props
      let qty = this.state.qty
      let currentProduct = props.value.productList.filter( prod => prod.url.includes(this.state.pageId))
      let { id, name, subName, skinType, productType, description, inCart, price, img, size, loveList, ingredients, directions, color, url } = currentProduct[0]

      /* Toglle Extra Content */
      let extraContent = document.querySelectorAll(".text-dropdown")
      let descr = extraContent[0]
      let ingred = extraContent[1]
      let direct = extraContent[2]

      let extraContentLabel = document.querySelectorAll(".extra-content h3")
      let descrLabel = extraContentLabel[0]
      let ingredLabel = extraContentLabel[1]
      let directLabel = extraContentLabel[2]

      /* Manages Extra Content Sections*/
      let openExtraContent = (content, label) => {
        // Manage Section
        extraContent.forEach( (el) => {
          el.classList.remove("open")
        } )
        content.classList.add("open");
        // Manage "Link"
        extraContentLabel.forEach( (el) => {
          el.classList.add("closed")
        } )
        label.classList.remove("closed");
      }

      return (
        <Fragment>
          {modalOpen ? <ModalCart /> : null}
          <BreadCrumb match={props.match} location={props.location} prodName={name}/>

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
                        <button className="qty-slct" onClick={() => this.setState({ qty: qty + 1 }) }>+</button>
                          { qty }
                        <button className="qty-slct" onClick={() => this.state.qty === 1 ? null : this.setState({ qty: this.state.qty - 1 }) }>-</button>
                      </div>
                    }
                    <button className={`add-to-cart ${url}`} disabled={inCart} onClick={ () => { addToCart(id, qty); openModal() } }>
                      { inCart ? <Fragment>in cart</Fragment> : <Fragment>Add to Cart</Fragment> }
                    </button>
                  </div>

                  <div className="extra-content-section">
                    <div className="extra-content">
                      <h3 onClick={ () => openExtraContent(descr, descrLabel) }>Description</h3>
                      <div className="text-dropdown open">
                        <p>
                          {description}
                        </p>
                          Why we love it:
                          <ul className="loveList">
                            {loveList.map( (li, index) => <li key={index}>{li}</li>)}
                          </ul>
                      </div>
                    </div>

                    <div className="extra-content">
                      <h3 className="closed" onClick={ () => openExtraContent(ingred, ingredLabel) }>Ingredients</h3>
                      <div className="text-dropdown">
                        <p>{ingredients}</p>
                      </div>
                    </div>

                    <div className="extra-content">
                      <h3 className="closed" onClick={ () => openExtraContent(direct, directLabel) }>Directions</h3>
                      <div className="text-dropdown">
                        <p>{directions}</p>
                      </div>
                    </div>
                  </div>

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
