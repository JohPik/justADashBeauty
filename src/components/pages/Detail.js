import React, { Fragment, useState, useEffect } from 'react'
import { ProductConsumer } from '../context'

import { prodNames } from '../../ressources/ProductList'

import NoMatch from './NoMatch'
import ModalCart from '../ModalCart'

const Detail = (props) => {

  const [qty, setQty] = useState(1) //Page State
  // the id of the page contained in the url ex: goodByeSunshine
  const pageId = props.match.params.id

  useEffect(() => {
    const { modalOpen } = props.value
    !modalOpen ? console.log("False") : console.log("TRUE");
     console.log("props", props.value)
  }, [props.value]);


  // The actual content component rendering
  const renderProduct = () => {
    const currentProduct = props.value.productList.filter( prod => prod.url.includes(pageId))
    const { id, name, subName, skinType, productType, description, inCart, price} = currentProduct[0]

    const { addToCart, modalOpen, openModal } = props.value

    return (
      <Fragment>

        <button onClick={ () => window.history.back() }>go back</button>

        <h2>{name} <span>{subName}</span></h2>
        <h3>{skinType}/{productType}</h3>
        <h3>${price}</h3>
        <p>{description}</p>

        <div className="button-section">
          { inCart ? null :
            <div className="prod-qty-section">
              { qty }
              <button onClick={() => setQty(qty + 1)}>+</button>
              <button onClick={() => qty === 1 ? null : setQty(qty - 1)}>-</button>
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


  return ( (prodNames.includes(pageId)) ? (
        renderProduct()
    ) : (
      <NoMatch />
    )
  )
}

// export default Detail


export default React.forwardRef((props, ref) => (
  <ProductConsumer>
    {value => <Detail {...props} value={value} ref={ref} />}
  </ProductConsumer>
));
