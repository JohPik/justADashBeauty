import React, { useState } from 'react';
import { productList } from '../ressources/ProductList'

const Catalogue = () => {

 const [prodList, setProdList] = useState(productList);

  return(
    <div>
      <h1>CATALOGUE</h1>
      {prodList.map((prod) => {
        return (
          <h3>{prod.name}</h3>
        )
      })}
    </div>
  )
}

export default Catalogue
