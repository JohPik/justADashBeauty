import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {

  const renderMe = () => {
    const { type, id, prodId } = props.match.params
    console.log("BreadCrumb Props", props)
    if (type && id) {
      return(
        <div className="breadcrumb-container">
           I am a prodCategory
        </div>
      )
    } else if(prodId) {
      return(
        <div className="breadcrumb-container">
            I am a PRODUCT
        </div>
      )
    } else {
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
