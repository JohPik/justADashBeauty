import React, { useState } from 'react'
import { currentProductSelected, prodNames } from '../ressources/ProductList'

import NoMatch from './NoMatch'

const Detail = (props) => {

  // the page id Either a skin type or a product type ex: oily, dry, cleanser
  const pageId = props.match.params.id

  return ( (prodNames.includes(pageId)) ? (
      <div>
        <h2>DETAILS</h2>
        <p>{pageId}</p>
      </div>
  ) : (
    <NoMatch />
  )
    )
}

export default Detail
