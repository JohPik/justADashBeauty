import React, { Fragment, Component } from 'react';
import { ProductConsumer } from '../../context';

import { prodNames } from '../../../ressources/ProductList';
import { CSSTransition } from 'react-transition-group';

import NoMatch from '../NoMatch';
import Recommendation from './Recommendation';
import ExtraContent from './ExtraContent';
import ModalCart from './ModalCart';
import ModalImg from './ModalImg';
import BreadCrumb from '../../BreadCrumb';

class Detail extends Component {
  state = { qty: 1, pageId: '', modalImg: false };

  checkModal = () =>
    this.props.value.modalAddedToCart
      ? this.props.value.closeModalAddedToCart()
      : null;

  componentWillMount() {
    this.setState({ pageId: this.props.match.params.prodId });
  }

  componentDidUpdate() {
    let { prodId } = this.props.match.params;
    let { pageId } = this.state;
    if (prodId === pageId) {
      return;
    } else {
      this.setState({ pageId: this.props.match.params.prodId });
    }
  }

  componentWillUnmount() {
    this.checkModal();
  }

  toggleModalImg = () => {
    this.state.modalImg === true
      ? this.setState({ modalImg: false })
      : this.setState({ modalImg: true });
  };

  render() {
    const { addToCart, modalAddedToCart } = this.props.value;

    const openModalAddedToCart = () => this.props.value.openModalAddedToCart();

    const renderProduct = () => {
      let props = this.props;
      let qty = this.state.qty;
      let currentProduct = props.value.productList.filter((prod) =>
        prod.url.includes(this.state.pageId)
      );
      let {
        id,
        name,
        subName,
        skinType,
        productType,
        description,
        inCart,
        price,
        img,
        size,
        loveList,
        ingredients,
        directions,
        color,
        url,
      } = currentProduct[0];

      return (
        <Fragment>
          {this.state.modalImg ? (
            <ModalImg img={img} name={name} toggle={this.toggleModalImg} />
          ) : null}
          {modalAddedToCart ? <ModalCart /> : null}
          <BreadCrumb match={props.match} prodName={name} />
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames='fade'
          >
            <div className='animation-wrapper'>
              <section className='single-product-page'>
                <div className='img-container'>
                  <img
                    src={img}
                    alt={name}
                    className='image-thumbnail'
                    onClick={() => this.toggleModalImg()}
                  />
                </div>

                <div className='text-box'>
                  <h1 style={{ color: color }}>#{name}</h1>
                  <div className='prod-page-types'>
                    <h2>{subName}</h2>
                    <div className='prod-page-skins'>
                      <span className='bold'>{productType}</span> for{' '}
                      <span className='bold'>{skinType.join(' / ')}</span> skin
                    </div>
                    <span className='prod-page-size'>{size}</span>
                  </div>
                  <span className='prod-page-price'>${price}</span>
                  <div className='button-section'>
                    {inCart ? null : (
                      <div className='prod-qty-section'>
                        Qty:
                        <button
                          className='qty-slct'
                          disabled={qty < 2}
                          onClick={() =>
                            this.setState({ qty: this.state.qty - 1 })
                          }
                        >
                          -
                        </button>
                        {qty}
                        <button
                          className='qty-slct'
                          onClick={() => this.setState({ qty: qty + 1 })}
                        >
                          +
                        </button>
                      </div>
                    )}
                    <button
                      className={`add-to-cart ${url}`}
                      disabled={inCart}
                      onClick={() => {
                        addToCart(id, qty);
                        openModalAddedToCart();
                      }}
                    >
                      {inCart ? (
                        <Fragment>in Cart</Fragment>
                      ) : (
                        <Fragment>Add to Cart</Fragment>
                      )}
                    </button>
                  </div>
                  <ExtraContent
                    id={id}
                    description={description}
                    loveList={loveList}
                    ingredients={ingredients}
                    directions={directions}
                  />
                </div>
              </section>
              <hr />
              <Recommendation currentProduct={currentProduct[0]} />
            </div>
          </CSSTransition>
        </Fragment>
      );
    };

    return prodNames.includes(this.state.pageId) ? (
      renderProduct()
    ) : (
      <NoMatch />
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ProductConsumer>
    {(value) => <Detail {...props} value={value} ref={ref} />}
  </ProductConsumer>
));
