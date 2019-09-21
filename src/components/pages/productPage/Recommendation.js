import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'

import { productList } from '../../../ressources/ProductList'

class Recommendation extends PureComponent {

  shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a.slice(0, 3)
  }

  /***!!! Smooth Scrolling !!!***/
  smoothScrolling = (el, duration) => {
    let target = document.querySelector(el)
    let targetPostion = target.getBoundingClientRect().top
    const startPosition = window.pageYOffset
    const distance = targetPostion - startPosition
    let startTime = null

    const animation = (currentTime) => {
      if (startTime === null) { startTime = currentTime }
      const timeElpased = currentTime - startTime
      const run = ease(timeElpased, startPosition, distance, duration )
      window.scrollTo(0,run)
      if (timeElpased < duration) {
        window.requestAnimationFrame(animation)
      }
    }

    // from http://www.gizma.com/easing/
    const ease = (t, b, c, d) => {
    	t /= d
    	return -c * t*(t-2) + b
    }

    window.requestAnimationFrame(animation)

  }



  render(){
    const { currentProduct } = this.props

    // productList without currentProduct
    let filteredProdList = productList.filter( prod => (prod.id !== currentProduct.id) )

    return (
      <div className="recommendation">
        <h2>you might also like</h2>
          <div className="recommendation-container">
            { this.shuffle(filteredProdList).map(
              prod => {
                return (
                  <div key={prod.id} className="product-container">
                    <Link to={`/shop/product-detail/${prod.url}`}>
                      <div className="img-container"
                           onClick={ () => this.smoothScrolling('.main', 1000) } >
                        <img src={prod.img} alt={prod.name} className="image-thumbnail"/>
                      </div>
                    </Link>


                    <Link to={`/shop/product-detail/${prod.url}`}>
                    <h3 onClick={ () => this.smoothScrolling('.main', 1000) }>#{prod.name}</h3>
                    </Link>
                    <h4>{prod.subName}</h4>
                  </div>
                )
              }
            )}
          </div>
      </div>
    )
  }
}

export default Recommendation
