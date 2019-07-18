import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {

  const renderMe = () => {
    const { type, id, prodId } = props.match.params
    const path  = props.match.path.substring(1)
    // console.log("BreadCrumb Props", props)

    if (type && id) { //Product Category
      return(
        <section className="breadcrumb-container">
           <Link to="/">Home</Link> > <span>{type}: {id}</span>
        </section>
      )
    } else if (prodId) { // Single Product just loaded
      const prodHistory = props.location.state
      const prodName = props.prodName
      if (prodHistory) {
        return (
          <section className="breadcrumb-container">
             <Link to="/">Home</Link> > <Link to={`/catalogue/${prodHistory.type}/${prodHistory.id}`}>{prodHistory.type}: {prodHistory.id}</Link> > <span>{prodName}</span>
          </section>
        )
      } else {
        return (
          <section className="breadcrumb-container">
             <Link to="/">Home</Link> > <span>{prodName}</span>
          </section>
        )
      }
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
