import React, { Fragment, useState, useEffect } from 'react'

import { productList, prodNames } from '../../ressources/ProductList'
import NoMatch from './NoMatch'

const Detail = (props) => {
  // the id of the page contained in the url ex: goodByeSunshine
  const pageId = props.match.params.id

  // The State Mother Fucker
  const [ currentProduct, setCurrentProduct ] = useState(null)

  useEffect(
    () => {
      const product = productList.filter(
        prod => prod.url.includes(pageId)
      )
      setCurrentProduct(product[0])
          // console.log(currentProduct);
    }, [currentProduct, pageId] // Do not Understand why it does this
  )

  const addToCart = () => {
    console.log("I have been clicked");
  }

  const renderPage = () => {

    const {
      // id,
      name,
      // url,
      subName,
      skinType,
      productType,
      description,
      // loveList,
      // directions,
      // ingedients,
      // size,
      // price,
      // img,
      inCart
    } = currentProduct

    return (
      <Fragment>
        <button onClick={ () => window.history.back() }>go back</button>
        <h2>{name} <span>{subName}</span></h2>
        <h3>{skinType}/{productType}</h3>
        <p>{description}</p>
        <button disabled={inCart} onClick={ () => addToCart() }>
          { inCart ? <p>in cart</p> : <p>Add to Cart</p>}
        </button>
      </Fragment>
    )
  }

  return ( (prodNames.includes(pageId)) ? (
      !currentProduct ? <p>Loading</p> : <div>{renderPage()}</div>
  ) : (
    <NoMatch />
  )
    )
}

export default Detail
