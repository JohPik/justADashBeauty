import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {

  const renderMe = () => {
    const { type, id, prodId } = props.match.params
    const path  = props.match.path.substring(1)

    if (type && id) { //Product Category
      return(
        <section className="breadcrumb-container">
           <Link to="/">Home</Link> > <span>{type}: {id}</span>
        </section>
      )
    } else if (prodId) { // Single Product just loaded
      const prodName = props.prodName
      return (
        <section className="breadcrumb-container">
           <Link to="/">Home</Link> > <Link to="/shop/skintype=all&prodtype=all">Shop</Link> > <span>{prodName}</span>
        </section>
      )
    } else { //Other Page
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
