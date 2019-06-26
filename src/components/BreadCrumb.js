import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {

  const renderMe = () => {
    const { type, id, prodId } = props.match.params
    // console.log("BreadCrumb Props", props)

    if (type && id) { //Product Category
      return(
        <div className="breadcrumb-container">
           <Link to="/">Home</Link> > {type}: {id}
        </div>
      )
    } else if (prodId) { // Single Product just loaded
      const prodHistory = props.location.state
      const prodName = props.prodName
      if (prodHistory) {
        return (
          <div className="breadcrumb-container">
             <Link to="/">Home</Link> > <Link to={`/catalogue/${prodHistory.type}/${prodHistory.id}`}>{prodHistory.type}: {prodHistory.id}</Link> > {prodName}
          </div>
        )
      } else {
        return (
          <div className="breadcrumb-container">
             <Link to="/">Home</Link> > {prodName}
          </div>
        )
      }
    } else { //Other Page
      return(
        <div className="breadcrumb-container">
           <Link to="/">Home</Link>
        </div>
      )
    }
  }

  return(
    renderMe()
  )
}
export default BreadCrumb
