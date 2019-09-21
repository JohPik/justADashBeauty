import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {

  const renderMe = () => {
    const { shop, prodName } = props
    const path  = props.match.path.substring(1)

    if (prodName) { //Single Product
      return (
        <section className="breadcrumb-container">
           <Link to="/">Home</Link> > <Link to="/shop/skintype=all&prodtype=all">Shop</Link> > <span>{prodName}</span>
        </section>
      )
    } else if (shop){ //Shop
      return (
        <section className="breadcrumb-container">
           <Link to="/">Home</Link> > <Link to="/shop/skintype=all&prodtype=all"><span>Shop</span></Link>
        </section>
      )
    } else { //other Pages
      return(
        <section className="breadcrumb-container">
           <Link to="/">Home</Link> > <span>{path}</span>
        </section>
      )
    }
  }

  return(
    renderMe()
  )
}
export default BreadCrumb
